import React from 'react';
import Link from 'next/link';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface PoliticsNewsSectionProps {
  mockImages: {
    politicsSmall1: string;
    politicsSmall2: string;
    politicsSmall3: string;
    politicsSmall4: string;
  };
  articles: Article[];
}

const PoliticsNewsSection = ({ mockImages, articles }: PoliticsNewsSectionProps) => {
  const displayArticles = articles.slice(0, 4);
  const fallbackImages = [
    mockImages.politicsSmall1,
    mockImages.politicsSmall2,
    mockImages.politicsSmall3,
    mockImages.politicsSmall4
  ];

  return (
    <section className="bg-white/20 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.04)] py-6">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
          <div className="w-1 h-4 bg-[#cc0000]"></div>
          <h2 className="text-[12.7px] leading-[19px] md:text-lg font-normal">Politics</h2>
          <div className="flex-1 h-px bg-slate-300/35"></div>
          <Link href="/category/politics" className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal hover:text-[#cc0000] transition-colors cursor-pointer">
            <span>view all</span>
            <div className="w-2.5 h-2.5"></div>
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 max-w-[480px] mx-auto">
          {displayArticles.map((article, index) => (
            <article key={article.id || index} className="flex gap-2">
              <Link href={`/news-details/${article.id}`} className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                <img
                  src={article.coverImage || fallbackImages[index % fallbackImages.length]}
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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
          {displayArticles.map((article, index) => (
            <article key={article.id || index} className="flex gap-3">
              <Link href={`/news-details/${article.id}`} className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                <img
                  src={article.coverImage || fallbackImages[index % fallbackImages.length]}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">{article.category}</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                </div>
                <Link href={`/news-details/${article.id}`}>
                  <h3 className="text-sm leading-tight font-medium hover:text-[#cc0000] transition-colors">{article.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliticsNewsSection;
