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

export default function AuthorArticlesPage() {
  const [articleFilter, setArticleFilter] = useState('published');

  const authorData = {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  };

  const articles = [
    {
      id: 1,
      title: "Amber Hightower's Message of Unity Gains Momentum",
      status: 'published',
      category: 'Politics',
      date: 'Sep 22, 2024',
      views: 12456,
      likes: 892,
      comments: 143,
      shares: 234
    },
    {
      id: 2,
      title: 'Congress Unites Across the Aisle to Pass Landmark Act',
      status: 'published',
      category: 'Politics',
      date: 'Aug 12, 2024',
      views: 9821,
      likes: 654,
      comments: 98,
      shares: 187
    },
    {
      id: 3,
      title: 'New Healthcare Reform Bill Under Discussion',
      status: 'draft',
      category: 'Politics',
      date: 'Oct 1, 2024',
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 4,
      title: 'Economic Policy Changes Affect Middle Class',
      status: 'under_review',
      category: 'Politics',
      date: 'Sep 28, 2024',
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0
    }
  ];

  const filteredArticles = articles.filter(article => {
    if (articleFilter === 'published') return article.status === 'published';
    if (articleFilter === 'drafts') return article.status === 'draft';
    if (articleFilter === 'under_review') return article.status === 'under_review';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />

      {/* Secondary Dashboard Header */}
      <div className="fixed top-16 md:top-[104px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] z-40">
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
      <div className="fixed top-32 md:top-[168px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            <a href="/author-dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium text-[#657285] hover:bg-[#f7fafc]">
              <LayoutDashboardIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </a>
            <a href="/articles" className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all text-[14px] font-medium bg-[#cc0000] text-white">
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
            <div className="flex items-center justify-between">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
                My Articles
              </h1>
              <a href="/create-article" className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors flex items-center gap-2">
                <PlusCircleIcon className="w-4 h-4" />
                Create New Article
              </a>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border border-[rgba(203,213,225,0.35)] rounded-lg p-1 inline-flex gap-1">
              <button
                onClick={() => setArticleFilter('published')}
                className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${
                  articleFilter === 'published' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
                }`}
              >
                Published ({articles.filter(a => a.status === 'published').length})
              </button>
              <button
                onClick={() => setArticleFilter('drafts')}
                className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${
                  articleFilter === 'drafts' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
                }`}
              >
                Drafts ({articles.filter(a => a.status === 'draft').length})
              </button>
              <button
                onClick={() => setArticleFilter('under_review')}
                className={`px-4 py-2 rounded text-[14px] font-medium transition-colors ${
                  articleFilter === 'under_review' ? 'bg-[#cc0000] text-white' : 'text-[#657285] hover:bg-[#f7fafc]'
                }`}
              >
                Under Review ({articles.filter(a => a.status === 'under_review').length})
              </button>
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {filteredArticles.map(article => (
                <div key={article.id} className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium border border-[rgba(203,213,225,0.5)] rounded">
                          {article.category}
                        </span>
                        <span className="text-[#657285] text-[12px]">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-3">
                        {article.title}
                      </h3>
                      
                      {article.status === 'published' && (
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <EyeIcon className="w-4 h-4" />
                            {article.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <HeartIcon className="w-4 h-4" />
                            {article.likes.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <MessageSquareIcon className="w-4 h-4" />
                            {article.comments.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 text-[#657285] text-[13px]">
                            <Share2Icon className="w-4 h-4" />
                            {article.shares.toLocaleString()}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <a href={`/articles/${article.id}/edit`} className="px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors flex items-center gap-2">
                        <EditIcon className="w-4 h-4" />
                        Edit
                      </a>
                      <button className="p-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

