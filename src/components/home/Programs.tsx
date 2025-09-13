import Link from 'next/link';
import { Award, TrendingUp, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import { certifications } from '@/constants/certificates';

export default function Programs() {
  return (
    <section className='py-20 bg-background'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Programs & Certifications
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Advance your career with globally recognized certifications and
            specialized training programs designed by industry experts.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className='group hover:shadow-2xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1'
            >
              <CardContent className='flex flex-col justify-between h-full'>
                <div>
                  <div className='flex items-center justify-between mb-6'>
                    <div className='size-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <cert.icon className='size-7 text-primary-foreground' />
                    </div>
                    <span className='bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full'>
                      {cert.level}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    {cert.title}
                  </h3>
                  <p className='text-primary font-medium text-sm mb-4'>
                    {cert.subtitle}
                  </p>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {cert.description}
                  </p>

                  <div className='flex items-center mb-6'>
                    <div className='text-sm text-muted-foreground'>
                      <span className='font-medium'>Duration:</span>{' '}
                      {cert.duration}
                    </div>
                  </div>

                  <div className='space-y-2 mb-8'>
                    {cert.features.map((feature, idx) => (
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
                  <Link href='/programs'>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className='bg-gradient-to-br from-primary/10 to-primary/20 p-6 md:p-12'>
          <CardContent>
            <div className='text-center mb-12'>
              <h3 className='text-3xl font-bold text-foreground mb-4'>
                Why Choose REA Certifications?
              </h3>
              <p className='text-lg text-muted-foreground'>
                Our programs are built on global standards and deliver
                measurable career advancement
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='size-8 text-primary-foreground' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Global Recognition
                </h4>
                <p className='text-muted-foreground font-medium'>
                  Certifications recognized by leading organizations worldwide,
                  enhancing your professional credibility.
                </p>
              </div>

              <div className='text-center'>
                <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <TrendingUp className='size-8 text-primary-foreground' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Career Advancement
                </h4>
                <p className='text-muted-foreground font-medium'>
                  Average 25% salary increase within 12 months of certification
                  completion.
                </p>
              </div>

              <div className='text-center'>
                <div className='size-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Settings className='size-8 text-primary-foreground' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Practical Skills
                </h4>
                <p className='text-muted-foreground font-medium'>
                  Hands-on training with real-world applications and
                  industry-standard tools.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
