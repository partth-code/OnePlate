import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Recycle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3",
      title: "Feeding Communities",
      subtitle: "Together we can end hunger"
    },
    {
      url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3",
      title: "Zero Food Waste",
      subtitle: "Every meal matters"
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
      title: "Building Bridges",
      subtitle: "Connecting donors with communities"
    }
  ];

  const works = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Feeding the Hungry",
      description: "Providing nutritious meals to those who need them most in our communities.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Combating Food Waste",
      description: "Redirecting surplus food from waste to plates, creating a sustainable food system.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Together for a Better World",
      description: "Building a community of volunteers, donors, and partners working towards zero hunger.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-white animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">{image.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{image.subtitle}</p>
                  <Link to="/join-mission">
                    <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105">
                      Join Our Mission
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Our Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're on a mission to create a world where no one goes hungry and no food goes to waste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${work.color} mb-6`}>
                  {work.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Pickup Service */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Door Pickup Service</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our efficient pickup service makes it easy for restaurants, caterers, and events to donate their surplus food. 
                We handle everything from scheduling to transportation, ensuring food reaches those in need quickly and safely.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free pickup from your location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Professional handling and transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time tracking and updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Impact reporting for your contributions</span>
                </div>
              </div>
              <Link to="/schedule-pickup">
                <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
                  Schedule Pickup
                </button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3"
                alt="Food delivery service"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-500">2,500+</div>
                <div className="text-gray-600">Successful Pickups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of volunteers, donors, and partners who are working together to end hunger in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-donating">
              <button className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Start Donating
              </button>
            </Link>
            <Link to="/become-volunteer">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-500 transition-all duration-300 hover:scale-105">
                Become a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
