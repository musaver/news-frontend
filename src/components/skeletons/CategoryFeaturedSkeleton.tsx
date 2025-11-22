import React from 'react';

const CategoryFeaturedSkeleton = () => {
  return (
    <section className="max-w-[917px] md:max-w-none animate-pulse">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        <div className="rounded-lg overflow-hidden h-[300px] bg-slate-200"></div>
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-3">
            <div className="h-5 w-20 bg-slate-200 rounded"></div>
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-7 bg-slate-200 rounded w-full"></div>
            <div className="h-7 bg-slate-200 rounded w-4/5"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-[39%_59%] gap-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-24 bg-slate-200 rounded"></div>
            <div className="h-5 w-28 bg-slate-200 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="h-8 bg-slate-200 rounded w-full"></div>
            <div className="h-8 bg-slate-200 rounded w-5/6"></div>
            <div className="h-8 bg-slate-200 rounded w-4/5"></div>
          </div>
          <div className="space-y-2">
            <div className="h-5 bg-slate-200 rounded w-full"></div>
            <div className="h-5 bg-slate-200 rounded w-full"></div>
            <div className="h-5 bg-slate-200 rounded w-full"></div>
            <div className="h-5 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden h-[400px] bg-slate-200"></div>
      </div>
    </section>
  );
};

export default CategoryFeaturedSkeleton;
