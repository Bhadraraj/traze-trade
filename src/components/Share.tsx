import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Globe, Building, Star } from 'lucide-react';

const ShareCFDTrading: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');

  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$175.84', change: '+2.45', changePercent: '+1.42%', isPositive: true, logo: '🍎' },
    { symbol: 'GOOGL', name: 'Alphabet Class A', price: '$138.21', change: '-1.23', changePercent: '-0.88%', isPositive: false, logo: 'G' },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$378.85', change: '+5.67', changePercent: '+1.52%', isPositive: true, logo: '⊞' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '$248.50', change: '-8.90', changePercent: '-3.45%', isPositive: false, logo: 'T' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$145.32', change: '+3.21', changePercent: '+2.26%', isPositive: true, logo: 'A' },
    { symbol: 'META', name: 'Meta Platforms Inc.', price: '$325.67', change: '+12.45', changePercent: '+3.98%', isPositive: true, logo: 'f' },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: '$445.23', change: '-5.67', changePercent: '-1.26%', isPositive: false, logo: 'N' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '$789.45', change: '+25.67', changePercent: '+3.36%', isPositive: true, logo: '◆' },
    { symbol: 'CRM', name: 'Salesforce Inc.', price: '$234.56', change: '+4.32', changePercent: '+1.88%', isPositive: true, logo: 'S' },
    { symbol: 'ORCL', name: 'Oracle Corporation', price: '$112.34', change: '-2.45', changePercent: '-2.14%', isPositive: false, logo: 'O' },
    { symbol: 'AMD', name: 'Advanced Micro Devices', price: '$156.78', change: '+6.45', changePercent: '+4.29%', isPositive: true, logo: 'A' },
    { symbol: 'IBM', name: 'International Business Machines', price: '$167.89', change: '+1.23', changePercent: '+0.74%', isPositive: true, logo: 'I' }
  ];

  const advantages = [
    {
      title: "Amplify profits with leverage",
      description: "Trade using leverage to amplify your capital, but remember that it also amplifies losses."
    },
    {
      title: "Go long or short",
      description: "Trading Share CFDs means you can go long or short on the market without direction."
    },
    {
      title: "Take part in the stock part of the market",
      description: "Choose any company to invest from the stock market, and directly benefit from their portfolio."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">Share CFD Trading</h1>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                With the help of leverage, trading Share CFDs allows you to access the 
                whole market, CFDs on more than 5000 stocks (shares, assets while 
                engaging the market ability to extremely detailed when reading the share 
                market.
              </p>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                Trade on some of the world's most significant stocks CFDs from the New 
                York Stock Exchange, NASDAQ, London Stock Exchange and the Stock with many more. 
                Stocks with leverage, have other Stock for the current market and 
                spread betting, make equity can help to lower down the trading 
                position with more stocks with a significantly to give portfolio results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Start Trading Shares CFDs
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all">
                  Learn More About Share CFDs
                </button>
              </div>
            </div>

            {/* Right Content - Trading Interface Mockup */}
            <div className="relative">
              {/* Main Trading Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">AAPL</h3>
                    <p className="text-blue-200 text-sm">Apple Inc.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-2xl">$175.84</p>
                    <p className="text-green-400 font-semibold">+2.45 (+1.42%)</p>
                  </div>
                </div>
                
                {/* Mini Chart */}
                <div className="h-16 mb-4">
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id="stockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,50 30,45 60,40 90,35 120,30 150,25 180,20 210,15 240,20 270,25 300,20 330,15"
                      fill="url(#stockGradient)"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Buy/Sell Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">
                    BUY
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">
                    SELL
                  </button>
                </div>
              </div>

              {/* Secondary Trading Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      G
                    </div>
                    <span className="text-white font-semibold">GOOGL</span>
                  </div>
                  <p className="text-white font-bold">$138.21</p>
                  <p className="text-red-400 text-sm">-1.23 (-0.88%)</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ⊞
                    </div>
                    <span className="text-white font-semibold">MSFT</span>
                  </div>
                  <p className="text-white font-bold">$378.85</p>
                  <p className="text-green-400 text-sm">+5.67 (+1.52%)</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-pink-500 rounded-xl p-3 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-xl p-3 shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* What is a Share CFD Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is a <span className="text-purple-600">share CFD?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Shares are a digital investment product and one of the best ways to achieve both of what a 
                company profits trading and investment. Trading shares with a CFD represents to an excellent 
                way to participate in the market since you can go long or go short on a business's potential.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Spread the portfolio across these CFDs enables to the very popular direct you can use leverage 
                to amplify profits when they fluctuated.
              </p>
              
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Trading Share CFDs
              </button>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Trading Cards */}
                  <div className="bg-white rounded-xl p-4 shadow-lg transform rotate-3">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        🍎
                      </div>
                      <span className="font-semibold">AAPL</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">$175.84</p>
                    <p className="text-green-500 font-semibold">+1.42%</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg transform -rotate-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        T
                      </div>
                      <span className="font-semibold">TSLA</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">$248.50</p>
                    <p className="text-red-500 font-semibold">-3.45%</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <div className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                    Buy
                  </div>
                  <div className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                    Sell
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stocks List Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stocks List */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Stocks</h3>
              <div className="space-y-3">
                {stocks.map((stock, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                      selectedStock === stock.symbol 
                        ? 'bg-purple-600' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedStock(stock.symbol)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {stock.logo}
                      </div>
                      <div>
                        <p className="font-bold">{stock.symbol}</p>
                        <p className="text-sm text-gray-400">{stock.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{stock.price}</p>
                      <p className={`text-sm font-semibold ${stock.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.change} ({stock.changePercent})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Stock Overview</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-purple-600 rounded text-sm">1D</button>
                  <button className="px-3 py-1 bg-gray-700 rounded text-sm">1W</button>
                  <button className="px-3 py-1 bg-gray-700 rounded text-sm">1M</button>
                </div>
              </div>
              
              <div className="space-y-4">
                {stocks.slice(0, 10).map((stock, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {stock.logo}
                      </div>
                      <span className="text-sm font-semibold">{stock.symbol}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold">{stock.price}</span>
                      <div className="w-20 h-8">
                        <svg className="w-full h-full">
                          <polyline
                            points={`0,${stock.isPositive ? 24 : 8} 10,${stock.isPositive ? 20 : 12} 20,${stock.isPositive ? 16 : 16} 30,${stock.isPositive ? 12 : 20} 40,${stock.isPositive ? 8 : 24}`}
                            fill="none"
                            stroke={stock.isPositive ? "#10B981" : "#EF4444"}
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${stock.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.changePercent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why should I <span className="text-purple-600">invest in stock market with CFDs?</span>
              </h2>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trading Chart Visualization */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AAPL</h3>
                  <p className="text-gray-500">Apple Inc.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">$175.84</p>
                  <p className="text-green-500 font-semibold">+2.45 (+1.42%)</p>
                </div>
              </div>
              
              <div className="h-64 bg-gray-900 rounded-xl p-4 relative overflow-hidden">
                {/* Candlestick Chart */}
                <div className="h-full flex items-end justify-between">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const isGreen = Math.random() > 0.4;
                    const height = Math.random() * 70 + 20;
                    return (
                      <div key={i} className="flex flex-col justify-end w-2">
                        <div 
                          className={`w-full ${isGreen ? 'bg-green-500' : 'bg-red-500'} rounded-sm mb-1`}
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Price Scale */}
                <div className="absolute right-2 top-4 text-white text-xs space-y-4">
                  <div>180.0</div>
                  <div>175.0</div>
                  <div>170.0</div>
                  <div>165.0</div>
                  <div>160.0</div>
                </div>
                
                {/* Time Scale */}
                <div className="absolute bottom-2 left-4 text-white text-xs flex space-x-8">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareCFDTrading;