import React from 'react';
import { Smartphone, TrendingUp, Bell, Shield, PieChart, BarChart3 } from 'lucide-react';

const MobileAppSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Traze Mobile
                <br />
                Application
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Cutting Edge CFD & Forex Trading
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all">
                  <Smartphone className="w-5 h-5" />
                  iOS
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all">
                  Android
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white">
                    <TrendingUp className="w-6 h-6 mb-2" />
                    <div className="text-sm font-medium">Portfolio</div>
                    <div className="text-2xl font-bold">$12,430</div>
                    <div className="text-xs opacity-80">+2.4% today</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    <div className="text-sm font-medium">Trades</div>
                    <div className="text-2xl font-bold">47</div>
                    <div className="text-xs opacity-80">This month</div>
                  </div>
                </div>
                <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm">EUR/USD</span>
                    <span className="text-green-400 text-sm font-medium">+0.24%</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-green-400/20 to-green-400/40 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Traze Mobile Application
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Trade anytime, anywhere and be privy to an immersive, 
                    advanced and more integrated trading environment
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Get the global news to help you improve market conditions
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Use a simple, more convenient and more user-friendly 
                    interface
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  iOS
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Android
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">Trading Dashboard</h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-800">24</div>
                        <div className="text-xs text-gray-600">Open Positions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">+12.5%</div>
                        <div className="text-xs text-gray-600">Today's P&L</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">$8,420</div>
                        <div className="text-xs text-gray-600">Balance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Flexible and easy operation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Bring absolute anywhere with simple and friendly user interface
              </p>
              <p className="text-gray-400 text-xs">
                Achieve convenient online registration, withdrawal, deposit and trading with one-stop integrated system
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Follow updated news</h3>
              <p className="text-gray-300 text-sm mb-4">
                Defaults to second market quotations, including forex, metals, crude oil and indices
              </p>
              <p className="text-gray-400 text-xs">
                Get major events to enhance with complete Economic Calendar and News
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Custom your own investment</h3>
              <p className="text-gray-300 text-sm mb-4">
                Add your preferred product to your CRM, easy access to your favorite product
              </p>
              <p className="text-gray-400 text-xs">
                Customize and integrate products, simplify your own portfolio
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Caring fund management</h3>
              <p className="text-gray-300 text-sm mb-4">
                Easy management of real-$ accounts, free transfer of different account
              </p>
              <p className="text-gray-400 text-xs">
                7 x 24 hours deposit service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppSection;