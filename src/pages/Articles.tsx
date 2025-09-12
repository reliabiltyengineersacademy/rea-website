import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, User, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'Predictive Maintenance', name: 'Predictive Maintenance' },
    { id: 'Condition Monitoring', name: 'Condition Monitoring' },
    { id: 'Failure Analysis', name: 'Failure Analysis' },
    { id: 'Asset Management', name: 'Asset Management' },
    { id: 'Digital Transformation', name: 'Digital Transformation' }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Knowledge Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest insights, case studies, and best practices in 
            reliability engineering from industry experts worldwide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
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

        {/* Featured Article */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 text-white">
                  <div className="inline-block bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {featuredArticle.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{featuredArticle.title}</h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-blue-200 mb-8">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/articles/${featuredArticle.slug}`}
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors group"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest Articles'}
            </h2>
            <span className="text-gray-500">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm === '' && selectedCategory === 'all' ? regularArticles : filteredArticles).map((article) => (
                <article 
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <Link
                        to={`/articles/${article.slug}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Insights</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest reliability engineering insights, 
            case studies, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;