import React from 'react';
import { Users, TrendingUp, Handshake } from 'lucide-react';

const PartnershipsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - 3D Visualization */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Partnership Visual */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 relative overflow-hidden">
                {/* 3D Elements */}
                <div className="relative">
                  {/* Fund Managers Circle */}
                  <div className="absolute top-4 left-4 w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-white mx-auto mb-1" />
                      <div className="text-white text-xs font-semibold">Fund Managers</div>
                    </div>
                  </div>

                  {/* Marketing Affiliates Circle */}
                  <div className="absolute bottom-4 left-8 w-28 h-28 bg-white/15 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-white mx-auto mb-1" />
                      <div className="text-white text-xs font-semibold">Marketing Affiliates</div>
                    </div>
                  </div>

                  {/* Introducing Brokers */}
                  <div className="absolute top-12 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center transform rotate-12">
                    <div className="text-center">
                      <div className="text-black text-lg font-bold">IB</div>
                      <div className="text-black text-xs">Introducing Brokers</div>
                    </div>
                  </div>

                  {/* Central Connection */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Handshake className="w-8 h-8 text-purple-600" />
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <path d="M60 60 L150 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M80 160 L150 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M240 80 L150 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-white text-sm font-semibold">Active Partners</div>
              <div className="text-2xl font-bold text-white">500+</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              COLLABORATION
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Partnerships
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Earn commissions through Introducing Brokers, Traze's easy 
              and transparent affiliate program.
            </p>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Traze marketing affiliates are an integral part of our success. We've 
                developed a competitive model that maximizes affiliates while giving them 
                the tools to track their performance.
              </p>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;