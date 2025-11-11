import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleDate from './ArticleDate';

interface FinanceSidebarProps {
  mockImages: {
    finance: string;
  };
}

const FinanceSidebar = ({ mockImages }: FinanceSidebarProps) => (
  <aside className="w-[306px]">
    <div className="space-y-6">
      <div className="rounded-lg overflow-hidden h-[250px]">
        <img 
          src={mockImages.finance} 
          alt="Finance"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <SectionHeader title="Finance" showViewAll={true} />
        <div className="space-y-4 mt-4">
          {[
            { date: 'Sep 14, 2024', title: 'Federal Reserve Signals Potential Rate Cuts Amid Economic Resilience' },
            { date: 'Sep 4, 2024', title: 'Stocks Surge as Investors Seek Growth Amid Rate Uncertainty' },
            { date: 'Aug 24, 2024', title: 'The New York Stock Exchange buzzes with activity as U.S. markets reach new all-time highs' },
            { date: 'Aug 14, 2024', title: 'Stocks Rebound as Market Eyes Potential Rate Cuts' },
            { date: 'Aug 4, 2024', title: 'Investors Eye Renewable Energy Stocks as Market Shifts to Green Economy' },
            { date: 'Jul 30, 2024', title: 'Market Optimism Grows as Fintech Trends Drive Future of Finance' },
            { date: 'Jul 27, 2024', title: 'Saving Strategies to Build Wealth in a High-Interest Environment' },
            { date: 'Jul 26, 2024', title: 'Smart Budgeting Tips to Maximize Your Savings in 2024' }
          ].map((article, index) => (
            <div key={index} className="border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs mb-1">
                <span className="text-slate-500">Finance</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h4 className="text-md leading-tight">{article.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default FinanceSidebar;