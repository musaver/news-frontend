'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/homepage';
import { useSession } from 'next-auth/react';

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

// Additional icons for Author Dashboard
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
      )}
    </DashboardLayout>
  );
}
