import React, { useState } from 'react';

const PlatformSummaries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('windows');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Platform<br />
                Summaries
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Download Traze MT4 to enjoy superior trading experience 
                on various operating systems.
              </p>
            </div>

            {/* Right Content - Platform Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* MT4 for MAC */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🍎</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Traze MT4 for MAC</h3>
                    <p className="text-gray-400 text-sm">Operating Systems</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold mb-3">
                  DOWNLOAD
                </button>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📈</span>
                  </div>
                </div>
              </div>

              {/* MT4 for Windows */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🖥️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Traze MT4 for Windows</h3>
                    <p className="text-gray-400 text-sm">Operating Systems</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold mb-3">
                  DOWNLOAD
                </button>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">💹</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                </div>
              </div>

              {/* MT4 for iOS */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Traze MT4 for iOS</h3>
                    <p className="text-gray-400 text-sm">Mobile Trading</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold mb-3">
                  DOWNLOAD
                </button>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📈</span>
                  </div>
                </div>
              </div>

              {/* MT4 for Android */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Traze MT4 for Android</h3>
                    <p className="text-gray-400 text-sm">Mobile Trading</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold mb-3">
                  DOWNLOAD
                </button>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">💹</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MT4 Windows/Mac Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Traze MT4 Windows/Mac</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Experience the unbeatable experience and enjoyment of Traze MetaTrader 4. Get our trading platform gives you client access to stocks, forex, 
              commodities, indices, and various other financial instruments. It is considered the most popular platform in the financial 
              market and allow you to trade your way, easy on Windows, Traze MetaTrader 4 is your direct channel to the financial markets.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why choose Traze MT4 for Mac or Windows?</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">The number one global trading platform since 2005</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✅</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Algorithmic or Stop-Risk access to market prices</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Brilliant charting, security and stability for maximized trading</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Multi-language support</h4>
              </div>
            </div>

            {/* Platform Icons */}
            <div className="flex justify-center items-center gap-12 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-3xl">🖥️</span>
                </div>
                <p className="text-sm text-gray-600">WINDOWS</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-3xl">🍎</span>
                </div>
                <p className="text-sm text-gray-600">MAC</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">TRAZE MT4 IS AVAILABLE FOR:</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Windows
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Mac
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Traze MT4 for Mobile Android / iOS</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            Lead the power of trading in your hands with the Traze MetaTrader 4 mobile app for iOS or Android. Access all the same flexibility, advanced 
            charting (forex to stocks) and 1-click trades right on your mobile trading experience whilst you can monitor positions through push notifications that are from 
            a comprehensive mobile experience.
          </p>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-16">
            Countless trading pros enjoy upmost mobile trading informed signals with our network, dynamic and advanced access to your favourite financial 
            markets.
          </p>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-12">Metatrader 4 mobile app features</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-left">
                <h4 className="text-white font-semibold mb-6">Intuitive design with zoom and scrolling features</h4>
                <h4 className="text-white font-semibold mb-6">Real-time prices, interactive charts and easy navigation</h4>
                <h4 className="text-white font-semibold mb-6">Customization, along the unparalleled functionality</h4>
                <h4 className="text-white font-semibold mb-6">Track and monitor live prices for all top trading instruments</h4>
                <h4 className="text-white font-semibold mb-6">Execute multiple orders (Buy/sell) orders all in type</h4>
                <h4 className="text-white font-semibold mb-6">Instant and important and account information</h4>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-4xl">🤖</span>
                    </div>
                    <p className="text-white font-semibold">Android</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-4xl">🍎</span>
                    </div>
                    <p className="text-white font-semibold">iOS</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-8">TRAZE MT4 IS AVAILABLE FOR</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                ANDROID
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                iOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Traze Mobile App</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg">
              Built on functionality smart mobile proprietary software, the Traze mobile app is designed with you, the trader in mind. Whether your 
              focus is to improve your trades are presented by accessing the markets and trading whenever, wherever you are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Traze mobile trading app functions and features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Trade on 4 minute, reliable, transparent and only platform</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Trade forex, commodities, indices, stocks, Metals and Cryptocurrency</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Track your live real-time currency</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Store any alerts in real of long-stay and stock prices and all trades</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Create personalised watchlists</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">View analytical news and trading signals</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/20 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">Portfolio</span>
                      <span className="text-white text-2xl">📈</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-white/80">
                        <span>EUR/USD</span>
                        <span className="text-green-400">+1.23%</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>GBP/USD</span>
                        <span className="text-red-400">-0.45%</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>USD/JPY</span>
                        <span className="text-green-400">+0.78%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl p-6">
                    <h4 className="text-white font-semibold mb-4">Trading Chart</h4>
                    <div className="h-24 bg-white/10 rounded-lg flex items-end justify-center gap-2 p-4">
                      <div className="w-3 bg-green-400 h-8 rounded"></div>
                      <div className="w-3 bg-blue-400 h-12 rounded"></div>
                      <div className="w-3 bg-purple-400 h-16 rounded"></div>
                      <div className="w-3 bg-pink-400 h-10 rounded"></div>
                      <div className="w-3 bg-yellow-400 h-14 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-yellow-900 font-bold">💰</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformSummaries;