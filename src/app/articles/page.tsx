import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import ArticlesClientPage from './page.client';
import {
  getArticlesAction,
  getArticleCategoriesAction,
} from '@/actions/articles';

export const metadata: Metadata = {
  title: 'Articles | Reliability Engineers Academy',
  description:
    'Expert insights, best practices, and industry trends in reliability engineering and asset management.',
  keywords:
    'reliability engineering articles, maintenance best practices, asset management insights, CMRP articles',
};

function mapSortToParams(sort: string) {
  switch (sort) {
    case 'latest':
      return { sortBy: 'created_at' as const, sortOrder: 'desc' as const };
    case 'oldest':
      return { sortBy: 'created_at' as const, sortOrder: 'asc' as const };
    case 'title-asc':
      return { sortBy: 'title' as const, sortOrder: 'asc' as const };
    case 'title-desc':
      return { sortBy: 'title' as const, sortOrder: 'desc' as const };
    case 'read-time':
      return { sortBy: 'read_time' as const, sortOrder: 'asc' as const };
    default:
      return { sortBy: 'created_at' as const, sortOrder: 'desc' as const };
  }
}

export default async function ArticlesPage({
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
    sort = 'latest',
    page = '1',
  } = await searchParams;

  const sortParams = mapSortToParams(sort);
  const categoryFilter = category === 'All' ? undefined : category;
  const searchFilter = search || undefined;
  const pageNumber = parseInt(page) || 1;

  const articlesResult = await getArticlesAction({
    category: categoryFilter,
    search: searchFilter,
    sortBy: sortParams.sortBy,
    sortOrder: sortParams.sortOrder,
    page: pageNumber,
    limit: 12,
  });

  if (!articlesResult.success) {
    console.error('Failed to fetch articles:', articlesResult.error);
    notFound();
  }

  const categoriesResult = await getArticleCategoriesAction();
  const categories = categoriesResult.success
    ? categoriesResult.data || []
    : [];

  return (
    <Suspense fallback={<div>Loading articles...</div>}>
      <ArticlesClientPage
        articles={articlesResult.data?.data || []}
        categories={categories}
        pagination={articlesResult.data?.pagination}
        initialCategory={category}
        initialSearch={search}
        initialSort={sort}
      />
    </Suspense>
  );
}
