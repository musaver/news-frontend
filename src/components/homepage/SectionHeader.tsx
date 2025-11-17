import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  redBullet?: boolean;
  categoryLink?: string;
}

const SectionHeader = ({ title, showViewAll = true, redBullet = true, categoryLink }: SectionHeaderProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      {redBullet && <div className="w-1 h-4 bg-[#cc0000]"></div>}
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
    {showViewAll && categoryLink && (
      <Link href={categoryLink} className="flex items-center gap-1 text-sm text-slate-700 font-medium hover:text-[#cc0000] transition-colors cursor-pointer">
        <span>view all</span>
        <div className="w-2.5 h-2.5"></div>
      </Link>
    )}
    {showViewAll && !categoryLink && (
      <div className="flex items-center gap-1 text-sm text-slate-700 font-medium">
        <span>view all</span>
        <div className="w-2.5 h-2.5"></div>
      </div>
    )}
  </div>
);

export default SectionHeader;