
import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Building a world without hunger, one meal at a time";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      description: "To eliminate food waste and hunger by connecting surplus food with communities in need through technology and compassion.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Our Impact",
      description: "Over 50,000 meals served, 1,200+ volunteers mobilized, and partnerships with 150+ organizations across 25 cities.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Join Us",
      description: "Whether you're a restaurant owner, volunteer, or someone who wants to help, there's a place for you in our mission.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <div className="text-2xl md:text-3xl text-gray-600 mb-8 h-16">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Food Donate is more than just a platform – we're a movement of people who believe that 
            no one should go hungry while perfectly good food goes to waste.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Food Donate began when a group of volunteers noticed the stark contrast 
                between food waste and food insecurity in their communities. What started as a small 
                local initiative has grown into a nationwide network of compassionate individuals and 
                organizations working together.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We leverage technology to make food donation simple, efficient, and impactful. Our platform 
                connects donors with recipients, tracks impact, and builds communities around the shared 
                goal of ending hunger and waste.
              </p>
              <p className="text-lg text-gray-600">
                Every meal we redirect from waste to plates represents hope, dignity, and the power of 
                human compassion. Join us in creating a future where abundance is shared, not wasted.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
                alt="Community volunteers"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold">4 Years</div>
                <div className="text-sm">of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${card.color} mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">C</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-gray-600">Every action is driven by empathy and care for our communities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">T</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">Open communication and accountability in all our operations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">I</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Using technology and creativity to solve complex problems.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">Building systems that create lasting positive change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Involved Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to be part of the solution? Connect with us and start making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
              WhatsApp
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-500 transition-all duration-300 hover:scale-105">
              Download App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
