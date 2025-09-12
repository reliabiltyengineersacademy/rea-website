'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
  popular?: boolean;
  savings?: string;
}

interface PricingComponentProps {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingComponent = ({
  plans = [
    {
      id: 'individual',
      name: 'Individual',
      description: 'Perfect for individual learners and professionals',
      monthlyPrice: '$49',
      yearlyPrice: '$490',
      savings: 'Save 17%',
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
        text: 'Start Free Trial',
        url: '#',
      },
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For serious professionals and small teams',
      monthlyPrice: '$99',
      yearlyPrice: '$990',
      savings: 'Save 17%',
      popular: true,
      features: [
        { text: 'Everything in Individual' },
        { text: 'Advanced certification tracks' },
        { text: 'Live webinars and Q&A sessions' },
        { text: 'One-on-one mentoring (2 sessions)' },
        { text: 'Priority support' },
        { text: 'Downloadable resources' },
        { text: 'Progress tracking and analytics' },
        { text: 'Team collaboration tools' },
      ],
      button: {
        text: 'Start Free Trial',
        url: '#',
      },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For organizations and large teams',
      monthlyPrice: '$199',
      yearlyPrice: '$1,990',
      savings: 'Save 17%',
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
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className='w-full flex flex-col items-center gap-6 text-center'>
      <div className='flex items-center gap-3 text-lg'>
        <span
          className={
            !isYearly
              ? 'font-semibold text-foreground'
              : 'text-muted-foreground'
          }
        >
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={() => setIsYearly(!isYearly)}
        />
        <span
          className={
            isYearly ? 'font-semibold text-foreground' : 'text-muted-foreground'
          }
        >
          Yearly
        </span>
        {isYearly && (
          <Badge variant='default' className='ml-2'>
            Save 17%
          </Badge>
        )}
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
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className='text-muted-foreground mb-1'>
                  {isYearly ? '/year' : '/month'}
                </span>
                {isYearly && plan.savings && (
                  <Badge variant='secondary' className='ml-auto'>
                    {plan.savings}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className='flex-1'>
              <Separator className='mb-6' />

              {plan.id === 'professional' && (
                <p className='mb-3 font-semibold text-sm'>
                  Everything in Individual, plus:
                </p>
              )}

              {plan.id === 'enterprise' && (
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
