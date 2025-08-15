import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Globe, Building, Star, ArrowUpRight, ArrowDownRight, Play } from 'lucide-react';

const CryptoTradingInterface: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  const cryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$43,250.00', change: '+2,450.00', changePercent: '+6.01%', isPositive: true, logo: '₿', color: 'from-orange-400 to-yellow-500' },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,680.45', change: '-120.30', changePercent: '-4.30%', isPositive: false, logo: 'Ξ', color: 'from-blue-400 to-purple-500' },
    { symbol: 'ADA', name: 'Cardano', price: '$0.485', change: '+0.025', changePercent: '+5.43%', isPositive: true, logo: '₳', color: 'from-blue-500 to-cyan-400' },
    { symbol: 'DOT', name: 'Polkadot', price: '$6.75', change: '-0.35', changePercent: '-4.94%', isPositive: false, logo: '●', color: 'from-pink-400 to-red-500' },
    { symbol: 'LINK', name: 'Chainlink', price: '$14.82', change: '+1.24', changePercent: '+9.12%', isPositive: true, logo: '⬢', color: 'from-blue-400 to-indigo-600' },
    { symbol: 'UNI', name: 'Uniswap', price: '$6.45', change: '+0.78', changePercent: '+13.76%', isPositive: true, logo: '🦄', color: 'from-pink-400 to-purple-600' },
    { symbol: 'LTC', name: 'Litecoin', price: '$72.30', change: '-2.15', changePercent: '-2.89%', isPositive: false, logo: 'Ł', color: 'from-gray-400 to-gray-600' },
    { symbol: 'AVAX', name: 'Avalanche', price: '$37.82', change: '+4.55', changePercent: '+13.67%', isPositive: true, logo: 'A', color: 'from-red-400 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white z-10 relative">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6 border border-white/20">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Cryptocurrency Trading</span>
              </div>
              
              <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                CRYPTOCURRENCY
              </h1>
              <h2 className="text-4xl font-bold mb-6 text-purple-200">
                Trade the Future of Finance
              </h2>
              
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Experience next-generation cryptocurrency trading with advanced tools, 
                real-time analytics, and institutional-grade security. Trade Bitcoin, 
                Ethereum, and 100+ digital assets with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Trading Now
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-8 py-4 rounded-xl font-bold transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$2.4T+</div>
                  <div className="text-sm text-gray-300">Market Cap</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-gray-300">Cryptocurrencies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-300">Trading</div>
                </div>
              </div>
            </div>

            {/* Right Content - Advanced Trading Interface */}
            <div className="relative z-10">
              {/* Main Trading Card */}
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      ₿
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">BTC/USD</h3>
                      <p className="text-blue-200 text-sm">Bitcoin</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-3xl">$43,250.00</p>
                    <div className="flex items-center text-green-400 font-semibold">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span>+2,450.00 (+6.01%)</span>
                    </div>
                  </div>
                </div>
                
                {/* Advanced Chart */}
                <div className="h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg"></div>
                  <svg className="w-full h-full relative z-10">
                    <defs>
                      <linearGradient id="cryptoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,100 40,90 80,70 120,60 160,45 200,30 240,25 280,20 320,15 360,10 400,5"
                      fill="url(#cryptoGradient)"
                      stroke="url(#cryptoGradient)"
                      strokeWidth="3"
                    />
                  </svg>
                  
                  {/* Price points */}
                  <div className="absolute top-2 right-4 text-white/60 text-xs">
                    High: $44,250
                  </div>
                  <div className="absolute bottom-2 right-4 text-white/60 text-xs">
                    Low: $41,850
                  </div>
                </div>

                {/* Buy/Sell Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
                    <div className="flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      BUY
                    </div>
                  </button>
                  <button className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
                    <div className="flex items-center justify-center">
                      <ArrowDownRight className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                      SELL
                    </div>
                  </button>
                </div>
              </div>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                      Ξ
                    </div>
                    <span className="text-white font-semibold">ETH</span>
                  </div>
                  <p className="text-white font-bold text-lg">$2,680.45</p>
                  <div className="flex items-center text-red-400 text-sm">
                    <ArrowDownRight className="w-3 h-3 mr-1" />
                    -4.30%
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                      ₳
                    </div>
                    <span className="text-white font-semibold">ADA</span>
                  </div>
                  <p className="text-white font-bold text-lg">$0.485</p>
                  <div className="flex items-center text-green-400 text-sm">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +5.43%
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-4 shadow-2xl animate-pulse">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-2xl animate-bounce">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* What is Cryptocurrency Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-black mb-8">
                What is <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cryptocurrency?</span>
              </h2>
              <p className="text-gray-300 text-xl mb-6 leading-relaxed">
                Cryptocurrency represents the future of digital finance - decentralized, secure, 
                and borderless digital assets powered by blockchain technology.
              </p>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Trade with confidence using our advanced platform featuring real-time analytics, 
                institutional-grade security, and access to over 100 digital assets.
              </p>
              
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl">
                Start Trading Crypto
              </button>
            </div>

            {/* 3D Crypto Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-500/30 transform hover:scale-105 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        ₿
                      </div>
                      <div>
                        <span className="text-white font-bold text-lg">BTC</span>
                        <p className="text-orange-300 text-sm">Bitcoin</p>
                      </div>
                    </div>
                    <p className="text-white text-2xl font-bold mb-2">$43,250.00</p>
                    <div className="flex items-center text-green-400 font-semibold">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span>+6.01%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        Ξ
                      </div>
                      <div>
                        <span className="text-white font-bold text-lg">ETH</span>
                        <p className="text-blue-300 text-sm">Ethereum</p>
                      </div>
                    </div>
                    <p className="text-white text-2xl font-bold mb-2">$2,680.45</p>
                    <div className="flex items-center text-red-400 font-semibold">
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                      <span>-4.30%</span>
                    </div>
                  </div>
                </div>

                {/* Action Indicators */}
                <div className="flex justify-center space-x-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all cursor-pointer">
                    LONG
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all cursor-pointer">
                    SHORT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto List Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Crypto List */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Top Cryptocurrencies</span>
              </h3>
              <div className="space-y-3">
                {cryptos.map((crypto, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all border ${
                      selectedCrypto === crypto.symbol 
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 transform scale-105' 
                        : 'bg-white/5 backdrop-blur-xl hover:bg-white/10 border-white/10'
                    }`}
                    onClick={() => setSelectedCrypto(crypto.symbol)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${crypto.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {crypto.logo}
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{crypto.symbol}</p>
                        <p className="text-gray-400 text-sm">{crypto.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-xl mb-1">{crypto.price}</p>
                      <div className={`flex items-center font-semibold ${crypto.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.isPositive ? 
                          <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                          <ArrowDownRight className="w-4 h-4 mr-1" />
                        }
                        <span>{crypto.changePercent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Chart Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-white">Market Overview</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-purple-600 rounded-xl text-white text-sm font-medium">1H</button>
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-medium">24H</button>
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-medium">7D</button>
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-medium">30D</button>
                </div>
              </div>
              
              <div className="space-y-6">
                {cryptos.slice(0, 6).map((crypto, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${crypto.color} rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                        {crypto.logo}
                      </div>
                      <span className="text-white font-semibold text-lg">{crypto.symbol}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="text-white font-bold text-lg">{crypto.price}</span>
                      <div className="w-24 h-10">
                        <svg className="w-full h-full">
                          <polyline
                            points={`0,${crypto.isPositive ? 30 : 10} 12,${crypto.isPositive ? 25 : 15} 24,${crypto.isPositive ? 20 : 20} 36,${crypto.isPositive ? 15 : 25} 48,${crypto.isPositive ? 10 : 30}`}
                            fill="none"
                            stroke={crypto.isPositive ? "#10B981" : "#EF4444"}
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className={`flex items-center font-medium ${crypto.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.isPositive ? 
                          <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                          <ArrowDownRight className="w-4 h-4 mr-1" />
                        }
                        <span>{crypto.changePercent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-black mb-8">
                Why Trade <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cryptocurrency?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">24/7 Global Market</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Trade cryptocurrencies around the clock with no market closures. 
                    Access global liquidity and opportunities across all time zones.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">High Volatility Opportunities</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Capitalize on price movements with leverage trading. 
                    Advanced risk management tools help maximize potential returns.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Decentralized Future</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Be part of the financial revolution. Trade the future of money 
                    with blockchain-powered digital assets and DeFi protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Trading Visualization */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    ₿
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">BTC/USD</h3>
                    <p className="text-gray-400">Bitcoin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-3xl font-bold">$43,250.00</p>
                  <div className="flex items-center text-green-400 font-semibold text-lg">
                    <ArrowUpRight className="w-5 h-5 mr-1" />
                    <span>+6.01%</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 relative overflow-hidden mb-6">
                {/* Advanced Candlestick Chart */}
                <div className="h-full flex items-end justify-between">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const isGreen = Math.random() > 0.4;
                    const height = Math.random() * 80 + 10;
                    return (
                      <div key={i} className="flex flex-col justify-end w-2">
                        <div 
                          className={`w-full ${isGreen ? 'bg-gradient-to-t from-green-600 to-green-400' : 'bg-gradient-to-t from-red-600 to-red-400'} rounded-sm mb-1 shadow-lg`}
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Price Levels */}
                <div className="absolute right-4 top-4 text-green-400 text-xs font-mono">
                  <div className="bg-green-500/20 px-2 py-1 rounded mb-2">High: $44,250</div>
                  <div className="bg-red-500/20 px-2 py-1 rounded">Low: $41,850</div>
                </div>
                
                {/* Time Labels */}
                <div className="absolute bottom-2 left-4 text-white/60 text-xs flex space-x-8">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                </div>
                
                {/* Volume Indicators */}
                <div className="absolute top-4 left-4 text-white/80 text-xs">
                  <div className="bg-blue-500/20 backdrop-blur px-3 py-2 rounded-lg">
                    <div className="text-blue-300 font-mono">Vol: 2.4M BTC</div>
                    <div className="text-gray-300 font-mono">$103.8B</div>
                  </div>
                </div>
              </div>

              {/* Advanced Trading Controls */}
              <div className="grid grid-cols-2 gap-4">
                <button className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    LONG
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="group bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 flex items-center justify-center">
                    <ArrowDownRight className="w-6 h-6 mr-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                    SHORT
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>

              {/* Leverage Indicator */}
              <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Leverage:</span>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm font-medium">1x</button>
                    <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm font-medium">10x</button>
                    <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm font-medium">50x</button>
                    <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm font-medium">100x</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Trading Features</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Professional-grade tools and features designed for serious cryptocurrency traders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Real-time market data, technical indicators, and AI-powered insights to make informed trading decisions.
              </p>
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leverage Trading</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Trade with up to 100x leverage on major cryptocurrencies with advanced risk management tools.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 border border-green-500/30">
                <div className="text-green-400 text-sm font-mono">Max Leverage: 100x</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Access</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Trade from anywhere in the world with our secure, compliant platform supporting 180+ countries.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Online 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 relative">
            <h2 className="text-5xl font-black text-white mb-6">
              Ready to Start <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Trading?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Join millions of traders worldwide and experience the future of cryptocurrency trading with our advanced platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl text-white relative overflow-hidden">
                <div className="relative z-10 flex items-center">
                  <Play className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform" />
                  Start Trading Now
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-10 py-5 rounded-xl font-bold text-xl transition-all">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">$2.4T+</div>
                <div className="text-gray-300 text-sm">Total Market Cap</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
                <div className="text-gray-300 text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 -right-6 w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
        
        {/* Final background effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </section>
    </div>
  );
};

export default CryptoTradingInterface;