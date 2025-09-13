import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Clock, ArrowRight, TrendingUp, Settings } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { programs } from '@/constants/programs/programs';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Programs & Certifications | Reliability Engineers Academy',
  description:
    'Advance your career with globally recognized certifications and specialized training programs designed by industry experts. Choose from our comprehensive range of professional development programs.',
  keywords:
    'reliability engineering programs, CMRP certification, CMRT certification, CAMA certification, maintenance training, asset management courses',
};

export default function ProgramsPage() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='bg-gradient-to-r from-primary/10 to-primary/20 py-20'>
        <Container>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
              Programs & Certifications
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Advance your career with globally recognized certifications and
              specialized training programs designed by industry experts. Choose
              from our comprehensive range of professional development programs.
            </p>
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {programs.map((program) => (
              <Card
                key={program.id}
                className='group hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1'
              >
                <CardContent className='flex flex-col justify-between h-full p-6'>
                  <div>
                    <div className='flex items-center justify-between mb-6'>
                      <div className='size-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <program.icon className='size-7 text-primary-foreground' />
                      </div>
                      <Badge
                        variant='secondary'
                        className='bg-primary/10 text-primary'
                      >
                        {program.level}
                      </Badge>
                    </div>

                    <h3 className='text-xl font-bold text-foreground mb-2'>
                      {program.title}
                    </h3>
                    <p className='text-primary font-medium text-sm mb-4'>
                      {program.subtitle}
                    </p>
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      {program.description}
                    </p>

                    <div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center'>
                        <Clock className='size-4 mr-2 text-muted-foreground' />
                        <span className='text-sm text-muted-foreground'>
                          {program.duration}
                        </span>
                      </div>
                      <div className='text-lg font-bold text-primary'>
                        {program.price}
                      </div>
                    </div>

                    <div className='space-y-2 mb-8'>
                      {program.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center text-sm text-muted-foreground'
                        >
                          <div className='size-1.5 bg-primary rounded-full mr-3' />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className='w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                  >
                    <Link href={program.link}>
                      Learn More
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-gradient-to-br from-primary/10 to-primary/20 py-20'>
        <Container>
          <Card className='p-8 md:p-12'>
            <CardContent>
              <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold mb-4'>
                  Why Choose REA Certifications?
                </h2>
                <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                  Our programs are built on global standards and deliver
                  measurable career advancement
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Award className='size-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>
                    Global Recognition
                  </h3>
                  <p className='text-muted-foreground'>
                    Certifications recognized by leading organizations
                    worldwide, enhancing your professional credibility.
                  </p>
                </div>

                <div className='text-center'>
                  <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                    <TrendingUp className='size-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>
                    Career Advancement
                  </h3>
                  <p className='text-muted-foreground'>
                    Average 25% salary increase within 12 months of
                    certification completion.
                  </p>
                </div>

                <div className='text-center'>
                  <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Settings className='size-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>
                    Practical Skills
                  </h3>
                  <p className='text-muted-foreground'>
                    Hands-on training with real-world applications and
                    industry-standard tools.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
