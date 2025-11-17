import React from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';
import { Article, formatDate } from '@/types/article';

interface FourColumnSectionProps {
  mockImages: {
    travel: string;
    entertainment: string;
    sports: string;
    tech: string;
  };
  travelArticles: Article[];
  entertainmentArticles: Article[];
  sportsArticles: Article[];
  techArticles: Article[];
}

const FourColumnSection = ({
  mockImages,
  travelArticles,
  entertainmentArticles,
  sportsArticles,
  techArticles
}: FourColumnSectionProps) => {
  const sections = [
    {
      title: 'Travel',
      image: mockImages.travel,
      articles: travelArticles.slice(0, 2)
    },
    {
      title: 'Entertainment',
      image: mockImages.entertainment,
      articles: entertainmentArticles.slice(0, 2)
    },
    {
      title: 'Sports',
      image: mockImages.sports,
      articles: sportsArticles.slice(0, 2)
    },
    {
      title: 'Tech',
      image: mockImages.tech,
      articles: techArticles.slice(0, 2)
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <SectionHeader title={section.title} showViewAll={true} />
              <Link href={`/news-details/${section.articles[0]?.id}`} className="rounded-lg overflow-hidden h-[200px] block">
                <img
                  src={section.articles[0]?.coverImage || section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="space-y-6">
                {section.articles.map((article, articleIndex) => (
                  <article key={article.id || articleIndex} className="space-y-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourColumnSection;
