'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition, useState, useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Article, PaginatedResponse } from '@/lib/types';
import { formatDate, formatReadTime } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'title-asc', label: 'Title A-Z' },
  { value: 'title-desc', label: 'Title Z-A' },
  { value: 'read-time', label: 'Read Time' },
];

export default function ArticlesClientPage({
  articles,
  categories,
  pagination,
  initialCategory,
  initialSearch,
  initialSort,
}: {
  articles: Article[];
  categories: string[];
  pagination?: PaginatedResponse<Article>['pagination'];
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
        if (value && value !== 'All' && value !== 'latest') {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      if (updates.category || updates.search || updates.sort) {
        params.delete('page');
      }

      startTransition(() => {
        router.push(`/articles?${params.toString()}`, { scroll: false });
      });
    },
    [router, searchParams]
  );

  const handleCategoryChange = (category: string) => {
    updateSearchParams({ category });
  };

  const handleSortChange = (sort: string) => {
    updateSearchParams({ sort });
  };

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() });
  };

  const [searchValue, setSearchValue] = useState(initialSearch);

  const handleSearchChange = useCallback(
    (search: string) => {
      updateSearchParams({ search });
    },
    [updateSearchParams]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue !== initialSearch) {
        handleSearchChange(searchValue);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, initialSearch, handleSearchChange]);

  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-6xl font-bold text-foreground mb-6'>
              Knowledge Articles
            </h1>
            <p className='md:text-xl text-muted-foreground mb-8'>
              Expert insights, best practices, and industry trends in
              reliability engineering and asset management.
            </p>

            <div className='md:max-w-2xl mx-auto mb-8'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4' />
                <Input
                  value={searchValue}
                  placeholder='Search articles...'
                  className='pl-10 pr-4 py-3 md:text-lg min-h-12'
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-wrap justify-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Calendar className='size-4' />
                <span>Updated Weekly</span>
              </div>
              <div className='flex items-center gap-2'>
                <User className='size-4' />
                <span>Expert Authors</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='size-4' />
                <span>Quick Reads</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='py-16 bg-muted/30'>
        <Container>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col sm:flex-row flex-wrap sm:items-center justify-between gap-4'>
              <h2 className='text-2xl font-bold'>
                {initialCategory === 'All'
                  ? 'Articles'
                  : `${initialCategory} Articles`}
                <span className='text-sm font-normal text-muted-foreground ml-2'>
                  ({pagination?.total || articles.length})
                </span>
              </h2>

              <div className='flex flex-row gap-4'>
                <Select
                  value={initialCategory}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Category' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='All'>All</SelectItem>
                    {categories.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={initialSort} onValueChange={handleSortChange}>
                  <SelectTrigger className='w-[180px]'>
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

            <div className='space-y-6'>
              {articles.length === 0 ? (
                <div className='text-center py-12'>
                  <div className='text-muted-foreground mb-4'>
                    <Search className='size-12 mx-auto mb-4 opacity-50' />
                    <h3 className='text-lg font-semibold mb-2'>
                      No articles found
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
                articles.map((article) => (
                  <Card
                    key={article.id}
                    className='hover:shadow-md transition-shadow py-0'
                  >
                    <div className='flex flex-col md:flex-row'>
                      <div className='min-w-48 md:w-1/3'>
                        <div className='w-full h-full relative overflow-hidden rounded-xl'>
                          <Image
                            fill
                            src={article.image}
                            alt={article.title}
                            className='object-cover rounded-xl'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </div>
                      </div>
                      <div className='md:w-2/3 p-6'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Badge className='text-xs'>{article.category}</Badge>
                        </div>
                        <CardTitle className='text-xl mb-2'>
                          {article.title}
                        </CardTitle>
                        <CardDescription className='mb-4'>
                          {article.excerpt}
                        </CardDescription>
                        <div className='flex items-center justify-between text-sm text-muted-foreground mb-4'>
                          <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                            <div className='flex items-center gap-1'>
                              <User className='size-4' />
                              <span>{article.author}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Calendar className='size-4' />
                              <span>
                                {formatDate(article.created_at, 'MMM d, yyyy')}
                              </span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Clock className='size-4' />
                              <span>{formatReadTime(article.read_time)}</span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex flex-wrap gap-2'>
                            {article.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant='outline'
                                className='text-xs'
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button asChild variant='outline' size='sm'>
                            <Link href={`/articles/${article.id}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {pagination && pagination.totalPages > 1 && (
              <div className='flex justify-center items-center gap-2 mt-8'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                >
                  Previous
                </Button>

                <div className='flex items-center gap-1'>
                  {Array.from(
                    { length: Math.min(5, pagination.totalPages) },
                    (_, i) => {
                      const pageNum =
                        Math.max(
                          1,
                          Math.min(
                            pagination.totalPages - 4,
                            pagination.page - 2
                          )
                        ) + i;

                      return (
                        <Button
                          key={pageNum}
                          variant={
                            pageNum === pagination.page ? 'default' : 'outline'
                          }
                          size='sm'
                          onClick={() => handlePageChange(pageNum)}
                          className='w-10'
                        >
                          {pageNum}
                        </Button>
                      );
                    }
                  )}
                </div>

                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
