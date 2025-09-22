import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Shield,
  TrendingUp,
  Search,
  Target,
  Zap,
  BarChart3,
  Settings,
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
  keyTopics,
} from '@/constants/programs/assetPerformanceManagementCertification';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AssetPerformanceManagementCertification = () => {
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
                Asset Performance Management Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Master the art of optimizing asset reliability, availability, and
                performance while minimizing costs and operational risks. This
                comprehensive certification program equips you with advanced
                strategies and tools for superior asset management.
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
                Asset Performance Management (APM) is a strategic approach to
                optimizing the reliability, availability, and performance of
                physical assets while minimizing operational risks and costs.
                This certification program provides comprehensive training in APM
                principles, tools, and implementation strategies.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Through this program, you'll learn to leverage data analytics,
                predictive maintenance, and digital technologies to maximize
                asset value, reduce downtime, and improve operational efficiency
                across your organization.
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
                    Valid for {examDetails.validity}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Shield className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.recertification}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Award className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    {examDetails.credits}
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
            Program Curriculum
          </h2>
          <div className='space-y-6'>
            {programModules.map((module, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {module.module}
                    </h3>
                    <Badge
                      variant='secondary'
                      className='bg-primary/10 text-primary'
                    >
                      Module {index + 1}
                    </Badge>
                  </div>
                  <h4 className='text-lg font-medium text-foreground mb-4'>
                    {module.title}
                  </h4>
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
            Key Topics Covered
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {keyTopics.map((topic, index) => (
              <Card key={index} className='p-6'>
                <CardContent>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {topic.topic}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {topic.description}
                  </p>
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
            REA Asset Performance Management Training
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive APM Training Program
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our Asset Performance Management certification program is
                    designed for professionals seeking to master advanced asset
                    optimization strategies and digital transformation
                    methodologies.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Senior asset management consultant and APM expert with
                    extensive industry experience.
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
                        Real-world case studies and applications
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Access to APM software and tools
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert mentorship and ongoing support
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Training Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Predictive Maintenance Mastery
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Learn advanced predictive maintenance strategies and data analytics
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Asset Lifecycle Optimization
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Master techniques for optimizing asset performance throughout lifecycle
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Digital APM Implementation
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Understand how to implement digital APM solutions and technologies
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Performance Metrics & KPIs
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Develop and monitor key performance indicators for asset optimization
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
              Become a Certified Asset Performance Management Professional
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Master the art of asset optimization and drive significant
              improvements in performance, reliability, and cost reduction across
              your organization.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in APM Course
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

export default AssetPerformanceManagementCertification;
