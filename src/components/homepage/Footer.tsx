import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#020a1c] text-white pb-6">
    <div className="w-full h-1 bg-[#cc0000] mb-0"></div>
    <div className="pt-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
      {/* Mobile Layout */}
      <div className="md:hidden max-w-[480px] mx-auto">
        <div className="px-6 py-10 space-y-12">
          {/* Newsletter */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-[12.7px] leading-[19px] font-normal">Subscribe to NewsFlash</h3>
            </div>
            <p className="text-white/80 text-[14px] leading-[20px]">
              Stay updated on the latest happenings in the U.S. Whether it&apos;s business, politics, fashion, tech or finance, we deliver it in a flash—straight to your inbox.
            </p>
            <div className="space-y-[10px]">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full px-4 py-[15px] bg-transparent border border-slate-500 rounded-lg text-[12px] text-white/60 placeholder-white/60"
              />
              <button className="w-full px-4 py-[15px] bg-[#cc0000] text-white text-[16px] leading-[16px] rounded-lg">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] leading-[14px] text-white/80">
              We don&apos;t spam, promised. Only two emails every month, you can opt out anytime with just one click.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-[12.8px] leading-[19px] font-normal">Categories</h3>
            </div>
            <div className="flex gap-15">
              <div className="space-y-3 text-[12.6px] leading-[18.2px]">
                <Link href="#" className="block text-white/70 hover:text-white">Business</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Health</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Fashion</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Travel</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Sports</Link>
              </div>
              <div className="space-y-3 text-[12.7px] leading-[18.2px] ml-[60px]">
                <Link href="#" className="block text-white/70 hover:text-white">Finance</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Politics</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Real Estate</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Entertainment</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Tech</Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-[13.3px] leading-[19px] font-normal">Company</h3>
            </div>
            <div className="space-y-3 text-[12.9px] leading-[18.2px]">
              <Link href="/about-us" className="block text-white/70 hover:text-white">About</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Careers</Link>
              <Link href="/authors" className="block text-white/70 hover:text-white">Authors</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Advertise</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-[12.9px] leading-[19px] font-normal">Social Media</h3>
            </div>
            <div className="space-y-3 text-[12.9px] leading-[18.2px]">
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Facebook</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Instagram</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Twitter</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>LinkedIn</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-600/35 pt-3 px-6">
          <div className="space-y-[10px] text-slate-300">
            <div className="flex items-center gap-2 text-[12.9px] leading-[16.8px]">
              <span>Copyright</span>
              <span>© 2025</span>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <span>All Rights Reserved</span>
            </div>
           
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_14.75%_14.75%_14.75%_14.75%] gap-12 mb-24 relative">
          {/* Vertical Dividers */}
          <div className="hidden lg:block absolute left-[27%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          <div className="hidden lg:block absolute left-[44.75%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          <div className="hidden lg:block absolute left-[63.5%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          <div className="hidden lg:block absolute left-[82.25%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          
          {/* Newsletter */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Subscribe to NewsFlash</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Stay updated on the latest happenings in the U.S. Whether it&apos;s business, politics, fashion, tech or finance, we deliver it in a flash—straight to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full px-4 py-3 bg-transparent border border-slate-500/75 rounded-lg text-sm text-white/80 placeholder-white/80"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-[#cc0000] text-white text-sm rounded">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/80">
              We don&apos;t spam, promised. Only two emails every month, you can opt out anytime with just one click.
            </p>
          </div>
          
          {/* Company */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Company</h3>
            </div>
            <div className="space-y-3 text-sm">
              <Link href="/about-us" className="block text-white/70 hover:text-white">About</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Careers</Link>
              <Link href="/authors" className="block text-white/70 hover:text-white">Authors</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Advertise</Link>
              <Link href="#" className="block text-white/70 hover:text-white">Contact</Link>
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Categories</h3>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-3">
                <Link href="#" className="block text-white/70 hover:text-white">Business</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Health</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Fashion</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Travel</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Sports</Link>
              </div>
            </div>
          </div>

          {/* Categories 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Categories</h3>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-3">
                <Link href="#" className="block text-white/70 hover:text-white">Finance</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Politics</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Real Estate</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Entertainment</Link>
                <Link href="#" className="block text-white/70 hover:text-white">Tech</Link>
              </div>
            </div>
          </div>



          
          
          {/* Social Media */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Social Media</h3>
            </div>
            <div className="space-y-3 text-sm">
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Facebook</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Instagram</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Twitter</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>LinkedIn</span>
              </Link>
              <Link href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-slate-600/35 pt-3">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span>Copyright © 2025</span>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <span>All Rights Reserved</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;