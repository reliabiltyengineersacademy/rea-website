'use client';

import {
  Calendar,
  Clock,
  Users,
  ExternalLink,
  Search,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition, useState, useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Webinar } from '@/data/webinars';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

export default function WebinarsClientPage({
  webinars,
  categories,
  sortOptions,
  initialCategory,
  initialSearch,
  initialSort,
}: {
  webinars: Webinar[];
  categories: string[];
  sortOptions: { value: string; label: string }[];
  initialCategory: string;
  initialSearch: string;
  initialSort: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const updateSearchParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== 'All' && value !== 'date-desc') {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      startTransition(() => {
        router.push(`/webinars?${params.toString()}`, { scroll: false });
      });
    },
    [router, searchParams]
  );

  const handleCategoryChange = (category: string) =>
    updateSearchParams({ category });

  const handleSortChange = (sort: string) => updateSearchParams({ sort });

  const [searchValue, setSearchValue] = useState(initialSearch);

  const handleSearchChange = useCallback(
    (search: string) => updateSearchParams({ search }),
    [updateSearchParams]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue !== initialSearch) handleSearchChange(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, initialSearch, handleSearchChange]);

  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-6xl font-bold text-foreground mb-6'>
              Monthly Webinars
            </h1>
            <p className='md:text-xl text-muted-foreground mb-8'>
              Join our industry experts for in-depth discussions on reliability
              engineering, maintenance best practices, and cutting-edge
              technologies.
            </p>
            <div className='flex flex-wrap justify-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Calendar className='size-4' />
                <span>Monthly Sessions</span>
              </div>
              <div className='flex items-center gap-2'>
                <Users className='size-4' />
                <span>Expert Instructors</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='size-4' />
                <span>Flexible Timing</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='py-16'>
        <Container>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-between mb-8'>
            <div className='md:max-w-2xl w-full'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4' />
                <Input
                  placeholder='Search webinars...'
                  className='pl-10 pr-4 py-3 md:text-lg min-h-12'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-end gap-4 w-full'>
              <Select
                value={initialCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className='w-[200px] min-h-12'>
                  <SelectValue placeholder='Category' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={initialSort} onValueChange={handleSortChange}>
                <SelectTrigger className='w-[200px] min-h-12'>
                  <SelectValue placeholder='Sort by' />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {webinars.length === 0 ? (
              <div className='col-span-full text-center py-12'>
                <div className='text-muted-foreground mb-4'>
                  <Search className='size-12 mx-auto mb-4 opacity-50' />
                  <h3 className='text-lg font-semibold mb-2'>
                    No webinars found
                  </h3>
                  <p>Try adjusting your search or category filters</p>
                </div>
                <Button
                  variant='outline'
                  onClick={() => {
                    updateSearchParams({ search: '', category: 'All' });
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              webinars.map((webinar) => (
                <Card
                  key={webinar.id}
                  className='h-full flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden pt-0'
                >
                  <div className='relative'>
                    <Image
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      width={400}
                      height={200}
                      className='w-full h-48 object-cover'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center'>
                      <Button
                        size='lg'
                        className='w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'
                        asChild
                      >
                        <a
                          href={webinar.recordingUrl || webinar.registrationUrl}
                          target={
                            webinar.status === 'completed' ? '_blank' : '_self'
                          }
                          rel={
                            webinar.status === 'completed'
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          <Play className='h-8 w-8 text-primary ml-1' />
                        </a>
                      </Button>
                    </div>
                    <div className='absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm'>
                      {webinar.duration}
                    </div>
                  </div>

                  <CardHeader>
                    <div className='flex items-start justify-between mb-2'>
                      <Badge variant='outline' className='text-xs'>
                        {categories.find((cat) => {
                          const categoryMap: Record<string, string> = {
                            'Predictive Maintenance': 'predictive',
                            'Technology & Innovation': 'technology',
                            'Failure Analysis': 'analysis',
                            'Asset Management': 'management',
                            'Compliance & Standards': 'compliance',
                          };
                          return categoryMap[cat] === webinar.category;
                        }) || webinar.category}
                      </Badge>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center text-sm'>
                          <Users className='size-4 mr-2' />
                          {webinar.views} views
                        </div>
                      </div>
                    </div>
                    <CardTitle className='text-xl mb-2 line-clamp-2'>
                      {webinar.title}
                    </CardTitle>
                    <CardDescription className='text-sm line-clamp-3'>
                      {webinar.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='flex flex-col justify-end gap-4 h-full'>
                    <div className='space-y-2 text-sm text-muted-foreground'>
                      <div className='flex items-center'>
                        <Users className='size-4 mr-2' />
                        {webinar.speaker}
                      </div>
                      <div className='flex items-center'>
                        <Calendar className='size-4 mr-2' />
                        {webinar.date}
                      </div>
                    </div>

                    <Button
                      className='w-full'
                      asChild
                      variant={
                        webinar.status === 'upcoming' ? 'default' : 'outline'
                      }
                    >
                      <a
                        href={
                          webinar.status === 'upcoming'
                            ? webinar.registrationUrl
                            : webinar.recordingUrl
                        }
                        target={
                          webinar.status === 'upcoming' ? '_self' : '_blank'
                        }
                        rel={
                          webinar.status === 'upcoming'
                            ? undefined
                            : 'noopener noreferrer'
                        }
                      >
                        <Play className='h-5 w-5 mr-2' />
                        {webinar.status === 'upcoming'
                          ? 'Register Now'
                          : 'Watch Recording'}
                        {webinar.status === 'completed' && (
                          <ExternalLink className='ml-2 size-4' />
                        )}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
