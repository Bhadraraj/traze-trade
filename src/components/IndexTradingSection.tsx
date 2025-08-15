import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Play, BarChart3, DollarSign, Globe } from 'lucide-react';

const IndexTrading: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState('US 500');

  const indices = [
    { name: 'US 500', symbol: 'SPX500', price: '4,378.38', change: '+12.45', changePercent: '+0.28%', isPositive: true },
    { name: 'NASDAQ 100', symbol: 'NAS100', price: '15,234.67', change: '-45.23', changePercent: '-0.30%', isPositive: false },
    { name: 'DOW 30', symbol: 'US30', price: '34,567.89', change: '+123.45', changePercent: '+0.36%', isPositive: true },
    { name: 'UK 100', symbol: 'UK100', price: '7,456.23', change: '+34.56', changePercent: '+0.47%', isPositive: true },
    { name: 'GER 30', symbol: 'GER30', price: '15,789.45', change: '-67.89', changePercent: '-0.43%', isPositive: false },
    { name: 'JPN 225', symbol: 'JPN225', price: '28,456.78', change: '+234.56', changePercent: '+0.83%', isPositive: true },
    { name: 'AUS 200', symbol: 'AUS200', price: '7,234.56', change: '-12.34', changePercent: '-0.17%', isPositive: false },
    { name: 'FTSE China A50 Index', symbol: 'CHA50', price: '13,456.78', change: '+56.78', changePercent: '+0.42%', isPositive: true },
    { name: 'HK 50', symbol: 'HK50', price: '19,876.54', change: '-98.76', changePercent: '-0.49%', isPositive: false },
    { name: 'US Dollar Index', symbol: 'DXY', price: '103.45', change: '+0.23', changePercent: '+0.22%', isPositive: true },
    { name: 'NIKKEI 225', symbol: 'N225', price: '33,456.78', change: '+234.56', changePercent: '+0.71%', isPositive: true },
    { name: 'Australia SPI ASX 200 Index', symbol: 'ASX200', price: '7,345.67', change: '-23.45', changePercent: '-0.32%', isPositive: false }
  ];

  const advantages = [
    {
      title: "A great way to start out trading",
      description: "Index CFDs allow you to trade on the movement of the market rather than individual shares."
    },
    {
      title: "Less risk than trading individual shares",
      description: "Indices spread the risk across the whole market, instead of a single company."
    },
    {
      title: "Make your capital go further",
      description: "You only need a small sum to leverage a sizeable market with a CFD, meaning your capital goes further."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">Index Trading</h1>
              <p className="text-lg mb-8 text-purple-100 leading-relaxed">
                Stock indices represent the price performance of a stock selection. You 
                can buy and sell using CFDs on price changes on the world's biggest 
                stock indexes, including the S&P 500 and FTSE 100. These provide exposure 
                on entire markets in single index positions on a few of the world's most traded products, 
                including the world's largest financial companies.
              </p>
              <p className="text-lg mb-8 text-purple-100 leading-relaxed">
                Saxo Bank's CFDs allow you to both profit on leveraging a sizeable market value 
                with a smaller amount of capital. Speculate on some of the world's most powerful 
                stock indices and grow your investment opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Start Trading Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all">
                  Learn More About CFDs
                </button>
              </div>
            </div>

            {/* Right Content - Trading Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                {/* Main Trading Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">US 500</h3>
                      <p className="text-purple-200 text-sm">SPX500</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-xl">4,378.38</p>
                      <p className="text-green-400 text-sm">+12.45 (+0.28%)</p>
                    </div>
                  </div>
                  <div className="h-20 relative">
                    {/* Mini Chart Visualization */}
                    <svg className="w-full h-full">
                      <polyline
                        points="0,60 20,50 40,45 60,40 80,35 100,30 120,25 140,20 160,15 180,25 200,30 220,25 240,20 260,15 280,10"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        className="opacity-80"
                      />
                    </svg>
                  </div>
                </div>

                {/* Secondary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-semibold mb-2">NASDAQ 100</h4>
                    <p className="text-white text-lg font-bold">15,234.67</p>
                    <p className="text-red-400 text-sm">-45.23 (-0.30%)</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-semibold mb-2">DOW 30</h4>
                    <p className="text-white text-lg font-bold">34,567.89</p>
                    <p className="text-green-400 text-sm">+123.45 (+0.36%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* What is an Index CFD Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is an <span className="text-purple-600">index CFD?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A stock index (or stock exchange or a benchmark of the overall performance of the stock 
                markets. Simply speaking, an index fund is when you cannot buy the market in 
                general, but rather a specific selection of the company shares that is tracked on that 
                index.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                You can trade a CFD (Contract For Difference) to make speculative or stock indices in 
                Saxo bank. The CFD position, a position of essentially requiring to leverage and the difference in the 
                price change from when you open and close your position. A CFD contract is generally 
                acquired without commission so at the the similar amount first that allow you to mainly 
                profit. This is evidenced up at the purchase around the world. DJDGI creates higher 
                opportunities of world markets to change actions and the current frameworks.
              </p>
              
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Start Trading Indices
              </button>
            </div>

            {/* Chart Visualization */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">SPX500</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">4,378.38</p>
                    <p className="text-green-500 font-semibold">+12.45 (+0.28%)</p>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-40 relative bg-gray-50 rounded-lg overflow-hidden">
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,120 30,110 60,100 90,95 120,90 150,85 180,80 210,75 240,70 270,75 300,80 330,75 360,70 390,65 420,60"
                      fill="url(#chartGradient)"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,120 30,110 60,100 90,95 120,90 150,85 180,80 210,75 240,70 270,75 300,80 330,75 360,70 390,65 420,60"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indices Table Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Indices List */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Indices</h3>
              <div className="space-y-3">
                {indices.map((index, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                      selectedIndex === index.name 
                        ? 'bg-purple-600' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedIndex(index.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold">{index.name}</p>
                        <p className="text-sm text-gray-400">{index.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{index.price}</p>
                      <p className={`text-sm ${index.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {index.change} ({index.changePercent})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Market Overview</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-purple-600 rounded text-sm">1D</button>
                  <button className="px-3 py-1 bg-gray-700 rounded text-sm">1W</button>
                  <button className="px-3 py-1 bg-gray-700 rounded text-sm">1M</button>
                </div>
              </div>
              
              <div className="space-y-4">
                {indices.slice(0, 8).map((index, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-400">{index.symbol}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold">{index.price}</span>
                      <div className="w-20 h-8">
                        <svg className="w-full h-full">
                          <polyline
                            points={`0,${index.isPositive ? 24 : 8} 10,${index.isPositive ? 20 : 12} 20,${index.isPositive ? 16 : 16} 30,${index.isPositive ? 12 : 20} 40,${index.isPositive ? 8 : 24}`}
                            fill="none"
                            stroke={index.isPositive ? "#10B981" : "#EF4444"}
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${index.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {index.changePercent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What are the <span className="text-purple-600">advantages of trading Index CFDs?</span>
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

            {/* Chart Visualization */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="h-80 bg-gray-900 rounded-xl p-4 relative overflow-hidden">
                {/* Candlestick Chart Simulation */}
                <div className="h-full flex items-end space-x-1">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const isGreen = Math.random() > 0.5;
                    const height = Math.random() * 60 + 20;
                    return (
                      <div key={i} className="flex flex-col justify-end" style={{ height: '100%' }}>
                        <div 
                          className={`w-2 ${isGreen ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Price Labels */}
                <div className="absolute right-2 top-4 text-white text-sm space-y-2">
                  <div>4,400.0</div>
                  <div>4,350.0</div>
                  <div>4,300.0</div>
                  <div>4,250.0</div>
                </div>
                
                {/* Time Labels */}
                <div className="absolute bottom-2 left-4 text-white text-xs space-x-8 flex">
                  <span>9:30 AM</span>
                  <span>12:00 PM</span>
                  <span>3:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexTrading;