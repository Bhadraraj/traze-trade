import React from 'react';

const KeyHighlights: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="bg-purple-800/30 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
            <div className="text-pink-400 text-sm font-bold mb-4 uppercase tracking-wider">
              INTERACTIVE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Key Highlights
            </h2>
            <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
              <p>
                Step into the Traze's world of trading through platforms 
                that provide complete clarity. Trade on the award-
                winning MT4 (Windows/Mac/Mobile) while managing your 
                portfolio from Traze's mobile app, letting you trade 
                whenever, wherever, and whatever you want.
              </p>
              <p>
                Traze helps you grow your capital with market news and 
                insights with 24/5 live market access. Share in investments 
                and success, trading markets like Crypto, Forex, Shares, 
                and Bullion. Experience an accessible world of trading by 
                joining Traze.
              </p>
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div className="space-y-12">
            <div className="bg-purple-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 shadow-xl">
              <div className="text-pink-300 text-sm mb-3 font-medium">Trading volume</div>
              <div className="text-6xl lg:text-7xl font-black text-white mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                +1.1 Billion
              </div>
            </div>
            
            <div className="bg-purple-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 shadow-xl">
              <div className="text-pink-300 text-sm mb-3 font-medium">Monthly registrations</div>
              <div className="text-6xl lg:text-7xl font-black text-white mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                50 Thousand
              </div>
            </div>
            
            <div className="bg-purple-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 shadow-xl">
              <div className="text-pink-300 text-sm mb-3 font-medium">Active users</div>
              <div className="text-6xl lg:text-7xl font-black text-white mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                15 Thousand
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="relative">
              <div className="absolute -top-32 -right-24 w-56 h-56 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-16 w-44 h-44 bg-gradient-to-r from-pink-400/20 to-fuchsia-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-violet-400/15 to-purple-400/15 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;