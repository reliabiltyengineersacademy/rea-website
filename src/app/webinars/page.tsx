import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import WebinarsClientPage from './page.client';
import {
  getWebinarsAction,
  getWebinarCategoriesAction,
} from '@/actions/webinars';

export const metadata: Metadata = {
  title: 'Webinars | Reliability Engineers Academy',
  description:
    'Join our expert-led webinars on reliability engineering, maintenance best practices, and industry insights.',
  keywords:
    'reliability engineering webinars, maintenance training, CMRP webinars, asset management',
};

function mapSortToParams(sort: string) {
  switch (sort) {
    case 'date-desc':
      return { sortBy: 'scheduled_at' as const, sortOrder: 'desc' as const };
    case 'date-asc':
      return { sortBy: 'scheduled_at' as const, sortOrder: 'asc' as const };
    case 'title-asc':
      return { sortBy: 'title' as const, sortOrder: 'asc' as const };
    case 'title-desc':
      return { sortBy: 'title' as const, sortOrder: 'desc' as const };
    case 'views-desc':
      return { sortBy: 'views' as const, sortOrder: 'desc' as const };
    default:
      return { sortBy: 'scheduled_at' as const, sortOrder: 'desc' as const };
  }
}

const sortOptions = [
  { value: 'date-desc', label: 'Latest First' },
  { value: 'date-asc', label: 'Earliest First' },
  { value: 'title-asc', label: 'Title A-Z' },
  { value: 'title-desc', label: 'Title Z-A' },
  { value: 'views-desc', label: 'Most Popular' },
];

export default async function WebinarsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const {
    category = 'All',
    search = '',
    sort = 'date-desc',
    page = '1',
  } = await searchParams;

  const sortParams = mapSortToParams(sort);
  const categoryFilter = category === 'All' ? undefined : category;
  const searchFilter = search || undefined;
  const pageNumber = parseInt(page) || 1;

  const webinarsResult = await getWebinarsAction({
    category: categoryFilter,
    search: searchFilter,
    sortBy: sortParams.sortBy,
    sortOrder: sortParams.sortOrder,
    page: pageNumber,
    limit: 12,
  });

  if (!webinarsResult.success) {
    console.error('Failed to fetch webinars:', webinarsResult.error);
    notFound();
  }

  const categoriesResult = await getWebinarCategoriesAction();
  const categories = categoriesResult.success
    ? categoriesResult.data || []
    : [];

  return (
    <Suspense fallback={<div>Loading webinars...</div>}>
      <WebinarsClientPage
        webinars={webinarsResult.data?.data || []}
        categories={categories}
        sortOptions={sortOptions}
        pagination={webinarsResult.data?.pagination}
        initialCategory={category}
        initialSearch={search}
        initialSort={sort}
      />
    </Suspense>
  );
}
