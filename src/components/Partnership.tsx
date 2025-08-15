import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, DollarSign, Target, Share2, UserCheck, TrendingDown } from 'lucide-react';

const TrazePartnershipProgram: React.FC = () => {
  const [monthlyClients, setMonthlyClients] = useState(1);
  const [income, setIncome] = useState(10000);

  const calculateIncome = (clients: number) => {
    return clients * 10000;
  };

  React.useEffect(() => {
    setIncome(calculateIncome(monthlyClients));
  }, [monthlyClients]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Traze Partnership
                  <br />
                  Program
                </h1>
                
                <div className="space-y-4">
                  <p className="text-white/90 text-lg leading-relaxed">
                    Earn up to 60% commissions from the trading activity of each online 
                    you refer to us. The commission ranges from 20% to 60% based 
                    on your tier.
                  </p>
                  <p className="text-white/80 text-base">
                    The more clients you refer to us and the more trading activity 
                    you generate there, Grow your network, Multiply your earnings.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                    Login
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                    Register
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Partnership Tiers */}
            <div className="relative">
              <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-4">
                  {/* Tier 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">20%</span>
                    </div>
                    <div className="text-white/80 text-xs">Bronze</div>
                    <div className="text-white/60 text-xs mt-1">Starter</div>
                  </div>
                  
                  {/* Tier 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">30%</span>
                    </div>
                    <div className="text-white/80 text-xs">Silver</div>
                    <div className="text-white/60 text-xs mt-1">Growing</div>
                  </div>
                  
                  {/* Tier 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">40%</span>
                    </div>
                    <div className="text-white/80 text-xs">Gold</div>
                    <div className="text-white/60 text-xs mt-1">Elite</div>
                  </div>
                  
                  {/* Tier 4 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">60%</span>
                    </div>
                    <div className="text-white/80 text-xs">Diamond</div>
                    <div className="text-white/60 text-xs mt-1">Master</div>
                  </div>
                </div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-12 px-4 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-white text-lg font-medium mb-8">Our Licenses</h3>
          <div className="flex justify-center items-center gap-12">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
              <div className="text-2xl font-bold text-white">ASIC</div>
              <div className="text-white/70 text-sm">Australian Securities</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
              <div className="text-2xl font-bold text-white">CMA</div>
              <div className="text-white/70 text-sm">Capital Markets Authority</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
              <div className="text-2xl font-bold text-white">FSCA</div>
              <div className="text-white/70 text-sm">Financial Sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Calculator & Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Calculator */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Calculate your income</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Use our partnership income calculator to estimate your earning potential. 
                Start by choosing the tier level to see how much you could be earning 
                as you refer clients or the number of clients you have.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">Monthly Active Clients</label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={monthlyClients}
                      onChange={(e) => setMonthlyClients(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/60 text-xs mt-2">
                      <span>1</span>
                      <span>100</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="bg-white/20 rounded-xl p-4 inline-block">
                      <span className="text-white text-2xl font-bold">{monthlyClients}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Your earning per month</span>
                    <span className="text-pink-400 text-3xl font-bold">${income.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  How much you can gain
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  The amount about that you can gain depends on several factors. 
                  Here are some of the main factors:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/90">Your partnership level</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/90">Trading volume of the active clients you brought</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/90">How big actually trade</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                    Become a partner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white">
                How to start earning
              </h3>
              <p className="text-white/90 leading-relaxed">
                You earn part of the trading cost that others are paying to the system.
              </p>
              <p className="text-white/80 text-sm">
                When your friend, online someone near you, colleagues or family members start trading with us, and you will get the commissions.
              </p>
              
              <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/30">
                Become a partner
              </button>
            </div>
            
            {/* Right - Steps */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 mb-4">
                  <Share2 className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">Share your Partnership</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 mb-4">
                  <UserCheck className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">Users become clients</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 mb-4">
                  <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">Trading make Profit</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 mb-4">
                  <DollarSign className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">Clients must Trade</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="text-white text-xl font-bold">You can earn up to 40% of trade cost</div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-white/70">Online trading on different types of instrument</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metals */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl font-bold opacity-20">01</div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">Metals:</h3>
                <p className="text-sm opacity-90">Gold, Silver, Platinum, Copper, Palladium</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Shares */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl font-bold opacity-20">02</div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">Shares:</h3>
                <p className="text-sm opacity-90">Apple, Amazon, Google, Netflix, Tesla, Shopify, Cloud Systems, ETC</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Forex */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl font-bold opacity-20">03</div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">Forex:</h3>
                <p className="text-sm opacity-90">Major, Minor, Exotic currency pairs</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Commodities */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl font-bold opacity-20">04</div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">Commodities:</h3>
                <p className="text-sm opacity-90">Oil, Natural Gas, Agricultural products</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          cursor: pointer;
          border: 2px solid white;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default TrazePartnershipProgram;