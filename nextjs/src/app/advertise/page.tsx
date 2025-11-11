'use client'

import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import { imgContainer as imgAdvertiseWatermark } from "@/imports/svg-a7b80";

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 md:pt-[104px]">

        <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
            {/* Left Text with Bullet */}
            <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Left Text">
              <div className="absolute bg-[#cc0000] h-[15px] left-0 top-1/2 translate-y-[-50%] w-[4px]" data-name="bullet" />
              <div className="absolute flex flex-col font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-1/2 translate-y-[-50%]">
                <p className="leading-[22px]">Advertise</p>
              </div>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[359.39px]" data-name="Mask Group">
              <div
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[359.39px_84px] not-italic text-[65.4px] top-[42px] translate-y-[-50%] w-full"
                style={{ maskImage: `url('${imgAdvertiseWatermark}')` }}
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>NewsFlash</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="flex flex-col gap-[32px] items-start w-full">

              {/* Intro Section */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[24px] w-full">
                  <p className="leading-[32px]">Advertise With NewsFlash</p>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[24px] not-italic text-[#657285] text-[16px] w-full">
                  <p>Reach millions of engaged readers worldwide with NewsFlash advertising solutions. Our platform offers targeted advertising opportunities across multiple channels and formats.</p>
                </div>
              </div>

              {/* Advertising Options */}
              <div className="content-stretch flex flex-col gap-[24px] items-start w-full mt-8">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[20px] w-full">
                  <p className="leading-[28px]">Advertising Options</p>
                </div>

                {/* Display Advertising */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-full p-6 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[18px] w-full">
                    <p className="leading-[26px]">Display Advertising</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[22px] not-italic text-[#657285] text-[14.8px] w-full">
                    <p>Banner ads, video ads, and interactive media placements across our website and mobile apps. Choose from various sizes and positions to maximize visibility.</p>
                  </div>
                </div>

                {/* Sponsored Content */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-full p-6 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[18px] w-full">
                    <p className="leading-[26px]">Sponsored Content</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[22px] not-italic text-[#657285] text-[14.8px] w-full">
                    <p>Partner with our editorial team to create engaging branded content that resonates with your target audience while maintaining journalistic integrity.</p>
                  </div>
                </div>

                {/* Newsletter Advertising */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-full p-6 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[18px] w-full">
                    <p className="leading-[26px]">Newsletter Advertising</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[22px] not-italic text-[#657285] text-[14.8px] w-full">
                    <p>Reach our subscribers directly with featured placements in our daily and weekly newsletters, delivered to millions of inboxes.</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full mt-8 p-8 bg-[#f7fafc] rounded-[8px]">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[20px] w-full">
                  <p className="leading-[28px]">Get Started</p>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[24px] not-italic text-[#657285] text-[16px] w-full">
                  <p>Contact our advertising team to discuss customized solutions for your brand.</p>
                  <p className="mt-4"><strong>Email:</strong> advertising@newsflash.com</p>
                  <p className="mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="px-4 py-6">
            <div className="flex flex-col gap-[24px] items-start w-full">

              {/* Intro Section */}
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[20px] w-full">
                  <p className="leading-[28px]">Advertise With NewsFlash</p>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[22px] not-italic text-[#657285] text-[14px] w-full">
                  <p>Reach millions of engaged readers worldwide with NewsFlash advertising solutions.</p>
                </div>
              </div>

              {/* Advertising Options */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[18px] w-full">
                  <p className="leading-[24px]">Advertising Options</p>
                </div>

                {/* Display Advertising */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full p-4 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[16px] w-full">
                    <p className="leading-[22px]">Display Advertising</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[20px] not-italic text-[#657285] text-[13px] w-full">
                    <p>Banner ads, video ads, and interactive media placements across our platforms.</p>
                  </div>
                </div>

                {/* Sponsored Content */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full p-4 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[16px] w-full">
                    <p className="leading-[22px]">Sponsored Content</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[20px] not-italic text-[#657285] text-[13px] w-full">
                    <p>Partner with our editorial team to create engaging branded content.</p>
                  </div>
                </div>

                {/* Newsletter Advertising */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full p-4 border border-[#e2e8f0] rounded-[8px]">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[16px] w-full">
                    <p className="leading-[22px]">Newsletter Advertising</p>
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[20px] not-italic text-[#657285] text-[13px] w-full">
                    <p>Reach our subscribers directly with featured newsletter placements.</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full p-4 bg-[#f7fafc] rounded-[8px]">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[#020a1c] text-[18px] w-full">
                  <p className="leading-[24px]">Get Started</p>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[20px] not-italic text-[#657285] text-[14px] w-full">
                  <p>Contact our advertising team to discuss customized solutions.</p>
                  <p className="mt-3"><strong>Email:</strong> advertising@newsflash.com</p>
                  <p className="mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
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
