import React from 'react';
import Link from 'next/link';
import CategoryBadge from './CategoryBadge';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';
import { OptimizedImage } from '@/components/OptimizedImage';

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
        <Link href={`/news-details/${featuredArticle.id}`}>
          <div className="rounded-lg overflow-hidden h-[300px]">
            <OptimizedImage
              src={imageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
              lazy={false}
            />
          </div>
        </Link>
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-3">
            <CategoryBadge>{featuredArticle.category}</CategoryBadge>
            <ArticleDate>{formatDate(featuredArticle.publishedAt)}</ArticleDate>
          </div>
          <Link href={`/news-details/${featuredArticle.id}`}>
            <h1 className="text-[22px] leading-[32px] font-normal hover:text-[#cc0000] transition-colors">
              {featuredArticle.title}
            </h1>
          </Link>
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
          <Link href={`/news-details/${featuredArticle.id}`}>
            <h1 className="text-4xl leading-tight font-semibold hover:text-[#cc0000] transition-colors">
              {featuredArticle.title}
            </h1>
          </Link>
          <p className="leading-relaxed">
            {excerpt}
          </p>
        </div>
        <Link href={`/news-details/${featuredArticle.id}`}>
          <div className="rounded-lg overflow-hidden">
            <OptimizedImage
              src={imageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
              lazy={false}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSection;
