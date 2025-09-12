import {
  BookOpen,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Clock,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const categories = [
  {
    icon: TrendingUp,
    title: 'Reliability Strategies',
    description: 'Advanced methodologies for asset reliability optimization',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Technology & Transformation',
    description: 'Digital solutions and Industry 4.0 applications',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BookOpen,
    title: 'Compliance & Governance',
    description: 'Regulatory requirements and best practices',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Workforce Capability',
    description: 'Training and development strategies',
    color: 'from-orange-500 to-orange-600',
  },
];

const featuredArticles = [
  {
    slug: 'predictive-maintenance-revolution',
    title: 'Implementing Predictive Maintenance in Manufacturing',
    excerpt:
      'A comprehensive guide to deploying predictive maintenance strategies that reduce downtime by up to 40%.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '8 min read',
    category: 'Reliability Strategies',
    image:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
  },
  {
    slug: 'digital-transformation-maintenance',
    title: 'Digital Twin Technology for Asset Management',
    excerpt:
      'Exploring how digital twins are revolutionizing asset performance monitoring and optimization.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '6 min read',
    category: 'Technology & Transformation',
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    slug: 'iso-55000-asset-management-implementation',
    title: 'ISO 55000 Implementation Framework',
    excerpt:
      'Step-by-step approach to implementing ISO 55000 asset management standards in your organization.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '10 min read',
    category: 'Compliance & Governance',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    slug: 'root-cause-failure-analysis-methodology',
    title: 'Building Reliability Culture in Organizations',
    excerpt:
      'Strategies for developing a reliability-focused mindset across all levels of your organization.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '7 min read',
    category: 'Workforce Capability',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    slug: 'vibration-analysis-fundamentals',
    title: 'Advanced Vibration Analysis Case Studies',
    excerpt:
      'Real-world examples of vibration analysis applications in critical machinery diagnostics.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '12 min read',
    category: 'Reliability Strategies',
    image:
      'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    slug: 'digital-transformation-maintenance',
    title: 'AI-Powered Maintenance Optimization',
    excerpt:
      'How artificial intelligence is transforming maintenance scheduling and resource allocation.',
    author: 'Vinoth Kumar Subramaniam',
    readTime: '9 min read',
    category: 'Technology & Transformation',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function KnowledgeHub() {
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
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                  <Button
                    asChild
                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                  >
                    <Link href={`/articles/${featuredArticles[0].slug}`}>
                      Read Full Article
                    </Link>
                  </Button>
                </div>
                <div className='relative'>
                  <Image
                    width={100}
                    height={100}
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
            {featuredArticles.slice(1).map((article, index) => (
              <Link
                key={index}
                href={`/articles/${article.slug}`}
                className='hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer'
              >
                <Card className='overflow-hidden h-full pt-0'>
                  <div className='relative'>
                    <Image
                      width={100}
                      height={100}
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
                        {article.readTime}
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
            <div className='flex flex-row gap-4 max-w-md mx-auto'>
              <Input
                type='email'
                className='flex-1 min-h-12'
                placeholder='Enter your email address'
              />
              <Button className='shrink-0 min-h-12'>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
