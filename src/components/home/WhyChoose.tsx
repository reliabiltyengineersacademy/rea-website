import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import ScheduleConsultation from './ScheduleConsultation';
import { achievements, differentiators } from '@/constants/home/whyChoose';

export default function WhyChoose() {
  return (
    <section className='py-20 bg-gradient-to-br from-primary/5 to-background'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Why Choose REA?
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Discover what sets Reliability Engineers Academy apart as the
            premier destination for reliability engineering education and
            professional development.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
          {achievements.map((achievement, index) => (
            <div key={index} className='text-center group'>
              <div className='size-16 md:size-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <achievement.icon className='size-8 md:size-10 text-primary-foreground' />
              </div>
              <div className='text-3xl md:text-4xl font-bold text-foreground mb-2'>
                {achievement.number}
              </div>
              <div className='text-muted-foreground font-medium'>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        <div className='grid lg:grid-cols-2 gap-8 mb-8'>
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className='hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <CardContent className='flex flex-col gap-4 h-full'>
                <div className='flex items-center gap-4'>
                  <div className='size-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <item.icon className='size-7 text-primary-foreground' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    {item.title}
                  </h3>
                </div>

                <p className='text-muted-foreground leading-relaxed'>
                  {item.description}
                </p>

                <div className='space-y-3'>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center'>
                      <CheckCircle className='size-5 text-green-500 mr-3 flex-shrink-0' />
                      <span className='text-foreground'>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className='bg-gradient-to-r from-blue-600 to-blue-800 p-6 md:p-12 text-primary-foreground'>
          <CardContent className='p-0'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold mb-4'>Success Stories</h3>
              <p className='text-primary-foreground/90 text-lg max-w-2xl mx-auto'>
                See how REA has transformed careers and organizations worldwide
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
              <div className='bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='text-3xl font-bold mb-2'>40%</div>
                <div className='text-primary-foreground/90 mb-4'>
                  Average Reduction in Downtime
                </div>
                <p className='text-primary-foreground/80 text-sm'>
                  Organizations implementing REA-trained professionals&apos;
                  recommendations
                </p>
              </div>

              <div className='bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='text-3xl font-bold mb-2'>25%</div>
                <div className='text-primary-foreground/90 mb-4'>
                  Average Salary Increase
                </div>
                <p className='text-primary-foreground/80 text-sm'>
                  Within 12 months of certification completion
                </p>
              </div>

              <div className='bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='text-3xl font-bold mb-2'>95%</div>
                <div className='text-primary-foreground/90 mb-4'>
                  Career Advancement Rate
                </div>
                <p className='text-primary-foreground/80 text-sm'>
                  Professionals reporting career progression within 2 years
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='text-center mt-16'>
          <h3 className='text-3xl font-bold text-foreground mb-6'>
            Ready to Advance Your Reliability Engineering Career?
          </h3>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Join thousands of professionals who have transformed their careers
            with REA&apos;s world-class training and certification programs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-primary text-white border-primary border-2 font-bold py-6 px-8'>
              Explore Programs
            </Button>
            <ScheduleConsultation />
          </div>
        </div>
      </Container>
    </section>
  );
}
