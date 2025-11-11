import React, { useState } from 'react';
import { 
  Home,
  Bookmark, 
  Clock, 
  MessageSquare, 
  Bell, 
  Settings, 
  User,
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Heart,
  Share2,
  TrendingUp,
  Filter,
  Eye,
  Mail,
  Shield,
  Moon,
  Sun,
  Check
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('feed');
  const [darkMode, setDarkMode] = useState(false);

  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    joinDate: 'March 2024',
    readingStreak: 15
  };

  const feedArticles = [
    {
      id: 1,
      title: 'Amber Hightower\'s Message of Unity Gains Momentum',
      category: 'Politics',
      author: 'Emily Davis',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      date: 'Sep 22, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800',
      excerpt: 'As the election approaches, candidate Amber Hightower\'s message of unity and collaboration...'
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

  const savedArticles = [
    {
      id: 1,
      title: 'Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act',
      category: 'Politics',
      savedDate: 'Aug 12, 2024'
    },
    {
      id: 2,
      title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects',
      category: 'Entertainment',
      savedDate: 'Sep 8, 2024'
    },
    {
      id: 3,
      title: 'Rising Candidate Advocates Bold Vision Amid Economic Challenges',
      category: 'Politics',
      savedDate: 'Sep 12, 2024'
    }
  ];

  const readingHistory = [
    {
      id: 1,
      title: 'Senator Grace Hamilton Gains Momentum as Youth Support Surges',
      category: 'Politics',
      readDate: '2 hours ago',
      progress: 100
    },
    {
      id: 2,
      title: 'Melissa Kent\'s Resilient Campaign Rebounds Amid Challenging Polls',
      category: 'Politics',
      readDate: '5 hours ago',
      progress: 75
    },
    {
      id: 3,
      title: 'Ava Mitchell\'s Bold Economic Vision Resonates with Voters',
      category: 'Politics',
      readDate: '1 day ago',
      progress: 100
    }
  ];

  const notifications = [
    { id: 1, type: 'article', message: 'Emily Davis published a new article', time: '1 hour ago', read: false },
    { id: 2, type: 'comment', message: 'Someone replied to your comment', time: '3 hours ago', read: false },
    { id: 3, type: 'follow', message: 'Michael Chen is now following you', time: '5 hours ago', read: true },
    { id: 4, type: 'milestone', message: 'You\'ve reached a 15-day reading streak!', time: '1 day ago', read: true }
  ];

  const followedTopics = ['Politics', 'Tech', 'Entertainment', 'Business', 'Health'];

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      {/* Secondary Dashboard Header - Below main header */}
      <div className="fixed top-16 md:top-[104px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <h2 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold">
            User Dashboard
          </h2>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#657285]" />
              <Input
                placeholder="Search articles, authors, topics..."
                className="pl-10 bg-[#f7fafc] border-[rgba(203,213,225,0.35)] font-['Satoshi:Regular',_sans-serif]"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-[#f7fafc] rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-[#657285]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#cc0000] rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#f7fafc] p-2 rounded-lg transition-colors">
              <ImageWithFallback 
                src={userData.avatar} 
                alt={userData.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="text-[#020a1c] text-[13px] leading-[18px] font-['Satoshi:Medium',_sans-serif]">
                  {userData.name}
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-[#657285]" />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Navigation Tab Bar */}
      <div className="fixed top-32 md:top-[168px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] shadow-sm z-30">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'feed' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">My Feed</span>
            </button>
            
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'saved' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Saved</span>
            </button>
            
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'history' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </button>
            
            <button
              onClick={() => setActiveTab('activity')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'activity' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Activity</span>
            </button>
            
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap relative transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'notifications' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
              {notifications.filter(n => !n.read).length > 0 && (
                <Badge className="bg-[#cc0000] text-white text-[10px] h-5 px-1.5 ml-1">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'preferences' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Preferences</span>
            </button>

            <div className="hidden lg:block h-6 w-px bg-[rgba(203,213,225,0.35)] mx-2"></div>

            <button
              onClick={() => onNavigate('login')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-[#657285] hover:bg-red-50 hover:text-red-600 transition-all font-['Satoshi:Medium',_sans-serif] text-[14px]"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden xl:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-44 md:pt-[224px]">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          
          {/* My Feed Tab */}
          {activeTab === 'feed' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-[#cc0000] to-[#990000] rounded-[12px] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold mb-2">
                      Welcome back, {userData.name.split(' ')[0]}! 👋
                    </h1>
                    <p className="text-white/90 text-[15px] leading-[24px] font-['Satoshi:Regular',_sans-serif]">
                      {feedArticles.length} new articles from your followed topics and authors
                    </p>
                  </div>
                  <div className="hidden md:block bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white/80 text-[12px] font-['Satoshi:Regular',_sans-serif] mb-1">
                      Reading Streak
                    </p>
                    <p className="text-[32px] leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold">
                      {userData.readingStreak} 🔥
                    </p>
                    <p className="text-white/80 text-[11px] font-['Satoshi:Regular',_sans-serif]">
                      days in a row
                    </p>
                  </div>
                </div>
              </div>

              {/* Filter Bar */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-[#cc0000] hover:text-white transition-colors">
                    All
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-[#cc0000] hover:text-white transition-colors">
                    Politics
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-[#cc0000] hover:text-white transition-colors">
                    Tech
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-[#cc0000] hover:text-white transition-colors">
                    Entertainment
                  </Badge>
                </div>
              </div>

              {/* Article Feed */}
              <div className="space-y-6">
                {feedArticles.map(article => (
                  <Card key={article.id} className="overflow-hidden border-[rgba(203,213,225,0.35)] hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      <div className="md:w-64 h-48 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="font-['Satoshi:Medium',_sans-serif]">
                            {article.category}
                          </Badge>
                          <span className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                            {article.date}
                          </span>
                          <span className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                            • {article.readTime}
                          </span>
                        </div>
                        
                        <h2 className="text-[#020a1c] text-[24px] leading-[32px] font-['Satoshi:Bold',_sans-serif] font-bold mb-3">
                          {article.title}
                        </h2>
                        
                        <p className="text-[#657285] text-[15px] leading-[24px] font-['Satoshi:Regular',_sans-serif] mb-4">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <ImageWithFallback 
                              src={article.authorAvatar} 
                              alt={article.author}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                              {article.author}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Saved Articles Tab */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                  Saved Articles
                </h1>
                <p className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif]">
                  {savedArticles.length} articles saved
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedArticles.map(article => (
                  <Card key={article.id} className="p-6 border-[rgba(203,213,225,0.35)] hover:shadow-md transition-shadow cursor-pointer">
                    <Badge variant="outline" className="mb-3 font-['Satoshi:Medium',_sans-serif]">
                      {article.category}
                    </Badge>
                    <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-['Satoshi:Bold',_sans-serif] font-bold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif] mb-4">
                      Saved on {article.savedDate}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Read
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Bookmark className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Reading History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Reading History
              </h1>

              <div className="space-y-4">
                {readingHistory.map(article => (
                  <Card key={article.id} className="p-6 border-[rgba(203,213,225,0.35)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 font-['Satoshi:Medium',_sans-serif]">
                          {article.category}
                        </Badge>
                        <h3 className="text-[#020a1c] text-[18px] leading-[26px] font-['Satoshi:Bold',_sans-serif] font-bold mb-2">
                          {article.title}
                        </h3>
                        <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif] mb-3">
                          Read {article.readDate}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#f7fafc] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#cc0000] transition-all"
                              style={{ width: `${article.progress}%` }}
                            />
                          </div>
                          <span className="text-[#657285] text-[12px] font-['Satoshi:Medium',_sans-serif]">
                            {article.progress}%
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {article.progress === 100 ? 'Read Again' : 'Continue'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* My Activity Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                My Activity
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#cc0000]/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[#cc0000]" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Total Comments
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        47
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Articles Liked
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        132
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Articles Shared
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        28
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                  Recent Comments
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-[#f7fafc] rounded-lg">
                      <p className="text-[#020a1c] text-[14px] leading-[22px] font-['Satoshi:Regular',_sans-serif] mb-2">
                        "Great article! Really insightful perspective on the current political climate."
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        On: Amber Hightower's Message of Unity • 2 days ago
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Notifications
              </h1>

              <div className="space-y-3">
                {notifications.map(notif => (
                  <Card key={notif.id} className={`p-4 border-[rgba(203,213,225,0.35)] ${!notif.read ? 'bg-[#cc0000]/5' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!notif.read ? 'bg-[#cc0000]' : 'bg-[#f7fafc]'}`}>
                        <Bell className={`w-5 h-5 ${!notif.read ? 'text-white' : 'text-[#657285]'}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#020a1c] text-[14px] leading-[20px] font-['Satoshi:Medium',_sans-serif] mb-1">
                          {notif.message}
                        </p>
                        <p className="text-[#657285] text-[12px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                          {notif.time}
                        </p>
                      </div>
                      {!notif.read && (
                        <Badge className="bg-[#cc0000] text-white">New</Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Preferences & Settings
              </h1>

              {/* Account Settings */}
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Account Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={userData.avatar} />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Full Name
                    </label>
                    <Input defaultValue={userData.name} className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Email
                    </label>
                    <Input defaultValue={userData.email} className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  
                  <Button className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif]">
                    Save Changes
                  </Button>
                </div>
              </Card>

              {/* Notification Preferences */}
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                        Email Notifications
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        Receive updates via email
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                        New Articles from Followed Authors
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        Get notified when authors you follow post
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                        Weekly Newsletter
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        Top stories delivered to your inbox
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                        Comment Replies
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        When someone replies to your comment
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </Card>

              {/* Display Settings */}
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Display Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                        Dark Mode
                      </p>
                      <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                        Switch to dark theme
                      </p>
                    </div>
                    <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                </div>
              </Card>

              {/* Upgrade Section */}
              <Card className="p-6 border-[rgba(203,213,225,0.35)] bg-gradient-to-br from-[#cc0000] to-[#990000] text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] leading-[26px] font-['Satoshi:Bold',_sans-serif] font-bold mb-2">
                      Become an Author
                    </h3>
                    <p className="text-white/90 text-[14px] leading-[22px] font-['Satoshi:Regular',_sans-serif] mb-4">
                      Share your voice with the world. Start writing and publishing articles on NewsFlash.
                    </p>
                    <Button className="bg-white text-[#cc0000] hover:bg-white/90 font-['Satoshi:Semi_Bold',_sans-serif]">
                      Apply Now
                    </Button>
                  </div>
                  <TrendingUp className="w-12 h-12 text-white/50" />
                </div>
              </Card>

              {/* Privacy & Security */}
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Privacy & Security
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Shield className="w-4 h-4" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="w-4 h-4" />
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
