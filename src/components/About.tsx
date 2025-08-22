import React from 'react';
import { Code, Headphones, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in modern JavaScript frameworks with a focus on React ecosystem"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Tech Support",
      description: "Providing exceptional technical support and problem-solving solutions"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Creative approach to complex challenges with innovative solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Optimizing applications for speed, accessibility, and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer and tech support professional with a deep love for creating 
            seamless digital experiences. My expertise spans from building responsive web applications to 
            providing comprehensive technical support solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With years of experience in frontend development and technical support, I've had the privilege 
              of working on diverse projects ranging from small business websites to enterprise-level applications. 
              My dual expertise allows me to not only build exceptional user interfaces but also provide the 
              technical support needed to ensure smooth operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in the power of clean code, intuitive design, and exceptional user experience. 
              Whether I'm debugging a complex React component or helping a client resolve a technical issue, 
              I approach every challenge with patience, creativity, and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;