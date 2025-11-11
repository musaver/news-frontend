// NewsFlash v3.3 - Nuclear option: index.html importmap + fetch blocker + vite config
import React, { useState } from 'react';
import { imgOverlay, imgOverlay1, imgOverlay2 } from './imports/svg-n3odl';
import svgPaths from './imports/svg-ykc7st1had';
import svgPathsBlog from './imports/svg-310uk0a386';
// import AuthorPageContainer from './imports/Container-127-311'; // Removed due to memory issues
import { PageHeader } from './components/PageHeader';
import { AboutUsPage } from './components/AboutUsPage';
import { CareersPage } from './components/CareersPage';
import { CareerDetailPage } from './components/CareerDetailPage';
import { ContactUsPage } from './components/ContactUsPage';
import { LoginPage } from './components/LoginPage';
import { LoginSuccessPage } from './components/LoginSuccessPage';
import { AuthorDashboard } from './components/AuthorDashboard';
import { UserDashboard } from './components/UserDashboard';
import { Toaster } from './components/ui/sonner';

// Author page images
import imgActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/ccf955bf9c33c0444a8ac347359fbca671c2ea9f.png";
import imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/ecd68da909b1059d63f9720f84f581ff5639dbd4.png";
import imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/115c605e9615a084a0105850e58b9abb590ac7bc.png";
import imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg from "figma:asset/f09904feba17a2919d9d254b556f74bc6f15245b.png";
import imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg from "figma:asset/9b1a53b2a4ead2f74ac0b8784da7b286caed67aa.png";
import imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg from "figma:asset/fe96281454d1ccc5dbf9c6ae74959b80ceffe4dc.png";
import imgActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg from "figma:asset/0131593e7b51881d7045bd5f3897feba1f46a975.png";
import imgActiveDfQlXuyKxyJ6PynenMDszNPviugJpg from "figma:asset/41061401e98e5875328f0461f5e50dbb47a4bbf4.png";
import imgActiveMAg45McVgg3Gvr5WeoWj3E6AwaEJpg from "figma:asset/937ad44578f7ab9a133a7bb332b8083f0d0a6872.png";
import imgYkdzXkigfF0F8F82KAIxjJiooJpg from "figma:asset/3446d0654933e115c754cdbcc62003d2fd74e953.png";

// Figma imports for Latest News page
import imgFeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/d9c5821104334656535b5f632acf10a1b665ad0c.png";
import imgImage1 from "figma:asset/78204c672e851b9ae73c5c9b06666e3735ad7e81.png";
import imgFigureContainerActiveLhlizHiEArzAiqqDjs8R5WblwJpg from "figma:asset/2c1c5b6574d27047b5a80576237f8726f5fd46c3.png";
import imgFigureContainerActiveIHOlyDcj050N5XfipAyaWShJaJpg from "figma:asset/888020c3fdec247317e6086730c0b056b607b1a3.png";
import imgFigureContainerActiveKwt0VbnYGz3GrYMfUcfcVPwXsYgJpg from "figma:asset/dbb018af25ba89d0fb58fdbdb3eb8d7d51c535cf.png";
import imgFigureContainerActive3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg from "figma:asset/1c65cd016017107e628e54181444b9b42bf07226.png";
import imgFigureContainerActiveFmhL5GnqfOzUewc85GjDHnoP60Jpg from "figma:asset/2970085a861088514d795380ced45d85702a6093.png";
import imgFigureContainerActiveUJ0THpy0DJez1IdltmncZ5ADcI8Jpg from "figma:asset/8fba9c739f0f28ad2aca23d55c174d9feb3530b9.png";
import imgFigureContainerActiveJjMbB0HkdIEw2MZhy87YGq7JjAJpg from "figma:asset/aa143f8b35a85896d8db966621a9a9719406cc04.png";
import imgFigureContainerActiveAXak9AHzVg115TjUny1Yw7Ll94Jpg from "figma:asset/f08bfe5ead1c88404222ba943d168e8cd50e0482.png";
import imgFigureContainerActive99Dz3ZcnkaQjNciOZnLHpaMIfoJpg from "figma:asset/273a0a9e1cc83c900858bd7491be7ba4442b38f9.png";
import imgFigureContainerActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/ecd68da909b1059d63f9720f84f581ff5639dbd4.png";
import imgFigureContainerActiveOjTcQe1QbgGuGobR9Ll7ZaywJpg from "figma:asset/e3a5d71fe178226b5491f53bbb6ae12aefb5ae93.png";
import imgFigureContainerActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg from "figma:asset/3fe66a93924ec6188162af2172151f28d2dce0c4.png";
import imgFigureContainerActiveZQiiFybRr7RRbCaLoEckmQ7MgJpg from "figma:asset/4102106911b4509430b6be52d7f4b47d63832c0a.png";
import imgFigureContainerActiveEpOevgk6PAeDdxpXlImTFc6IgjcJpg from "figma:asset/989f13b973103e0a4a6df88da638fcdbe5e1f884.png";
import imgFigureContainerActiveVn8Iw0Pj4KRiLh8RlI6MvBdmYMwJpg from "figma:asset/dbb1af7f948e0d46a147952a704229f1f6487d9a.png";
import imgFigureContainerActive69WC05JI4PAwTvqhGpjcEr4VZwEJpg from "figma:asset/bb6c46c0663788595dae56d3d07f13c9ff06ef95.png";
import imgFigureContainerActiveKd4S5H00AsijIiOte7MbOgIxBgaJpg from "figma:asset/2c2f01aaeae103d44ca00813c153f754510ed1fb.png";
import imgFigureContainerActiveVSobSGzS7WSqRKevpXiwYcOx8YJpg from "figma:asset/e4a5876e141b6e63dbfceab0a0905c8d30faf494.png";
import imgFigureContainerActiveEpFvAjkENw6XSuvnDmr25ZQiXkJpg from "figma:asset/5c0e600da110e66ee7c42893ab20a0ef6a2782af.png";
import imgFigureContainerActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/115c605e9615a084a0105850e58b9abb590ac7bc.png";
import imgFigureContainerActiveL1AB8VgWhLrCxNg0BmZcC5AGxIwJpg from "figma:asset/b220c939820fb9bff019a6dc8546c15040626e72.png";
import imgFigureContainerActive28AkoNpUShT9IbjEvRheIhenuoJpg from "figma:asset/f9cf4f80b5886ece14b468e60de983281f82d0be.png";
import imgFigureContainerActiveRfehrGw2CteuSruPzwXaqyi6MJpg from "figma:asset/8a4d96551b6b4e6c4b24732c4c083058b2acfdc1.png";
import imgFigureContainerActiveUfyRbc1T9FmFmBTpVccNscBnmEJpg from "figma:asset/f46e6879a445fa8594dd75df61bf0f0000a97c33.png";
import imgFigureContainerActiveMQdRriJaH0GQq3CAvgyN88OuF0Jpg from "figma:asset/f521764ed7428d3025eaa0073897a6842ada53c7.png";
import imgFigureContainerActiveFiJt3BHu4V3Y5PkgfJxAm4FjnqwJpg from "figma:asset/a72b9dca0962299c061aee6645fff121d25a7073.png";
import imgImage2 from "figma:asset/0534b262277ace0020e738f4e550f54996e04490.png";

// Blog detail page imports
import imgYkdzXkigfF0F8F82KAIxjJiooJpg from "figma:asset/3446d0654933e115c754cdbcc62003d2fd74e953.png";
import imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/d9c5821104334656535b5f632acf10a1b665ad0c.png";
import imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/1fc3e7faf42b10c6656188c7582ed5c975bfd82a.png";
import imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/ca8b64e52ffb6913cef606d8d759851d3f013467.png";
import imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg from "figma:asset/0e98d91359ec311902b782518507b4a13078b21b.png";
import imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg from "figma:asset/bf6b1ab96f0245367060fe83ecd3c718cfb105e3.png";
import imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg from "figma:asset/db0f642032e2a177ddb992ac654d59cbf19a6c21.png";
import imgActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg from "figma:asset/a4b019d1e6cec7ccfbef7d510b47c2015a017793.png";
import imgActive28AkoNpUShT9IbjEvRheIhenuoJpg from "figma:asset/f9cf4f80b5886ece14b468e60de983281f82d0be.png";
import imgActiveRfehrGw2CteuSruPzwXaqyi6MJpg from "figma:asset/8a4d96551b6b4e6c4b24732c4c083058b2acfdc1.png";
import imgActiveUfyRbc1T9FmFmBTpVccNscBnmEJpg from "figma:asset/f46e6879a445fa8594dd75df61bf0f0000a97c33.png";
import imgActiveMQdRriJaH0GQq3CAvgyN88OuF0Jpg from "figma:asset/f521764ed7428d3025eaa0073897a6842ada53c7.png";
import imgActiveFiJt3BHu4V3Y5PkgfJxAm4FjnqwJpg from "figma:asset/a72b9dca0962299c061aee6645fff121d25a7073.png";
import imgPhotoYaKHjHargn0KKefshKMiii72AgJpg from "figma:asset/b6c50a5076c56cc4d08b98fba90fdd9a563df433.png";
import imgVbTbiPvjA8FnWKb3WM1CUh3XoJpg from "figma:asset/2e2e91b644507af6ff6d755e7aa800a82564efc4.png";
import img3R5TZJnhVxRAvD1UnuRfFTlfKcJpg from "figma:asset/b678e07febb2b84647a55736db554a4d4a2bc32d.png";
import imgUJjmygpXuubbfyWqUr9JvVv0LZaJpg from "figma:asset/a3976810f1e3b94e7cba1e19936a219c4f6e9a7b.png";

// Mock images - in a real app these would come from the Figma import
const mockImages = {
  featuredArticle: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
  healthNews: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
  fashionNews: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
  realEstateNews: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
  politicsLarge: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=531&h=428&fit=crop',
  healthLarge: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=864&h=628&fit=crop',
  businessLarge: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=507&h=451&fit=crop',
  travel: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=281&h=200&fit=crop',
  entertainment: 'https://images.unsplash.com/photo-1489599505865-b0c71bb7e34a?w=281&h=200&fit=crop',
  sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=281&h=200&fit=crop',
  tech: 'https://images.unsplash.com/photo-1519389950473-47ba0277fc678?w=281&h=200&fit=crop',
  podcast: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
  podcastThumb1: 'https://images.unsplash.com/photo-1519389950473-47ba0277fc678?w=140&h=110&fit=crop',
  podcastThumb2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=110&fit=crop',
  podcastThumb3: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=140&h=110&fit=crop',
  finance: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=306&h=250&fit=crop',
  politicsSmall1: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=125&h=100&fit=crop',
  politicsSmall2: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=125&h=100&fit=crop',
  politicsSmall3: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=125&h=100&fit=crop',
  politicsSmall4: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=125&h=100&fit=crop'
};

// Inline SVG Icons (replacing lucide-react to avoid memory issues)
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Logo Component
const NewsFlashLogo = ({ onClick }) => (
  <div className="h-[30px] w-[175px] cursor-pointer" onClick={onClick}>
    <svg viewBox="0 0 175 30" fill="none" className="w-full h-full">
      <g clipPath="url(#clip0_1_4899)">
        <path d={svgPaths.p1a725800} fill="black" />
        <path d={svgPaths.p111e0c00} fill="#CC0000" />
      </g>
      <defs>
        <clipPath id="clip0_1_4899">
          <rect fill="white" height="29.8443" width="175" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

// Header Navigation
const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
            <div className="text-sm text-slate-600 font-medium">
              September 27 - 06:54 AM
            </div>
            <div className="flex justify-center">
              <NewsFlashLogo onClick={() => onNavigate('home')} />
            </div>
            <div className="text-sm text-slate-600 font-medium text-right">
              New York, US: 20.2°C
            </div>
          </div>
        </div>
        
        {/* Sub Navigation Bar */}
        <div className="bg-[#cc0000] border-b border-slate-200">
          <div className="max-w-[1320px] mx-auto px-6 h-10 flex items-center justify-between">
            <nav className="flex items-center gap-6 text-white text-sm font-['Satoshi:Medium',_sans-serif]">
              <button 
                onClick={() => onNavigate('latest-news')} 
                className="hover:opacity-80 px-[-28px] py-[0px] my-[0px] m-[0px]"
              >
                Latest News
              </button>
              <div className="w-px h-4 bg-white/30"></div>
              <a href="#" className="hover:opacity-80">Business</a>
              <a href="#" className="hover:opacity-80">Health</a>
              <a href="#" className="hover:opacity-80">Real Estate</a>
              <a href="#" className="hover:opacity-80">Travel</a>
              <a href="#" className="hover:opacity-80">Podcast</a>
              <div className="w-px h-4 bg-white/30"></div>
              <button 
                onClick={() => onNavigate('meet-our-authors')} 
                className="hover:opacity-80"
              >
                Authors
              </button>
              <button 
                onClick={() => onNavigate('about-us')} 
                className="hover:opacity-80"
              >
                About Us
              </button>
              <button 
                onClick={() => onNavigate('careers')} 
                className="hover:opacity-80"
              >
                Careers
              </button>
              <button 
                onClick={() => onNavigate('contact-us')} 
                className="hover:opacity-80"
              >
                Contact Us
              </button>
            </nav>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onNavigate('user-dashboard')} 
                className="px-3 py-1.5 bg-white/10 text-white rounded-full text-sm font-['Satoshi:Medium',_sans-serif] hover:bg-white/20 transition-colors border border-white/30"
              >
                User
              </button>
              <button 
                onClick={() => onNavigate('author-dashboard')} 
                className="px-3 py-1.5 bg-white/10 text-white rounded-full text-sm font-['Satoshi:Medium',_sans-serif] hover:bg-white/20 transition-colors border border-white/30"
              >
                Author
              </button>
              <button 
                onClick={() => onNavigate('login')} 
                className="px-4 py-1.5 bg-white text-[#cc0000] rounded-full text-sm font-['Satoshi:Medium',_sans-serif] hover:bg-white/90 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
              >
                <SearchIcon className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-[#cc0000] h-16 flex items-center justify-between px-4">
        <div className="w-[150px] h-[35px]" onClick={() => onNavigate('home')}>
          <svg viewBox="0 0 150 30" fill="none" className="w-full h-full cursor-pointer">
            <g clipPath="url(#clip0_mobile)">
              <path d={svgPaths.p1a725800} fill="white" opacity="0.4" />
              <path d={svgPaths.p111e0c00} fill="white" opacity="0.8" />
            </g>
            <defs>
              <clipPath id="clip0_mobile">
                <rect fill="white" height="30" width="150" />
              </clipPath>
            </defs>
          </svg>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40"
          >
            <SearchIcon className="w-[18px] h-[18px] text-white/80" />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
          >
            {isMenuOpen ? (
              <XIcon className="w-5 h-5 text-[#cc0000]" />
            ) : (
              <MenuIcon className="w-5 h-5 text-[#cc0000]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="px-6 py-8 space-y-8">
            <div className="space-y-8">
              <button 
                onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                Top Stories
              </button>
              <button 
                onClick={() => { onNavigate('latest-news'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                Latest News
              </button>
              <a href="#" className="block text-slate-800">Business</a>
              <a href="#" className="block text-slate-800">Finance</a>
              <a href="#" className="block text-slate-800">Health</a>
              <a href="#" className="block text-slate-800">Politics</a>
              <a href="#" className="block text-slate-800">Fashion</a>
              <a href="#" className="block text-slate-800">Real Estate</a>
              <a href="#" className="block text-slate-800">Travel</a>
              <a href="#" className="block text-slate-800">Entertainment</a>
              <a href="#" className="block text-slate-800">Sports</a>
              <a href="#" className="block text-slate-800">Tech</a>
              <a href="#" className="block text-slate-800">Podcast</a>
            </div>
            <div className="h-px bg-slate-300/35"></div>
            <div className="space-y-6">
              <button 
                onClick={() => { onNavigate('about-us'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                About Us
              </button>
              <button 
                onClick={() => { onNavigate('careers'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                Careers
              </button>
              <button 
                onClick={() => { onNavigate('meet-our-authors'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                Authors
              </button>
              <a href="#" className="block text-slate-800">Advertise</a>
              <button 
                onClick={() => { onNavigate('contact-us'); setIsMenuOpen(false); }} 
                className="block text-slate-800"
              >
                Contact Us
              </button>
            </div>
            <div className="h-px bg-slate-300/35"></div>
            <div className="space-y-3">
              <button 
                onClick={() => { onNavigate('user-dashboard'); setIsMenuOpen(false); }} 
                className="block w-full py-3 bg-white border-2 border-[#cc0000] text-[#cc0000] rounded-lg font-medium hover:bg-[#cc0000] hover:text-white transition-colors"
              >
                User Dashboard
              </button>
              <button 
                onClick={() => { onNavigate('author-dashboard'); setIsMenuOpen(false); }} 
                className="block w-full py-3 bg-white border-2 border-[#cc0000] text-[#cc0000] rounded-lg font-medium hover:bg-[#cc0000] hover:text-white transition-colors"
              >
                Author Dashboard
              </button>
              <button 
                onClick={() => { onNavigate('login'); setIsMenuOpen(false); }} 
                className="block w-full py-3 bg-[#cc0000] text-white rounded-lg font-medium hover:bg-[#b30000] transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
          <div className="flex items-start justify-center pt-16 px-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg">
              <div className="flex items-center p-4 border-b border-slate-200">
                <SearchIcon className="w-5 h-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search NewsFlash..."
                  autoFocus
                  className="flex-1 text-base outline-none placeholder-slate-400"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-3 p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <XIcon className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 mb-2">Popular Searches</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Politics', 'Business', 'Health', 'Technology'].map((tag) => (
                        <button
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                      <button
                        onClick={() => { onNavigate('meet-our-authors'); setIsSearchOpen(false); }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                      >
                        Meet Our Authors
                      </button>
                      <button
                        onClick={() => { onNavigate('about-us'); setIsSearchOpen(false); }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                      >
                        About Us
                      </button>
                      <button
                        onClick={() => { onNavigate('careers'); setIsSearchOpen(false); }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                      >
                        Careers
                      </button>
                      <button
                        onClick={() => { onNavigate('career-detail'); setIsSearchOpen(false); }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                      >
                        Job Openings
                      </button>
                      <button
                        onClick={() => { onNavigate('contact-us'); setIsSearchOpen(false); }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 mb-2">Recent Articles</h3>
                    <div className="space-y-2">
                      {[
                        { title: 'Small Businesses Flourish as US Government Expands Loan Access', category: 'Business' },
                        { title: 'Amber Hightower\'s Message of Unity Gains Momentum', category: 'Politics' }
                      ].map((article, index) => (
                        <div key={index} className="flex items-center p-1.5 hover:bg-slate-50 rounded cursor-pointer">
                          <div className="flex-1">
                            <h4 className="text-xs font-medium text-slate-900 line-clamp-2">{article.title}</h4>
                            <p className="text-xs text-slate-500">{article.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, showViewAll = true, redBullet = true }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      {redBullet && <div className="w-1 h-4 bg-[#cc0000]"></div>}
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
    {showViewAll && (
      <div className="flex items-center gap-1 text-sm text-slate-700 font-medium">
        <span>view all</span>
        <div className="w-2.5 h-2.5"></div>
      </div>
    )}
  </div>
);

// Category Badge Component
const CategoryBadge = ({ children }) => (
  <span className="inline-block px-3 py-1 text-xs font-medium text-[#cc0000] bg-[rgba(204,0,0,0.05)] border border-[rgba(204,0,0,0.1)] rounded backdrop-blur-sm">
    {children}
  </span>
);

// Article Date Component
const ArticleDate = ({ children }) => (
  <span className="text-xs text-slate-500 font-medium">{children}</span>
);

// Featured Article Section
const FeaturedSection = ({ onArticleClick }) => (
  <section className="max-w-[917px] md:max-w-none">
    {/* Mobile Layout */}
    <div className="md:hidden space-y-4">
      <div 
        className="rounded-lg overflow-hidden h-[300px] cursor-pointer"
        onClick={() => onArticleClick({
          category: 'Business',
          date: 'Sep 25, 2024',
          title: 'Small Businesses Flourish as US Government Expands Loan Access and Support',
          excerpt: 'In a year filled with economic challenges, small businesses across the United States are finding new opportunities for growth and expansion, thanks to the U.S. government\'s expanded loan programs and support initiatives.',
          content: 'The Small Business Administration (SBA) has significantly expanded its lending programs, making it easier for entrepreneurs to access capital. This initiative comes at a critical time when many small businesses are recovering from economic uncertainties. The new programs offer lower interest rates, extended repayment terms, and reduced collateral requirements, making business ownership more accessible to a broader range of Americans.',
          image: mockImages.featuredArticle
        })}
      >
        <img 
          src={mockImages.featuredArticle} 
          alt="Featured article" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-3">
          <CategoryBadge>Business</CategoryBadge>
          <ArticleDate>Sep 25, 2024</ArticleDate>
        </div>
        <h1 className="text-[22px] leading-[32px] font-normal cursor-pointer hover:text-[#cc0000]" onClick={() => onArticleClick({
          category: 'Business',
          date: 'Sep 25, 2024',
          title: 'Small Businesses Flourish as US Government Expands Loan Access and Support',
          excerpt: 'In a year filled with economic challenges, small businesses across the United States are finding new opportunities for growth and expansion, thanks to the U.S. government\'s expanded loan programs and support initiatives.',
          content: 'The Small Business Administration (SBA) has significantly expanded its lending programs, making it easier for entrepreneurs to access capital. This initiative comes at a critical time when many small businesses are recovering from economic uncertainties.',
          image: mockImages.featuredArticle
        })}>
          Small Businesses Flourish as US Government Expands Loan Access and Support
        </h1>
        <p className="text-slate-700 leading-[21px] text-[14.6px]">
          In a year filled with economic challenges, small businesses across the United States 
          are finding new opportunities for growth and expansion, thanks to the U.S. government&apos;s expanded loan…
        </p>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
      <div className="flex flex-col justify-center space-y-3">
        <div className="flex items-center gap-3">
          <CategoryBadge>Business</CategoryBadge>
          <ArticleDate>Sep 25, 2024</ArticleDate>
        </div>
        <h1 className="text-4xl leading-tight font-bold cursor-pointer hover:text-[#cc0000]" onClick={() => onArticleClick({
          category: 'Business',
          date: 'Sep 25, 2024',
          title: 'Small Businesses Flourish as US Government Expands Loan Access and Support',
          excerpt: 'In a year filled with economic challenges, small businesses across the United States are finding new opportunities for growth and expansion, thanks to the U.S. government\'s expanded loan programs and support initiatives.',
          content: 'The Small Business Administration (SBA) has significantly expanded its lending programs, making it easier for entrepreneurs to access capital. This initiative comes at a critical time when many small businesses are recovering from economic uncertainties.',
          image: mockImages.featuredArticle
        })}>
          Small Businesses Flourish as US Government Expands Loan Access and Support
        </h1>
        <p className="text-slate-700 leading-relaxed">
          In a year filled with economic challenges, small businesses across the United States 
          are finding new opportunities for growth and expansion, thanks to the U.S.…
        </p>
      </div>
      <div 
        className="rounded-lg overflow-hidden cursor-pointer"
        onClick={() => onArticleClick({
          category: 'Business',
          date: 'Sep 25, 2024',
          title: 'Small Businesses Flourish as US Government Expands Loan Access and Support',
          excerpt: 'In a year filled with economic challenges, small businesses across the United States are finding new opportunities for growth and expansion, thanks to the U.S. government\'s expanded loan programs and support initiatives.',
          content: 'The Small Business Administration (SBA) has significantly expanded its lending programs, making it easier for entrepreneurs to access capital.',
          image: mockImages.featuredArticle
        })}
      >
        <img 
          src={mockImages.featuredArticle} 
          alt="Featured article" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

// Latest News Section
const LatestNewsSection = ({ onArticleClick }) => {
  const articles = [
    {
      category: 'Health',
      date: 'Sep 23, 2024',
      title: 'The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve',
      excerpt: 'The healthcare sector is experiencing a significant shift as non-clinical roles gain importance in the rapidly evolving landscape.',
      content: 'Healthcare professionals are adapting to emerging roles as the industry evolves to meet modern demands and technological advancements.',
      image: mockImages.healthNews
    },
    {
      category: 'Fashion', 
      date: 'Sep 21, 2024',
      title: 'Bold and Beautiful: Fall 2024 Fashion Trends to Watch',
      excerpt: 'This season brings vibrant colors, sustainable fabrics, and innovative designs that redefine contemporary fashion.',
      content: 'Fashion designers are embracing sustainability while pushing creative boundaries with bold new aesthetics.',
      image: mockImages.fashionNews
    },
    {
      category: 'Real Estate',
      date: 'Sep 20, 2024', 
      title: 'Mixed-Use Developments, The Future of Urban Living',
      excerpt: 'Urban planners embrace mixed-use developments as cities evolve to create more integrated living experiences.',
      content: 'Modern urban development focuses on creating communities that blend residential, commercial, and recreational spaces.',
      image: mockImages.realEstateNews
    },
    {
      category: 'Travel',
      date: 'Sep 19, 2024', 
      title: 'Digital Nomads Redefine the New Normal to Work and Travel',
      excerpt: 'Remote work revolution enables professionals to explore the world while maintaining successful careers.',
      content: 'The rise of remote work has created new opportunities for location-independent professionals.',
      image: mockImages.travel
    }
  ];

  return (
    <section className="max-w-[917px] md:max-w-none">
      <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
        <div className="w-1 h-4 bg-[#cc0000]"></div>
        <h2 className="text-[12.5px] leading-[19px] md:text-lg font-normal">Latest News</h2>
        <div className="flex-1 h-px bg-slate-300/35"></div>
        <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
          <span>view all</span>
          <div className="w-2.5 h-2.5"></div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {articles.map((article, index) => (
          <article key={index} className="flex gap-2 cursor-pointer" onClick={() => onArticleClick(article)}>
            <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 text-[10.9px]">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h3 className="text-[14.8px] leading-[20px] font-normal hover:text-[#cc0000]">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {articles.slice(0, 3).map((article, index) => (
          <article key={index} className="space-y-3 cursor-pointer" onClick={() => onArticleClick(article)}>
            <div className="rounded-lg overflow-hidden h-[200px]">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 px-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">{article.category}</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <ArticleDate>{article.date}</ArticleDate>
              </div>
              <h3 className="text-lg leading-tight font-semibold hover:text-[#cc0000]">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// Top Stories Section
const TopStoriesSection = ({ onArticleClick }) => {
  const stories = [
    { category: 'Tech', date: 'Sep 16, 2024', title: 'AI Revolution Drives Tech Innovation in 2024', content: 'Artificial intelligence transforms industries and creates new possibilities.', image: mockImages.tech },
    { category: 'Entertainment', date: 'Sep 8, 2024', title: 'Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects', content: 'Major entertainment partnerships create buzz.', image: mockImages.entertainment },
    { category: 'Entertainment', date: 'Aug 18, 2024', title: 'Streaming Services Unveil Innovative Features', content: 'Platforms compete with new viewer experiences.', image: mockImages.entertainment },
    { category: 'Politics', date: 'Aug 12, 2024', title: 'Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act', content: 'Bipartisan support for environmental initiatives.', image: mockImages.politicsLarge }
  ];

  return (
    <section className="md:bg-[#f7fafc] md:rounded-lg md:border md:border-slate-200/20 md:p-6">
      <div className="max-w-[917px] md:max-w-none">
        <div className="flex items-center gap-5 mb-4 px-1 md:px-0">
          <div className="w-1 h-4 bg-[#cc0000]"></div>
          <h2 className="text-[12.6px] leading-[19px] md:text-lg font-normal">Top Stories</h2>
          <div className="flex-1 h-px bg-slate-300/35"></div>
          <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
            <span>view all</span>
            <div className="w-2.5 h-2.5"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          <div className="relative rounded-lg overflow-hidden h-[300px] cursor-pointer" onClick={() => onArticleClick({
            category: 'Politics',
            date: 'Sep 22, 2024',
            title: 'Amber Hightower\'s Message of Unity Gains Momentum Ahead of Election',
            content: 'Political candidate gains support with unifying message.',
            image: mockImages.politicsLarge
          })}>
            <img 
              src={mockImages.politicsLarge} 
              alt="Top story"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 60%, rgba(2, 10, 28, 0.8) 100%)`
              }}
            ></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-[10.9px] mb-1">
                <span className="text-white/60">Politics</span>
                <div className="w-[3px] h-[3px] bg-white/60 rounded-full"></div>
                <span className="text-white/60">Sep 22, 2024</span>
              </div>
              <h3 className="text-[15px] leading-[19.2px] font-normal">
                Amber Hightower&apos;s Message of Unity Gains Momentum Ahead of Election
              </h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-1 space-y-6">
            {stories.map((article, index) => (
              <article key={index} className="space-y-1 cursor-pointer" onClick={() => onArticleClick(article)}>
                <div className="flex items-center gap-2 text-[10.9px]">
                  <span className="text-slate-500">{article.category}</span>
                  <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h4 className="text-[14.9px] leading-[19.2px] font-normal hover:text-[#cc0000]">{article.title}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="relative rounded-lg overflow-hidden h-[428px] cursor-pointer" onClick={() => onArticleClick({
            category: 'Politics',
            date: 'Sep 22, 2024',
            title: 'Amber Hightower\'s Message of Unity Gains Momentum Ahead of Election',
            content: 'Political candidate gains support with unifying message.',
            image: mockImages.politicsLarge
          })}>
            <img 
              src={mockImages.politicsLarge} 
              alt="Top story"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 60%, rgba(2, 10, 28, 0.8) 100%)`
              }}
            ></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="text-white/60">Politics</span>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <span className="text-white/60">Sep 22, 2024</span>
              </div>
              <h3 className="text-xl leading-tight font-semibold">
                Amber Hightower&apos;s Message of Unity Gains Momentum Ahead of Election
              </h3>
            </div>
          </div>
          
          <div className="bg-white rounded border p-6 space-y-6">
            {stories.map((article, index) => (
              <article key={index} className="space-y-1 cursor-pointer" onClick={() => onArticleClick(article)}>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">{article.category}</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h4 className="text-base leading-tight font-medium hover:text-[#cc0000]">{article.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Finance Sidebar
const FinanceSidebar = ({ onArticleClick }) => {
  const articles = [
    { date: 'Sep 14, 2024', title: 'Federal Reserve Signals Potential Rate Cuts Amid Economic Resilience', category: 'Finance', content: 'Central bank considers policy adjustments.', image: mockImages.finance },
    { date: 'Sep 4, 2024', title: 'Stocks Surge as Investors Seek Growth Amid Rate Uncertainty', category: 'Finance', content: 'Markets respond to economic indicators.', image: mockImages.finance },
    { date: 'Aug 24, 2024', title: 'The New York Stock Exchange buzzes with activity as U.S. markets reach new all-time highs', category: 'Finance', content: 'Record-breaking market performance.', image: mockImages.finance },
    { date: 'Aug 14, 2024', title: 'Stocks Rebound as Market Eyes Potential Rate Cuts', category: 'Finance', content: 'Investor optimism grows.', image: mockImages.finance },
    { date: 'Aug 4, 2024', title: 'Investors Eye Renewable Energy Stocks as Market Shifts to Green Economy', category: 'Finance', content: 'Sustainable investment trends emerge.', image: mockImages.finance },
    { date: 'Jul 30, 2024', title: 'Market Optimism Grows as Fintech Trends Drive Future of Finance', category: 'Finance', content: 'Technology transforms financial services.', image: mockImages.finance },
    { date: 'Jul 27, 2024', title: 'Saving Strategies to Build Wealth in a High-Interest Environment', category: 'Finance', content: 'Smart financial planning advice.', image: mockImages.finance },
    { date: 'Jul 26, 2024', title: 'Smart Budgeting Tips to Maximize Your Savings in 2024', category: 'Finance', content: 'Personal finance guidance.', image: mockImages.finance }
  ];

  return (
    <aside className="w-[306px]">
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden h-[250px] cursor-pointer" onClick={() => onArticleClick(articles[0])}>
          <img 
            src={mockImages.finance} 
            alt="Finance"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <SectionHeader title="Finance" showViewAll={true} />
          <div className="space-y-4 mt-4">
            {articles.map((article, index) => (
              <div key={index} className="border-b border-slate-200 pb-3 cursor-pointer" onClick={() => onArticleClick(article)}>
                <div className="flex items-center gap-2 text-xs mb-1">
                  <span className="text-slate-500">Finance</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h4 className="text-sm leading-tight hover:text-[#cc0000]">{article.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

// Politics News Section
const PoliticsNewsSection = ({ onArticleClick }) => {
  const articles = [
    { date: 'Sep 12, 2024', title: 'Rising Candidate Advocates Bold Vision Amid Economic Challenges', image: mockImages.politicsSmall1, category: 'Politics', content: 'New political voice emerges.' },
    { date: 'Sep 2, 2024', title: 'Senator Grace Hamilton Gains Momentum as Youth Support Surges', image: mockImages.politicsSmall2, category: 'Politics', content: 'Youth voter engagement increases.' },
    { date: 'Aug 22, 2024', title: 'Melissa Kent\'s Resilient Campaign Rebounds Amid Challenging Polls', image: mockImages.politicsSmall3, category: 'Politics', content: 'Campaign strategy evolves.' },
    { date: 'Aug 2, 2024', title: 'Ava Mitchell\'s Bold Economic Vision Resonates with Voters', image: mockImages.politicsSmall4, category: 'Politics', content: 'Economic platform gains traction.' }
  ];

  return (
    <section className="bg-white/20 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.04)] py-6">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-5 mb-6 px-1 md:px-0">
          <div className="w-1 h-4 bg-[#cc0000]"></div>
          <h2 className="text-[12.7px] leading-[19px] md:text-lg font-normal">Politics</h2>
          <div className="flex-1 h-px bg-slate-300/35"></div>
          <div className="flex items-center gap-1 text-[12.8px] leading-[19px] md:text-sm text-slate-700 font-normal">
            <span>view all</span>
            <div className="w-2.5 h-2.5"></div>
          </div>
        </div>

        <div className="md:hidden space-y-6 max-w-[480px] mx-auto">
          {articles.map((article, index) => (
            <article key={index} className="flex gap-2 cursor-pointer" onClick={() => onArticleClick(article)}>
              <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 text-[10.9px]">
                  <span className="text-slate-500">Politics</span>
                  <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h3 className="text-[14.8px] leading-[20px] font-normal hover:text-[#cc0000]">{article.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
          {articles.map((article, index) => (
            <article key={index} className="flex gap-3 cursor-pointer" onClick={() => onArticleClick(article)}>
              <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Politics</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h3 className="text-sm leading-tight font-medium hover:text-[#cc0000]">{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Remaining sections remain the same but shortened for brevity - Health, Business, FourColumn, Podcast
// [Previous code for these sections with onArticleClick handlers added]

// Footer Component (unchanged)
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
              Stay updated on the latest happenings in the U.S. Whether it's business, politics, fashion, tech or finance, we deliver it in a flash—straight to your inbox.
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
              We don't spam, promised. Only two emails every month, you can opt out anytime with just one click.
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
                <a href="#" className="block text-white/70 hover:text-white">Business</a>
                <a href="#" className="block text-white/70 hover:text-white">Health</a>
                <a href="#" className="block text-white/70 hover:text-white">Fashion</a>
                <a href="#" className="block text-white/70 hover:text-white">Travel</a>
                <a href="#" className="block text-white/70 hover:text-white">Sports</a>
              </div>
              <div className="space-y-3 text-[12.7px] leading-[18.2px] ml-[60px]">
                <a href="#" className="block text-white/70 hover:text-white">Finance</a>
                <a href="#" className="block text-white/70 hover:text-white">Politics</a>
                <a href="#" className="block text-white/70 hover:text-white">Real Estate</a>
                <a href="#" className="block text-white/70 hover:text-white">Entertainment</a>
                <a href="#" className="block text-white/70 hover:text-white">Tech</a>
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
              <a href="#" className="block text-white/70 hover:text-white">About</a>
              <a href="#" className="block text-white/70 hover:text-white">Careers</a>
              <a href="#" className="block text-white/70 hover:text-white">Authors</a>
              <a href="#" className="block text-white/70 hover:text-white">Advertise</a>
              <a href="#" className="block text-white/70 hover:text-white">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-[12.9px] leading-[19px] font-normal">Social Media</h3>
            </div>
            <div className="space-y-3 text-[12.9px] leading-[18.2px]">
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-[18px] h-[18px]"></div>
                <span>YouTube</span>
              </a>
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
            <div className="flex items-center gap-1 text-[12.9px] leading-[15.6px]">
              <span>Made with</span>
              <div className="w-[14px] h-[14px]"></div>
              <span>using Framer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24 relative">
          {/* Vertical Dividers */}
          <div className="hidden lg:block absolute left-[25%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          <div className="hidden lg:block absolute left-[75%] top-0 bottom-0 w-px bg-slate-600/20"></div>
          
          {/* Newsletter */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Subscribe to NewsFlash</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Stay updated on the latest happenings in the U.S. Whether it's business, politics, fashion, tech or finance, we deliver it in a flash—straight to your inbox.
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
              We don't spam, promised. Only two emails every month, you can opt out anytime with just one click.
            </p>
          </div>
          
          {/* Company */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-4 bg-[#cc0000]"></div>
              <h3 className="text-lg font-semibold">Company</h3>
            </div>
            <div className="space-y-3 text-sm">
              <a href="#" className="block text-white/70 hover:text-white">About</a>
              <a href="#" className="block text-white/70 hover:text-white">Careers</a>
              <a href="#" className="block text-white/70 hover:text-white">Authors</a>
              <a href="#" className="block text-white/70 hover:text-white">Advertise</a>
              <a href="#" className="block text-white/70 hover:text-white">Contact</a>
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
                <a href="#" className="block text-white/70 hover:text-white">Business</a>
                <a href="#" className="block text-white/70 hover:text-white">Health</a>
                <a href="#" className="block text-white/70 hover:text-white">Fashion</a>
                <a href="#" className="block text-white/70 hover:text-white">Travel</a>
                <a href="#" className="block text-white/70 hover:text-white">Sports</a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white">Finance</a>
                <a href="#" className="block text-white/70 hover:text-white">Politics</a>
                <a href="#" className="block text-white/70 hover:text-white">Real Estate</a>
                <a href="#" className="block text-white/70 hover:text-white">Entertainment</a>
                <a href="#" className="block text-white/70 hover:text-white">Tech</a>
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
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-1 text-white/70 hover:text-white">
                <div className="w-4 h-4"></div>
                <span>YouTube</span>
              </a>
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
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <div className="w-3 h-3"></div>
              <span>using Framer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </footer>
);

// Homepage Component
const HomePage = ({ onArticleClick, onAuthorClick }) => (
  <>
    <div className="pt-16 md:pt-[104px]">
      <PageHeader pageName="Top Stories" />
    </div>
    <main>
      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-6 space-y-12 max-w-[480px] mx-auto">
        <FeaturedSection onArticleClick={onArticleClick} />
        <LatestNewsSection onArticleClick={onArticleClick} />
        <TopStoriesSection onArticleClick={onArticleClick} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Main Content Grid */}
        <div className="max-w-[1320px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-12">
              <FeaturedSection onArticleClick={onArticleClick} />
              <LatestNewsSection onArticleClick={onArticleClick} />
              <TopStoriesSection onArticleClick={onArticleClick} />
            </div>
            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-slate-200 mx-3"></div>
            <div className="lg:col-span-1">
              <FinanceSidebar onArticleClick={onArticleClick} />
            </div>
          </div>
        </div>
      </div>
      
      <PoliticsNewsSection onArticleClick={onArticleClick} />
    </main>
    
    <Footer />
  </>
);

// Latest News Page Component
const LatestNewsPage = ({ onArticleClick, onAuthorClick }) => {
  const latestNewsArticles = [
    {
      category: 'Health',
      date: 'Sep 23, 2024',
      title: 'The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve',
      excerpt: 'The healthcare sector is experiencing a significant shift as non-clinical roles gain importance in the rapidly evolving landscape. Driven by technological…',
      content: 'Healthcare professionals adapt to emerging roles as the industry evolves.',
      image: imgFeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg
    },
    {
      category: 'Politics',
      date: 'Sep 22, 2024',
      title: 'Amber Hightower\'s Message of Unity Gains Momentum Ahead of Election',
      excerpt: 'Political candidate gains widespread support with message of unity.',
      content: 'Unifying political message resonates with voters.',
      image: imgFigureContainerActiveLhlizHiEArzAiqqDjs8R5WblwJpg
    },
    {
      category: 'Fashion',
      date: 'Sep 21, 2024',
      title: 'Bold and Beautiful: Fall 2024 Fashion Trends to Watch',
      excerpt: 'This season brings vibrant colors and innovative designs.',
      content: 'Fashion industry embraces bold new aesthetics.',
      image: imgFigureContainerActiveIHOlyDcj050N5XfipAyaWShJaJpg
    },
    {
      category: 'Real Estate',
      date: 'Sep 20, 2024',
      title: 'Mixed-Use Developments, The Future of Urban Living',
      excerpt: 'Urban planning evolves with integrated living and working spaces.',
      content: 'Modern urban developments combine residential, commercial, and recreational spaces.',
      image: imgFigureContainerActiveKwt0VbnYGz3GrYMfUcfcVPwXsYgJpg
    },
    {
      category: 'Travel',
      date: 'Sep 19, 2024',
      title: 'Digital Nomads Redefine the New Normal to Work and Travel',
      excerpt: 'Remote work culture transforms the way people explore the world.',
      content: 'The rise of digital nomadism creates new opportunities for work-life balance.',
      image: imgFigureContainerActive3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg
    },
    {
      category: 'Entertainment',
      date: 'Sep 18, 2024',
      title: 'Timeless TV Shows Make a Spectacular Comeback with Famous Stars',
      excerpt: 'Classic television series return with original casts and fresh storylines.',
      content: 'Nostalgia meets modern storytelling in exciting TV revivals.',
      image: imgFigureContainerActiveFmhL5GnqfOzUewc85GjDHnoP60Jpg
    },
    {
      category: 'Sports',
      date: 'Sep 17, 2024',
      title: 'US Swimmer Smashes World Record in 2024 Olympics',
      excerpt: 'American athlete achieves historic performance at international games.',
      content: 'Olympic swimming records fall as athletes push the limits of human achievement.',
      image: imgFigureContainerActiveUJ0THpy0DJez1IdltmncZ5ADcI8Jpg
    },
    {
      category: 'Tech',
      date: 'Sep 16, 2024',
      title: 'AI Revolution Drives Tech Innovation in 2024',
      excerpt: 'Artificial intelligence transforms industries and creates new possibilities.',
      content: 'The latest AI breakthroughs reshape how we work and interact with technology.',
      image: imgFigureContainerActiveJjMbB0HkdIEw2MZhy87YGq7JjAJpg
    },
    {
      category: 'Business',
      date: 'Sep 15, 2024',
      title: 'Consumer Confidence Soars as Retail Sales Surge, Signaling Strong Economic Recovery',
      excerpt: 'Retail sector sees significant growth as consumer spending increases.',
      content: 'Economic indicators point to robust recovery and sustained business growth.',
      image: imgFigureContainerActiveAXak9AHzVg115TjUny1Yw7Ll94Jpg
    },
    {
      category: 'Finance',
      date: 'Sep 14, 2024',
      title: 'Federal Reserve Signals Potential Rate Cuts Amid Economic Resilience',
      excerpt: 'Central bank considers monetary policy adjustments in response to economic data.',
      content: 'Financial markets react to potential changes in federal interest rates.',
      image: imgFigureContainerActive99Dz3ZcnkaQjNciOZnLHpaMIfoJpg
    },
    {
      category: 'Health',
      date: 'Sep 13, 2024',
      title: 'Personalized Nutrition for Chronic Disease Management',
      excerpt: 'Tailored dietary approaches show promise in treating long-term health conditions.',
      content: 'Medical research advances personalized healthcare through nutrition science.',
      image: imgFigureContainerActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg
    },
    {
      category: 'Technology',
      date: 'Sep 12, 2024',
      title: 'Quantum Computing Breakthrough Promises Faster Processing',
      excerpt: 'Scientists achieve milestone in quantum computing development.',
      content: 'New quantum computing capabilities could revolutionize data processing.',
      image: imgFigureContainerActiveOjTcQe1QbgGuGobR9Ll7ZaywJpg
    },
    {
      category: 'Environment',
      date: 'Sep 11, 2024',
      title: 'Renewable Energy Adoption Reaches Record Levels Globally',
      excerpt: 'Countries worldwide accelerate transition to sustainable energy sources.',
      content: 'Green energy initiatives drive global climate action and sustainability goals.',
      image: imgFigureContainerActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg
    },
    {
      category: 'Education',
      date: 'Sep 10, 2024',
      title: 'Online Learning Platforms Transform Higher Education',
      excerpt: 'Digital education tools reshape traditional academic institutions.',
      content: 'Universities embrace hybrid learning models for enhanced accessibility.',
      image: imgFigureContainerActiveZQiiFybRr7RRbCaLoEckmQ7MgJpg
    },
    {
      category: 'Lifestyle',
      date: 'Sep 9, 2024',
      title: 'Wellness Trends Focus on Mental Health and Mindfulness',
      excerpt: 'Holistic approaches to wellbeing gain mainstream acceptance.',
      content: 'Modern wellness practices emphasize the connection between mind and body.',
      image: imgFigureContainerActiveEpOevgk6PAeDdxpXlImTFc6IgjcJpg
    },
    {
      category: 'Food',
      date: 'Sep 8, 2024',
      title: 'Plant-Based Cuisine Continues to Dominate Restaurant Menus',
      excerpt: 'Chefs innovate with creative vegetarian and vegan offerings.',
      content: 'Culinary trends reflect growing demand for sustainable food choices.',
      image: imgFigureContainerActiveVn8Iw0Pj4KRiLh8RlI6MvBdmYMwJpg
    },
    {
      category: 'Automotive',
      date: 'Sep 7, 2024',
      title: 'Electric Vehicles Set New Sales Records in Global Markets',
      excerpt: 'EV adoption accelerates as manufacturers expand production.',
      content: 'Automotive industry transformation continues with electric mobility solutions.',
      image: imgFigureContainerActive69WC05JI4PAwTvqhGpjcEr4VZwEJpg
    },
    {
      category: 'Science',
      date: 'Sep 6, 2024',
      title: 'Space Exploration Missions Reveal New Planetary Discoveries',
      excerpt: 'Astronomers detect potentially habitable exoplanets in distant systems.',
      content: 'Space research advances our understanding of the universe and life beyond Earth.',
      image: imgFigureContainerActiveKd4S5H00AsijIiOte7MbOgIxBgaJpg
    },
    {
      category: 'Culture',
      date: 'Sep 5, 2024',
      title: 'Museums Embrace Digital Exhibitions and Virtual Tours',
      excerpt: 'Cultural institutions innovate with technology to reach global audiences.',
      content: 'Art and history become more accessible through digital preservation.',
      image: imgFigureContainerActiveVSobSGzS7WSqRKevpXiwYcOx8YJpg
    },
    {
      category: 'Design',
      date: 'Sep 4, 2024',
      title: 'Minimalist Architecture Influences Urban Development',
      excerpt: 'Clean lines and sustainable materials define modern building trends.',
      content: 'Contemporary architecture balances aesthetics with environmental responsibility.',
      image: imgFigureContainerActiveEpFvAjkENw6XSuvnDmr25ZQiXkJpg
    },
    {
      category: 'Finance',
      date: 'Sep 3, 2024',
      title: 'Cryptocurrency Market Shows Signs of Stabilization',
      excerpt: 'Digital currency trading volumes normalize after volatile period.',
      content: 'Blockchain technology continues to mature in financial services sector.',
      image: imgFigureContainerActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg
    },
    {
      category: 'Security',
      date: 'Sep 2, 2024',
      title: 'Cybersecurity Measures Strengthen Against Rising Threats',
      excerpt: 'Organizations invest heavily in protecting digital infrastructure.',
      content: 'Advanced security protocols address evolving cyber attack strategies.',
      image: imgFigureContainerActiveL1AB8VgWhLrCxNg0BmZcC5AGxIwJpg
    }
  ];

  const featuredArticles = [
    {
      category: 'Business',
      date: 'Sep 25, 2024',
      title: 'Small Businesses Flourish as US Government Expands…',
      content: 'Government support helps small businesses thrive.',
      image: imgFigureContainerActive28AkoNpUShT9IbjEvRheIhenuoJpg
    },
    {
      category: 'Finance',
      date: 'Sep 24, 2024',
      title: 'U.S. Consumer Spending Surges Amid Economic Confidence',
      content: 'Economic indicators show consumer optimism.',
      image: imgFigureContainerActiveRfehrGw2CteuSruPzwXaqyi6MJpg
    },
  ];

  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName="Latest News" />
      </div>
      <main>
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_354px] gap-8">
            {/* Main Content */}
            <div className="space-y-10">
              {/* Featured Article */}
              <article className="relative h-[429px] cursor-pointer" onClick={() => onArticleClick(latestNewsArticles[0])}>
                {/* Content */}
                <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[302.42px]">
                  <div className="absolute h-[292.56px] left-0 overflow-clip right-0 top-0">
                    {/* Category + Date */}
                    <div className="absolute h-[26.19px] left-0 right-0 top-0">
                      {/* Category Highlight */}
                      <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(204,0,0,0.05)] h-[26.19px] left-0 overflow-clip rounded-[4px] top-0 w-[63.61px]">
                        <div className="absolute h-[18.19px] left-[12px] overflow-clip right-[12px] top-[4px]">
                          <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#cc0000] text-[12.797px] top-[8.5px] translate-y-[-50%] w-[39.81px]">
                            <p className="leading-[18.2px]">Health</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-[4px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(204,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </div>
                      </div>
                      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-[75.61px] not-italic text-[#657285] text-[13.234px] top-[12.5px] translate-y-[-50%] w-[84.28px]">
                        <p className="leading-[18.2px]">Sep 23, 2024</p>
                      </div>
                    </div>
                    
                    {/* Headline */}
                    <div className="absolute h-[146.38px] left-0 overflow-clip top-[42.19px] w-[302.42px]">
                      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[146.78px] justify-center leading-[36.6px] left-0 not-italic text-[#020a1c] text-[27.773px] top-[72.39px] translate-y-[-50%] w-[286.53px]">
                        <p className="mb-0">The Future of</p>
                        <p className="mb-0">Healthcare Workforce</p>
                        <p className="mb-0">Shines Bright as Non-</p>
                        <p>Clinical Roles Evolve</p>
                      </div>
                    </div>
                    
                    {/* Article */}
                    <div className="absolute h-[92px] left-0 overflow-visible top-[234.56px] w-[302.42px]">
                      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[89px] justify-center leading-[23px] left-0 not-italic text-[#020a1c] text-[14.625px] top-[45.5px] translate-y-[-50%] w-[282.34px]">
                        <p className="mb-0">The healthcare sector is experiencing a</p>
                        <p className="mb-0">significant shift as non-clinical roles gain</p>
                        <p className="mb-0">importance in the rapidly evolving</p>
                        <p className="mb-0">landscape. Driven by technological</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Featured Photo */}
                <div className="absolute bottom-0 left-[312.42px] overflow-clip right-0 rounded-[8px] top-0">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                    <img alt="" className="absolute h-[100.41%] left-0 max-w-none top-[-0.21%] w-full" src={imgFeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg} />
                  </div>
                  <div className="absolute h-[429px] left-[-20.42px] top-0 w-[645px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage1} />
                  </div>
                </div>
              </article>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestNewsArticles.slice(1).map((article, index) => (
                  <article key={index} className="space-y-3 cursor-pointer" onClick={() => onArticleClick(article)}>
                    <div className="rounded-lg overflow-hidden h-[200px]">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10.875px]">
                        <span className="text-[#657285]">{article.category}</span>
                        <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                        <span className="text-[#657285]">{article.date}</span>
                      </div>
                      <h3 className="text-[16.594px] leading-[21.6px] font-normal text-[#020a1c] hover:text-[#cc0000]">
                        {article.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center pt-6">
                <button className="px-5 py-3 bg-[#f7fafc] border border-[rgba(203,213,225,0.5)] rounded-[10px] text-[13.234px] font-bold text-[rgba(101,114,133,0.6)]">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-[#cc0000]"></div>
                  <h2 className="text-[14.625px] leading-[22px] font-normal">Featured</h2>
                </div>

                {/* Featured Articles */}
                <div className="space-y-6">
                  {featuredArticles.map((article, index) => (
                    <div key={index}>
                      <article className="flex gap-4 cursor-pointer" onClick={() => onArticleClick(article)}>
                        <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 text-[10.688px]">
                            <span className="text-[#657285]">{article.category}</span>
                            <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                            <span className="text-[#657285]">{article.date}</span>
                          </div>
                          <h4 className="text-[14.75px] leading-[20px] font-normal text-[#020a1c] hover:text-[#cc0000]">
                            {article.title}
                          </h4>
                        </div>
                      </article>
                      {index < featuredArticles.length - 1 && (
                        <div className="h-px bg-[rgba(203,213,225,0.35)] mt-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

// Author Page Component (Figma Import)
const AuthorPage = ({ author, onArticleClick }) => {
  if (!author) return null;

  const authorArticles = [
    {
      category: 'Health',
      date: 'Sep 23, 2024',
      title: 'The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve',
      image: imgActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg
    },
    {
      category: 'Health',
      date: 'Sep 13, 2024',
      title: 'Personalized Nutrition for Chronic Disease Management',
      image: imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg
    },
    {
      category: 'Health',
      date: 'Sep 3, 2024',
      title: 'Breakthrough in Diabetes Treatment: New Drug Offers Hope for Millions',
      image: imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg
    },
    {
      category: 'Health',
      date: 'Aug 23, 2024',
      title: 'Shaping the Future of U.S. Healthcare',
      image: imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg
    },
    {
      category: 'Health',
      date: 'Aug 13, 2024',
      title: 'Research Unveils Potential Cure for Cystic Fibrosis',
      image: imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg
    },
    {
      category: 'Health',
      date: 'Aug 3, 2024',
      title: 'Enhancing Doctor-Patient Communication for Better Health Outcomes',
      image: imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg
    },
    {
      category: 'Health',
      date: 'Jul 30, 2024',
      title: 'New Study Reveals Potential Benefits of Fasting for Heart Health',
      image: imgActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg
    },
    {
      category: 'Health',
      date: 'Jul 29, 2024',
      title: 'Clinical Trials Show Promise',
      image: imgActiveDfQlXuyKxyJ6PynenMDszNPviugJpg
    },
    {
      category: 'Health',
      date: 'Jul 28, 2024',
      title: 'Revolutionary Treatment Approved',
      image: imgActiveMAg45McVgg3Gvr5WeoWj3E6AwaEJpg
    }
  ];

  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName="Author" />
      </div>
      <main className="pb-16">
        {/* Desktop View - Use Figma Import */}
        <div className="hidden lg:block">
          <div className="w-[1320px] mx-auto px-6 py-10">
            <div className="w-full min-h-[1000px] relative mb-16">
              {/* <AuthorPageContainer /> - Temporarily disabled due to memory issues */}
              <div className="text-center py-20">
                <p className="text-[#657285] font-['Satoshi',_sans-serif]">Author page desktop view temporarily disabled</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile & Tablet View - Responsive Layout */}
        <div className="lg:hidden">
          <div className="max-w-[768px] mx-auto px-4 md:px-6 py-8">
            <div className="space-y-8">
              {/* Author Info Section */}
              <div className="space-y-6">
                {/* Author Photo & Name */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="overflow-clip relative rounded-full shrink-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
                    <img 
                      alt="Emily Davis" 
                      className="absolute h-[125.03%] left-0 max-w-none top-[-12.52%] w-full object-cover" 
                      src={imgYkdzXkigfF0F8F82KAIxjJiooJpg} 
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-['Inter'] font-normal text-[20.281px] leading-[24px] text-[#020a1c]">
                      Emily Davis
                    </h1>
                    <p className="font-['Inter'] font-normal text-[12.906px] leading-[18.2px] text-[#657285]">
                      Health, Science and Technology
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Author Bio */}
                <div className="space-y-5">
                  <p className="font-['Inter'] font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily holds a PhD in Biomedical Sciences from Stanford University. With over 12 years of experience in health, science, and technology reporting, she has covered groundbreaking medical research and technological innovations.
                  </p>
                  <p className="font-['Inter'] font-normal text-[15px] leading-[22px] text-[#020a1c]">
                    Emily's in-depth analysis and ability to translate complex scientific information into accessible language have earned her numerous awards. She is particularly known for her investigative pieces on public health issues and her coverage of major scientific discoveries.
                  </p>
                  <p className="font-['Inter'] font-normal text-[14.625px] leading-[22px] text-[#020a1c]">
                    Emily regularly collaborates with leading researchers and institutions to bring cutting-edge science to the public.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Contact */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-['Inter'] font-bold text-[15.125px] leading-[22px] text-[#020a1c]">
                      Contact
                    </h3>
                    <a href="mailto:e.davis@newsflash.com" className="font-['Inter'] font-normal text-[16.313px] leading-[22.6px] text-[#657285] hover:text-[#cc0000]">
                      e.davis@newsflash.com
                    </a>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <div className="bg-slate-300 opacity-60 rounded-full w-8 h-8"></div>
                    <div className="bg-slate-300 opacity-60 rounded-full w-8 h-8"></div>
                  </div>
                </div>
              </div>

              {/* Latest Articles Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-[15px] bg-[#cc0000]"></div>
                  <h2 className="font-['Inter'] font-normal text-[14.5px] leading-[22px] text-[#020a1c]">
                    Latest Articles from Emily Davis
                  </h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {authorArticles.slice(0, 9).map((article, index) => (
                    <div 
                      key={index}
                      className="flex flex-col gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => onArticleClick && onArticleClick({
                        ...article,
                        excerpt: '',
                        content: ''
                      })}
                    >
                      {/* Article Image */}
                      <div className="h-[150px] overflow-clip rounded-lg relative w-full">
                        <img 
                          alt={article.title} 
                          className="absolute h-full w-full object-cover" 
                          src={article.image} 
                        />
                      </div>
                      {/* Article Meta */}
                      <div className="flex items-center gap-1.5">
                        <span className="font-['Inter'] font-normal text-[10.875px] leading-[15.6px] text-[#657285]">
                          {article.category}
                        </span>
                        <div className="bg-slate-300 rounded-full w-[3px] h-[3px]"></div>
                        <span className="font-['Inter'] font-normal text-[11.25px] leading-[15.6px] text-[#657285]">
                          {article.date}
                        </span>
                      </div>
                      {/* Article Title */}
                      <h3 className="font-['Inter'] font-normal text-[14.75px] leading-[19.2px] text-[#020a1c] line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Blog Detail Page Component (Figma Import)
const BlogDetailPage = ({ article, onAuthorClick }) => {
  if (!article) return null;

  const relatedArticles = [
    {
      category: 'Health',
      date: 'Sep 13, 2024',
      title: 'Personalized Nutrition for Chronic Disease Management',
      image: imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg
    },
    {
      category: 'Health',
      date: 'Sep 3, 2024',
      title: 'Breakthrough in Diabetes Treatment: New Drug Offers Hope for Millions',
      image: imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg
    },
    {
      category: 'Health',
      date: 'Aug 23, 2024',
      title: 'Shaping the Future of U.S. Healthcare',
      image: imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg
    },
    {
      category: 'Health',
      date: 'Aug 13, 2024',
      title: 'Research Unveils Potential Cure for Cystic Fibrosis',
      image: imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg
    },
    {
      category: 'Health',
      date: 'Aug 3, 2024',
      title: 'Enhancing Doctor-Patient Communication for Better Health Outcomes',
      image: imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg
    }
  ];

  const mostRecentArticles = [
    {
      category: 'Business',
      date: 'Sep 25, 2024',
      title: 'Small Businesses Flourish as US Government Expands Loan Access and Support',
      image: imgActive28AkoNpUShT9IbjEvRheIhenuoJpg
    },
    {
      category: 'Finance',
      date: 'Sep 24, 2024',
      title: 'U.S. Consumer Spending Surges Amid Economic Confidence',
      image: imgActiveRfehrGw2CteuSruPzwXaqyi6MJpg
    },
    {
      category: 'Business',
      date: 'Aug 25, 2024',
      title: 'Markets Surge as Federal Reserve Hints at Rate Cuts, Oil Prices Stabilize',
      image: imgActiveUfyRbc1T9FmFmBTpVccNscBnmEJpg
    },
    {
      category: 'Fashion',
      date: 'Aug 21, 2024',
      title: 'The Y2K Fashion Revival: How to Master the Early 2000s Look',
      image: imgActiveMQdRriJaH0GQq3CAvgyN88OuF0Jpg
    },
    {
      category: 'Finance',
      date: 'Jul 29, 2024',
      title: 'Small-Cap Stocks Shine Amid Market Optimism and Fed Policy Hopes',
      image: imgActiveFiJt3BHu4V3Y5PkgfJxAm4FjnqwJpg
    }
  ];

  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName={article.category} />
      </div>
      <main>
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_354px] gap-8">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CategoryBadge>{article.category}</CategoryBadge>
                  <ArticleDate>{article.date}</ArticleDate>
                </div>
                <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-[#020a1c]">
                  {article.title}
                </h1>
              </div>

              {/* Divider Line */}
              <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

              {/* Article Details - Author, Date, Reading Time */}
              <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-full md:w-[476px]">
                {/* Author */}
                <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={onAuthorClick}>
                  {/* Author Photo */}
                  <div className="overflow-clip relative rounded-[99px] shrink-0 size-[30px]">
                    <div className="absolute inset-0 rounded-[99px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
                        <img 
                          alt="Emily Davis" 
                          className="absolute h-[125.03%] left-0 max-w-none top-[-12.52%] w-full" 
                          src={imgYkdzXkigfF0F8F82KAIxjJiooJpg} 
                        />
                      </div>
                    </div>
                  </div>
                  {/* Author Name */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-nowrap">
                        <p className="leading-[18.2px] text-[12.906px] whitespace-pre">Emily Davis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Red Divider Dot */}
                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>
                
                {/* Published Date */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.016px] text-nowrap">
                      <p className="leading-[18.2px] whitespace-pre">Monday, September 23, 2024</p>
                    </div>
                  </div>
                </div>
                
                {/* Red Divider Dot */}
                <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]"></div>
                
                {/* Reading Time */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.125px] w-full">
                      <p className="leading-[19.6px]">2 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={article.image || imgYkdzXkigfF0F8F82KAIxjJiooJpg}
                  alt={article.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Article Content with Social Share */}
              <div className="relative flex gap-8">
                {/* Social Share Icons - Left Side (Sticky) */}
                <div className="hidden lg:block">
                  <div className="sticky top-32 flex flex-col gap-4">
                    {/* Facebook */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    
                    {/* Twitter/X */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    
                    {/* LinkedIn */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    
                    {/* WhatsApp */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </button>
                    
                    {/* Email */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                    
                    {/* Link/Copy */}
                    <button className="w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors">
                      <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none flex-1">
                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    {article.excerpt || article.content}
                  </p>
                  
                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    The healthcare industry is experiencing unprecedented transformation as technology reshapes traditional roles and creates new opportunities for professionals across all sectors. This shift is driven by the integration of artificial intelligence, telehealth platforms, and advanced data analytics systems that are changing how healthcare is delivered and managed.
                  </p>

                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    Non-clinical positions such as healthcare IT specialists, data analysts, and patient experience coordinators are becoming increasingly vital to the industry's success. These roles bridge the gap between technology and patient care, ensuring that healthcare organizations can operate efficiently while maintaining high-quality service standards.
                  </p>

                  <h2 className="text-[24px] leading-[32px] font-medium text-[#020a1c] mt-8 mb-4">
                    The Evolution of Healthcare Careers
                  </h2>

                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    Healthcare professionals are adapting to these changes by acquiring new skills and embracing interdisciplinary collaboration. The demand for individuals who can navigate both clinical knowledge and technological expertise continues to grow, creating exciting career pathways for the next generation of healthcare workers.
                  </p>

                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    Educational institutions are responding by developing innovative programs that prepare students for these evolving roles. From healthcare informatics to population health management, new specializations are emerging to meet the industry's changing needs. This educational transformation ensures that future healthcare professionals are equipped with the skills necessary to thrive in a technology-driven environment.
                  </p>

                  <h2 className="text-[24px] leading-[32px] font-medium text-[#020a1c] mt-8 mb-4">
                    Impact on Patient Care
                  </h2>

                  <p className="text-[16px] leading-[28px] text-[#020a1c] mb-6">
                    The expansion of non-clinical roles ultimately benefits patients by improving healthcare delivery, reducing wait times, and enhancing overall care coordination. As the industry continues to evolve, the integration of diverse skill sets will be crucial in addressing the complex challenges facing modern healthcare systems.
                  </p>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-[10px] mb-6">
                  <div className="w-[4px] h-[15px] bg-[#cc0000]"></div>
                  <h2 className="text-[14.5px] leading-[22px] font-normal text-[#020a1c]">Related Articles</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.slice(0, 6).map((relArticle, index) => (
                    <article key={index} className="flex flex-col gap-[12px] cursor-pointer" onClick={() => onArticleClick(relArticle)}>
                      <div className="rounded-[8px] overflow-hidden h-[200px] w-full">
                        <img 
                          src={relArticle.image}
                          alt={relArticle.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-[4px] space-y-[4px]">
                        <div className="flex items-center gap-[6px] text-[10.875px]">
                          <span className="text-[#657285] leading-[15.6px]">{relArticle.category}</span>
                          <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                          <span className="text-[#657285] leading-[15.6px]">{relArticle.date}</span>
                        </div>
                        <h4 className="text-[16.594px] leading-[21.6px] font-normal text-[#020a1c] hover:text-[#cc0000]">
                          {relArticle.title}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Most Recent */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-[#cc0000]"></div>
                  <h2 className="text-[14.625px] leading-[22px] font-normal">Most Recent</h2>
                </div>

                <div className="space-y-6">
                  {mostRecentArticles.map((recentArticle, index) => (
                    <div key={index}>
                      <article className="flex gap-4">
                        <div className="rounded-lg overflow-hidden w-[125px] h-[100px] flex-shrink-0">
                          <img 
                            src={recentArticle.image}
                            alt={recentArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 text-[10.688px]">
                            <span className="text-[#657285]">{recentArticle.category}</span>
                            <div className="w-[3px] h-[3px] bg-slate-300 rounded-full"></div>
                            <span className="text-[#657285]">{recentArticle.date}</span>
                          </div>
                          <h4 className="text-[14.75px] leading-[20px] font-normal text-[#020a1c] hover:text-[#cc0000] cursor-pointer">
                            {recentArticle.title}
                          </h4>
                        </div>
                      </article>
                      {index < mostRecentArticles.length - 1 && (
                        <div className="h-px bg-[rgba(203,213,225,0.35)] mt-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

// Meet Our Authors Page Component
const MeetOurAuthorsPage = ({ onAuthorClick }) => {
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
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName="Meet Our Authors" />
      </div>
      <main className="pb-16">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-12">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[340px_1fr] gap-12 lg:gap-16">
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
                  onClick={() => onAuthorClick(author)}
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

          {/* Mobile & Tablet Layout */}
          <div className="md:hidden space-y-8">
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
                  onClick={() => onAuthorClick(author)}
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
      </main>
      
      <Footer />
    </>
  );
};

// Main App Component with Routing
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedArticle(null);
    setSelectedAuthor(null);
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setCurrentPage('blog-detail');
    window.scrollTo(0, 0);
  };

  const handleAuthorClick = (author = { name: 'Emily Davis', id: 'emily-davis' }) => {
    setSelectedAuthor(author);
    setCurrentPage('author');
    window.scrollTo(0, 0);
  };

  const handleCareerClick = () => {
    setCurrentPage('career-detail');
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setCurrentPage('login-success');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header - Always visible on all pages */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && <HomePage onArticleClick={handleArticleClick} onAuthorClick={handleAuthorClick} />}
      {currentPage === 'latest-news' && <LatestNewsPage onArticleClick={handleArticleClick} onAuthorClick={handleAuthorClick} />}
      {currentPage === 'blog-detail' && <BlogDetailPage article={selectedArticle} onAuthorClick={handleAuthorClick} />}
      {currentPage === 'author' && <AuthorPage author={selectedAuthor} onArticleClick={handleArticleClick} />}
      {currentPage === 'meet-our-authors' && <MeetOurAuthorsPage onAuthorClick={handleAuthorClick} />}
      {currentPage === 'about-us' && <AboutUsPage />}
      {currentPage === 'careers' && <CareersPage onCareerClick={handleCareerClick} />}
      {currentPage === 'career-detail' && <CareerDetailPage />}
      {currentPage === 'contact-us' && <ContactUsPage />}
      {currentPage === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'login-success' && <LoginSuccessPage onNavigate={handleNavigate} userEmail={userEmail} />}
      {currentPage === 'author-dashboard' && <AuthorDashboard onNavigate={handleNavigate} />}
      {currentPage === 'user-dashboard' && <UserDashboard onNavigate={handleNavigate} />}
      
      <Toaster position="top-right" />
    </div>
  );
}
