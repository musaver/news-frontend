'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

interface Comment {
  id: string;
  articleId: string;
  userId: string;
  userName?: string;
  userImage?: string;
  parentId: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  replies?: Comment[];
}

interface CommentsSectionProps {
  articleId: string;
  initialComments?: Comment[];
  initialCommentsCount?: number;
}

export default function CommentsSection({ articleId, initialComments = [], initialCommentsCount = 0 }: CommentsSectionProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [isLoading, setIsLoading] = useState(false);
  const [totalComments, setTotalComments] = useState(initialCommentsCount);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/comments?articleId=${articleId}`);
      const data = await response.json();

      if (data.success) {
        setComments(data.comments || []);
        setTotalComments(data.totalComments || 0);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch if we don't have initial data or if there might be comments
    if (initialComments.length === 0 && initialCommentsCount > 0) {
      fetchComments();
    }
  }, [articleId]);

  const handleCommentAdded = () => {
    fetchComments();
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Comments {totalComments > 0 && `(${totalComments})`}
        </h2>
        <p className="text-gray-600">
          {session
            ? 'Share your thoughts on this article'
            : 'Sign in to join the conversation'}
        </p>
      </div>

      {/* Comment Form - Only show for logged-in users */}
      {session ? (
        <div className="mb-8">
          <CommentForm articleId={articleId} onCommentAdded={handleCommentAdded} />
        </div>
      ) : (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4">You must be signed in to post a comment.</p>
          <button
            onClick={handleSignIn}
            className="px-6 py-2 bg-[#cc0000] text-white rounded-lg font-medium hover:bg-[#b30000] transition-colors"
          >
            Sign In to Comment
          </button>
        </div>
      )}

      {/* Comments List */}
      {isLoading && comments.length === 0 ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#cc0000] border-r-transparent"></div>
          <p className="mt-3 text-gray-600">Loading comments...</p>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No comments yet</h3>
          <p className="mt-1 text-gray-500">
            {session ? 'Be the first to share your thoughts!' : 'Sign in to start the conversation.'}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onCommentAdded={handleCommentAdded} />
          ))}
        </div>
      )}
    </div>
  );
}
