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
                { date: 'Nov 15, 2025', title: 'Global Markets Reach New Heights as Innovation Drives Economic Expansion' },
                { date: 'Nov 14, 2025', title: 'Startups Secure Record $50 Billion in Venture Capital Funding This Quarter' },
                { date: 'Nov 13, 2025', title: 'E-Commerce Giants Expand Drone Delivery Networks to 100 Major Cities' },
                { date: 'Nov 12, 2025', title: 'Corporate Sustainability Programs Show Measurable Impact on Bottom Line' }
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
                  <span className="text-white/60">Nov 15, 2025</span>
                </div>
                <h3 className="text-lg leading-tight font-semibold">
                  Global Markets Reach New Heights as Innovation Drives Economic Expansion
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
              { date: 'Nov 13, 2025', title: 'Paris Fashion Week 2026: Preview of Revolutionary Designs and Trends', image: mockImages.fashionNews },
              { date: 'Nov 12, 2025', title: 'Tech-Infused Clothing: Smart Fabrics Transform the Fashion Industry', image: mockImages.fashionNews },
              { date: 'Nov 11, 2025', title: 'Luxury Brands Embrace Circular Economy with Resale Platforms', image: mockImages.fashionNews },
              { date: 'Nov 10, 2025', title: 'Designer Spotlight: Rising Stars Redefining Modern Elegance', image: mockImages.fashionNews }
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