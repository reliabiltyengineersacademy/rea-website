import { Zap, CheckCircle } from 'lucide-react';

import {
  services,
  benefits,
  technologies,
} from '@/constants/our-services/digitalEnablement';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function DigitalEnablementPage() {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 dark:from-teal-900 dark:via-teal-800 dark:to-teal-900 text-foreground'>
        <Container className='py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center bg-teal-200/50 dark:bg-teal-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-teal-300/50 dark:border-teal-700/50'>
              <Zap className='h-6 w-6 mr-3 text-teal-700 dark:text-teal-300' />
              <span className='text-lg font-medium text-teal-800 dark:text-teal-200'>
                Digital Enablement
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
              Digital Enablement &<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800 dark:from-teal-400 dark:to-teal-600'>
                Consulting
              </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
              We partner with clients to enable digital transformation in asset
              management. From deploying predictive maintenance software to
              building real-time dashboards and analytics workflows, REA
              provides the digital tools and consulting expertise required to
              modernize legacy maintenance systems.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-teal-600 hover:bg-teal-700 text-white px-8 py-4'
              >
                Start Digital Journey
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4'
              >
                View Solutions
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className='py-16'>
        <div className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Digital Transformation Excellence
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Our digital enablement services help organizations modernize
                their asset management approach through cutting-edge
                technologies and data-driven solutions. We provide comprehensive
                support from strategy development to implementation and ongoing
                optimization.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                By integrating advanced analytics, IoT technologies, and cloud
                platforms, we enable organizations to achieve unprecedented
                visibility into asset performance and optimize maintenance
                operations.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='px-6 py-3'>Request Consultation</Button>
                <Button variant='outline' className='px-6 py-3'>
                  View Case Studies
                </Button>
              </div>
            </div>

            <Card className='p-8'>
              <CardContent>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  Digital Benefits
                </h3>
                <div className='space-y-4'>
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className='flex items-start'>
                      <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                      <span className='text-foreground'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Comprehensive Digital Services
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our integrated approach covers all aspects of digital
              transformation in asset management.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300'
              >
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6'>
                    <service.icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {service.description}
                  </p>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-foreground mb-2'>
                      Key Benefits:
                    </h4>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className='flex items-center'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3'></div>
                        <span className='text-muted-foreground text-sm'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Technology Stack
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              We leverage cutting-edge technologies to deliver intelligent,
              scalable, and cost-effective digital solutions.
            </p>
          </div>

          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors'
                  >
                    <CheckCircle className='h-5 w-5 text-teal-600 mr-3 flex-shrink-0' />
                    <span className='text-foreground font-medium'>{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Implementation Process
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our structured approach ensures successful digital transformation
              with clear milestones and measurable outcomes.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Strategy & Planning',
                description:
                  'Digital strategy development and technology roadmap creation.',
              },
              {
                step: '02',
                title: 'Solution Design',
                description:
                  'Custom solution design and architecture development.',
              },
              {
                step: '03',
                title: 'Implementation',
                description:
                  'System deployment, integration, and configuration.',
              },
              {
                step: '04',
                title: 'Optimization',
                description:
                  'Performance monitoring, optimization, and continuous improvement.',
              },
            ].map((phase, index) => (
              <Card key={index} className='p-6 text-center'>
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-white font-bold text-lg'>
                      {phase.step}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold text-foreground mb-3'>
                    {phase.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <Card className='bg-gradient-to-r from-teal-600 to-teal-700 p-12 text-white'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>
                  Ready to Transform Your Digital Capabilities?
                </h2>
                <p className='text-xl text-teal-100 leading-relaxed mb-8'>
                  Partner with REA to modernize your asset management with
                  cutting-edge digital solutions. Start your digital
                  transformation journey today.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-teal-600 hover:bg-teal-50 px-8 py-4'
                  >
                    Start Digital Journey
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4'
                  >
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
