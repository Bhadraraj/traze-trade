import React from 'react';
import { CreditCard, Scale, Clock, Lock, Layers, BarChart2 } from 'lucide-react';

const STPTradingAccount = () => {
  return (
    <div className="bg-[#120D23] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <div className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">STP Trading Account</h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Are you interested in opening a TRADE STP account? If so, here is a
                simple guide that will help you decide if a STP account is the right
                one for you and how to get started.
              </p>
              <button className="bg-[#E74895] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#D4347E] transition-colors">
                Open a Live Trading Account
              </button>
            </div>
            {/* Right Image/Graphic */}
            <div className="hidden lg:flex justify-end relative">
              {/* Placeholder for the multi-screen device graphic */}
              <div className="w-[500px] h-[350px] relative">
                {/* Main tablet screen */}
                <div className="absolute top-0 right-0 w-[400px] h-[250px] bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                  {/* Mock chart */}
                </div>
                {/* Smaller phone screens */}
                <div className="absolute top-16 left-0 w-[150px] h-[250px] bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-xl transform -rotate-6">
                  {/* Mock data */}
                </div>
                <div className="absolute top-24 left-24 w-[120px] h-[200px] bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg transform rotate-3">
                  {/* Mock data */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-cover bg-center opacity-70" style={{ backgroundImage: 'url(https://i.imgur.com/83uR1a3.png)' }}></div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#1C172E] p-4 sm:p-8 max-w-7xl mx-auto rounded-lg shadow-2xl">
        {/* What is a STP Trading Account? */}
        <div className="bg-[#2D2A4B] p-6 sm:p-10 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">What is a STP Trading Account?</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The STP here is an abbreviation of, “Straight Through Processing”.
            This means that the client’s orders are sent to our liquidity providers
            (banks and/or brokers). With this, you can get access to real-time
            market prices and immediate order execution with no dealer
            intervention. Because of this, when you trade with a STP Trading
            Account, you get the most competitive market prices along with stability
            and flexibility, providing you with a massive advantage.
          </p>
        </div>

        {/* Account Details Section */}
        <div className="bg-[#1C172E] p-6 sm:p-10 rounded-lg shadow-inner border border-gray-700 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 text-center">Account Details</h2>
          <p className="text-gray-300 mb-10 text-center max-w-3xl mx-auto">
            The TRADE Standard STP Trading Account is made for the everyday trader looking for the best possible prices to place through positions that are made directly to liquidity providers.
            With the STP Trading Account, you can enjoy a 1:500 maximum leverage to all FX and Gold, the best possible prices on the market due to the STP model and open a trading account on any everyday trader can get.
          </p>

          {/* Trading Conditions Box */}
          <div className="bg-[#2D2A4B] rounded-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">TRADING CONDITIONS</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <CreditCard size={20} className="text-purple-400" />
                  <span>Initial Deposit</span>
                </div>
                <span className="font-semibold">800</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Scale size={20} className="text-purple-400" />
                  <span>Trading Account Base Currency</span>
                </div>
                <span className="font-semibold">USD</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Clock size={20} className="text-purple-400" />
                  <span>Minimum FX Spread</span>
                </div>
                <span className="font-semibold">1.3</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Lock size={20} className="text-purple-400" />
                  <span>Leverage</span>
                </div>
                <span className="font-semibold">Up to 1:2000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Layers size={20} className="text-purple-400" />
                  <span>Standard Lot Contract Units</span>
                </div>
                <span className="font-semibold">100,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <BarChart2 size={20} className="text-purple-400" />
                  <span>Maximum open positions and pending orders</span>
                </div>
                <span className="font-semibold">200</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <BarChart2 size={20} className="text-purple-400" />
                  <span>Margin Call Level</span>
                </div>
                <span className="font-semibold">From 0.01 to 200 (Min 0.01 Max 200)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <div className="flex items-center space-x-4 text-gray-300">
                  <BarChart2 size={20} className="text-purple-400" />
                  <span>Stop-out level</span>
                </div>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-4 text-gray-300">
                  <BarChart2 size={20} className="text-purple-400" />
                  <span>Market Execution</span>
                </div>
                <span className="font-semibold">From 0.3 sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* ON THE GO Section */}
        <div className="bg-[#2D2A4B] p-6 sm:p-10 rounded-lg mt-8">
          <h2 className="text-sm text-purple-400 font-semibold mb-2">ON THE GO</h2>
          <h3 className="text-3xl font-bold mb-4">What Can You Do and Get from it?</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            With a Standard STP Trading Account, you get to enjoy a 1.3 minimum FX spread along with a 1:500 maximum leverage. As standard lots go, with a Standard STP Trading Account you will start with 100,000 standard lot contract units. You also get a low stop-out order at 20%. With higher than the total Trading Account and you get to enjoy a minimum of 0.01 minimum trade size (if the amount is).
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Through the Standard STP Trading Account, you get the best possible prices on the market due to the STP model we employ for your orders to be made direct to the liquidity providers.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            All in all, Standard STP Trading Account holders get the best out of their deposits since there is no middlemen to blur the line of additional profits.
          </p>
          <button className="bg-[#E74895] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#D4347E] transition-colors">
            Open a Demo Trading Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default STPTradingAccount;