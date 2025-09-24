import { Users, CheckCircle, BookOpen, Award } from 'lucide-react';

import {
  trainingPrograms,
  certificationPrograms,
  trainingFeatures,
} from '@/constants/our-services/professionalTraining';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

export default function ProfessionalTrainingPage() {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100 dark:from-indigo-900 dark:via-indigo-800 dark:to-indigo-900 text-foreground'>
        <Container className='py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center bg-indigo-200/50 dark:bg-indigo-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-indigo-300/50 dark:border-indigo-700/50'>
              <Users className='h-6 w-6 mr-3 text-indigo-700 dark:text-indigo-300' />
              <span className='text-lg font-medium text-indigo-800 dark:text-indigo-200'>
                Professional Training
              </span>
            </div>

            <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
              Professional Training &<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600'>
                Organizational Capability Building
              </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed'>
              Through our Center for Reliability Excellence, we deliver
              tailored, role-based training and certification programs. These
              initiatives are designed to build internal competencies across
              engineering, maintenance, and operations, ensuring long-term
              adoption of global reliability practices.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4'
              >
                Explore Programs
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4'
              >
                Request Training
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className='py-16'>
        <div className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Building Internal Capabilities
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Our training programs are designed to equip your team with the
                knowledge, skills, and competencies needed to manage, sustain,
                and evolve reliability initiatives internally. We focus on
                practical, applicable learning that drives immediate results.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Through structured learning paths and hands-on experience, we
                ensure your organization develops the internal expertise
                necessary for long-term reliability excellence and continuous
                improvement.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='px-6 py-3'>View Programs</Button>
                <Button variant='outline' className='px-6 py-3'>
                  Custom Training
                </Button>
              </div>
            </div>

            <Card className='p-8'>
              <CardContent>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  Training Benefits
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Skill Development
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Build technical competencies and practical skills
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Knowledge Transfer
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Share best practices and industry expertise
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Certification
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Professional recognition and career advancement
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-foreground'>
                        Organizational Growth
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        Build internal capabilities and self-sufficiency
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Comprehensive Training Programs
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our structured training programs cover all aspects of reliability
              engineering and maintenance excellence.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {trainingPrograms.map((program, index) => (
              <Card
                key={index}
                className='p-8 hover:shadow-xl transition-all duration-300'
              >
                <CardContent>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center'>
                      <BookOpen className='h-6 w-6 text-white' />
                    </div>
                    <div className='text-right'>
                      <div className='text-sm font-semibold text-indigo-600'>
                        {program.duration}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {program.level}
                      </div>
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-4'>
                    {program.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {program.description}
                  </p>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-foreground mb-2'>
                      Key Topics:
                    </h4>
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className='flex items-center'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3'></div>
                        <span className='text-muted-foreground text-sm'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Professional Certification
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Earn globally recognized certifications that validate your
              expertise and advance your career.
            </p>
          </div>

          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                {certificationPrograms.map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors'
                  >
                    <Award className='h-5 w-5 text-indigo-600 mr-3 flex-shrink-0' />
                    <span className='text-foreground font-medium'>{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Why Choose REA Training?
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Our training programs are designed for maximum impact and
              practical application in real-world scenarios.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {trainingFeatures.map((feature, index) => (
              <Card key={index} className='p-6 text-center'>
                <CardContent>
                  <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <CheckCircle className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='text-lg font-bold text-foreground'>
                    {feature}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <Card className='bg-gradient-to-r from-indigo-600 to-indigo-700 p-12 text-white'>
            <CardContent>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>
                  Ready to Build Your Team&apos;s Capabilities?
                </h2>
                <p className='text-xl text-indigo-100 leading-relaxed mb-8'>
                  Partner with REA to develop your team&apos;s reliability
                  engineering expertise. Invest in professional training and
                  certification programs that drive organizational excellence.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4'
                  >
                    Explore Programs
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 bg-transparent'
                  >
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
