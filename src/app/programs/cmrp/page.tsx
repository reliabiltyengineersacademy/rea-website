import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Star,
} from 'lucide-react';
import Link from 'next/link';

import {
  benefits,
  eligibilityOptions,
  examDomains,
} from '@/constants/programs/cmrpCertification';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CMRPCertification = () => {
  return (
    <div className='pt-20 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Award className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  Professional Certification
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                CMRP Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Certified Maintenance & Reliability Professional - The global
                gold-standard certification that validates your expertise in
                maintenance and reliability engineering.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href='/pricing'>
                  <Button
                    size='lg'
                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4'
                  >
                    Enroll Now
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </Link>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4'
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>15,000+</div>
                    <div className='text-primary-foreground/80'>
                      Certified Professionals
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>50+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>25%</div>
                    <div className='text-primary-foreground/80'>
                      Average Salary Increase
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>95%</div>
                    <div className='text-primary-foreground/80'>Pass Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Certification Overview
          </h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                The Certified Maintenance & Reliability Professional (CMRP)
                certification is the premier credential for maintenance and
                reliability professionals worldwide. Administered by the Society
                for Maintenance & Reliability Professionals (SMRP), this
                certification validates your knowledge and expertise across all
                aspects of maintenance and reliability.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                CMRP certification demonstrates your commitment to professional
                excellence and provides recognition of your skills in
                maintenance planning, reliability engineering, asset management,
                and organizational leadership.
              </p>
            </div>
            <Card className='p-8'>
              <CardHeader>
                <CardTitle className='text-xl'>Certification Details</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    4-hour computer-based exam
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    300 multiple-choice questions
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Valid for 3 years
                  </span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Internationally recognized
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Certification Benefits
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-start'>
                <CheckCircle className='h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0' />
                <span className='text-muted-foreground'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Eligibility Requirements
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {eligibilityOptions.map((option, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    {option.title}
                  </h3>
                  <ul className='space-y-3'>
                    {option.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className='flex items-start'>
                        <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground'>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Exam Content Domains
          </h2>
          <div className='space-y-6'>
            {examDomains.map((domain, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {domain.domain}
                    </h3>
                    <Badge
                      variant='secondary'
                      className='bg-primary/10 text-primary'
                    >
                      {domain.percentage}
                    </Badge>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {domain.topics.map((topic, topicIndex) => (
                      <Badge
                        key={topicIndex}
                        variant='outline'
                        className='text-sm'
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            REA CMRP Preparation Course
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive Preparation Program
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our CMRP preparation course is designed by industry experts
                    and covers all exam domains with practical examples, case
                    studies, and hands-on exercises.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Certified reliability expert with over 15 years of industry
                    experience.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        40+ hours of comprehensive training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Practice exams and assessments
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert instructor support
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Study materials and resources
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Course Modules</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 1: Business & Management
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Strategic planning, leadership, and financial management
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 2: Manufacturing Process Reliability
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Process optimization and quality systems
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 3: Equipment Reliability
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Asset management and reliability engineering
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 4: Work Management
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Planning, scheduling, and performance measurement
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 5: Defect Elimination
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Root cause analysis and preventive maintenance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
          <CardContent>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Advance Your Career?
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join thousands of professionals who have achieved CMRP
              certification and taken their careers to the next level.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in CMRP Course
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CMRPCertification;
