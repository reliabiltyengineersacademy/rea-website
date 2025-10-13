import { Shield, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import { services, standards } from '@/constants/our-services/asssetIntegrity';

export default function AssetIntegrityPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 dark:from-orange-900 dark:via-orange-800 dark:to-orange-900 text-foreground'>
        <Container className='py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center bg-orange-200/50 dark:bg-orange-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-orange-300/50 dark:border-orange-700/50'>
              <Shield className='h-6 w-6 mr-3 text-orange-700 dark:text-orange-300' />
              <span className='text-lg font-medium text-orange-800 dark:text-orange-200'>
                Asset Integrity
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
              Asset Integrity &<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800 dark:from-orange-400 dark:to-orange-600'>
                Risk-Based Inspection (RBI)
              </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
              Through our RBI methodologies, REA provides a comprehensive
              risk-ranking model that supports inspection planning, compliance
              assurance, and asset lifecycle optimization. Our services are
              fully aligned with international standards and client-specific
              requirements.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-4'
              >
                Start Assessment
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4'
              >
                Learn More
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
                Comprehensive Risk Management
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Our asset integrity services deliver compliance-readiness and
                improved resource prioritization through systematic risk
                assessment and inspection optimization. We help organizations
                maintain asset reliability while minimizing inspection costs and
                downtime.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                By aligning with international standards and industry best
                practices, we ensure your assets operate safely, efficiently,
                and in compliance with regulatory requirements.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='px-6 py-3'>Request Assessment</Button>
                <Button variant='outline' className='px-6 py-3'>
                  View Standards
                </Button>
              </div>
            </div>

            <Card className='p-8'>
              <CardContent>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  Key Benefits
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Risk Reduction
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Systematic identification and mitigation of asset risks
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Cost Optimization
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Optimized inspection schedules and resource allocation
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Compliance Assurance
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Full adherence to international standards and
                        regulations
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Performance Improvement
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Enhanced asset reliability and operational efficiency
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Comprehensive Asset Integrity Services
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our integrated approach covers all aspects of asset integrity
              management and risk-based inspection.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300'
              >
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6'>
                    <Shield className='h-6 w-6 text-white' />
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
              Standards & Compliance
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our services are fully aligned with leading international
              standards and industry-specific protocols.
            </p>
          </div>

          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {standards.map((standard, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors'
                  >
                    <CheckCircle className='h-5 w-5 text-orange-600 mr-3 flex-shrink-0' />
                    <span className='text-foreground font-medium'>
                      {standard}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='text-center'>
          <Card className='bg-gradient-to-r from-orange-600 to-orange-700 p-12 text-white'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>
                  Ready to Optimize Your Asset Integrity?
                </h2>
                <p className='text-xl text-orange-100 leading-relaxed mb-8'>
                  Partner with REA to implement comprehensive asset integrity
                  management and risk-based inspection strategies that ensure
                  compliance, safety, and optimal performance.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-orange-600 hover:bg-orange-50 px-8 py-4'
                  >
                    Start Assessment
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 bg-transparent'
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
