'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Header, Footer } from '@/components/homepage';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP

  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const register = async () => {
    setError('');
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Register</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="space-y-4 mb-6">
            {/* Step 1: Email field */}
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={step === 2}
            />

            {/* Step 2: OTP field */}
            {step === 2 && (
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="OTP"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </div>

          {/* Step 1: Send Email button */}
          {step === 1 && (
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={sendEmail}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Email'}
            </button>
          )}

          {/* Step 2: Register button */}
          {step === 2 && (
            <>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                onClick={register}
              >
                Register
              </button>
              <button
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => {
                  setStep(1);
                  setPassword('');
                  setError('');
                }}
              >
                Change Email
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
