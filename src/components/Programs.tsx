import React from 'react';
import { Award, TrendingUp, Search, Zap, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Helper function to get correct route for each certification
  const getRouteForCertification = (title: string) => {
    switch (title) {
      case "CMRP Certification":
        return "/programs/cmrp";
      case "CMRT Certification":
        return "/programs/cmrt";
      case "CAMA Certification":
        return "/programs/cama";
      default:
        return "/programs";
    }
  };

  const certifications = [
    {
      icon: Award,
      title: "CMRP Certification",
      subtitle: "Certified Maintenance & Reliability Professional",
      description: "Comprehensive certification covering maintenance and reliability fundamentals, planning, and execution.",
      duration: "6 months",
      level: "Professional",
      features: ["Asset Management", "Maintenance Planning", "Reliability Analysis", "Work Management"]
    },
    {
      icon: TrendingUp,
      title: "CMRT Certification", 
      subtitle: "Certified Maintenance & Reliability Technician",
      description: "Technical certification focused on hands-on maintenance and reliability practices.",
      duration: "4 months",
      level: "Technician",
      features: ["Preventive Maintenance", "Troubleshooting", "Equipment Care", "Safety Protocols"]
    },
    {
      icon: Shield,
      title: "CAMA Certification",
      subtitle: "Certified Asset Management Assessor",
      description: "Advanced certification in asset management assessment and optimization strategies.",
      duration: "8 months", 
      level: "Expert",
      features: ["Asset Strategy", "Risk Assessment", "Performance Metrics", "Lifecycle Management"]
    },
    {
      icon: Zap,
      title: "Vibration Analysis",
      subtitle: "ISO 18436 Certified Program",
      description: "Comprehensive vibration analysis training for predictive maintenance applications.",
      duration: "3 months",
      level: "Specialist",
      features: ["Signal Processing", "Fault Diagnosis", "Machinery Health", "Data Analysis"]
    },
    {
      icon: Search,
      title: "Infrared Thermography",
      subtitle: "Level I & II Certification",
      description: "Professional thermography training for electrical and mechanical inspections.",
      duration: "2 months",
      level: "Specialist", 
      features: ["Thermal Imaging", "Heat Patterns", "Electrical Inspection", "Report Writing"]
    },
    {
      icon: Settings,
      title: "Lube Oil Analysis",
      subtitle: "Tribology & Oil Analysis",
      description: "Specialized training in lubricant analysis and tribological principles.",
      duration: "3 months",
      level: "Specialist",
      features: ["Oil Testing", "Contamination Analysis", "Wear Patterns", "Lubrication Programs"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Programs & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your career with globally recognized certifications and specialized training programs 
            designed by industry experts.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon and Level */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="h-7 w-7 text-white" />
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {cert.level}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">{cert.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>

              {/* Duration */}
              <div className="flex items-center mb-6">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duration:</span> {cert.duration}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {cert.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={getRouteForCertification(cert.title)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-105 text-center block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose REA Certifications?
            </h3>
            <p className="text-lg text-gray-600">
              Our programs are built on global standards and deliver measurable career advancement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Global Recognition</h4>
              <p className="text-gray-600">
                Certifications recognized by leading organizations worldwide, enhancing your professional credibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Career Advancement</h4>
              <p className="text-gray-600">
                Average 25% salary increase within 12 months of certification completion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Practical Skills</h4>
              <p className="text-gray-600">
                Hands-on training with real-world applications and industry-standard tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;