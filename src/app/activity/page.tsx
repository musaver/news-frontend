'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

// SVG Icons
const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const Share2Icon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

export default function ActivityPage() {
  const recentComments = [
    {
      id: 1,
      comment: "Great article! Really insightful perspective on the current political climate.",
      article: "Amber Hightower's Message of Unity",
      time: "2 days ago"
    },
    {
      id: 2,
      comment: "This is exactly what we need right now. Well written and thoroughly researched.",
      article: "AI Revolution Drives Tech Innovation",
      time: "3 days ago"
    },
    {
      id: 3,
      comment: "Fascinating read! The future of streaming looks incredibly promising.",
      article: "Streaming Services Unveil New Features",
      time: "5 days ago"
    }
  ];

  return (
    <DashboardLayout activeTab="activity">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          My Activity
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#cc0000]/10 rounded-lg flex items-center justify-center">
                <MessageSquareIcon className="w-6 h-6 text-[#cc0000]" />
              </div>
              <div>
                <p className="text-[#657285] text-[13px] leading-[18px]">
                  Total Comments
                </p>
                <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                  47
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-[#657285] text-[13px] leading-[18px]">
                  Articles Liked
                </p>
                <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                  132
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Share2Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-[#657285] text-[13px] leading-[18px]">
                  Articles Shared
                </p>
                <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                  28
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Comments */}
        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-4">
            Recent Comments
          </h3>
          <div className="space-y-4">
            {recentComments.map(item => (
              <div key={item.id} className="p-4 bg-[#f7fafc] rounded-lg">
                <p className="text-[#020a1c] text-[14px] leading-[22px] mb-2">
                  "{item.comment}"
                </p>
                <p className="text-[#657285] text-[12px]">
                  On: {item.article} • {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}