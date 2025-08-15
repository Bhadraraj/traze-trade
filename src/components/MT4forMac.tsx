import React from 'react';
import { BarChart3, TrendingUp, Shield, Zap, Users, Settings, Globe, Award } from 'lucide-react';

const TrazeMT4Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Traze MT4 for Mac
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Traze MT4 is fully compatible with Mac desktop. Access all the 
                same features the Traze market has to offer, advanced charting, 
                expert advisors, and algorithmic trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Download for Mac
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all">
                  MT4 User Guide
                </button>
              </div>
            </div>

            {/* Right Content - 3D Elements */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform rotate-3 shadow-2xl">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-4">
                  <div className="text-sm opacity-80">Traze MT4 for MAC</div>
                  <div className="font-bold">Download now Mac</div>
                </div>
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-12 h-12 bg-purple-500/80 rounded-full flex items-center justify-center">
                    <BarChart3 className="text-white w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-pink-500/80 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center">
                    <Shield className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-sm opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-sm opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Traze MT4 for Mac?
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Although MT4 has advanced features, it is also beginner-friendly. 
                The powerful charting software will guide you when to buy, and MT4 offers 
                different technical trading signals to help beginners. You can see exactly 
                what it offers in our trading page or through our trading tutorials shown 
                below.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Over 50 built-in technical analysis tools and indicators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">It is a multi-award-winning system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">it offers quick and simple installation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">You can execute detailed price changes through 9 time periods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Compatible with over 3 dozen custom indicators, expert advisors, and scripts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Compatible with advanced notification signal system technology in 24 languages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">You can select 50 powerful technical indicators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">The interface is fully customizable</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Download MT4 for Mac
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Download the MT4 User Guide
                </button>
              </div>
            </div>

            {/* Right Content - Chart Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-600">EUR/USD</div>
                    <div className="text-sm text-green-600">+0.0023 (+0.21%)</div>
                  </div>
                  
                  {/* Simplified Chart */}
                  <div className="h-40 relative bg-gradient-to-b from-blue-50 to-white rounded">
                    <svg className="w-full h-full" viewBox="0 0 300 150">
                      <polyline
                        points="10,100 40,80 70,90 100,70 130,85 160,60 190,75 220,50 250,65 280,45"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      <polyline
                        points="10,120 40,110 70,115 100,105 130,110 160,95 190,100 220,85 250,90 280,75"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                  <div className="text-center">1H</div>
                  <div className="text-center">4H</div>
                  <div className="text-center bg-blue-100 rounded py-1">1D</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Analysis Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover next-level technical analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <TrendingUp className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Track your movements</h3>
              <p className="text-gray-300">
                Advanced record-keeping changes in support
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Settings className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Adaptive & Scalable</h3>
              <p className="text-gray-300">
                Identify multiple system developments on multiple timeframes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <BarChart3 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analysis Oriented</h3>
              <p className="text-gray-300">
                Create analytical price changes with reliable technical
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intuitive & User-Friendly</h3>
              <p className="text-gray-300">
                Clients select multiple interfaces with straightforward guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <Globe className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Adaptive & Scalable</h3>
              <p className="text-gray-300">
                Both basic and advanced features suitable for beginner and experienced traders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Trading Platform Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The ideal trading platform for beginners
              </h2>
              <p className="text-gray-700 leading-relaxed">
                MT4 is a beginner-friendly trading platform that features a simple 
                and intuitive user interface designed for successful trading 
                experiences. The platform provides comprehensive tools and resources 
                to help new traders get started with confidence.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white mb-4">
                  <div className="text-sm opacity-90">Trading Dashboard</div>
                  <div className="font-bold">MT4 Interface</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 text-sm">Market Watch</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 text-sm">Chart Analysis</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 text-sm">Trade Terminal</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrazeMT4Landing;