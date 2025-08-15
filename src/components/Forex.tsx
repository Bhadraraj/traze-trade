import React, { useState } from 'react';

const Forex: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    "Advanced charting tools",
    "Real-time market data",
    "Risk management",
    "Mobile trading",
    "Expert advisors",
    "Social trading"
  ];

  const currencyPairs = [
    { pair: "EUR/USD", change: "+0.0012", percentage: "+0.11%", positive: true },
    { pair: "GBP/USD", change: "-0.0034", percentage: "-0.26%", positive: false },
    { pair: "USD/JPY", change: "+0.15", percentage: "+0.10%", positive: true },
    { pair: "AUD/USD", change: "+0.0008", percentage: "+0.12%", positive: true },
    { pair: "USD/CHF", change: "-0.0021", percentage: "-0.23%", positive: false },
    { pair: "EUR/GBP", change: "+0.0015", percentage: "+0.17%", positive: true },
    { pair: "EUR/JPY", change: "+0.22", percentage: "+0.15%", positive: true },
    { pair: "GBP/JPY", change: "-0.18", percentage: "-0.12%", positive: false },
    { pair: "AUD/JPY", change: "+0.09", percentage: "+0.09%", positive: true },
    { pair: "NZD/USD", change: "+0.0006", percentage: "+0.09%", positive: true },
    { pair: "USD/CAD", change: "-0.0012", percentage: "-0.09%", positive: false },
    { pair: "EUR/CHF", change: "+0.0018", percentage: "+0.17%", positive: true }
  ];

  const benefits = [
    "Access to 150+ trading instruments",
    "Competitive spreads from 0.1 pips",
    "Lightning-fast execution speeds",
    "24/7 multilingual support",
    "Advanced risk management tools",
    "Educational resources and analysis",
    "Mobile and desktop platforms",
    "Regulated and secure environment"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section - Forex Trading */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Forex Trading
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Trade the world's largest financial market with confidence. Access major, minor, and exotic currency pairs with tight spreads and lightning-fast execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                  Start Trading
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-8 text-white">
                <div>
                  <div className="text-2xl font-bold">0.1</div>
                  <div className="text-sm opacity-80">Pips from</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1:2000</div>
                  <div className="text-sm opacity-80">Max Leverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Instruments</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Trading Platform</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  {currencyPairs.slice(0, 6).map((pair, index) => (
                    <div key={pair.pair} className="flex items-center justify-between text-sm">
                      <span className="text-white font-medium">{pair.pair}</span>
                      <div className="text-right">
                        <div className={`${pair.positive ? 'text-green-400' : 'text-red-400'} font-medium`}>
                          {pair.change}
                        </div>
                        <div className={`${pair.positive ? 'text-green-400' : 'text-red-400'} text-xs`}>
                          {pair.percentage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Forex Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Forex?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Forex (foreign exchange) is the world's largest and most liquid financial market, where currencies are traded 24 hours a day, 5 days a week. With a daily trading volume exceeding $7 trillion, it offers unparalleled opportunities for traders worldwide.
                </p>
                <p>
                  Currency trading involves buying one currency while simultaneously selling another, forming currency pairs like EUR/USD or GBP/JPY. Traders profit from fluctuations in exchange rates caused by economic, political, and market factors.
                </p>
                <p>
                  Our platform provides access to major, minor, and exotic currency pairs with competitive spreads, advanced charting tools, and real-time market analysis to help you make informed trading decisions.
                </p>
              </div>
              <button className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn More About Forex
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-900 mb-2">$7T+</div>
                      <div className="text-purple-700 text-sm">Daily Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-900 mb-2">24/5</div>
                      <div className="text-purple-700 text-sm">Trading Hours</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-center text-purple-900 font-semibold mb-2">Major Currency Pairs</div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-purple-800">
                      <div>EUR/USD</div>
                      <div>GBP/USD</div>
                      <div>USD/JPY</div>
                      <div>USD/CHF</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Prices */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Live Market Prices</h2>
            <p className="text-gray-300 text-lg">Real-time currency pair prices with live updates</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-white font-semibold">
              <div className="col-span-3">Currency Pair</div>
              <div className="col-span-3 text-center">Spread</div>
              <div className="col-span-3 text-center">Change</div>
              <div className="col-span-3 text-right">Percentage</div>
            </div>
            
            <div className="divide-y divide-white/5">
              {currencyPairs.map((pair, index) => (
                <div key={pair.pair} className="grid grid-cols-12 gap-4 p-6 hover:bg-white/5 transition-colors">
                  <div className="col-span-3 text-white font-medium flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-black text-xs font-bold">{pair.pair.split('/')[0][0]}</span>
                    </div>
                    {pair.pair}
                  </div>
                  <div className="col-span-3 text-center text-gray-300">
                    {(Math.random() * 2).toFixed(1)} pips
                  </div>
                  <div className={`col-span-3 text-center font-medium ${pair.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {pair.change}
                  </div>
                  <div className={`col-span-3 text-right font-medium ${pair.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {pair.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Chart Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What are the benefits of Forex trading?
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Discover why millions of traders choose Forex as their preferred market. From high liquidity to 24/5 trading hours, explore the advantages that make currency trading attractive.
              </p>
              
              <div className="space-y-4">
                {benefits.slice(0, 6).map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Explore Benefits
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900 font-semibold">EUR/USD Chart</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">1H</button>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">4H</button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">1D</button>
                  </div>
                </div>
                
                <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-lg relative overflow-hidden">
                  {/* Simulated Chart Lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path
                      d="M20,150 Q60,120 100,140 T180,110 T260,130 T340,100 T380,120"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm text-gray-600">Current Price</div>
                    <div className="text-lg font-bold text-green-600">1.0875 +0.0012</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Forex Trading */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">More about Forex trading</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive resources and advanced features to enhance your trading experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Access professional-grade market analysis, economic calendars, and trading signals to make informed decisions.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300 mb-6">
                Protect your capital with advanced risk management tools including stop-loss, take-profit, and position sizing calculators.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Trading</h3>
              <p className="text-gray-300 mb-6">
                Trade on-the-go with our award-winning mobile app. Full functionality, real-time quotes, and instant execution.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Education Center</h3>
              <p className="text-gray-300 mb-6">
                Master Forex trading with our comprehensive educational resources, webinars, and expert tutorials.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Execution</h3>
              <p className="text-gray-300 mb-6">
                Experience ultra-fast order execution with our cutting-edge technology infrastructure and deep liquidity pools.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300 mb-6">
                Get expert assistance whenever you need it with our dedicated multilingual support team available around the clock.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Accounts Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              TRADING ACCOUNTS
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Accounts to fit every need</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The Traze range of accounts caters to traders of all experiences. Whatever your budget, background or 
              trading goals, we've carved out a place for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">Standard Trading Account</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Leverage</span>
                  <span className="text-white font-semibold">1:2000</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Lot Size</span>
                  <span className="text-white font-semibold">1.3</span>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="text-4xl font-bold text-white mb-2">≥ $50</div>
                  <div className="text-gray-400 text-sm mb-6">Minimum to deposit</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-lg transition-all font-semibold">
                More info →
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">ECN Trading Account</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Minimum Leverage</span>
                    <span className="text-white font-semibold">1:2000</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Commissions may apply</span>
                    <span className="text-white font-semibold">0.2</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-4xl font-bold text-white mb-2">≥ $200</div>
                    <div className="text-white/80 text-sm mb-6">Minimum to deposit</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-lg transition-all font-semibold">
                  More info →
                </button>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to start trading?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of traders who trust our platform for their Forex trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Open Live Account
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all">
              Try Demo Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forex;