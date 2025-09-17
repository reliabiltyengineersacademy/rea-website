import {
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Shield,
  Settings,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

import {
  benefits,
  targetAudience,
  courseModules,
  practicalSkills,
  certificationDetails,
  learningOutcomes,
} from '@/constants/programs/tuvFunctionalSafety';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TUVFunctionalSafety = () => {
  return (
    <div className='pt-24 min-h-screen bg-background'>
      <div className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6'>
                <Shield className='h-5 w-5 mr-2' />
                <span className='text-sm font-medium'>
                  TÜV RHEINLAND Certified
                </span>
              </div>

              <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                TÜV RHEINLAND Functional Safety Training Program
              </h1>

              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Master functional safety principles and earn internationally
                recognized TÜV RHEINLAND certification. Learn to design, implement,
                and manage functional safety systems for critical applications.
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
                    <div className='text-3xl font-bold mb-2'>400+</div>
                    <div className='text-primary-foreground/80'>
                      TÜV Certified Professionals
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>20+</div>
                    <div className='text-primary-foreground/80'>Countries</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>50%</div>
                    <div className='text-primary-foreground/80'>
                      Risk Reduction
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold mb-2'>91%</div>
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
                The TÜV RHEINLAND Functional Safety Training Program provides
                comprehensive training in functional safety principles, standards,
                and implementation. This course is designed for safety engineers,
                process engineers, and project managers who need to understand
                and implement functional safety systems.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Participants will learn to design safety instrumented systems,
                conduct risk assessments, and ensure compliance with international
                safety standards. This certification is internationally recognized
                and opens doors to senior safety engineering roles.
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
            Advanced Skills Developed
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

        <Card className='bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'>
          <CardContent>
            <h2 className='text-3xl font-bold mb-4'>
              Master Functional Safety
            </h2>
            <p className='text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
              Join the elite group of TÜV RHEINLAND certified functional safety
              professionals and advance your career in safety engineering and
              risk management.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  className='bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                >
                  Enroll in TÜV Functional Safety Program
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

export default TUVFunctionalSafety;
