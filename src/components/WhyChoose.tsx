import React from 'react';
import { CheckCircle, Globe, Award, Users, TrendingUp, Shield } from 'lucide-react';

const WhyChoose = () => {
  const differentiators = [
    {
      icon: Globe,
      title: "Global Standards Compliance",
      description: "Built on internationally recognized standards including ISO 55000, API RP 580/581, and ISO 14224",
      features: ["ISO 55000 Asset Management", "API RP 580/581 Risk-Based Inspection", "ISO 14224 Reliability Data", "IEC 62278 Railway Applications"]
    },
    {
      icon: Users,
      title: "Industry-Trusted Faculty",
      description: "Learn from seasoned professionals with decades of real-world reliability engineering experience",
      features: ["20+ Years Average Experience", "Active Industry Practitioners", "Published Researchers", "Global Consulting Expertise"]
    },
    {
      icon: TrendingUp,
      title: "Capability Transfer Focus",
      description: "Emphasis on practical knowledge transfer and empowering professionals with actionable skills",
      features: ["Hands-on Training", "Real Case Studies", "Practical Tools", "Immediate Application"]
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Demonstrated success in improving organizational reliability and asset performance",
      features: ["98% Success Rate", "500+ Certified Professionals", "25+ Countries Served", "Industry Recognition"]
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Certified Engineers", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose REA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets Reliability Engineers Academy apart as the premier destination 
            for reliability engineering education and professional development.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Success Stories</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              See how REA has transformed careers and organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-100 mb-4">Average Reduction in Downtime</div>
              <p className="text-blue-200 text-sm">
                Organizations implementing REA-trained professionals' recommendations
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-blue-100 mb-4">Average Salary Increase</div>
              <p className="text-blue-200 text-sm">
                Within 12 months of certification completion
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100 mb-4">Career Advancement Rate</div>
              <p className="text-blue-200 text-sm">
                Professionals reporting career progression within 2 years
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Advance Your Reliability Engineering Career?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with REA's 
            world-class training and certification programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Programs
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;