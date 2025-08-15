import React from 'react';
import { Coins, TrendingUp, Bitcoin, Clock, Building, BarChart3 } from 'lucide-react';

const AssetsSection: React.FC = () => {
  const assetCategories = [
    { icon: <Coins className="w-6 h-6" />, name: "Metals", active: true },
    { icon: <TrendingUp className="w-6 h-6" />, name: "Forex" },
    { icon: <Bitcoin className="w-6 h-6" />, name: "Cryptocurrency" },
    { icon: <Clock className="w-6 h-6" />, name: "Shares" },
    { icon: <Building className="w-6 h-6" />, name: "Commodities" },
    { icon: <BarChart3 className="w-6 h-6" />, name: "Indices" }
  ];

  const metals = [
    { name: "Gold vs US Dollar", symbol: "XAUUSD", change: "+2.45%" },
    { name: "Silver vs US Dollar", symbol: "XAGUSD", change: "+1.23%" },
    { name: "Platinum vs US Dollar", symbol: "XPTUSD", change: "-0.87%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              TRADING INSTRUMENTS
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">120+ Assets</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Craft your bright new diversified portfolio through top-class instruments.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Asset Categories */}
            <div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-white text-xl font-semibold mb-6">Markets</h3>
                
                <div className="space-y-3">
                  {metals.map((metal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <Coins className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{metal.symbol}</div>
                          <div className="text-gray-400 text-xs">{metal.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-1"></div>
                        <div className="text-green-400 text-xs">{metal.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asset Categories */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {assetCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl text-center transition-all cursor-pointer ${
                      category.active 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-white/5 backdrop-blur-lg border border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      {category.icon}
                    </div>
                    <div className="text-sm font-medium">{category.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Metals Info */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Metals</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Gold has been a reliable source of precious metal investors, and has 
                been used as a store of value for thousands of years.
              </p>

              {/* Decorative Chart Visualization */}
              <div className="mt-8 relative">
                <div className="h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-end justify-center space-x-2 p-4">
                  <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t" style={{height: '60%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t" style={{height: '80%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t" style={{height: '40%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t" style={{height: '90%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default AssetsSection;