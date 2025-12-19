'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

// SVG Icons (matching Vite exactly)
const HomeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BookmarkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const MessageSquareIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const BellIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const SettingsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const LogOutIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const FilterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </svg>
);

const HeartIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Share2Icon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// Additional icons for Author Dashboard
const EyeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const PlusCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const BarChart3Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const FileTextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState('feed');
  const { data: session } = useSession();

  // Get user type from session
  const userType = (session?.user as any)?.userType || 'user';
  const isAuthor = userType === 'author';

  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    readingStreak: 15
  };

  // Author-specific data
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

  const feedArticles = [
    {
      id: 1,
      title: "Amber Hightower's Message of Unity Gains Momentum",
      category: 'Politics',
      author: 'Emily Davis',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      date: 'Sep 22, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800',
      excerpt: "As the election approaches, candidate Amber Hightower's message of unity and collaboration..."
    },
    {
      id: 2,
      title: 'AI Revolution Drives Tech Innovation in 2024',
      category: 'Tech',
      author: 'Michael Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      date: 'Sep 16, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      excerpt: 'Artificial Intelligence continues to reshape industries, with breakthrough innovations...'
    },
    {
      id: 3,
      title: 'Streaming Services Unveil Innovative Features',
      category: 'Entertainment',
      author: 'Jessica Martinez',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      date: 'Aug 18, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      excerpt: 'Major streaming platforms announce exciting new features and content partnerships...'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7fafc]">

      {/* Tab Navigation */}
      <div className="left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            {[
              { id: 'feed', icon: HomeIcon, label: 'My Feed' },
              { id: 'saved', icon: BookmarkIcon, label: 'Saved' },
              { id: 'history', icon: ClockIcon, label: 'History' },
              { id: 'activity', icon: MessageSquareIcon, label: 'Activity' },
              { id: 'notifications', icon: BellIcon, label: 'Notifications' },
              { id: 'preferences', icon: SettingsIcon, label: 'Preferences' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium ${activeTab === id ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="">{label}</span>
              </button>
            ))}
            <div className="hidden lg:block h-6 w-px bg-[rgba(203,213,225,0.35)] mx-2"></div>
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-[#657285] hover:bg-red-50 hover:text-red-600 transition-all text-[14px] font-medium">
              <LogOutIcon className="w-4 h-4" />
              <span className="hidden xl:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          {isAuthor ? (
            // Author Dashboard Content
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
                    <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-normal mb-1">
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
                    <Link href="/create-article" className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left">
                      <PlusCircleIcon className="w-5 h-5 text-[#cc0000]" />
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-medium">
                          Write New Article
                        </p>
                        <p className="text-[#657285] text-[12px]">
                          Start creating content
                        </p>
                      </div>
                    </Link>
                    <Link
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
                    </Link>
                    <Link
                      href="/articles"
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
                    </Link>
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
          ) : (
            // Regular User Dashboard Content
            <>
              {activeTab === 'feed' && (
                <div className="space-y-6">
                  {/* Welcome Banner */}
                  <div className="bg-gradient-to-r from-[#cc0000] to-[#990000] rounded-[12px] p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-[28px] leading-[36px] font-bold mb-2">
                          Welcome back, {userData.name.split(' ')[0]}! 👋
                        </h1>
                        <p className="text-white/90 text-[15px] leading-[24px]">
                          {feedArticles.length} new articles from your followed topics and authors
                        </p>
                      </div>
                      <div className="hidden md:block bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-white/80 text-[12px] mb-1">Reading Streak</p>
                        <p className="text-[32px] leading-[40px] font-bold">{userData.readingStreak} 🔥</p>
                        <p className="text-white/80 text-[11px]">days in a row</p>
                      </div>
                    </div>
                  </div>

                  {/* Filter Bar */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] font-medium text-[#657285] hover:bg-white transition-colors">
                      <FilterIcon className="w-4 h-4" />
                      Filter
                    </button>
                    <div className="flex gap-2">
                      {['All', 'Politics', 'Tech', 'Entertainment'].map((filter) => (
                        <span key={filter} className="px-3 py-1.5 border border-[rgba(203,213,225,0.35)] rounded-lg text-[12px] font-medium cursor-pointer hover:bg-[#cc0000] hover:text-white hover:border-[#cc0000] transition-colors">
                          {filter}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Article Feed */}
                  <div className="space-y-6">
                    {feedArticles.map(article => (
                      <div key={article.id} className="bg-white rounded-[12px] border border-[rgba(203,213,225,0.35)] overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex flex-col md:flex-row gap-6 p-6">
                          <div className="md:w-64 h-48 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="inline-block px-3 py-1 text-xs font-medium text-[#cc0000] bg-[rgba(204,0,0,0.05)] border border-[rgba(204,0,0,0.1)] rounded">
                                {article.category}
                              </span>
                              <span className="text-[#657285] text-[12px]">{article.date}</span>
                              <span className="text-[#657285] text-[12px]">• {article.readTime}</span>
                            </div>
                            <h2 className="text-[#020a1c] text-[24px] leading-[32px] font-bold mb-3">{article.title}</h2>
                            <p className="text-[#657285] text-[15px] leading-[24px] mb-4">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img src={article.authorAvatar} alt={article.author} className="w-8 h-8 rounded-full object-cover" />
                                <span className="text-[#020a1c] text-[13px] font-medium">{article.author}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <button className="text-[#657285] hover:text-[#cc0000] transition-colors">
                                  <BookmarkIcon className="w-5 h-5" />
                                </button>
                                <button className="text-[#657285] hover:text-[#cc0000] transition-colors">
                                  <HeartIcon className="w-5 h-5" />
                                </button>
                                <button className="text-[#657285] hover:text-[#cc0000] transition-colors">
                                  <Share2Icon className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Tabs */}
              {activeTab !== 'feed' && (
                <div className="bg-white rounded-[12px] border border-[rgba(203,213,225,0.35)] p-12 text-center">
                  <h2 className="text-[24px] leading-[32px] font-bold text-[#020a1c] mb-2">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </h2>
                  <p className="text-[#657285] text-[15px]">This section is coming soon...</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

    </div>
  );
}
