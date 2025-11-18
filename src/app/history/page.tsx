'use client'

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/homepage';

interface ArticleVisit {
  id: string;
  articleId: string;
  visitedAt: Date;
  article: {
    id: string;
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    publishedAt: Date | null;
    category: string;
    categoryId: number;
    author: {
      id: string;
      name: string | null;
      image: string | null;
    } | null;
  };
}

export default function HistoryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [visits, setVisits] = useState<ArticleVisit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    // Fetch visit history once authenticated
    if (status === 'authenticated') {
      fetchVisitHistory();
    }
  }, [status, router]);

  const fetchVisitHistory = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/article-visits');

      if (!response.ok) {
        throw new Error('Failed to fetch visit history');
      }

      const data = await response.json();
      setVisits(data.visits || []);
    } catch (err) {
      console.error('Error fetching visit history:', err);
      setError('Failed to load your reading history. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const visitDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - visitDate.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;

    return visitDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleViewArticle = (articleId: string) => {
    router.push(`/news/${articleId}`);
  };

  return (
    <DashboardLayout activeTab="history">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Reading History
        </h1>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#cc0000] border-r-transparent"></div>
            <p className="mt-4 text-[#657285]">Loading your reading history...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && visits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#657285] text-lg">No reading history yet.</p>
            <p className="text-[#657285] text-sm mt-2">Start reading articles to see your history here.</p>
          </div>
        )}

        {/* List of History Items */}
        {!loading && !error && visits.length > 0 && (
          <div className="space-y-4">
            {visits.map(visit => (
              <div key={visit.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#657285] bg-white border border-[rgba(203,213,225,0.35)] rounded mb-2">
                      {visit.article.category}
                    </span>
                    <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-bold mb-2">
                      {visit.article.title}
                    </h3>
                    {visit.article.excerpt && (
                      <p className="text-[#657285] text-[14px] leading-[20px] mb-2 line-clamp-2">
                        {visit.article.excerpt}
                      </p>
                    )}
                    <p className="text-[#657285] text-[13px] leading-[18px]">
                      Visited {formatTimeAgo(visit.visitedAt)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewArticle(visit.articleId)}
                    className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors whitespace-nowrap"
                  >
                    View Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
