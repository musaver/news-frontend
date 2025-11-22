import React from 'react';
import { notFound } from 'next/navigation';
import {
  FeaturedSection,
  LatestNewsSection,
  FinanceSidebar,
  PodcastSection
} from '@/components/homepage';
import { imgLatestNews } from "@/imports/svg-92wog";
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc, and, or } from 'drizzle-orm';
import { Article } from '@/types/article';

// Mock images - in a real app these would come from the Figma import
const mockImages = {
  featuredArticle: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
  healthNews: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
  fashionNews: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
  realEstateNews: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
  politicsLarge: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=531&h=428&fit=crop',
  healthLarge: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=864&h=628&fit=crop',
  businessLarge: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=507&h=451&fit=crop',
  travel: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=281&h=200&fit=crop',
  entertainment: 'https://images.unsplash.com/photo-1489599505865-b0c71bb7e34a?w=281&h=200&fit=crop',
  sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=281&h=200&fit=crop',
  tech: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=281&h=200&fit=crop',
  podcast: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
  podcastThumb1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=140&h=110&fit=crop',
  podcastThumb2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=110&fit=crop',
  podcastThumb3: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=140&h=110&fit=crop',
  finance: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=306&h=250&fit=crop',
  politicsSmall1: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=125&h=100&fit=crop',
  politicsSmall2: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=125&h=100&fit=crop',
  politicsSmall3: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=125&h=100&fit=crop',
  politicsSmall4: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=125&h=100&fit=crop'
};

// Force dynamic rendering for database queries
export const dynamic = 'force-dynamic';

// Fetch category by slug or ID
async function fetchCategory(categoryId: string) {
  try {
    // Try to find by slug first, then by ID if it's a number
    const isNumericId = !isNaN(Number(categoryId));

    const category = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .where(
        isNumericId
          ? or(eq(categories.slug, categoryId), eq(categories.id, Number(categoryId)))!
          : eq(categories.slug, categoryId)
      )
      .limit(1);

    return category[0] || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// Fetch articles for a specific category by category ID
async function fetchArticlesByCategory(categoryId: number, limit?: number) {
  try {
    const conditions = [
      eq(articles.status, 'published'),
      eq(articles.categoryId, categoryId)
    ];

    let query = db.select({
      id: articles.id,
      title: articles.title,
      category: categories.name,
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
      }
    })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(...conditions))
      .orderBy(desc(articles.publishedAt));

    if (limit) {
      query = query.limit(limit) as any;
    }

    const result = await query;
    return result.map(article => ({
      ...article,
      tags: Array.isArray(article.tags) ? article.tags : [],
    }));
  } catch (error) {
    console.error('Error fetching category articles:', error);
    return [];
  }
}

// Fetch latest articles for sidebar (from all categories)
async function fetchLatestArticles(limit: number = 8) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
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
      .where(eq(articles.status, 'published'))
      .orderBy(desc(articles.publishedAt))
      .limit(limit);

    return result.map(article => ({
      ...article,
      tags: Array.isArray(article.tags) ? article.tags : [],
    }));
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return [];
  }
}

interface CategoryPageProps {
  params: Promise<{
    'category-id': string;
  }>;
}

// Main Category Page Component
export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryId = resolvedParams['category-id'];

  // Fetch category details
  const category = await fetchCategory(categoryId);

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Fetch articles in parallel
  const [categoryArticles, sidebarArticles] = await Promise.all([
    fetchArticlesByCategory(category.id, 100),
    fetchLatestArticles(8)
  ]);

  return (
    <div className="min-h-screen bg-white">

      <main>
        {/* Category Header Banner */}
        <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
            {/* Left Text with Bullet */}
            

            <div className="flex items-center gap-3 mt-6 px-1 md:px-0">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h2 className="text-[12.5px] leading-[19px] md:text-lg font-normal">
                {category.name}
              </h2>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-fit" data-name="Mask Group">
              <div
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] not-italic text-[65.898px] top-[42px] translate-y-[-50%] w-full"
                style={{ maskImage: `url('${imgLatestNews}')`, maskSize: 'cover' }}
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>{category.name}</p>
              </div>
              <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', fontSize: '78px' }}>{category.name}</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
          {categoryArticles.length > 0 ? (
            <>
              <FeaturedSection mockImages={mockImages} articles={categoryArticles} />
              <LatestNewsSection mockImages={mockImages} articles={categoryArticles.slice(1)} title={`All articles of ${category.name}`} />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#657285] text-lg">No articles found in {category.name} category.</p>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main Content Grid */}
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            {categoryArticles.length > 0 ? (
              <div className="flex grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="lg:col-span-3 space-y-12">
                  <FeaturedSection mockImages={mockImages} articles={categoryArticles} />
                  <LatestNewsSection mockImages={mockImages} articles={categoryArticles.slice(1)} title={`All articles of ${category.name}`} />
                </div>
                {/* Vertical Divider */}
                <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>
                <div className="lg:col-span-1">
                  <FinanceSidebar mockImages={mockImages} articles={sidebarArticles} title="Latest News" />
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#657285] text-lg">No articles found in {category.name} category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Podcast Section - only show if there are articles */}
        {categoryArticles.length >= 3 && (
          <PodcastSection mockImages={mockImages} articles={categoryArticles.slice(0, 3)} />
        )}
      </main>
    </div>
  );
}
