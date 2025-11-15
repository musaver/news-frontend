import React from 'react';
import ArticleDate from './ArticleDate';

interface PoliticsNewsSectionProps {
  mockImages: {
    politicsSmall1: string;
    politicsSmall2: string;
    politicsSmall3: string;
    politicsSmall4: string;
  };
}

const PoliticsNewsSection = ({ mockImages }: PoliticsNewsSectionProps) => (
  <section className="bg-white/20 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.04)] py-6">
    <div className="max-w-[1320px] mx-auto px-4 md:px-6">
      <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
        <div className="w-1 h-4 bg-[#cc0000]"></div>
        <h2 className="text-[12.7px] leading-[19px] md:text-lg font-normal">Politics</h2>
        <div className="flex-1 h-px bg-slate-300/35"></div>
        <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
          <span>view all</span>
          <div className="w-2.5 h-2.5"></div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6 max-w-[480px] mx-auto">
        {[
          {
            date: 'Nov 15, 2025',
            title: 'Senate Passes Landmark Education Reform Bill with Bipartisan Support',
            image: mockImages.politicsSmall1
          },
          {
            date: 'Nov 14, 2025',
            title: 'International Trade Agreement Opens New Markets for US Exports',
            image: mockImages.politicsSmall2
          },
          {
            date: 'Nov 13, 2025',
            title: 'Supreme Court Ruling Shapes Future of Digital Privacy Rights',
            image: mockImages.politicsSmall3
          },
          {
            date: 'Nov 12, 2025',
            title: 'Congressional Committee Approves Major Healthcare Expansion Plan',
            image: mockImages.politicsSmall4
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
                <span className="text-slate-500">Politics</span>
                <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h3 className="text-[14.8px] leading-[20px] font-normal">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {[
          {
            date: 'Nov 15, 2025',
            title: 'Senate Passes Landmark Education Reform Bill with Bipartisan Support',
            image: mockImages.politicsSmall1
          },
          {
            date: 'Nov 14, 2025',
            title: 'International Trade Agreement Opens New Markets for US Exports',
            image: mockImages.politicsSmall2
          },
          {
            date: 'Nov 13, 2025',
            title: 'Supreme Court Ruling Shapes Future of Digital Privacy Rights',
            image: mockImages.politicsSmall3
          },
          {
            date: 'Nov 12, 2025',
            title: 'Congressional Committee Approves Major Healthcare Expansion Plan',
            image: mockImages.politicsSmall4
          }
        ].map((article, index) => (
          <article key={index} className="flex gap-3">
            <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">Politics</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h3 className="text-sm leading-tight font-medium">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PoliticsNewsSection;