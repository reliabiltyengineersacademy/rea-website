import { Metadata } from 'next';
import { Suspense } from 'react';

import ArticlesClientPage from './page.client';
import { articles, type Article } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Articles | Reliability Engineers Academy',
  description:
    'Expert insights, best practices, and industry trends in reliability engineering and asset management.',
  keywords:
    'reliability engineering articles, maintenance best practices, asset management insights, CMRP articles',
};

function filterAndSortArticles(
  articles: Article[],
  category?: string,
  search?: string,
  sort?: string
) {
  let filtered = [...articles];

  if (category && category !== 'All') {
    filtered = filtered.filter((article) => article.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }

  filtered.sort((a, b) => {
    switch (sort) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'read-time':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return filtered;
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
  }>;
}) {
  const { category = 'All', search = '', sort = 'latest' } = await searchParams;

  const filteredArticles = filterAndSortArticles(
    articles,
    category,
    search,
    sort
  );

  return (
    <Suspense fallback={<div>Loading articles...</div>}>
      <ArticlesClientPage
        articles={filteredArticles}
        initialCategory={category}
        initialSearch={search}
        initialSort={sort}
      />
    </Suspense>
  );
}
