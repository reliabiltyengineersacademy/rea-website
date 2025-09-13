import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle, Clock, Users, BookOpen, ArrowRight, Zap, TrendingUp, Settings, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const VibrationAnalysis = () => {
  const benefits = [
    "ISO 18436 internationally recognized certification",
    "Enhanced expertise in machinery diagnostics and fault detection",
    "Improved ability to predict equipment failures before they occur",
    "Increased earning potential and career advancement opportunities",
    "Access to advanced vibration analysis tools and techniques",
    "Professional credibility in predictive maintenance field"
  ];

  const targetAudience = [
    {
      title: "Maintenance Engineers",
      description: "Engineers responsible for equipment reliability and maintenance planning"
    },
    {
      title: "Reliability Technicians",
      description: "Technicians performing condition monitoring and predictive maintenance tasks"
    },
    {
      title: "Vibration Analysts",
      description: "Professionals specializing in machinery vibration analysis and diagnostics"
    },
    {
      title: "Plant Engineers",
      description: "Engineers overseeing plant operations and equipment performance"
    }
  ];

  const certificationLevels = [
    {
      level: "Category I",
      duration: "40 hours training + exam",
      description: "Basic vibration analysis principles and data collection techniques",
      topics: ["Vibration fundamentals", "Data collection", "Basic analysis", "Safety procedures"],
      requirements: ["High school diploma", "6 months experience", "Basic mechanical knowledge"]
    },
    {
      level: "Category II",
      duration: "80 hours training + exam",
      description: "Advanced analysis techniques and fault diagnosis capabilities",
      topics: ["Advanced analysis", "Fault diagnosis", "Trending", "Reporting"],
      requirements: ["Category I certification", "18 months experience", "Technical background"]
    },
    {
      level: "Category III",
      duration: "120 hours training + exam",
      description: "Expert-level analysis and program management responsibilities",
      topics: ["Program management", "Advanced diagnostics", "Training others", "Standards development"],
      requirements: ["Category II certification", "36 months experience", "Engineering degree preferred"]
    }
  ];

  const technicalTopics = [
    {
      icon: Zap,
      title: "Signal Processing",
      description: "FFT analysis, filtering, windowing, and signal conditioning techniques"
    },
    {
      icon: TrendingUp,
      title: "Fault Identification",
      description: "Identifying imbalance, misalignment, bearing defects, and gear problems"
    },
    {
      icon: Settings,
      title: "Machinery Diagnostics",
      description: "Rotating equipment analysis including pumps, motors, and compressors"
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Trending, alarm setting, and predictive maintenance scheduling"
    }
  ];

  const equipmentCovered = [
    "Centrifugal and reciprocating pumps",
    "Electric motors and generators",
    "Centrifugal and screw compressors",
    "Fans and blowers",
    "Gearboxes and transmissions",
    "Rolling element and sleeve bearings",
    "Belt drives and couplings",
    "Steam and gas turbines"
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                <Zap className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">ISO 18436 Certified</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Vibration Analysis Certification
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Master the art and science of machinery vibration analysis with our comprehensive 
                ISO 18436 certified training program. Become an expert in predictive maintenance 
                and equipment diagnostics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5,000+</div>
                    <div className="text-primary-foreground/80">Certified Analysts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">60+</div>
                    <div className="text-primary-foreground/80">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">30%</div>
                    <div className="text-primary-foreground/80">Failure Prevention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">94%</div>
                    <div className="text-primary-foreground/80">Pass Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Program Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vibration analysis is one of the most powerful predictive maintenance technologies 
                available today. Our ISO 18436 certified program provides comprehensive training 
                in vibration measurement, analysis, and interpretation for rotating machinery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This certification program follows international standards and prepares you to 
                detect machinery faults early, reduce unplanned downtime, and optimize maintenance 
                schedules through data-driven insights.
              </p>
            </div>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-xl">Certification Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">ISO 18436-2 Vibration Analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Internationally recognized</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Multi-level certification path</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Comprehensive training materials</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certification Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Certification Levels</h2>
          <div className="space-y-8">
            {certificationLevels.map((level, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{level.level}</h3>
                          <p className="text-primary font-medium">{level.duration}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{level.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Topics</h4>
                      <ul className="space-y-2">
                        {level.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {level.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{req}</span>
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

        {/* Technical Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technical Expertise Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalTopics.map((topic, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <topic.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Equipment Coverage</h2>
          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {equipmentCovered.map((equipment, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{equipment}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Certification Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Who Should Attend?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Course Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">REA Training Program</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 p-12">
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Comprehensive Vibration Analysis Training</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our program combines theoretical knowledge with extensive hands-on practice using 
                    industry-standard vibration analyzers and software tools.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu - Certified vibration analyst with 20+ years of experience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Hands-on training with real equipment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Industry-standard software training</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Real-world case studies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">ISO 18436 exam preparation</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-background p-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Training Equipment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Vibration Analyzers</h5>
                      <p className="text-muted-foreground text-sm">Latest portable analyzers and data collectors</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Analysis Software</h5>
                      <p className="text-muted-foreground text-sm">Professional vibration analysis software suites</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Test Equipment</h5>
                      <p className="text-muted-foreground text-sm">Rotating machinery test rigs and fault simulators</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Sensors & Accessories</h5>
                      <p className="text-muted-foreground text-sm">Accelerometers, velocity sensors, and mounting hardware</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Master Vibration Analysis</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the ranks of certified vibration analysts and become an expert in predictive 
              maintenance and machinery diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Enroll in Program
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

export default VibrationAnalysis;
