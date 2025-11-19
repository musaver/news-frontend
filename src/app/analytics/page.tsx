'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

export default function AuthorAnalyticsPage() {
  const authorData = {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  };

  const articles = [
    {
      id: 1,
      title: "Amber Hightower's Message of Unity Gains Momentum",
      date: 'Sep 22, 2024',
      views: 12456
    },
    {
      id: 2,
      title: 'Congress Unites Across the Aisle to Pass Landmark Act',
      date: 'Aug 12, 2024',
      views: 9821
    }
  ];

  return (
    <DashboardLayout activeTab="analytics">
      <div className="space-y-6">
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Performance Analytics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <h3 className="text-[#657285] text-[14px] mb-2">
              Avg. Views per Article
            </h3>
            <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
              22,425
            </p>
            <p className="text-green-600 text-[13px] font-medium mt-2">
              ↑ 12.5% from last month
            </p>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <h3 className="text-[#657285] text-[14px] mb-2">
              Engagement Rate
            </h3>
            <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
              8.4%
            </p>
            <p className="text-green-600 text-[13px] font-medium mt-2">
              ↑ 3.2% from last month
            </p>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <h3 className="text-[#657285] text-[14px] mb-2">
              Reader Retention
            </h3>
            <p className="text-[#020a1c] text-[32px] leading-[40px] font-bold">
              76%
            </p>
            <p className="text-red-600 text-[13px] font-medium mt-2">
              ↓ 2.1% from last month
            </p>
          </div>
        </div>

        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-4">
            Top Performing Articles
          </h3>
          <div className="space-y-3">
            {articles.map(article => (
              <div key={article.id} className="flex items-center justify-between p-3 bg-[#f7fafc] rounded-lg">
                <div>
                  <p className="text-[#020a1c] text-[14px] font-medium">
                    {article.title}
                  </p>
                  <p className="text-[#657285] text-[12px]">
                    {article.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#020a1c] text-[16px] font-bold">
                    {article.views.toLocaleString()}
                  </p>
                  <p className="text-[#657285] text-[11px]">
                    views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
