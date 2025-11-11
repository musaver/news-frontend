import React from 'react';
import ArticleDate from './ArticleDate';

interface TopStoriesSectionProps {
  mockImages: {
    politicsLarge: string;
  };
}

const TopStoriesSection = ({ mockImages }: TopStoriesSectionProps) => (
  <section className="md:bg-[#f7fafc] md:rounded-lg md:border md:border-slate-200/20 md:p-6">
    <div className="max-w-[917px] md:max-w-none">
      <div className="flex items-center gap-5 mb-4 px-1 md:px-0">
        <div className="w-1 h-4 bg-[#cc0000]"></div>
        <h2 className="text-[12.6px] leading-[19px] md:text-lg font-normal">Top Stories</h2>
        <div className="flex-1 h-px bg-slate-300/35"></div>
        <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
          <span>view all</span>
          <div className="w-2.5 h-2.5"></div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {/* Large Story */}
        <div className="relative rounded-lg overflow-hidden h-[300px]">
          <img 
            src={mockImages.politicsLarge} 
            alt="Top story"
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
              <span className="text-white/60">Politics</span>
              <div className="w-[3px] h-[3px] bg-white/60 rounded-full"></div>
              <span className="text-white/60">Sep 22, 2024</span>
            </div>
            <h3 className="text-[15px] leading-[19.2px] font-normal">
              Amber Hightower's Message of Unity Gains Momentum Ahead of Election
            </h3>
          </div>
        </div>
        
        {/* Article List */}
        <div className="bg-white rounded-lg p-1 space-y-6">
          {[
            { category: 'Tech', date: 'Sep 16, 2024', title: 'AI Revolution Drives Tech Innovation in 2024' },
            { category: 'Entertainment', date: 'Sep 8, 2024', title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects' },
            { category: 'Entertainment', date: 'Aug 18, 2024', title: 'Streaming Services Unveil Innovative Features' },
            { category: 'Politics', date: 'Aug 12, 2024', title: 'Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future' }
          ].map((article, index) => (
            <article key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-[10.9px]">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h4 className="text-[14.9px] leading-[19.2px] font-normal">{article.title}</h4>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Large Story */}
        <div className="relative rounded-lg overflow-hidden h-[428px]">
          <img 
            src={mockImages.politicsLarge} 
            alt="Top story"
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
              <span className="text-white/60">Politics</span>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/60">Sep 22, 2024</span>
            </div>
            <h3 className="text-xl leading-tight font-semibold">
              Amber Hightower's Message of Unity Gains Momentum Ahead of Election
            </h3>
          </div>
        </div>
        
        {/* Article List */}
        <div className="bg-white rounded border p-6 space-y-6">
          {[
            { category: 'Tech', date: 'Sep 16, 2024', title: 'AI Revolution Drives Tech Innovation in 2024' },
            { category: 'Entertainment', date: 'Sep 8, 2024', title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects' },
            { category: 'Entertainment', date: 'Aug 18, 2024', title: 'Streaming Services Unveil Innovative Features' },
            { category: 'Politics', date: 'Aug 12, 2024', title: 'Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way…' }
          ].map((article, index) => (
            <article key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h4 className="text-base leading-tight font-medium">{article.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TopStoriesSection;