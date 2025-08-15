import React from 'react';
import { Smartphone, Download } from 'lucide-react';

const TradingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              ON-THE-GO
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Trade anywhere
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Access your investments wherever and whenever with the 
              intuitive Traze Trader app.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>

          {/* Right Content - Mobile App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-full"></div>
                        <div className="w-4 h-2 bg-white rounded-full"></div>
                        <div className="w-4 h-2 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold">Portfolio</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span>EURUSD</span>
                          <span className="text-green-400">+1.23%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span>GBPUSD</span>
                          <span className="text-red-400">-0.45%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span>GOLD</span>
                          <span className="text-green-400">+2.67%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3">
                <div className="text-white text-xs">Live Trading</div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;