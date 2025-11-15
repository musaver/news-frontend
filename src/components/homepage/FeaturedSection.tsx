import React from 'react';
import CategoryBadge from './CategoryBadge';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface FeaturedSectionProps {
  mockImages: {
    featuredArticle: string;
  };
  articles: Article[];
}

const FeaturedSection = ({ mockImages, articles }: FeaturedSectionProps) => {
  // Get the first article or use fallback
  const featuredArticle = articles[0];

  if (!featuredArticle) {
    return null; // Or return a placeholder
  }

  const imageUrl = featuredArticle.coverImage || mockImages.featuredArticle;
  const excerpt = featuredArticle.excerpt || featuredArticle.content.substring(0, 200) + '…';

  return (
    <section className="max-w-[917px] md:max-w-none">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        <div className="rounded-lg overflow-hidden h-[300px]">
          <img
            src={imageUrl}
            alt={featuredArticle.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-3">
            <CategoryBadge>{featuredArticle.category}</CategoryBadge>
            <ArticleDate>{formatDate(featuredArticle.publishedAt)}</ArticleDate>
          </div>
          <h1 className="text-[22px] leading-[32px] font-normal">
            {featuredArticle.title}
          </h1>
          <p className="text-slate-700 leading-[21px] text-[14.6px]">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex items-center gap-3">
            <CategoryBadge>{featuredArticle.category}</CategoryBadge>
            <ArticleDate>{formatDate(featuredArticle.publishedAt)}</ArticleDate>
          </div>
          <h1 className="text-4xl leading-tight font-semibold">
            {featuredArticle.title}
          </h1>
          <p className="leading-relaxed">
            {excerpt}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={featuredArticle.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
