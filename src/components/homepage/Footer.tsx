import React from 'react';
import Link from 'next/link';

// Social Media Icons
const FacebookIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <FacebookIcon />
                  <span>Facebook</span>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <InstagramIcon />
                  <span>Instagram</span>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <TwitterIcon />
                  <span>Twitter</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <YouTubeIcon />
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
                <h3 className="text-lg font-normal">Subscribe to NewsFlash</h3>
              </div>
              <p className="text-white/80 text-md leading-relaxed">
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
              <p className="text-sm text-white/80">
                We don&apos;t spam, promised. Only two emails every month, you can opt out anytime with just one click.
              </p>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-4 bg-[#cc0000]"></div>
                <h3 className="text-lg font-normal">Company</h3>
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
                <h3 className="text-lg font-normal">Categories</h3>
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
                <h3 className="text-lg font-normal">Categories</h3>
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
                <h3 className="text-lg font-normal">Social Media</h3>
              </div>
              <div className="space-y-3 text-sm">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                  <span>Twitter</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <YouTubeIcon className="w-4 h-4" />
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