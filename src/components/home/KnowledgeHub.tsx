import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, User } from 'lucide-react';

import { Article } from '@/lib/types';
import { formatReadTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { categories } from '@/constants/home/categories';
import { Card, CardContent } from '@/components/ui/card';
import NewsletterSubscription from '@/components/ui/newsletter-subscription';

export default function KnowledgeHub({
  featuredArticles,
}: {
  featuredArticles: Article[];
}) {
  return (
    <section className='py-20 bg-background'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Knowledge Hub
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Stay ahead with the latest insights, case studies, and best
            practices in reliability engineering from industry experts
            worldwide.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {categories.map((category, index) => (
            <Link key={index} href='/articles' className='group cursor-pointer'>
              <Card className='hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full'>
                <CardContent className='flex flex-col justify-between h-full'>
                  <div>
                    <div
                      className={`size-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className='size-7 text-white' />
                    </div>
                    <h3 className='text-xl font-semibold text-foreground mb-3'>
                      {category.title}
                    </h3>
                    <p className='text-muted-foreground mb-4'>
                      {category.description}
                    </p>
                  </div>

                  <div className='flex items-center text-primary font-medium group-hover:text-primary/80'>
                    Explore Articles
                    <ArrowRight className='ml-2 size-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {featuredArticles.length > 0 && (
          <div className='mb-16'>
            <h3 className='text-2xl font-bold text-foreground mb-8'>
              Featured Article
            </h3>
            <Card className='bg-gradient-to-r from-primary to-primary/80 overflow-hidden shadow-2xl p-0 '>
              <CardContent className='p-0'>
                <div className='grid lg:grid-cols-2 gap-0'>
                  <div className='p-6 sm:p-12 text-primary-foreground'>
                    <div className='inline-block bg-primary-foreground/20 text-sm font-semibold px-3 py-1 rounded-full mb-4'>
                      {featuredArticles[0].category}
                    </div>
                    <h4 className='text-3xl font-bold mb-4'>
                      {featuredArticles[0].title}
                    </h4>
                    <p className='text-primary-foreground/90 text-lg mb-6 leading-relaxed'>
                      {featuredArticles[0].excerpt}
                    </p>
                    <div className='flex items-center space-x-6 text-primary-foreground/80 mb-8'>
                      <div className='flex items-center'>
                        <User className='size-4 mr-2' />
                        {featuredArticles[0].author}
                      </div>
                      <div className='flex items-center'>
                        <Clock className='size-4 mr-2' />
                        {formatReadTime(featuredArticles[0].read_time)}
                      </div>
                    </div>
                    <Button
                      asChild
                      className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                    >
                      <Link href={`/articles/${featuredArticles[0].id}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </div>
                  <div className='relative'>
                    <Image
                      width={600}
                      height={400}
                      src={featuredArticles[0].image}
                      alt={featuredArticles[0].title}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent to-primary/20' />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div>
          <div className='flex items-center justify-between mb-8'>
            <h3 className='text-2xl font-bold text-foreground'>
              Latest Articles
            </h3>
            <Link
              href='/articles'
              className='text-primary font-medium hover:text-primary/80 flex items-center'
            >
              View All Articles
              <ArrowRight className='ml-2 size-4' />
            </Link>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredArticles.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className='hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer'
              >
                <Card className='overflow-hidden h-full pt-0'>
                  <div className='relative'>
                    <Image
                      width={400}
                      height={300}
                      src={article.image}
                      alt={article.title}
                      className='w-full h-48 object-cover'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full'>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className='px-6 flex flex-col justify-between h-full'>
                    <div>
                      <h4 className='text-xl font-semibold text-foreground mb-3 line-clamp-2'>
                        {article.title}
                      </h4>
                      <p className='text-muted-foreground mb-4 line-clamp-3'>
                        {article.excerpt}
                      </p>
                    </div>

                    <div className='flex items-center justify-between text-sm text-muted-foreground'>
                      <div className='flex items-center'>
                        <User className='size-4 mr-1' />
                        {article.author}
                      </div>
                      <div className='flex items-center'>
                        <Clock className='size-4 mr-1' />
                        {formatReadTime(article.read_time)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Card className='mt-8 bg-muted/80 p-6 md:p-12 text-center'>
          <CardContent className='p-0'>
            <h3 className='text-3xl font-bold text-foreground mb-4'>
              Stay Updated with Latest Insights
            </h3>
            <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance'>
              Subscribe to our newsletter and get the latest reliability
              engineering insights, case studies, and industry updates delivered
              to your inbox.
            </p>
            <NewsletterSubscription
              variant='inline'
              className='max-w-md mx-auto'
            />
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
