'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { companies } from '@/constants/companies';

export default function Companies({
  title = 'Trusted by Industry Leaders',
  subtitle = 'Our clients include some of the world&apos;s most respected organizations',
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
}: {
  title?: string;
  subtitle?: string;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let currentPosition = 0;

    const animate = () => {
      if (!isPaused.current) {
        currentPosition += direction === 'left' ? -0.5 : 0.5;
        slider.style.transform = `translateX(${currentPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isPaused.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isPaused.current = false;
    }
  };

  return (
    <div className='w-full py-16 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            {title}
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            {subtitle}
          </p>
        </div>

        <div
          className='relative overflow-hidden'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={sliderRef}
            className='flex items-center space-x-16 will-change-transform'
            style={{
              width: 'max-content',
              animation: `scroll-${direction} ${speed}s linear infinite`,
            }}
          >
            {companies.map((logo, index) => (
              <div
                key={`first-${index}`}
                className='flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300'
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className='h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
            ))}

            {companies.map((logo, index) => (
              <div
                key={`second-${index}`}
                className='flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300'
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className='h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
            ))}
          </div>

          <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent pointer-events-none' />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
