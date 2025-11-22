import React from 'react';
import {
  Header,
  Footer,
  FeaturedSection,
  LatestNewsSection,
  TopStoriesSection,
  FinanceSidebar,
  PoliticsNewsSection,
  HealthNewsSection,
  BusinessSection,
  FourColumnSection,
  PodcastSection
} from '@/components/homepage';
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc, and } from 'drizzle-orm';

// Force dynamic rendering for database queries
export const dynamic = 'force-dynamic';

// Fetch all categories
async function fetchCategories() {
  try {
    const result = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .orderBy(categories.name);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Mock images - fallback for articles without cover images
const mockImages = {
  featuredArticle: 'https://picsum.photos/seed/featured/600/400',
  healthNews: 'https://picsum.photos/seed/health/300/200',
  fashionNews: 'https://picsum.photos/seed/fashion/300/200',
  realEstateNews: 'https://picsum.photos/seed/realestate/300/200',
  politicsLarge: 'https://picsum.photos/seed/politics/531/428',
  healthLarge: 'https://picsum.photos/seed/healthlarge/864/628',
  businessLarge: 'https://picsum.photos/seed/business/507/451',
  travel: 'https://picsum.photos/seed/travel/281/200',
  entertainment: 'https://picsum.photos/seed/entertainment/281/200',
  sports: 'https://picsum.photos/seed/sports/281/200',
  tech: 'https://picsum.photos/seed/tech/281/200',
  podcast: 'https://picsum.photos/seed/podcast/800/600',
  podcastThumb1: 'https://picsum.photos/seed/podcast1/140/110',
  podcastThumb2: 'https://picsum.photos/seed/podcast2/140/110',
  podcastThumb3: 'https://picsum.photos/seed/podcast3/140/110',
  finance: 'https://picsum.photos/seed/finance/306/250',
  politicsSmall1: 'https://picsum.photos/seed/politics1/125/100',
  politicsSmall2: 'https://picsum.photos/seed/politics2/125/100',
  politicsSmall3: 'https://picsum.photos/seed/politics3/125/100',
  politicsSmall4: 'https://picsum.photos/seed/politics4/125/100'
};

async function fetchArticlesByCategory(category: string, limit?: number) {
  try {
    const conditions = [
      eq(articles.status, 'published'),
      eq(categories.name, category)
    ];

    let query = db
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
    console.error(`Error fetching ${category} articles:`, error);
    return [];
  }
}

async function fetchLatestArticles(limit: number = 10) {
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

// Main App Component
export default async function Home() {
  // Fetch categories and articles in parallel
  const [
    allCategories,
    businessArticles,
    financeArticles,
    politicsArticles,
    healthArticles,
    fashionArticles,
    realEstateArticles,
    travelArticles,
    entertainmentArticles,
    sportsArticles,
    techArticles,
    latestArticles
  ] = await Promise.all([
    fetchCategories(),
    fetchArticlesByCategory('Business', 5),
    fetchArticlesByCategory('Finance', 8),
    fetchArticlesByCategory('Politics', 5),
    fetchArticlesByCategory('Health', 6),
    fetchArticlesByCategory('Fashion', 4),
    fetchArticlesByCategory('Real Estate', 3),
    fetchArticlesByCategory('Travel', 3),
    fetchArticlesByCategory('Entertainment', 3),
    fetchArticlesByCategory('Sports', 3),
    fetchArticlesByCategory('Tech', 4),
    fetchLatestArticles(3)
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header categories={allCategories} />

      <main>
        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
          <FeaturedSection
            mockImages={mockImages}
            articles={businessArticles}
          />
          <LatestNewsSection
            mockImages={mockImages}
            articles={latestArticles}
          />
          <TopStoriesSection
            mockImages={mockImages}
            articles={latestArticles}
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main Content Grid */}
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="flex grid-cols-1 lg:grid-cols-4 gap-2">
              <div className="lg:col-span-3 space-y-12">
                <FeaturedSection
                  mockImages={mockImages}
                  articles={businessArticles}
                />
                <LatestNewsSection
                  mockImages={mockImages}
                  articles={latestArticles}
                />
                <TopStoriesSection
                  mockImages={mockImages}
                  articles={latestArticles}
                />
              </div>
              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>
              <div className="lg:col-span-1">
                <FinanceSidebar
                  mockImages={mockImages}
                  articles={financeArticles}
                />
              </div>
            </div>
          </div>
        </div>

        <PoliticsNewsSection
          mockImages={mockImages}
          articles={politicsArticles}
        />
        <HealthNewsSection
          mockImages={mockImages}
          articles={healthArticles}
        />
        <BusinessSection
          mockImages={mockImages}
          businessArticles={businessArticles}
          fashionArticles={fashionArticles}
        />
        <FourColumnSection
          mockImages={mockImages}
          travelArticles={travelArticles}
          entertainmentArticles={entertainmentArticles}
          sportsArticles={sportsArticles}
          techArticles={techArticles}
        />
        <PodcastSection
          mockImages={mockImages}
          articles={[...techArticles, ...entertainmentArticles].slice(0, 3)}
        />
      </main>

      <Footer />
    </div>
  );
}
