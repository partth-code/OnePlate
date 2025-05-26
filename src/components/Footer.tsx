
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const stats = [
    { number: '50K+', label: 'Meals Served' },
    { number: '1,200+', label: 'Collaborators' },
    { number: '150+', label: 'Partners' },
    { number: '25+', label: 'Cities' }
  ];

  return (
    <footer className="footer-gradient text-white py-12 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-green-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Food <span className="text-green-400">Donate</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Connecting surplus food with those in need, building a world without hunger through community collaboration.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-green-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Twitter className="w-6 h-6 hover:text-green-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Instagram className="w-6 h-6 hover:text-green-400 cursor-pointer transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">About Us</a></li>
              <li><a href="/contributors" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Contributors</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Partners</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="/start-donating" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Start Donating</a></li>
              <li><a href="/become-volunteer" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Become a Volunteer</a></li>
              <li><a href="/start-contributing" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Start Contributing</a></li>
              <li><a href="/apply-partner" className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-2 inline-block duration-300">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">contact@fooddonate.org</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700/30 pt-8 text-center">
          <p className="text-gray-400 hover:text-green-400 transition-colors">
            &copy; 2024 Food Donate. All rights reserved. Making a difference, one meal at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
