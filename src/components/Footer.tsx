import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              One<span className="text-green-500">Plate</span>
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
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+91 12345-67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span>onePlate@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>Indore(M.P.) India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OnePlate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
