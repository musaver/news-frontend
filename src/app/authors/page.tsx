import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import { imgContainer } from "@/imports/svg-4a9ab";
import Link from 'next/link';

interface Author {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

async function getAuthors(): Promise<Author[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/authors`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch authors');
      return [];
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export default async function AuthorsPage() {
  const authors = await getAuthors();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        
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
                <p className="leading-[94.8px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>Meet Our Authors</p>
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
                {authors.length > 0 ? (
                  authors.map((author) => (
                    <Link
                      key={author.id}
                      href={`/authors/${author.id}`}
                      className="space-y-3 cursor-pointer group"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                        {author.image ? (
                          <img
                            src={author.image}
                            alt={author.name || 'Author'}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600 text-4xl font-bold">
                            {author.name?.charAt(0) || 'A'}
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-[16px] leading-[22px] font-normal text-[#020a1c] group-hover:text-[#cc0000] transition-colors">
                          {author.name || 'Unknown Author'}
                        </h3>
                        <p className="text-[13px] leading-[18px] text-[#657285]">
                          Author
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="col-span-3 text-center text-[#657285] py-12">No authors found.</p>
                )}
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
                {authors.length > 0 ? (
                  authors.map((author) => (
                    <Link
                      key={author.id}
                      href={`/authors/${author.id}`}
                      className="space-y-2 cursor-pointer"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                        {author.image ? (
                          <img
                            src={author.image}
                            alt={author.name || 'Author'}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600 text-3xl font-bold">
                            {author.name?.charAt(0) || 'A'}
                          </div>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-[14px] leading-[20px] font-normal text-[#020a1c]">
                          {author.name || 'Unknown Author'}
                        </h3>
                        <p className="text-[11px] leading-[16px] text-[#657285]">
                          Author
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="col-span-2 text-center text-[#657285] py-12">No authors found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

