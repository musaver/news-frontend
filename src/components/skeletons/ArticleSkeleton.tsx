import React from 'react';

export const HeaderSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    {/* Category and Date Skeleton */}
    <div className="flex items-center gap-3">
      <div className="h-6 bg-gray-200 rounded w-24"></div>
      <div className="h-4 bg-gray-200 rounded w-20"></div>
    </div>
    {/* Title is already visible, so no need to show skeleton for it */}
  </div>
);

export const CoverImageSkeleton = () => (
  <div className="rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-[400px] md:h-[500px] bg-gray-200"></div>
  </div>
);

export const AuthorSkeleton = () => (
  <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-full md:w-[476px] mt-2 animate-pulse">
    {/* Author Avatar Skeleton */}
    <div className="w-[30px] h-[30px] bg-gray-200 rounded-full"></div>

    {/* Author Name Skeleton */}
    <div className="h-4 bg-gray-200 rounded w-24"></div>

    {/* Red Divider Dot */}
    <div className="bg-gray-200 rounded-full shrink-0 size-[3px]"></div>

    {/* Date Skeleton */}
    <div className="h-4 bg-gray-200 rounded w-32"></div>

    {/* Red Divider Dot */}
    <div className="bg-gray-200 rounded-full shrink-0 size-[3px]"></div>

    {/* Reading Time Skeleton */}
    <div className="h-4 bg-gray-200 rounded w-20"></div>
  </div>
);

export const ContentSkeleton = () => (
  <div className="prose max-w-none flex-1 animate-pulse space-y-4">
    {/* Excerpt skeleton */}
    <div className="space-y-2">
      <div className="h-6 bg-gray-200 rounded w-full"></div>
      <div className="h-6 bg-gray-200 rounded w-5/6"></div>
    </div>

    {/* Content skeleton */}
    <div className="space-y-3 pt-4">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  </div>
);

export const RelatedArticlesSkeleton = () => (
  <div className="mt-12 pt-8 border-t border-slate-200 animate-pulse">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-[10px]">
        <div className="w-[4px] h-[15px] bg-gray-200"></div>
        <div className="h-5 bg-gray-200 rounded w-32"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-16"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-[12px]">
          <div className="rounded-[8px] bg-gray-200 h-[200px] w-full"></div>
          <div className="px-[4px] space-y-[8px]">
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const SidebarSkeleton = () => (
  <div className="space-y-8 animate-pulse">
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-4 bg-gray-200"></div>
        <div className="h-5 bg-gray-200 rounded w-32"></div>
      </div>

      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <div className="flex gap-4">
              <div className="rounded-lg bg-gray-200 w-[125px] h-[100px] flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
            {i < 5 && (
              <div className="h-px bg-gray-200 mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#cc0000]"></div>
  </div>
);
