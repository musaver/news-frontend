'use client'

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/homepage';

// SVG Icons
const ShieldIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>
);

const TrendingUpIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export default function PreferencesPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [authorNotifications, setAuthorNotifications] = useState(true);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState(true);
  const [commentReplies, setCommentReplies] = useState(true);

  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  };

  return (
    <DashboardLayout activeTab="preferences">
      <div className="space-y-6">
            {/* Header */}
            <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
              Preferences & Settings
            </h1>

            {/* Account Settings */}
            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Account Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    <img 
                      src={userData.avatar} 
                      alt={userData.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <button className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors">
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
                    defaultValue={userData.name}
                    className="w-full px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Email
                  </label>
                  <input 
                    type="email"
                    defaultValue={userData.email}
                    className="w-full px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000] transition-colors"
                  />
                </div>
                
                <button className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      Email Notifications
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      Receive updates via email
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      New Articles from Followed Authors
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      Get notified when authors you follow post
                    </p>
                  </div>
                  <button
                    onClick={() => setAuthorNotifications(!authorNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${authorNotifications ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${authorNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      Weekly Newsletter
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      Top stories delivered to your inbox
                    </p>
                  </div>
                  <button
                    onClick={() => setWeeklyNewsletter(!weeklyNewsletter)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${weeklyNewsletter ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${weeklyNewsletter ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      Comment Replies
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      When someone replies to your comment
                    </p>
                  </div>
                  <button
                    onClick={() => setCommentReplies(!commentReplies)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${commentReplies ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${commentReplies ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Display Settings */}
            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Display Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#020a1c] text-[14px] font-medium">
                      Dark Mode
                    </p>
                    <p className="text-[#657285] text-[12px]">
                      Switch to dark theme
                    </p>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Become an Author */}
            <div className="p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] bg-gradient-to-br from-[#cc0000] to-[#990000] text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[20px] leading-[26px] font-bold mb-2">
                    Become an Author
                  </h3>
                  <p className="text-white/90 text-[14px] leading-[22px] mb-4">
                    Share your voice with the world. Start writing and publishing articles on NewsFlash.
                  </p>
                  <button className="px-4 py-2 bg-white text-[#cc0000] hover:bg-white/90 rounded-lg text-[14px] font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
                <TrendingUpIcon className="w-12 h-12 text-white/50" />
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
              <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
                Privacy & Security
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-md text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc] transition-colors justify-start">
                  <ShieldIcon className="w-4 h-4" />
                  Change Password
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-md text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc] transition-colors justify-start">
                  <UserIcon className="w-4 h-4" />
                  Privacy Settings
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-md text-[14px] font-medium text-red-600 hover:bg-red-50 transition-colors justify-start">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
}
