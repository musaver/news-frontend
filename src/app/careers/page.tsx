'use client'

import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import { JobCard } from '@/components/careers/JobCard';
import { imgContainer as imgCareersWatermark } from "@/imports/svg-a7b80";

// Job listings data
const jobListings = [
  {
    title: 'News Editor',
    jobType: 'Full Time',
    experience: '5 Years',
    salary: '$70,000 - $90,000',
    postedDate: 'August 29, 2024',
    slug: 'news-editor'
  },
  {
    title: 'Multimedia Journalist',
    jobType: 'Full Time',
    experience: '3 Years',
    salary: '$60,000 - $75,000',
    postedDate: 'August 20, 2024',
    slug: 'multimedia-journalist'
  },
  {
    title: 'Proofreader',
    jobType: 'Full Time',
    experience: '1 Year',
    salary: '$45,000 - $55,000',
    postedDate: 'August 14, 2024',
    slug: 'proofreader'
  },
  {
    title: 'Investigative Reporter',
    jobType: 'Remote',
    experience: '5 Years',
    salary: '$65,000 - $85,000',
    postedDate: 'August 10, 2024',
    slug: 'investigative-reporter'
  },
  {
    title: 'Staff Writer',
    jobType: 'Full Time',
    experience: '2-5 Years',
    salary: '$55,000 - $65,000',
    postedDate: 'August 1, 2024',
    slug: 'staff-writer'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Page Header */}
        <div className="bg-[#f7fafc] relative w-full h-[75px]">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6">
            {/* Left Text with Bullet */}
            <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%]">
              <div className="absolute bg-[#cc0000] h-[15px] left-0 top-1/2 translate-y-[-50%] w-[4px]" />
              <div className="absolute flex flex-col font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-1/2 translate-y-[-50%]">
                <p className="leading-[22px]">Careers</p>
              </div>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[359.39px]">
              <div
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[359.39px_84px] not-italic text-[65.4px] top-[42px] translate-y-[-50%] w-full"
                style={{ maskImage: `url('${imgCareersWatermark}')` }}
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>NewsFlash</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="grid grid-cols-[341.73px_1px_1fr] gap-x-[24px] w-full">
              {/* Mission + Vision (Left Column - Sticky) */}
              <div className="flex flex-col gap-8 sticky top-24 self-start">
                {/* Mission */}
                <div className="space-y-2">
                  <h3 className="text-[15.1px] font-bold text-[#020a1c]">
                    Our Mission
                  </h3>
                  <p className="text-[14.8px] leading-[22px] text-[#020a1c]">
                    To deliver unbiased, timely, and comprehensive news that empowers readers to make informed decisions and fosters a deeper understanding of global events.
                  </p>
                </div>

                {/* Vision */}
                <div className="space-y-2">
                  <h3 className="text-[15.1px] font-bold text-[#020a1c]">
                    Our Vision
                  </h3>
                  <p className="text-[14.8px] leading-[22px] text-[#020a1c]">
                    To be the most trusted and influential source of news, shaping global conversations and connecting the world through responsible journalism.
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="bg-[rgba(203,213,225,0.35)] w-full"></div>

              {/* Job Listings (Right Column) */}
              <div className="flex flex-col gap-6 pl-5">
                <h2 className="text-2xl font-bold text-[#020a1c] mb-2">
                  Open Positions
                </h2>
                <div className="space-y-4">
                  {jobListings.map((job, index) => (
                    <JobCard
                      key={index}
                      title={job.title}
                      jobType={job.jobType}
                      experience={job.experience}
                      salary={job.salary}
                      postedDate={job.postedDate}
                      slug={job.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="max-w-[480px] mx-auto px-4 py-6">
            <div className="flex flex-col gap-8 w-full">
              {/* Mission + Vision */}
              <div className="flex flex-col gap-8">
                {/* Mission */}
                <div className="space-y-2">
                  <h3 className="text-[15.1px] font-bold text-[#020a1c]">
                    Our Mission
                  </h3>
                  <p className="text-[13px] leading-[18.2px] text-[#020a1c]">
                    To deliver unbiased, timely, and comprehensive news that empowers readers to make informed decisions and fosters a deeper understanding of global events.
                  </p>
                </div>

                {/* Vision */}
                <div className="space-y-2">
                  <h3 className="text-[15.1px] font-bold text-[#020a1c]">
                    Our Vision
                  </h3>
                  <p className="text-[13.1px] leading-[18.2px] text-[#020a1c]">
                    To be the most trusted and influential source of news, shaping global conversations and connecting the world through responsible journalism.
                  </p>
                </div>
              </div>

              {/* Job Listings */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-[#020a1c]">
                  Open Positions
                </h2>
                <div className="space-y-4">
                  {jobListings.map((job, index) => (
                    <JobCard
                      key={index}
                      title={job.title}
                      jobType={job.jobType}
                      experience={job.experience}
                      salary={job.salary}
                      postedDate={job.postedDate}
                      slug={job.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
