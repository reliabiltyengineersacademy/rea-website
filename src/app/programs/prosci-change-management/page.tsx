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
  learningObjectives,
  programModules,
  careerBenefits,
  eligibilityRequirements,
  examDetails,
  programFeatures,
  industryStats,
} from '@/constants/programs/prosciChangeManagementCertification';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProsciChangeManagementCertification = () => {
  return (
    <div className='min-h-screen bg-background'>
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
                Prosci Change Management Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Certified Change Management Specialist - The world-class
                certification program that equips you with the tools, expertise,
                and ongoing support needed to lead successful organizational
                change.
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
                  {industryStats.map((stat, index) => (
                    <div key={index} className='text-center'>
                      <div className='text-3xl font-bold mb-2'>{stat.stat}</div>
                      <div className='text-primary-foreground/80 text-sm'>
                        {stat.label}
                      </div>
                    </div>
                  ))}
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
                Prosci&apos;s Change Management Certification Program is the
                global standard for change management training. This immersive
                learning experience gives you the knowledge, skills, and tools
                to drive successful organizational change using Prosci&apos;s
                proven methodology and ADKAR Model.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                During the program, you&apos;ll apply Prosci&apos;s methodology
                to one of your active projects, interact with peers, and gain
                access to industry-leading tools. Graduates earn the distinction
                of being a Prosci Certified Change Practitioner.
              </p>
            </div>
            <Card className='p-8'>
              <CardHeader>
                <CardTitle className='text-xl'>Program Details</CardTitle>
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
                    {examDetails.format}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.validity}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Shield className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.credits}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Award className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Lifetime certification
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Who Should Pursue This Certification?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
            Program Benefits
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
            Learning Objectives
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {learningObjectives.map((objective, index) => (
              <Card key={index} className='p-6'>
                <CardContent>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {objective.objective}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Program Agenda
          </h2>
          <div className='space-y-6'>
            {programModules.map((module, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {module.day}: {module.title}
                    </h3>
                    <Badge
                      variant='secondary'
                      className='bg-primary/10 text-primary'
                    >
                      {module.day}
                    </Badge>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4'>
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-primary mr-3 flex-shrink-0' />
                        <span className='text-muted-foreground text-sm'>
                          {topic}
                        </span>
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
            Career Impact
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
            Program Features
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {programFeatures.map((feature, index) => (
              <Card key={index} className='p-8'>
                <CardHeader>
                  <CardTitle className='text-xl'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {feature.description}
                  </p>
                  <ul className='space-y-2'>
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-primary mr-3 flex-shrink-0' />
                        <span className='text-muted-foreground text-sm'>
                          {item}
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
            Eligibility Requirements
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {eligibilityRequirements.map((requirement, index) => (
              <Card key={index} className='p-8'>
                <CardHeader>
                  <CardTitle className='text-xl'>{requirement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3'>
                    {requirement.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className='flex items-start'>
                        <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground text-sm'>
                          {req}
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
            REA Prosci Change Management Preparation
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive Change Management Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our Prosci Change Management preparation course is designed
                    for professionals seeking to master organizational change
                    management and become certified change practitioners.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Senior change management consultant and Prosci certified
                    practitioner.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        3-5 days of intensive training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real project application during training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Access to Prosci tools and resources
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert mentorship and peer learning
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      Training Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        ADKAR Model Mastery
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Learn to apply the ADKAR Model for individual change
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        3-Phase Process
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Master Prosci&apos;s 3-Phase Process for organizational
                        change
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        PCT Model Application
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Understand the Project, Change, and Technical aspects
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Change Management Planning
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Develop comprehensive change management plans
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
              Become a Certified Change Management Specialist
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join 150,000+ certified practitioners worldwide and master the art
              of successful organizational change with Prosci&apos;s proven
              methodology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in Change Management Course
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

export default ProsciChangeManagementCertification;
