import Link from 'next/link';
import { Metadata } from 'next';
import { CircleCheck, Video, Users, Award } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { plans } from '@/constants/pricings';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Pricing | Reliability Engineers Academy',
  description:
    'Choose the perfect plan for your reliability engineering education and certification needs.',
  keywords:
    'reliability engineering pricing, CMRP certification cost, maintenance training plans, asset management courses',
};

export default function PricingPage() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
              Choose Your Learning Path
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
              Simple, transparent pricing with one-time payments. Choose the
              plan that best fits your learning goals and get lifetime access to
              all content.
            </p>
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container className='flex flex-col gap-8'>
          <div className='w-full flex flex-col items-center gap-6 text-center'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-foreground mb-4'>
                One-Time Payment Plans
              </h2>
              <p className='text-lg text-muted-foreground'>
                Choose the perfect plan for your learning journey. All plans
                include lifetime access.
              </p>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 w-full'>
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`flex w-full max-w-sm flex-col justify-between text-left relative ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-primary text-primary-foreground px-4 py-1'>
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                    <p className='text-sm text-muted-foreground'>
                      {plan.description}
                    </p>
                    <div className='flex items-end gap-2'>
                      <span className='text-4xl font-bold'>{plan.price}</span>
                      <span className='text-muted-foreground mb-1'>
                        one-time
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className='flex-1'>
                    <Separator className='mb-6' />

                    {plan.id === 'professional' && (
                      <p className='mb-3 font-semibold text-sm'>
                        Everything in Student, plus:
                      </p>
                    )}

                    {plan.id === 'corporate' && (
                      <p className='mb-3 font-semibold text-sm'>
                        Everything in Professional, plus:
                      </p>
                    )}

                    <ul className='space-y-4'>
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-3 text-sm'
                        >
                          <CircleCheck className='size-5 text-primary mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground'>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className='mt-auto pt-6'>
                    <Link href={plan.button.url}>
                      <Button
                        size='lg'
                        className={`w-full ${
                          plan.popular
                            ? 'bg-primary hover:bg-primary/90'
                            : 'bg-secondary hover:bg-secondary/90'
                        }`}
                      >
                        Coming Soon
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className='bg-card rounded-3xl shadow-xl p-8'>
            <h3 className='text-2xl font-bold text-foreground text-center mb-8'>
              What&apos;s Included in Each Plan
            </h3>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <Video className='h-8 w-8 text-blue-600 dark:text-blue-400' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Live & Recorded Content
                </h4>
                <p className='text-muted-foreground'>
                  Access to comprehensive video library and live expert sessions
                  for real-time learning.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-green-600 dark:text-green-400' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Expert Community
                </h4>
                <p className='text-muted-foreground'>
                  Connect with industry professionals and get guidance from
                  experienced mentors.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-purple-600 dark:text-purple-400' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  Certification Ready
                </h4>
                <p className='text-muted-foreground'>
                  Prepare for industry certifications with our structured
                  learning paths and practice exams.
                </p>
              </div>
            </div>
          </div>

          <div className='p-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl'>
            <h3 className='text-3xl font-bold text-center mb-12 text-white'>
              Frequently Asked Questions
            </h3>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div>
                <h4 className='text-xl font-semibold mb-3 text-white'>
                  What does lifetime access mean?
                </h4>
                <p className='text-gray-300'>
                  Once you purchase a plan, you get unlimited access to all
                  content and updates forever. No recurring fees or subscription
                  renewals.
                </p>
              </div>
              <div>
                <h4 className='text-xl font-semibold mb-3 text-white'>
                  Can I upgrade my plan later?
                </h4>
                <p className='text-gray-300'>
                  Yes, you can upgrade from Student to Professional or Corporate
                  at any time. Contact us for upgrade pricing and options.
                </p>
              </div>

              <div>
                <h4 className='text-xl font-semibold mb-3 text-white'>
                  What payment methods do you accept?
                </h4>
                <p className='text-gray-300'>
                  We accept all major credit cards, PayPal, and bank transfers.
                  All payments are secure and processed through trusted
                  providers.
                </p>
              </div>

              <div>
                <h4 className='text-xl font-semibold mb-3 text-white'>
                  Do you offer group discounts?
                </h4>
                <p className='text-gray-300'>
                  Yes, we offer special pricing for teams of 5+ members. Contact
                  us for custom corporate solutions and bulk pricing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
