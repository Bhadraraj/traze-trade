import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Crystal
              <br />
              Clear
              <br />
              Trading
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Cutting Edge CFD & Forex Trading
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Open Account
            </button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">Account creation</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">STP Account</span>
                    <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                      STP Account
                    </div>
                  </div>

                  <div className="text-white text-sm">
                    <p>Start your investment journey with a</p>
                    <p>minimum deposit of $200. Enjoy</p>
                    <p>competitive spreads and access to</p>
                    <p>a wide choice of instruments.</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-white">$ 500</div>
                      <div className="text-gray-300 text-sm">1:3</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">1:3</div>
                      <div className="text-gray-300 text-sm">0.01 - 50</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="text-white text-sm mb-2">
                  STP Trading Account
                </div>
                <div className="text-2xl font-bold text-white">$1369.61</div>
                <div className="flex justify-between text-xs text-gray-300 mt-2">
                  <span>$1000</span>
                  <span>$1400</span>
                </div>
                <div className="mt-2">
                  <button className="bg-pink-600 text-white px-4 py-1 rounded text-xs">
                    Deposit
                  </button>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <div className="text-white text-xs">GOLD/USD</div>
                    <div className="text-green-400 text-xs">+2.45%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;