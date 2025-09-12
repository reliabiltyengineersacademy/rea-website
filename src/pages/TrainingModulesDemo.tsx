import React from 'react';
import { Play, Clock, Users, Star } from 'lucide-react';

const TrainingModulesDemo = () => {
  const trainingVideos = [
    {
      id: 1,
      title: "Introduction to Reliability Engineering",
      description: "Fundamentals of reliability engineering principles and methodologies",
      duration: "45 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Fundamentals"
    },
    {
      id: 2,
      title: "Root Cause Failure Analysis (RCFA)",
      description: "Advanced techniques for identifying and analyzing equipment failures",
      duration: "60 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Analysis"
    },
    {
      id: 3,
      title: "Vibration Analysis Fundamentals",
      description: "Understanding vibration patterns and diagnostic techniques",
      duration: "55 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Condition Monitoring"
    },
    {
      id: 4,
      title: "Predictive Maintenance Strategies",
      description: "Implementing effective predictive maintenance programs",
      duration: "50 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Maintenance"
    },
    {
      id: 5,
      title: "Asset Performance Management",
      description: "Optimizing asset performance through data-driven insights",
      duration: "65 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Management"
    },
    {
      id: 6,
      title: "Reliability Centered Maintenance (RCM)",
      description: "Comprehensive RCM methodology and implementation",
      duration: "70 min",
      instructor: "Vinoth Kumar Subramaniam",
      thumbnail: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "RCM"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">🎯 Demo Access</h2>
              <p className="text-blue-100">
                You're viewing the training modules in demo mode. Sign up for full access to unlock all features.
              </p>
            </div>
            <div className="text-right">
              <a
                href="/login"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Get Full Access
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Training Modules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts with practical, real-world content.
          </p>
        </div>

        {/* Video Library Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainingVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-110">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {video.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{video.instructor}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">50+ Videos</h3>
              <p className="text-gray-600 text-sm">Comprehensive video library covering all aspects of reliability engineering</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Learn from industry professionals with decades of experience</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Content</h3>
              <p className="text-gray-600 text-sm">Access exclusive content not available anywhere else</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingModulesDemo;
