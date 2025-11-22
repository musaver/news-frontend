import React from 'react';

const CategoryPodcastSkeleton = () => {
  return (
    <section className="bg-[#f7fafc] py-12 animate-pulse">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-1 h-4 bg-slate-200"></div>
          <div className="h-6 w-40 bg-slate-200 rounded"></div>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="rounded-lg overflow-hidden h-[250px] bg-slate-200"></div>
              <div className="space-y-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPodcastSkeleton;
