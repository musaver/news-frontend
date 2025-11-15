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
            { date: 'Nov 15, 2025', title: 'Cryptocurrency Markets Hit New Milestone with Institutional Adoption' },
            { date: 'Nov 14, 2025', title: 'Global Banking System Embraces Blockchain for Faster Transactions' },
            { date: 'Nov 13, 2025', title: 'Stock Market Rally Continues as Tech Sector Leads Growth' },
            { date: 'Nov 12, 2025', title: 'Investment Opportunities in Emerging Markets Show Strong Potential' },
            { date: 'Nov 11, 2025', title: 'ESG Investing Becomes Mainstream Among Retail Investors' },
            { date: 'Nov 10, 2025', title: 'Central Banks Coordinate Global Economic Stability Initiative' },
            { date: 'Nov 9, 2025', title: 'Personal Finance Apps Transform How Americans Manage Money' },
            { date: 'Nov 8, 2025', title: 'Real Estate Investment Trusts Post Record Quarterly Returns' }
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