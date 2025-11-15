'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

// SVG Icons
const BookmarkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>
);

export default function SavedPage() {
  const savedArticles = [
    {
      id: 1,
      title: 'Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act',
      category: 'Politics',
      savedDate: 'Aug 12, 2024'
    },
    {
      id: 2,
      title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects',
      category: 'Entertainment',
      savedDate: 'Sep 8, 2024'
    },
    {
      id: 3,
      title: 'Rising Candidate Advocates Bold Vision Amid Economic Challenges',
      category: 'Politics',
      savedDate: 'Sep 12, 2024'
    },
    {
      id: 4,
      title: 'Tech Giants Launch New AI-Powered Products',
      category: 'Tech',
      savedDate: 'Sep 18, 2024'
    },
    {
      id: 5,
      title: 'Global Summit Addresses Climate Change Initiatives',
      category: 'World',
      savedDate: 'Sep 22, 2024'
    },
    {
      id: 6,
      title: 'Sports Teams Rally for Community Outreach Programs',
      category: 'Sports',
      savedDate: 'Sep 25, 2024'
    }
  ];

  return (
    <DashboardLayout activeTab="saved">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
            Saved Articles
          </h1>
          <p className="text-[#657285] text-[14px]">
            {savedArticles.length} articles saved
          </p>
        </div>

        {/* Grid of Saved Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedArticles.map(article => (
            <div key={article.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] hover:shadow-md transition-shadow cursor-pointer">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[#657285] bg-white border border-[rgba(203,213,225,0.35)] rounded mb-3">
                {article.category}
              </span>
              <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-bold mb-2">
                {article.title}
              </h3>
              <p className="text-[#657285] text-[13px] leading-[18px] mb-4">
                Saved on {article.savedDate}
              </p>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors">
                  <EyeIcon className="w-4 h-4" />
                  Read
                </button>
                <button className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors">
                  <BookmarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
