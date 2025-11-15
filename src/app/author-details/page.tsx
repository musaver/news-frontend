'use client'

import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import { imgContainer } from "@/imports/svg-4a9ab";

// Import images from assets
import imgAuthor from '@/assets/669c35452fe29ca46f8378365d0c0c5eb2633cb2.png';
import imgArticle1 from '@/assets/ccf955bf9c33c0444a8ac347359fbca671c2ea9f.png';
import imgArticle2 from '@/assets/1fc3e7faf42b10c6656188c7582ed5c975bfd82a.png';
import imgArticle3 from '@/assets/ca8b64e52ffb6913cef606d8d759851d3f013467.png';
import imgArticle4 from '@/assets/0e98d91359ec311902b782518507b4a13078b21b.png';
import imgArticle5 from '@/assets/bf6b1ab96f0245367060fe83ecd3c718cfb105e3.png';
import imgArticle6 from '@/assets/db0f642032e2a177ddb992ac654d59cbf19a6c21.png';
import imgArticle7 from '@/assets/a3976810f1e3b94e7cba1e19936a219c4f6e9a7b.png';
import imgArticle8 from '@/assets/b678e07febb2b84647a55736db554a4d4a2bc32d.png';
import imgArticle9 from '@/assets/b6c50a5076c56cc4d08b98fba90fdd9a563df433.png';

export default function AuthorDetailsPage() {
  const authorArticles = [
    {
      category: 'Health',
      date: 'Sep 23, 2024',
      title: 'The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve',
      image: imgArticle1
    },
    {
      category: 'Health',
      date: 'Sep 13, 2024',
      title: 'Personalized Nutrition for Chronic Disease Management',
      image: imgArticle2
    },
    {
      category: 'Health',
      date: 'Sep 3, 2024',
      title: 'Breakthrough in Diabetes Treatment: New Drug Offers Hope for Millions',
      image: imgArticle3
    },
    {
      category: 'Health',
      date: 'Aug 23, 2024',
      title: 'Shaping the Future of U.S. Healthcare',
      image: imgArticle4
    },
    {
      category: 'Health',
      date: 'Aug 13, 2024',
      title: 'Research Unveils Potential Cure for Cystic Fibrosis',
      image: imgArticle5
    },
    {
      category: 'Health',
      date: 'Aug 3, 2024',
      title: 'Enhancing Doctor-Patient Communication for Better Health Outcomes',
      image: imgArticle6
    },
    {
      category: 'Health',
      date: 'Jul 30, 2024',
      title: 'New Study Reveals Potential Benefits of Fasting for Heart Health',
      image: imgArticle7
    },
    {
      category: 'Health',
      date: 'Jul 29, 2024',
      title: 'Clinical Trials Show Promise',
      image: imgArticle8
    },
    {
      category: 'Health',
      date: 'Jul 28, 2024',
      title: 'Revolutionary Treatment Approved',
      image: imgArticle9
    }
  ];

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
                <p className="leading-[22px]">Author</p>
              </div>
            </div>
            
            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]" data-name="Mask Group">
              <div 
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[94.8px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] not-italic text-[68.18px] top-1/2 translate-y-[-50%] w-full" 
                style={{ maskImage: `url('${imgContainer}')` }}
              >
                <p className="leading-[94.8px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>Emily Davis</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="grid grid-cols-[380px_1fr] gap-12">
              {/* Left Column - Author Info */}
              <div className="space-y-8">
                {/* Author Photo & Name */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="overflow-clip relative rounded-full shrink-0 w-[150px] h-[150px]">
                    <Image 
                      alt="Emily Davis" 
                      className="absolute h-full w-full left-0 top-0 object-cover" 
                      src={imgAuthor} 
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-normal text-[20.281px] leading-[24px] text-[#020a1c]">
                      Emily Davis
                    </h1>
                    <p className="font-normal text-[12.906px] leading-[18.2px] text-[#657285]">
                      Health, Science and Technology
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Author Bio */}
                <div className="space-y-5">
                  <p className="font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily holds a PhD in Biomedical Sciences from Stanford University. With over 12 years of experience in health, science, and technology reporting, she has covered groundbreaking medical research and technological innovations.
                  </p>
                  <p className="font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily&apos;s in-depth analysis and ability to translate complex scientific information into accessible language have earned her numerous awards. She is particularly known for her investigative pieces on public health issues and her coverage of major scientific discoveries.
                  </p>
                  <p className="font-normal text-[14.625px] leading-[22px] text-[#020a1c]">
                    Emily regularly collaborates with leading researchers and institutions to bring cutting-edge science to the public.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Contact */}
                <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.125px] text-nowrap">
                          <p className="leading-[22px] whitespace-pre">Contact</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16.313px] text-nowrap">
                            <a href="mailto:e.davis@newsflash.com" className="leading-[22.6px] whitespace-pre hover:text-[#cc0000] transition-colors">
                              e.davis@newsflash.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="shrink-0 size-[16px] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="shrink-0 size-[16px] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Other Authors */}
                <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center overflow-clip pl-0 py-0 relative shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                      <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]"></div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] text-nowrap">
                            <p className="leading-[22px] whitespace-pre">Other Authors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center overflow-x-auto pb-2">
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1601489865452-407a1b801dde?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Latest Articles */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-[15px] bg-[#cc0000]"></div>
                  <h2 className="font-normal text-[14.5px] leading-[22px] text-[#020a1c]">
                    Latest Articles from Emily Davis
                  </h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {authorArticles.map((article, index) => (
                    <div 
                      key={index}
                      className="flex flex-col gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {/* Article Image */}
                      <div className="h-[150px] overflow-clip rounded-lg relative w-full">
                        <Image 
                          alt={article.title} 
                          className="absolute h-full w-full object-cover" 
                          src={article.image} 
                        />
                      </div>
                      {/* Article Meta */}
                      <div className="flex items-center gap-1.5">
                        <span className="font-normal text-[10.875px] leading-[15.6px] text-[#657285]">
                          {article.category}
                        </span>
                        <div className="bg-slate-300 rounded-full w-[3px] h-[3px]"></div>
                        <span className="font-normal text-[11.25px] leading-[15.6px] text-[#657285]">
                          {article.date}
                        </span>
                      </div>
                      {/* Article Title */}
                      <h3 className="font-normal text-[14.75px] leading-[19.2px] text-[#020a1c] line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center pt-6">
                  <button className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0 border border-[rgba(203,213,225,0.5)] border-solid cursor-pointer hover:bg-[#edf2f7] transition-colors">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(101,114,133,0.6)] text-nowrap">
                        <p className="leading-[18.2px] whitespace-pre">Load More Articles</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="max-w-[768px] mx-auto px-4 py-8">
            <div className="space-y-8">
              {/* Author Info Section */}
              <div className="space-y-6">
                {/* Author Photo & Name */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="overflow-clip relative rounded-full shrink-0 w-[120px] h-[120px]">
                    <Image 
                      alt="Emily Davis" 
                      className="absolute h-full w-full left-0 top-0 object-cover" 
                      src={imgAuthor} 
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-normal text-[20.281px] leading-[24px] text-[#020a1c]">
                      Emily Davis
                    </h1>
                    <p className="font-normal text-[12.906px] leading-[18.2px] text-[#657285]">
                      Health, Science and Technology
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Author Bio */}
                <div className="space-y-5">
                  <p className="font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily holds a PhD in Biomedical Sciences from Stanford University. With over 12 years of experience in health, science, and technology reporting, she has covered groundbreaking medical research and technological innovations.
                  </p>
                  <p className="font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily&apos;s in-depth analysis and ability to translate complex scientific information into accessible language have earned her numerous awards. She is particularly known for her investigative pieces on public health issues and her coverage of major scientific discoveries.
                  </p>
                  <p className="font-normal text-[14.625px] leading-[22px] text-[#020a1c]">
                    Emily regularly collaborates with leading researchers and institutions to bring cutting-edge science to the public.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Contact */}
                <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.125px] text-nowrap">
                          <p className="leading-[22px] whitespace-pre">Contact</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16.313px] text-nowrap">
                            <a href="mailto:e.davis@newsflash.com" className="leading-[22.6px] whitespace-pre hover:text-[#cc0000] transition-colors">
                              e.davis@newsflash.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="shrink-0 size-[16px] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="shrink-0 size-[16px] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Other Authors */}
                <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center overflow-clip pl-0 py-0 relative shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                      <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]"></div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] text-nowrap">
                            <p className="leading-[22px] whitespace-pre">Other Authors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center overflow-x-auto pb-2">
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1601489865452-407a1b801dde?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                        <img alt="Author" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?w=100&h=100&fit=crop" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Articles Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-[15px] bg-[#cc0000]"></div>
                  <h2 className="font-normal text-[14.5px] leading-[22px] text-[#020a1c]">
                    Latest Articles from Emily Davis
                  </h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {authorArticles.map((article, index) => (
                    <div 
                      key={index}
                      className="flex flex-col gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {/* Article Image */}
                      <div className="h-[120px] overflow-clip rounded-lg relative w-full">
                        <Image 
                          alt={article.title} 
                          className="absolute h-full w-full object-cover" 
                          src={article.image} 
                        />
                      </div>
                      {/* Article Meta */}
                      <div className="flex items-center gap-1.5">
                        <span className="font-normal text-[10.875px] leading-[15.6px] text-[#657285]">
                          {article.category}
                        </span>
                        <div className="bg-slate-300 rounded-full w-[3px] h-[3px]"></div>
                        <span className="font-normal text-[11.25px] leading-[15.6px] text-[#657285]">
                          {article.date}
                        </span>
                      </div>
                      {/* Article Title */}
                      <h3 className="font-normal text-[13px] leading-[18px] text-[#020a1c] line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center pt-6">
                  <button className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0 border border-[rgba(203,213,225,0.5)] border-solid cursor-pointer hover:bg-[#edf2f7] transition-colors">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(101,114,133,0.6)] text-nowrap">
                        <p className="leading-[18.2px] whitespace-pre">Load More Articles</p>
                      </div>
                    </div>
                  </button>
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

