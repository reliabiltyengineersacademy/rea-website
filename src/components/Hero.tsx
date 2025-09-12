import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "RCA",
      subtitle: "Root Cause Analysis",
      description: "Systematic methodology for identifying the underlying causes of equipment failures and developing effective solutions.",
      color: "from-blue-500 to-blue-600",
      icon: "🔍"
    },
    {
      title: "CAMA",
      subtitle: "Certified Asset Management Assessor",
      description: "Advanced certification for professionals specializing in asset management system assessment and optimization.",
      color: "from-purple-500 to-purple-600",
      icon: "📊"
    },
    {
      title: "CMRP",
      subtitle: "Certified Maintenance & Reliability Professional",
      description: "Premier certification validating expertise in maintenance and reliability engineering practices worldwide.",
      color: "from-green-500 to-green-600",
      icon: "⚙️"
    },
    {
      title: "RCM",
      subtitle: "Reliability-Centered Maintenance",
      description: "Strategic approach to maintenance that focuses on preserving system functions rather than just equipment.",
      color: "from-orange-500 to-orange-600",
      icon: "🛠️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">🎯 Professional Reliability Training</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Pathway To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Asset Reliability Mastery
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Empowering engineers and organizations with world-class training, certifications, 
              and expertise in asset reliability engineering, predictive diagnostics, and maintenance optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs" className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200 text-sm">Certified Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 text-sm">Training Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-blue-200 text-sm">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative h-96">
            {/* Interactive Sliding Section */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full overflow-hidden">
              <div className="relative h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentSlide 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${slide.color} rounded-2xl flex items-center justify-center mb-6 mx-auto text-3xl`}>
                        {slide.icon}
                      </div>
                      <h3 className="text-4xl font-bold text-white text-center mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-xl text-blue-200 text-center mb-4 font-medium">
                        {slide.subtitle}
                      </p>
                      <p className="text-blue-100 text-center leading-relaxed px-4">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrow */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;