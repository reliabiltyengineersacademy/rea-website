import React from 'react';
import { Award, Users, TrendingUp, Shield, CheckCircle, Star, Globe, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LogoSlider from '@/components/ui/logo-slider';

const MeetFounder = () => {
  const certifications = [
    "IAM - Institute of Asset Management",
    "CMRP - Certified Maintenance & Reliability Professional",
    "CRL - Certified Reliability Leader",
    "CAMA - Certified Asset Management Assessor",
    "RCM3™ - Reliability Centered Maintenance",
    "PROACT® RCA - Root Cause Analysis",
    "ARP-E - Asset Reliability Practitioner",
    "ASQ-CRE - Certified Reliability Engineer",
    "Six Sigma Green Belt",
    "CAT II Vibration Analyst"
  ];

  const expertiseAreas = [
    {
      icon: Shield,
      title: "Reliability Frameworks",
      description: "RCM, RAM, RCA, and Reliability Analytics Projects",
      details: ["Reliability Centered Maintenance", "Risk Assessment & Management", "Root Cause Analysis", "Predictive Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Asset Health & Integrity",
      description: "Asset Aging Assessments, Replacement Decision-Making, and Asset Integrity Management",
      details: ["Asset Health Index", "Aging Assessment", "Replacement Strategies", "Integrity Management"]
    },
    {
      icon: Globe,
      title: "Digitization & IIoT Solutions",
      description: "Leveraging predictive analytics and cutting-edge technologies for smarter asset management",
      details: ["Predictive Analytics", "IIoT Implementation", "Digital Transformation", "Smart Asset Management"]
    },
    {
      icon: Target,
      title: "Documentation & Process Excellence",
      description: "Development of RCM, FMEA, RAM Studies, RCA reports, and reliability procedures",
      details: ["RCM Studies", "FMEA Analysis", "RAM Studies", "Reliability Procedures"]
    }
  ];

  const tools = [
    "GE APM", "IPS APM/AIP", "DNV MAROS", "SAP", "IBM Maximo", 
    "Reliasoft", "JMP", "Power BI", "Tableau"
  ];

  const industries = [
    {
      name: "Utilities",
      description: "Power generation, transmission, and distribution systems"
    },
    {
      name: "Petrochemicals",
      description: "Oil & gas, refining, and chemical processing facilities"
    },
    {
      name: "Ports & Marine",
      description: "Port operations, marine terminals, and shipping infrastructure"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Professionals Trained",
      description: "Reliability engineers and maintenance professionals certified"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach across multiple continents and industries"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Average Downtime Reduction",
      description: "Achieved through implemented reliability frameworks"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years of Excellence",
      description: "Dedicated to advancing reliability engineering practices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50">
                <Award className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-300" />
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Meet the Founder</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                KVK Subramaniyam Naidu
              </h1>
              
              <p className="text-xl text-blue-700 dark:text-blue-300 mb-4 font-medium">
                Asset Management & Reliability Consultant
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "Transforming Maintenance into Reliability: Enhancing Performance, Reducing Risk, Sustaining Value."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4">
                  Download CV
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30 dark:border-blue-700/30">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-blue-200/30 dark:bg-blue-800/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <achievement.icon className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{achievement.number}</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm font-medium mb-1">{achievement.label}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              KVK Subramaniyam Naidu is a globally certified Asset Management & Reliability Consultant with a proven track record of transforming asset maintenance into reliable, sustainable frameworks that deliver measurable business value. With expertise spanning utilities, petrochemicals, and ports, he has dedicated his career to enhancing performance, reducing risk, and sustaining value for organizations worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Holding internationally recognized certifications and recognized as a trusted advisor in reliability engineering, asset integrity, RCM/RAM/RCA, and Asset Health Index frameworks, KVK brings unparalleled expertise to every engagement.
            </p>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <LogoSlider 
            title="Trusted by Global Industry Leaders"
            subtitle="Our expertise has been recognized and utilized by leading organizations worldwide"
          />
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Professional Certifications</h2>
          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Expertise & Approach</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            KVK brings a strategic blend of technical expertise and business alignment, ensuring that asset management strategies drive operational efficiency and organizational excellence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="p-8">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="space-y-2">
                    {area.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Tools & Technologies</h2>
          <Card className="p-8">
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 text-center">
                Proficient in leading tools providing data-driven insights and innovative solutions that optimize asset performance and extend asset longevity.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Industry Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-8 text-center">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision & Commitment */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 p-12">
            <CardContent>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">Vision & Commitment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At the core of KVK's work is a commitment to operational excellence. His mission is to help organizations move beyond maintenance to embrace reliability-centered asset management, ensuring sustainable performance and reducing unplanned downtime.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Known for his analytical mindset, collaborative approach, and innovative problem-solving, KVK partners with cross-functional teams to integrate reliability goals seamlessly into business objectives. His strategic frameworks and advanced use of predictive analytics empower organizations to maximize efficiency, minimize costs, and sustain long-term asset performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Champion of Reliability */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground">
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6">A Champion of Reliability</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                With a rich career dedicated to enhancing system integrity, operational efficiency, and asset performance, KVK Subramaniyam Naidu continues to champion reliability as a driver of business value. His leadership, expertise, and vision make him a trusted partner for organizations seeking to elevate their asset management practices to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn About Our Programs
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeetFounder;
