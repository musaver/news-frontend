import React from 'react';
import ArticleDate from './ArticleDate';

interface LatestNewsSectionProps {
  mockImages: {
    healthNews: string;
    fashionNews: string;
    realEstateNews: string;
    travel: string;
  };
}

const LatestNewsSection = ({ mockImages }: LatestNewsSectionProps) => (
  <section className="max-w-[917px] md:max-w-none">
    <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
      <div className="w-1 h-4 bg-[#cc0000]"></div>
      <h2 className="text-[12.5px] leading-[19px] md:text-lg font-normal">Latest News</h2>
      <div className="flex-1 h-px bg-slate-300/35"></div>
      <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
        <span>view all</span>
        <div className="w-2.5 h-2.5"></div>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="md:hidden space-y-6">
      {[
        {
          category: 'Health',
          date: 'Nov 14, 2025',
          title: 'Breakthrough Gene Therapy Shows 95% Success Rate in Cancer Treatment Trials',
          image: mockImages.healthNews
        },
        {
          category: 'Fashion',
          date: 'Nov 13, 2025',
          title: 'Sustainable Fashion Revolution: Major Brands Commit to Zero-Waste Production by 2026',
          image: mockImages.fashionNews
        },
        {
          category: 'Real Estate',
          date: 'Nov 12, 2025',
          title: 'Smart Cities Initiative Transforms Urban Real Estate Markets Across America',
          image: mockImages.realEstateNews
        },
        {
          category: 'Travel',
          date: 'Nov 11, 2025',
          title: 'Space Tourism Becomes Accessible: First Commercial Flights to Launch Next Quarter',
          image: mockImages.travel
        }
      ].map((article, index) => (
        <article key={index} className="flex gap-2">
          <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 text-[10.9px]">
              <span className="text-slate-500">{article.category}</span>
              <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
              <ArticleDate>{article.date}</ArticleDate>
            </div>
            <h3 className="text-[14.8px] leading-[20px] font-normal">{article.title}</h3>
          </div>
        </article>
      ))}
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {[
        {
          category: 'Health',
          date: 'Nov 14, 2025',
          title: 'Breakthrough Gene Therapy Shows 95% Success Rate in Cancer Treatment Trials',
          image: mockImages.healthNews
        },
        {
          category: 'Fashion',
          date: 'Nov 13, 2025',
          title: 'Sustainable Fashion Revolution: Major Brands Commit to Zero-Waste Production by 2026',
          image: mockImages.fashionNews
        },
        {
          category: 'Real Estate',
          date: 'Nov 12, 2025',
          title: 'Smart Cities Initiative Transforms Urban Real Estate Markets Across America',
          image: mockImages.realEstateNews
        }
      ].map((article, index) => (
        <article key={index} className="space-y-3">
          <div className="rounded-lg overflow-hidden h-[200px]">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 px-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">{article.category}</span>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <ArticleDate>{article.date}</ArticleDate>
            </div>
            <h3 className="text-lg leading-tight font-semibold">{article.title}</h3>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default LatestNewsSection;