
import React, { useState } from 'react';
import { User, MapPin, Calendar, Award, Plus, Image } from 'lucide-react';

const Profile = () => {
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [donationSite, setDonationSite] = useState('');
  const [receiverSite, setReceiverSite] = useState('');

  const userStats = {
    totalMeals: 1250,
    events: 8,
    rank: 15,
    joinDate: "March 2023"
  };

  const contributions = [
    {
      id: 1,
      title: "Community Kitchen Drive",
      date: "2024-01-15",
      meals: 200,
      location: "Downtown Community Center",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      description: "Organized food distribution for homeless shelter"
    },
    {
      id: 2,
      title: "Restaurant Surplus Pickup",
      date: "2024-01-10",
      meals: 150,
      location: "Green Valley Restaurant",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      description: "Collected and redistributed excess meals"
    },
    {
      id: 3,
      title: "Wedding Event Rescue",
      date: "2024-01-05",
      meals: 300,
      location: "Grand Ballroom",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      description: "Saved surplus food from wedding celebration"
    },
    {
      id: 4,
      title: "Corporate Catering Share",
      date: "2023-12-20",
      meals: 180,
      location: "Tech Plaza Building",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      description: "Distributed leftover corporate lunch"
    }
  ];

  const handleContribution = () => {
    if (donationSite) {
      // Here you would typically send the data to a backend
      console.log('New contribution:', { donationSite, receiverSite });
      setShowContributionForm(false);
      setDonationSite('');
      setReceiverSite('');
      // Show success message
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-green-500 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-gray-600 mb-4">john.doe@example.com</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{userStats.totalMeals}</div>
                    <div className="text-sm text-gray-600">Meals Donated</div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{userStats.events}</div>
                    <div className="text-sm text-gray-600">Events</div>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">#{userStats.rank}</div>
                    <div className="text-sm text-gray-600">Rank</div>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-yellow-600">{userStats.joinDate}</div>
                    <div className="text-sm text-gray-600">Member Since</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make Contribution Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowContributionForm(!showContributionForm)}
              className="w-full bg-green-500 text-white p-6 rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Plus className="w-6 h-6" />
              <span className="text-xl font-semibold">Make Contribution</span>
            </button>

            {/* Contribution Form */}
            {showContributionForm && (
              <div className="mt-6 bg-white p-8 rounded-xl shadow-lg border-2 border-green-100">
                <h3 className="text-2xl font-bold mb-6 text-center">New Contribution</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <MapPin className="inline w-5 h-5 mr-2" />
                      Donation Site *
                    </label>
                    <input
                      type="text"
                      value={donationSite}
                      onChange={(e) => setDonationSite(e.target.value)}
                      placeholder="Enter the location where food is available"
                      className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <MapPin className="inline w-5 h-5 mr-2" />
                      Receiver Site (Optional)
                    </label>
                    <input
                      type="text"
                      value={receiverSite}
                      onChange={(e) => setReceiverSite(e.target.value)}
                      placeholder="Auto-filled via GPS if left blank"
                      className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Leave blank to auto-detect nearby food banks and shelters
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={handleContribution}
                      className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                      Submit Contribution
                    </button>
                    <button
                      onClick={() => setShowContributionForm(false)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contributions History */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Contributions</h2>
            <p className="text-xl text-gray-600">Your journey of making a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((contribution) => (
              <div
                key={contribution.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={contribution.image}
                    alt={contribution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                    {contribution.meals} meals
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{contribution.title}</h3>
                  <p className="text-gray-600 mb-4">{contribution.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{contribution.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(contribution.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Keep Up the Great Work!</h2>
            <p className="text-xl mb-6">
              You're making a real difference in your community. Every contribution counts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Share Your Impact
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-500 transition-colors">
                Invite Friends
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
