'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

function NavigationLoadingContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Skip loading on initial page load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    // Show loading immediately when route changes
    setIsLoading(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Hide loading after a brief delay to ensure smooth transition
    // Using requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 50);
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, searchParams, isInitialLoad]);

  // Listen for link clicks to show loading instantly
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);

        // Only show loading for internal navigation
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-32 left-0 right-0 bottom-32 bg-white z-40 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      {children}
    </>
  );
}

export default function NavigationLoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NavigationLoadingContent>{children}</NavigationLoadingContent>
    </Suspense>
  );
}
