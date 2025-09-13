import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User } from 'lucide-react';

import { getArticleByIdAction } from '@/actions/articles';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/layout/Container';
import { formatDate, formatReadTime } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { id } = await params;
  const articleResult = await getArticleByIdAction(id);

  if (!articleResult.success || !articleResult.data) {
    return {
      title: 'Article Not Found',
    };
  }

  const article = articleResult.data;

  return {
    title: `${article.title} | Reliability Engineers Academy`,
    description:
      article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
    keywords: article.tags.join(', '),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const articleResult = await getArticleByIdAction(id);

  if (!articleResult.success || !articleResult.data) {
    notFound();
  }

  const article = articleResult.data;

  return (
    <section className='py-12 min-h-screen'>
      <Container>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center gap-2 mb-4'>
            <Badge className='text-xs'>{article.category}</Badge>
          </div>

          <h1 className='text-3xl md:text-5xl font-bold text-foreground mb-6'>
            {article.title}
          </h1>

          <div className='flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8'>
            <div className='flex items-center gap-2'>
              <User className='size-4' />
              <span>{article.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='size-4' />
              <span>
                {formatDate(article.created_at, 'EEEE, MMMM d, yyyy')}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='size-4' />
              <span>{formatReadTime(article.read_time)}</span>
            </div>
          </div>

          <div className='flex flex-wrap gap-2 mb-8'>
            {article.tags.map((tag) => (
              <Badge key={tag} variant='outline'>
                {tag}
              </Badge>
            ))}
          </div>

          <div className='aspect-video relative rounded-lg mb-8 overflow-hidden'>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
              priority
            />
          </div>

          <div
            className='prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-headings:mb-2 prose-headings:mt-4 prose-p:mb-2 prose-li:mb-1 prose-li:mt-1'
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </Container>
    </section>
  );
}
