
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contributors', path: '/contributors' },
    { name: 'Partners', path: '/partners' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'nav-gradient shadow-2xl border-b border-green-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            Food <span className="text-green-500">Donate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-all duration-300 hover:-translate-y-1 font-medium ${
                  location.pathname === item.path
                    ? 'text-green-600 font-bold'
                    : 'text-gray-800 hover:text-green-600'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            ))}
            <div className="flex space-x-3">
              <Link
                to="/login"
                className="button-gradient text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border-2 border-green-500 text-green-600 bg-white/80 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 card-gradient rounded-lg shadow-2xl border border-green-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50/50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <Link
                to="/login"
                className="block button-gradient text-white px-4 py-2 rounded-full text-center font-semibold transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block border-2 border-green-500 text-green-600 bg-white/80 px-4 py-2 rounded-full text-center hover:bg-green-500 hover:text-white transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
