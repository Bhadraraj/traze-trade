import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Zap, Droplet, Wheat, Gem, Smartphone } from 'lucide-react';

const CommoditiesTrading: React.FC = () => {
  const [selectedCommodity, setSelectedCommodity] = useState('Gold');

  const commodities = [
    { name: 'Gold vs US Dollar', symbol: 'XAUUSD', price: '$2,045.67', change: '+12.34', changePercent: '+0.61%', isPositive: true, icon: '🥇', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Silver vs US Dollar', symbol: 'XAGUSD', price: '$24.78', change: '-0.45', changePercent: '-1.78%', isPositive: false, icon: '🥈', color: 'from-gray-300 to-gray-500' },
    { name: 'WTI Crude Oil', symbol: 'USOIL', price: '$78.45', change: '+2.34', changePercent: '+3.08%', isPositive: true, icon: '🛢️', color: 'from-black to-gray-700' },
    { name: 'Brent Crude Oil', symbol: 'UKOIL', price: '$82.67', change: '+1.89', changePercent: '+2.34%', isPositive: true, icon: '⚫', color: 'from-gray-800 to-black' },
    { name: 'Natural Gas', symbol: 'NATGAS', price: '$3.45', change: '-0.12', changePercent: '-3.36%', isPositive: false, icon: '🔥', color: 'from-blue-400 to-blue-600' },
    { name: 'Platinum', symbol: 'XPTUSD', price: '$1,023.45', change: '+15.67', changePercent: '+1.56%', isPositive: true, icon: '💍', color: 'from-gray-400 to-gray-600' },
    { name: 'Palladium', symbol: 'XPDUSD', price: '$1,876.34', change: '-23.45', changePercent: '-1.23%', isPositive: false, icon: '💎', color: 'from-purple-400 to-purple-600' },
    { name: 'Copper', symbol: 'COPPER', price: '$8.67', change: '+0.23', changePercent: '+2.73%', isPositive: true, icon: '🔶', color: 'from-orange-400 to-orange-600' },
    { name: 'Wheat', symbol: 'WHEAT', price: '$567.89', change: '-12.34', changePercent: '-2.13%', isPositive: false, icon: '🌾', color: 'from-yellow-600 to-amber-700' },
    { name: 'Corn', symbol: 'CORN', price: '$456.78', change: '+8.90', changePercent: '+1.98%', isPositive: true, icon: '🌽', color: 'from-yellow-500 to-yellow-700' },
    { name: 'Soy Beans', symbol: 'SOYBEANS', price: '$1,234.56', change: '+34.67', changePercent: '+2.89%', isPositive: true, icon: '🫘', color: 'from-green-500 to-green-700' },
    { name: 'Cotton', symbol: 'COTTON', price: '$78.90', change: '-2.34', changePercent: '-2.88%', isPositive: false, icon: '☁️', color: 'from-white to-gray-200' },
    { name: 'Coffee', symbol: 'COFFEE', price: '$1.67', change: '+0.05', changePercent: '+3.09%', isPositive: true, icon: '☕', color: 'from-amber-700 to-amber-900' },
    { name: 'Sugar', symbol: 'SUGAR', price: '$0.23', change: '-0.01', changePercent: '-4.17%', isPositive: false, icon: '🍯', color: 'from-white to-yellow-100' },
    { name: 'Cocoa', symbol: 'COCOA', price: '$3,456.78', change: '+123.45', changePercent: '+3.70%', isPositive: true, icon: '🍫', color: 'from-amber-800 to-amber-950' },
    { name: 'US Coffee', symbol: 'USCOFFEE', price: '$1.89', change: '+0.07', changePercent: '+3.85%', isPositive: true, icon: '☕', color: 'from-amber-600 to-amber-800' }
  ];

  const advantages = [
    {
      title: "Diversify your portfolio",
      description: "Trading commodities is a solid way to hedge against your stock and bond investments."
    },
    {
      title: "High growth opportunities",
      description: "The commodities market is very dynamic, meaning there are lots of opportunities to profit."
    },
    {
      title: "Provide some level of inflation defense",
      description: "Like some bonds or crypto, commodities can be traded to provide protection from inflation and in some cases even recession."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Commodities (Gold & Crude Oil Trading)
              </h1>
              <p className="text-lg mb-6 text-blue-200 leading-relaxed">
                The commodities market can be immensely lucrative, but requires expertise. 
                Gain information on commodities market here. From gold to natural gas.
              </p>
              <p className="text-lg mb-6 text-blue-200 leading-relaxed">
                Types of commodities, crude oil and gold are the popular assets to 
                trade during times of political and economic uncertainty as they are generally 
                liquid and hold their value. Trading gold, oil and other commodities with CFD allows you to leverage 
                significant capital from small initial investments while owning and controlling assets across trading venues.
              </p>
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                You cannot avoid trading commodities when with professional support of UKOIL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Start Now
                </button>
                <button className="border-2 border-blue-300 text-blue-200 hover:bg-blue-300 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                  Learn More About Commodities
                </button>
              </div>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative flex justify-center">
              {/* Main Phone */}
              <div className="relative z-10">
                <div className="w-64 h-[520px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-700">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-4 relative overflow-hidden">
                    {/* Phone Header */}
                    <div className="flex justify-between items-center mb-4 text-white">
                      <div className="text-sm font-semibold">Crude Oil</div>
                      <div className="text-xs">9:41 AM</div>
                    </div>
                    
                    {/* Price Display */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-white mb-2">$82.54</div>
                      <div className="text-green-400 font-semibold">+2.14 (+2.67%)</div>
                    </div>
                    
                    {/* Chart */}
                    <div className="h-32 mb-6 relative">
                      <svg className="w-full h-full">
                        <defs>
                          <linearGradient id="phoneChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                        <polyline
                          points="0,100 30,90 60,85 90,70 120,60 150,50 180,45 210,40 240,50"
                          fill="url(#phoneChartGradient)"
                          stroke="#10B981"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    
                    {/* Buy/Sell Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm">
                        BUY
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold text-sm">
                        SELL
                      </button>
                    </div>
                    
                    {/* Position Info */}
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-center text-white text-xs">
                        <span>Position</span>
                        <span className="text-green-400">+$124.56</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone (Background) */}
              <div className="absolute top-8 -right-16 z-0 opacity-60">
                <div className="w-56 h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-xl border border-slate-700">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-900 to-orange-900 rounded-2xl p-4">
                    <div className="text-center text-white">
                      <div className="text-sm font-semibold mb-2">Gold</div>
                      <div className="text-2xl font-bold mb-2">$2,045</div>
                      <div className="text-green-400 text-sm">+0.61%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-yellow-500 rounded-xl p-3 shadow-lg z-20">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-16 right-4 bg-blue-500 rounded-xl p-3 shadow-lg z-20">
                <Droplet className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* What are Commodities Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-6">
                What are commodities?
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Commodities are the basic primary goods that form the foundation of our economy. 
                They can be extracted (oil), grown (agricultural), mined, refined, or processed (gold). 
                Your coffee, gasoline, and the gold on your jewelry, you'll find in markets all around the world.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Raw materials like crude oil, natural gas, gold and silver are all commodities, 
                where gold and crude oil are most commonly traded. These commodities are typically 
                in high demand, and consequently always hold their value. However, so particular 
                is commodity trading investment, is that these portfolio exposures can help hedge 
                your portfolio. A positive choice for traders.
              </p>
              
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Trading Commodities
              </button>
            </div>

            {/* 3D Commodity Icons */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-6">
                {/* Oil Barrel */}
                <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="w-16 h-20 mx-auto bg-gradient-to-b from-gray-600 to-gray-900 rounded-lg relative">
                    <div className="absolute top-1 left-1 right-1 h-2 bg-gray-500 rounded-t-lg"></div>
                    <div className="absolute bottom-1 left-1 right-1 h-2 bg-gray-700 rounded-b-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">OIL</div>
                  </div>
                </div>

                {/* Gold Bar */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="w-16 h-8 mx-auto bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg relative shadow-lg">
                    <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 text-xs font-bold">Au</div>
                  </div>
                </div>

                {/* Silver */}
                <div className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="w-16 h-8 mx-auto bg-gradient-to-b from-gray-200 to-gray-400 rounded-lg relative shadow-lg">
                    <div className="absolute inset-1 bg-gradient-to-br from-gray-100 to-gray-300 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-xs font-bold">Ag</div>
                  </div>
                </div>

                {/* Wheat */}
                <div className="bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="text-4xl text-center">🌾</div>
                </div>

                {/* Gas */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="text-4xl text-center">🔥</div>
                </div>

                {/* Coffee */}
                <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all">
                  <div className="text-4xl text-center">☕</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities List Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Commodities</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Commodities List */}
            <div className="space-y-3">
              {commodities.slice(0, 8).map((commodity, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${commodity.color} rounded-full flex items-center justify-center text-sm`}>
                      {commodity.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{commodity.symbol}</div>
                      <div className="text-gray-400 text-sm">{commodity.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="font-bold text-white">{commodity.price}</div>
                      <div className={`text-sm ${commodity.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {commodity.changePercent}
                      </div>
                    </div>
                    <div className="w-20 h-10">
                      <svg className="w-full h-full">
                        <polyline
                          points={commodity.isPositive ? "0,35 5,30 10,25 15,20 20,15" : "0,5 5,10 10,15 15,20 20,25"}
                          fill="none"
                          stroke={commodity.isPositive ? "#10B981" : "#EF4444"}
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Remaining Commodities */}
            <div className="space-y-3">
              {commodities.slice(8).map((commodity, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${commodity.color} rounded-full flex items-center justify-center text-sm`}>
                      {commodity.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{commodity.symbol}</div>
                      <div className="text-gray-400 text-sm">{commodity.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="font-bold text-white">{commodity.price}</div>
                      <div className={`text-sm ${commodity.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {commodity.changePercent}
                      </div>
                    </div>
                    <div className="w-20 h-10">
                      <svg className="w-full h-full">
                        <polyline
                          points={commodity.isPositive ? "0,35 5,30 10,25 15,20 20,15" : "0,5 5,10 10,15 15,20 20,25"}
                          fill="none"
                          stroke={commodity.isPositive ? "#10B981" : "#EF4444"}
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-8">
                What are the advantages of trading commodities?
              </h2>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Chart */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6 text-white">
                <div>
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <span className="text-2xl">🥇</span>
                    <span>GOLD</span>
                  </h3>
                  <p className="text-gray-400">XAUUSD</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$2,045.67</p>
                  <p className="text-green-400 font-semibold">+12.34 (+0.61%)</p>
                </div>
              </div>
              
              <div className="h-48 relative">
                {/* Candlestick Chart */}
                <svg className="w-full h-full">
                  {/* Green Candles */}
                  <rect x="20" y="80" width="8" height="40" fill="#10B981" />
                  <line x1="24" y1="70" x2="24" y2="130" stroke="#10B981" strokeWidth="1" />
                  
                  <rect x="40" y="60" width="8" height="50" fill="#10B981" />
                  <line x1="44" y1="50" x2="44" y2="120" stroke="#10B981" strokeWidth="1" />
                  
                  <rect x="80" y="40" width="8" height="60" fill="#10B981" />
                  <line x1="84" y1="30" x2="84" y2="110" stroke="#10B981" strokeWidth="1" />
                  
                  {/* Red Candles */}
                  <rect x="60" y="90" width="8" height="30" fill="#EF4444" />
                  <line x1="64" y1="80" x2="64" y2="130" stroke="#EF4444" strokeWidth="1" />
                  
                  <rect x="100" y="70" width="8" height="35" fill="#EF4444" />
                  <line x1="104" y1="60" x2="104" y2="115" stroke="#EF4444" strokeWidth="1" />
                </svg>
                
                {/* Price Labels */}
                <div className="absolute right-2 top-0 text-white text-xs space-y-4">
                  <div>2,080</div>
                  <div>2,060</div>
                  <div>2,040</div>
                  <div>2,020</div>
                  <div>2,000</div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4 text-gray-400 text-xs">
                <span>Aug 5</span>
                <span>Aug 6</span>
                <span>Aug 7</span>
                <span>Aug 8</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommoditiesTrading;