import React from 'react';
import { Settings, Target, CheckCircle, ArrowRight, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

const ReliabilityEngineering = () => {
  const methodologies = [
    {
      title: "Reliability-Centered Maintenance (RCM)",
      description: "Systematic approach to determine maintenance requirements for any physical asset in its operating context.",
      benefits: ["Reduces maintenance costs", "Improves asset reliability", "Optimizes maintenance strategies"]
    },
    {
      title: "Failure Mode and Effects Analysis (FMEA)",
      description: "Systematic method for identifying potential failure modes and their effects on system performance.",
      benefits: ["Prevents failures", "Improves safety", "Reduces risk"]
    },
    {
      title: "Maintenance Optimization (MTA)",
      description: "Strategic approach to optimize maintenance activities based on asset criticality and performance data.",
      benefits: ["Cost optimization", "Resource allocation", "Performance improvement"]
    },
    {
      title: "Criticality Assessments",
      description: "Comprehensive evaluation of asset importance to business operations and safety requirements.",
      benefits: ["Risk prioritization", "Resource focus", "Business alignment"]
    }
  ];

  const deliverables = [
    "Customized RCM frameworks tailored to your industry",
    "Comprehensive FMEA documentation and analysis",
    "Maintenance strategy optimization recommendations",
    "Asset criticality ranking and prioritization",
    "KPI development and performance metrics",
    "Implementation roadmap and change management support"
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-foreground">
        <Container className="py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-200/50 dark:bg-blue-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50">
              <Settings className="h-6 w-6 mr-3 text-blue-700 dark:text-blue-300" />
              <span className="text-lg font-medium text-blue-800 dark:text-blue-200">Reliability Engineering</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Reliability Engineering &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Maintenance Strategy Advisory
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              REA specializes in the design and deployment of customized Reliability-Centered Maintenance (RCM) frameworks. 
              Leveraging advanced methodologies to develop targeted maintenance strategies aligned with business KPIs, 
              asset lifecycle goals, and operational constraints.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4">
                Download Brochure
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Maintenance Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our reliability engineering services facilitate the transition from reactive to proactive and predictive 
                maintenance, supporting long-term asset reliability and cost control. We develop strategies that align 
                with your business objectives and operational constraints.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                These strategies enable organizations to optimize maintenance resources, reduce unplanned downtime, 
                and achieve sustainable operational excellence across complex industrial ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-3">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="px-6 py-3">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Reduced Maintenance Costs</h4>
                      <p className="text-muted-foreground text-sm">Optimize maintenance spending through strategic planning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Improved Asset Reliability</h4>
                      <p className="text-muted-foreground text-sm">Enhance equipment performance and longevity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Risk Mitigation</h4>
                      <p className="text-muted-foreground text-sm">Identify and address potential failure modes proactively</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Compliance Assurance</h4>
                      <p className="text-muted-foreground text-sm">Meet industry standards and regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Proven Methodologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We employ industry-leading methodologies and frameworks to deliver comprehensive reliability engineering solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{method.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                    {method.benefits.map((benefit, benefitIndex) => (
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

        {/* Deliverables */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Service Deliverables</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach ensures you receive actionable insights and practical solutions for immediate implementation.
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary to-primary/80 p-12 text-primary-foreground">
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Maintenance Strategy?</h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  Partner with REA to develop a comprehensive reliability engineering framework that drives 
                  operational excellence and maximizes asset performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                    Start Your Project
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
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

export default ReliabilityEngineering;
