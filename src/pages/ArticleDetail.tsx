import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, Coffee } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/articles"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(a => 
    a.id !== article.id && 
    (a.category === article.category || a.tags.some(tag => article.tags.includes(tag)))
  ).slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          to="/articles"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6">
        {/* Category */}
        <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
          {article.category}
        </div>
        
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
          {article.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          {article.excerpt}
        </p>
        
        {/* Author & Meta */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {article.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{article.author}</div>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <span>{article.date}</span>
                <span>•</span>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
          
          <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </button>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:my-1 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:mb-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                to={`/articles/${relatedArticle.slug}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative">
                  <img 
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {relatedArticle.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {relatedArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {relatedArticle.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;