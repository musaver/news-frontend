'use client'

import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import { imgContainer } from "@/imports/svg-4a9ab";

export default function AuthorsPage() {
  const authors = [
    {
      id: 1,
      name: 'Amara Okafor',
      role: 'National Politics and Policy',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTM0OTczOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Chris Evans',
      role: 'International Business and Development',
      image: 'https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc2MTMxNDc1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Rachel Johnson',
      role: 'Health and Wellness',
      image: 'https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTMzOTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'David Brown',
      role: 'Finance and Markets',
      image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW58ZW58MXx8fHwxNzYxMzk3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: 'Emily Chen',
      role: 'Technology and Innovation',
      image: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTM5NzQ5MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: 'James Carter',
      role: 'Sports and Entertainment',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjEzMDU1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 7,
      name: 'Samuel Adeyemi',
      role: 'Culture and Society',
      image: 'https://images.unsplash.com/photo-1711439858551-c96a3c310075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXN0JTIwcmVwb3J0ZXJ8ZW58MXx8fHwxNzYxMzI2NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 8,
      name: 'Michael Thompson',
      role: 'Real Estate and Development',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEzMjY1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 9,
      name: 'Sarah Mitchell',
      role: 'Fashion and Lifestyle',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MTM1MTc2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 10,
      name: 'Sophia Wu',
      role: 'Environment and Sustainability',
      image: 'https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjBhdXRob3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEzMDA4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 11,
      name: 'Joseph Clark',
      role: 'Travel and Adventure',
      image: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwam91cm5hbGlzdHxlbnwxfHx8fDE3NjEzOTc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
                <p className="leading-[22px]">Meet Our Authors</p>
              </div>
            </div>
            
            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]" data-name="Mask Group">
              <div 
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[94.8px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] not-italic text-[68.18px] top-1/2 translate-y-[-50%] w-full" 
                style={{ maskImage: `url('${imgContainer}')` }}
              >
                <p className="leading-[94.8px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)', textStroke: '0.6px rgba(101, 114, 133, 0.6)' }}>Meet Our Authors</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="grid grid-cols-[340px_1fr] gap-12 lg:gap-16">
              {/* Left Column - About Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-4 text-[15px] leading-[24px] text-[#657285]">
                    <p>
                      Our team of authors at NewsFlash is comprised of professional journalists with encyclopedic expertise. Each member of our team brings a unique perspective and in-depth knowledge to their articles, ensuring our readers receive accurate, insightful and engaging information.
                    </p>
                    <p>
                      From covering small businesses that flourish in evolving economic landscapes to reporting on medical professionals adapting to emerging roles, our authors demonstrate exceptional storytelling while uncovering facts and providing meaningful context.
                    </p>
                    <p>
                      Our contributors have been recognized with journalistic prizes while continuing their commitment to innovation in writing, storytelling and multimedia journalism that seamlessly blends investigative reporting with ethical standards and artistic nuance to ensure that every story meets the highest standards of accuracy, insight, and impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Authors Grid */}
              <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                {authors.map((author) => (
                  <div 
                    key={author.id} 
                    className="space-y-3 cursor-pointer group"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[16px] leading-[22px] font-normal text-[#020a1c] group-hover:text-[#cc0000] transition-colors">
                        {author.name}
                      </h3>
                      <p className="text-[13px] leading-[18px] text-[#657285]">
                        {author.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="max-w-[480px] mx-auto px-4 py-6">
            <div className="space-y-8">
              {/* About Section */}
              <div className="space-y-4">
                <div className="space-y-3 text-[14px] leading-[22px] text-[#657285]">
                  <p>
                    Our team of authors at NewsFlash is comprised of professional journalists with encyclopedic expertise. Each member of our team brings a unique perspective and in-depth knowledge to their articles.
                  </p>
                  <p>
                    From covering small businesses to medical innovations, our authors demonstrate exceptional storytelling while uncovering facts and providing meaningful context.
                  </p>
                </div>
              </div>

              {/* Authors Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {authors.map((author) => (
                  <div 
                    key={author.id} 
                    className="space-y-2 cursor-pointer"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-[14px] leading-[20px] font-normal text-[#020a1c]">
                        {author.name}
                      </h3>
                      <p className="text-[11px] leading-[16px] text-[#657285]">
                        {author.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

