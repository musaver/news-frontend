'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Header, Footer } from '@/components/homepage';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn('credentials', { email, password, callbackUrl: '/dashboard' });
  };

  

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Login</h1>
          
          <div className="space-y-4 mb-6">
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <button 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
