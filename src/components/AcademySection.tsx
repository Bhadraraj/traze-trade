import React from 'react';
import { BookOpen, Play } from 'lucide-react';

const AcademySection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Academy Info */}
            <div>
              <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                EDUCATION
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Z Academy
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Free online guides to help you learn and trade with confidence.
              </p>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  Our Academy provides educational videos to trading and 
                  our wide range of resources that help hone your skills, whether 
                  you're new to trading or an experienced investor.
                </p>
              </div>

              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Learning
              </button>
            </div>

            {/* Right Content - Academy Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 relative overflow-hidden">
                {/* 3D Blocks Visualization */}
                <div className="relative z-10">
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div 
                        key={index}
                        className="aspect-square bg-white/20 rounded-lg"
                        style={{
                          transform: `translateZ(${Math.random() * 20}px) rotateX(${Math.random() * 10}deg)`,
                          opacity: 0.6 + Math.random() * 0.4
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Stacked 3D Elements */}
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform rotate-3 mb-4">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold">Trading Basics</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 transform -rotate-2 mb-4">
                      <div className="flex items-center space-x-3">
                        <Play className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold">Video Tutorials</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 transform rotate-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <span className="text-white font-semibold">Market Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-lg p-3">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademySection;