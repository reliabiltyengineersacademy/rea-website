'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronRight, ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { slides } from '@/constants/home/hero';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='-mt-16 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-dvh flex items-center overflow-hidden'>
      <Container className='relative z-10 mt-20 py-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-primary-foreground'>
            <div className='inline-flex items-center bg-primary-foreground/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-primary-foreground/20'>
              <span className='text-sm font-medium'>
                🎯 Professional Asset Management and Reliability Engineering
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold leading-tight mb-6'>
              Your Pathway To
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground/80 to-primary-foreground'>
                Asset Reliability Mastery
              </span>
            </h1>

            <p className='text-base md:text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
              Empowering engineers and organizations with world-class training,
              certifications, and expertise in asset reliability engineering,
              predictive diagnostics, and maintenance optimization.
            </p>

            <div className='flex flex-row gap-4'>
              <Link href='/programs'>
                <Button className='flex items-center bg-white text-blue-800 border-white border-2 font-bold py-6 px-8'>
                  Explore Programs
                  <ArrowRight className='ml-2 size-5' />
                </Button>
              </Link>

              <Button className='flex items-center bg-transparent text-white border-white border-2 font-bold py-6 px-8'>
                <Play className='mr-2 size-5' />
                Watch Demo
              </Button>
            </div>

            <div className='grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-foreground mb-2'>
                  500+
                </div>
                <div className='text-primary-foreground/80 text-sm'>
                  Certified Engineers
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-foreground mb-2'>
                  50+
                </div>
                <div className='text-primary-foreground/80 text-sm'>
                  Training Programs
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-foreground mb-2'>
                  25+
                </div>
                <div className='text-primary-foreground/80 text-sm'>
                  Countries Served
                </div>
              </div>
            </div>
          </div>

          <div className='relative h-96'>
            <Card className='relative bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 h-full overflow-hidden'>
              <CardContent className='h-full'>
                <div className='relative h-full'>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={cn(
                        'absolute inset-0 transition-all duration-1000 transform',
                        index === currentSlide
                          ? 'translate-x-0 opacity-100'
                          : index < currentSlide
                          ? '-translate-x-full opacity-0'
                          : 'translate-x-full opacity-0'
                      )}
                    >
                      <div className='h-full flex flex-col justify-center'>
                        <div
                          className={cn(
                            'size-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 mx-auto text-3xl',
                            slide.color
                          )}
                        >
                          {slide.icon}
                        </div>
                        <h3 className='text-4xl font-bold text-primary-foreground text-center mb-2'>
                          {slide.title}
                        </h3>
                        <p className='text-xl text-primary-foreground/80 text-center mb-4 font-medium'>
                          {slide.subtitle}
                        </p>
                        <p className='text-primary-foreground/70 text-center leading-relaxed px-4'>
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={cn(
                        'size-3 rounded-full transition-all duration-300',
                        index === currentSlide
                          ? 'bg-primary-foreground'
                          : 'bg-primary-foreground/40'
                      )}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + slides.length) % slides.length
                    )
                  }
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 size-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors'
                >
                  <ChevronLeft className='size-5 text-primary-foreground' />
                </button>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                  }
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 size-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors'
                >
                  <ChevronRight className='size-5 text-primary-foreground' />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
