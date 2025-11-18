'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import CommentForm from './CommentForm';

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

interface CommentItemProps {
  comment: Comment;
  onCommentAdded: () => void;
}

export default function CommentItem({ comment, onCommentAdded }: CommentItemProps) {
  const { data: session } = useSession();
  const [showReplyForm, setShowReplyForm] = useState(false);

  const formatDate = (date: Date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const diffInMs = now.getTime() - commentDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return commentDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: commentDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
    });
  };

  const handleReplyAdded = () => {
    setShowReplyForm(false);
    onCommentAdded();
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          {comment.userImage ? (
            <img
              src={comment.userImage}
              alt={comment.userName || 'User'}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-semibold text-sm">
              {getInitials(comment.userName || 'User')}
            </div>
          )}
        </div>

        {/* Comment Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-gray-900">
                {comment.userName || 'Anonymous User'}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="text-gray-800 whitespace-pre-wrap break-words">{comment.content}</p>
          </div>

          {/* Reply Button */}
          {session && (
            <div className="mt-2 ml-2">
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="text-sm font-medium text-[#cc0000] hover:text-[#b30000] transition-colors"
              >
                {showReplyForm ? 'Cancel' : 'Reply'}
              </button>
            </div>
          )}

          {/* Reply Form */}
          {showReplyForm && (
            <div className="mt-3 ml-2">
              <CommentForm
                articleId={comment.articleId}
                parentId={comment.id}
                onCommentAdded={handleReplyAdded}
                onCancel={() => setShowReplyForm(false)}
                placeholder={`Reply to ${comment.userName || 'this comment'}...`}
              />
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-2 space-y-4 border-l-2 border-gray-200 pl-4">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} onCommentAdded={onCommentAdded} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
