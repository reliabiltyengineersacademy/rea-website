import React from 'react';
import { Award, CheckCircle, ArrowRight, Users, Target, BarChart3, Shield, Globe, TrendingUp, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Expertise Across Asset-Intensive Industries",
      description: "With a strong foundation in engineering principles and sector-specific knowledge, REA brings extensive experience serving Oil & Gas, Power Generation, Petrochemicals, Fertilizers, Water Utilities, and Mining.",
      icon: Award,
      details: [
        "Deep industry knowledge and experience",
        "Understanding of unique technical challenges",
        "Regulatory and commercial expertise",
        "Tailored solutions for each domain"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Standards-Based, Globally Recognized Methodologies",
      description: "Our methodologies align with leading international frameworks, including ISO 55000, ISO 14224, API RP 580/581, and client-specific reliability protocols such as ADNOC, ARAMCO, BP, and SHELL.",
      icon: Shield,
      details: [
        "ISO 55000 compliance",
        "API standards alignment",
        "Client-specific protocols",
        "Global recognition and credibility"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Comprehensive, End-to-End Service Model",
      description: "REA provides a unified suite of reliability engineering and asset management services including RCM, RCFA, RBI, Condition Monitoring, Asset Lifecycle Planning, and Technical Training & Advisory.",
      icon: Target,
      details: [
        "Integrated service delivery",
        "Seamless implementation",
        "Comprehensive coverage",
        "Long-term performance monitoring"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data-Driven, Technology-Enabled Intelligence",
      description: "Our digital capabilities enhance decision-making at every level. REA integrates IIoT, cloud-based platforms, and AI-assisted diagnostics to provide real-time visibility into asset conditions.",
      icon: BarChart3,
      details: [
        "Real-time asset visibility",
        "AI-assisted diagnostics",
        "Predictive maintenance strategies",
        "Cost optimization insights"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Customized Strategies Aligned with Business Objectives",
      description: "We reject templated solutions. Every engagement begins with a deep understanding of your organization's operational priorities, asset criticality, and performance benchmarks.",
      icon: Lightbulb,
      details: [
        "Business-aligned solutions",
        "Customized approaches",
        "Measurable outcomes",
        "Strategic alignment"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Knowledge Transfer and Workforce Enablement",
      description: "Through our Center for Reliability Excellence, we build in-house capability within client organizations. Our structured training programs equip professionals with competencies to manage reliability initiatives internally.",
      icon: Users,
      details: [
        "Internal capability building",
        "Structured training programs",
        "Role-based curriculum",
        "Long-term self-sufficiency"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Partnership-Focused Approach",
      description: "At REA, we go beyond project delivery. We build enduring partnerships grounded in transparency, performance accountability, and continuous improvement.",
      icon: Globe,
      details: [
        "Enduring partnerships",
        "Transparency and accountability",
        "Continuous improvement",
        "Strategic value delivery"
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const industries = [
    "Oil & Gas", "Power Generation", "Petrochemicals", "Fertilizers", 
    "Water Utilities", "Mining", "Manufacturing", "Process Industries"
  ];

  const standards = [
    "ISO 55000 (Asset Management)",
    "ISO 14224 (Reliability Data)",
    "API RP 580/581 (Risk-Based Inspection)",
    "ADNOC Standards",
    "ARAMCO Protocols",
    "BP Guidelines",
    "SHELL Standards"
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground">
        <Container className="py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50">
              <Award className="h-6 w-6 mr-3 text-blue-700 dark:text-blue-300" />
              <span className="text-lg font-medium text-blue-800 dark:text-blue-200">Why Choose REA</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Why Choose REA –<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Reliability Engineers Academy
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Strategic Reliability. Engineered Performance. In today's global industrial ecosystem—where operational 
              efficiency, safety compliance, and asset performance are key business imperatives—partnering with the 
              right reliability engineering firm is critical.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Introduction */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Trusted by Leading Organizations</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              REA stands as a trusted advisor to leading organizations, delivering end-to-end solutions that optimize 
              asset health, reduce operational risk, and enable sustainable performance. Here's why discerning enterprises 
              across energy, manufacturing, and process industries choose REA as their long-term asset reliability partner.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mb-20">
          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">{reason.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{reason.description}</p>
                  <div className="space-y-3">
                    {reason.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="p-8">
                    <CardContent>
                      <div className="text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                          <reason.icon className="h-10 w-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Key Advantage</h4>
                        <p className="text-muted-foreground">
                          {index === 0 && "Industry-leading expertise across multiple sectors"}
                          {index === 1 && "Full compliance with international standards"}
                          {index === 2 && "Comprehensive, integrated service delivery"}
                          {index === 3 && "Cutting-edge technology and analytics"}
                          {index === 4 && "Customized, business-aligned solutions"}
                          {index === 5 && "Internal capability building and training"}
                          {index === 6 && "Long-term strategic partnerships"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries & Standards */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-primary" />
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
                  <Shield className="h-6 w-6 mr-3 text-green-600" />
                  Standards & Compliance
                </h3>
                <div className="space-y-3">
                  {standards.map((standard, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary to-primary/80 p-12 text-primary-foreground">
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to Partner with REA?</h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  Choosing REA is not a transactional decision—it's a strategic investment in your operational future. 
                  Let us help you drive reliability as a business enabler, not just a maintenance function.
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8 font-medium">
                  REA – Engineering Reliability for the World's Most Demanding Environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                    Start Partnership
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
