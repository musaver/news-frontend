import React from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';
import GoldLiveRatesWidget from './GoldLiveRatesWidget';

interface FinanceSidebarProps {
  mockImages: {
    finance: string;
  };
  articles: Article[];
  title?: string;
}

const FinanceSidebar = ({ mockImages, articles, title = "Finance" }: FinanceSidebarProps) => {
  const displayArticles = articles.slice(0, 8);

  return (
    <aside className="w-[306px]">
      <div className="space-y-6">
        <GoldLiveRatesWidget />
        {displayArticles[0] && (
          <Link href={`/news-details/${displayArticles[0].id}`} className="block rounded-lg overflow-hidden h-[250px]">
            <img
              src={displayArticles[0]?.coverImage || mockImages.finance}
              alt={title}
              className="w-full h-full object-cover"
            />
          </Link>
        )}
        <div>
          <SectionHeader title={title} showViewAll={true} />
          <div className="space-y-4 mt-4">
            {displayArticles.map((article, index) => (
              <div key={article.id || index} className="border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 text-xs mb-1">
                  <span className="text-slate-500">{article.category}</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                </div>
                <Link href={`/news-details/${article.id}`}>
                  <h4 className="text-lg leading-tight hover:text-[#cc0000] transition-colors">{article.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FinanceSidebar;
