import { Metadata } from 'next';
import { Suspense } from 'react';

import {
  webinars,
  categories,
  sortOptions,
  type Webinar,
} from '@/data/webinars';
import WebinarsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Webinars | Reliability Engineers Academy',
  description:
    'Join our expert-led webinars on reliability engineering, maintenance best practices, and industry insights.',
  keywords:
    'reliability engineering webinars, maintenance training, CMRP webinars, asset management',
};

function filterAndSortWebinars(
  webinars: Webinar[],
  category?: string,
  search?: string,
  sort?: string
) {
  let filtered = [...webinars];

  if (category && category !== 'All') {
    const categoryMap: Record<string, string> = {
      'Predictive Maintenance': 'predictive',
      'Technology & Innovation': 'technology',
      'Failure Analysis': 'analysis',
      'Asset Management': 'management',
      'Compliance & Standards': 'compliance',
    };
    const categoryKey = categoryMap[category] || category.toLowerCase();
    filtered = filtered.filter((webinar) => webinar.category === categoryKey);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (webinar) =>
        webinar.title.toLowerCase().includes(searchLower) ||
        webinar.description.toLowerCase().includes(searchLower) ||
        webinar.speaker.toLowerCase().includes(searchLower) ||
        webinar.category.toLowerCase().includes(searchLower)
    );
  }

  filtered.sort((a, b) => {
    switch (sort) {
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'views-desc':
        return b.views - a.views;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return filtered;
}

export default async function WebinarsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
  }>;
}) {
  const {
    category = 'All',
    search = '',
    sort = 'date-desc',
  } = await searchParams;

  const filteredWebinars = filterAndSortWebinars(
    webinars,
    category,
    search,
    sort
  );

  return (
    <Suspense fallback={<div>Loading webinars...</div>}>
      <WebinarsClientPage
        webinars={filteredWebinars}
        categories={categories}
        sortOptions={sortOptions}
        initialCategory={category}
        initialSearch={search}
        initialSort={sort}
      />
    </Suspense>
  );
}
