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
        // Check if the link will open in a new tab
        const isNewTab =
          e.ctrlKey || // Ctrl+click (Windows/Linux)
          e.metaKey || // Cmd+click (Mac)
          e.shiftKey || // Shift+click (new window)
          e.button === 1 || // Middle click
          anchor.target === '_blank'; // Target blank attribute

        // Don't show loading if opening in new tab
        if (isNewTab) {
          return;
        }

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
        <>
          {/* Loading bar at top */}
          <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
            <div className="h-full bg-[#cc0000] animate-pulse w-full"></div>
          </div>
          {/* Small loading icon on top left */}
          <div className="fixed top-4 left-4 z-[9999] bg-white rounded-full p-1 shadow-lg">
            <div className="w-6 h-6 border-4 border-gray-200 border-t-[#cc0000] rounded-full animate-spin"></div>
          </div>
        </>
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
