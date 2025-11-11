'use client'

import React from 'react';
import { Header } from '@/components/homepage';
import { ContactUsPage } from '@/components/ContactUsPage';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactUsPage />
    </div>
  );
}
