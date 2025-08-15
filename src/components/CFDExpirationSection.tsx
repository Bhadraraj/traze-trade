import React from 'react';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

const CFDExpirationSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  CFD Expiration
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Date
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                    Below are CFD expiry dates linked to specific assets. You must 
                    choose between closing any open position(s), letting them expire, 
                    or rolling them over. If rolled over, any existing pending order(s) 
                    (Stop Loss, Take Profit, Entry Stop, or Entry Limit) will be adjusted 
                    symmetrically (point-for-point) to reflect the price difference 
                    between expiring and new contracts.
                  </p>
                </div>
              </div>
              
              {/* Date Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">22</div>
                  <div className="text-purple-300 text-sm font-medium">JUN</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Trading Interface Mockup */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Trading Panel */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white text-xl font-semibold">Crude oil</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-sm">Live</span>
                    </div>
                  </div>
                  
                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      CFDs
                      <br />
                      <span className="text-2xl text-purple-300">Expiration</span>
                    </div>
                  </div>
                  
                  {/* Expiry List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white text-sm">Crude oil</span>
                      </div>
                      <span className="text-white/70 text-sm">22 Jun 2024</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-white text-sm">Natural Gas</span>
                      </div>
                      <span className="text-white/70 text-sm">28 Jun 2024</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white text-sm">Brent Oil</span>
                      </div>
                      <span className="text-white/70 text-sm">15 Jul 2024</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-white text-sm">Gold</span>
                      </div>
                      <span className="text-white/70 text-sm">29 Aug 2024</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-xl font-semibold transition-all text-sm">
                      Roll Over
                    </button>
                    <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-3 rounded-xl font-semibold transition-all text-sm">
                      Close Position
                    </button>
                  </div>
                </div>
                
                {/* Floating Warning Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-semibold">Expiring Soon</span>
                  </div>
                </div>
                
                {/* Floating Trend Indicator */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold">Market Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
    </div>
  );
};

export default CFDExpirationSection;