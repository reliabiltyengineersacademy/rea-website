import React, { useState } from 'react';
import { Play, Calendar, Clock, User, Filter, Search } from 'lucide-react';

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Webinars' },
    { id: 'predictive', name: 'Predictive Maintenance' },
    { id: 'technology', name: 'Technology & Innovation' },
    { id: 'analysis', name: 'Failure Analysis' },
    { id: 'management', name: 'Asset Management' },
    { id: 'compliance', name: 'Compliance & Standards' }
  ];

  const webinars = [
    {
      id: 1,
      title: "Advanced Vibration Analysis Techniques",
      description: "Deep dive into advanced vibration analysis methods for predictive maintenance applications in rotating machinery.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "March 15, 2025",
      duration: "60 minutes",
      category: "predictive",
      videoId: "dQw4w9WgXcQ", // YouTube video ID
      thumbnail: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1250
    },
    {
      id: 2,
      title: "Digital Transformation in Asset Management",
      description: "Exploring how digital technologies are revolutionizing asset management practices across industries.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "March 22, 2025",
      duration: "45 minutes",
      category: "technology",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 980
    },
    {
      id: 3,
      title: "Root Cause Analysis Best Practices",
      description: "Comprehensive guide to conducting effective root cause failure analysis using proven methodologies.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "March 29, 2025",
      duration: "75 minutes",
      category: "analysis",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1450
    },
    {
      id: 4,
      title: "ISO 55000 Implementation Framework",
      description: "Step-by-step approach to implementing ISO 55000 asset management standards in your organization.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "April 5, 2025",
      duration: "90 minutes",
      category: "compliance",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 875
    },
    {
      id: 5,
      title: "Condition Monitoring Technologies",
      description: "Overview of modern condition monitoring technologies and their applications in industrial settings.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "April 12, 2025",
      duration: "55 minutes",
      category: "predictive",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1120
    },
    {
      id: 6,
      title: "AI in Maintenance Optimization",
      description: "How artificial intelligence is transforming maintenance scheduling and resource allocation strategies.",
      speaker: "Vinoth Kumar Subramaniam",
      date: "April 19, 2025",
      duration: "65 minutes",
      category: "technology",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1340
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Monthly Webinars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of recorded webinars featuring industry experts 
            sharing insights on reliability engineering, asset management, and predictive maintenance.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search webinars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWebinars.map((webinar) => (
            <div 
              key={webinar.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img 
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {webinar.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === webinar.category)?.name}
                  </span>
                  <span className="text-gray-500 text-sm">{webinar.views} views</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {webinar.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {webinar.speaker}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {webinar.date}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Recording
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredWebinars.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No webinars found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Live Webinars</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss our upcoming live sessions. Register now to participate in real-time 
            discussions with industry experts.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Upcoming Sessions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webinars;