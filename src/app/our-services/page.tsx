import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import { services, industries } from '@/constants/our-services/ourServices';

export default function OurServicesPage() {
  return (
    <div className='pt-20 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground'>
        <Container className='py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50'>
              <Settings className='h-6 w-6 mr-3 text-blue-700 dark:text-blue-300' />
              <span className='text-lg font-medium text-blue-800 dark:text-blue-200'>
                Our Services
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
              Strategic Reliability Solutions for
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600'>
                High-Performance Asset Operations
              </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
              At Reliability Engineers Academy (REA), we deliver a fully
              integrated suite of reliability engineering, condition monitoring,
              and asset performance management services—designed to support
              organizations operating in high-stakes, asset-intensive
              environments.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4'
              >
                Explore Our Services
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4'
              >
                Why Choose REA
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className='py-16'>
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Comprehensive Service Portfolio
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our value-driven solutions align with global best practices to
              help clients mitigate operational risks, reduce downtime, enhance
              asset utilization, and ensure compliance across complex industrial
              ecosystems.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group'
              >
                <CardContent>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed mb-6'>
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button
                      variant='outline'
                      className='w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
                    >
                      Learn More
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4'>
              <Globe className='h-5 w-5 mr-2' />
              <span className='font-medium'>Industries We Serve</span>
            </div>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Trusted by Leading Enterprises
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              As strategic partners to leading enterprises across diverse
              sectors, we enable transformation through data-driven maintenance
              optimization, predictive diagnostics, and workforce capability
              building.
            </p>
          </div>

          <Card className='p-8'>
            <CardContent>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors'
                  >
                    <CheckCircle className='h-5 w-5 text-primary mr-3 flex-shrink-0' />
                    <span className='text-foreground font-medium'>
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-20'>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl font-bold text-foreground mb-8'>
                  Strategic Partnership Approach
                </h2>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  At Reliability Engineers Academy, we go beyond technical
                  service delivery—we architect strategic, scalable, and
                  measurable solutions that elevate operational performance and
                  maximize asset returns.
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  Engage with REA to lead your organization into the future of
                  intelligent, reliability-driven operations.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button size='lg' className='px-8 py-4'>
                    Start Your Journey
                  </Button>
                  <Button variant='outline' size='lg' className='px-8 py-4'>
                    Schedule Consultation
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
