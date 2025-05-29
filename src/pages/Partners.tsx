import React, { useState } from 'react';
import { Building2, Utensils, Calendar, Users, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      quote: "Partnering with OnePlate has transformed how we handle surplus food. It's incredibly fulfilling to know our excess is feeding families instead of going to waste.",
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
      quote: "OnePlate doesn't just collect food – they build communities. We're proud to be part of this movement.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together with our partners, we're building a sustainable food ecosystem that benefits everyone. 
            Join our network of responsible businesses and organizations making a real impact.
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-video relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <p className="text-sm opacity-80">{partner.type}</p>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-r from-green-500/95 to-blue-500/95 p-6 flex flex-col justify-end transform transition-transform duration-300 ${
                  hoveredCard === partner.id ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <p className="text-white mb-4">{partner.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">{partner.impact}</span>
                    <button className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
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
              <Link to="/apply-partner">
                <button className="bg-white text-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 mb-4">
                  Apply Now
                </button>
              </Link>
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
              <span>oneplate85@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
