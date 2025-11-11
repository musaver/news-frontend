'use client'

import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import svgPaths from '@/imports/svg-ykc7st1had';
import NewsFlashLogo from './NewsFlashLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
            <div className="text-sm text-slate-600 font-medium">
              September 27 - 06:54 AM
            </div>
            <div className="flex justify-center">
              <NewsFlashLogo />
            </div>
            <div className="text-sm text-slate-600 font-medium text-right">
              New York, US: 20.2°C
            </div>
          </div>
        </div>
        
        {/* Sub Navigation Bar */}
        <div className="bg-[#cc0000] border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-10 flex items-center justify-between">
            <nav className="flex items-center gap-6 text-white text-sm font-medium">
              <a href="#" className="hover:opacity-80">Latest News</a>
              <div className="w-px h-4 bg-white/30"></div>
              <a href="#" className="hover:opacity-80">Business</a>
              <a href="#" className="hover:opacity-80">Finance</a>
              <a href="#" className="hover:opacity-80">Health</a>
              <a href="#" className="hover:opacity-80">Politics</a>
              <a href="#" className="hover:opacity-80">Fashion</a>
              <a href="#" className="hover:opacity-80">Real Estate</a>
              <a href="#" className="hover:opacity-80">Travel</a>
              <a href="#" className="hover:opacity-80">Entertainment</a>
              <a href="#" className="hover:opacity-80">Sports</a>
              <a href="#" className="hover:opacity-80">Tech</a>
              <a href="#" className="hover:opacity-80">Podcast</a>
            </nav>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
            >
              <Search className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-[#cc0000] h-16 flex items-center justify-between px-4">
        <div className="w-[150px] h-[35px]">
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
        </div>
        
        <div className="flex items-center gap-2">
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="px-6 py-8 space-y-8">
            <div className="space-y-8">
              <a href="#" className="block text-slate-800">Top Stories</a>
              <a href="#" className="block text-slate-800">Business</a>
              <a href="#" className="block text-slate-800">Finance</a>
              <a href="#" className="block text-slate-800">Health</a>
              <a href="#" className="block text-slate-800">Politics</a>
              <a href="#" className="block text-slate-800">Fashion</a>
              <a href="#" className="block text-slate-800">Real Estate</a>
              <a href="#" className="block text-slate-800">Travel</a>
              <a href="#" className="block text-slate-800">Entertainment</a>
              <a href="#" className="block text-slate-800">Sports</a>
              <a href="#" className="block text-slate-800">Tech</a>
              <a href="#" className="block text-slate-800">Podcast</a>
            </div>
            <div className="h-px bg-slate-300/35"></div>
            <div className="space-y-6">
              <a href="#" className="block text-slate-800">About</a>
              <a href="/careers" className="block text-slate-800">Careers</a>
              <a href="#" className="block text-slate-800">Authors</a>
              <a href="/advertise" className="block text-slate-800">Advertise</a>
              <a href="#" className="block text-slate-800">Contact</a>
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
                  className="flex-1 text-base outline-none placeholder-slate-400"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-3 p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 mb-2">Popular Searches</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Politics', 'Business', 'Health', 'Technology'].map((tag) => (
                        <button
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 mb-2">Recent Articles</h3>
                    <div className="space-y-2">
                      {[
                        { title: 'Small Businesses Flourish as US Government Expands Loan Access', category: 'Business' },
                        { title: 'Amber Hightower\'s Message of Unity Gains Momentum', category: 'Politics' }
                      ].map((article, index) => (
                        <div key={index} className="flex items-center p-1.5 hover:bg-slate-50 rounded cursor-pointer">
                          <div className="flex-1">
                            <h4 className="text-xs font-medium text-slate-900 line-clamp-2">{article.title}</h4>
                            <p className="text-xs text-slate-500">{article.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;