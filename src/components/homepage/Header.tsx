'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import svgPaths from '@/imports/svg-ykc7st1had';
import NewsFlashLogo from './NewsFlashLogo';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
}

interface SearchResults {
  categories: Category[];
  articles: Article[];
}

interface HeaderProps {
  categories?: Category[];
}

const Header = ({ categories: categoriesProp = [] }: HeaderProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResults>({ categories: [], articles: [] });
  const [isSearching, setIsSearching] = useState(false);
  const [categories, setCategories] = useState<Category[]>(categoriesProp);

  // Fetch categories if not provided
  useEffect(() => {
    if (categoriesProp.length === 0) {
      fetch('/api/categories')
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.categories) {
            setCategories(data.categories);
          }
        })
        .catch((error) => {
          console.error('Error fetching categories:', error);
        });
    } else {
      setCategories(categoriesProp);
    }
  }, [categoriesProp]);

  // Fetch initial data when search modal opens
  useEffect(() => {
    if (isSearchOpen && searchQuery === '') {
      fetchSearchResults('');
    }
  }, [isSearchOpen]);

  // Debounced search
  useEffect(() => {
    if (!isSearchOpen) return;

    const timer = setTimeout(() => {
      fetchSearchResults(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, isSearchOpen]);

  const fetchSearchResults = async (query: string) => {
    setIsSearching(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=5`);
      const data = await response.json();

      if (data.success) {
        setSearchResults({
          categories: data.categories || [],
          articles: data.articles || [],
        });
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (categorySlug: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleArticleClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="left-0 right-0 z-50 bg-white">
      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
            <div className="text-sm text-slate-600 font-medium">
              September 27 - 06:54 AM
            </div>
            <Link href="/" className="flex justify-center">
              <NewsFlashLogo />
            </Link>
            <div className="text-sm text-slate-600 font-medium text-right">
              New York, US: 20.2°C
            </div>
          </div>
        </div>
        
        {/* Sub Navigation Bar */}
        <div className="bg-[#cc0000] border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-10 flex items-center justify-between">
            <nav className="flex items-center gap-6 text-white text-md font-medium">
              <Link
                href="/"
                className={`hover:opacity-80 ${pathname === '/' ? 'border-b-2 border-white' : ''}`}
              >
                Latest News
              </Link>
              <div className="w-px h-4 bg-white/30"></div>
              {categories.map((category) => {
                const isActive = pathname === `/category/${category.id}`;
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className={`hover:opacity-80 ${isActive ? 'border-b-2 border-white' : ''}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <Link
                href={session ? '/dashboard' : '/register'}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
              >
                <User className="w-4 h-4 text-white/80" />
              </Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
              >
                <Search className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-[#cc0000] h-16 flex items-center justify-between px-4">
        <Link href="/" className="w-[150px] h-[35px]">
          <svg viewBox="0 0 150 30" fill="none" className="w-full h-full">
            <g clipPath="url(#clip0_mobile)">
              <path d={svgPaths.p1a725800} fill="white" opacity="0.4" />
              <path d={svgPaths.p111e0c00} fill="white" opacity="0.8" />
            </g>
            <defs>
              <clipPath id="clip0_mobile">
                <rect fill="white" height="30" width="150" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link
            href={session ? '/dashboard' : '/register'}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
          >
            <User className="w-[18px] h-[18px] text-white/80" />
          </Link>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
          >
            <Search className="w-[18px] h-[18px] text-white/80" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#cc0000]" />
            ) : (
              <Menu className="w-5 h-5 text-[#cc0000]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-40">
          <div className="px-6 py-8 space-y-8">
            <div className="space-y-8">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-slate-800 ${pathname === '/' ? 'font-bold text-[#cc0000]' : ''}`}
              >
                Top Stories
              </Link>
              {categories.map((category) => {
                const isActive = pathname === `/category/${category.id}`;
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-slate-800 ${isActive ? 'font-bold text-[#cc0000]' : ''}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
            <div className="h-px bg-slate-300/35"></div>
            <div className="space-y-6">
              <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="block text-slate-800">About</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="block text-slate-800">Careers</Link>
              <Link href="/authors" onClick={() => setIsMenuOpen(false)} className="block text-slate-800">Authors</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="block text-slate-800">Advertise</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="block text-slate-800">Contact</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
          <div className="flex items-start justify-center pt-16 px-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg">
              <div className="flex items-center p-4 border-b border-slate-200">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search NewsFlash..."
                  autoFocus
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="flex-1 text-base outline-none placeholder-slate-400"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="ml-3 p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {isSearching ? (
                  <div className="text-center py-8 text-slate-500">
                    <p className="text-sm">Searching...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Categories */}
                    {searchResults.categories.length > 0 && (
                      <div>
                        <h3 className="text-xs font-medium text-slate-500 mb-2">
                          {searchQuery ? 'Matching Categories' : 'Categories'}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {searchResults.categories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/category/${category.id}`}
                              onClick={() => handleCategoryClick(category.slug)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Articles */}
                    {searchResults.articles.length > 0 && (
                      <div>
                        <h3 className="text-xs font-medium text-slate-500 mb-2">
                          {searchQuery ? 'Matching Articles' : 'Recent Articles'}
                        </h3>
                        <div className="space-y-2">
                          {searchResults.articles.map((article) => (
                            <Link
                              key={article.id}
                              href={`/news-details/${article.id}`}
                              onClick={handleArticleClick}
                              className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors"
                            >
                              {article.coverImage && (
                                <img
                                  src={article.coverImage}
                                  alt={article.title}
                                  className="w-16 h-16 object-cover rounded flex-shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-medium text-slate-900 line-clamp-2 mb-1">
                                  {article.title}
                                </h4>
                                <p className="text-xs text-slate-500">{article.category}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* No results */}
                    {searchQuery && searchResults.categories.length === 0 && searchResults.articles.length === 0 && (
                      <div className="text-center py-8 text-slate-500">
                        <p className="text-sm">No results found for &quot;{searchQuery}&quot;</p>
                        <p className="text-xs mt-1">Try a different search term</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;