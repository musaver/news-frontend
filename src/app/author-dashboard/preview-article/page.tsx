'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Header,
  Footer,
} from '@/components/homepage';

// SVG Icons
const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const EditIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

interface ArticleData {
  title: string;
  category: string;
  content: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  status: string;
}

export default function PreviewArticlePage() {
  const router = useRouter();
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    // Load article data from sessionStorage
    const storedData = sessionStorage.getItem('previewArticle');
    if (storedData) {
      setArticleData(JSON.parse(storedData));
    } else {
      // If no data, redirect back
      router.back();
    }
  }, [router]);

  if (!articleData) {
    return (
      <div className="min-h-screen bg-[#f7fafc] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#657285] text-[16px]">Loading preview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />
      
      <main className="pt-16 md:pt-[104px]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Preview Header */}
          <div className="bg-white rounded-[12px] border border-[rgba(203,213,225,0.35)] p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <p className="text-[#657285] text-[14px]">
                Preview Mode - This is how your article will appear to readers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors"
              >
                <EditIcon className="w-4 h-4" />
                Back to Edit
              </button>
              <button
                onClick={() => router.push('/author-dashboard/articles')}
                className="w-8 h-8 rounded-full hover:bg-[#f7fafc] flex items-center justify-center transition-colors"
              >
                <XIcon className="w-5 h-5 text-[#657285]" />
              </button>
            </div>
          </div>

          {/* Article Preview */}
          <div className="bg-white rounded-[12px] border border-[rgba(203,213,225,0.35)] overflow-hidden">
            <div className="p-6 md:p-8 space-y-6">
              {/* Cover Image */}
              {articleData.coverImage && (
                <div className="rounded-lg overflow-hidden -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-8">
                  <img 
                    src={articleData.coverImage} 
                    alt={articleData.title} 
                    className="w-full h-64 md:h-96 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800';
                    }}
                  />
                </div>
              )}
              
              {/* Article Meta */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium border border-[rgba(203,213,225,0.5)] rounded">
                    {articleData.category}
                  </span>
                  <span className="text-[#657285] text-[14px]">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="text-[#020a1c] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold mb-4">
                  {articleData.title || 'Untitled Article'}
                </h1>
                
                {/* Excerpt */}
                {articleData.excerpt && (
                  <p className="text-[#657285] text-[18px] leading-[28px] mb-4">
                    {articleData.excerpt}
                  </p>
                )}
                
                {/* Tags */}
                {articleData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {articleData.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-block px-3 py-1 text-xs font-medium border border-[rgba(203,213,225,0.5)] rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Divider */}
                <div className="border-t border-[rgba(203,213,225,0.35)] pt-6 mt-6">
                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <div className="text-[#020a1c] text-[16px] leading-[28px] whitespace-pre-wrap">
                      {articleData.content || 'No content yet...'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info (Mock) */}
              <div className="border-t border-[rgba(203,213,225,0.35)] pt-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#020a1c] text-[16px] font-bold">ED</span>
                  </div>
                  <div>
                    <p className="text-[#020a1c] text-[16px] font-medium">
                      Emily Davis
                    </p>
                    <p className="text-[#657285] text-[14px]">
                      Senior Political Correspondent
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Share Preview (Mock) */}
              <div className="border-t border-[rgba(203,213,225,0.35)] pt-6">
                <p className="text-[#657285] text-[14px] mb-3">
                  Share this article
                </p>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#f7fafc] hover:bg-[#eef2f6] flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f7fafc] hover:bg-[#eef2f6] flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f7fafc] hover:bg-[#eef2f6] flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] font-medium hover:bg-white transition-colors"
            >
              Continue Editing
            </button>
            <button
              onClick={() => {
                // In a real app, publish the article here
                router.push('/author-dashboard/articles');
              }}
              className="px-6 py-3 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors"
            >
              Publish Article
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

