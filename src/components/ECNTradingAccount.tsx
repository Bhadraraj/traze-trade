import React from 'react';

const ECNTradingAccount: React.FC = () => {
  const tradingConditions = [
    { label: 'Initial Deposit', value: '$500', icon: '💰' },
    { label: 'Trading Account Base Currency', value: 'USD', icon: '💵' },
    { label: 'Maximum Lot Spread', value: 'From 0.2', badge: 'POPULAR', icon: '📊' },
    { label: 'Leverage', value: 'Up to 1:2000', icon: '⚡' },
    { label: 'Spot price commission', value: '$5/round', icon: '💼' },
    { label: 'Maximum open positions and pending orders', value: '200', icon: '📈' },
    { label: 'Hedging', value: 'From $50 to $5 new open Orders', icon: '🛡️' },
    { label: 'Stop Out Level', value: '50%', badge: 'NEW', icon: '⚠️' },
    { label: 'Manual Execution', value: 'From 0.5 Sec', icon: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">ECN Trading Account</h1>
              <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                Are you interested in opening a Traze ECN account? If so, take a 
                closer look at some of the fantastic deals we've got available. If 
                speed is a big right for you and have no get started.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Open ECN Trading Account
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
                  Open a Demo Trading Account
                </button>
              </div>
            </div>
            
            {/* Trading Interface Mockups */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main trading panel */}
                <div className="col-span-2 bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-700">Market Watch</div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">EUR/USD</span>
                      <span className="text-green-600 font-semibold">1.0823</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">GBP/USD</span>
                      <span className="text-red-600 font-semibold">1.2654</span>
                    </div>
                  </div>
                </div>
                
                {/* Small info cards */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-4 text-white">
                  <div className="text-sm opacity-80">Spread</div>
                  <div className="text-xl font-bold">0.2</div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
                  <div className="text-sm opacity-80">Leverage</div>
                  <div className="text-xl font-bold">1:2000</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl transform -rotate-12 opacity-70"></div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* What is ECN Trading Account Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ECN Trading Card */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">ECN Trading</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">STP.1</span>
                    <span className="text-white font-semibold">$500</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">STP.2</span>
                    <span className="text-white font-semibold">0.2</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">STP.3</span>
                    <span className="text-white font-semibold">1:2000</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">STP.4</span>
                    <span className="text-white font-semibold">50%</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-4xl font-bold text-white mb-2">≥ $500</div>
                    <div className="text-white/80 text-sm">Minimum to deposit</div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is a ECN Trading Account?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Electronic Communication Networks (ECN) Trading Account 
                provides you with direct market access to the interbank market with 
                ultra-low spreads and transparent pricing through STP so that all 
                our order (Market participant). Through this network, you get to 
                compare a massive level, at a variety of liquidity providers like 
                investment banks. This will give you an opportunity to get wider prices with 
                tighter trading experience and is more than 50% trading improvement.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Details</h3>
                <p className="text-gray-600 text-sm">
                  An ECN Trading Account is best suited for traders who are looking for the fastest possible spreads in their trading positions. It's also the ideal way for traders 
                  who want to trade with more efficiency, profitability, better conditions and executions for trading. Through this, you can trade quickly and more safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Conditions Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">TRADING CONDITIONS</h2>
          
          <div className="space-y-4">
            {tradingConditions.map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                      {condition.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-lg">{condition.label}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {condition.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        condition.badge === 'POPULAR' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {condition.badge}
                      </span>
                    )}
                    <div className="text-2xl font-bold text-gray-900">{condition.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              Spread starting from 0.2. All the Accounts are available in MT4 and support the following trading instruments: Currency Pairs, Stocks, Indices, 
              Energies, Precious metals and Commodities.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-lg">
              Open ECN Trading Account Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECNTradingAccount;