import Link from 'next/link';
import Image from 'next/image';

import {
  membershipBenefits,
  upcomingWebinars,
} from '@/constants/home/membership';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function Membership() {
  return (
    <section className='py-20 bg-muted/80'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Membership & Webinars
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Join our global community of reliability professionals and stay
            ahead with exclusive resources, networking opportunities, and expert
            insights.
          </p>
        </div>

        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-center text-foreground mb-12'>
            Membership Benefits
          </h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {membershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className='hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <CardContent>
                  <div className='size-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6'>
                    <benefit.icon className='size-7 text-primary-foreground' />
                  </div>
                  <h4 className='text-xl font-semibold text-foreground mb-4'>
                    {benefit.title}
                  </h4>
                  <p className='text-muted-foreground leading-relaxed'>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-8'>
            <Card className='bg-gradient-to-r from-blue-600 to-blue-800 p-6 md:p-8 text-primary-foreground'>
              <CardContent className='p-0'>
                <h4 className='text-2xl font-bold mb-4'>
                  Ready to Join Our Community?
                </h4>
                <p className='text-primary-foreground/90 mb-6 max-w-2xl mx-auto'>
                  Get instant access to exclusive resources, monthly webinars,
                  and a global network of reliability professionals.
                </p>
                <div className='flex flex-row gap-4 justify-center'>
                  <Link href='/pricing'>
                    <Button className='bg-white text-blue-800 border-white border-2 font-bold py-6 px-8'>
                      Join Now
                    </Button>
                  </Link>

                  <Button className='bg-transparent text-white border-white border-2 font-bold py-6 px-8'>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className='text-3xl font-bold text-center text-foreground mb-12'>
            Upcoming Webinars
          </h3>

          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            {upcomingWebinars.map((webinar, index) => (
              <Card
                key={index}
                className='hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer pt-0'
              >
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  className='w-full h-40 object-cover'
                  width={400}
                  height={200}
                />
                <CardContent className='px-6'>
                  <div className='text-primary text-sm font-semibold mb-2'>
                    {webinar.topic}
                  </div>
                  <h5 className='font-semibold text-foreground mb-2'>
                    {webinar.title}
                  </h5>
                  <p className='text-sm text-muted-foreground mb-2'>
                    {webinar.speaker}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {webinar.date} • {webinar.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
