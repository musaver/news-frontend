'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Header, Footer } from '@/components/homepage';
import { useCategories } from '@/hooks/useCategories';

export default function RegisterPage() {
  const { categories } = useCategories();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const register = async () => {
    setError('');
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
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
    setSending(true);
    setSuccess('');
    setError('');

    const res = await fetch('/api/email/send', {
      method: 'POST',
      body: JSON.stringify({
        to: email,
        subject: 'Hello from Dashboard',
        //message: 'This is a test email from your app.',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setSending(false);

    if (res.ok) {
      setSuccess('Email sent successfully!');
    } else {
      setError(data.error || 'Failed to send email.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header categories={categories} />
      <main>
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Register</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          
          <div className="space-y-4 mb-6">
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <button 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            onClick={register}
          >
            Register
          </button>

          <div className="space-y-2 mb-6">
            <button 
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            >
              Sign in with Google
            </button>
            <button 
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
            >
              Sign in with Facebook
            </button>
          </div>

          <hr className="my-6" />

          <div>
            <h2 className="text-xl font-semibold mb-4">Send Email</h2>
            <button 
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              onClick={sendEmail} 
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Email'}
            </button>
            {success && <p className="text-green-600">{success}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
