import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Utensils, HandHeart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JoinMission = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Together, we can end hunger and reduce food waste in our communities. 
            Every action counts, every person matters, and every meal shared brings hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact Together</h2>
            <p className="text-xl text-gray-600">See what we've accomplished with community support</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">250,000+</div>
              <div className="text-gray-600">Meals Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">150+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50 Tons</div>
              <div className="text-gray-600">Food Waste Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Join */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How You Can Help</h2>
            <p className="text-xl text-gray-600">Choose the way that works best for you</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Become a Volunteer</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Join our community of passionate volunteers. Help with food collection, 
                distribution, events, and spreading awareness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Flexible schedules</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Meet like-minded people</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Make direct impact</span>
                </li>
              </ul>
              <Link to="/become-volunteer">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Join as Volunteer
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <HandHeart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">Become a Partner</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Partner with us as a restaurant, catering service, or organization. 
                Turn your surplus food into meals for those in need.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Free pickup service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Tax benefits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Impact reporting</span>
                </li>
              </ul>
              <Link to="/apply-partner">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Join as Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Today */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Take Action Today
          </h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Donate Food</h3>
                <p className="text-white/90 mb-6">
                  Have surplus food? Donate it to those in need. We make it easy to schedule pickups and ensure your food reaches the right people.
                </p>
                <Link to="/start-donating">
                  <Button className="bg-white text-green-500 hover:bg-blue-50 hover:text-green-600 transition-all duration-300">
                    Start Donating
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMission;
