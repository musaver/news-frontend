'use client'

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/homepage';

// SVG Icons
const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

const BookmarkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

interface Comment {
  id: string;
  articleId: string;
  articleTitle: string;
  content: string;
  createdAt: string;
}

// Helper function to format the time since comment was created
function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

export default function DashboardPage() {
  const [savedCount, setSavedCount] = useState<number>(0);
  const [historyCount, setHistoryCount] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [recentComments, setRecentComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    readingStreak: 15
  };

  // Fetch saved articles, history counts, and user comments
  useEffect(() => {
    async function fetchCounts() {
      try {
        setIsLoading(true);

        // Fetch saved articles count
        const savedResponse = await fetch('/api/saved-articles');
        if (savedResponse.ok) {
          const savedData = await savedResponse.json();
          setSavedCount(savedData.savedArticles?.length || 0);
        }

        // Fetch article visits count
        const visitsResponse = await fetch('/api/article-visits');
        if (visitsResponse.ok) {
          const visitsData = await visitsResponse.json();
          setHistoryCount(visitsData.visits?.length || 0);
        }

        // Fetch user comments
        const commentsResponse = await fetch('/api/user-comments');
        if (commentsResponse.ok) {
          const commentsData = await commentsResponse.json();
          setCommentsCount(commentsData.totalComments || 0);
          // Get the 3 most recent comments
          setRecentComments(commentsData.comments?.slice(0, 3) || []);
        }
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCounts();
  }, []);

  return (
    <DashboardLayout activeTab="activity">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#cc0000] to-[#990000] rounded-[12px] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[28px] leading-[36px] font-bold mb-2">
                Welcome back, {userData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-white/90 text-[15px] leading-[24px]">
                Track your engagement and see your recent activity
              </p>
            </div>
            <div className="hidden md:block bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white/80 text-[12px] mb-1">Reading Streak</p>
              <p className="text-[32px] leading-[40px] font-bold">{userData.readingStreak} 🔥</p>
              <p className="text-white/80 text-[11px]">days in a row</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          My Activity
        </h1>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#cc0000] border-r-transparent"></div>
            <p className="mt-4 text-[#657285]">Loading your activity...</p>
          </div>
        )}

        {/* Stats Grid */}
        {!isLoading && (
        <>
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
                  {commentsCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookmarkIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-[#657285] text-[13px] leading-[18px]">
                  Saved
                </p>
                <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                  {savedCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-[#657285] text-[13px] leading-[18px]">
                  History
                </p>
                <p className="text-[#020a1c] text-[24px] leading-[30px] font-bold">
                  {historyCount}
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
          {recentComments.length === 0 ? (
            <p className="text-[#657285] text-[14px]">No comments yet. Start engaging with articles!</p>
          ) : (
            <div className="space-y-4">
              {recentComments.map(item => (
                <div key={item.id} className="p-4 bg-[#f7fafc] rounded-lg">
                  <p className="text-[#020a1c] text-[14px] leading-[22px] mb-2">
                    "{item.content}"
                  </p>
                  <p className="text-[#657285] text-[12px]">
                    On: {item.articleTitle || 'Untitled Article'} • {getTimeAgo(item.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        </>
        )}
      </div>
    </DashboardLayout>
  );
}
