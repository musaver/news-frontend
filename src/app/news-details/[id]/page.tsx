import React from 'react';
import { notFound } from 'next/navigation';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc, and, ne } from 'drizzle-orm';
import { formatDate } from '@/types/article';

// Force dynamic rendering for database queries
export const dynamic = 'force-dynamic';

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

// Calculate reading time based on content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

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

// Fetch article by ID
async function fetchArticleById(articleId: string) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        categoryId: categories.id,
        content: articles.content,
        excerpt: articles.excerpt,
        tags: articles.tags,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
        createdAt: articles.createdAt,
        author: {
          id: user.id,
          name: user.name,
          image: user.image,
        },
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(eq(articles.id, articleId), eq(articles.status, 'published')))
      .limit(1);

    if (result.length === 0) return null;

    return {
      ...result[0],
      tags: Array.isArray(result[0].tags) ? result[0].tags : [],
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Fetch related articles from the same category
async function fetchRelatedArticles(categoryId: number, currentArticleId: string, limit: number = 6) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(
        and(
          eq(articles.status, 'published'),
          eq(articles.categoryId, categoryId),
          ne(articles.id, currentArticleId)
        )
      )
      .orderBy(desc(articles.publishedAt))
      .limit(limit);

    return result;
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

// Fetch most recent articles
async function fetchMostRecentArticles(limit: number = 5) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(eq(articles.status, 'published'))
      .orderBy(desc(articles.publishedAt))
      .limit(limit);

    return result;
  } catch (error) {
    console.error('Error fetching most recent articles:', error);
    return [];
  }
}

interface NewsDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// News Details Page Component
export default async function NewsDetailsPage({ params }: NewsDetailsPageProps) {
  const resolvedParams = await params;
  const articleId = resolvedParams.id;

  // Fetch article data
  const article = await fetchArticleById(articleId);

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  // Fetch related and recent articles
  const relatedArticles = await fetchRelatedArticles(article.categoryId, article.id, 6);
  const mostRecentArticles = await fetchMostRecentArticles(5);

  // Calculate reading time
  const readingTime = calculateReadingTime(article.content);

  return (
    <>
      <Header />

      <div className="pt-16 md:pt-[104px]">

      </div>

      <main>
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_354px] gap-8">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CategoryBadge>{article.category}</CategoryBadge>
                  <ArticleDate>{formatDate(article.publishedAt)}</ArticleDate>
                </div>
                <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-[#020a1c]">
                  {article.title}
                </h1>
              </div>

              {/* Divider Line */}
              <div className="h-px bg-[rgba(203,213,225,0.35)] w-full mt-2"></div>

              {/* Article Details - Author, Date, Reading Time */}
              <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-full md:w-[476px] mt-2">
                {/* Author */}
                {article.author && (
                  <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                    {/* Author Photo */}
                    {article.author.image && (
                      <div className="overflow-clip relative rounded-[99px] shrink-0 size-[30px]">
                        <div className="absolute inset-0 rounded-[99px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
                            <Image
                              alt={article.author.name || 'Author'}
                              className="absolute h-full w-full object-cover"
                              src={article.author.image}
                              width={30}
                              height={30}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Author Name */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.906px] text-nowrap">
                          <p className="leading-[18.2px] text-[12.906px] whitespace-pre">{article.author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Red Divider Dot */}
                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>

                {/* Published Date */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.906px] text-nowrap">
                      <p className="leading-[18.2px] whitespace-pre">{formatFullDate(article.publishedAt)}</p>
                    </div>
                  </div>
                </div>

                {/* Red Divider Dot */}
                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>

                {/* Reading Time */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.906px] w-full">
                      <p className="leading-[19.6px]">{readingTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {article.coverImage && (
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    width={1200}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              )}

              {/* Article Content with Social Share */}
              <div className="relative flex gap-8">
                {/* Social Share Icons - Left Side (Sticky) */}
                <div className="hidden lg:block">
                  <div className="sticky top-32 flex flex-col gap-4">
                    {/* Facebook */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>

                    {/* Twitter/X */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>

                    {/* LinkedIn */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>

                    {/* WhatsApp */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </button>

                    {/* Email */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>

                    {/* Link/Copy */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none flex-1">
                  {article.excerpt && (
                    <p className="text-[18px] leading-[28px] text-[#020a1c] mb-6 font-medium">
                      {article.excerpt}
                    </p>
                  )}

                  <div
                    className="text-[18px] leading-[28px] text-[#020a1c]"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-[10px] mb-6">
                    <div className="w-[4px] h-[15px] bg-[#cc0000]"></div>
                    <h2 className="text-[14.5px] leading-[22px] font-normal text-[#020a1c]">Related Articles</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((relArticle) => (
                      <a
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
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="px-[4px] space-y-[4px]">
                          <div className="flex items-center gap-[6px] text-[10.875px]">
                            <span className="text-[#657285] leading-[15.6px]">{relArticle.category}</span>
                            <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                            <span className="text-[#657285] leading-[15.6px]">{formatDate(relArticle.publishedAt)}</span>
                          </div>
                          <h4 className="text-[16.594px] leading-[21.6px] font-normal text-[#020a1c] hover:text-[#cc0000]">
                            {relArticle.title}
                          </h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Most Recent */}
              {mostRecentArticles.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-[#cc0000]"></div>
                    <h2 className="text-[14.625px] leading-[22px] font-normal">Most Recent</h2>
                  </div>

                  <div className="space-y-6">
                    {mostRecentArticles.map((recentArticle, index) => (
                      <div key={recentArticle.id}>
                        <a href={`/news-details/${recentArticle.id}`}>
                          <article className="flex gap-4">
                            {recentArticle.coverImage && (
                              <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                                <Image
                                  src={recentArticle.coverImage}
                                  alt={recentArticle.title}
                                  width={125}
                                  height={100}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2 text-[10.688px]">
                                <span className="text-[#657285]">{recentArticle.category}</span>
                                <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                                <span className="text-[#657285]">{formatDate(recentArticle.publishedAt)}</span>
                              </div>
                              <h4 className="text-[14.75px] leading-[20px] font-normal text-[#020a1c] hover:text-[#cc0000] cursor-pointer">
                                {recentArticle.title}
                              </h4>
                            </div>
                          </article>
                        </a>
                        {index < mostRecentArticles.length - 1 && (
                          <div className="h-px bg-[rgba(203,213,225,0.35)] mt-6"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
