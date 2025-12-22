'use client';

import React, { useState, useEffect } from 'react';
import {
  FeaturedSection,
  LatestNewsSection,
  FinanceSidebar,
  PodcastSection
} from '@/components/homepage';
import CategoryFeaturedSkeleton from '@/components/skeletons/CategoryFeaturedSkeleton';
import CategoryArticlesSkeleton from '@/components/skeletons/CategoryArticlesSkeleton';
import CategorySidebarSkeleton from '@/components/skeletons/CategorySidebarSkeleton';
import CategoryPodcastSkeleton from '@/components/skeletons/CategoryPodcastSkeleton';
import { imgLatestNews } from "@/imports/svg-92wog";
import { Article } from '@/types/article';

// Mock images
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

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CategoryPageClientProps {
  categoryId: string;
  initialCategories: Category[];
  initialCategory: Category;
}

export default function CategoryPageClient({
  categoryId,
  initialCategories,
  initialCategory
}: CategoryPageClientProps) {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);
  const [sidebarArticles, setSidebarArticles] = useState<Article[]>([]);
  const [podcastArticles, setPodcastArticles] = useState<Article[]>([]);

  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingSidebar, setLoadingSidebar] = useState(true);
  const [loadingPodcast, setLoadingPodcast] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch featured article first (highest priority)
      try {
        const featuredRes = await fetch(`/api/category/${categoryId}/featured`);
        if (featuredRes.ok) {
          const data = await featuredRes.json();
          if (data.success && data.article) {
            setFeaturedArticle(data.article);
          }
        }
      } catch (error) {
        console.error('Error fetching featured article:', error);
      } finally {
        setLoadingFeatured(false);
      }

      // Fetch category articles (second priority)
      try {
        const articlesRes = await fetch(`/api/category/${categoryId}/articles?limit=100`);
        if (articlesRes.ok) {
          const data = await articlesRes.json();
          if (data.success) {
            setCategoryArticles(data.articles);
          }
        }
      } catch (error) {
        console.error('Error fetching category articles:', error);
      } finally {
        setLoadingArticles(false);
      }

      // Fetch sidebar articles (third priority)
      try {
        const sidebarRes = await fetch(`/api/category/${categoryId}/sidebar?limit=8`);
        if (sidebarRes.ok) {
          const data = await sidebarRes.json();
          if (data.success) {
            setSidebarArticles(data.articles);
          }
        }
      } catch (error) {
        console.error('Error fetching sidebar articles:', error);
      } finally {
        setLoadingSidebar(false);
      }

      // Fetch podcast articles (lowest priority)
      try {
        const podcastRes = await fetch(`/api/category/${categoryId}/podcast`);
        if (podcastRes.ok) {
          const data = await podcastRes.json();
          if (data.success) {
            setPodcastArticles(data.articles);
          }
        }
      } catch (error) {
        console.error('Error fetching podcast articles:', error);
      } finally {
        setLoadingPodcast(false);
      }
    };

    fetchData();
  }, [categoryId]);

  const allCategoryArticles = featuredArticle
    ? [featuredArticle, ...categoryArticles]
    : categoryArticles;

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Category Header Banner */}
        <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
            <div className="flex items-center gap-3 mt-6 px-1 md:px-0">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h2 className="text-lg leading-[19px] md:text-lg font-normal">
                {initialCategory.name}
              </h2>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-fit" data-name="Mask Group">
              <div
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] not-italic text-[65.898px] top-[42px] translate-y-[-50%] w-full"
                style={{ maskImage: `url('${imgLatestNews}')`, maskSize: 'cover' }}
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>{initialCategory.name}</p>
              </div>
              <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', fontSize: '78px' }}>{initialCategory.name}</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
          {loadingFeatured ? (
            <CategoryFeaturedSkeleton />
          ) : featuredArticle ? (
            <FeaturedSection mockImages={mockImages} articles={[featuredArticle]} />
          ) : null}

          {loadingArticles ? (
            <CategoryArticlesSkeleton />
          ) : categoryArticles.length > 0 ? (
            <LatestNewsSection
              mockImages={mockImages}
              articles={categoryArticles}
              title={`All articles of ${initialCategory.name}`}
            />
          ) : !loadingFeatured && !featuredArticle ? (
            <div className="text-center py-12">
              <p className="text-[#657285] text-lg">No articles found in {initialCategory.name} category.</p>
            </div>
          ) : null}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-6">
            <div className="flex gap-2">
              <div className="flex-1 space-y-12">
                {loadingFeatured ? (
                  <CategoryFeaturedSkeleton />
                ) : featuredArticle ? (
                  <FeaturedSection mockImages={mockImages} articles={[featuredArticle]} />
                ) : null}

                {loadingArticles ? (
                  <CategoryArticlesSkeleton />
                ) : categoryArticles.length > 0 ? (
                  <LatestNewsSection
                    mockImages={mockImages}
                    articles={categoryArticles}
                    title={`All articles of ${initialCategory.name}`}
                  />
                ) : !loadingFeatured && !featuredArticle ? (
                  <div className="text-center py-12">
                    <p className="text-[#657285] text-lg">No articles found in {initialCategory.name} category.</p>
                  </div>
                ) : null}
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>

              <div>
                {loadingSidebar ? (
                  <CategorySidebarSkeleton />
                ) : sidebarArticles.length > 0 ? (
                  <FinanceSidebar mockImages={mockImages} articles={sidebarArticles} title="Latest News" />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Podcast Section */}
        {loadingPodcast ? (
          <CategoryPodcastSkeleton />
        ) : podcastArticles.length >= 3 ? (
          <PodcastSection mockImages={mockImages} articles={podcastArticles} />
        ) : null}
      </main>
    </div>
  );
}
