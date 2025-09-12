import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, Users, BookOpen, ArrowRight, Shield, TrendingUp, Search } from 'lucide-react';

const CAMACertification = () => {
  const benefits = [
    "Recognition as an expert in asset management assessment and auditing",
    "Enhanced credibility for consulting and advisory roles",
    "Comprehensive knowledge of ISO 55000 and asset management standards",
    "Ability to conduct professional asset management assessments",
    "Increased earning potential and career advancement opportunities",
    "Access to exclusive CAMA practitioner network and resources"
  ];

  const targetAudience = [
    {
      title: "Asset Management Consultants",
      description: "Professionals providing asset management consulting services to organizations"
    },
    {
      title: "Internal Auditors",
      description: "Internal audit professionals focusing on asset management systems and processes"
    },
    {
      title: "Asset Management Leaders",
      description: "Senior professionals responsible for asset management strategy and implementation"
    },
    {
      title: "Reliability Engineers",
      description: "Engineers seeking to expand their expertise into asset management assessment"
    }
  ];

  const assessmentAreas = [
    {
      area: "Asset Management Strategy",
      percentage: "20%",
      topics: ["Strategic alignment", "Asset management policy", "Organizational context", "Stakeholder requirements"]
    },
    {
      area: "Asset Management Planning",
      percentage: "25%",
      topics: ["Asset management plans", "Risk management", "Performance management", "Resource planning"]
    },
    {
      area: "Asset Lifecycle Management",
      percentage: "20%",
      topics: ["Lifecycle planning", "Asset creation/acquisition", "Operation and maintenance", "Disposal"]
    },
    {
      area: "Asset Information Management",
      percentage: "15%",
      topics: ["Information requirements", "Data quality", "Information systems", "Knowledge management"]
    },
    {
      area: "Assessment Methodology",
      percentage: "20%",
      topics: ["Assessment planning", "Evidence gathering", "Gap analysis", "Reporting and recommendations"]
    }
  ];

  const careerBenefits = [
    {
      icon: Shield,
      title: "Professional Credibility",
      description: "Establish yourself as a trusted asset management assessment expert"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Open doors to senior consulting and advisory positions"
    },
    {
      icon: Search,
      title: "Assessment Expertise",
      description: "Develop specialized skills in asset management system evaluation"
    },
    {
      icon: Users,
      title: "Network Access",
      description: "Join an exclusive community of certified asset management assessors"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-500 rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Expert Certification</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                CAMA Certification
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Certified Asset Management Assessor - The premier certification for professionals 
                specializing in asset management system assessment, auditing, and optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/pricing"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2,500+</div>
                    <div className="text-purple-200">Certified Assessors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">35+</div>
                    <div className="text-purple-200">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">35%</div>
                    <div className="text-purple-200">Average Salary Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">88%</div>
                    <div className="text-purple-200">Pass Rate</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certification Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Certified Asset Management Assessor (CAMA) certification is designed for 
                professionals who specialize in evaluating, auditing, and optimizing asset 
                management systems. This advanced certification focuses on assessment methodologies, 
                ISO 55000 standards, and best practices for asset management system evaluation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CAMA certification validates your expertise in conducting comprehensive asset 
                management assessments, identifying improvement opportunities, and providing 
                strategic recommendations to enhance organizational asset management maturity.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">4-hour comprehensive exam</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">250 multiple-choice questions</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Valid for 3 years</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Advanced level certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Should Pursue CAMA?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{audience.title}</h3>
                <p className="text-gray-700">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certification Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Assessment Content Areas</h2>
          <div className="space-y-6">
            {assessmentAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.area}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {area.percentage}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prerequisites & Requirements</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Education & Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bachelor's degree in engineering or related field</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">5+ years of asset management experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Experience with ISO 55000 or similar standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Previous assessment or auditing experience preferred</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Knowledge</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Asset management principles and practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk management methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Financial analysis and lifecycle costing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance measurement and KPIs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Course Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">REA CAMA Preparation Course</h2>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Assessment Training</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our CAMA preparation course is designed for experienced professionals seeking to 
                  master asset management assessment methodologies and become certified assessors.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Lead Instructor:</strong> Vinoth Kumar Subramaniam - Senior asset management consultant and certified assessor.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">50+ hours of advanced training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Real-world assessment case studies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">ISO 55000 deep-dive sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Expert assessor mentorship</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Training Modules</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 1: Assessment Fundamentals</h5>
                    <p className="text-gray-600 text-sm">Assessment planning, methodology, and frameworks</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 2: ISO 55000 Standards</h5>
                    <p className="text-gray-600 text-sm">Comprehensive coverage of ISO 55000 series</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 3: Evidence & Analysis</h5>
                    <p className="text-gray-600 text-sm">Data collection, analysis, and gap identification</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 4: Reporting & Recommendations</h5>
                    <p className="text-gray-600 text-sm">Assessment reporting and improvement planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Certified Asset Management Assessor</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the elite group of professionals qualified to assess and optimize asset 
            management systems across industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Enroll in CAMA Course
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAMACertification;