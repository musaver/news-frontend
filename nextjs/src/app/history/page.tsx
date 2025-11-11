'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

export default function HistoryPage() {
  const readingHistory = [
    {
      id: 1,
      title: "Senator Grace Hamilton Gains Momentum as Youth Support Surges",
      category: 'Politics',
      readDate: '2 hours ago',
      progress: 100
    },
    {
      id: 2,
      title: "Melissa Kent's Resilient Campaign Rebounds Amid Challenging Polls",
      category: 'Politics',
      readDate: '5 hours ago',
      progress: 75
    },
    {
      id: 3,
      title: "Ava Mitchell's Bold Economic Vision Resonates with Voters",
      category: 'Politics',
      readDate: '1 day ago',
      progress: 100
    },
    {
      id: 4,
      title: 'AI Revolution Drives Tech Innovation in 2024',
      category: 'Tech',
      readDate: '2 days ago',
      progress: 60
    },
    {
      id: 5,
      title: 'Streaming Services Unveil Innovative Features',
      category: 'Entertainment',
      readDate: '3 days ago',
      progress: 100
    },
    {
      id: 6,
      title: 'Global Markets React to Economic Policy Changes',
      category: 'Business',
      readDate: '4 days ago',
      progress: 45
    }
  ];

  return (
    <DashboardLayout activeTab="history">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Reading History
        </h1>

        {/* List of History Items */}
        <div className="space-y-4">
          {readingHistory.map(article => (
            <div key={article.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-[#657285] bg-white border border-[rgba(203,213,225,0.35)] rounded mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-bold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-[#657285] text-[13px] leading-[18px] mb-3">
                    Read {article.readDate}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#f7fafc] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#cc0000] transition-all"
                        style={{ width: `${article.progress}%` }}
                      />
                    </div>
                    <span className="text-[#657285] text-[12px] font-medium">
                      {article.progress}%
                    </span>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors whitespace-nowrap">
                  {article.progress === 100 ? 'Read Again' : 'Continue'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
