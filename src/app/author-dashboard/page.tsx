'use client'

import React, { useState } from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';

// SVG Icons
const EyeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>
);

const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
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

const PlusCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const BellIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
  </svg>
);

const BarChart3Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const FileTextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
  </svg>
);

const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
);

const LayoutDashboardIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="9"/>
    <rect x="14" y="3" width="7" height="5"/>
    <rect x="14" y="12" width="7" height="9"/>
    <rect x="3" y="16" width="7" height="5"/>
  </svg>
);

const DollarSignIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
);

const SettingsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
);

const LogOutIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

const EditIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Trash2Icon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="3,6 5,6 21,6"/>
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

export default function AuthorDashboardPage() {

  const authorData = {
    name: 'Emily Davis',
    role: 'Senior Political Correspondent',
    bio: 'Award-winning journalist with 10+ years of experience covering politics and social issues.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    email: 'emily.davis@newsflash.com',
    joinDate: 'January 2020'
  };

  const stats = {
    totalViews: 2456789,
    totalLikes: 45230,
    totalComments: 12890,
    totalShares: 8765,
    earnings: 8750.50
  };

  const notifications = [
    { id: 1, type: 'approval', message: 'Your article "Unity Gains Momentum" was approved', time: '2 hours ago' },
    { id: 2, type: 'comment', message: 'New comment on "Landmark Act" article', time: '5 hours ago' },
    { id: 3, type: 'milestone', message: 'You reached 2M+ total views!', time: '1 day ago' },
    { id: 4, type: 'earnings', message: 'Monthly earnings report is ready', time: '2 days ago' }
  ];


  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />

      {/* Secondary Dashboard Header */}
      <div className="md:top-[104px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <h2 className="text-[#020a1c] text-[18px] leading-[24px] font-bold">
            Author Dashboard
          </h2>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#657285]" />
              <input
                placeholder="Search articles..."
                className="w-full pl-10 pr-3 h-10 bg-[#f7fafc] border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-[#f7fafc] rounded-lg transition-colors">
              <BellIcon className="w-5 h-5 text-[#657285]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#cc0000] rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#f7fafc] p-2 rounded-lg transition-colors">
              <img src={authorData.avatar} alt={authorData.name} className="w-8 h-8 rounded-full object-cover" />
              <div className="hidden md:block">
                <p className="text-[#020a1c] text-[13px] leading-[18px] font-medium">{authorData.name}</p>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-[#657285]" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="md:top-[168px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            <a href="/author-dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium bg-[#cc0000] text-white">
              <LayoutDashboardIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </a>
            <a href="/author-dashboard/articles" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <FileTextIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Articles</span>
            </a>
            <a href="/author-dashboard/analytics" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <BarChart3Icon className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </a>
            <a href="/author-dashboard/comments" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <MessageSquareIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Comments</span>
            </a>
            <a href="/author-dashboard/earnings" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <DollarSignIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Earnings</span>
            </a>
            <a href="/author-dashboard/settings" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <SettingsIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </a>
            <div className="hidden lg:block h-6 w-px bg-[rgba(203,213,225,0.35)] mx-2"></div>
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-[#657285] hover:bg-red-50 hover:text-red-600 transition-all text-[14px] font-medium">
              <LogOutIcon className="w-4 h-4" />
              <span className="hidden xl:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <main className="pt-44 md:pt-[224px]">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          <div className="space-y-6">
              {/* Welcome Header */}
              <div className="bg-white rounded-[12px] p-6 border border-[rgba(203,213,225,0.35)]">
                <div className="flex items-start gap-6">
                  <img 
                    src={authorData.avatar} 
                    alt={authorData.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold mb-1">
                      Welcome back, {authorData.name.split(' ')[0]}! 👋
                    </h1>
                    <p className="text-[#657285] text-[15px] leading-[24px] mb-3">
                      {authorData.role}
                    </p>
                    <p className="text-[#657285] text-[14px] leading-[22px] max-w-2xl">
                      {authorData.bio}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors flex items-center gap-2">
                    <PlusCircleIcon className="w-4 h-4" />
                    Create New Article
                  </button>
                </div>
              </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#cc0000]/10 rounded-lg flex items-center justify-center">
                    <EyeIcon className="w-6 h-6 text-[#cc0000]" />
                  </div>
                  <div>
                    <p className="text-[#657285] text-[13px] leading-[18px]">
                      Total Views
                    </p>
                    <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                      {stats.totalViews.toLocaleString()}
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
                      Total Likes
                    </p>
                    <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                      {stats.totalLikes.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquareIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[#657285] text-[13px] leading-[18px]">
                      Total Comments
                    </p>
                    <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                      {stats.totalComments.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Share2Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[#657285] text-[13px] leading-[18px]">
                      Total Shares
                    </p>
                    <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                      {stats.totalShares.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-4">
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  {notifications.map(notif => (
                    <div key={notif.id} className="flex gap-3 p-3 hover:bg-[#f7fafc] rounded-lg transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-[#cc0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <BellIcon className="w-4 h-4 text-[#cc0000]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#020a1c] text-[14px] leading-[20px] font-medium">
                          {notif.message}
                        </p>
                        <p className="text-[#657285] text-[12px] leading-[18px]">
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a href="/author-dashboard/create-article" className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left">
                    <PlusCircleIcon className="w-5 h-5 text-[#cc0000]" />
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-medium">
                        Write New Article
                      </p>
                      <p className="text-[#657285] text-[12px]">
                        Start creating content
                      </p>
                    </div>
                  </a>
                  <a 
                    href="/author-dashboard/analytics"
                    className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left"
                  >
                    <BarChart3Icon className="w-5 h-5 text-[#cc0000]" />
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-medium">
                        View Analytics
                      </p>
                      <p className="text-[#657285] text-[12px]">
                        Check your performance
                      </p>
                    </div>
                  </a>
                  <a 
                    href="/author-dashboard/articles"
                    className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left"
                  >
                    <FileTextIcon className="w-5 h-5 text-[#cc0000]" />
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-medium">
                        My Articles
                      </p>
                      <p className="text-[#657285] text-[12px]">
                        Manage your content
                      </p>
                    </div>
                  </a>
                  <button className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left">
                    <UsersIcon className="w-5 h-5 text-[#cc0000]" />
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-medium">
                        Audience Insights
                      </p>
                      <p className="text-[#657285] text-[12px]">
                        Understand your readers
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}