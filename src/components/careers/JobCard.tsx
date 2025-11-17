import React from 'react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  jobType: string;
  experience: string;
  salary: string;
  postedDate: string;
  slug: string;
}

export function JobCard({
  title,
  jobType,
  experience,
  salary,
  postedDate,
  slug
}: JobCardProps) {
  return (
    <Link href={`/careers/${slug}`}>
      <div className="group relative w-full p-6 border border-[rgba(203,213,225,0.3)] rounded-lg bg-white/20 hover:bg-white/40 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="space-y-4">
          {/* Job Title */}
          <h4 className="text-lg font-bold text-[#020a1c] group-hover:text-[#cc0000] transition-colors">
            {title}
          </h4>

          {/* Job Details */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#020a1c]">
            <span>{jobType}</span>
            <div className="w-1 h-1 rounded-full bg-[rgb(203,213,225)]" />
            <span>{experience}</span>
            <div className="w-1 h-1 rounded-full bg-[rgb(203,213,225)]" />
            <span className="font-medium">{salary}</span>
          </div>

          {/* Posted Date */}
          <div className="pt-3 border-t border-[rgba(203,213,225,0.35)]">
            <p className="text-xs text-[#657285]">
              Posted: {postedDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
