import React, { useState } from 'react';
import { PageHeader } from './PageHeader';
import { Footer } from './Footer';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { Lock, Mail, Shield } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess?: (email: string) => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
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
        if (onLoginSuccess) {
          onLoginSuccess(email);
        }
      }, 800);
    }, 1500);
  };

  const handleResendOTP = () => {
    setError('');
    setSuccess('OTP resent successfully!');
    setOtp('');
  };

  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName="Secure Login" />
      </div>

      {/* Mobile & Desktop Layout */}
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-[480px]">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#cc0000] rounded-full p-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[12px] shadow-lg border border-[rgba(203,213,225,0.35)] p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-[#020a1c] text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] font-['Satoshi:Medium',_sans-serif] mb-2">
                Welcome Back
              </h1>
              <p className="text-[#657285] text-[15px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
                {otpSent ? 'Enter the code sent to your email' : 'Enter your email to receive a secure login code'}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[10px] animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-red-600 text-[14px] leading-[20px] font-['Satoshi:Regular',_sans-serif]">
                  {error}
                </p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-[10px] animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-green-600 text-[14px] leading-[20px] font-['Satoshi:Regular',_sans-serif]">
                  {success}
                </p>
              </div>
            )}

            {/* Email Input Form */}
            {!otpSent ? (
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[#657285] text-[13.6px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Mail className="w-5 h-5 text-[#657285]" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full h-[50px] pl-11 pr-3 bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)] text-[#020a1c] text-[14px] font-['Satoshi:Regular',_sans-serif] outline-none placeholder-[#657285] focus:border-[#cc0000] focus:bg-white transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[50px] bg-[#cc0000] rounded-[10px] text-white text-[14px] leading-[16.8px] font-['Satoshi:Semi_Bold',_sans-serif] font-semibold hover:bg-[#b30000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Send OTP
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-[#657285] text-[13px] leading-[20px] font-['Satoshi:Regular',_sans-serif]">
                    We'll never share your email with anyone.
                  </p>
                </div>
              </form>
            ) : (
              /* OTP Verification Form */
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-[#657285] text-[13.6px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold text-center">
                    Enter 6-Digit Code
                  </label>
                  
                  <div className="flex justify-center">
                    <InputOTP 
                      maxLength={6} 
                      value={otp} 
                      onChange={(value) => setOtp(value)}
                      className="gap-2"
                    >
                      <InputOTPGroup className="gap-2">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className="w-12 h-12 md:w-14 md:h-14 bg-[#f7fafc] border border-[rgba(203,213,225,0.3)] rounded-[10px] text-[#020a1c] text-[20px] font-['Satoshi:Medium',_sans-serif] focus:border-[#cc0000] focus:bg-white transition-all duration-200"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div className="text-center">
                    <p className="text-[#657285] text-[13px] leading-[20px] font-['Satoshi:Regular',_sans-serif] mb-2">
                      Sent to: <span className="text-[#020a1c] font-['Satoshi:Medium',_sans-serif]">{email}</span>
                    </p>
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-[#cc0000] text-[13px] leading-[20px] font-['Satoshi:Medium',_sans-serif] hover:underline"
                    >
                      Resend Code
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isLoading || otp.length !== 6}
                    className="w-full h-[50px] bg-[#cc0000] rounded-[10px] text-white text-[14px] leading-[16.8px] font-['Satoshi:Semi_Bold',_sans-serif] font-semibold hover:bg-[#b30000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
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
                    className="w-full h-[50px] bg-white border border-[rgba(203,213,225,0.3)] rounded-[10px] text-[#020a1c] text-[14px] leading-[16.8px] font-['Satoshi:Medium',_sans-serif] hover:bg-[#f7fafc] transition-all duration-200"
                  >
                    Change Email
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[#657285] text-[13px] leading-[20px] font-['Satoshi:Regular',_sans-serif]">
                    We'll never share your email with anyone.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-[#657285] text-[13px] leading-[20px] font-['Satoshi:Regular',_sans-serif]">
              Having trouble? Contact us at{' '}
              <a href="mailto:support@newsflash.com" className="text-[#cc0000] hover:underline">
                support@newsflash.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
