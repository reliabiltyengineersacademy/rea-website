import { Metadata } from 'next';
import { Award, CheckCircle, Star } from 'lucide-react';

import {
  certifications,
  expertiseAreas,
  tools,
  industries,
  achievements,
} from '@/constants/about';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Companies from '@/components/home/Companies';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import ScheduleConsultation from '@/components/home/ScheduleConsultation';

export const metadata: Metadata = {
  title: 'About | Reliability Engineers Academy',
  description:
    'Meet KVK Subramaniyam Naidu, a globally certified Asset Management & Reliability Consultant with expertise in transforming maintenance into reliable, sustainable frameworks.',
  keywords:
    'reliability consultant, asset management expert, KVK Subramaniyam Naidu, maintenance optimization, reliability engineering',
};

export default function About() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground py-20'>
        <Container>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50'>
                <Award className='h-5 w-5 mr-2 text-blue-700 dark:text-blue-300' />
                <span className='text-sm font-medium text-blue-800 dark:text-blue-200'>
                  Meet the Founder
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
                KVK Subramaniyam Naidu
              </h1>

              <p className='text-xl text-blue-700 dark:text-blue-300 mb-4 font-medium'>
                Asset Management & Reliability Consultant
              </p>

              <p className='text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed'>
                &quot;Transforming Maintenance into Reliability: Enhancing
                Performance, Reducing Risk, Sustaining Value.&quot;
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
                  {achievements.map((achievement, index) => (
                    <div key={index} className='text-center'>
                      <div className='w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3'>
                        <achievement.icon className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                      </div>
                      <div className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>
                        {achievement.number}
                      </div>
                      <div className='text-blue-700 dark:text-blue-300 text-sm font-medium mb-1'>
                        {achievement.label}
                      </div>
                      <div className='text-gray-600 dark:text-gray-400 text-xs'>
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container>
          <div className='mb-16'>
            <div className='max-w-4xl mx-auto'>
              <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                KVK Subramaniyam Naidu is a globally certified Asset Management
                & Reliability Consultant with a proven track record of
                transforming asset maintenance into reliable, sustainable
                frameworks that deliver measurable business value. With
                expertise spanning utilities, petrochemicals, and ports, he has
                dedicated his career to enhancing performance, reducing risk,
                and sustaining value for organizations worldwide.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Holding internationally recognized certifications and recognized
                as a trusted advisor in reliability engineering, asset
                integrity, RCM/RAM/RCA, and Asset Health Index frameworks, KVK
                brings unparalleled expertise to every engagement.
              </p>
            </div>
          </div>

          {/* Trainers Section */}
          <div className='mb-16'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50'>
                <Award className='h-5 w-5 mr-2 text-blue-700 dark:text-blue-300' />
                <span className='text-sm font-medium text-blue-800 dark:text-blue-200'>
                  Our Expert Consultants
                </span>
              </div>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
                Meet Our Consulting Team
              </h2>
              <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                Our team of certified professionals brings decades of industry
                experience and expertise to deliver world-class training
                programs in reliability engineering, asset management, and
                maintenance optimization.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {/* Ganesh S */}
              <Card className='p-8 hover:shadow-lg transition-shadow duration-300 h-full'>
                <CardContent className='h-full flex flex-col'>
                  <div className='text-center flex-1 flex flex-col justify-between'>
                    <div>
                      <div className='w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-2xl font-bold text-blue-700 dark:text-blue-300'>
                          GS
                        </span>
                      </div>
                      <h3 className='text-xl font-semibold text-foreground mb-2'>
                        Ganesh S.
                      </h3>
                      <p className='text-blue-700 dark:text-blue-300 mb-4 font-medium'>
                        Chartered Engineer & Asset Integrity Specialist
                      </p>
                      <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                        Ganesh S. is a post-graduate mechanical engineer with 48+
                        years of distinguished experience in asset integrity,
                        reliability, and rotating-equipment engineering across oil
                        & gas, power, water, and process industries. He is a
                        Chartered Engineer and Certified Asset Management
                        Assessor.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Chartered Engineer (India)
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Certified Asset Management Assessor
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            RCM & Reliability Engineering
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 justify-center'>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                        asChild
                      >
                        <a href='/trainers/ganesh-s'>Learn More</a>
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                        asChild
                      >
                        <a
                          href='https://www.linkedin.com/in/ganesh-subramanian-3577625?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          LinkedIn Profile
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trinath Sahoo */}
              <Card className='p-8 hover:shadow-lg transition-shadow duration-300 h-full'>
                <CardContent className='h-full flex flex-col'>
                  <div className='text-center flex-1 flex flex-col justify-between'>
                    <div>
                      <div className='w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-2xl font-bold text-green-700 dark:text-green-300'>
                          TS
                        </span>
                      </div>
                      <h3 className='text-xl font-semibold text-foreground mb-2'>
                        Dr. Trinath Sahoo
                      </h3>
                      <p className='text-green-700 dark:text-green-300 mb-4 font-medium'>
                        Chief General Manager, IOCL | PhD Mechanical Engineering
                      </p>
                      <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                        Dr. Trinath Sahoo is a distinguished mechanical engineer
                        and senior executive at Indian Oil Corporation Limited
                        with 30+ years of experience in refinery operations,
                        reliability engineering, and technical management. He is a
                        published author and award-winning engineer.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Refinery Operations
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Root Cause Analysis
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Published Author
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 justify-center'>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                        asChild
                      >
                        <a href='/trainers/trinath-sahoo'>Learn More</a>
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                        asChild
                      >
                        <a
                          href='https://www.linkedin.com/in/trinath-sahoo-3a090114/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          LinkedIn Profile
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Soundarapandian Srinivasan */}
              <Card className='p-8 hover:shadow-lg transition-shadow duration-300 h-full'>
                <CardContent className='h-full flex flex-col'>
                  <div className='text-center flex-1 flex flex-col justify-between'>
                    <div>
                      <div className='w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-2xl font-bold text-purple-700 dark:text-purple-300'>
                          SS
                        </span>
                      </div>
                      <h3 className='text-xl font-semibold text-foreground mb-2'>
                        Soundarapandian Srinivasan
                      </h3>
                      <p className='text-purple-700 dark:text-purple-300 mb-4 font-medium'>
                        Asset Management & Maintenance Professional
                      </p>
                      <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                        Soundarapandian Srinivasan is a qualified Asset Management
                        and Maintenance professional with 30+ years of
                        multidisciplinary experience spanning defence,
                        contracting, manufacturing, and infrastructure sectors. He
                        specializes in ISO 55001 implementation and asset
                        lifecycle management.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            ISO 55001 Implementation
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            Asset Lifecycle Management
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                          <span className='text-muted-foreground text-sm'>
                            CMRP & CAMA Certified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 justify-center'>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                        asChild
                      >
                        <a href='/trainers/soundarapandian-srinivasan'>
                          Learn More
                        </a>
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                        asChild
                      >
                        <a
                          href='https://www.linkedin.com/in/srinivasan-s-pandian-miam-cama-90394175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          LinkedIn Profile
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className='mb-16'>
            <Companies
              title='Trusted by Global Industry Leaders'
              subtitle='Our expertise has been recognized and utilized by leading organizations worldwide'
            />
          </div>

          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Professional Certifications
            </h2>
            <Card className='p-8'>
              <CardContent>
                <div className='grid md:grid-cols-2 gap-4'>
                  {certifications.map((cert, index) => (
                    <div key={index} className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3 flex-shrink-0' />
                      <span className='text-muted-foreground'>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Expertise & Approach
            </h2>
            <p className='text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto'>
              KVK brings a strategic blend of technical expertise and business
              alignment, ensuring that asset management strategies drive
              operational efficiency and organizational excellence.
            </p>

            <div className='grid md:grid-cols-2 gap-8'>
              {expertiseAreas.map((area, index) => (
                <Card key={index} className='p-8'>
                  <CardContent>
                    <div className='flex items-center mb-4'>
                      <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4'>
                        <area.icon className='h-6 w-6 text-primary' />
                      </div>
                      <h3 className='text-xl font-semibold text-foreground'>
                        {area.title}
                      </h3>
                    </div>
                    <p className='text-muted-foreground mb-4'>
                      {area.description}
                    </p>
                    <div className='space-y-2'>
                      {area.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className='flex items-center'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3'></div>
                          <span className='text-muted-foreground text-sm'>
                            {detail}
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
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Tools & Technologies
            </h2>
            <Card className='p-8'>
              <CardContent>
                <p className='text-lg text-muted-foreground mb-6 text-center'>
                  Proficient in leading tools providing data-driven insights and
                  innovative solutions that optimize asset performance and
                  extend asset longevity.
                </p>
                <div className='flex flex-wrap justify-center gap-3'>
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='px-4 py-2 text-sm font-medium'
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
              Industry Experience
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {industries.map((industry, index) => (
                <Card key={index} className='p-8 text-center'>
                  <CardContent>
                    <h3 className='text-xl font-semibold text-foreground mb-4'>
                      {industry.name}
                    </h3>
                    <p className='text-muted-foreground'>
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className='mb-16'>
            <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
              <CardContent>
                <div className='max-w-4xl mx-auto text-center'>
                  <h2 className='text-3xl font-bold text-foreground mb-8'>
                    Vision & Commitment
                  </h2>
                  <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                    At the core of KVK&apos;s work is a commitment to
                    operational excellence. His mission is to help organizations
                    move beyond maintenance to embrace reliability-centered
                    asset management, ensuring sustainable performance and
                    reducing unplanned downtime.
                  </p>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    Known for his analytical mindset, collaborative approach,
                    and innovative problem-solving, KVK partners with
                    cross-functional teams to integrate reliability goals
                    seamlessly into business objectives. His strategic
                    frameworks and advanced use of predictive analytics empower
                    organizations to maximize efficiency, minimize costs, and
                    sustain long-term asset performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <div className='w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Star className='h-10 w-10 text-primary-foreground' />
                </div>
                <h2 className='text-3xl font-bold mb-6'>
                  A Champion of Reliability
                </h2>
                <p className='text-xl text-primary-foreground/90 leading-relaxed mb-8'>
                  With a rich career dedicated to enhancing system integrity,
                  operational efficiency, and asset performance, KVK
                  Subramaniyam Naidu continues to champion reliability as a
                  driver of business value. His leadership, expertise, and
                  vision make him a trusted partner for organizations seeking to
                  elevate their asset management practices to the next level.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <ScheduleConsultation
                    size='lg'
                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                  />
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary'
                    asChild
                  >
                    <a href='/programs'>Learn About Our Programs</a>
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
