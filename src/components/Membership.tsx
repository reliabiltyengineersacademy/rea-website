import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, BookOpen, Video, Download, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Membership = () => {
  const [currentWebinar, setCurrentWebinar] = useState(0);

  const membershipBenefits = [
    {
      icon: BookOpen,
      title: "Exclusive Knowledge Resources",
      description: "Access to premium technical papers, case studies, and industry reports"
    },
    {
      icon: Video,
      title: "Monthly Webinars",
      description: "Live sessions with industry experts covering latest trends and technologies"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with reliability professionals from around the world"
    },
    {
      icon: Download,
      title: "Resource Library",
      description: "Downloadable templates, checklists, and best practice guides"
    },
    {
      icon: Calendar,
      title: "Priority Event Access",
      description: "Early registration and discounts for conferences and workshops"
    },
    {
      icon: Star,
      title: "Certification Discounts",
      description: "Special pricing on all REA certification programs"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Advanced Vibration Analysis Techniques",
      date: "March 15, 2025",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Johnson",
      topic: "Predictive Maintenance",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Digital Transformation in Asset Management",
      date: "March 22, 2025", 
      time: "10:00 AM EST",
      speaker: "Michael Chen",
      topic: "Technology & Innovation",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Root Cause Analysis Best Practices",
      date: "March 29, 2025",
      time: "3:00 PM EST", 
      speaker: "Dr. Robert Martinez",
      topic: "Failure Analysis",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextWebinar = () => {
    setCurrentWebinar((prev) => (prev + 1) % upcomingWebinars.length);
  };

  const prevWebinar = () => {
    setCurrentWebinar((prev) => (prev - 1 + upcomingWebinars.length) % upcomingWebinars.length);
  };

  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Membership & Webinars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our global community of reliability professionals and stay ahead with exclusive 
            resources, networking opportunities, and expert insights.
          </p>
        </div>

        {/* Membership Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Membership Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Membership CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get instant access to exclusive resources, monthly webinars, and a global network 
                of reliability professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/pricing"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Join Now
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming Webinars
          </h3>

          {/* Webinar Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img 
                src={upcomingWebinars[currentWebinar].image}
                alt={upcomingWebinars[currentWebinar].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl mx-auto px-8 text-white">
                  <div className="inline-block bg-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {upcomingWebinars[currentWebinar].topic}
                  </div>
                  <h4 className="text-3xl font-bold mb-4">
                    {upcomingWebinars[currentWebinar].title}
                  </h4>
                  <div className="flex items-center space-x-6 text-blue-100 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {upcomingWebinars[currentWebinar].date}
                    </div>
                    <div className="flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      {upcomingWebinars[currentWebinar].time}
                    </div>
                  </div>
                  <p className="text-lg mb-6">
                    Presented by <span className="font-semibold">{upcomingWebinars[currentWebinar].speaker}</span>
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevWebinar}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button 
                onClick={nextWebinar}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Webinar Indicators */}
            <div className="flex justify-center space-x-2 py-6">
              {upcomingWebinars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWebinar(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentWebinar ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Webinars Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {upcomingWebinars.map((webinar, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                  index === currentWebinar ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setCurrentWebinar(index)}
              >
                <img 
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">{webinar.topic}</div>
                  <h5 className="font-semibold text-gray-900 mb-2">{webinar.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">{webinar.speaker}</p>
                  <p className="text-sm text-gray-500">{webinar.date} • {webinar.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;