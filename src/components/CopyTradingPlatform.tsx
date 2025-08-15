import React from 'react';
import { TrendingUp, Users, Clock, Shield, BarChart3, Target, Copy, Star, CheckCircle, ArrowRight } from 'lucide-react';

const CopyTradingPlatform: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-black py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl font-bold text-white mb-6">
                Copy-Trading Platform
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let the best help you build your portfolio
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Copy Trading
              </button>
            </div>

            {/* Right Content - Trading Cards */}
            <div className="relative">
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform rotate-3 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Alex Chen</div>
                        <div className="text-white/70 text-sm">Senior Trader</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">+142.5%</div>
                  <div className="text-white/80 text-sm">Total Return</div>
                  <div className="bg-white/20 rounded-lg p-3 mt-4">
                    <div className="text-white text-sm">Risk Score: 6/10</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform -rotate-2 shadow-2xl ml-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Maria Lopez</div>
                        <div className="text-white/70 text-sm">Pro Trader</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">+89.3%</div>
                  <div className="text-white/80 text-sm">Total Return</div>
                  <div className="text-white text-lg font-semibold">$ 785.00</div>
                </div>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Copy and Trade Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Copy the best and Trade with confidence
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Traze Copy Trading allows you to replicate the performance of top 
                performers via earning investors. With this tool, you'll be able to follow and 
                automatically copy the trades and portfolios of our five-class St Germain 
                skilled investors via real-time. Our tool will facilitate your trading and 
                can help you generate passive income—even if you don't have previous trading 
                experience.
              </p>
            </div>

            {/* Right Content - Trader Cards */}
            <div className="relative">
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-2xl p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <img src="/api/placeholder/64/64" alt="Trader" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">John Smith</div>
                    <div className="text-blue-600 font-bold text-xl">+108.89%</div>
                    <div className="text-gray-600 text-sm">450 Followers</div>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Follow
                  </button>
                </div>
                
                <div className="bg-purple-100 rounded-2xl p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <img src="/api/placeholder/64/64" alt="Trader" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-purple-600 font-bold text-xl">+95.2%</div>
                    <div className="text-gray-600 text-sm">328 Followers</div>
                  </div>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">An easy-to-use and free trading tool</h3>
              <p className="text-gray-300 text-sm">Simple interface for effortless copy trading</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">An inclusive platform: no need for extensive trading knowledge to get started</h3>
              <p className="text-gray-300 text-sm">Perfect for beginners and experienced traders</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">No need to spend hours looking or working on trades</h3>
              <p className="text-gray-300 text-sm">Automated trading saves time and effort</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">An entirely customizable trading experience: diversify your portfolio by copying trades of a variety of markets</h3>
              <p className="text-gray-300 text-sm">Flexible and secure trading environment</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">A team of Traze professionals at your service to help you find portfolios by copying trades</h3>
              <p className="text-gray-300 text-sm">Expert support and guidance available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Highlight feature of Traze Copy Trading
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
                  <p className="text-gray-600">A time-saving way to earn passive income</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking</h3>
                  <p className="text-gray-600">Follow successful platform, experts, or businesses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Diversify</h3>
                  <p className="text-gray-600">Diversify and optimize asset allocation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Control</h3>
                  <p className="text-gray-600">Take control over your trades and strategy</p>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Leaderboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">1</div>
                      <span className="font-medium">Alex Chen</span>
                    </div>
                    <span className="text-green-600 font-semibold">+142.5%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">2</div>
                      <span className="font-medium">Maria Lopez</span>
                    </div>
                    <span className="text-green-600 font-semibold">+108.2%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
                      <span className="font-medium">John Smith</span>
                    </div>
                    <span className="text-green-600 font-semibold">+95.8%</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                View All Traders
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Regulation</h2>
          <h3 className="text-2xl font-semibold text-purple-300">Copy Trading Mandates</h3>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Copier */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Traze Copy Trading for Copier</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                All copiers, you will gain instant access to our network of 
                professional traders from around the world. Through our platform, you'll never again 
                need You can then learn from their past experience and 
                see real copies as we provide free-live results of the 
                best and most successful traders on our platform. As a 
                copier, you are bound to find a inspiring opportunity 
                because and also
              </p>
              <p className="text-gray-300 leading-relaxed">
                To get started, you'll simply need to top-up your add 
                funds to start copying the investments of professional 
                traders. Our Copier Policy is determining based on your 
                account balance.
              </p>
            </div>

            {/* For Trader */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Traze Copy Trading for Trader</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Are you an experienced trader with a successful investing 
                track record? Then become a Popular Investor at Traze and 
                allow others to copy your profitable investing history - and to 
                offer them to earn additional revenue. Traders & Top Traders, 
                and their and every thing where are having comprehensive of the 
                trading and each successful performance. In the meantime, you you 
                are responsible you also need competitive world successful with 
                payers of all the comprehensive of the other operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopyTradingPlatform;