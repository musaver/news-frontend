import React from 'react';
import CategoryBadge from './CategoryBadge';
import ArticleDate from './ArticleDate';

interface FeaturedSectionProps {
  mockImages: {
    featuredArticle: string;
  };
}

const FeaturedSection = ({ mockImages }: FeaturedSectionProps) => (
  <section className="max-w-[917px] md:max-w-none">
    {/* Mobile Layout */}
    <div className="md:hidden space-y-4">
      <div className="rounded-lg overflow-hidden h-[300px]">
        <img 
          src={mockImages.featuredArticle} 
          alt="Featured article" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-3">
          <CategoryBadge>Business</CategoryBadge>
          <ArticleDate>Sep 25, 2024</ArticleDate>
        </div>
        <h1 className="text-[22px] leading-[32px] font-normal">
          Small Businesses Flourish as US Government Expands Loan Access and Support
        </h1>
        <p className="text-slate-700 leading-[21px] text-[14.6px]">
          In a year filled with economic challenges, small businesses across the United States 
          are finding new opportunities for growth and expansion, thanks to the U.S. government's expanded loan…
        </p>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
      <div className="flex flex-col justify-center space-y-3">
        <div className="flex items-center gap-3">
          <CategoryBadge>Business</CategoryBadge>
          <ArticleDate>Sep 25, 2024</ArticleDate>
        </div>
        <h1 className="text-4xl leading-tight font-bold">
          Small Businesses Flourish as US Government Expands Loan Access and Support
        </h1>
        <p className="leading-relaxed">
          In a year filled with economic challenges, small businesses across the United States 
          are finding new opportunities for growth and expansion, thanks to the U.S.…
        </p>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img 
          src={mockImages.featuredArticle} 
          alt="Featured article" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default FeaturedSection;