import { Metadata } from 'next';
import { Award, Mail, Phone, Users, Globe, Briefcase, GraduationCap, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import ScheduleConsultation from '@/components/home/ScheduleConsultation';

export const metadata: Metadata = {
  title: 'S. Ganesh - Chartered Engineer & Asset Integrity Specialist | REA',
  description:
    'Meet S. Ganesh, a Chartered Engineer and Asset Integrity Specialist with 48+ years of experience in reliability engineering, RCM, and asset management across global industries.',
  keywords:
    'S. Ganesh, Chartered Engineer, Asset Integrity Specialist, RCM, Reliability Engineering, CAMA, Asset Management',
};

export default function GaneshSPage() {

  const expertiseAreas = [
    {
      title: 'Asset Integrity & Reliability Engineering',
      description: 'Comprehensive asset integrity management and reliability engineering solutions',
    },
    {
      title: 'Rotating Machinery Design & Failure Analysis',
      description: 'Expert analysis and design optimization for rotating equipment',
    },
    {
      title: 'Reliability Centered Maintenance (RCM)',
      description: 'Strategic RCM implementation and optimization frameworks',
    },
    {
      title: 'Risk Based Inspection (RBI)',
      description: 'Risk-based inspection strategies and implementation',
    },
    {
      title: 'Predictive & Preventive Maintenance',
      description: 'Maintenance optimization and predictive analytics',
    },
    {
      title: 'ISO 55000 Asset Management',
      description: 'Asset management system implementation and training',
    },
  ];

  const careerHighlights = [
    {
      title: 'Risk-Based Maintenance Methodology',
      description: 'Developed methodology for rotating equipment and authored FDS for RCM module of AIMS (GALIOM) software with Germanischer Lloyd (GLM Malaysia)',
      impact: '€1 billion initiative',
    },
    {
      title: 'RCM Implementation Leadership',
      description: 'Led RCM Implementation at PTT Gas Processing Plant (Thailand), Bangchak Refinery (Thailand), and multiple IOC refineries',
      impact: 'Multiple international projects',
    },
    {
      title: 'Plant Maintenance Optimization',
      description: 'Team Lead for GASCO, ASAB (Abu Dhabi), handling 50,000+ asset tags across mechanical, electrical & instrumentation systems',
      impact: 'Significant cost and downtime reductions',
    },
    {
      title: 'Training & Mentorship',
      description: 'Extensive training experience with over 5,000 engineers trained in RCM, RBI, and World-Class Maintenance',
      impact: 'Global reach across 7+ countries',
    },
  ];

  const industries = [
    { name: 'Oil & Gas', companies: 'GASCO (Abu Dhabi), ADCO, PTT Thailand, Bangchak Refinery, IOCL Refineries, Reliance Gas Pipeline' },
    { name: 'Power & Energy', companies: 'GMR Energy, NTPC, BHEL Thermal Power Stations, SAIL Captive Plants' },
    { name: 'Water & Utilities', companies: 'Haya Water (Oman), Abu Dhabi Terminals Main Pump Station Project' },
    { name: 'Cement & Steel', companies: 'L&T, Madras Cement, Tata Steel, SAIL, Jay Pee Cement, Lanco Industries' },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground py-20'>
        <Container>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50'>
                <Award className='h-5 w-5 mr-2 text-blue-700 dark:text-blue-300' />
                <span className='text-sm font-medium text-blue-800 dark:text-blue-200'>
                  Expert Trainer
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
                S. Ganesh
              </h1>

              <p className='text-xl text-blue-700 dark:text-blue-300 mb-4 font-medium'>
                Chartered Engineer & Asset Integrity Specialist
              </p>

              <p className='text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed'>
                &ldquo;48+ years of distinguished experience in asset integrity, reliability, and rotating-equipment engineering across global industries.&rdquo;
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <ScheduleConsultation className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4' />
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4'
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30 dark:border-blue-700/30'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Briefcase className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>48+</div>
                    <div className='text-blue-700 dark:text-blue-300 text-sm font-medium mb-1'>Years Experience</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Asset Integrity & Reliability</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Users className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>5000+</div>
                    <div className='text-blue-700 dark:text-blue-300 text-sm font-medium mb-1'>Engineers Trained</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>Global Training Programs</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Globe className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>7+</div>
                    <div className='text-blue-700 dark:text-blue-300 text-sm font-medium mb-1'>Countries</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>International Experience</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <Star className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                    </div>
                    <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>€1B</div>
                    <div className='text-blue-700 dark:text-blue-300 text-sm font-medium mb-1'>Project Value</div>
                    <div className='text-gray-600 dark:text-gray-400 text-xs'>AIMS Software Initiative</div>
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
                Mr. S. Ganesh is a post-graduate mechanical engineer with more than 48 years of distinguished experience in asset integrity, reliability, and rotating-equipment engineering across oil & gas, power, water, and process industries. His career combines deep technical expertise with strategic leadership in implementing Risk-Based Maintenance (RBM), Reliability Centered Maintenance (RCM), FMEA/RCFA, and Asset Management (ISO 55000) frameworks worldwide.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                As a Chartered Engineer and Certified Asset Management Assessor, he has led critical assignments in the Middle East, India, and Southeast Asia—helping organizations optimize maintenance strategies, enhance reliability, and extend asset life through data-driven decision-making and integrity-led engineering.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Education & Qualifications
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
                        <span className='text-muted-foreground'>M.E. (Mechanical – Fluid Machinery), PSG College of Technology</span>
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>B.E. (Mechanical), College of Engineering – Madras University</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='flex items-center mb-4'>
                      <Award className='h-6 w-6 text-primary mr-3' />
                      <h3 className='text-xl font-semibold text-foreground'>Professional Certifications</h3>
                    </div>
                    <ul className='space-y-2'>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>Certified Asset Management Assessor (CAMA)</span>
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>Member – Institute of Asset Management (UK)</span>
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0'></div>
                        <span className='text-muted-foreground'>Chartered Engineer (India)</span>
                      </li>
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
                        {highlight.impact}
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

          {/* Industry Experience */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Industry Experience
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {industries.map((industry, index) => (
                <Card key={index} className='p-6'>
                  <CardContent>
                    <h3 className='text-lg font-semibold text-foreground mb-3'>
                      {industry.name}
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      {industry.companies}
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
                    Ready to enhance your asset management capabilities? Connect with Mr. Ganesh for expert consultation and training.
                  </p>
                </div>
                <div className='grid md:grid-cols-3 gap-6 text-center'>
                  <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3'>
                      <Mail className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='font-semibold text-foreground mb-2'>Email</h3>
                    <p className='text-muted-foreground text-sm'>lakganesh@gmail.com</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3'>
                      <Phone className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='font-semibold text-foreground mb-2'>Phone</h3>
                    <p className='text-muted-foreground text-sm'>+91 94490 37533</p>
                    <p className='text-muted-foreground text-sm'>+91 83107 22027</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3'>
                      <MapPin className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='font-semibold text-foreground mb-2'>Location</h3>
                    <p className='text-muted-foreground text-sm'>Bangalore, India</p>
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
                  Partner with an Industry Expert
                </h2>
                <p className='text-xl text-primary-foreground/90 leading-relaxed mb-8'>
                  With 48+ years of experience and 5,000+ engineers trained, Mr. Ganesh brings unparalleled expertise 
                  in asset integrity, reliability engineering, and maintenance optimization. Let him help transform 
                  your organization's asset management practices.
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
