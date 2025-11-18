'use client'

import React from 'react';
import { Header, Footer } from '@/components/homepage';
import { useRouter } from 'next/navigation';

// SVG Icons
const HomeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </svg>
);

const BookmarkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const MessageSquareIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

const BellIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
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

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: 'feed' | 'saved' | 'history' | 'activity' | 'notifications' | 'preferences';
}

export default function DashboardLayout({ children, activeTab }: DashboardLayoutProps) {
  const router = useRouter();
  
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  };

  const tabs = [
    { id: 'feed', icon: HomeIcon, label: 'My Feed', path: '/user-dashboard' },
    { id: 'saved', icon: BookmarkIcon, label: 'Saved', path: '/saved' },
    { id: 'history', icon: ClockIcon, label: 'History', path: '/history' },
    { id: 'activity', icon: MessageSquareIcon, label: 'Activity', path: '/activity' },
    { id: 'notifications', icon: BellIcon, label: 'Notifications', path: '/notifications' },
    { id: 'preferences', icon: SettingsIcon, label: 'Preferences', path: '/preferences' }
  ];

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />

      {/* Tab Navigation */}
      <div className="left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            {tabs.map(({ id, icon: Icon, label, path }) => (
              <button
                key={id}
                onClick={() => router.push(path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium ${
                  id === activeTab ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
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
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

