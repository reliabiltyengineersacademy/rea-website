import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs & Certifications', href: '/programs' },
    { name: 'Training Modules', href: '/training' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Contact', href: '/contact' }
  ];

  const programs = [
    { name: 'CMRP Certification', href: '/programs#cmrp' },
    { name: 'CMRT Certification', href: '/programs#cmrt' },
    { name: 'CAMA Certification', href: '/programs#cama' },
    { name: 'Vibration Analysis', href: '/programs#vibration' },
    { name: 'Infrared Thermography', href: '/programs#thermography' }
  ];

  const resources = [
    { name: 'Case Studies', href: '/webinars' },
    { name: 'White Papers', href: '/webinars' },
    { name: 'Monthly Webinars', href: '/webinars' },
    { name: 'Training Modules', href: '/training' },
    { name: 'Pricing Plans', href: '/pricing' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Facebook, href: '#', name: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/REA_Logotype-06.png" 
                alt="Reliability Engineers Academy" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Empowering engineers and organizations with world-class training, certifications, 
                and expertise in asset reliability engineering.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@reliabilityengineers.academy</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Reliability Drive, Suite 100<br />
                  Houston, TX 77001, USA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest reliability engineering insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Reliability Engineers Academy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;