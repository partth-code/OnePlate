
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
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Food <span className="text-green-500">Donate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-all duration-300 hover:-translate-y-1 ${
                  location.pathname === item.path
                    ? 'text-green-500 font-medium'
                    : 'text-gray-700 hover:text-green-500'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block mx-4 mt-2 bg-green-500 text-white px-4 py-2 rounded-full text-center hover:bg-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
