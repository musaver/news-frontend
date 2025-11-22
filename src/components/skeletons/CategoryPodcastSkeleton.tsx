import React from 'react';

const CategoryPodcastSkeleton = () => {
  return (
    <section className="bg-[#f7fafc] py-20 animate-pulse">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Podcast Grid - matches exact structure */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          {/* Left - Large Image */}
          <div className="rounded-lg overflow-hidden h-[400px] bg-slate-200"></div>

          {/* Right - Podcast Info Box */}
          <div className="bg-white rounded-lg border border-slate-300/30 p-6 space-y-6">
            {/* Section Header */}
            <div>
              <div className="flex items-center gap-5">
                <div className="w-1 h-4 bg-slate-200"></div>
                <div className="h-5 w-24 bg-slate-200 rounded"></div>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>

            {/* Podcast Items */}
            <div className="space-y-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex gap-4">
                  <div className="rounded-lg overflow-hidden w-[140px] h-[110px] flex-shrink-0 bg-slate-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-4/5"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPodcastSkeleton;
