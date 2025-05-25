
import React from 'react';
import { Crown, Star, Award, Users, TrendingUp, Target, Zap } from 'lucide-react';

const Contributors = () => {
  const topContributors = [
    {
      rank: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face",
      impact: "5,000 meals donated",
      badge: "Hero",
      icon: <Crown className="w-6 h-6 text-yellow-500" />
    },
    {
      rank: 2,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face",
      impact: "3,500 meals donated",
      badge: "Champion",
      icon: <Star className="w-6 h-6 text-gray-400" />
    },
    {
      rank: 3,
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face",
      impact: "2,800 meals donated",
      badge: "Leader",
      icon: <Award className="w-6 h-6 text-amber-600" />
    }
  ];

  const leaderboard = [
    { rank: 4, name: "David Wilson", impact: "2,200 meals" },
    { rank: 5, name: "Lisa Thompson", impact: "1,900 meals" },
    { rank: 6, name: "Alex Kumar", impact: "1,750 meals" },
    { rank: 7, name: "Maria Garcia", impact: "1,600 meals" },
    { rank: 8, name: "James Brown", impact: "1,450 meals" },
    { rank: 9, name: "Sophie Lee", impact: "1,300 meals" },
    { rank: 10, name: "Robert Taylor", impact: "1,200 meals" }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "1,200+", label: "Active Volunteers" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "50K+", label: "Meals Served" },
    { icon: <Target className="w-8 h-8" />, number: "850+", label: "Events Organized" },
    { icon: <Zap className="w-8 h-8" />, number: "Zero", label: "Food Waste Policy" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Contributors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the amazing people who make our mission possible through their 
            dedication, generosity, and unwavering commitment to ending hunger.
          </p>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Top Contributors</h2>
            <p className="text-xl text-gray-600">Our most impactful heroes leading the change</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {topContributors.map((contributor) => (
              <div
                key={contributor.rank}
                className={`relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center ${
                  contributor.rank === 1 ? 'border-4 border-yellow-400' : 
                  contributor.rank === 2 ? 'border-4 border-gray-300' :
                  'border-4 border-amber-500'
                }`}
              >
                {/* Rank Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  contributor.rank === 1 ? 'bg-yellow-500' :
                  contributor.rank === 2 ? 'bg-gray-400' :
                  'bg-amber-600'
                }`}>
                  #{contributor.rank}
                </div>
                
                {/* Icon */}
                <div className="mb-4 mt-4">
                  {contributor.icon}
                </div>
                
                {/* Avatar */}
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                />
                
                {/* Info */}
                <h3 className="text-2xl font-bold mb-2">{contributor.name}</h3>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  contributor.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                  contributor.rank === 2 ? 'bg-gray-100 text-gray-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {contributor.badge}
                </div>
                <p className="text-gray-600 font-medium">{contributor.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leaderboard</h2>
            <p className="text-xl text-gray-600">Rankings 4-10 of our amazing contributors</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {leaderboard.map((contributor) => (
              <div
                key={contributor.rank}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4 flex items-center justify-between hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    #{contributor.rank}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{contributor.name}</h3>
                    <p className="text-gray-600">{contributor.impact}</p>
                  </div>
                </div>
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Collective Impact</h2>
            <p className="text-xl text-gray-600">Together, we're making a real difference</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-green-500 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Heroes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every contribution matters, no matter how big or small. Start your journey today 
            and become part of our growing community of changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Join Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-500 transition-all duration-300 hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
