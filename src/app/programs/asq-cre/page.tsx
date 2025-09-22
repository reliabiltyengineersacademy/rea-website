import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

import {
  targetAudience,
  benefits,
  examDomains,
  careerBenefits,
  eligibilityOptions,
  examDetails,
  preparationModules,
} from '@/constants/programs/asqCreCertification';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ASQCRECertification = () => {
  return (
    <div className='pt-24 min-h-screen bg-background'>
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
                ASQ CRE Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Certified Reliability Engineer - The premier certification for
                professionals specializing in performance evaluation and
                prediction to enhance product and system safety, reliability,
                and maintainability.
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
                  className='border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 bg-transparent'
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
                    <div className='text-3xl font-bold mb-2'>78%</div>
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
                The ASQ Certified Reliability Engineer (CRE) certification is
                designed for professionals who understand the principles of
                performance evaluation and prediction to enhance product and
                system safety, reliability, and maintainability. This advanced
                certification covers the entire product lifecycle from design
                through disposal.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                CRE certification validates your expertise in reliability
                engineering principles, failure analysis, reliability testing,
                and program management. It demonstrates your ability to improve
                product reliability, reduce costs, and enhance customer
                satisfaction.
              </p>
            </div>
            <Card className='p-8'>
              <CardHeader>
                <CardTitle className='text-xl'>Exam Details</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.duration}
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.questions}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Valid for {examDetails.validity}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Shield className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Professional level certification
                  </span>
                </div>
                <div className='flex items-center'>
                  <Award className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.recertification}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Who Should Pursue ASQ CRE?
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {targetAudience.map((audience, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <h3 className='text-xl font-semibold text-foreground mb-4'>
                    {audience.title}
                  </h3>
                  <p className='text-muted-foreground'>
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            Exam Content Areas
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
            Career Impact
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {careerBenefits.map((benefit, index) => (
              <Card key={index} className='p-6 text-center'>
                <CardContent>
                  <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <benefit.icon className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {benefit.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
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
                <CardHeader>
                  <CardTitle className='text-xl'>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3'>
                    {option.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className='flex items-start'>
                        <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground'>
                          {requirement}
                        </span>
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
            REA ASQ CRE Preparation Course
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive CRE Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our ASQ CRE preparation course is designed for experienced
                    professionals seeking to master reliability engineering
                    principles and become certified reliability engineers.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Senior reliability engineering consultant and ASQ CRE
                    certified professional.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        60+ hours of comprehensive training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world case studies and examples
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Practice exams and mock tests
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert mentorship and support
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Training Modules</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    {preparationModules.map((module, index) => (
                      <div key={index} className='border-l-4 border-primary pl-4'>
                        <h5 className='font-semibold text-foreground'>
                          Module {index + 1}: {module.title}
                        </h5>
                        <p className='text-muted-foreground text-sm mb-2'>
                          {module.description}
                        </p>
                        <div className='flex flex-wrap gap-1'>
                          {module.topics.slice(0, 2).map((topic, topicIndex) => (
                            <Badge
                              key={topicIndex}
                              variant='outline'
                              className='text-xs'
                            >
                              {topic}
                            </Badge>
                          ))}
                          {module.topics.length > 2 && (
                            <Badge variant='outline' className='text-xs'>
                              +{module.topics.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
          <CardContent>
            <h2 className='text-3xl font-bold mb-4'>
              Become a Certified Reliability Engineer
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join the elite group of professionals qualified to enhance product
              and system reliability across industries worldwide.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in CRE Course
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent'
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

export default ASQCRECertification;
