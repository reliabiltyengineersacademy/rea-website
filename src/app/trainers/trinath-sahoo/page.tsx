import { Metadata } from 'next';
import { Award, Mail, Phone, MapPin, Users, Globe, Briefcase, GraduationCap, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import ScheduleConsultation from '@/components/home/ScheduleConsultation';

export const metadata: Metadata = {
  title: 'Dr. Trinath Sahoo - Chief General Manager, IOCL | REA',
  description:
    'Meet Dr. Trinath Sahoo, a distinguished mechanical engineer and senior executive at Indian Oil Corporation Limited with 30+ years of experience in refinery operations, reliability engineering, and technical management.',
  keywords:
    'Dr. Trinath Sahoo, IOCL, Chief General Manager, Reliability Engineering, Refinery Operations, Root Cause Analysis, PhD Mechanical Engineering',
};

export default function TrinathSahooPage() {
  const education = [
    {
      degree: 'Doctor of Philosophy (PhD) in Mechanical Engineering',
      institution: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
      year: '2017',
      thesis: 'Studies of Hydrate Formation and Dissociation in Mixture of Gases in Presence of Promoters and Inhibitors'
    },
    {
      degree: 'Bachelor\'s Degree in Mechanical Engineering',
      institution: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
      year: 'Early Career',
      thesis: 'Foundational degree supporting early career in refinery engineering'
    }
  ];

  const careerPositions = [
    {
      title: 'Chief General Manager, ES&Inspection, M&C',
      company: 'Indian Oil Corporation Limited, Paradip Refinery, Odisha',
      period: 'Current (2020-Present)',
      description: 'Overseeing electrical systems, inspection protocols, maintenance strategies, and contract management for one of IOCL\'s flagship refineries. Focus on ensuring operational integrity, risk mitigation, and compliance in petroleum processing.'
    },
    {
      title: 'General Manager',
      company: 'Indian Oil Corporation Limited, Paradip Refinery, Odisha',
      period: 'Circa 2020–Present',
      description: 'Led technical and management initiatives in refinery operations, including reliability programs and equipment optimization. Authored key publications during this period, reflecting hands-on involvement in lubrication and failure analysis.'
    },
    {
      title: 'Deputy General Manager',
      company: 'Indian Oil Corporation Limited',
      period: 'Circa 2010s',
      description: 'Managed technical operations in refinery divisions, emphasizing design and engineering of piping, pressure vessels, and process equipment. Contributed to performance improvements in liquefied petroleum gas and condensate services.'
    },
    {
      title: 'Senior Manager / Chief Manager',
      company: 'Indian Oil Corporation Limited',
      period: 'May 2006–Present',
      description: 'Directed maintenance and reliability functions across refinery sites, including West Bengal\'s Refinery Division. Responsibilities included root cause analysis, shutdown planning, and turnaround management for process plants.'
    },
    {
      title: 'Deputy Manager (Maintenance)',
      company: 'Indian Oil Corporation Limited, Refinery Division, West Bengal',
      period: 'Early Career',
      description: 'Handled day-to-day maintenance of process equipment, focusing on engineering solutions for better performance in gas and condensate handling.'
    }
  ];

  const publications = [
    {
      title: 'Root Cause Failure Analysis: A Guide to Improve Plant Reliability',
      publisher: 'Wiley',
      year: '2021',
      description: 'A comprehensive resource on diagnostic methodologies for industrial equipment failures'
    },
    {
      title: 'Machinery Lubrication and Reliability',
      publisher: 'Industrial Press',
      year: '2020',
      description: 'Explores lubrication strategies to prevent bearing and machinery issues in process industries'
    },
    {
      title: 'Process Plants: Shutdown and Turnaround Management',
      publisher: 'Gulf Publishing',
      year: '2006',
      description: 'Provides frameworks for efficient plant maintenance cycles'
    }
  ];

  const achievements = [
    {
      title: 'Lifetime Achievement Award',
      organization: 'The Institution of Engineers, India',
      description: 'Acknowledges his lifelong dedication to advancing mechanical engineering practices in the hydrocarbon sector'
    },
    {
      title: 'Shortlisted for Lifetime Achievement Award',
      organization: 'Hydrocarbon Processing Magazine',
      description: 'Honored for exemplary leadership and technical advancements in petroleum processing'
    }
  ];

  const expertiseAreas = [
    {
      title: 'Reliability Engineering & Root Cause Analysis',
      description: 'Expert in diagnostic methodologies for industrial equipment failures and reliability enhancement'
    },
    {
      title: 'Refinery Operations & Maintenance',
      description: '30+ years of experience in maintenance and inspection of refinery equipment including piping, pressure vessels, and bearings'
    },
    {
      title: 'Shutdown & Turnaround Management',
      description: 'Specialized in efficient plant maintenance cycles and shutdown planning for process plants'
    },
    {
      title: 'Lubrication Systems & Failure Prevention',
      description: 'Expert in lubrication strategies to prevent bearing and machinery issues in process industries'
    },
    {
      title: 'Gas Hydrate Studies & Process Optimization',
      description: 'PhD research in hydrate formation and dissociation in gas mixtures with practical applications'
    },
    {
      title: 'Technical Leadership & Team Management',
      description: 'Proven leadership in technical teams within oil and gas operations and multinational collaboration'
    }
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-100 via-green-200 to-green-100 dark:from-green-900 dark:via-green-800 dark:to-green-900 text-foreground py-20'>
        <Container>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-green-200/50 dark:bg-green-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-green-300/50 dark:border-green-700/50'>
                <Award className='h-5 w-5 mr-2 text-green-700 dark:text-green-300' />
                <span className='text-sm font-medium text-green-800 dark:text-green-200'>
                  Expert Trainer
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
                Dr. Trinath Sahoo
              </h1>

              <p className='text-xl text-green-700 dark:text-green-300 mb-4 font-medium'>
                Chief General Manager, IOCL | PhD Mechanical Engineering
              </p>

              <p className='text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed'>
                "30+ years of progressive experience at Indian Oil Corporation Limited, renowned for expertise in technical management, reliability engineering, and process plant operations."
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <ScheduleConsultation className='bg-green-600 hover:bg-green-700 text-white px-8 py-4' />
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4'
                  asChild
                >
                  <a 
                    href='https://www.linkedin.com/in/trinath-sahoo-3a090114/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/30 dark:border-green-700/30'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-green-200/30 dark:bg-green-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Briefcase className='h-6 w-6 text-green-700 dark:text-green-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>30+</div>
                    <div className='text-green-700 dark:text-green-300 text-sm font-medium mb-1'>Years Experience</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>IOCL Refinery Operations</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-green-200/30 dark:bg-green-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Users className='h-6 w-6 text-green-700 dark:text-green-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>3+</div>
                    <div className='text-green-700 dark:text-green-300 text-sm font-medium mb-1'>Technical Books</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Published Author</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-green-200/30 dark:bg-green-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Globe className='h-6 w-6 text-green-700 dark:text-green-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>PhD</div>
                    <div className='text-green-700 dark:text-green-300 text-sm font-medium mb-1'>IIT(ISM) Dhanbad</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Mechanical Engineering</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-green-200/30 dark:bg-green-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Star className='h-6 w-6 text-green-700 dark:text-green-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>2</div>
                    <div className='text-green-700 dark:text-green-300 text-sm font-medium mb-1'>Lifetime Awards</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Engineering Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container>
          {/* Professional Overview */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Professional Overview
            </h2>
            <div className='max-w-4xl mx-auto'>
              <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                Dr. Trinath Sahoo is a distinguished mechanical engineer and senior executive in the oil and gas sector, renowned for his extensive expertise in technical management, reliability engineering, and process plant operations. With over 30 years of progressive experience at Indian Oil Corporation Limited (IOCL), he has held leadership roles focused on maintenance, inspection, and strategic oversight in refinery environments.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Currently serving as Chief General Manager for Electrical Systems & Inspection, Maintenance & Contracts (ES&Inspection, M&C) at IOCL's Paradip Refinery in Odisha, India, Dr. Sahoo has contributed significantly to enhancing plant reliability, shutdown management, and failure analysis practices. His career emphasizes innovation in petroleum processing, lubrication systems, and equipment performance, complemented by his authorship of influential technical books and publications.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Education & Academic Background
            </h2>
            <div className='space-y-6'>
              {education.map((edu, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-lg font-semibold text-foreground'>
                        {edu.degree}
                      </h3>
                      <Badge variant='secondary' className='ml-4'>
                        {edu.year}
                      </Badge>
                    </div>
                    <p className='text-green-700 dark:text-green-300 font-medium mb-2'>
                      {edu.institution}
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      {edu.thesis}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Progression */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Career Progression at IOCL
            </h2>
            <div className='space-y-6'>
              {careerPositions.map((position, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-lg font-semibold text-foreground'>
                        {position.title}
                      </h3>
                      <Badge variant='secondary' className='ml-4'>
                        {position.period}
                      </Badge>
                    </div>
                    <p className='text-green-700 dark:text-green-300 font-medium mb-2'>
                      {position.company}
                    </p>
                    <p className='text-muted-foreground'>
                      {position.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Areas of Expertise
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {expertiseAreas.map((area, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <h3 className='text-lg font-semibold text-foreground mb-3'>
                      {area.title}
                    </h3>
                    <p className='text-muted-foreground'>
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Published Works & Research
            </h2>
            <div className='space-y-6'>
              {publications.map((pub, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-lg font-semibold text-foreground'>
                        {pub.title}
                      </h3>
                      <Badge variant='secondary' className='ml-4'>
                        {pub.year}
                      </Badge>
                    </div>
                    <p className='text-green-700 dark:text-green-300 font-medium mb-2'>
                      {pub.publisher}
                    </p>
                    <p className='text-muted-foreground'>
                      {pub.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Awards */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Achievements & Awards
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {achievements.map((achievement, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <h3 className='text-lg font-semibold text-foreground mb-3'>
                      {achievement.title}
                    </h3>
                    <p className='text-green-700 dark:text-green-300 font-medium mb-2'>
                      {achievement.organization}
                    </p>
                    <p className='text-muted-foreground'>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className='mb-16'>
            <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-8'>
              <CardContent>
                <div className='text-center mb-8'>
                  <h2 className='text-3xl font-bold text-foreground mb-4'>
                    Get in Touch
                  </h2>
                  <p className='text-lg text-muted-foreground'>
                    Connect with Dr. Trinath Sahoo for expert consultation in refinery operations, reliability engineering, and technical leadership.
                  </p>
                </div>
                <div className='text-center'>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    asChild
                  >
                    <a 
                      href='https://www.linkedin.com/in/trinath-sahoo-3a090114/' 
                      target='_blank' 
                      rel='noopener noreferrer'
                    >
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <div className='w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Award className='h-10 w-10 text-primary-foreground' />
                </div>
                <h2 className='text-3xl font-bold mb-6'>
                  Partner with a Distinguished Industry Leader
                </h2>
                <p className='text-xl text-primary-foreground/90 leading-relaxed mb-8'>
                  Dr. Trinath Sahoo brings 30+ years of progressive experience at IOCL, PhD-level expertise in mechanical engineering, 
                  and recognition as a published author and award-winning engineer. Let him help transform your refinery operations 
                  and reliability engineering practices.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                  >
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary'
                  >
                    View Training Programs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
