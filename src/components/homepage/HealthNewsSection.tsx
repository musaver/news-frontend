import React from 'react';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface HealthNewsSectionProps {
  mockImages: {
    healthLarge: string;
  };
  articles: Article[];
}

const HealthNewsSection = ({ mockImages, articles }: HealthNewsSectionProps) => {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 6); // Get next 5 articles

  if (!featuredArticle) {
    return null;
  }

  const featuredImageUrl = featuredArticle.coverImage || mockImages.healthLarge;

  return (
    <section className="bg-slate-200/20 py-12 md:py-12">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
          <div className="w-1 h-4 bg-[#cc0000]"></div>
          <h2 className="text-[12.8px] leading-[19px] md:text-lg font-normal">Health</h2>
          <div className="flex-1 h-px bg-slate-300/35"></div>
          <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
            <span>view all</span>
            <div className="w-2.5 h-2.5"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden max-w-[480px] mx-auto">
          <div className="space-y-6">
            {/* Large Story */}
            <div className="relative rounded-lg overflow-hidden h-[300px]">
              <img
                src={featuredImageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, rgba(2, 10, 28, 0.8) 100%)`
                }}
              ></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-[10.9px] mb-1">
                  <span className="text-white/60">{featuredArticle.category}</span>
                  <div className="w-[3px] h-[3px] bg-white/60 rounded-full"></div>
                  <span className="text-white/60">{formatDate(featuredArticle.publishedAt)}</span>
                </div>
                <h3 className="text-[15px] leading-[19.2px] font-normal">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>

            {/* Article List */}
            <div className="space-y-6">
              {sideArticles.map((article, index) => (
                <article key={article.id || index} className="flex gap-2">
                  <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0 bg-slate-200">
                    <img
                      src={article.coverImage || mockImages.healthLarge}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-[10.9px]">
                      <span className="text-slate-500">{article.category}</span>
                      <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                      <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                    </div>
                    <h4 className="text-[14.9px] leading-[20px] font-normal">{article.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Story */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden h-[628px]">
            <img
              src={featuredImageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              style={{
                background: `linear-gradient(180deg, transparent 60%, rgba(2, 10, 28, 0.8) 100%)`
              }}
            ></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="text-white/60">{featuredArticle.category}</span>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <span className="text-white/60">{formatDate(featuredArticle.publishedAt)}</span>
              </div>
              <h3 className="text-xl leading-tight font-semibold">
                {featuredArticle.title}
              </h3>
            </div>
          </div>

          {/* Article List */}
          <div className="bg-white rounded-lg border p-5 space-y-6">
            {sideArticles.map((article, index) => (
              <article key={article.id || index} className="flex gap-3">
                <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0 bg-slate-200">
                  <img
                    src={article.coverImage || mockImages.healthLarge}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">{article.category}</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                  </div>
                  <h4 className="text-sm leading-tight">{article.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthNewsSection;
