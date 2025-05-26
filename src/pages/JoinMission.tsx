
import React from 'react';
import { Heart, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JoinMission = () => {
  const ways = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Volunteer",
      description: "Join our community of dedicated volunteers helping to collect and distribute food to those in need.",
      action: "Start Volunteering",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Donate Food",
      description: "Share your surplus food and make a direct impact on hunger in your community.",
      action: "Schedule Donation",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our mission on social media and with friends.",
      action: "Share Mission",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can end hunger and reduce food waste in our communities. 
            Every action, no matter how small, makes a difference in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Join */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to contribute to our mission of ending hunger and reducing food waste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${way.color} mb-6`}>
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6">{way.description}</p>
                <Button className="button-gradient text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  {way.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact Together</h2>
            <p className="text-xl text-gray-600">See what we've accomplished with our amazing community</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
              <div className="text-gray-600">Meals Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">1,200+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">150+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your journey to making a difference starts today. Join thousands of others who are working to end hunger.
          </p>
          <Button className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default JoinMission;
