
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, Github, Code, Edit, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContributorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about using technology for social good. Experienced in React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'],
    githubUsername: 'alexjohnson',
    joinDate: 'March 2023',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face'
  });

  const contributions = [
    {
      id: 1,
      title: 'Mobile App Authentication',
      description: 'Implemented secure authentication system for the React Native app',
      type: 'Development',
      date: '2 weeks ago',
      status: 'Completed',
      impact: 'High'
    },
    {
      id: 2,
      title: 'Dashboard UI Redesign',
      description: 'Redesigned the volunteer dashboard for better user experience',
      type: 'Design',
      date: '1 month ago',
      status: 'Completed',
      impact: 'Medium'
    },
    {
      id: 3,
      title: 'API Documentation',
      description: 'Created comprehensive API documentation for new developers',
      type: 'Documentation',
      date: '3 weeks ago',
      status: 'In Review',
      impact: 'Medium'
    }
  ];

  const achievements = [
    {
      title: 'Top Contributor',
      description: 'Most active contributor in Q3 2024',
      icon: <Award className="w-6 h-6" />,
      date: 'September 2024'
    },
    {
      title: 'Code Quality Champion',
      description: 'Recognized for excellent code reviews and best practices',
      icon: <Code className="w-6 h-6" />,
      date: 'August 2024'
    },
    {
      title: 'Community Builder',
      description: 'Helped onboard 15+ new contributors',
      icon: <User className="w-6 h-6" />,
      date: 'July 2024'
    }
  ];

  const stats = [
    { label: 'Contributions', value: '47' },
    { label: 'Projects', value: '12' },
    { label: 'Code Reviews', value: '89' },
    { label: 'Impact Score', value: '4.8' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile changes
    console.log('Profile saved:', profile);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="pt-20">
      {/* Profile Header */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="text-3xl font-bold border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
                        />
                      ) : (
                        <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                      )}
                      <p className="text-gray-600 flex items-center mt-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Contributing since {profile.joinDate}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 sm:mt-0">
                      {isEditing ? (
                        <Button
                          onClick={handleSave}
                          className="button-gradient text-white px-4 py-2 rounded-lg"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setIsEditing(true)}
                          variant="outline"
                          className="border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {isEditing ? (
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                      ) : (
                        <span>{profile.email}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                      ) : (
                        <span>{profile.phone}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={profile.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                      ) : (
                        <span>{profile.location}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Github className="w-4 h-4 mr-2" />
                      <span>@{profile.githubUsername}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    {isEditing ? (
                      <textarea
                        value={profile.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <p className="text-gray-600">{profile.bio}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Contributions */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Recent Contributions</h2>
                <div className="space-y-6">
                  {contributions.map((contribution) => (
                    <div
                      key={contribution.id}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{contribution.title}</h3>
                          <p className="text-gray-600 mt-1">{contribution.description}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            contribution.status === 'Completed' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {contribution.status}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            contribution.impact === 'High' 
                              ? 'bg-red-100 text-red-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {contribution.impact} Impact
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{contribution.type}</span>
                        <span>{contribution.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          <span className="text-xs text-gray-500">{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributorProfile;
