'use client'

import React from 'react';
import { DashboardLayout } from '@/components/homepage';

// SVG Icon
const BellIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
  </svg>
);

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'article', message: 'Emily Davis published a new article', time: '1 hour ago', read: false },
    { id: 2, type: 'comment', message: 'Someone replied to your comment', time: '3 hours ago', read: false },
    { id: 3, type: 'follow', message: 'Michael Chen is now following you', time: '5 hours ago', read: true },
    { id: 4, type: 'milestone', message: "You've reached a 15-day reading streak!", time: '1 day ago', read: true },
    { id: 5, type: 'article', message: 'Jessica Martinez published a new article', time: '2 days ago', read: true },
    { id: 6, type: 'like', message: 'Someone liked your comment on "AI Revolution"', time: '3 days ago', read: true }
  ];

  return (
    <DashboardLayout activeTab="notifications">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Notifications
        </h1>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map(notif => (
            <div 
              key={notif.id} 
              className={`p-4 border border-[rgba(203,213,225,0.35)] rounded-[12px] ${!notif.read ? 'bg-[#cc0000]/5' : 'bg-white'}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!notif.read ? 'bg-[#cc0000]' : 'bg-[#f7fafc]'}`}>
                  <BellIcon className={`w-5 h-5 ${!notif.read ? 'text-white' : 'text-[#657285]'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-[#020a1c] text-[14px] leading-[20px] font-medium mb-1">
                    {notif.message}
                  </p>
                  <p className="text-[#657285] text-[12px] leading-[18px]">
                    {notif.time}
                  </p>
                </div>
                {!notif.read && (
                  <span className="px-2 py-1 bg-[#cc0000] text-white text-[10px] font-medium rounded">
                    New
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
