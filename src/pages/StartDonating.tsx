import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Clock, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StartDonating = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Start Donating Food</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your surplus food into hope for families in need. Every donation makes a difference 
            in fighting hunger and reducing food waste in our community.
          </p>
          <Link to="/schedule-pickup">
            <Button className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
              Schedule Donation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Food Donation Works</h2>
            <p className="text-xl text-gray-600">Simple steps to make a big impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Schedule Pickup</h3>
              <p className="text-gray-600">
                Fill out our simple form with details about your food donation 
                and preferred pickup time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">We Collect</h3>
              <p className="text-gray-600">
                Our trained volunteers arrive at your location to safely collect 
                and transport the donated food.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Families Benefit</h3>
              <p className="text-gray-600">
                Your donation is distributed to families in need through our 
                network of community partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Donate Food?</h2>
            <p className="text-xl text-gray-600">The impact goes beyond feeding families</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Help Families</h3>
              <p className="text-gray-600">
                Provide nutritious meals to families who struggle with food insecurity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Utensils className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Reduce Waste</h3>
              <p className="text-gray-600">
                Prevent perfectly good food from ending up in landfills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Build Community</h3>
              <p className="text-gray-600">
                Connect with others who share your commitment to helping neighbors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Tax Benefits</h3>
              <p className="text-gray-600">
                Eligible donations may qualify for tax deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Accept</h2>
            <p className="text-xl text-gray-600">Guidelines for food donations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-700 mb-6">✓ We Accept</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Fresh fruits and vegetables</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Prepared meals (hot or cold)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Packaged foods within expiration date</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Baked goods and desserts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dairy products (refrigerated)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-700 mb-6">✗ We Cannot Accept</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">×</span>
                  <span>Food past expiration date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">×</span>
                  <span>Previously served food</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">×</span>
                  <span>Homemade items from unlicensed kitchens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">×</span>
                  <span>Opened containers or packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">×</span>
                  <span>Alcoholic beverages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Donation Journey */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Donation Journey
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of donors who are making a difference in their communities. Your contribution matters.
            </p>
            <div className="flex justify-center">
              <Link to="/about">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartDonating;
