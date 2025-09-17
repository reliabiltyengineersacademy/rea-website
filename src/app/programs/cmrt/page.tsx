import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Wrench,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
  benefits,
  eligibilityRequirements,
  examTopics,
  practicalSkills,
} from '@/constants/programs/cmrtCertification';
import { raseCourses, raseInfo } from '@/constants/programs/rasePartnerCourses';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CMRTCertification = () => {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Award className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  Technician Certification
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                CMRT Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Certified Maintenance & Reliability Technician - The premier
                certification for hands-on maintenance professionals focused on
                practical reliability tools and techniques.
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
                    <div className='text-3xl font-bold mb-2'>8,000+</div>
                    <div className='text-primary-foreground/80'>
                      Certified Technicians
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>40+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>20%</div>
                    <div className='text-primary-foreground/80'>
                      Average Salary Increase
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>92%</div>
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
                The Certified Maintenance & Reliability Technician (CMRT)
                certification is designed for hands-on maintenance professionals
                who want to validate their technical skills and knowledge in
                reliability practices. This certification focuses on practical
                applications and real-world maintenance scenarios.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                CMRT certification demonstrates your competency in maintenance
                fundamentals, equipment troubleshooting, condition monitoring
                techniques, and reliability-focused maintenance practices that
                are essential for modern industrial operations.
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
                    3-hour computer-based exam
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    200 multiple-choice questions
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Valid for 3 years
                  </span>
                </div>
                <div className='flex items-center'>
                  <Wrench className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Hands-on focused content
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
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Minimum Requirements
                  </h3>
                  <ul className='space-y-3'>
                    {eligibilityRequirements.map((req, index) => (
                      <li key={index} className='flex items-start'>
                        <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground'>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Recommended Experience
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Experience with mechanical systems maintenance
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Basic electrical troubleshooting skills
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Familiarity with maintenance tools and equipment
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Understanding of safety procedures
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
            Exam Content Areas
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {examTopics.map((topic, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {topic.category}
                    </h3>
                    <Badge
                      variant='secondary'
                      className='bg-primary/10 text-primary'
                    >
                      {topic.percentage}
                    </Badge>
                  </div>
                  <div className='space-y-2'>
                    {topic.topics.map((item, itemIndex) => (
                      <div key={itemIndex} className='flex items-center'>
                        <div className='w-2 h-2 bg-primary rounded-full mr-3'></div>
                        <span className='text-muted-foreground'>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Key Practical Skills
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {practicalSkills.map((skill, index) => (
              <Card key={index} className='p-6 text-center'>
                <CardContent>
                  <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <skill.icon className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {skill.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            REA CMRT Preparation Course
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Hands-On Training Program
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our CMRT preparation course emphasizes practical, hands-on
                    learning with real-world scenarios and equipment-based
                    exercises designed to prepare you for both the exam and your
                    daily work responsibilities.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Expert technician and certified reliability professional.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        30+ hours of practical training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Hands-on workshops and labs
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
                        Expert technician instructors
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
                        Module 1: Safety & Fundamentals
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Safety procedures, tools, and basic principles
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 2: Mechanical Systems
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Pumps, bearings, belts, and mechanical components
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 3: Electrical Systems
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Motors, controls, and electrical troubleshooting
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Module 4: Reliability Practices
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        PM, condition monitoring, and failure analysis
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Partner Training Programs
          </h2>
          <Card className='bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-8 mb-8'>
            <CardContent>
              <div className='flex items-start mb-6'>
                <div className='relative w-16 h-16 mr-6 flex-shrink-0'>
                  <Image
                    src='/rase-logo.png'
                    alt='RASE Technical Training Centre Logo'
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    {raseInfo.name}
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    {raseInfo.description}
                  </p>
                  <div className='flex items-center text-blue-600 dark:text-blue-400'>
                    <ExternalLink className='h-4 w-4 mr-2' />
                    <a
                      href={raseInfo.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline font-medium'
                    >
                      Visit RASE Training Center
                    </a>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {raseInfo.benefits.map((benefit, index) => (
                  <div key={index} className='flex items-center'>
                    <CheckCircle className='h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0' />
                    <span className='text-sm text-muted-foreground'>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {raseCourses.map((course, index) => (
              <Card
                key={index}
                className='p-6 hover:shadow-lg transition-shadow'
              >
                <CardContent>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4'>
                      <course.icon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='flex flex-col items-end'>
                      <Badge variant='secondary' className='mb-2'>
                        {course.level}
                      </Badge>
                      <span className='text-sm text-muted-foreground'>
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className='text-lg font-semibold text-foreground mb-3 line-clamp-2'>
                    {course.title}
                  </h3>

                  <p className='text-muted-foreground text-sm mb-4 line-clamp-3'>
                    {course.description}
                  </p>

                  <div className='space-y-2 mb-4'>
                    {course.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0'></div>
                          <span className='text-xs text-muted-foreground'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    {course.features.length > 3 && (
                      <div className='text-xs text-muted-foreground'>
                        +{course.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <a
                    href={course.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm'
                  >
                    Learn More
                    <ExternalLink className='h-3 w-3 ml-1' />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
          <CardContent>
            <h2 className='text-3xl font-bold mb-4'>
              Advance Your Technical Career
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join thousands of maintenance technicians who have earned CMRT
              certification and enhanced their technical credibility and career
              prospects.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in CMRT Course
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

export default CMRTCertification;
