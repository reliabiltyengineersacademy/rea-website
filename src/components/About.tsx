import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "Dedicated to advancing reliability engineering through comprehensive education and practical expertise."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry-leading professionals with decades of real-world reliability engineering experience."
    },
    {
      icon: Award,
      title: "Global Standards",
      description: "Built on internationally recognized standards including ISO 55000, API RP 580/581, and ISO 14224."
    },
    {
      icon: Globe,
      title: "Worldwide Impact",
      description: "Serving professionals across 25+ countries with localized training and support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Reliability Engineers Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaping the future of reliability engineering through world-class education, 
            certification programs, and industry expertise.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Excellence in Asset Reliability
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Reliability Engineers Academy (REA) stands at the forefront of professional development 
              in asset reliability engineering. We provide comprehensive training, globally recognized 
              certifications, and cutting-edge knowledge resources to engineers and organizations 
              worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expertise spans reliability-centered maintenance (RCM), root cause failure analysis 
              (RCFA), condition monitoring, predictive diagnostics, and maintenance optimization. 
              We bridge the gap between theoretical knowledge and practical application, ensuring 
              our graduates are equipped to drive real-world results.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Core Values</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Excellence</h5>
                    <p className="text-blue-100 text-sm">Delivering the highest quality education and training programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Innovation</h5>
                    <p className="text-blue-100 text-sm">Embracing cutting-edge technologies and methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Integrity</h5>
                    <p className="text-blue-100 text-sm">Maintaining the highest ethical standards in all we do</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Impact</h5>
                    <p className="text-blue-100 text-sm">Creating measurable value for our students and their organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;