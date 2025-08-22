import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript (ES6+)', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Git & Version Control', level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'Responsive Design', level: 90, color: 'from-green-400 to-green-600' }
  ];

  const supportSkills = [
    { name: 'Technical Troubleshooting', level: 95 },
    { name: 'Customer Communication', level: 90 },
    { name: 'System Administration', level: 80 },
    { name: 'Documentation', level: 85 },
    { name: 'Problem Analysis', level: 90 },
    { name: 'Remote Support', level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit combining frontend development prowess with technical support excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Technical Support
            </h3>
            <div className="space-y-6">
              {supportSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Node.js', 'Webpack', 'Vite', 'Redux', 'REST APIs', 'Figma', 'Chrome DevTools'].map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-medium hover:from-cyan-100 hover:to-blue-100 hover:text-cyan-700 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;