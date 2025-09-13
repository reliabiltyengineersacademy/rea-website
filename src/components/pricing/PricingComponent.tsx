'use client';

import { CircleCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
  popular?: boolean;
}

interface PricingComponentProps {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingComponent = ({
  plans = [
    {
      id: 'student',
      name: 'Student',
      description: 'Perfect for students and individual learners',
      price: '$25',
      features: [
        { text: 'Access to all core courses' },
        { text: 'CMRP, CMRT, CAMA preparation' },
        { text: 'Practice exams and quizzes' },
        { text: 'Certificate of completion' },
        { text: 'Mobile app access' },
        { text: 'Email support' },
        { text: '30-day money-back guarantee' },
      ],
      button: {
        text: 'Get Started',
        url: '#',
      },
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For serious professionals and small teams',
      price: '$199',
      popular: true,
      features: [
        { text: 'Everything in Student' },
        { text: 'Advanced certification tracks' },
        { text: 'Live webinars and Q&A sessions' },
        { text: 'One-on-one mentoring (2 sessions)' },
        { text: 'Priority support' },
        { text: 'Downloadable resources' },
        { text: 'Progress tracking and analytics' },
        { text: 'Team collaboration tools' },
      ],
      button: {
        text: 'Get Started',
        url: '#',
      },
    },
    {
      id: 'corporate',
      name: 'Corporate',
      description: 'For organizations and large teams',
      price: '$999',
      features: [
        { text: 'Everything in Professional' },
        { text: 'Unlimited team members' },
        { text: 'Custom learning paths' },
        { text: 'Admin dashboard and reporting' },
        { text: 'API access and integrations' },
        { text: 'Dedicated account manager' },
        { text: 'Custom content development' },
        { text: 'On-site training options' },
        { text: 'SLA and priority support' },
      ],
      button: {
        text: 'Contact Sales',
        url: '#',
      },
    },
  ],
}: PricingComponentProps) => {
  return (
    <div className='w-full flex flex-col items-center gap-6 text-center'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-foreground mb-4'>
          One-Time Payment Plans
        </h2>
        <p className='text-lg text-muted-foreground'>
          Choose the perfect plan for your learning journey. All plans include lifetime access.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 mt-8 w-full'>
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
                <span className='text-4xl font-bold'>
                  {plan.price}
                </span>
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
                  <li key={index} className='flex items-start gap-3 text-sm'>
                    <CircleCheck className='size-5 text-primary mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto pt-6'>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
                size='lg'
              >
                <a href={plan.button.url}>{plan.button.text}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
