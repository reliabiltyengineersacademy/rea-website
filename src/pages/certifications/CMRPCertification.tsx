import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, Users, BookOpen, ArrowRight, Star } from 'lucide-react';

const CMRPCertification = () => {
  const benefits = [
    "Global recognition as a maintenance and reliability professional",
    "Enhanced career opportunities and earning potential",
    "Comprehensive knowledge of maintenance and reliability best practices",
    "Access to exclusive SMRP member resources and networking",
    "Continuing education requirements ensure ongoing professional development",
    "Industry credibility and professional validation"
  ];

  const eligibilityOptions = [
    {
      title: "Option 1: Education + Experience",
      requirements: [
        "Bachelor's degree in engineering or related field",
        "2 years of maintenance and reliability experience"
      ]
    },
    {
      title: "Option 2: Experience Only",
      requirements: [
        "5 years of maintenance and reliability experience",
        "No degree required"
      ]
    },
    {
      title: "Option 3: Technical Degree + Experience",
      requirements: [
        "Associate degree or technical certification",
        "3 years of maintenance and reliability experience"
      ]
    }
  ];

  const examDomains = [
    {
      domain: "Business and Management",
      percentage: "22%",
      topics: ["Strategic planning", "Financial management", "Leadership", "Communication"]
    },
    {
      domain: "Manufacturing Process Reliability",
      percentage: "21%",
      topics: ["Process optimization", "Quality systems", "Statistical analysis", "Continuous improvement"]
    },
    {
      domain: "Equipment Reliability",
      percentage: "19%",
      topics: ["Asset management", "Reliability engineering", "Life cycle management", "Design for reliability"]
    },
    {
      domain: "Work Management",
      percentage: "18%",
      topics: ["Work planning", "Scheduling", "Resource management", "Performance measurement"]
    },
    {
      domain: "Defect Elimination and Prevention",
      percentage: "20%",
      topics: ["Root cause analysis", "Failure analysis", "Preventive maintenance", "Predictive maintenance"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500 rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Professional Certification</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                CMRP Certification
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Certified Maintenance & Reliability Professional - The global gold-standard 
                certification that validates your expertise in maintenance and reliability engineering.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/pricing"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15,000+</div>
                    <div className="text-blue-200">Certified Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-200">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">25%</div>
                    <div className="text-blue-200">Average Salary Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-200">Pass Rate</div>
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
                The Certified Maintenance & Reliability Professional (CMRP) certification is the 
                premier credential for maintenance and reliability professionals worldwide. Administered 
                by the Society for Maintenance & Reliability Professionals (SMRP), this certification 
                validates your knowledge and expertise across all aspects of maintenance and reliability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CMRP certification demonstrates your commitment to professional excellence and provides 
                recognition of your skills in maintenance planning, reliability engineering, asset management, 
                and organizational leadership.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">4-hour computer-based exam</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">300 multiple-choice questions</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Valid for 3 years</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Internationally recognized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certification Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{option.title}</h3>
                <ul className="space-y-3">
                  {option.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Domains */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Exam Content Domains</h2>
          <div className="space-y-6">
            {examDomains.map((domain, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{domain.domain}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {domain.percentage}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.topics.map((topic, topicIndex) => (
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

        {/* Course Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">REA CMRP Preparation Course</h2>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Preparation Program</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our CMRP preparation course is designed by industry experts and covers all exam domains 
                  with practical examples, case studies, and hands-on exercises.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Lead Instructor:</strong> Vinoth Kumar Subramaniam - Certified reliability expert with over 15 years of industry experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">40+ hours of comprehensive training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Practice exams and assessments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Expert instructor support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Study materials and resources</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Course Modules</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 1: Business & Management</h5>
                    <p className="text-gray-600 text-sm">Strategic planning, leadership, and financial management</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 2: Manufacturing Process Reliability</h5>
                    <p className="text-gray-600 text-sm">Process optimization and quality systems</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 3: Equipment Reliability</h5>
                    <p className="text-gray-600 text-sm">Asset management and reliability engineering</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 4: Work Management</h5>
                    <p className="text-gray-600 text-sm">Planning, scheduling, and performance measurement</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Module 5: Defect Elimination</h5>
                    <p className="text-gray-600 text-sm">Root cause analysis and preventive maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have achieved CMRP certification and taken their 
            careers to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Enroll in CMRP Course
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMRPCertification;