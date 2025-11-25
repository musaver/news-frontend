'use client'

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/homepage';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  articleId: string;
  articleTitle: string;
  userName: string;
  userImage: string | null;
  userId: string;
  parentId: string | null;
}

export default function AuthorCommentsPage() {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/author/comments');
      const data = await response.json();

      if (data.success) {
        setComments(data.comments);
      } else {
        setError(data.error || 'Failed to fetch comments');
      }
    } catch (err) {
      setError('Failed to fetch comments');
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DashboardLayout activeTab="comments">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-normal">
            Comments on Your Articles
          </h1>
          <div className="text-[#657285] text-[14px]">
            Total: <span className="font-semibold text-[#020a1c]">{comments.length}</span> comments
          </div>
        </div>

        {loading ? (
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center justify-center py-12">
              <div className="text-[#657285] text-[14px]">Loading comments...</div>
            </div>
          </div>
        ) : error ? (
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center justify-center py-12">
              <div className="text-red-600 text-[14px]">{error}</div>
            </div>
          </div>
        ) : comments.length === 0 ? (
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-[#657285] text-[14px] mb-2">No comments yet</div>
              <div className="text-[#657285] text-[12px]">
                Comments on your published articles will appear here
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="space-y-4">
              {comments.map(comment => (
                <div key={comment.id} className="p-4 bg-[#f7fafc] rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    {comment.userImage ? (
                      <img
                        src={comment.userImage}
                        alt={comment.userName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-[14px] font-medium">
                        {getInitials(comment.userName)}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-[#020a1c] text-[14px] font-medium">
                        {comment.userName}
                      </p>
                      <p className="text-[#657285] text-[12px]">
                        {getTimeAgo(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  {comment.parentId && (
                    <div className="mb-2">
                      <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[11px] rounded">
                        Reply
                      </span>
                    </div>
                  )}
                  <p className="text-[#020a1c] text-[14px] leading-[22px] mb-2">
                    {comment.content}
                  </p>
                  <Link
                    href={`/news-details/${comment.articleId}`}
                    className="text-[#0066ff] text-[12px] hover:underline inline-block mb-3"
                  >
                    On article: {comment.articleTitle}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
