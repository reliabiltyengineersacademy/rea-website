import { Target, Users, Award, Globe } from 'lucide-react';

import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: 'Mission-Driven Excellence',
    description:
      'Dedicated to advancing reliability engineering through comprehensive education and practical expertise.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description:
      'Learn from industry-leading professionals with decades of real-world reliability engineering experience.',
  },
  {
    icon: Award,
    title: 'Global Standards',
    description:
      'Built on internationally recognized standards including ISO 55000, API RP 580/581, and ISO 14224.',
  },
  {
    icon: Globe,
    title: 'Worldwide Impact',
    description:
      'Serving professionals across 25+ countries with localized training and support.',
  },
];

export default function About() {
  return (
    <section className='py-20 bg-muted/80'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            About Reliability Engineers Academy
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Shaping the future of reliability engineering through world-class
            education, certification programs, and industry expertise.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 items-center mb-8 w-full'>
          <div className='w-full'>
            <h3 className='text-3xl font-bold text-foreground mb-6'>
              Empowering Excellence in Asset Reliability
            </h3>
            <p className='text-lg text-muted-foreground mb-6 leading-relaxed text-justify'>
              Reliability Engineers Academy (REA) stands at the forefront of
              professional development in asset reliability engineering. We
              provide comprehensive training, globally recognized
              certifications, and cutting-edge knowledge resources to engineers
              and organizations worldwide.
            </p>
            <p className='text-lg text-muted-foreground mb-8 leading-relaxed text-justify'>
              Our expertise spans reliability-centered maintenance (RCM), root
              cause failure analysis (RCFA), condition monitoring, predictive
              diagnostics, and maintenance optimization. We bridge the gap
              between theoretical knowledge and practical application, ensuring
              our graduates are equipped to drive real-world results.
            </p>

            <div className='grid grid-cols-2 gap-8 w-full'>
              <Card>
                <CardContent>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    15+
                  </div>
                  <div className='text-muted-foreground'>
                    Years of Excellence
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    98%
                  </div>
                  <div className='text-muted-foreground'>Success Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className='relative w-full'>
            <Card className='bg-gradient-to-br from-blue-800 to-blue-700 p-8 text-primary-foreground'>
              <CardContent className='p-0'>
                <h4 className='text-2xl font-bold mb-6'>Our Core Values</h4>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='size-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0' />
                    <div>
                      <h5 className='font-semibold mb-1'>Excellence</h5>
                      <p className='text-primary-foreground/80 text-sm '>
                        Delivering the highest quality education and training
                        programs
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='size-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0' />
                    <div>
                      <h5 className='font-semibold mb-1'>Innovation</h5>
                      <p className='text-primary-foreground/80 text-sm'>
                        Embracing cutting-edge technologies and methodologies
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='size-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0' />
                    <div>
                      <h5 className='font-semibold mb-1'>Integrity</h5>
                      <p className='text-primary-foreground/80 text-sm'>
                        Maintaining the highest ethical standards in all we do
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='size-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0' />
                    <div>
                      <h5 className='font-semibold mb-1'>Impact</h5>
                      <p className='text-primary-foreground/80 text-sm'>
                        Creating measurable value for our students and their
                        organizations
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'
            >
              <CardContent>
                <div className='size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='size-6 text-primary' />
                </div>
                <h4 className='text-xl font-semibold text-foreground mb-3'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
