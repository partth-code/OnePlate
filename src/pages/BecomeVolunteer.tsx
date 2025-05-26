
import React, { useState } from 'react';
import { Users, Clock, MapPin, Heart, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BecomeVolunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    interests: [],
    experience: '',
    motivation: ''
  });

  const volunteerRoles = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Food Collection",
      description: "Help collect surplus food from restaurants, events, and donors",
      commitment: "4-6 hours/week",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Distribution",
      description: "Assist with sorting and distributing food to families in need",
      commitment: "3-5 hours/week",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Outreach",
      description: "Help spread awareness and recruit new donors and volunteers",
      commitment: "2-4 hours/week",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Support",
      description: "Assist with special events, fundraisers, and community activities",
      commitment: "Flexible",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Collection Volunteer",
      quote: "Volunteering here has been incredibly rewarding. Knowing that I'm helping feed families gives me such purpose.",
      duration: "2 years",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Distribution Volunteer",
      quote: "The team is amazing and the work we do makes a real difference. I look forward to my volunteer days every week.",
      duration: "1 year",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Outreach Volunteer",
      quote: "I love connecting with the community and seeing how we can all work together to end hunger.",
      duration: "6 months",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become a Volunteer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community of passionate volunteers who are making a real difference in the fight against hunger. 
            Every hour you contribute helps feed families in need.
          </p>
          <Button className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
            Apply to Volunteer
          </Button>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Find the perfect role that matches your schedule and interests</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-full ${role.color} mb-4`}>
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <div className="text-sm text-green-600 font-semibold">
                  Time commitment: {role.commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Apply to Volunteer</h2>
              <p className="text-xl text-gray-600">Fill out this form and we'll get back to you within 24 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both weekdays and weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about any previous volunteer work or relevant experience..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to volunteer with us?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Share your motivation for volunteering..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full button-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Volunteers Say</h2>
            <p className="text-xl text-gray-600">Hear from our amazing volunteer community</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-semibold">
                    Volunteering for {testimonial.duration}
                  </span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of volunteers who are making a difference in their communities every day.
          </p>
          <Button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BecomeVolunteer;
