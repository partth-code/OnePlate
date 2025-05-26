
import React from 'react';
import { Code, Users, Lightbulb, Gift, ArrowRight, Github, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StartContributing = () => {
  const contributionTypes = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Development",
      description: "Contribute to our web platform, mobile apps, and backend systems using modern technologies",
      skills: ["React", "Node.js", "TypeScript", "Python"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Design & UX",
      description: "Help create intuitive interfaces and improve user experience across our platforms",
      skills: ["UI/UX", "Figma", "Adobe Creative Suite", "Prototyping"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Product Management",
      description: "Shape our product roadmap and help prioritize features that maximize social impact",
      skills: ["Strategy", "Analytics", "User Research", "Agile"],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Marketing & Outreach",
      description: "Help spread awareness and grow our community of donors, volunteers, and partners",
      skills: ["Content Creation", "Social Media", "SEO", "Community Building"],
      color: "bg-green-100 text-green-600"
    }
  ];

  const benefits = [
    "Work on meaningful projects that fight hunger",
    "Collaborate with a passionate remote team",
    "Flexible contribution schedule",
    "Professional development opportunities",
    "Recognition for your contributions",
    "Networking with like-minded individuals"
  ];

  const projects = [
    {
      title: "Mobile App Development",
      description: "Help build our React Native app for donors and volunteers",
      difficulty: "Intermediate",
      impact: "High",
      technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "AI Food Recognition",
      description: "Develop ML models to identify and categorize donated food items",
      difficulty: "Advanced",
      impact: "High",
      technologies: ["Python", "TensorFlow", "Computer Vision"]
    },
    {
      title: "Analytics Dashboard",
      description: "Create comprehensive dashboards for tracking donation impact",
      difficulty: "Beginner",
      impact: "Medium",
      technologies: ["React", "Chart.js", "API Integration"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Start Contributing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Use your technical skills to fight hunger and reduce food waste. Join our open-source community 
            and help build technology that makes a real difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button variant="outline" className="border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-105">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ways to Contribute</h2>
            <p className="text-xl text-gray-600">Find the perfect way to use your skills for social good</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-full ${type.color} mb-4`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-700">Skills needed:</p>
                  <div className="flex flex-wrap gap-1">
                    {type.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Open source projects you can contribute to right now</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-semibold ${
                    project.impact === 'High' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {project.impact} Impact
                  </span>
                  <Button className="text-indigo-600 hover:text-indigo-800 p-0 h-auto font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Contribute With Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join a community of passionate developers, designers, and innovators who are using 
                technology to solve real-world problems and make a meaningful impact.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-indigo-500">100+</div>
                <div className="text-gray-600">Active Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community and start making a difference with your skills today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
              <p className="text-white/80">Connect with us on GitHub, Discord, or Slack</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Pick a Project</h3>
              <p className="text-white/80">Choose from our featured projects or suggest your own</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Start Contributing</h3>
              <p className="text-white/80">Make your first contribution and help fight hunger</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5 mr-2" />
              Start Contributing Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartContributing;
