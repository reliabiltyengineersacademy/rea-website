import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle, Clock, Users, BookOpen, ArrowRight, Droplets, Microscope, BarChart, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const LubeOilAnalysis = () => {
  const benefits = [
    "Comprehensive understanding of tribology and lubrication principles",
    "Enhanced ability to optimize lubrication programs and extend equipment life",
    "Professional expertise in oil analysis and contamination control",
    "Increased earning potential and career advancement opportunities",
    "Industry recognition as a lubrication and oil analysis specialist",
    "Access to advanced testing methods and diagnostic techniques"
  ];

  const targetAudience = [
    {
      title: "Lubrication Engineers",
      description: "Engineers responsible for lubrication program development and optimization"
    },
    {
      title: "Maintenance Technicians",
      description: "Technicians performing oil sampling and basic analysis interpretation"
    },
    {
      title: "Reliability Engineers",
      description: "Engineers using oil analysis data for equipment reliability improvement"
    },
    {
      title: "Laboratory Technicians",
      description: "Technicians performing oil analysis testing and data interpretation"
    }
  ];

  const certificationLevels = [
    {
      level: "Fundamentals",
      duration: "24 hours training + exam",
      description: "Basic lubrication principles and oil analysis fundamentals",
      topics: ["Lubrication basics", "Oil properties", "Sampling techniques", "Basic tests"],
      competencies: [
        "Understand lubrication fundamentals",
        "Perform proper oil sampling",
        "Interpret basic oil analysis reports",
        "Implement contamination control measures"
      ]
    },
    {
      level: "Advanced",
      duration: "40 hours training + exam",
      description: "Advanced tribology and comprehensive oil analysis program management",
      topics: ["Advanced tribology", "Program management", "Trend analysis", "Failure investigation"],
      competencies: [
        "Design comprehensive oil analysis programs",
        "Perform advanced data interpretation",
        "Investigate lubrication-related failures",
        "Optimize lubrication programs for maximum ROI"
      ]
    }
  ];

  const testMethods = [
    {
      icon: Droplets,
      title: "Physical Properties",
      description: "Viscosity, density, flash point, and pour point analysis",
      tests: ["Kinematic viscosity", "Viscosity index", "Density measurement", "Flash/fire point"]
    },
    {
      icon: Microscope,
      title: "Contamination Analysis",
      description: "Particle counting, water content, and contamination identification",
      tests: ["Particle counting", "Water content", "Acid number", "Base number"]
    },
    {
      icon: BarChart,
      title: "Wear Metal Analysis",
      description: "Elemental analysis for wear metals and additive depletion",
      tests: ["ICP spectroscopy", "Atomic absorption", "Ferrography", "PQ index"]
    },
    {
      icon: Cog,
      title: "Additive Analysis",
      description: "Antioxidants, anti-wear additives, and performance monitoring",
      tests: ["FTIR spectroscopy", "Additive screening", "Oxidation analysis", "Thermal stability"]
    }
  ];

  const equipmentTypes = [
    "Industrial gearboxes and transmissions",
    "Hydraulic systems and power units",
    "Compressors and vacuum pumps",
    "Steam and gas turbines",
    "Internal combustion engines",
    "Bearing lubrication systems",
    "Circulating oil systems",
    "Grease-lubricated equipment"
  ];

  const analysisParameters = [
    {
      category: "Physical Properties",
      parameters: ["Viscosity @ 40°C & 100°C", "Viscosity Index", "Density", "Flash Point", "Pour Point"]
    },
    {
      category: "Contamination",
      parameters: ["Water Content", "Particle Count", "Acid Number", "Base Number", "Insolubles"]
    },
    {
      category: "Wear Metals",
      parameters: ["Iron", "Copper", "Lead", "Tin", "Aluminum", "Chromium", "Silver", "Nickel"]
    },
    {
      category: "Additives",
      parameters: ["Zinc", "Phosphorus", "Calcium", "Magnesium", "Barium", "Boron", "Molybdenum"]
    },
    {
      category: "Contaminants",
      parameters: ["Silicon", "Sodium", "Potassium", "Fuel Dilution", "Glycol", "Soot"]
    }
  ];

  const industryApplications = [
    {
      industry: "Power Generation",
      applications: ["Turbine oil analysis", "Generator bearing monitoring", "Transformer oil testing"]
    },
    {
      industry: "Manufacturing",
      applications: ["Hydraulic system monitoring", "Gearbox analysis", "Compressor oil testing"]
    },
    {
      industry: "Transportation",
      applications: ["Engine oil analysis", "Transmission fluid testing", "Differential oil monitoring"]
    },
    {
      industry: "Mining & Construction",
      applications: ["Heavy equipment monitoring", "Hydraulic system analysis", "Engine oil programs"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                <Droplets className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Tribology & Oil Analysis</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Lube Oil Analysis Certification
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Master the science of tribology and oil analysis with our comprehensive certification 
                program. Learn to optimize lubrication programs, extend equipment life, and prevent 
                costly failures through advanced oil analysis techniques.
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
                    <div className="text-3xl font-bold mb-2">3,500+</div>
                    <div className="text-primary-foreground/80">Certified Analysts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40+</div>
                    <div className="text-primary-foreground/80">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50%</div>
                    <div className="text-primary-foreground/80">Equipment Life Extension</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">93%</div>
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
                Oil analysis is one of the most cost-effective predictive maintenance technologies 
                available. Our comprehensive certification program covers tribology fundamentals, 
                lubrication principles, and advanced oil analysis techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This program prepares you to design, implement, and manage world-class oil analysis 
                programs that maximize equipment reliability while minimizing maintenance costs and 
                unplanned downtime.
              </p>
            </div>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-xl">Program Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Industry-recognized certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Comprehensive tribology training</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Multi-level certification path</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Hands-on laboratory training</span>
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
                  <div className="grid lg:grid-cols-2 gap-8">
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
                      <p className="text-muted-foreground mb-6">{level.description}</p>
                      
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
                      <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
                      <ul className="space-y-3">
                        {level.competencies.map((competency, compIndex) => (
                          <li key={compIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{competency}</span>
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

        {/* Test Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Oil Analysis Test Methods</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testMethods.map((method, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{method.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-2">
                    {method.tests.map((test, testIndex) => (
                      <div key={testIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground text-sm">{test}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analysis Parameters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Analysis Parameters</h2>
          <div className="space-y-6">
            {analysisParameters.map((category, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {category.parameters.map((param, paramIndex) => (
                      <Badge key={paramIndex} variant="outline" className="text-center">
                        {param}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Equipment Applications</h2>
          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {equipmentTypes.map((equipment, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{equipment}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{industry.industry}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  <h3 className="text-2xl font-bold text-foreground mb-6">Comprehensive Oil Analysis Training</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our program combines theoretical knowledge with extensive hands-on laboratory 
                    experience using professional oil analysis equipment and real-world samples.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>Lead Instructor:</strong> KVK Subramaniyam Naidu - Certified tribologist and oil analysis expert with 18+ years of experience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Hands-on laboratory training</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Real oil samples and case studies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Professional analysis software training</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">Program design and implementation</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-background p-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Laboratory Equipment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Viscometers</h5>
                      <p className="text-muted-foreground text-sm">Kinematic and dynamic viscosity measurement</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Particle Counters</h5>
                      <p className="text-muted-foreground text-sm">Automatic and laser particle counting systems</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Spectroscopy</h5>
                      <p className="text-muted-foreground text-sm">ICP and FTIR spectroscopic analysis</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground">Microscopy</h5>
                      <p className="text-muted-foreground text-sm">Ferrographic and analytical microscopy</p>
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
            <h2 className="text-3xl font-bold mb-4">Master the Science of Lubrication</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Become an expert in oil analysis and tribology. Learn to optimize lubrication programs 
              and extend equipment life through advanced diagnostic techniques.
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

export default LubeOilAnalysis;
