import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  DollarSign, 
  Settings, 
  Eye, 
  Heart, 
  Share2, 
  Filter,
  Search,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown,
  Edit,
  Trash2,
  Check
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { ArticleEditor } from './ArticleEditor';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { toast } from 'sonner@2.0.3';

interface Article {
  id: number;
  title: string;
  status: string;
  category: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  content?: string;
  excerpt?: string;
  tags?: string[];
  coverImage?: string;
}

interface AuthorDashboardProps {
  onNavigate: (page: string) => void;
}

export function AuthorDashboard({ onNavigate }: AuthorDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [articleFilter, setArticleFilter] = useState('published');
  const [showEditor, setShowEditor] = useState(false);
  const [editorMode, setEditorMode] = useState<'create' | 'edit'>('create');
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);

  const authorData = {
    name: 'Emily Davis',
    role: 'Senior Political Correspondent',
    bio: 'Award-winning journalist with 10+ years of experience covering politics and social issues.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    email: 'emily.davis@newsflash.com',
    joinDate: 'January 2020'
  };

  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: 'Amber Hightower\'s Message of Unity Gains Momentum',
      status: 'published',
      category: 'Politics',
      date: 'Sep 22, 2024',
      views: 12456,
      likes: 892,
      comments: 143,
      shares: 234,
      content: 'As the election approaches, candidate Amber Hightower\'s message of unity and collaboration continues to resonate with voters across the political spectrum...',
      excerpt: 'Amber Hightower\'s campaign gains momentum with a message of unity...',
      tags: ['election', 'politics', 'unity'],
      coverImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800'
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
      shares: 187,
      content: 'In a rare display of bipartisanship, Congress has come together to pass the Green Infrastructure Act...',
      excerpt: 'Congress passes landmark Green Infrastructure Act...',
      tags: ['congress', 'infrastructure', 'bipartisan'],
      coverImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800'
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
      shares: 0,
      content: 'Draft: Healthcare reform continues to be a hot topic in Washington...',
      excerpt: 'New healthcare reform bill being drafted...',
      tags: ['healthcare', 'reform'],
      coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
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
      shares: 0,
      content: 'Recent economic policy changes are having a significant impact on middle-class families...',
      excerpt: 'Economic policy changes impact middle class...',
      tags: ['economy', 'policy'],
      coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800'
    }
  ]);

  const stats = {
    totalArticles: articles.length,
    totalViews: articles.reduce((sum, a) => sum + a.views, 0),
    totalLikes: articles.reduce((sum, a) => sum + a.likes, 0),
    totalComments: articles.reduce((sum, a) => sum + a.comments, 0),
    totalShares: articles.reduce((sum, a) => sum + a.shares, 0),
    earnings: 8750.50
  };

  // Handler functions
  const handleCreateArticle = () => {
    setEditorMode('create');
    setCurrentArticle(null);
    setShowEditor(true);
  };

  const handleEditArticle = (article: Article) => {
    setEditorMode('edit');
    setCurrentArticle(article);
    setShowEditor(true);
  };

  const handleDeleteClick = (article: Article) => {
    setArticleToDelete(article);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (articleToDelete) {
      setArticles(prev => prev.filter(a => a.id !== articleToDelete.id));
      toast.success('Article deleted successfully', {
        description: `"${articleToDelete.title}" has been removed.`,
        duration: 3000,
      });
      setDeleteDialogOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleSaveArticle = (savedArticle: Article) => {
    if (editorMode === 'create') {
      setArticles(prev => [savedArticle, ...prev]);
      toast.success('Article created successfully', {
        description: `"${savedArticle.title}" has been ${savedArticle.status === 'published' ? 'published' : 'saved as draft'}.`,
        duration: 3000,
      });
    } else {
      setArticles(prev => prev.map(a => a.id === savedArticle.id ? savedArticle : a));
      toast.success('Article updated successfully', {
        description: `Changes to "${savedArticle.title}" have been saved.`,
        duration: 3000,
      });
    }
    setShowEditor(false);
    setCurrentArticle(null);
  };

  const notifications = [
    { id: 1, type: 'approval', message: 'Your article "Unity Gains Momentum" was approved', time: '2 hours ago' },
    { id: 2, type: 'comment', message: 'New comment on "Landmark Act" article', time: '5 hours ago' },
    { id: 3, type: 'milestone', message: 'You reached 2M+ total views!', time: '1 day ago' },
    { id: 4, type: 'earnings', message: 'Monthly earnings report is ready', time: '2 days ago' }
  ];

  const filteredArticles = articles.filter(article => {
    if (articleFilter === 'published') return article.status === 'published';
    if (articleFilter === 'drafts') return article.status === 'draft';
    if (articleFilter === 'under_review') return article.status === 'under_review';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      {/* Secondary Dashboard Header - Below main header */}
      <div className="fixed top-16 md:top-[104px] left-0 right-0 bg-white border-b border-[rgba(203,213,225,0.35)] z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <h2 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold">
            Author Dashboard
          </h2>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#657285]" />
              <Input
                placeholder="Search articles..."
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
                src={authorData.avatar} 
                alt={authorData.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="text-[#020a1c] text-[13px] leading-[18px] font-['Satoshi:Medium',_sans-serif]">
                  {authorData.name}
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
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'overview' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </button>
            
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'articles' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Articles</span>
            </button>
            
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'analytics' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </button>
            
            <button
              onClick={() => setActiveTab('comments')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'comments' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Comments</span>
            </button>
            
            <button
              onClick={() => setActiveTab('earnings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'earnings' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Earnings</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all font-['Satoshi:Medium',_sans-serif] text-[14px] ${
                activeTab === 'settings' 
                  ? 'bg-[#cc0000] text-white' 
                  : 'text-[#657285] hover:bg-[#f7fafc]'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
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
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Welcome Header */}
              <div className="bg-white rounded-[12px] p-6 border border-[rgba(203,213,225,0.35)]">
                <div className="flex items-start gap-6">
                  <ImageWithFallback 
                    src={authorData.avatar} 
                    alt={authorData.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold mb-1">
                      Welcome back, {authorData.name.split(' ')[0]}! 👋
                    </h1>
                    <p className="text-[#657285] text-[15px] leading-[24px] font-['Satoshi:Regular',_sans-serif] mb-3">
                      {authorData.role}
                    </p>
                    <p className="text-[#657285] text-[14px] leading-[22px] font-['Satoshi:Regular',_sans-serif] max-w-2xl">
                      {authorData.bio}
                    </p>
                  </div>
                  <Button 
                    onClick={handleCreateArticle}
                    className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif] gap-2"
                  >
                    <PlusCircle className="w-4 h-4" />
                    Create New Article
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#cc0000]/10 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#cc0000]" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Total Views
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        {stats.totalViews.toLocaleString()}
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
                        Total Likes
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        {stats.totalLikes.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Total Comments
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        {stats.totalComments.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[#657285] text-[13px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                        Total Shares
                      </p>
                      <p className="text-[#020a1c] text-[24px] leading-[30px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        {stats.totalShares.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Activity & Notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                    Recent Notifications
                  </h3>
                  <div className="space-y-4">
                    {notifications.map(notif => (
                      <div key={notif.id} className="flex gap-3 p-3 hover:bg-[#f7fafc] rounded-lg transition-colors cursor-pointer">
                        <div className="w-8 h-8 bg-[#cc0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bell className="w-4 h-4 text-[#cc0000]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#020a1c] text-[14px] leading-[20px] font-['Satoshi:Medium',_sans-serif]">
                            {notif.message}
                          </p>
                          <p className="text-[#657285] text-[12px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button 
                      onClick={handleCreateArticle}
                      className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left"
                    >
                      <PlusCircle className="w-5 h-5 text-[#cc0000]" />
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          Write New Article
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          Start creating content
                        </p>
                      </div>
                    </button>
                    <button 
                      onClick={() => setActiveTab('analytics')}
                      className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left"
                    >
                      <BarChart3 className="w-5 h-5 text-[#cc0000]" />
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          View Analytics
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          Check performance
                        </p>
                      </div>
                    </button>
                    <button 
                      onClick={() => setActiveTab('comments')}
                      className="w-full flex items-center gap-3 p-4 bg-[#f7fafc] hover:bg-[#eef2f6] rounded-lg transition-colors text-left"
                    >
                      <MessageSquare className="w-5 h-5 text-[#cc0000]" />
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          Moderate Comments
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          8 pending reviews
                        </p>
                      </div>
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* My Articles Tab */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                  My Articles
                </h1>
                <Button 
                  onClick={handleCreateArticle}
                  className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif] gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  Create New Article
                </Button>
              </div>

              {/* Filter Tabs */}
              <Tabs value={articleFilter} onValueChange={setArticleFilter} className="w-full">
                <TabsList className="bg-white border border-[rgba(203,213,225,0.35)]">
                  <TabsTrigger value="published" className="font-['Satoshi:Medium',_sans-serif]">
                    Published ({articles.filter(a => a.status === 'published').length})
                  </TabsTrigger>
                  <TabsTrigger value="drafts" className="font-['Satoshi:Medium',_sans-serif]">
                    Drafts ({articles.filter(a => a.status === 'draft').length})
                  </TabsTrigger>
                  <TabsTrigger value="under_review" className="font-['Satoshi:Medium',_sans-serif]">
                    Under Review ({articles.filter(a => a.status === 'under_review').length})
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Articles List */}
              <div className="space-y-4">
                {filteredArticles.map(article => (
                  <Card key={article.id} className="p-6 border-[rgba(203,213,225,0.35)] hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-['Satoshi:Medium',_sans-serif]">
                            {article.category}
                          </Badge>
                          <span className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-3">
                          {article.title}
                        </h3>
                        
                        {article.status === 'published' && (
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif]">
                              <Eye className="w-4 h-4" />
                              {article.views.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-2 text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif]">
                              <Heart className="w-4 h-4" />
                              {article.likes.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-2 text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif]">
                              <MessageSquare className="w-4 h-4" />
                              {article.comments.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-2 text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif]">
                              <Share2 className="w-4 h-4" />
                              {article.shares.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => handleEditArticle(article)}
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteClick(article)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Performance Analytics
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif] mb-2">
                    Avg. Views per Article
                  </h3>
                  <p className="text-[#020a1c] text-[32px] leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold">
                    22,425
                  </p>
                  <p className="text-green-600 text-[13px] font-['Satoshi:Medium',_sans-serif] mt-2">
                    ↑ 12.5% from last month
                  </p>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif] mb-2">
                    Engagement Rate
                  </h3>
                  <p className="text-[#020a1c] text-[32px] leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold">
                    8.4%
                  </p>
                  <p className="text-green-600 text-[13px] font-['Satoshi:Medium',_sans-serif] mt-2">
                    ↑ 3.2% from last month
                  </p>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif] mb-2">
                    Reader Retention
                  </h3>
                  <p className="text-[#020a1c] text-[32px] leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold">
                    76%
                  </p>
                  <p className="text-red-600 text-[13px] font-['Satoshi:Medium',_sans-serif] mt-2">
                    ↓ 2.1% from last month
                  </p>
                </Card>
              </div>

              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                  Top Performing Articles
                </h3>
                <div className="space-y-3">
                  {articles.filter(a => a.status === 'published').map(article => (
                    <div key={article.id} className="flex items-center justify-between p-3 bg-[#f7fafc] rounded-lg">
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          {article.title}
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          {article.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-[#020a1c] text-[16px] font-['Satoshi:Bold',_sans-serif] font-bold">
                            {article.views.toLocaleString()}
                          </p>
                          <p className="text-[#657285] text-[11px] font-['Satoshi:Regular',_sans-serif]">
                            views
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Comment Moderation
              </h1>
              
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-[#f7fafc] rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                            John Doe
                          </p>
                          <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <p className="text-[#020a1c] text-[14px] leading-[22px] font-['Satoshi:Regular',_sans-serif] mb-3">
                        Great article! Really insightful perspective on the current political climate.
                      </p>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Check className="w-4 h-4" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Earnings & Insights
              </h1>
              
              <Card className="p-8 border-[rgba(203,213,225,0.35)] bg-gradient-to-br from-[#cc0000] to-[#990000] text-white">
                <p className="text-white/80 text-[14px] font-['Satoshi:Regular',_sans-serif] mb-2">
                  Total Earnings (This Month)
                </p>
                <p className="text-[48px] leading-[56px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                  ${stats.earnings.toLocaleString()}
                </p>
                <p className="text-white/90 text-[13px] font-['Satoshi:Regular',_sans-serif]">
                  Based on article views and engagement
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                    Earnings Breakdown
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif]">
                        Article Views
                      </span>
                      <span className="text-[#020a1c] text-[14px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        $6,240.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif]">
                        Engagement Bonus
                      </span>
                      <span className="text-[#020a1c] text-[14px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        $1,850.50
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif]">
                        Premium Subscriptions
                      </span>
                      <span className="text-[#020a1c] text-[14px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        $660.00
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                  <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                    Payment History
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#f7fafc] rounded-lg">
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          September 2024
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          Paid on Oct 1
                        </p>
                      </div>
                      <p className="text-[#020a1c] text-[16px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        $7,892.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#f7fafc] rounded-lg">
                      <div>
                        <p className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif]">
                          August 2024
                        </p>
                        <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif]">
                          Paid on Sep 1
                        </p>
                      </div>
                      <p className="text-[#020a1c] text-[16px] font-['Satoshi:Bold',_sans-serif] font-bold">
                        $8,234.50
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-['Satoshi:Bold',_sans-serif] font-bold">
                Settings
              </h1>
              
              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Profile Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={authorData.avatar} />
                        <AvatarFallback>ED</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Full Name
                    </label>
                    <Input defaultValue={authorData.name} className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Email
                    </label>
                    <Input defaultValue={authorData.email} className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Bio
                    </label>
                    <textarea 
                      className="w-full min-h-[100px] px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg font-['Satoshi:Regular',_sans-serif] text-[14px]"
                      defaultValue={authorData.bio}
                    />
                  </div>
                  
                  <Button className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif]">
                    Save Changes
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-[rgba(203,213,225,0.35)]">
                <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-['Satoshi:Bold',_sans-serif] font-bold mb-6">
                  Change Password
                </h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Current Password
                    </label>
                    <Input type="password" className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      New Password
                    </label>
                    <Input type="password" className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  <div>
                    <label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                      Confirm New Password
                    </label>
                    <Input type="password" className="font-['Satoshi:Regular',_sans-serif]" />
                  </div>
                  <Button className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif]">
                    Update Password
                  </Button>
                </div>
              </Card>
            </div>
          )}

        </div>
      </div>

      {/* Article Editor Modal */}
      {showEditor && (
        <ArticleEditor
          article={currentArticle}
          mode={editorMode}
          onSave={handleSaveArticle}
          onClose={() => {
            setShowEditor(false);
            setCurrentArticle(null);
          }}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-['Satoshi:Bold',_sans-serif]">
              Delete Article
            </AlertDialogTitle>
            <AlertDialogDescription className="font-['Satoshi:Regular',_sans-serif]">
              Are you sure you want to delete "{articleToDelete?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-['Satoshi:Medium',_sans-serif]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700 font-['Satoshi:Semi_Bold',_sans-serif]"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
