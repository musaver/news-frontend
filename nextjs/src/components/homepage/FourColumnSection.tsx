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
              { date: 'Sep 19, 2024', title: 'Digital Nomads Redefine the New Normal to Work and Travel' },
              { date: 'Sep 9, 2024', title: 'Luxury Train Journeys: A Timeless Adventure on the Rails' }
            ]
          },
          {
            title: 'Entertainment', 
            image: mockImages.entertainment,
            articles: [
              { date: 'Sep 18, 2024', title: 'Timeless TV Shows Make a Spectacular Comeback with Famous Stars' },
              { date: 'Sep 8, 2024', title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects' }
            ]
          },
          {
            title: 'Sports',
            image: mockImages.sports, 
            articles: [
              { date: 'Sep 17, 2024', title: 'US Swimmer Smashes World Record in 2024 Olympics' },
              { date: 'Sep 7, 2024', title: 'Historic Gold for US Gymnast at 2024 Olympics' }
            ]
          },
          {
            title: 'Tech',
            image: mockImages.tech,
            articles: [
              { date: 'Sep 16, 2024', title: 'AI Revolution Drives Tech Innovation in 2024' },
              { date: 'Sep 6, 2024', title: 'Modern tech are revolutionizing how we interact with our devices' }
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