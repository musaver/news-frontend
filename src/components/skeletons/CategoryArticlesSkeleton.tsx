import React from 'react';

const CategoryArticlesSkeleton = () => {
  return (
    <section className="max-w-[917px] md:max-w-none animate-pulse">
      {/* Section Header */}
      <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
        <div className="w-1 h-4 bg-slate-200"></div>
        <div className="h-5 w-32 bg-slate-200 rounded"></div>
        <div className="flex-1 h-px bg-slate-200"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {[...Array(6)].map((_, index) => (
          <article key={index} className="flex gap-2">
            <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0 bg-slate-200"></div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
                <div className="w-[3px] h-[3px] bg-slate-200 rounded-full"></div>
                <div className="h-3 w-20 bg-slate-200 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-4/5"></div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[...Array(9)].map((_, index) => (
          <article key={index} className="space-y-3">
            <div className="rounded-lg overflow-hidden h-[200px] bg-slate-200"></div>
            <div className="space-y-2 px-1">
              <div className="flex items-center gap-2">
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
                <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                <div className="h-3 w-20 bg-slate-200 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-5 bg-slate-200 rounded w-full"></div>
                <div className="h-5 bg-slate-200 rounded w-4/5"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryArticlesSkeleton;
