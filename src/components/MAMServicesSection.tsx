import React from 'react';
import { Smartphone, Users, TrendingUp, Clock, Monitor, Settings, BarChart3, Download } from 'lucide-react';

const MAMServicesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                MAM
                <br />
                Services
              </h1>
              <p className="text-white/90 text-lg mb-2 font-medium">
                Multi Account Manager
              </p>
              <p className="text-white/80 text-sm mb-8">
                For Money Managers
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone mockup */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 text-white text-center mb-4">
                    <div className="text-2xl font-bold">$100,000</div>
                    <div className="text-sm opacity-90">Multi Account Manager</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full inline-block">Strategy A</div>
                    <div className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full inline-block ml-2">Portfolio B</div>
                    <div className="bg-purple-400 text-white text-xs px-3 py-1 rounded-full inline-block">Fund C</div>
                    <div className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full inline-block ml-2">Account D</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-2 rounded-lg text-xs font-semibold">
                  Active
                </div>
                <div className="absolute -bottom-2 -left-2 bg-orange-500 text-white p-2 rounded-lg text-xs">
                  +12.5%
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-white text-center max-w-4xl mx-auto leading-relaxed">
              The Multi Account Manager (MAM) is suitable for Money managers, Hedge Funds, and Family Offices, with Traze's 
              revolutionary MAM solution, master account holders can distribute trades among multiple accounts automatically.
            </p>
            <p className="text-white/90 text-center max-w-4xl mx-auto mt-4 leading-relaxed">
              You will Think that we consider selecting the optimal modules that aligned more percentage all while the investor 
              has the control of their own account. Custom MAM account allocation available with multiple and flexible setting.
            </p>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* MAM Account Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">MAM Account</h2>
            <p className="text-gray-600">MAM account's structure methods</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-blue-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Master</h3>
                  <span className="text-2xl font-bold">$15,000</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Balance</span>
                    <span>$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equity</span>
                    <span>$15,532</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Proportional by Equity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Percent Allocation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Proportional by Balance</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-orange-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Slave</h3>
                  <span className="text-2xl font-bold">$17,530</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Balance</span>
                    <span>$7,530</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equity</span>
                    <span>$15,720</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Allocation by P/L</h4>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Percent Allocation by P/L</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Proportional Allocation by P/L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-sm">
                Compatible with EAs and Automated strategies
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-sm">
                "Close Only" Execution Orders
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-sm">
                Trading via account client with partial close option than via account panel
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">0.01</span>
              </div>
              <p className="text-white/90 text-sm">
                Offer transaction starting from as little as 0.01 lot
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-sm">
                Real-Time Copies of positions and orders between Master and Slave Accounts
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-sm">
                <span className="font-semibold">MT4</span><br />
                utilizes an MT4 order type Cloud, more trading types, more at your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Download Traze MT4 Trading Platform</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="text-4xl mb-2">🍎</div>
              <div className="text-white font-medium">iOS</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="text-4xl mb-2">🤖</div>
              <div className="text-white font-medium">Android</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="text-4xl mb-2">🪟</div>
              <div className="text-white font-medium">Windows</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="text-4xl mb-2">🌐</div>
              <div className="text-white font-medium">Web</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MAMServicesSection;