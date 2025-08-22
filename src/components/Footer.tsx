import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Always excited to discuss new opportunities, collaborate on projects, 
              or help solve technical challenges.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.email@example.com"
                 className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> 
            by a passionate developer
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Frontend Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;