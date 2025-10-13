import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Droplets,
} from 'lucide-react';
import Link from 'next/link';

import {
  benefits,
  targetAudience,
  courseModules,
  practicalSkills,
  testMethods,
  certificationDetails,
  learningOutcomes,
} from '@/constants/programs/mlaLevel1';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MLALevel1 = () => {
  return (
    <div className='min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Droplets className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>ISO 18436-4 Level I</span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                Machine Lubricant Analyst ISO Level I Training
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Master the fundamentals of lubricant analysis with our ISO
                18436-4 Level I certification program. Learn to perform basic
                oil analysis, identify contamination, and optimize lubrication
                programs.
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
                    <div className='text-3xl font-bold mb-2'>2,000+</div>
                    <div className='text-primary-foreground/80'>
                      Level I Analysts
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>35+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>20%</div>
                    <div className='text-primary-foreground/80'>
                      Lubrication Cost Reduction
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>95%</div>
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
            Course Overview
          </h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                The Machine Lubricant Analyst Level I program provides
                fundamental training in lubricant analysis and contamination
                control. This course is designed for maintenance technicians,
                lubrication specialists, and entry-level analysts who need to
                understand basic oil analysis principles and techniques.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Participants will learn to perform basic oil analysis tests,
                identify contamination sources, select appropriate lubricants,
                and implement effective contamination control programs. This
                certification serves as the foundation for advanced lubricant
                analysis training.
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
            Learning Outcomes
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>{outcome}</span>
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
                            <span className='text-muted-foreground'>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-foreground mb-3'>
                        Skills Developed
                      </h4>
                      <ul className='space-y-2'>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Practical lubricant analysis skills
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Contamination control techniques
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-muted-foreground text-sm'>
                            Lubricant selection expertise
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
            Practical Skills Developed
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {practicalSkills.map((skill, index) => (
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
            Test Methods Covered
          </h2>
          <Card className='p-8'>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                {testMethods.map((method, index) => (
                  <div key={index} className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-primary mr-3 flex-shrink-0' />
                    <span className='text-muted-foreground'>{method}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
            REA MLA Level I Training Program
          </h2>
          <Card className='bg-gradient-to-br from-primary/5 to-primary/10 p-12'>
            <CardContent>
              <div className='grid lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>
                    Comprehensive Lubricant Analysis Training
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Our MLA Level I program combines theoretical knowledge with
                    extensive hands-on laboratory practice using
                    industry-standard testing equipment. Participants gain
                    practical experience in lubricant analysis that they can
                    immediately apply in their workplace.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu -
                    Certified lubricant analyst with 20+ years of experience in
                    oil analysis and contamination control.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Hands-on laboratory training
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Industry-standard testing equipment
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        Real-world case studies and examples
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-5 w-5 text-primary mr-3' />
                      <span className='text-muted-foreground'>
                        ISO 18436-4 exam preparation
                      </span>
                    </li>
                  </ul>
                </div>
                <Card className='bg-background p-8'>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      Laboratory Equipment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Viscosity Testers
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Kinematic and dynamic viscosity measurement
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Particle Counters
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Automated particle counting and analysis
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Water Content Analyzers
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Karl Fischer titration and other methods
                      </p>
                    </div>
                    <div className='border-l-4 border-primary pl-4'>
                      <h5 className='font-semibold text-foreground'>
                        Chemical Analysis
                      </h5>
                      <p className='text-muted-foreground text-sm'>
                        Acid number, base number, and other tests
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
              Master Lubricant Analysis
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join thousands of professionals who have mastered lubricant
              analysis and optimized their lubrication programs for better
              equipment reliability and cost savings.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in MLA Level I Course
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

export default MLALevel1;
