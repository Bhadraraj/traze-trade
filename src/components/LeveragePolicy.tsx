import React from 'react';

const LeveragePolicySection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 pi- to-black">
      {/* Hero Section */}
      <section className="py-[150px] px-4 relative overflow-hidden">

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-6xl font-bold text-white mb-8">
                Leverage Policy
              </h1>
            </div>
            
            {/* Right 3D Elements */}
            <div className="flex-1 flex justify-end relative">
              <div className="relative">
                {/* Purple 3D Card */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 transform rotate-12 shadow-2xl relative z-10">
                  <div className="text-white font-bold text-lg">Leverage</div>
                  <div className="text-white/80 text-sm">1:500</div>
                  <div className="absolute -top-2 -right-2 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                </div>
                
                {/* Floating Numbers */}
                <div className="absolute -top-8 left-12 bg-purple-600/80 backdrop-blur-lg rounded-lg px-3 py-2">
                  <span className="text-white font-semibold">$100</span>
                </div>
                
                <div className="absolute top-16 -right-8 bg-purple-500/80 backdrop-blur-lg rounded-lg px-3 py-2">
                  <span className="text-white font-semibold">$ 10,000</span>
                </div>
                
                {/* 3D Sphere */}
                <div className="absolute -bottom-4 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-2xl transform rotate-45"></div>
                
                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Leverage based on Trading Account Equities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Leverage based on Trading Account Equities
            </h2>
            
            <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">
              Account Equity refers to TOTAL what you have paid and it's not on This applies to our Traze Account depending on your 
              Account Equity.
            </p>
            
            <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">
              As Traze has a system to fragment the equity across account purposes, Our system will automatically adjust your 
              applicable maximum leverage.
            </p>
            
            <p className="text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              Should your system be triggered by any decrease in your trading account equity, your applicable maximum leverage will be 
              automatically reduced. This will affect your trading forex. Please refer to the leverage free below for more information.
            </p>

            {/* Leverage Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
                <div className="grid grid-cols-2">
                  <div className="font-semibold">Trading Account Equity (USD)</div>
                  <div className="font-semibold text-right">Max. Leverage</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-2 p-4 hover:bg-gray-50">
                  <div className="text-gray-700">≤ $1,500</div>
                  <div className="text-gray-900 font-semibold text-right">1: 3000</div>
                </div>
                
                <div className="grid grid-cols-2 p-4 hover:bg-gray-50">
                  <div className="text-gray-700">≤ $5,000 - $1,501</div>
                  <div className="text-gray-900 font-semibold text-right">1: 1000</div>
                </div>
                
                <div className="grid grid-cols-2 p-4 hover:bg-gray-50">
                  <div className="text-gray-700">≤ $50,000 - $5,001</div>
                  <div className="text-gray-900 font-semibold text-right">1: 1000</div>
                </div>
                
                <div className="grid grid-cols-2 p-4 hover:bg-gray-50">
                  <div className="text-gray-700">≤ $50,000 - $50,001</div>
                  <div className="text-gray-900 font-semibold text-right">1: 500</div>
                </div>
                
                <div className="grid grid-cols-2 p-4 hover:bg-gray-50">
                  <div className="text-gray-700">≤ $100,000+</div>
                  <div className="text-gray-900 font-semibold text-right">1: 200</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leverage adjustment sections */}
          <div className="space-y-12">
            {/* Leverage adjustment over weekends and holidays */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
                Leverage adjustment over weekends and holidays
              </h3>
              
              <div className="bg-white rounded-b-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  On weekends and holidays when trading sessions are typically low volume, market volatility may impact your trading 
                  positions. To prevent any unexpected losses during weekends, we need to increase the leverage limit on your account.
                </p>
                
                <p className="text-gray-700 mb-4">
                  We will reduce any Traze Trading Account 10% at4 previous market trading leverage to a maximum 1:500, normally 1 hour 
                  before market close on Friday and reopen back to the original leverage normally 1-5 hours after the market 
                  reopening on Sunday.
                </p>
                
                <p className="text-gray-700">
                  This applies to all existing open trades, pending orders and new orders. Similar rules on leverage may also apply during 
                  volatile market conditions and major news announcements. Their
                </p>
              </div>
            </div>

            {/* Leverage adjustment before major economic and market events */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
                Leverage adjustment before major economic and market events
              </h3>
              
              <div className="bg-white rounded-b-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  Generally, to reduce any unnecessary impact that market volatility may have on clients trading accounts due to major 
                  economic or market events.
                </p>
                
                <p className="text-gray-700 mb-4">
                  On any major economic market news that may substantially affect the trading leverage to a minimum 1:500, usually 30 
                  minutes before or as announced and second back to the original leverage, normally 30 minutes after an event closes.
                </p>
                
                <p className="text-gray-700 mb-4">
                  This applies to existing positions, pending orders and new orders.
                </p>
                
                <p className="text-gray-700">
                  Disclaimer: Please note that changes in the leverage ratio will impact the margin requirements of your trading 
                  account. For instance, if the maximum leverage on your account is reduced from the original 1:3000 to 1:500, this will 
                  result in an increase in margin requirements. Should this occur, there may be a margin call on your account, a forced 
                  liquidation or the cancellation of pending orders to meet our company from time to time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeveragePolicySection;