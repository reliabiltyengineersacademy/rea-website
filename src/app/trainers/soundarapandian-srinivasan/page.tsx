import { Metadata } from 'next';
import { Award, Mail, Phone, Users, Globe, Briefcase, GraduationCap, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import ScheduleConsultation from '@/components/home/ScheduleConsultation';

export const metadata: Metadata = {
  title: 'Soundarapandian Srinivasan - Asset Management & Maintenance Professional | REA',
  description:
    'Meet Soundarapandian Srinivasan, a qualified Asset Management and Maintenance professional with 30+ years of experience in defence, contracting, manufacturing, and infrastructure sectors.',
  keywords:
    'Soundarapandian Srinivasan, Asset Management, Maintenance Professional, CMRP, CAMA, ISO 55001, Reliability Engineering',
};

export default function SoundarapandianSrinivasanPage() {
  const certifications = [
    'Certified Asset Management Assessor (CAMA) – WPiAM',
    'Certified Maintenance & Reliability Professional (CMRP) – SMRP, USA',
    'Diploma in Asset Management (Dip AM) – Institute of Asset Management (UK)',
    'P.G. Diploma in Armoured Weapon Systems Technology – Military College of EME',
    'Bachelor of Engineering (Mechanical) – College of Engineering, Guindy',
  ];

  const expertiseAreas = [
    {
      title: 'Asset Lifecycle & Reliability Management',
      description: 'Comprehensive asset lifecycle management and reliability engineering solutions',
    },
    {
      title: 'ISO 55001 Implementation & Auditing',
      description: 'Strategic implementation and auditing of ISO 55001 Asset Management Systems',
    },
    {
      title: 'Maintenance Optimization & Continuous Improvement',
      description: 'Maintenance strategy optimization and continuous improvement methodologies',
    },
    {
      title: 'Asset Information & Risk Management Systems',
      description: 'Asset information management and risk-based decision frameworks',
    },
    {
      title: 'Contingency & Resource Planning',
      description: 'Strategic contingency planning and resource optimization',
    },
    {
      title: 'Competence Development & Knowledge Transfer',
      description: 'Professional development and knowledge transfer programs',
    },
  ];

  const careerHighlights = [
    {
      title: 'Freelance Asset Management & ISO 55001 Trainer',
      period: 'Present',
      description: 'Providing strategic advisory and hands-on training for organisations seeking alignment with international asset management standards',
    },
    {
      title: 'General Manager – Continuous Improvement',
      period: '2016–2018',
      description: 'Led operational transformation and maintenance optimization in a manufacturing enterprise in India',
    },
    {
      title: 'Head of Plant & Machinery Assets, Oman',
      period: '2004–2016',
      description: 'Directed asset management for large-scale contracting operations, overseeing acquisition, maintenance, and performance optimization of an equipment portfolio worth over US$100 million',
    },
    {
      title: 'Plant Engineer, Qatar',
      period: '2003–2004',
      description: 'Managed installation, operation, and maintenance of mechanical systems in infrastructure projects',
    },
    {
      title: 'Entrepreneur & Director',
      period: '1995–2002',
      description: 'Founded and led an automated test equipment manufacturing firm in India, delivering innovative engineering solutions',
    },
    {
      title: 'Officer Commanding, Indian Army',
      period: '1984–1994',
      description: 'Spearheaded workshop operations for Main Battle Tanks and Armoured Platforms, establishing structured maintenance and reliability practices',
    },
  ];

  const memberships = [
    'Institute of Asset Management (IAM) – UK',
    'Asset Management Council (AMC) – Australia',
    'Society for Maintenance & Reliability Professionals (SMRP) – USA',
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 text-foreground py-20'>
        <Container>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-purple-200/50 dark:bg-purple-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-purple-300/50 dark:border-purple-700/50'>
                <Award className='h-5 w-5 mr-2 text-purple-700 dark:text-purple-300' />
                <span className='text-sm font-medium text-purple-800 dark:text-purple-200'>
                  Expert Trainer
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
                Soundarapandian Srinivasan
              </h1>

              <p className='text-xl text-purple-700 dark:text-purple-300 mb-4 font-medium'>
                Asset Management & Maintenance Professional
              </p>

              <p className='text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed'>
                &ldquo;30+ years of multidisciplinary experience spanning defence, contracting, manufacturing, and infrastructure sectors with expertise in world-class Asset Lifecycle Management and ISO 55001 implementation.&rdquo;
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <ScheduleConsultation className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4' />
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4'
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/30 dark:border-purple-700/30'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-purple-200/30 dark:bg-purple-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Briefcase className='h-6 w-6 text-purple-700 dark:text-purple-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>30+</div>
                    <div className='text-purple-700 dark:text-purple-300 text-sm font-medium mb-1'>Years Experience</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Asset Management</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-purple-200/30 dark:bg-purple-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Users className='h-6 w-6 text-purple-700 dark:text-purple-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>$100M+</div>
                    <div className='text-purple-700 dark:text-purple-300 text-sm font-medium mb-1'>Asset Portfolio</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Managed in Oman</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-purple-200/30 dark:bg-purple-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Globe className='h-6 w-6 text-purple-700 dark:text-purple-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>4+</div>
                    <div className='text-purple-700 dark:text-purple-300 text-sm font-medium mb-1'>Countries</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>International Experience</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-purple-200/30 dark:bg-purple-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Star className='h-6 w-6 text-purple-700 dark:text-purple-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>5+</div>
                    <div className='text-purple-700 dark:text-purple-300 text-sm font-medium mb-1'>Certifications</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Professional Credentials</div>
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
                Mr. Soundarapandian Srinivasan is a qualified Asset Management and Maintenance professional with over 30 years of multidisciplinary experience spanning defence, contracting, manufacturing, and infrastructure sectors. His career has been defined by a commitment to implementing world-class Asset Lifecycle Management, Reliability Engineering, and ISO 55001-based Asset Management Systems across diverse industrial environments.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Beginning his professional journey in the Indian Army in the mid-1980s—where he managed maintenance and lifecycle operations for armoured weapon systems—Mr. Srinivasan progressed to lead asset portfolios exceeding USD 100 million in the Sultanate of Oman, overseeing plant and machinery operations for major contracting organisations. His unique blend of military precision and corporate pragmatism has shaped his expertise in driving asset performance, reliability, and risk-based decision-making.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Education & Professional Credentials
            </h2>
            <Card className='p-8'>
              <CardContent>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <div className='flex items-center mb-4'>
                      <GraduationCap className='h-6 w-6 text-primary mr-3' />
                      <h3 className='text-xl font-semibold text-foreground'>Academic Qualifications</h3>
                    </div>
                    <ul className='space-y-2'>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>B.E. (Mechanical), College of Engineering Guindy, Chennai</span>
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>P.G. Diploma in Armoured Weapon Systems Technology – Military College of EME</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='flex items-center mb-4'>
                      <Award className='h-6 w-6 text-primary mr-3' />
                      <h3 className='text-xl font-semibold text-foreground'>Professional Certifications</h3>
                    </div>
                    <ul className='space-y-2'>
                      {certifications.slice(0, 3).map((cert, index) => (
                        <li key={index} className='flex items-start'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                          <span className='text-muted-foreground text-sm'>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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

          {/* Career Highlights */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Career Highlights
            </h2>
            <div className='space-y-6'>
              {careerHighlights.map((highlight, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-lg font-semibold text-foreground'>
                        {highlight.title}
                      </h3>
                      <Badge variant='secondary' className='ml-4'>
                        {highlight.period}
                      </Badge>
                    </div>
                    <p className='text-muted-foreground'>
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Professional Memberships
            </h2>
            <Card className='p-8'>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-4'>
                  {memberships.map((membership, index) => (
                    <div key={index} className='flex items-center'>
                      <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0'></div>
                      <span className='text-muted-foreground'>{membership}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Philosophy */}
          <div className='mb-16'>
            <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-8'>
              <CardContent>
                <div className='max-w-4xl mx-auto text-center'>
                  <h2 className='text-3xl font-bold text-foreground mb-8'>
                    Leadership Philosophy
                  </h2>
                  <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                    Mr. Srinivasan&rsquo;s work is guided by the belief that asset management is not just about maintenance — it&rsquo;s about value creation, reliability assurance, and sustainable operations. His approach blends rigorous technical understanding with strategic foresight, empowering organisations to extract maximum value from their assets through structured governance and data-driven decision frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                    Ready to enhance your asset management capabilities? Connect with Mr. Srinivasan for expert consultation and training.
                  </p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 text-center'>
                  <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3'>
                      <Mail className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='font-semibold text-foreground mb-2'>Email</h3>
                    <p className='text-muted-foreground text-sm'>spandidnaps@yahoo.com</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3'>
                      <Phone className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='font-semibold text-foreground mb-2'>Phone</h3>
                    <p className='text-muted-foreground text-sm'>+91 74181 41895</p>
                  </div>
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
                  Partner with an Industry Veteran
                </h2>
                <p className='text-xl text-primary-foreground/90 leading-relaxed mb-8'>
                  With 30+ years of experience spanning defence, contracting, manufacturing, and infrastructure sectors, 
                  Mr. Srinivasan brings unparalleled expertise in asset management, ISO 55001 implementation, and reliability engineering. 
                  Let him help transform your organization&rsquo;s asset management practices.
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
                    asChild
                  >
                    <a href='/programs'>View Training Programs</a>
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
