import { Metadata } from 'next';
import { Video, Users, Award } from 'lucide-react';

import Container from '@/components/layout/Container';
import PricingComponent from '@/components/pricing/PricingComponent';

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
              Flexible pricing options designed to meet your professional
              development needs, whether you&apos;re an individual learner or
              part of a team.
            </p>
          </div>
        </Container>
      </section>

      <Container className='flex flex-col gap-16 my-16'>
        <PricingComponent />

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
                Prepare for industry certifications with our structured learning
                paths and practice exams.
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
                Can I switch plans anytime?
              </h4>
              <p className='text-gray-300'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect at your next billing cycle.
              </p>
            </div>

            <div>
              <h4 className='text-xl font-semibold mb-3 text-white'>
                Is there a free trial?
              </h4>
              <p className='text-gray-300'>
                We offer a 7-day free trial for new users to explore our
                platform and content before committing.
              </p>
            </div>

            <div>
              <h4 className='text-xl font-semibold mb-3 text-white'>
                What payment methods do you accept?
              </h4>
              <p className='text-gray-300'>
                We accept all major credit cards, PayPal, and bank transfers for
                annual subscriptions.
              </p>
            </div>

            <div>
              <h4 className='text-xl font-semibold mb-3 text-white'>
                Do you offer group discounts?
              </h4>
              <p className='text-gray-300'>
                Yes, we offer special pricing for teams of 5+ members. Contact
                us for custom enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
