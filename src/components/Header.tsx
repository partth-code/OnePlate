
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            Food <span className="text-green-500">Donate</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors">
              About
            </Link>
            <Link to="/contributors" className="text-gray-700 hover:text-green-500 transition-colors">
              Contributors
            </Link>
            <Link to="/partners" className="text-gray-700 hover:text-green-500 transition-colors">
              Partners
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500 transition-colors">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-colors">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors">
                About
              </Link>
              <Link to="/contributors" className="text-gray-700 hover:text-green-500 transition-colors">
                Contributors
              </Link>
              <Link to="/partners" className="text-gray-700 hover:text-green-500 transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-500 transition-colors">
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-colors">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <Button 
                    onClick={handleSignOut}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 w-fit"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-fit">
                    Sign In
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
