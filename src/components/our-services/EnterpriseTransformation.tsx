import React from 'react';
import { TrendingUp, CheckCircle, ArrowRight, Award, Users, Target, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

const EnterpriseTransformation = () => {
  const services = [
    {
      title: "Reliability Maturity Assessment",
      description: "Comprehensive evaluation of current reliability practices and identification of improvement opportunities.",
      benefits: ["Current state analysis", "Gap identification", "Improvement roadmap"]
    },
    {
      title: "Governance Framework Development",
      description: "Design and implementation of organizational structures and processes for reliability management.",
      benefits: ["Clear accountability", "Process standardization", "Performance management"]
    },
    {
      title: "KPI Development & Monitoring",
      description: "Creation of key performance indicators and monitoring systems for reliability excellence.",
      benefits: ["Performance visibility", "Data-driven decisions", "Continuous improvement"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on support for implementing reliability initiatives and change management.",
      benefits: ["Change management", "Training support", "Sustained adoption"]
    }
  ];

  const transformationPhases = [
    {
      phase: "Assessment",
      title: "Current State Analysis",
      description: "Comprehensive evaluation of existing reliability practices, processes, and capabilities."
    },
    {
      phase: "Design",
      title: "Strategy Development",
      description: "Creation of customized reliability strategy and governance framework."
    },
    {
      phase: "Implementation",
      title: "Rollout & Training",
      description: "Systematic implementation with comprehensive training and change management."
    },
    {
      phase: "Optimization",
      title: "Continuous Improvement",
      description: "Ongoing monitoring, optimization, and evolution of reliability practices."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-100 via-red-200 to-red-100 dark:from-red-900 dark:via-red-800 dark:to-red-900 text-foreground">
        <Container className="py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-red-200/50 dark:bg-red-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-red-300/50 dark:border-red-700/50">
              <TrendingUp className="h-6 w-6 mr-3 text-red-700 dark:text-red-300" />
              <span className="text-lg font-medium text-red-800 dark:text-red-200">Enterprise Transformation</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Enterprise Reliability<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
                Transformation Programs
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              For clients seeking to embed reliability into their operating model, REA offers enterprise-wide reliability 
              maturity assessments, governance frameworks, KPI development, and implementation support. These programs 
              institutionalize reliability as a business function.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                Start Transformation
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Overview */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Reliability Integration</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our enterprise transformation programs help organizations move beyond maintenance activities to embed 
                reliability as a core business function. We provide comprehensive support from assessment to implementation 
                and ongoing optimization.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                These programs are designed to create lasting change, building internal capabilities and establishing 
                sustainable processes that drive continuous improvement and business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-3">
                  Request Assessment
                </Button>
                <Button variant="outline" className="px-6 py-3">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-bold text-foreground mb-6">Transformation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cultural Change</h4>
                      <p className="text-muted-foreground text-sm">Embed reliability thinking across the organization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Process Standardization</h4>
                      <p className="text-muted-foreground text-sm">Consistent, repeatable reliability practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Performance Improvement</h4>
                      <p className="text-muted-foreground text-sm">Measurable improvements in reliability metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Sustainable Results</h4>
                      <p className="text-muted-foreground text-sm">Long-term capability building and self-sufficiency</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Transformation Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated approach ensures successful transformation from assessment to implementation and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transformation Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Transformation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures successful transformation with clear milestones and measurable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="text-sm font-semibold text-red-600 mb-2">{phase.phase}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 p-12 text-white">
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
                <p className="text-xl text-red-100 leading-relaxed mb-8">
                  Partner with REA to embed reliability as a core business function. Transform your organization 
                  with our comprehensive enterprise reliability transformation programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4">
                    Start Transformation
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4">
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
};

export default EnterpriseTransformation;
