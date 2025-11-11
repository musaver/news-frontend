import React from 'react';
import { PageHeader } from './PageHeader';
import { Footer } from './Footer';
import { CheckCircle, Home, Settings, LogOut, ArrowRight } from 'lucide-react';

interface LoginSuccessPageProps {
  onNavigate: (page: string) => void;
  userEmail?: string;
}

export function LoginSuccessPage({ onNavigate, userEmail }: LoginSuccessPageProps) {
  const userName = userEmail ? userEmail.split('@')[0] : 'User';
  
  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        <PageHeader pageName="Login Success" />
      </div>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-[580px]">
          {/* Success Icon with Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#cc0000]/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#cc0000] to-[#990000] rounded-full p-5 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white animate-in zoom-in duration-500" />
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[12px] shadow-lg border border-[rgba(203,213,225,0.35)] p-6 md:p-10 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6">
              {/* Success Heading */}
              <div className="space-y-3">
                <h1 className="text-[#020a1c] text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold">
                  ✅ Login Successful!
                </h1>
                <p className="text-[#020a1c] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-['Satoshi:Medium',_sans-serif] font-medium">
                  Welcome back, {userName}!
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-[#657285] text-[15px] leading-[24px] font-['Satoshi:Regular',_sans-serif]">
                  You have successfully logged in using OTP authentication.
                </p>
                <p className="text-[#657285] text-[14px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
                  Your session is now active and secure.
                </p>
              </div>

              {/* User Info Badge */}
              {userEmail && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)]">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#020a1c] text-[13px] leading-[18px] font-['Satoshi:Medium',_sans-serif]">
                    {userEmail}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => onNavigate('user-dashboard')}
                  className="w-full h-[52px] bg-[#cc0000] rounded-[10px] text-white text-[15px] leading-[18px] font-['Satoshi:Semi_Bold',_sans-serif] font-semibold hover:bg-[#b30000] transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Home className="w-5 h-5" />
                  Go to My Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('home')}
                  className="w-full h-[48px] bg-white border border-[rgba(203,213,225,0.3)] rounded-[10px] text-[#020a1c] text-[14px] leading-[16.8px] font-['Satoshi:Medium',_sans-serif] hover:bg-[#f7fafc] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                // Add settings navigation logic
                console.log('Navigate to settings');
              }}
              className="group bg-white rounded-[10px] border border-[rgba(203,213,225,0.3)] p-4 hover:border-[#cc0000] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f7fafc] rounded-full flex items-center justify-center group-hover:bg-[#cc0000]/10 transition-colors">
                  <Settings className="w-5 h-5 text-[#657285] group-hover:text-[#cc0000] transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-[#020a1c] text-[13px] leading-[18px] font-['Satoshi:Medium',_sans-serif]">
                    Settings
                  </p>
                  <p className="text-[#657285] text-[11px] leading-[16px] font-['Satoshi:Regular',_sans-serif]">
                    Manage account
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                // Add logout logic
                onNavigate('login');
              }}
              className="group bg-white rounded-[10px] border border-[rgba(203,213,225,0.3)] p-4 hover:border-red-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f7fafc] rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5 text-[#657285] group-hover:text-red-500 transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-[#020a1c] text-[13px] leading-[18px] font-['Satoshi:Medium',_sans-serif]">
                    Logout
                  </p>
                  <p className="text-[#657285] text-[11px] leading-[16px] font-['Satoshi:Regular',_sans-serif]">
                    End session
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <p className="text-[#657285] text-[12px] leading-[18px] font-['Satoshi:Regular',_sans-serif]">
              🔒 Your connection is secure and encrypted
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
