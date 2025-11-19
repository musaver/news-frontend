'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/homepage';

interface AnalyticsStats {
  totalArticles: number;
  avgViewsPerArticle: number;
  engagementRate: number;
  totalViews: number;
}

interface TopArticle {
  id: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  categoryName: string;
  viewCount: number;
}

export default function AuthorAnalyticsPage() {
  const [stats, setStats] = useState<AnalyticsStats>({
    totalArticles: 0,
    avgViewsPerArticle: 0,
    engagementRate: 0,
    totalViews: 0,
  });
  const [topArticles, setTopArticles] = useState<TopArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/author/analytics-stats');
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
          setTopArticles(data.topArticles);
        }
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalyticsData();
  }, []);

  // Helper function to format date
  const formatDate = (dateString: string | Date | null): string => {
    if (!dateString) return 'Not published';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout activeTab="analytics">
      <div className="space-y-6">
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Performance Analytics
        </h1>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#cc0000] border-r-transparent"></div>
            <p className="mt-4 text-[#657285]">Loading analytics...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <h3 className="text-[#657285] text-[14px] mb-2">
                  Avg. Views per Article
                </h3>
                <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
                  {stats.avgViewsPerArticle.toLocaleString()}
                </p>
                <p className="text-[#657285] text-[13px] font-medium mt-2">
                  Total articles: {stats.totalArticles}
                </p>
              </div>

              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <h3 className="text-[#657285] text-[14px] mb-2">
                  Engagement Rate
                </h3>
                <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
                  {stats.engagementRate}%
                </p>
                <p className="text-[#657285] text-[13px] font-medium mt-2">
                  Articles with page visits
                </p>
              </div>

              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <h3 className="text-[#657285] text-[14px] mb-2">
                  Total Articles
                </h3>
                <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
                  {stats.totalArticles}
                </p>
                <p className="text-[#657285] text-[13px] font-medium mt-2">
                  Total views: {stats.totalViews.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-4">
                Top Performing Articles
              </h3>
              {topArticles.length === 0 ? (
                <p className="text-[#657285] text-[14px]">No articles with views yet.</p>
              ) : (
                <div className="space-y-3">
                  {topArticles.map(article => (
                    <Link
                      href={`/articles/${article.id}`}
                      key={article.id}
                      className="flex items-center justify-between p-3 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-[#020a1c] text-[14px] font-medium">
                          {article.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#657285] text-[12px]">
                            {article.categoryName}
                          </span>
                          <span className="text-[#657285] text-[12px]">•</span>
                          <span className="text-[#657285] text-[12px]">
                            {formatDate(article.publishedAt || article.createdAt)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-[#020a1c] text-[16px] font-bold">
                          {article.viewCount.toLocaleString()}
                        </p>
                        <p className="text-[#657285] text-[11px]">
                          views
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
