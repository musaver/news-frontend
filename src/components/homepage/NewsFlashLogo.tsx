import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo-tam.jpg';

const NewsFlashLogo = () => (
  <div className="h-[30px] w-[175px] relative">
    <Image 
      src={logo} 
      alt="NewsFlash Logo" 
      fill
      className="object-contain"
      priority
    />
  </div>
);

export default NewsFlashLogo;