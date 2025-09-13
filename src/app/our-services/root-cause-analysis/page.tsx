import Image from 'next/image';
import { Target, Search, CheckCircle } from 'lucide-react';

import {
  methodologies,
  processSteps,
} from '@/constants/our-services/rootCauseAnalysis';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function RootCauseAnalysisPage() {
  return (
    <div className='pt-20 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 text-foreground'>
        <Container className='py-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-purple-200/50 dark:bg-purple-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-purple-300/50 dark:border-purple-700/50'>
                <Target className='h-6 w-6 mr-3 text-purple-700 dark:text-purple-300' />
                <span className='text-lg font-medium text-purple-800 dark:text-purple-200'>
                  Root Cause Analysis
                </span>
              </div>

              <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
                Root Cause Failure Analysis
                <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600'>
                  (RCFA)
                </span>
              </h1>

              <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
                Our structured RCFA process helps organizations identify and
                eliminate the root causes of recurring failures. We apply
                globally accepted frameworks and industry tools to deliver
                actionable insights and long-term corrective actions.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4'
                >
                  Start Investigation
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4'
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-200/50 to-purple-300/50 dark:from-purple-800/50 dark:to-purple-700/50 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-3xl p-6 border border-purple-200/30 dark:border-purple-700/30 shadow-2xl'>
                  <Image
                    src='/assets/root-cause-analysis.jpeg'
                    alt='Root Cause Analysis Process'
                    width={700}
                    height={560}
                    className='h-96 w-auto object-contain drop-shadow-lg rounded-2xl'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className='py-16'>
        <div className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Systematic Problem Solving
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Our RCFA services go beyond symptom treatment to identify and
                address the fundamental causes of failures. This approach
                enhances operational resilience and supports continuous
                improvement initiatives across your organization.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                By eliminating root causes rather than just treating symptoms,
                we help organizations prevent recurrence, reduce costs, and
                improve overall system reliability and performance.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='px-6 py-3'>Request Investigation</Button>
                <Button variant='outline' className='px-6 py-3'>
                  View Case Studies
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
                        Prevents Recurrence
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Eliminates root causes to prevent future failures
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Reduces Costs
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Minimizes repeated failures and associated costs
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Improves Safety
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Identifies and addresses safety-related root causes
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Enhances Learning
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Builds organizational knowledge and capability
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
              Proven RCFA Methodologies
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              We employ multiple internationally recognized methodologies to
              ensure comprehensive and accurate root cause identification.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {methodologies.map((method, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300'
              >
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6'>
                    <Search className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-4'>
                    {method.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {method.description}
                  </p>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-foreground mb-2'>
                      Key Benefits:
                    </h4>
                    {method.benefits.map((benefit, benefitIndex) => (
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
              Our RCFA Process
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our structured approach ensures thorough investigation and
              effective corrective action implementation.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {processSteps.map((step, index) => (
              <Card key={index} className='p-6'>
                <CardContent>
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4'>
                    <span className='text-white font-bold text-sm'>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold text-foreground mb-3'>
                    {step}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <Card className='bg-gradient-to-r from-purple-600 to-purple-700 p-12 text-white'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>
                  Need Root Cause Analysis Support?
                </h2>
                <p className='text-xl text-purple-100 leading-relaxed mb-8'>
                  Partner with REA to systematically identify and eliminate the
                  root causes of recurring failures. Transform incidents into
                  learning opportunities and prevent future occurrences.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-purple-600 hover:bg-purple-50 px-8 py-4'
                  >
                    Start Investigation
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4'
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
