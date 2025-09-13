import React from 'react';
import Image from 'next/image';
import { Globe, Target, Users, Award, TrendingUp, Shield, Lightbulb, Network, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

const OurChapter = () => {
  const values = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "We promote mastery in reliability tools and techniques such as FMEA, RCM, RCA, CMMS, PdM, and Asset Health Indexing.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Professional Integrity",
      description: "We operate with ethical responsibility and industry compliance supporting ISO 55000, SMRP, IAM, and other global standards.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Skills Development",
      description: "We focus on practical skill-building across core areas including failure analysis, condition monitoring, data analytics, and maintenance optimization.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Network,
      title: "Cross-Industry Collaboration",
      description: "We enable knowledge exchange between sectors—oil & gas, power, water, manufacturing, pharma, ports, and utilities to benchmark and uplift maintenance maturity.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Innovation & Digitalization",
      description: "We drive adoption of Industry 4.0 technologies—AI/ML, IoT, digital twins, and APM platforms—to enhance decision-making and reliability outcomes.",
      color: "from-red-500 to-red-600"
    }
  ];

  const missionPoints = [
    "To build a global network of skilled reliability and maintenance professionals equipped with the latest tools, standards, and technologies.",
    "To promote competency-based training, certification, and knowledge sharing that supports lifecycle asset management and sustainable operational performance.",
    "To foster alignment between industry needs and professional capabilities in reliability engineering, predictive maintenance, and digital transformation."
  ];

  const industries = [
    "Oil & Gas", "Power Generation", "Water Treatment", "Manufacturing", 
    "Pharmaceuticals", "Ports & Marine", "Utilities", "Mining"
  ];

  const technologies = [
    "AI/ML", "IoT", "Digital Twins", "APM Platforms", "Predictive Analytics", 
    "CMMS", "Asset Health Indexing", "Condition Monitoring"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50">
                <Globe className="h-6 w-6 mr-3 text-blue-700 dark:text-blue-300" />
                <span className="text-lg font-medium text-blue-800 dark:text-blue-200">Our Chapter</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Global Association for<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                  Reliability and Maintenance Professionals
                </span>
              </h1>
              
              <div className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                (G-ARMP)
              </div>
              
              <div className="text-lg text-blue-600 dark:text-blue-400 mb-8 font-medium">
                Excellence in Asset Management & Reliability Engineering
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
                Global Association for Reliability and Maintenance Professionals (G-ARMP) aligned 
                specifically with industry skills and technical competencies in asset management, 
                maintenance, and reliability engineering.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Join Our Chapter
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side - G-AMRP Logo */}
            <div className="flex justify-end">
              <Image
                src="/G-AMRP Logo.png"
                alt="G-AMRP Logo"
                width={1200}
                height={600}
                className="h-144 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Target className="h-5 w-5 mr-2" />
              <span className="font-medium">Our Vision</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Driving Global Excellence</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 p-12">
            <CardContent>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-2xl text-foreground leading-relaxed font-medium">
                  To drive global excellence in maintenance, reliability, and asset integrity through 
                  innovation, talent development, and the application of cutting edge technologies 
                  across all industrial sectors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-medium">Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Building Global Networks</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Focus Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">Global</div>
                    <div className="text-muted-foreground text-sm">Network</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">Skills</div>
                    <div className="text-muted-foreground text-sm">Development</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Standards</div>
                    <div className="text-muted-foreground text-sm">Compliance</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Innovation</div>
                    <div className="text-muted-foreground text-sm">Technology</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certification Tiers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Award className="h-5 w-5 mr-2" />
              <span className="font-medium">Certification Tiers</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">G-ARMP Certification Framework</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive certification program is designed to establish G-ARMP as the leading certification body for reliability and maintenance excellence worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "GARMT",
                subtitle: "Global Associate Reliability & Maintenance Technician",
                target: "Technicians and entry-level engineers",
                focus: "Foundational knowledge of maintenance practices, safety, and basic reliability",
                exam: "100 MCQs (knowledge-based)",
                color: "from-green-500 to-green-600"
              },
              {
                title: "GARMP",
                subtitle: "Global Associate Reliability & Maintenance Professional",
                target: "Engineers, analysts, planners",
                focus: "Preventive, predictive, and reliability engineering practices",
                exam: "150 MCQs + case study scenario",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "GARML",
                subtitle: "Global Reliability & Maintenance Leader",
                target: "Managers, supervisors, leaders",
                focus: "Leadership, strategy, cost optimization, and asset management governance",
                exam: "150 MCQs + written essay + practical project",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "GARME",
                subtitle: "Global Expert in Reliability & Maintenance",
                target: "Senior experts, consultants",
                focus: "Global authority level, advanced analytics, and digital transformation expertise",
                exam: "Peer-reviewed portfolio + viva + white paper publication",
                color: "from-orange-500 to-orange-600"
              }
            ].map((tier, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent>
                  <div className={`w-12 h-12 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{tier.title.slice(-1)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tier.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">{tier.subtitle}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Target:</span>
                      <p className="text-muted-foreground">{tier.target}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Focus:</span>
                      <p className="text-muted-foreground">{tier.focus}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Exam:</span>
                      <p className="text-muted-foreground">{tier.exam}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competency Domains Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <Target className="h-5 w-5 mr-2" />
              <span className="font-medium">Competency Domains</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Core Knowledge Areas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Maintenance Practices",
                topics: ["Preventive", "Predictive", "Corrective", "Condition-based", "Lubrication", "Alignment"]
              },
              {
                title: "Reliability Engineering",
                topics: ["RCM", "FMECA", "Weibull Analysis", "Reliability Modeling (RBD, LCC)"]
              },
              {
                title: "Asset Management & Strategy",
                topics: ["ISO 55000 Alignment", "Criticality", "Lifecycle Costing", "AHI/ACI"]
              },
              {
                title: "Digitalization & Analytics",
                topics: ["APM Tools", "IoT", "AI/ML", "Big Data in Reliability"]
              },
              {
                title: "Work Management & Planning",
                topics: ["CMMS/EAM (Maximo, SAP, IPS)", "Planning", "Scheduling", "KPIs"]
              },
              {
                title: "Leadership, Safety & Sustainability",
                topics: ["Organizational Culture", "EHS", "ESG", "Financial Risk Trade-offs"]
              }
            ].map((domain, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="text-lg font-bold text-foreground mb-4">{domain.title}</h3>
                  <div className="space-y-2">
                    {domain.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
              <Lightbulb className="h-5 w-5 mr-2" />
              <span className="font-medium">Our Values</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Guiding Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Process & Governance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-medium">Certification Process & Governance</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Standards & Process</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  Certification Process
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Eligibility & Requirements</h4>
                    <p className="text-muted-foreground text-sm">Each certification level requires specific eligibility criteria, comprehensive exams, and ongoing recertification to maintain professional standards.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Validity Period</h4>
                    <p className="text-muted-foreground text-sm">All certifications are valid for 3 years, with Continuing Professional Development (CPD) credits required for renewal to ensure ongoing competency.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Assessment Methods</h4>
                    <p className="text-muted-foreground text-sm">Progressive assessment from multiple-choice questions to peer-reviewed portfolios, ensuring comprehensive evaluation of knowledge and practical skills.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-green-600" />
                  Governance & Standards
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">ISO/IEC 17024 Alignment</h4>
                    <p className="text-muted-foreground text-sm">Fully aligned with international standards for personnel certification, ensuring global recognition and credibility.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Independent Certification Board</h4>
                    <p className="text-muted-foreground text-sm">G-ARMP Certification Board (GCB) provides independent oversight and maintains the highest standards of integrity.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Industry Benchmarking</h4>
                    <p className="text-muted-foreground text-sm">Benchmarked against leading organizations including SMRP, IAM, Mobius, CIGRÉ, and ISO TC251 for continuous improvement.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industries & Technologies */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Network className="h-6 w-6 mr-3 text-primary" />
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center p-3 bg-primary/5 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-purple-600" />
                  Technologies We Promote
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote Section */}
        <Card className="bg-gradient-to-r from-muted to-muted/50 p-12 text-center mb-20">
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-muted-foreground mb-6">"</div>
              <p className="text-2xl font-medium leading-relaxed mb-8 text-foreground">
                Reliability, in both humans and machines, is the foundation of any successful business.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Join the Global Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of a worldwide community dedicated to advancing reliability and 
            maintenance excellence across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              Become a Member
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Contact G-ARMP
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurChapter;
