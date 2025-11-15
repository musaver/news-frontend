import React from 'react';
import {
  Header,
  Footer,
  FeaturedSection,
  LatestNewsSection,
  FinanceSidebar,
  PodcastSection
} from '@/components/homepage';
import { imgLatestNews } from "@/imports/svg-92wog";
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc, and } from 'drizzle-orm';
import { Article } from '@/types/article';

// Fetch articles from database
async function fetchLatestArticles(limit?: number) {
  const conditions = [eq(articles.status, 'published')];

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
    .leftJoin(user, eq(articles.authorId, user.id))
    .leftJoin(categories, eq(articles.categoryId, categories.id))
    .where(and(...conditions))
    .orderBy(desc(articles.publishedAt));

  if (limit) {
    query = query.limit(limit) as any;
  }

  return await query;
}

async function fetchArticlesByCategory(category: string, limit?: number) {
  const conditions = [
    eq(articles.status, 'published'),
    eq(categories.name, category)
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
    .leftJoin(user, eq(articles.authorId, user.id))
    .leftJoin(categories, eq(articles.categoryId, categories.id))
    .where(and(...conditions))
    .orderBy(desc(articles.publishedAt));

  if (limit) {
    query = query.limit(limit) as any;
  }

  return await query;
}

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

// Main App Component
export default async function CategoryPage() {
  // Fetch articles for the category page
  const latestArticles = await fetchLatestArticles(10);
  const financeArticles = await fetchArticlesByCategory('Finance', 8);
  const podcastArticles = await fetchArticlesByCategory('Podcasts', 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      
      
      <main className="pt-16 md:pt-[104px]">

      <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
        <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
          {/* Left Text with Bullet */}
          <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%] w-[98.06px]" data-name="Left Text">
            <div className="absolute bg-[#cc0000] h-[15px] left-[calc(50%-47.03px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[4px]" data-name="bullet" />
            <div className="absolute flex flex-col font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-[11px] translate-y-[-50%] w-[84.26px]">
              <p className="leading-[22px]">Latest News</p>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[405.59px]" data-name="Mask Group">
            <div 
              className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[405.59px_84px] not-italic text-[65.898px] top-[42px] translate-y-[-50%] w-[405.79px]" 
              style={{ maskImage: `url('${imgLatestNews}')` }}
            >
              <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>Latest News</p>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
          <FeaturedSection mockImages={mockImages} articles={latestArticles} />
          <LatestNewsSection mockImages={mockImages} articles={latestArticles} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main Content Grid */}
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="flex grid-cols-1 lg:grid-cols-4 gap-2">
              <div className="lg:col-span-3 space-y-12">
                <FeaturedSection mockImages={mockImages} articles={latestArticles} />
                <LatestNewsSection mockImages={mockImages} articles={latestArticles} />
              </div>
              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>
              <div className="lg:col-span-1">
                <FinanceSidebar mockImages={mockImages} articles={financeArticles} />
              </div>
            </div>
          </div>
        </div>

        <PodcastSection mockImages={mockImages} articles={podcastArticles} />
      </main>
      
      <Footer />
    </div>
  );
}
