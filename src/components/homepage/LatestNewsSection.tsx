'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface LatestNewsSectionProps {
  mockImages: {
    healthNews: string;
    fashionNews: string;
    realEstateNews: string;
    travel: string;
  };
  articles: Article[];
  title?: string;
}

const LatestNewsSection = ({ mockImages, articles, title = "Latest News" }: LatestNewsSectionProps) => {
  // State to track how many articles to show
  const [visibleCount, setVisibleCount] = useState(12);

  // Get fallback images based on category
  const getFallbackImage = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'Health': mockImages.healthNews,
      'Fashion': mockImages.fashionNews,
      'Real Estate': mockImages.realEstateNews,
      'Travel': mockImages.travel,
    };
    return categoryMap[category] || mockImages.healthNews;
  };

  // For mobile: show 12 articles initially, for desktop: show 10 articles initially
  const mobileArticles = articles.slice(0, Math.min(visibleCount, articles.length));
  const desktopArticles = articles.slice(0, Math.min(visibleCount, articles.length));

  // Function to load more articles
  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  // Check if there are more articles to load
  const hasMore = visibleCount < articles.length;

  return (
    <section className="max-w-[917px] md:max-w-none">
      <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
        <div className="w-1 h-4 bg-[#cc0000]"></div>
        <h2 className="text-lg leading-[19px] md:text-lg font-normal">{title}</h2>
        <div className="flex-1 h-px bg-slate-300/35"></div>
        <Link href="/articles" className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal hover:text-[#cc0000] transition-colors cursor-pointer">
          <span>View all</span>
          <div className="w-2.5 h-2.5"></div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {mobileArticles.map((article, index) => (
          <article key={article.id || index} className="flex gap-2">
            <Link href={`/news-details/${article.id}`} className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
              <img
                src={article.coverImage || getFallbackImage(article.category)}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 text-[10.9px]">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
              </div>
              <Link href={`/news-details/${article.id}`}>
                <h3 className="text-[14.8px] leading-[20px] font-normal hover:text-[#cc0000] transition-colors">{article.title}</h3>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {desktopArticles.map((article, index) => (
          <article key={article.id || index} className="space-y-3">
            <Link href={`/news-details/${article.id}`} className="block rounded-lg overflow-hidden h-[200px]">
              <img
                src={article.coverImage || getFallbackImage(article.category)}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="space-y-2 px-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
              </div>
              <Link href={`/news-details/${article.id}`}>
                <h3 className="text-lg leading-tight font-medium hover:text-[#cc0000] transition-colors">{article.title}</h3>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-[#cc0000] text-white rounded-lg hover:bg-[#aa0000] transition-colors font-medium"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestNewsSection;
