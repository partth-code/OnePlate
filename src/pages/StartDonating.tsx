
import React from 'react';
import { Gift, Truck, Heart, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StartDonating = () => {
  const steps = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Identify Surplus Food",
      description: "Check your kitchen, restaurant, or event for excess food that's still fresh and safe.",
      time: "2 minutes"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Schedule Pickup",
      description: "Use our easy scheduling system to arrange a convenient pickup time.",
      time: "5 minutes"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "We Collect",
      description: "Our trained team arrives at your location to safely collect the food.",
      time: "15 minutes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Feed Families",
      description: "Your donated food reaches families in need within hours of pickup.",
      time: "Same day"
    }
  ];

  const foodTypes = [
    { name: "Prepared Meals", description: "Cooked dishes from restaurants and events", accepted: true },
    { name: "Fresh Produce", description: "Fruits and vegetables that are still fresh", accepted: true },
    { name: "Packaged Foods", description: "Unopened packaged items and canned goods", accepted: true },
    { name: "Baked Goods", description: "Fresh bread, pastries, and baked items", accepted: true },
    { name: "Dairy Products", description: "Milk, cheese, yogurt (within expiry)", accepted: true },
    { name: "Expired Food", description: "Items past their expiration date", accepted: false },
    { name: "Opened Items", description: "Food that has been opened or partially consumed", accepted: false },
    { name: "Homemade Food", description: "Food prepared in unlicensed kitchens", accepted: false }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Start Donating Food</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your surplus food into hope for families in need. Every donation, no matter the size, 
            makes a meaningful difference in someone's life.
          </p>
          <Button className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
            Schedule Your First Donation
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Food Donation Works</h2>
            <p className="text-xl text-gray-600">Simple, fast, and impactful - here's how your donation journey works</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-green-600 font-semibold">{step.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Food Can You Donate?</h2>
            <p className="text-xl text-gray-600">We accept a wide variety of fresh, safe food items</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {foodTypes.map((food, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-lg flex items-center space-x-4 ${
                    food.accepted 
                      ? 'bg-white border-l-4 border-green-500' 
                      : 'bg-red-50 border-l-4 border-red-500'
                  }`}
                >
                  <div className={`flex-shrink-0 ${food.accepted ? 'text-green-500' : 'text-red-500'}`}>
                    {food.accepted ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                        <span className="text-lg font-bold">×</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-bold ${food.accepted ? 'text-gray-800' : 'text-red-700'}`}>
                      {food.name}
                    </h3>
                    <p className={`text-sm ${food.accepted ? 'text-gray-600' : 'text-red-600'}`}>
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Donate With Us?</h2>
            <p className="text-xl text-gray-600">Join thousands of donors making a real impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Pickup Service</h3>
              <p className="text-gray-600">We come to you - no need to transport food yourself</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tax Benefits</h3>
              <p className="text-gray-600">Receive official donation receipts for tax deductions</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact Reports</h3>
              <p className="text-gray-600">See exactly how your donations help families in need</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your first donation is just a few clicks away. Join our community of donors today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Schedule Pickup Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartDonating;
