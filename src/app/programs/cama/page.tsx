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
  assessmentAreas,
  careerBenefits,
} from '@/constants/programs/camaCertification';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CAMACertification = () => {
  return (
    <div className='pt-20 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Award className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  Expert Certification
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                CAMA Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Certified Asset Management Assessor - The premier certification
                for professionals specializing in asset management system
                assessment, auditing, and optimization.
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
                    <div className='text-3xl font-bold mb-2'>2,500+</div>
                    <div className='text-primary-foreground/80'>
                      Certified Assessors
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>35+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>35%</div>
                    <div className='text-primary-foreground/80'>
                      Average Salary Increase
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>88%</div>
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
                The Certified Asset Management Assessor (CAMA) certification is
                designed for professionals who specialize in evaluating,
                auditing, and optimizing asset management systems. This advanced
                certification focuses on assessment methodologies, ISO 55000
                standards, and best practices for asset management system
                evaluation.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                CAMA certification validates your expertise in conducting
                comprehensive asset management assessments, identifying
                improvement opportunities, and providing strategic
                recommendations to enhance organizational asset management
                maturity.
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
                    4-hour comprehensive exam
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    250 multiple-choice questions
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Valid for 3 years
                  </span>
                </div>
                <div className='flex items-center'>
                  <Shield className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Advanced level certification
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Who Should Pursue CAMA?
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
            Assessment Content Areas
          </h2>
          <div className='space-y-6'>
            {assessmentAreas.map((area, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {area.area}
                    </h3>
                    <Badge
                      variant='secondary'
                      className='bg-primary/10 text-primary'
                    >
                      {area.percentage}
                    </Badge>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {area.topics.map((topic, topicIndex) => (
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
            Prerequisites & Requirements
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Education & Experience
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Bachelor&apos;s degree in engineering or related field
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        5+ years of asset management experience
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Experience with ISO 55000 or similar standards
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Previous assessment or auditing experience preferred
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Recommended Knowledge
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Asset management principles and practices
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Risk management methodologies
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Financial analysis and lifecycle costing
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Performance measurement and KPIs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            REA CAMA Preparation Course
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Advanced Assessment Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our CAMA preparation course is designed for experienced
                    professionals seeking to master asset management assessment
                    methodologies and become certified assessors.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Senior asset management consultant and certified assessor.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        50+ hours of advanced training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world assessment case studies
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        ISO 55000 deep-dive sessions
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert assessor mentorship
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Training Modules</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 1: Assessment Fundamentals
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Assessment planning, methodology, and frameworks
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 2: ISO 55000 Standards
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Comprehensive coverage of ISO 55000 series
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 3: Evidence & Analysis
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Data collection, analysis, and gap identification
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 4: Reporting & Recommendations
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Assessment reporting and improvement planning
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
              Become a Certified Asset Management Assessor
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join the elite group of professionals qualified to assess and
              optimize asset management systems across industries worldwide.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in CAMA Course
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

export default CAMACertification;
