
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Food <span className="text-green-500">Donate</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Connecting surplus food with families in need. Together, we're building a world without hunger.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contributors" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contributors
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-green-500 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/start-donating" className="text-gray-300 hover:text-green-500 transition-colors">
                  Start Donating
                </Link>
              </li>
              <li>
                <Link to="/become-volunteer" className="text-gray-300 hover:text-green-500 transition-colors">
                  Become Volunteer
                </Link>
              </li>
              <li>
                <Link to="/apply-partner" className="text-gray-300 hover:text-green-500 transition-colors">
                  Apply Partner
                </Link>
              </li>
              <li>
                <Link to="/join-mission" className="text-gray-300 hover:text-green-500 transition-colors">
                  Join Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">info@fooddonate.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">123 Community St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Food Donate. All rights reserved. Together, we can end hunger.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
