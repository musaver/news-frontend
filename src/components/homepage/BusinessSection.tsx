import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';

interface BusinessSectionProps {
  mockImages: {
    businessLarge: string;
    fashionNews: string;
  };
}

const BusinessSection = ({ mockImages }: BusinessSectionProps) => (
  <section className="py-12">
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {/* Business News */}
        <div className="lg:col-span-2 bg-[#f7fafc] rounded-lg border border-slate-200/20 p-6">
          <SectionHeader title="Business" showViewAll={true} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 h-[451px]">
            <div className="bg-white rounded border p-6 space-y-6">
              {[
                { date: 'Sep 15, 2024', title: 'Consumer Confidence Soars as Retail Sales Surge, Signaling Strong Economic Recovery' },
                { date: 'Sep 5, 2024', title: 'Virtual Reality Shopping Takes Center Stage' },
                { date: 'Aug 15, 2024', title: 'Renewable Energy Sector Soars with Record Investments from Major Corporations' },
                { date: 'Aug 5, 2024', title: 'Tech Giant Unveils Groundbreaking AI Platform, Revolutionizing Digital…' }
              ].map((article, index) => (
                <article key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Business</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <ArticleDate>{article.date}</ArticleDate>
                  </div>
                  <h4 className="text-base leading-tight">{article.title}</h4>
                </article>
              ))}
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={mockImages.businessLarge} 
                alt="Business story"
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
                  <span className="text-white/60">Business</span>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <span className="text-white/60">Sep 15, 2024</span>
                </div>
                <h3 className="text-lg leading-tight font-semibold">
                  Consumer Confidence Soars as Retail Sales Surge, Signaling Strong Economic Recovery
                </h3>
              </div>
            </div>
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
            {[
              { date: 'Sep 21, 2024', title: 'Bold and Beautiful: Fall 2024 Fashion Trends to Watch', image: mockImages.fashionNews },
              { date: 'Sep 11, 2024', title: 'Breaking Boundaries and Embracing the Freedom of Gender-Fluid Fashion', image: mockImages.fashionNews },
              { date: 'Sep 1, 2024', title: 'Monochrome Magic: Mastering the Art of Single-Color Outfits', image: mockImages.fashionNews },
              { date: 'Sep 11, 2024', title: 'Cottagecore Chic: Embracing the Nostalgic and Nature-Inspired Trend', image: mockImages.fashionNews }
            ].map((article, index) => (
              <article key={index} className="flex gap-3">
                <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                  <img 
                    src={`${article.image}&seed=${index}`}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Fashion</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <ArticleDate>{article.date}</ArticleDate>
                  </div>
                  <h4 className="text-sm leading-tight">{article.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessSection;