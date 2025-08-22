import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work in frontend development and technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Github size={18} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-600 hover:text-cyan-700 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Live' ? 'bg-green-100 text-green-700' : 
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105">
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;