'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardLayout from '@/components/homepage/DashboardLayout';

// SVG Icons
const EyeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Share2Icon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const PlusCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const EditIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Trash2Icon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

interface Article {
  id: string;
  title: string;
  status: string;
  category: string;
  createdAt: string;
  publishedAt: string | null;
  views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
}

export default function ArticlesPage() {
  const router = useRouter();
  const [articleFilter, setArticleFilter] = useState('published');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/articles');

      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      setArticles(data.articles || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (!confirm('Are you sure you want to delete this article?')) {
      return;
    }

    try {
      const response = await fetch(`/api/articles/${articleId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete article');
      }

      // Refresh the articles list
      fetchArticles();
    } catch (err) {
      console.error('Error deleting article:', err);
      alert('Failed to delete article. Please try again.');
    }
  };

  const filteredArticles = articles.filter(article => {
    if (articleFilter === 'published') return article.status === 'published';
    if (articleFilter === 'drafts') return article.status === 'draft';
    if (articleFilter === 'under_review') return article.status === 'under_review';
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <DashboardLayout activeTab="articles">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-normal">
            My Articles
          </h1>
          <Link href="/create-article" className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors flex items-center gap-2">
            <PlusCircleIcon className="w-4 h-4" />
            Create New Article
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border border-[rgba(203,213,225,0.35)] rounded-lg p-1 inline-flex gap-1">
          <button
            onClick={() => setArticleFilter('published')}
            className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${articleFilter === 'published' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
          >
            Published ({articles.filter(a => a.status === 'published').length})
          </button>
          <button
            onClick={() => setArticleFilter('drafts')}
            className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${articleFilter === 'drafts' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
          >
            Drafts ({articles.filter(a => a.status === 'draft').length})
          </button>
          <button
            onClick={() => setArticleFilter('under_review')}
            className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${articleFilter === 'under_review' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
          >
            Under Review ({articles.filter(a => a.status === 'under_review').length})
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#cc0000] mx-auto mb-4"></div>
            <p className="text-[#657285]">Loading articles...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Articles List */}
        {!loading && !error && (
          <div className="space-y-4">
            {filteredArticles.length === 0 ? (
              <div className="bg-white p-12 border border-[rgba(203,213,225,0.35)] rounded-[12px] text-center">
                <p className="text-[#657285] text-[16px]">
                  No {articleFilter === 'published' ? 'published' : articleFilter === 'drafts' ? 'draft' : 'under review'} articles found.
                </p>
                <Link href="/create-article" className="inline-block mt-4 px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors">
                  Create your first article
                </Link>
              </div>
            ) : (
              filteredArticles.map(article => (
                <div key={article.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium border border-[rgba(203,213,225,0.5)] rounded">
                          {article.category}
                        </span>
                        <span className="text-[#657285] text-[12px]">
                          {formatDate(article.publishedAt || article.createdAt)}
                        </span>
                      </div>
                      <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-normal mb-3">
                        {article.title}
                      </h3>

                      {article.status === 'published' && (
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <EyeIcon className="w-4 h-4" />
                            {(article.views || 0).toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <HeartIcon className="w-4 h-4" />
                            {(article.likes || 0).toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <MessageSquareIcon className="w-4 h-4" />
                            {(article.comments || 0).toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <Share2Icon className="w-4 h-4" />
                            {(article.shares || 0).toLocaleString()}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => router.push(`/articles/${article.id}/edit`)}
                        className="px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors flex items-center gap-2"
                      >
                        <EditIcon className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        className="p-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
