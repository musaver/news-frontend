import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';

interface FourColumnSectionProps {
  mockImages: {
    travel: string;
    entertainment: string;
    sports: string;
    tech: string;
  };
}

const FourColumnSection = ({ mockImages }: FourColumnSectionProps) => (
  <section className="py-12">
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {[
          {
            title: 'Travel',
            image: mockImages.travel,
            articles: [
              { date: 'Nov 11, 2025', title: 'Sustainable Tourism Initiatives Transform Popular Destinations Worldwide' },
              { date: 'Nov 10, 2025', title: 'Hidden Gems: Undiscovered Travel Destinations for Adventurous Explorers' }
            ]
          },
          {
            title: 'Entertainment',
            image: mockImages.entertainment,
            articles: [
              { date: 'Nov 13, 2025', title: 'Blockbuster Season: Most Anticipated Films of 2026 Revealed' },
              { date: 'Nov 12, 2025', title: 'Music Industry Evolution: Virtual Concerts Attract Millions Globally' }
            ]
          },
          {
            title: 'Sports',
            image: mockImages.sports,
            articles: [
              { date: 'Nov 12, 2025', title: 'Championship Finals: Underdog Team Stuns Sports World with Victory' },
              { date: 'Nov 11, 2025', title: 'Rising Stars: Young Athletes Breaking Records in Major Leagues' }
            ]
          },
          {
            title: 'Tech',
            image: mockImages.tech,
            articles: [
              { date: 'Nov 14, 2025', title: 'Next-Gen Smartphones Feature Advanced AI and Extended Battery Life' },
              { date: 'Nov 13, 2025', title: 'Cybersecurity Breakthrough: New Protocol Promises Unhackable Networks' }
            ]
          }
        ].map((section, index) => (
          <div key={index} className="space-y-6">
            <SectionHeader title={section.title} showViewAll={true} />
            <div className="rounded-lg overflow-hidden h-[200px]">
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              {section.articles.map((article, articleIndex) => (
                <article key={articleIndex} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">{section.title}</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <ArticleDate>{article.date}</ArticleDate>
                  </div>
                  <h4 className="text-base leading-tight">{article.title}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FourColumnSection;