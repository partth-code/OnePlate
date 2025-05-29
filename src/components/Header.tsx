import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500/80 via-green-400/80 to-blue-500/80 shadow-lg backdrop-blur-xl bg-opacity-75">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <img 
                src="/plate-icon.svg" 
                alt="OnePlate Icon" 
                className="w-full h-full object-contain"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-500 text-xs">✓</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">
              One<span className="text-blue-100">Plate</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-100 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-100 transition-colors">
              About
            </Link>
            <Link to="/contributors" className="text-white hover:text-blue-100 transition-colors">
              Contributors
            </Link>
            <Link to="/partners" className="text-white hover:text-blue-100 transition-colors">
              Partners
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-100 transition-colors">
              Contact
            </Link>
            
            {user ? (
              <Link to="/profile" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white overflow-hidden hover:bg-white/20 transition-all duration-300">
                  {user.user_metadata?.avatar_url ? (
                    <img 
                      src={user.user_metadata.avatar_url} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="bg-white/90 text-green-500 hover:bg-white hover:text-green-600 transition-all duration-300">
                  Login / Signup
                </Button>
              </Link>
            )}
          </nav>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blue-100 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-100 transition-colors">
                About
              </Link>
              <Link to="/contributors" className="text-white hover:text-blue-100 transition-colors">
                Contributors
              </Link>
              <Link to="/partners" className="text-white hover:text-blue-100 transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-100 transition-colors">
                Contact
              </Link>
              
              {user ? (
                <Link to="/profile" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white overflow-hidden">
                    {user.user_metadata?.avatar_url ? (
                      <img 
                        src={user.user_metadata.avatar_url} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-white">Profile</span>
                </Link>
              ) : (
                <Link to="/login">
                  <Button className="bg-white/90 text-green-500 hover:bg-white hover:text-green-600 transition-all duration-300 w-fit">
                    Login / Signup
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
