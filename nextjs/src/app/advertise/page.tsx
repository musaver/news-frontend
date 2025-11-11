'use client'

import React from 'react';
import {
  Header,
  Footer,
  PageHeader,
} from '@/components/homepage';

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 md:pt-[104px]">
        {/* Page Header */}
        <PageHeader pageName="Advertise" />

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
