'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OTPInput from '@/components/OTPInput';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP

  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [registering, setRegistering] = useState(false);
  const router = useRouter();

  const register = async () => {
    if (!password || password.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }

    setError('');
    setRegistering(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setRegistering(false);

    if (!res.ok) {
      setError(data.error || 'Something went wrong');
    } else {
      // Auto-login after register
      const login = await signIn('credentials', {
        email,
        redirect: false,
      });

      if (login?.ok) {
        router.push('/dashboard');
      } else {
        setError('Registered but login failed.');
      }
    }
  };

  const sendEmail = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setSending(true);
    setError('');

    const res = await fetch('/api/email/send', {
      method: 'POST',
      body: JSON.stringify({
        to: email,
        subject: 'Your OTP Code',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setSending(false);

    if (res.ok) {
      setStep(2); // Move to step 2
    } else {
      setError(data.error || 'Failed to send email.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (step === 1) {
        sendEmail();
      } else {
        register();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#020a1c] mb-2">
                Create Account
              </h1>
              <p className="text-[#657285] text-sm">
                {step === 1
                  ? 'Enter your email to get started'
                  : 'Enter the verification code sent to your email'}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {step === 2 && !error && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700 text-sm font-medium">
                  Email sent successfully! Check your inbox for the OTP code.
                </p>
              </div>
            )}

            {/* Form */}
            <div className="space-y-6">
              {/* Step 1: Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#020a1c]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={step === 2}
                  className={step === 2 ? 'bg-gray-100' : ''}
                />
                {step === 2 && (
                  <button
                    onClick={() => {
                      setStep(1);
                      setPassword('');
                      setError('');
                    }}
                    className="text-sm text-[#cc0000] hover:underline font-medium"
                  >
                    Change email address
                  </button>
                )}
              </div>

              {/* Step 2: OTP field */}
              {step === 2 && (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-[#020a1c]">
                    Verification Code
                  </Label>
                  <div className="flex justify-center pt-2">
                    <OTPInput
                      length={6}
                      value={password}
                      onChange={setPassword}
                      disabled={registering}
                    />
                  </div>
                  <p className="text-xs text-[#657285] text-center mt-3">
                    Enter the 6-digit code sent to your email
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                {step === 1 ? (
                  <Button
                    onClick={sendEmail}
                    disabled={sending}
                    className="w-full bg-[#cc0000] hover:bg-[#b30000] text-white h-11 text-base font-semibold"
                  >
                    {sending ? 'Sending...' : 'Send Verification Code'}
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={register}
                      disabled={registering || password.length !== 6}
                      className="w-full bg-[#cc0000] hover:bg-[#b30000] text-white h-11 text-base font-semibold"
                    >
                      {registering ? 'Verifying...' : 'Verify & Register'}
                    </Button>
                    <Button
                      onClick={sendEmail}
                      disabled={sending}
                      variant="outline"
                      className="w-full h-11 text-base font-medium border-2"
                    >
                      {sending ? 'Resending...' : 'Resend Code'}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
