import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            & Tech Support Professional
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with JavaScript and React, 
            while providing outstanding technical support solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com"
               className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
              <Mail size={24} />
            </a>
          </div>

          <a href="#about" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Explore My Work
            <ChevronDown className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;