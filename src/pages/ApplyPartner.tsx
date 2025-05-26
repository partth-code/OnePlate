
import React, { useState } from 'react';
import { Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApplyPartner = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    description: '',
    foodType: '',
    estimatedVolume: '',
    currentWastePractices: '',
    motivations: '',
    expectations: ''
  });

  const partnerTypes = [
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'catering', label: 'Catering Service' },
    { value: 'hotel', label: 'Hotel/Hospitality' },
    { value: 'corporate', label: 'Corporate Cafeteria' },
    { value: 'events', label: 'Event Planning' },
    { value: 'grocery', label: 'Grocery Store' },
    { value: 'other', label: 'Other' }
  ];

  const benefits = [
    "Free food pickup service",
    "Impact reporting and certificates",
    "Tax benefits for donations",
    "Corporate social responsibility support",
    "Marketing and branding opportunities",
    "Community recognition"
  ];

  const requirements = [
    "Valid business license",
    "Food safety certifications",
    "Minimum donation capacity",
    "Commitment to food safety standards",
    "Regular donation schedule"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership application submitted:', formData);
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become Our Partner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our network of responsible businesses committed to reducing food waste and feeding communities. 
            Together, we can make a lasting impact on hunger and sustainability.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Free Pickup Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Tax Benefits</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Impact Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Partnership Application</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Organization Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Organization Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          id="organizationName"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Type *
                        </label>
                        <select
                          id="organizationType"
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select type</option>
                          {partnerTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
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

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
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
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Food Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Food Donation Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Description *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Briefly describe your organization and business..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="foodType" className="block text-sm font-medium text-gray-700 mb-2">
                            Type of Food Available *
                          </label>
                          <input
                            type="text"
                            id="foodType"
                            name="foodType"
                            value={formData.foodType}
                            onChange={handleChange}
                            placeholder="e.g., prepared meals, fresh produce, baked goods"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="estimatedVolume" className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated Weekly Volume *
                          </label>
                          <input
                            type="text"
                            id="estimatedVolume"
                            name="estimatedVolume"
                            value={formData.estimatedVolume}
                            onChange={handleChange}
                            placeholder="e.g., 50 meals, 20 kg of produce"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="currentWastePractices" className="block text-sm font-medium text-gray-700 mb-2">
                          Current Food Waste Practices
                        </label>
                        <textarea
                          id="currentWastePractices"
                          name="currentWastePractices"
                          value={formData.currentWastePractices}
                          onChange={handleChange}
                          rows={3}
                          placeholder="How do you currently handle surplus food?"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="motivations" className="block text-sm font-medium text-gray-700 mb-2">
                          Why do you want to partner with us? *
                        </label>
                        <textarea
                          id="motivations"
                          name="motivations"
                          value={formData.motivations}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Share your motivation for becoming a food donation partner..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-2">
                          What are your expectations from this partnership?
                        </label>
                        <textarea
                          id="expectations"
                          name="expectations"
                          value={formData.expectations}
                          onChange={handleChange}
                          rows={3}
                          placeholder="What do you hope to achieve through this partnership?"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full button-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                    Submit Partnership Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Benefits */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Partnership Benefits
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-blue-800">
                    <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-blue-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-green-500 to-blue-500 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                  <p className="text-sm mb-4">
                    Have questions about the partnership program? Our team is here to help.
                  </p>
                  <Button className="bg-white text-green-600 w-full hover:bg-gray-100">
                    Contact Partnership Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPartner;
