'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/types/article';
import CommentsSection from '@/components/comments/CommentsSection';
import SaveButton from '@/components/SaveButton';
import {
  HeaderSkeleton,
  CoverImageSkeleton,
  AuthorSkeleton,
  ContentSkeleton,
  RelatedArticlesSkeleton,
  SidebarSkeleton,
} from '@/components/skeletons/ArticleSkeleton';

// Category Badge Component
const CategoryBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-xs font-medium text-[#cc0000] bg-[rgba(204,0,0,0.05)] border border-[rgba(204,0,0,0.1)] rounded backdrop-blur-sm">
    {children}
  </span>
);

// Article Date Component
const ArticleDate = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs text-slate-500 font-medium">{children}</span>
);

// Format full date
function formatFullDate(date: Date | null | undefined): string {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

interface MinimalArticleData {
  id: string;
  title: string;
}

interface HeaderData {
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: Date | null;
  category: {
    id: number;
    name: string;
  };
}

interface AuthorData {
  author: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
  publishedAt: Date | null;
  readingTime: string;
}

interface ContentData {
  content: string;
  isSaved: boolean;
  commentsCount: number;
}

interface RelatedData {
  relatedArticles: Array<{
    id: string;
    title: string;
    category: string;
    coverImage: string | null;
    publishedAt: Date | null;
  }>;
  mostRecentArticles: Array<{
    id: string;
    title: string;
    category: string;
    coverImage: string | null;
    publishedAt: Date | null;
  }>;
  categoryId: number;
}

interface ArticleDetailClientProps {
  articleId: string;
  initialData: MinimalArticleData;
}

export default function ArticleDetailClient({
  articleId,
  initialData,
}: ArticleDetailClientProps) {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [authorData, setAuthorData] = useState<AuthorData | null>(null);
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [relatedData, setRelatedData] = useState<RelatedData | null>(null);

  const [loadingHeader, setLoadingHeader] = useState(true);
  const [loadingAuthor, setLoadingAuthor] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);
  const [loadingRelated, setLoadingRelated] = useState(true);

  // Fetch header data (description, image, category, date)
  useEffect(() => {
    async function fetchHeader() {
      try {
        const response = await fetch(`/api/articles/${articleId}/header`);
        if (response.ok) {
          const data = await response.json();
          setHeaderData(data);
        }
      } catch (error) {
        console.error('Error fetching header data:', error);
      } finally {
        setLoadingHeader(false);
      }
    }

    fetchHeader();
  }, [articleId]);

  // Fetch author data after header data
  useEffect(() => {
    if (!headerData) return;

    async function fetchAuthor() {
      try {
        const response = await fetch(`/api/articles/${articleId}/author`);
        if (response.ok) {
          const data = await response.json();
          setAuthorData(data);
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      } finally {
        setLoadingAuthor(false);
      }
    }

    fetchAuthor();
  }, [articleId, headerData]);

  // Fetch content data after author data
  useEffect(() => {
    if (!authorData) return;

    async function fetchContent() {
      try {
        const response = await fetch(`/api/articles/${articleId}/content`);
        if (response.ok) {
          const data = await response.json();
          setContentData(data);
        }
      } catch (error) {
        console.error('Error fetching content data:', error);
      } finally {
        setLoadingContent(false);
      }
    }

    fetchContent();
  }, [articleId, authorData]);

  // Fetch related data after content data
  useEffect(() => {
    if (!contentData) return;

    async function fetchRelated() {
      try {
        const response = await fetch(`/api/articles/${articleId}/related`);
        if (response.ok) {
          const data = await response.json();
          setRelatedData(data);
        }
      } catch (error) {
        console.error('Error fetching related data:', error);
      } finally {
        setLoadingRelated(false);
      }
    }

    fetchRelated();
  }, [articleId, contentData]);

  return (
    <main>
      <div className="max-w-[1320px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_354px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Article Header - Title always visible, rest progressive */}
            <div className="space-y-4">
              {loadingHeader ? (
                <>
                  <HeaderSkeleton />
                  <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-[#020a1c]">
                    {initialData.title}
                  </h1>
                </>
              ) : headerData ? (
                <>
                  <div className="flex items-center gap-3">
                    <Link href={`/category/${headerData.category.id}`}>
                      <CategoryBadge>{headerData.category.name}</CategoryBadge>
                    </Link>
                    <ArticleDate>{formatDate(headerData.publishedAt)}</ArticleDate>
                  </div>
                  <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-[#020a1c]">
                    {initialData.title}
                  </h1>
                </>
              ) : (
                <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-[#020a1c]">
                  {initialData.title}
                </h1>
              )}
            </div>

            {/* Divider Line */}
            <div className="h-px bg-[rgba(203,213,225,0.35)] w-full mt-2"></div>

            {/* Author Metadata - Progressive loading */}
            {loadingAuthor ? (
              <AuthorSkeleton />
            ) : authorData ? (
              <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-full md:w-[476px] mt-2">
                {authorData.author && (
                  <Link
                    href={`/authors/${authorData.author.id}`}
                    className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {authorData.author.image && (
                      <div className="overflow-clip relative rounded-[99px] shrink-0 size-[30px]">
                        <div className="absolute inset-0 rounded-[99px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
                            <Image
                              alt={authorData.author.name || 'Author'}
                              className="absolute h-full w-full object-cover"
                              src={authorData.author.image}
                              width={30}
                              height={30}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.906px] text-nowrap hover:text-[#cc0000] transition-colors">
                          <p className="leading-[18.2px] text-[12.906px] whitespace-pre">
                            {authorData.author.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>

                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.906px] text-nowrap">
                      <p className="leading-[18.2px] whitespace-pre">
                        {formatFullDate(authorData.publishedAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>

                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.906px] w-full">
                      <p className="leading-[19.6px]">{authorData.readingTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Featured Image - Progressive loading */}
            {loadingHeader ? (
              <CoverImageSkeleton />
            ) : headerData?.coverImage ? (
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={headerData.coverImage}
                  alt={initialData.title}
                  width={1200}
                  height={500}
                  priority
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            ) : null}

            {/* Article Content with Social Share - Progressive loading */}
            {loadingContent ? (
              <ContentSkeleton />
            ) : contentData ? (
              <div className="relative flex gap-8">
                {/* Social Share Icons - Left Side (Sticky) */}
                <div className="hidden lg:block">
                  <div className="sticky top-32 flex flex-col gap-4">
                    <SaveButton articleId={articleId} initialIsSaved={contentData.isSaved} />

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none flex-1">
                  {headerData?.excerpt && (
                    <p className="text-[18px] leading-[28px] text-[#020a1c] mb-6 font-medium">
                      {headerData.excerpt}
                    </p>
                  )}

                  <div
                    className="text-[18px] leading-[28px] text-[#020a1c]"
                    dangerouslySetInnerHTML={{ __html: contentData.content }}
                  />
                </div>
              </div>
            ) : null}

            {/* Related Articles - Progressive loading */}
            {loadingRelated ? (
              <RelatedArticlesSkeleton />
            ) : relatedData && relatedData.relatedArticles.length > 0 ? (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[4px] h-[15px] bg-[#cc0000]"></div>
                    <h2 className="text-[14.5px] leading-[22px] font-normal text-[#020a1c]">
                      Related Articles
                    </h2>
                  </div>
                  <Link
                    href={`/category/${relatedData.categoryId}`}
                    className="flex items-center gap-1 text-sm text-slate-700 font-medium hover:text-[#cc0000] transition-colors cursor-pointer"
                  >
                    <span>View all</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedData.relatedArticles.map((relArticle) => (
                    <Link
                      key={relArticle.id}
                      href={`/news-details/${relArticle.id}`}
                      className="flex flex-col gap-[12px] cursor-pointer"
                    >
                      {relArticle.coverImage && (
                        <div className="rounded-[8px] overflow-hidden h-[200px] w-full">
                          <Image
                            src={relArticle.coverImage}
                            alt={relArticle.title}
                            width={400}
                            height={200}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="px-[4px] space-y-[4px]">
                        <div className="flex items-center gap-[6px] text-[10.875px]">
                          <span className="text-[#657285] leading-[15.6px]">
                            {relArticle.category}
                          </span>
                          <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                          <span className="text-[#657285] leading-[15.6px]">
                            {formatDate(relArticle.publishedAt)}
                          </span>
                        </div>
                        <h4 className="text-[16.594px] leading-[21.6px] font-normal text-[#020a1c] hover:text-[#cc0000]">
                          {relArticle.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Comments Section - Load after related articles */}
            {contentData && (
              <CommentsSection
                articleId={articleId}
                initialCommentsCount={contentData.commentsCount}
              />
            )}
          </div>

          {/* Sidebar - Progressive loading */}
          <aside className="space-y-8">
            {loadingRelated ? (
              <SidebarSkeleton />
            ) : relatedData && relatedData.mostRecentArticles.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-[#cc0000]"></div>
                  <h2 className="text-[14.625px] leading-[22px] font-normal">Most Recent</h2>
                </div>

                <div className="space-y-6">
                  {relatedData.mostRecentArticles.map((recentArticle, index) => (
                    <div key={recentArticle.id}>
                      <Link href={`/news-details/${recentArticle.id}`}>
                        <article className="flex gap-4">
                          {recentArticle.coverImage && (
                            <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                              <Image
                                src={recentArticle.coverImage}
                                alt={recentArticle.title}
                                width={125}
                                height={100}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2 text-[10.688px]">
                              <span className="text-[#657285]">{recentArticle.category}</span>
                              <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                              <span className="text-[#657285]">
                                {formatDate(recentArticle.publishedAt)}
                              </span>
                            </div>
                            <h4 className="text-[14.75px] leading-[20px] font-normal text-[#020a1c] hover:text-[#cc0000] cursor-pointer">
                              {recentArticle.title}
                            </h4>
                          </div>
                        </article>
                      </Link>
                      {index < relatedData.mostRecentArticles.length - 1 && (
                        <div className="h-px bg-[rgba(203,213,225,0.35)] mt-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
