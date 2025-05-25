
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Food <span className="text-green-500">Donate</span>
            </h1>
            <p className="text-gray-600">Welcome back to our community</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Email or Phone
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or phone"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-4">
            <Link
              to="/forgot-password"
              className="text-green-500 hover:text-green-600 transition-colors"
            >
              Forgot your password?
            </Link>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-green-500 hover:text-green-600 font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-8 text-white">
          <p className="text-lg font-medium">
            Join our mission to end hunger and reduce food waste
          </p>
          <p className="text-white/80 mt-2">
            Every login brings us closer to a world without hunger
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
