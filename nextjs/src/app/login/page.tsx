'use client'

import React, { useState } from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';

// Inline SVG Icons
const LockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true);
      setSuccess('OTP sent to your email!');
      setIsLoading(false);
    }, 1500);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (otp.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSuccess('Login successful!');
      setIsLoading(false);
      
      // Navigate to success page after a brief delay
      setTimeout(() => {
        // You can add navigation logic here
        console.log('Login successful for:', email);
      }, 800);
    }, 1500);
  };

  const handleResendOTP = () => {
    setError('');
    setSuccess('OTP resent successfully!');
    setOtp('');
  };

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
                <p className="leading-[22px]">Secure Login</p>
              </div>
            </div>
            
            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[359.39px]" data-name="Mask Group">
              <div 
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 not-italic text-[65.4px] top-[42px] translate-y-[-50%] w-full"
              >
                <p className="leading-[84px]" style={{ color: 'rgba(0, 0, 0, 0.05)' }}>NewsFlash</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Login Content */}
        <div className="min-h-[calc(100vh-400px)] flex items-center justify-center px-4 py-12 md:py-16">
          <div className="w-full max-w-[480px]">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#cc0000] rounded-full p-4">
                <LockIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-[12px] shadow-lg border border-[rgba(203,213,225,0.35)] p-6 md:p-8">
              <div className="text-center mb-8">
                <h1 className="text-[#020a1c] text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] font-medium mb-2">
                  Welcome Back
                </h1>
                <p className="text-[#657285] text-[15px] leading-[22px]">
                  {otpSent ? 'Enter the code sent to your email' : 'Enter your email to receive a secure login code'}
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[10px] animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-red-600 text-[14px] leading-[20px]">
                    {error}
                  </p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-[10px] animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-green-600 text-[14px] leading-[20px]">
                    {success}
                  </p>
                </div>
              )}

              {/* Email Input Form */}
              {!otpSent ? (
                <form onSubmit={handleSendOTP} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[#657285] text-[13.6px] leading-[18.2px] font-bold">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <MailIcon className="w-5 h-5 text-[#657285]" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full h-[50px] pl-11 pr-3 bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)] text-[#020a1c] text-[14px] outline-none placeholder-[#657285] focus:border-[#cc0000] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-[50px] bg-[#cc0000] rounded-[10px] text-white text-[14px] leading-[16.8px] font-semibold hover:bg-[#b30000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <LockIcon className="w-4 h-4" />
                        Send OTP
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-[#657285] text-[13px] leading-[20px]">
                      We&apos;ll never share your email with anyone.
                    </p>
                  </div>
                </form>
              ) : (
                /* OTP Verification Form */
                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-[#657285] text-[13.6px] leading-[18.2px] font-bold text-center">
                      Enter 6-Digit Code
                    </label>
                    
                    <div className="flex justify-center gap-2">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={otp[index] || ''}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= 1 && /^\d*$/.test(value)) {
                              const newOtp = otp.split('');
                              newOtp[index] = value;
                              setOtp(newOtp.join(''));
                              
                              // Auto-focus next input
                              if (value && index < 5) {
                                const nextInput = e.target.nextElementSibling as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }
                          }}
                          onKeyDown={(e) => {
                            // Handle backspace
                            if (e.key === 'Backspace' && !otp[index] && index > 0) {
                              const prevInput = e.currentTarget.previousElementSibling as HTMLInputElement;
                              if (prevInput) prevInput.focus();
                            }
                          }}
                          className="w-12 h-12 md:w-14 md:h-14 bg-[#f7fafc] border border-[rgba(203,213,225,0.3)] rounded-[10px] text-[#020a1c] text-[20px] font-medium text-center focus:border-[#cc0000] focus:bg-white focus:outline-none transition-all duration-200"
                        />
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-[#657285] text-[13px] leading-[20px] mb-2">
                        Sent to: <span className="text-[#020a1c] font-medium">{email}</span>
                      </p>
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="text-[#cc0000] text-[13px] leading-[20px] font-medium hover:underline"
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={isLoading || otp.length !== 6}
                      className="w-full h-[50px] bg-[#cc0000] rounded-[10px] text-white text-[14px] leading-[16.8px] font-semibold hover:bg-[#b30000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <LockIcon className="w-4 h-4" />
                          Verify OTP
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setOtp('');
                        setError('');
                        setSuccess('');
                      }}
                      className="w-full h-[50px] bg-white border border-[rgba(203,213,225,0.3)] rounded-[10px] text-[#020a1c] text-[14px] leading-[16.8px] font-medium hover:bg-[#f7fafc] transition-all duration-200"
                    >
                      Change Email
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-[#657285] text-[13px] leading-[20px]">
                      We&apos;ll never share your email with anyone.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-[#657285] text-[13px] leading-[20px]">
                Having trouble? Contact us at{' '}
                <a href="mailto:support@newsflash.com" className="text-[#cc0000] hover:underline">
                  support@newsflash.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

