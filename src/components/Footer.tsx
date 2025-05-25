
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Food <span className="text-green-400">Donate</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Connecting surplus food with those in need, building a world without hunger.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="/contributors" className="text-gray-300 hover:text-green-400 transition-colors">Contributors</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-green-400 transition-colors">Partners</a></li>
              <li><a href="/profile" className="text-gray-300 hover:text-green-400 transition-colors">Profile</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">contact@fooddonate.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Food Donate. All rights reserved. Making a difference, one meal at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
