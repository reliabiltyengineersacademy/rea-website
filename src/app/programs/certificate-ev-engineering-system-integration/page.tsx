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
  Wrench,
  Battery,
  Car,
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
  certificationRequirements,
  careerPaths,
} from '@/constants/programs/certificateEvEngineeringSystemIntegration';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificateEvEngineeringSystemIntegration = () => {
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
                Certificate in EV Engineering & System Integration
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Master the cutting-edge technologies and engineering principles
                driving the electric vehicle revolution. Develop expertise in EV
                systems, battery technology, power electronics, and vehicle
                integration to become a certified EV engineering specialist.
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
            Program Overview
          </h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                The Certificate in EV Engineering & System Integration is a
                comprehensive program designed to equip engineers and
                professionals with the specialized knowledge and skills required
                in the rapidly growing electric vehicle industry. This program
                covers all aspects of EV technology from fundamental principles
                to advanced system integration.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Through this program, you'll master battery technology, power
                electronics, motor control systems, vehicle integration, and
                charging infrastructure. The curriculum combines theoretical
                knowledge with hands-on practical experience, ensuring you can
                immediately contribute to EV development projects.
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
            Who Should Pursue This Certificate?
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
            Career Paths and Opportunities
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {careerPaths.map((path, index) => (
              <Card key={index} className='p-6'>
                <CardContent>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    {path.role}
                  </h3>
                  <p className='text-muted-foreground text-sm mb-3'>
                    {path.description}
                  </p>
                  <Badge variant='outline' className='text-primary'>
                    {path.salary}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Certification Requirements
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {certificationRequirements.map((requirement, index) => (
              <Card key={index} className='p-8'>
                <CardHeader>
                  <CardTitle className='text-xl'>{requirement.requirement}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    {requirement.description}
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
            REA EV Engineering & System Integration Program
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive EV Engineering Education
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our Certificate in EV Engineering & System Integration
                    program provides comprehensive training in all aspects of
                    electric vehicle technology, from fundamental principles to
                    advanced system integration and real-world applications.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Senior EV engineering consultant and expert with extensive
                    experience in electric vehicle development and system
                    integration.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        100+ hours of comprehensive training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world case studies and industry applications
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Access to advanced EV design and simulation tools
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Expert mentorship and industry connections
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>Program Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Battery Technology Mastery
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Learn advanced battery systems, management, and safety protocols
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Power Electronics & Motor Control
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Master power conversion, motor drives, and control systems
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Vehicle System Integration
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Develop skills in EV architecture and system integration
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Charging Infrastructure
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Understand charging systems, grid integration, and smart charging
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
              Earn Your Certificate in EV Engineering & System Integration
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join the electric vehicle revolution and advance your career with
              comprehensive expertise in EV engineering, system integration, and
              cutting-edge technologies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in EV Engineering Program
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

export default CertificateEvEngineeringSystemIntegration;
