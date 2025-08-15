import React from 'react';

const MobileTradingPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Traze MT4 for Mobile */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">Traze MT4 for Mobile</h1>
              <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                Cutting Edge CFD & Forex Trading
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-white text-sm">Download on the</div>
                    <div className="text-white font-semibold">App Store</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <div className="text-white text-sm">Get it on</div>
                    <div className="text-white font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
              
              <p className="text-purple-200 text-sm leading-relaxed">
                Trade from anywhere anytime with Traze mobile MT4 app. Enjoy an advanced trading experience on-the-go from any 
                mobile operating system. We provide a mobile trading interface, unlimited market access, and the best way of placing all 
                your orders from a quick online and trading solution.
              </p>
            </div>
            
            {/* 3D Mobile Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main phone */}
                <div className="w-72 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl transform hover:rotate-3 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 flex flex-col">
                    <div className="text-white text-sm mb-2">Traze MT4 for iOS</div>
                    <div className="text-white text-xs mb-4">Advanced Trading</div>
                    <div className="flex-1 bg-white/10 rounded-lg mb-4 relative">
                      <div className="absolute inset-4 bg-white/20 rounded"></div>
                    </div>
                    <button className="bg-white/20 text-white text-sm py-2 rounded-lg">
                      DOWNLOAD
                    </button>
                  </div>
                </div>
                
                {/* Floating geometric elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl transform rotate-45 opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl transform -rotate-12 opacity-70"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile MetaTrader 4 Features Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile App Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl relative overflow-hidden">
                  {/* Trading chart simulation */}
                  <div className="absolute inset-6">
                    <div className="h-full bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-gray-700">EUR/USD</div>
                        <div className="text-sm text-green-600">+0.0023</div>
                      </div>
                      <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg mb-4 relative">
                        <div className="absolute inset-0 flex items-end justify-between px-2 pb-2">
                          <div className="w-1 bg-green-500 rounded-t" style={{height: '60%'}}></div>
                          <div className="w-1 bg-blue-500 rounded-t" style={{height: '40%'}}></div>
                          <div className="w-1 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                          <div className="w-1 bg-red-500 rounded-t" style={{height: '30%'}}></div>
                          <div className="w-1 bg-green-500 rounded-t" style={{height: '70%'}}></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-green-500 text-white px-4 py-2 rounded text-xs">BUY</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded text-xs">SELL</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📊</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">💹</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mobile MetaTrader 4</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Full communication through internet/social trading easily and transparently. It has a efficient program.
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  Covers live trades anytime, MT4 instruments, and we're addition Analytical reports are MT4.
                </p>
                <p className="text-gray-700">
                  Over 50+ trading tools and 50+ News, future language through Android & Apple MT4.
                </p>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>iOS</span>
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2">
                  <span>🤖</span>
                  <span>Android</span>
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">Download Android APK</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-2">
                DOWNLOAD APK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">The Advantages of Mobile Trading</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              {
                icon: '⚙️',
                title: 'Full control settings of MT4 trading platform'
              },
              {
                icon: '⏰',
                title: 'Real-time from using CFD trading'
              },
              {
                icon: '👥',
                title: 'Copy Trade instructions through other platforms'
              },
              {
                icon: '📊',
                title: '3 chart types (bars, line charts, candlestick)'
              },
              {
                icon: '📝',
                title: 'Over 30 technical analysis and expert indictors'
              },
              {
                icon: '💼',
                title: 'Full use of expert systems, technical analytics'
              },
              {
                icon: '📈',
                title: 'Markets, exchanges in real time via mobile device'
              },
              {
                icon: '📋',
                title: 'Support all of types of pending orders'
              },
              {
                icon: '⚙️',
                title: 'View your complete account statement'
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                  <span className="text-2xl">{advantage.icon}</span>
                </div>
                <p className="text-white text-sm leading-tight">{advantage.title}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all">
              Open Live Trading Account
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
              Open a Demo Trading Account
            </button>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-slate-700 via-purple-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Download Traze MT4 Trading Platform</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🍎',
                platform: 'iOS',
                description: 'iPhone/iPad'
              },
              {
                icon: '🤖',
                platform: 'Android',
                description: 'Google Play'
              },
              {
                icon: '💻',
                platform: 'Windows',
                description: 'Desktop PC'
              },
              {
                icon: '🌐',
                platform: 'Web',
                description: 'Web Browser'
              }
            ].map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.platform}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default MobileTradingPlatform;