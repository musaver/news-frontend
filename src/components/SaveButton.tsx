'use client'

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SaveButtonProps {
  articleId: string;
  className?: string;
}

export default function SaveButton({ articleId, className = '' }: SaveButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSaved, setIsCheckingSaved] = useState(true);

  // Check if article is already saved
  useEffect(() => {
    const checkIfSaved = async () => {
      if (status === 'authenticated' && session?.user) {
        try {
          const response = await fetch('/api/saved-articles');
          if (response.ok) {
            const data = await response.json();
            const saved = data.savedArticles.some(
              (item: any) => item.articleId === articleId
            );
            setIsSaved(saved);
          }
        } catch (error) {
          console.error('Error checking saved status:', error);
        } finally {
          setIsCheckingSaved(false);
        }
      } else {
        setIsCheckingSaved(false);
      }
    };

    checkIfSaved();
  }, [articleId, session, status]);

  const handleSaveToggle = async () => {
    // Check if user is logged in
    if (status !== 'authenticated' || !session?.user) {
      // Redirect to login
      router.push('/login');
      return;
    }

    setIsLoading(true);

    try {
      if (isSaved) {
        // Unsave the article
        const response = await fetch(`/api/saved-articles?articleId=${articleId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setIsSaved(false);
        } else {
          const data = await response.json();
          console.error('Error unsaving article:', data.error);
        }
      } else {
        // Save the article
        const response = await fetch('/api/saved-articles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ articleId }),
        });

        if (response.ok) {
          setIsSaved(true);
        } else {
          const data = await response.json();
          console.error('Error saving article:', data.error);
        }
      }
    } catch (error) {
      console.error('Error toggling save:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isCheckingSaved) {
    return (
      <button
        disabled
        className={`w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center bg-gray-100 ${className}`}
      >
        <svg className="w-5 h-5 text-[#657285] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleSaveToggle}
      disabled={isLoading}
      className={`w-10 h-10 rounded-full border border-[rgba(203,213,225,0.35)] flex items-center justify-center hover:bg-[#f7fafc] transition-colors ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      title={isSaved ? 'Unsave article' : 'Save article'}
    >
      {isSaved ? (
        <svg className="w-5 h-5 text-[#cc0000]" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      ) : (
        <svg className="w-5 h-5 text-[#657285]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      )}
    </button>
  );
}
