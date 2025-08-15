import React from 'react';

const StandardTradingAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              STP Trading<br />Account
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Are you interested in opening a TRAZE STP account? If so, here is a 
              detailed overview of this account. We are more than happy to share 
              some about it. It'll light for you and there is get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Open Live Trading Account
              </button>
              <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Open Virtual Trading Account
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Mockups */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">STP Trading</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80">Balance</span>
                      <span className="font-bold">$25,840.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Equity</span>
                      <span className="font-bold">$24,562.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Margin</span>
                      <span className="font-bold">1.3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Phone */}
              <div className="absolute -top-8 -right-8 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 transform rotate-12">
                <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  Trading
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* What is STP Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Preview */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-black rounded-lg p-6">
                <h4 className="text-white font-bold mb-4">STP Trading</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Account</span>
                    <span className="text-green-400">Live</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Server</span>
                    <span>Traze-Live</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Balance</span>
                    <span className="text-white font-bold">$96</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Equity</span>
                    <span className="text-white font-bold">$96</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Margin</span>
                    <span>1.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              What is a STP<br />Trading Account?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              An STP (Straight Through Processing) is a form of trade execution 
              that is automated. As a result, there's no interference from dealing desks. 
              Furthermore, the best prices get more access to real-time market 
              prices from prime liquidity providers automatically with an online all 
              trading servers. Accessing an STP gives execution speed, which is 
              crucial for active traders. For TRAZE customers, this provides a 
              seamless experience with quality and flexibility, giving you a 
              massive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Account Details */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/30 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Account Details</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              TRAZE's Standard STP Trading Account is made for the everyday trader looking for the best possible market prices through positions that are made directly to 
              liquidity providers and is there assisted trading platforms. Interest Rates: 1.50%. It is considered a competitive entry point for a standard 
              account through a standard commission structure that works best for novice traders.
            </p>
          </div>

          {/* Trading Conditions */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">TRADING CONDITIONS</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">$</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Initial Deposit</div>
                  <div className="text-gray-600 text-sm">$50</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">💱</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Trading Account Base Currency</div>
                  <div className="text-gray-600 text-sm">USD</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">⚡</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Maximum Pip Spread</div>
                  <div className="text-gray-600 text-sm">1.3</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">📈</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Leverage</div>
                  <div className="text-gray-600 text-sm">Up to 1:2000</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">💰</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Minimum Trading Deposit (USD)</div>
                  <div className="text-gray-600 text-sm">$50.000</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">📊</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Maximum open positions and pending orders</div>
                  <div className="text-gray-600 text-sm">200</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-sm">📋</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Order volume</div>
                  <div className="text-gray-600 text-sm">From 0.01 to 50 lots (with 0.01 step)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">🔥</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    Stop-Out Level <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold ml-2">FREE</span>
                  </div>
                  <div className="text-gray-600 text-sm">50%</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">⚙️</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Market Execution</div>
                  <div className="text-gray-600 text-sm">From 0.2 sec</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Account opening is quick. So the accounts we are available in MT4 and support the following trading environment. Currency: Fairly, bilateral, 
              spread, Stocks and Commodities.
            </p>
          </div>
        </div>
      </section>

      {/* On The Go Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            ON THE GO
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Can You Do and Get from it?
          </h2>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Why is Standard STP Important? Our STP is a direct and connection trading with a 1500 maximum leverage. As standard stp go, 
            with the Standard STP Trading Account, you'll be trading with 500,000 standard oil contract units. You can get a great Edge Out alone at 
            30%. So, higher leverage, lower margin = higher returns which get multiplied which enables your position is unlimited.
          </p>
          <p className="text-gray-300 text-lg mb-12">
            Through the Standard STP Trading Account, you get the best possible prices on the market due to the STP model we employ for your orders 
            to be matched to our liquid and proprietary.
          </p>
          <p className="text-gray-300 text-lg mb-12">
            All in all, Standard STP Trading Account holders can find low cost of their deposits since there is no middleman to blur the line of additional 
            costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Open Live Trading Account
            </button>
            <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Open Virtual Trading Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardTradingAccount;