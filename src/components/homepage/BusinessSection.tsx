import React from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface BusinessSectionProps {
  mockImages: {
    businessLarge: string;
    fashionNews: string;
  };
  businessArticles: Article[];
  fashionArticles: Article[];
}

const BusinessSection = ({ mockImages, businessArticles, fashionArticles }: BusinessSectionProps) => {
  const featuredBusiness = businessArticles[0];
  const sideBusinessArticles = businessArticles.slice(1, 5);
  const displayFashionArticles = fashionArticles.slice(0, 4);

  return (
    <section className="py-12">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Business News */}
          <div className="lg:col-span-2 bg-[#f7fafc] rounded-lg border border-slate-200/20 p-6">
            <SectionHeader title="Business" showViewAll={true} categoryLink="/category/business" />
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 mt-6 h-[451px]">
              <div className="bg-white rounded border p-6 space-y-6">
                {sideBusinessArticles.map((article, index) => (
                  <article key={article.id || index} className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">{article.category}</span>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                    </div>
                    <Link href={`/news-details/${article.id}`}>
                      <h4 className="text-base leading-tight hover:text-[#cc0000] transition-colors">{article.title}</h4>
                    </Link>
                  </article>
                ))}
              </div>

              {featuredBusiness && (
                <div className="relative rounded-lg overflow-hidden">
                  <Link href={`/news-details/${featuredBusiness.id}`}>
                    <img
                      src={featuredBusiness.coverImage || mockImages.businessLarge}
                      alt={featuredBusiness.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    style={{
                      background: `linear-gradient(180deg, transparent 60%, rgba(2, 10, 28, 0.8) 100%)`
                    }}
                  ></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className="text-white/60">{featuredBusiness.category}</span>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <span className="text-white/60">{formatDate(featuredBusiness.publishedAt)}</span>
                    </div>
                    <Link href={`/news-details/${featuredBusiness.id}`}>
                      <h3 className="text-lg leading-tight font-semibold hover:text-[#cc0000] transition-colors">
                        {featuredBusiness.title}
                      </h3>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fashion Section with Tabs */}
          <div className="border border-slate-300/30 rounded-lg overflow-hidden">
            <div className="bg-slate-200/20 border-b border-slate-300/30">
              <div className="flex">
                <div className="bg-slate-300 px-3 py-4 flex-1 text-center">
                  <span className="text-base text-black">Fashion</span>
                </div>
                <div className="bg-[#f7fafc] px-3 py-4 flex-1 text-center">
                  <span className="text-base text-slate-600">Real Estate</span>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {displayFashionArticles.map((article, index) => (
                <article key={article.id || index} className="flex gap-3">
                  <Link href={`/news-details/${article.id}`} className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                    <img
                      src={article.coverImage || mockImages.fashionNews}
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
                      <h4 className="text-sm leading-tight hover:text-[#cc0000] transition-colors">{article.title}</h4>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
