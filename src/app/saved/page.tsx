'use client'

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from '@/components/homepage';

// SVG Icons
const BookmarkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>
);

interface SavedArticle {
  id: string;
  articleId: string;
  savedAt: Date;
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

export default function SavedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    // Fetch saved articles
    const fetchSavedArticles = async () => {
      if (status === 'authenticated') {
        try {
          const response = await fetch('/api/saved-articles');
          if (response.ok) {
            const data = await response.json();
            setSavedArticles(data.savedArticles);
          } else {
            console.error('Error fetching saved articles');
          }
        } catch (error) {
          console.error('Error fetching saved articles:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSavedArticles();
  }, [status, router]);

  const handleUnsave = async (articleId: string) => {
    try {
      const response = await fetch(`/api/saved-articles?articleId=${articleId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the article from the list
        setSavedArticles(savedArticles.filter(item => item.articleId !== articleId));
      } else {
        console.error('Error unsaving article');
      }
    } catch (error) {
      console.error('Error unsaving article:', error);
    }
  };

  const formatSavedDate = (date: Date | null | undefined): string => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading || status === 'loading') {
    return (
      <DashboardLayout activeTab="saved">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-[#657285] text-[16px]">Loading saved articles...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeTab="saved">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
            Saved Articles
          </h1>
          <p className="text-[#657285] text-[14px]">
            {savedArticles.length} {savedArticles.length === 1 ? 'article' : 'articles'} saved
          </p>
        </div>

        {/* Empty State */}
        {savedArticles.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <BookmarkIcon className="w-16 h-16 text-[#cbd5e1] mb-4" />
            <h2 className="text-[#020a1c] text-[20px] font-semibold mb-2">No saved articles yet</h2>
            <p className="text-[#657285] text-[14px] mb-6">
              Start saving articles you&apos;d like to read later
            </p>
            <Link href="/" className="px-4 py-2 bg-[#cc0000] text-white rounded-md hover:bg-[#b30000] transition-colors">
              Explore Articles
            </Link>
          </div>
        )}

        {/* Grid of Saved Articles */}
        {savedArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedArticles.map(item => (
              <div key={item.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#657285] bg-white border border-[rgba(203,213,225,0.35)] rounded mb-3">
                  {item.article.category}
                </span>
                <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-bold mb-2">
                  {item.article.title}
                </h3>
                <p className="text-[#657285] text-[13px] leading-[18px] mb-4">
                  Saved on {formatSavedDate(item.savedAt)}
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/news-details/${item.article.id}`}
                    className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Read
                  </Link>
                  <button
                    onClick={() => handleUnsave(item.articleId)}
                    className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                    title="Remove from saved"
                  >
                    <BookmarkIcon className="w-4 h-4" />
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
