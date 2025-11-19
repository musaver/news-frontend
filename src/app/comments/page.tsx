'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

export default function AuthorCommentsPage() {
  const authorData = {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  };

  return (
    <DashboardLayout activeTab="comments">
      <div className="space-y-6">
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Comment Moderation
        </h1>

        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 bg-[#f7fafc] rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-[14px] font-medium">
                    JD
                  </div>
                  <div className="flex-1">
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      John Doe
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <p className="text-[#020a1c] text-[14px] leading-[22px] mb-3">
                  Great article! Really insightful perspective on the current political climate.
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-white border border-[rgba(203,213,225,0.35)] rounded text-[13px] hover:bg-[#f7fafc] transition-colors">
                    Approve
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-[rgba(203,213,225,0.35)] rounded text-[13px] text-red-600 hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-[rgba(203,213,225,0.35)] rounded text-[13px] hover:bg-[#f7fafc] transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
