'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Skeleton } from './ui/skeleton'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  alt: string
  lazy?: boolean
  showPlaceholder?: boolean
  skeletonClassName?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  style,
  lazy = true,
  showPlaceholder = true,
  skeletonClassName,
  ...rest
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    )

    const currentRef = imgRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [lazy, isInView])

  const handleLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  // Reset states when src changes
  useEffect(() => {
    if (src) {
      setLoading(true)
      setError(false)
    }
  }, [src])

  if (error) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            className="opacity-30"
            data-original-url={src}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative inline-block w-full h-full" style={style}>
      {/* Loading Skeleton/Placeholder */}
      {loading && showPlaceholder && (
        <Skeleton
          className={`absolute inset-0 w-full h-full ${skeletonClassName ?? ''}`}
        />
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={isInView && src ? src : undefined}
        alt={alt}
        className={`${className ?? ''} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={loading ? { ...style } : style}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? 'lazy' : 'eager'}
        {...rest}
      />
    </div>
  )
}
