import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Shield, Users, ArrowRight, Clock, User } from 'lucide-react';

const KnowledgeHub = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Reliability Strategies",
      description: "Advanced methodologies for asset reliability optimization",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Technology & Transformation",
      description: "Digital solutions and Industry 4.0 applications",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Compliance & Governance",
      description: "Regulatory requirements and best practices",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Workforce Capability",
      description: "Training and development strategies",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const featuredArticles = [
    {
      slug: "predictive-maintenance-revolution",
      title: "Implementing Predictive Maintenance in Manufacturing",
      excerpt: "A comprehensive guide to deploying predictive maintenance strategies that reduce downtime by up to 40%.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "8 min read",
      category: "Reliability Strategies",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true
    },
    {
      slug: "digital-transformation-maintenance",
      title: "Digital Twin Technology for Asset Management",
      excerpt: "Exploring how digital twins are revolutionizing asset performance monitoring and optimization.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "6 min read", 
      category: "Technology & Transformation",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      slug: "iso-55000-asset-management-implementation",
      title: "ISO 55000 Implementation Framework",
      excerpt: "Step-by-step approach to implementing ISO 55000 asset management standards in your organization.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "10 min read",
      category: "Compliance & Governance", 
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      slug: "root-cause-failure-analysis-methodology",
      title: "Building Reliability Culture in Organizations",
      excerpt: "Strategies for developing a reliability-focused mindset across all levels of your organization.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "7 min read",
      category: "Workforce Capability",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      slug: "vibration-analysis-fundamentals",
      title: "Advanced Vibration Analysis Case Studies",
      excerpt: "Real-world examples of vibration analysis applications in critical machinery diagnostics.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "12 min read",
      category: "Reliability Strategies",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      slug: "digital-transformation-maintenance",
      title: "AI-Powered Maintenance Optimization",
      excerpt: "How artificial intelligence is transforming maintenance scheduling and resource allocation.",
      author: "Vinoth Kumar Subramaniam",
      readTime: "9 min read",
      category: "Technology & Transformation",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="knowledge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Knowledge Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest insights, case studies, and best practices in 
            reliability engineering from industry experts worldwide.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link
              to={`/articles`}
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h3>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="inline-block bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {featuredArticles[0].category}
                </div>
                <h4 className="text-3xl font-bold mb-4">{featuredArticles[0].title}</h4>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {featuredArticles[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-blue-200 mb-8">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featuredArticles[0].author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredArticles[0].readTime}
                  </div>
                </div>
                <Link 
                  to={`/articles/${featuredArticles[0].slug}`}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Read Full Article
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={featuredArticles[0].image}
                  alt={featuredArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Articles</h3>
            <Link to="/articles" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(1).map((article, index) => (
              <Link
                to={`/articles/${article.slug}`}
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest reliability engineering insights, 
            case studies, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;