// UPDATED ACCOUNTSSECTION:
import React from 'react';

const AccountsSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              TRADING ACCOUNTS
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Accounts to fit every need</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The Traze range of accounts caters to traders of all experiences. Whatever your budget, background or 
              trading goals, we've carved out a place for you.
            </p>
          </div>

          {/* Account Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Trading Account */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">Standard Trading Account</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Leverage</span>
                  <span className="text-white font-semibold">1:2000</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Lot Size</span>
                  <span className="text-white font-semibold">1.3</span>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="text-4xl font-bold text-white mb-2">≥ $50</div>
                  <div className="text-gray-400 text-sm mb-6">Minimum to deposit</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-lg transition-all font-semibold">
                More info →
              </button>
            </div>

            {/* ECN Trading Account */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">ECN Trading Account</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Minimum Leverage</span>
                    <span className="text-white font-semibold">1:2000</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Commissions may apply</span>
                    <span className="text-white font-semibold">0.2</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-4xl font-bold text-white mb-2">≥ $200</div>
                    <div className="text-white/80 text-sm mb-6">Minimum to deposit</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-lg transition-all font-semibold">
                  More info →
                </button>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountsSection;