'use client';

import { useEffect } from 'react';

interface VisitTrackerProps {
  articleId: string;
}

export default function VisitTracker({ articleId }: VisitTrackerProps) {
  useEffect(() => {
    // Track visit when component mounts
    const trackVisit = async () => {
      try {
        await fetch('/api/article-visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ articleId }),
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    trackVisit();
  }, [articleId]);

  // This component doesn't render anything
  return null;
}
