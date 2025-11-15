'use client'

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


// Main App Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16 md:pt-[104px]">
        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
          <FeaturedSection mockImages={mockImages} />
          <LatestNewsSection mockImages={mockImages} />
          <TopStoriesSection mockImages={mockImages} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main Content Grid */}
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="flex grid-cols-1 lg:grid-cols-4 gap-2">
              <div className="lg:col-span-3 space-y-12">
                <FeaturedSection mockImages={mockImages} />
                <LatestNewsSection mockImages={mockImages} />
                <TopStoriesSection mockImages={mockImages} />
              </div>
              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>
              <div className="lg:col-span-1">
                <FinanceSidebar mockImages={mockImages} />
              </div>
            </div>
          </div>
        </div>
        
        <PoliticsNewsSection mockImages={mockImages} />
        <HealthNewsSection mockImages={mockImages} />
        <BusinessSection mockImages={mockImages} />
        <FourColumnSection mockImages={mockImages} />
        <PodcastSection mockImages={mockImages} />
      </main>
      
      <Footer />
    </div>
  );
}

