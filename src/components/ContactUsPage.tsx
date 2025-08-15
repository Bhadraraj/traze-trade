import React, { useState } from 'react';
import { MessageCircle, BookOpen, HelpCircle, BarChart3, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Chat Interface */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Contact Us
                </h1>
                
                <div className="space-y-4">
                  <p className="text-white/90 text-lg leading-relaxed">
                    Your feedback is vital important to us we can reply to your 
                    enquiries as fast as possible. You can contact over our live-chat.
                  </p>
                  
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Official Email: cs.traze@traze.com</span>
                  </div>
                  
                  <div className="space-y-2 text-white/80 text-sm">
                    <p><span className="font-medium">Trading Hours:</span></p>
                    <p>Monday-Thursday: 9:00AM-7:00PM (GMT Week)</p>
                    <p>Wednesday: 9:00AM-7:00PM (GMT Break)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Chat Interface */}
            <div className="relative">
              <div className="max-w-lg mx-auto">
                {/* Chat Window */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Customer Service</div>
                      <div className="text-white/60 text-xs">Online now</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4 mb-6">
                    {/* Service Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">CS</span>
                      </div>
                      <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                        <div className="text-white text-sm">
                          Hello! How can I help you today?
                        </div>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl rounded-tr-sm p-4 max-w-xs">
                        <div className="text-white text-sm">
                          I need help with my trading account
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">U</span>
                      </div>
                    </div>
                    
                    {/* Service Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">CS</span>
                      </div>
                      <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                        <div className="text-white text-sm">
                          I'd be happy to assist you with your trading account. Can you tell me more about the specific issue?
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/10 rounded-xl p-3 border border-white/20">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full bg-transparent text-white placeholder-white/50 text-sm outline-none"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 p-3 rounded-xl transition-all">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Academy */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Academy</h3>
                  <p className="text-white/70 text-sm">Trading Portal</p>
                </div>
              </div>
            </div>
            
            {/* Glossary */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Glossary</h3>
                  <p className="text-white/70 text-sm">Trading Terms</p>
                </div>
              </div>
            </div>
            
            {/* Help Center */}
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Help Center</h3>
                  <p className="text-white/70 text-sm">Support & FAQ</p>
                </div>
              </div>
            </div>
            
            {/* Contract Specification */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Contract Specification</h3>
                  <p className="text-white/70 text-sm">Trading Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the terms and privacy policy
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Right - 3D Illustration */}
            <div className="relative">
              <div className="max-w-lg mx-auto">
                {/* 3D-style illustration mockup */}
                <div className="relative">
                  {/* Main device */}
                  <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/30 rounded"></div>
                        <div className="h-2 bg-white/30 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl shadow-lg transform rotate-45 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg shadow-lg animate-bounce"></div>
                  
                  {/* Background cards */}
                  <div className="absolute top-8 left-8 w-full h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl -z-10 transform -rotate-6"></div>
                  <div className="absolute top-12 left-12 w-full h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl -z-20 transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;