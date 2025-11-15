'use client';

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/homepage';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await signOut({ redirect: false });
      router.push('/register');
    };

    logout();
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 md:pt-[104px]">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Logging out...</h1>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Please wait while we sign you out.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
