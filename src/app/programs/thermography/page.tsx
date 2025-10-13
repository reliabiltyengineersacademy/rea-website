import {
  Award,
  CheckCircle,
  Users,
  BookOpen,
  ArrowRight,
  Thermometer,
} from 'lucide-react';
import Link from 'next/link';

import {
  certificationLevels,
  targetAudience,
  benefits,
  applicationAreas,
  equipmentTypes,
  industryStandards,
} from '@/constants/programs/infraredThermography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InfraredThermography = () => {
  return (
    <div className='min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Thermometer className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  Level I & II Certification
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                Infrared Thermography Certification
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Master the science of thermal imaging with our comprehensive
                Level I & II thermography certification program. Detect problems
                before they become failures using non-contact inspection
                techniques.
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
                    <div className='text-3xl font-bold mb-2'>12,000+</div>
                    <div className='text-primary-foreground/80'>
                      Certified Thermographers
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>45+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>85%</div>
                    <div className='text-primary-foreground/80'>
                      Problem Detection Rate
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>96%</div>
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
            Program Overview
          </h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Infrared thermography is a powerful non-destructive testing
                technique that uses thermal imaging to detect temperature
                variations in equipment and structures. Our certification
                program follows ASNT guidelines and industry standards.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                This comprehensive training covers both theoretical principles
                and practical applications, preparing you to perform
                professional thermal inspections across electrical, mechanical,
                and building systems.
              </p>
            </div>
            <Card className='p-8'>
              <CardHeader>
                <CardTitle className='text-xl'>
                  Certification Standards
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center'>
                  <Award className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    ASNT SNT-TC-1A Compliant
                  </span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Industry recognized certification
                  </span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Two-level certification path
                  </span>
                </div>
                <div className='flex items-center'>
                  <BookOpen className='h-5 w-5 text-primary mr-3' />
                  <span className='text-muted-foreground'>
                    Comprehensive training materials
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Certification Levels
          </h2>
          <div className='space-y-8'>
            {certificationLevels.map((level, index) => (
              <Card key={index} className='p-8'>
                <CardContent>
                  <div className='grid lg:grid-cols-2 gap-8'>
                    <div>
                      <div className='flex items-center mb-4'>
                        <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4'>
                          <span className='text-primary-foreground font-bold text-lg'>
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-foreground'>
                            {level.level}
                          </h3>
                          <p className='text-primary font-medium'>
                            {level.duration}
                          </p>
                        </div>
                      </div>
                      <p className='text-muted-foreground mb-6'>
                        {level.description}
                      </p>

                      <h4 className='font-semibold text-foreground mb-3'>
                        Key Topics
                      </h4>
                      <ul className='space-y-2'>
                        {level.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className='flex items-center'>
                            <div className='w-2 h-2 bg-primary rounded-full mr-3'></div>
                            <span className='text-muted-foreground'>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-foreground mb-3'>
                        Capabilities
                      </h4>
                      <ul className='space-y-3'>
                        {level.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className='flex items-start'>
                            <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                            <span className='text-muted-foreground text-sm'>
                              {capability}
                            </span>
                          </li>
                        ))}
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
            Application Areas
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {applicationAreas.map((area, index) => (
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
                  <div className='grid grid-cols-2 gap-2'>
                    {area.applications.map((app, appIndex) => (
                      <div key={appIndex} className='flex items-center'>
                        <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                        <span className='text-muted-foreground text-sm'>
                          {app}
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
            Equipment & Technology
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                {equipmentTypes.map((equipment, index) => (
                  <div key={index} className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-primary mr-3 flex-shrink-0' />
                    <span className='text-muted-foreground'>{equipment}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Industry Standards
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {industryStandards.map((standard, index) => (
              <Card key={index} className='p-6'>
                <CardContent>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    {standard.standard}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            REA Training Program
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Professional Thermography Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our program combines classroom instruction with extensive
                    hands-on practice using professional-grade thermal imaging
                    equipment and real-world inspection scenarios.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Certified Level III thermographer with 15+ years of
                    experience.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Hands-on training with thermal cameras
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world inspection scenarios
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Professional analysis software training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        ASNT certification exam preparation
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      Training Equipment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Thermal Cameras
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Professional-grade thermal imaging systems
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Analysis Software
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Industry-standard thermal analysis tools
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Test Targets
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Electrical panels, motors, and mechanical systems
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Calibration Sources
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Blackbody sources and reference standards
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
            <h2 className='text-3xl font-bold mb-4'>See Beyond the Visible</h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Master the art of thermal imaging and become a certified
              thermographer capable of detecting problems invisible to the naked
              eye.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in Program
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

export default InfraredThermography;
