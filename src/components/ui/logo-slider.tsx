'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoSliderProps {
  className?: string;
  title?: string;
  subtitle?: string;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

const logos = [
  { name: 'Abu Dhabi Oil Co', src: '/rea comapny logos/Abu Dhabi Oil Co logo.png' },
  { name: 'Aladon RCM', src: '/rea comapny logos/Aladon RCM Logo.webp' },
  { name: 'Aramco', src: '/rea comapny logos/Aramco.webp' },
  { name: 'ASQ', src: '/rea comapny logos/asq.jpeg' },
  { name: 'Asset Management', src: '/rea comapny logos/Asset Management Logo.png' },
  { name: 'Dolphin Energy', src: '/rea comapny logos/Dolphin Energy Logo.png' },
  { name: 'EGA', src: '/rea comapny logos/ega.png' },
  { name: 'Exxon Mobile', src: '/rea comapny logos/Exxon Mobile Logo.jpg' },
  { name: 'MMMC', src: '/rea comapny logos/mmmc.jpeg' },
  { name: 'MMS', src: '/rea comapny logos/mms logo.png' },
  { name: 'OQ', src: '/rea comapny logos/OQ Logo.png' },
  { name: 'ReliabilityX', src: '/rea comapny logos/reliabilityx.png' },
  { name: 'Reliance', src: '/rea comapny logos/reliance.png' },
  { name: 'SABIC', src: '/rea comapny logos/Sabic Logo.png' },
  { name: 'SBM', src: '/rea comapny logos/sbm.png' },
  { name: 'Shell', src: '/rea comapny logos/Shell Logo.png' },
  { name: 'SMRP', src: '/rea comapny logos/SMRP Logo.png' },
  { name: 'SNOC', src: '/rea comapny logos/SNOC Logo.webp' },
  { name: 'TAQA Transmission', src: '/rea comapny logos/TAQA Transmission Logo.png' },
  { name: 'Velosi', src: '/rea comapny logos/Velosi Logo.jpeg' },
  { name: 'Vibration Institute', src: '/rea comapny logos/Vibration Institute logo.webp' },
];

export default function LogoSlider({
  className,
  title = "Trusted by Industry Leaders",
  subtitle = "Our clients include some of the world's most respected organizations",
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
}: LogoSliderProps) {
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
    <div className={cn("w-full py-16 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Logo Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={sliderRef}
            className="flex items-center space-x-16 will-change-transform"
            style={{
              width: 'max-content',
              animation: `scroll-${direction} ${speed}s linear infinite`,
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={64}
                  className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={64}
                  className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent pointer-events-none" />
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
