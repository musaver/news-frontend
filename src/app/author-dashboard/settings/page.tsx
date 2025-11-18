'use client'

import React from 'react';
import Link from 'next/link';
import {
  Header,
  Footer,
} from '@/components/homepage';

// SVG Icons
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

const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
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

export default function AuthorSettingsPage() {
  const authorData = {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    email: 'emily.davis@newsflash.com',
    bio: 'Award-winning journalist with 10+ years of experience covering politics and social issues.'
  };

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />

      {/* Tab Navigation */}
      <div className="left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            <Link href="/author-dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <LayoutDashboardIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </Link>
            <Link href="/articles" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <FileTextIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Articles</span>
            </Link>
            <Link href="/author-dashboard/analytics" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <BarChart3Icon className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </Link>
            <Link href="/author-dashboard/comments" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <MessageSquareIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Comments</span>
            </Link>
            <Link href="/author-dashboard/earnings" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <DollarSignIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Earnings</span>
            </Link>
            <Link href="/author-dashboard/settings" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium bg-[#cc0000] text-white">
              <SettingsIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
            <div className="hidden lg:block h-6 w-px bg-[rgba(203,213,225,0.35)] mx-2"></div>
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-[#657285] hover:bg-red-50 hover:text-red-600 transition-all text-[14px] font-medium">
              <LogOutIcon className="w-4 h-4" />
              <span className="hidden xl:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <main className="">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
              Settings
            </h1>
            
            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Profile Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img src={authorData.avatar} alt={authorData.name} className="w-full h-full object-cover" />
                    </div>
                    <button className="px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors">
                      Change Photo
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue={authorData.name} 
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Email
                  </label>
                  <input 
                    type="email" 
                    defaultValue={authorData.email} 
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Bio
                  </label>
                  <textarea 
                    className="w-full min-h-[100px] px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                    defaultValue={authorData.bio}
                  />
                </div>
                
                <button className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Change Password
              </h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Current Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Confirm New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                </div>
                <button className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

