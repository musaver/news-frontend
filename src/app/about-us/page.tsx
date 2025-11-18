'use client'

import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import imgAboutUs from '@/assets/6d00fa3c2d7790e1cd6b7cdb3f89652742305c58.png';
import { imgContainer as imgAboutUsWatermark } from "@/imports/svg-a7b80";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        
        <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
            {/* Left Text with Bullet */}
           

            <div className="flex items-center gap-3 mt-6 px-1 md:px-0">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h2 className="text-[12.5px] leading-[19px] md:text-lg font-normal">
                About Us
              </h2>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-fit" data-name="Mask Group">
              <div 
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[359.39px_84px] not-italic text-[65.4px] top-[42px] translate-y-[-50%] w-full" 
                style={{ maskImage: `url('${imgAboutUsWatermark}')` }}
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>About Us</p>
              </div>
              <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0)', fontSize: '78px' }}>About Us</p>
            </div>
          </div>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="grid grid-cols-[341.73px_1px_1fr] gap-x-[24px] w-full">
              {/* Mission + Vision (Left Column - Sticky) */}
              <div className="content-stretch flex flex-col gap-[32px] items-start sticky top-24 self-start">
                {/* Mission */}
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                      <p className="leading-[22px]">Our Mission</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap whitespace-pre">
                        <p className="mb-0">{`To deliver unbiased, timely, and `}</p>
                        <p className="mb-0">{`comprehensive news that empowers readers `}</p>
                        <p className="mb-0">{`to make informed decisions and fosters a `}</p>
                        <p>deeper understanding of global events.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vision */}
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                      <p className="leading-[22px]">Our Vision</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap whitespace-pre">
                        <p className="mb-0">{`To be the most trusted and influential source `}</p>
                        <p className="mb-0">{`of news, shaping global conversations and `}</p>
                        <p className="mb-0">{`connecting the world through responsible `}</p>
                        <p>journalism.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vertical Divider */}
              <div className="bg-[rgba(203,213,225,0.35)] w-full h-auto min-h-full"></div>
              
              {/* Main Content (Right Column) */}
              <div className="flex flex-col gap-[42px] items-start overflow-clip pl-[19px]">
                {/* Featured Image */}
                <div className="h-[500px] overflow-clip relative rounded-[8px] shrink-0 w-full max-w-[863.27px]">
                  <div className="absolute inset-0 rounded-[8px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                      <Image 
                        alt="About NewsFlash" 
                        className="absolute h-full left-0 top-0 w-full object-cover" 
                        src={imgAboutUs} 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
                      <p className="mb-0">{`NewsFlash is the country's leading online news agency, connecting millions of readers with timely, accurate, `}</p>
                      <p className="mb-0">{`and impactful news from across the globe. Our mission is to provide reliable coverage on everything the `}</p>
                      <p className="mb-0">{`world needs to know about the US and everything the US needs to know about the world. From breaking `}</p>
                      <p className="mb-0">{`news to in-depth analysis on politics, business, culture, and international affairs, we are committed to `}</p>
                      <p>delivering the information you need to stay informed.</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
                        <p className="mb-0">{`At NewsFlash, we believe news should go beyond just reporting the facts; it should provide context, insight, `}</p>
                        <p className="mb-0">{`and understanding. Our dedicated team of journalists works around the clock to ensure you get not only the `}</p>
                        <p className="mb-0">{`headlines but also the deeper stories that shape our society. Whether it's the latest political developments or `}</p>
                        <p className="mb-0">{`economic trends, we bring a balanced and critical perspective, empowering our readers with the knowledge `}</p>
                        <p>to make informed decisions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] w-full">
                        <p className="mb-0">{`We are proud of our commitment to journalistic integrity, delivering unbiased, fair, and transparent news. Our `}</p>
                        <p className="mb-0">{`editorial team adheres to the highest standards, focusing on accuracy and depth to ensure that every story `}</p>
                        <p className="mb-0">{`reflects the truth without sensationalism. In a world overwhelmed by information, NewsFlash stands out as a `}</p>
                        <p>trusted source that prioritizes clarity and credibility.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] w-full">
                        <p className="mb-0">{`In addition to our domestic coverage, NewsFlash has a strong international presence, with correspondents `}</p>
                        <p className="mb-0">{`around the globe providing firsthand reporting on global events. We believe that understanding international `}</p>
                        <p className="mb-0">{`developments is key to understanding national ones, and our global reach allows us to bring you a truly `}</p>
                        <p>comprehensive perspective on world affairs.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
                        <p className="mb-0">{`As a digital-first platform, NewsFlash is committed to innovation, utilizing cutting-edge technology to deliver `}</p>
                        <p className="mb-0">{`news in accessible and engaging formats. Whether you're browsing on your phone, tablet, or desktop, we `}</p>
                        <p className="mb-0">{`ensure you can stay informed wherever you are. Our goal is simple: to empower readers by delivering news `}</p>
                        <p>that shapes opinions, sparks conversations, and connects you to the world.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="max-w-[480px] mx-auto px-4 py-6">
            <div className="flex flex-col gap-[24px] w-full">
                {/* Mission + Vision */}
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full z-[2]">
                  {/* Mission */}
                  <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[0.81px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0 w-full">
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                        <p className="leading-[22px]">Our Mission</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap whitespace-pre">
                          <p className="mb-0">{`To deliver unbiased, timely, and comprehensive news that `}</p>
                          <p className="mb-0">{`empowers readers to make informed decisions and fosters `}</p>
                          <p>a deeper understanding of global events.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vision */}
                  <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[0.81px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0 w-full">
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                        <p className="leading-[22px]">Our Vision</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] min-w-[358px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] text-nowrap whitespace-pre">
                          <p className="mb-0">{`To be the most trusted and influential source of news, `}</p>
                          <p className="mb-0">{`shaping global conversations and connecting the world `}</p>
                          <p>through responsible journalism.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Image and Content */}
                <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full z-[1]">
                  {/* Featured Image */}
                  <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-full max-w-[358px] mx-auto">
                    <div className="absolute inset-0 rounded-[8px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                        <Image 
                          alt="About NewsFlash" 
                          className="absolute h-full left-0 top-0 w-full object-cover" 
                          src={imgAboutUs} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Text */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
                        <p className="mb-0">{`NewsFlash is the country's leading online news `}</p>
                        <p className="mb-0">{`agency, connecting millions of readers with timely, `}</p>
                        <p className="mb-0">{`accurate, and impactful news from across the `}</p>
                        <p className="mb-0">{`globe. Our mission is to provide reliable coverage `}</p>
                        <p className="mb-0">{`on everything the world needs to know about the `}</p>
                        <p className="mb-0">{`US and everything the US needs to know about the `}</p>
                        <p className="mb-0">{`world. From breaking news to in-depth analysis on `}</p>
                        <p className="mb-0">{`politics, business, culture, and international affairs, `}</p>
                        <p className="mb-0">{`we are committed to delivering the information you `}</p>
                        <p>need to stay informed.</p>
                      </div>
                    </div>
                    
                    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                          <p className="mb-0">{`At NewsFlash, we believe news should go beyond `}</p>
                          <p className="mb-0">{`just reporting the facts; it should provide context, `}</p>
                          <p className="mb-0">{`insight, and understanding. Our dedicated team of `}</p>
                          <p className="mb-0">{`journalists works around the clock to ensure you `}</p>
                          <p className="mb-0">{`get not only the headlines but also the deeper `}</p>
                          <p className="mb-0">{`stories that shape our society. Whether it's the `}</p>
                          <p className="mb-0">{`latest political developments or economic trends, `}</p>
                          <p className="mb-0">{`we bring a balanced and critical perspective, `}</p>
                          <p className="mb-0">{`empowering our readers with the knowledge to `}</p>
                          <p>make informed decisions.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.29px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
                          <p className="mb-0">{`We are proud of our commitment to journalistic `}</p>
                          <p className="mb-0">{`integrity, delivering unbiased, fair, and transparent `}</p>
                          <p className="mb-0">{`news. Our editorial team adheres to the highest `}</p>
                          <p className="mb-0">{`standards, focusing on accuracy and depth to `}</p>
                          <p className="mb-0">{`ensure that every story reflects the truth without `}</p>
                          <p className="mb-0">{`sensationalism. In a world overwhelmed by `}</p>
                          <p className="mb-0">{`information, NewsFlash stands out as a trusted `}</p>
                          <p>source that prioritizes clarity and credibility.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.29px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
                          <p className="mb-0">{`In addition to our domestic coverage, NewsFlash `}</p>
                          <p className="mb-0">{`has a strong international presence, with `}</p>
                          <p className="mb-0">{`correspondents around the globe providing `}</p>
                          <p className="mb-0">{`firsthand reporting on global events. We believe `}</p>
                          <p className="mb-0">{`that understanding international developments is `}</p>
                          <p className="mb-0">{`key to understanding national ones, and our global `}</p>
                          <p className="mb-0">{`reach allows us to bring you a truly comprehensive `}</p>
                          <p>perspective on world affairs.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.19px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
                          <p className="mb-0">{`As a digital-first platform, NewsFlash is committed `}</p>
                          <p className="mb-0">{`to innovation, utilizing cutting-edge technology to `}</p>
                          <p className="mb-0">{`deliver news in accessible and engaging formats. `}</p>
                          <p className="mb-0">{`Whether you're browsing on your phone, tablet, or `}</p>
                          <p className="mb-0">{`desktop, we ensure you can stay informed `}</p>
                          <p className="mb-0">{`wherever you are. Our goal is simple: to empower `}</p>
                          <p className="mb-0">{`readers by delivering news that shapes opinions, `}</p>
                          <p className="mb-0">{`sparks conversations, and connects you to the `}</p>
                          <p>world.</p>
                        </div>
                      </div>
                    </div>

                    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.19px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
                          <p className="mb-0"></p>
                          <p>test</p>
                        </div>
                      </div>
                    </div>
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