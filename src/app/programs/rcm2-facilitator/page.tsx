import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Presentation,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

import {
  benefits,
  targetAudience,
  courseModules,
  facilitatorSkills,
  prerequisites,
  certificationDetails,
} from '@/constants/programs/rcm2Facilitator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RCM2Facilitator = () => {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Presentation className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  Advanced RCM2 Training
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                RCM2 Facilitator Training Course
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Become a certified RCM2 facilitator and lead maintenance strategy
                development initiatives. Master advanced facilitation skills and
                become an expert in RCM2 program implementation.
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
                    <div className='text-3xl font-bold mb-2'>500+</div>
                    <div className='text-primary-foreground/80'>
                      Certified Facilitators
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>25+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>40%</div>
                    <div className='text-primary-foreground/80'>
                      Maintenance Improvement
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>98%</div>
                    <div className='text-primary-foreground/80'>Success Rate</div>
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
            Course Overview
          </h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                The RCM2 Facilitator Training Course is designed for experienced
                RCM2 practitioners who want to become certified facilitators.
                This advanced program develops the skills needed to lead RCM2
                studies, manage teams, and implement successful RCM2 programs
                within organizations.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Participants will master advanced facilitation techniques,
                complex RCM2 applications, and program management skills. The
                course includes extensive hands-on practice and culminates in a
                practical facilitation assessment.
              </p>
            </div>
            <Card className='p-8'>
              <CardHeader>
                <CardTitle className='text-xl'>Course Details</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {certificationDetails.duration} training
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {certificationDetails.format}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {certificationDetails.prerequisites}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Award className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {certificationDetails.certification}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Course Benefits
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
            Prerequisites
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                {prerequisites.map((prereq, index) => (
                  <div key={index} className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>{prereq}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Course Modules
          </h2>
          <div className='space-y-8'>
            {courseModules.map((module, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='grid lg:grid-cols-3 gap-8'>
                    <div>
                      <div className='flex items-center mb-4'>
                        <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4'>
                          <span className='text-primary-foreground font-bold text-lg'>
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-foreground'>
                            {module.module}
                          </h3>
                          <p className='text-primary font-medium'>
                            {module.duration}
                          </p>
                        </div>
                      </div>
                      <p className='text-muted-foreground mb-4'>
                        {module.description}
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-foreground mb-3'>
                        Key Topics
                      </h4>
                      <ul className='space-y-2'>
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className='flex items-center'>
                            <div className='w-2 h-2 bg-primary rounded-full mr-3'></div>
                            <span className='text-muted-foreground'>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-foreground mb-3'>
                        Learning Outcomes
                      </h4>
                      <ul className='space-y-2'>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Master advanced RCM2 facilitation techniques
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Lead complex RCM2 studies effectively
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Manage RCM2 teams and processes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Facilitator Skills Developed
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {facilitatorSkills.map((skill, index) => (
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
            Who Should Attend?
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
            Certification Process
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Assessment Requirements
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Complete all course modules and exercises
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Pass written examination on RCM2 theory
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Successfully facilitate a practice RCM2 study
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Receive positive peer evaluation feedback
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-foreground mb-6'>
                    Certification Details
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Valid for {certificationDetails.validity}
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        {certificationDetails.recertification}
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Internationally recognized certification
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        Access to facilitator resources and support
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
            REA RCM2 Facilitator Program
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Advanced Facilitator Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our RCM2 Facilitator Training Course is designed by
                    experienced facilitators and provides comprehensive training
                    in advanced RCM2 techniques, team leadership, and program
                    management. Participants gain hands-on experience through
                    extensive practical exercises and real-world case studies.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Master RCM2 facilitator with 20+ years of experience in
                    leading complex RCM2 studies across various industries.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Extensive hands-on facilitation practice
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world case studies and scenarios
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Peer evaluation and feedback sessions
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Comprehensive facilitator toolkit
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Program Features</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Advanced Facilitation
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Master-level facilitation techniques and strategies
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Team Leadership
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Leading diverse teams through complex RCM2 studies
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Program Management
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Managing large-scale RCM2 implementations
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Continuous Support
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Ongoing support and professional development
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
              Become an RCM2 Facilitator
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join the elite group of certified RCM2 facilitators and lead
              maintenance strategy transformation in your organization or as an
              independent consultant.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in Facilitator Course
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

export default RCM2Facilitator;
