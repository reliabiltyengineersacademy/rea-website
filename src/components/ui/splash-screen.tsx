'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 12 + 8; // Random increment between 8-20
      });
    }, 120);

    // Complete loading after minimum time
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Wait for fade out animation
    }, 2500); // Minimum 2.5 seconds display time

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 transition-all duration-600 ease-in-out',
        !isVisible && 'opacity-0 scale-95'
      )}
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '2s' }} />
      </div>

      {/* Logo Container */}
      <div className={cn(
        'relative mb-8 transition-all duration-1000 ease-out',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48'>
          <Image
            src='/logo-transparent.png'
            alt='Reliability Engineers Academy'
            fill
            className='object-contain brightness-0 invert'
            priority
          />
        </div>
        
        {/* Glow effect */}
        <div className='absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/20 rounded-full blur-xl animate-pulse' />
      </div>

      {/* Company Name */}
      <div className={cn(
        'text-center mb-12 transition-all duration-1000 ease-out delay-300',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide'>
          Reliability Engineers Academy
        </h1>
        <p className='text-white/80 text-sm sm:text-base md:text-lg font-light'>
          Your Pathway To Asset Reliability Mastery
        </p>
      </div>

      {/* Loading Progress */}
      <div className={cn(
        'w-64 sm:w-80 max-w-md transition-all duration-1000 ease-out delay-500',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <div className='flex justify-end text-white/70 text-xs mb-3 font-medium'>
          <span>{Math.round(progress)}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className='w-full bg-white/20 rounded-full h-2 overflow-hidden shadow-inner'>
          <div
            className='h-full bg-gradient-to-r from-white/60 via-white/80 to-white/90 rounded-full transition-all duration-500 ease-out shadow-lg'
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Loading Dots Animation */}
      <div className={cn(
        'flex space-x-2 mt-8 transition-all duration-1000 ease-out delay-700',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <div className='w-2 h-2 bg-white/60 rounded-full animate-bounce' style={{ animationDelay: '0ms', animationDuration: '1.5s' }} />
        <div className='w-2 h-2 bg-white/60 rounded-full animate-bounce' style={{ animationDelay: '200ms', animationDuration: '1.5s' }} />
        <div className='w-2 h-2 bg-white/60 rounded-full animate-bounce' style={{ animationDelay: '400ms', animationDuration: '1.5s' }} />
      </div>

      {/* Copyright */}
      <div className={cn(
        'absolute bottom-8 text-white/50 text-xs text-center transition-all duration-1000 ease-out delay-1000',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <p className='font-light'>© 2024 Reliability Engineers Academy</p>
        <p className='font-light'>Empowering Engineers Worldwide</p>
      </div>
    </div>
  );
}
