import React from 'react';

const TradingPlatformLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Traze MT4 for PC */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-purple-900 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">Traze MT4 for PC</h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Discover the full Traze MT4 experience from the comfort of your desktop. Our PC trading platform lets you automate options and track multiple positions while you choose the best trading opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  DOWNLOAD NOW
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
                  Start Free Demo
                </button>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white">📱</span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white">💻</span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white">📊</span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white">⚡</span>
                </div>
              </div>
            </div>
            
            {/* 3D Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 flex flex-col">
                    <div className="text-white text-sm mb-4">Traze MT4 for Windows</div>
                    <div className="flex-1 bg-white/10 rounded-lg mb-4"></div>
                    <button className="bg-white/20 text-white text-sm py-2 rounded-lg">
                      DOWNLOAD NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Why Choose MetaTrader 4 Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MetaTrader 4?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With Traze MT4, you can accurately monitor the market, manage your 
                positions and expert systems. You can strategize and enjoy a superior 
                trading experience.
              </p>
              
              {/* MT4 Platform Preview */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 mb-4">
                  <div className="text-white font-semibold mb-2">MT4</div>
                  <div className="h-32 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white text-sm">Trading Chart</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">BUY</button>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded text-sm">SELL</button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                "It's the most popular trading platform worldwide",
                "Real-time quotes on more than 100 real-time indicators",
                "Professional charts with 30 technical indicators and 24 graphic objects",
                "Technical Indicators",
                "It's available in 30+ languages",
                "Built-in strategy tester and 50+ trading templates",
                "You can diversify your portfolio through multiple assets",
                "EA, money options, commodities, currencies",
                "Outstanding technical analysis system including customizable indicators",
                "A collection of 15+ chart time frames including MT4 and MT5 and technical analysis securities",
                "Protection via advanced cryptographic digital system"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{feature}</p>
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all">
                  DOWNLOAD FOR PC
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all">
                  DOWNLOAD FOR MOBILE PHONE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Analysis Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Discover next-level technical analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Track your movements</h3>
              <p className="text-purple-200 text-sm mb-6">Automatically record drawing strategies on charts</p>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Adaptive & Scalable</h3>
              <p className="text-purple-200 text-sm mb-6">Monitor multiple instances simultaneously via multi-window design</p>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analysis Oriented</h3>
              <p className="text-purple-200 text-sm">Capture detailed price changes through a few mouse clicks</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Intuitive & User Friendly</h3>
              <p className="text-purple-200 text-sm">Operate offers easily</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Adaptive & Scalable</h3>
              <p className="text-purple-200 text-sm">Create a more dynamic strategy with customized technical chart solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Trading Section */}
      <div className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Start your trading journey</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Take advantage of all the exceptional benefits of trading with Traze 
                using your Windows PC. With its powerful analytics tools, a wide 
                range of customized software and fully adaptable and modern 
                interface, the MT4 gives you the tools you need to analyze your 
                progress and stay on top of your trading opportunities.
              </p>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                GET STARTED NOW
              </button>
            </div>
            
            {/* Trading Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-600 text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm">Trading Dashboard</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 h-8 bg-gray-100 rounded"></div>
                  <div className="flex-1 h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-xl">💹</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPlatformLanding;