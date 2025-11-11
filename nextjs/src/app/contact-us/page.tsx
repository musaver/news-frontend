import React from 'react';
import { ContactUsPage } from '@/components/ContactUsPage';
import { Header } from '@/components/homepage';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactUsPage />
    </div>
  );
}
