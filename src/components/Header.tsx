import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/REA_Logotype-05.png" 
              alt="Reliability Engineers Academy" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              About Us
            </Link>
            <div className="relative">
              <button
                onClick={() => handleDropdown('programs')}
                className={`flex items-center font-medium transition-colors ${location.pathname === '/programs' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Programs & Certifications
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border">
                  <div className="py-2">
                    <Link to="/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">All Programs</Link>
                    <Link to="/training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Training Modules</Link>
                    <Link to="/training-demo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🎯 Demo Access</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link to="/programs#cmrp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">CMRP Certification</Link>
                    <Link to="/programs#cmrt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">CMRT Certification</Link>
                    <Link to="/programs#cama" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">CAMA Certification</Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/webinars" className={`font-medium transition-colors ${location.pathname === '/webinars' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Webinars
            </Link>
            <Link to="/articles" className={`font-medium transition-colors ${location.pathname === '/articles' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Articles
            </Link>
            <Link to="/pricing" className={`font-medium transition-colors ${location.pathname === '/pricing' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Pricing
            </Link>
            <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user.email}</span>
                <button
                  onClick={signOut}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Login
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
              <Link to="/programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs & Certifications</Link>
              <Link to="/training" className="text-gray-700 hover:text-blue-600 font-medium">Training Modules</Link>
              <Link to="/training-demo" className="text-gray-700 hover:text-blue-600 font-medium">🎯 Demo Access</Link>
              <Link to="/webinars" className="text-gray-700 hover:text-blue-600 font-medium">Webinars</Link>
              <Link to="/articles" className="text-gray-700 hover:text-blue-600 font-medium">Articles</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              {user ? (
                <div className="space-y-4">
                  <span className="text-gray-700">Welcome, {user.email}</span>
                  <button
                    onClick={signOut}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Link to="/login" className="block text-gray-700 hover:text-blue-600 font-medium">Login</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;