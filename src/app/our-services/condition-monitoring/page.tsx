import { BarChart3, CheckCircle } from 'lucide-react';

import {
  services,
  benefits,
  technologies,
  implementationProcess,
} from '@/constants/our-services/conditionMonitoring';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function ConditionMonitoringPage() {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-green-100 via-green-200 to-green-100 dark:from-green-900 dark:via-green-800 dark:to-green-900 text-foreground'>
        <Container className='py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center bg-green-200/50 dark:bg-green-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-green-300/50 dark:border-green-700/50'>
              <BarChart3 className='h-6 w-6 mr-3 text-green-700 dark:text-green-300' />
              <span className='text-lg font-medium text-green-800 dark:text-green-200'>
                Condition Monitoring
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
              Condition Monitoring &<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600'>
                Predictive Maintenance Solutions
              </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
              Our condition-based services empower clients to monitor asset
              health in real time, enabling early detection of performance
              degradation and fault development. REA offers comprehensive
              monitoring solutions across multiple technologies and industries.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-green-600 hover:bg-green-700 text-white px-8 py-4'
              >
                Explore Solutions
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4'
              >
                Request Demo
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
                Real-Time Asset Intelligence
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                By integrating IIoT-enabled monitoring tools and advanced
                analytics, we help clients optimize maintenance schedules,
                minimize failure risks, and avoid unscheduled shutdowns. Our
                solutions provide continuous visibility into asset performance
                and health.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Our condition monitoring services transform reactive maintenance
                into proactive, data-driven decision making, resulting in
                improved reliability, reduced costs, and enhanced operational
                efficiency.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='px-6 py-3'>Schedule Assessment</Button>
                <Button variant='outline' className='px-6 py-3'>
                  View Technology
                </Button>
              </div>
            </div>

            <Card className='p-8'>
              <CardContent>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  Key Benefits
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
              Comprehensive Monitoring Services
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our multi-technology approach ensures comprehensive coverage of
              all critical asset components and failure modes.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <CardContent>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className='h-8 w-8 text-white' />
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
              Advanced Technology Integration
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              We leverage cutting-edge technologies to deliver intelligent,
              scalable, and cost-effective monitoring solutions.
            </p>
          </div>

          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors'
                  >
                    <CheckCircle className='h-5 w-5 text-primary mr-3 flex-shrink-0' />
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
              Our structured approach ensures successful deployment and adoption
              of condition monitoring solutions.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {implementationProcess.map((phase, index) => (
              <Card key={index} className='p-6 text-center'>
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-primary-foreground font-bold text-lg'>
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
          <Card className='bg-gradient-to-r from-green-600 to-green-700 p-12 text-white'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>
                  Ready to Implement Condition Monitoring?
                </h2>
                <p className='text-xl text-green-100 leading-relaxed mb-8'>
                  Transform your maintenance approach with REA&apos;s
                  comprehensive condition monitoring solutions. Start your
                  journey towards predictive maintenance excellence today.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-green-600 hover:bg-green-50 px-8 py-4'
                  >
                    Get Started
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4'
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
