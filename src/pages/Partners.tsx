
import React, { useState } from 'react';
import { Building2, Utensils, Calendar, Users, Star, MapPin } from 'lucide-react';

const Partners = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const partners = [
    {
      id: 1,
      name: "FoodLink NGO",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Leading food rescue organization with 500+ drives across 4 major cities",
      impact: "25,000 meals rescued",
      type: "NGO"
    },
    {
      id: 2,
      name: "Green Valley Restaurant",
      logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Sustainable dining partner committed to zero food waste initiatives",
      impact: "1,200 meals donated",
      type: "Restaurant"
    },
    {
      id: 3,
      name: "Corporate Catering Co.",
      logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Premier catering service redirecting surplus from corporate events",
      impact: "3,500 meals shared",
      type: "Catering"
    },
    {
      id: 4,
      name: "Unity Hotels Group",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Luxury hotel chain with sustainable food management practices",
      impact: "8,000 meals provided",
      type: "Hospitality"
    },
    {
      id: 5,
      name: "Community Kitchen Network",
      logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Network of community kitchens serving neighborhoods in need",
      impact: "15,000 meals served",
      type: "Community"
    },
    {
      id: 6,
      name: "Metro Event Planners",
      logo: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&w=200&h=100&fit=crop",
      description: "Event management company partnering for sustainable celebrations",
      impact: "2,800 meals saved",
      type: "Events"
    }
  ];

  const partnerTypes = [
    { icon: <Utensils className="w-8 h-8" />, title: "Restaurants", description: "Fine dining to local eateries" },
    { icon: <Building2 className="w-8 h-8" />, title: "Caterers", description: "Event and corporate catering" },
    { icon: <Calendar className="w-8 h-8" />, title: "Event Planners", description: "Weddings and celebrations" },
    { icon: <Building2 className="w-8 h-8" />, title: "Corporates", description: "Office cafeterias and events" },
    { icon: <Building2 className="w-8 h-8" />, title: "Hotels", description: "Hospitality industry partners" },
    { icon: <Users className="w-8 h-8" />, title: "Individuals", description: "Personal event organizers" }
  ];

  const testimonials = [
    {
      quote: "Partnering with Food Donate has transformed how we handle surplus food. It's incredibly fulfilling to know our excess is feeding families instead of going to waste.",
      author: "Sarah Chen",
      title: "Head Chef, Green Valley Restaurant",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The pickup service is seamless and professional. We've been able to donate thousands of meals with minimal effort on our part.",
      author: "Michael Rodriguez",
      title: "Events Manager, Metro Event Planners",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Food Donate doesn't just collect food – they build communities. We're proud to be part of this movement.",
      author: "Lisa Thompson",
      title: "Operations Director, Unity Hotels Group",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Together with amazing organizations and individuals, we're building 
            a sustainable ecosystem that fights hunger and reduces food waste.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-600">Organizations making a real difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Logo/Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      {partner.type}
                    </span>
                  </div>
                  
                  {/* Show description on hover */}
                  <div className={`transition-all duration-300 ${
                    hoveredCard === partner.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{partner.impact}</span>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Who Can Partner With Us</h2>
            <p className="text-xl text-gray-600">We welcome all types of food-related businesses and organizations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-blue-500 mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-600">Real stories from our amazing partners</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Be Our Partner</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our growing network of partners who are making a positive impact 
              in their communities while reducing food waste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free food pickup service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Impact reporting and certificates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Corporate social responsibility support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Community recognition and branding</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Tax benefits for donations</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 mb-4">
                Apply Now
              </button>
              <p className="text-white/80">
                Contact us to learn more about partnership opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow">
              <MapPin className="w-5 h-5 text-green-500" />
              <span>partnerships@fooddonate.org</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Follow us on social media</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
