import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your project to life or need technical support? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you need a stunning frontend application, technical support, or just want to discuss 
                your next project, I'm here to help. Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Phone</h4>
                  <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Location</h4>
                  <span className="text-green-400">Available for Remote Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or support needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;