import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const GlobalPresence: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - World Map */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              WORLDWIDE
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              A Global Presence
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A presence across 2 continents and with a multi-lingual team in each to 
              help you shine.
            </p>

            {/* World Map Visualization */}
            <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 h-64">
              {/* Simplified World Map */}
              <div className="relative w-full h-full">
                {/* Continents as simplified shapes */}
                <div className="absolute top-8 left-12 w-16 h-12 bg-gray-600 rounded-lg opacity-60"></div>
                <div className="absolute top-12 left-32 w-20 h-16 bg-gray-600 rounded-xl opacity-60"></div>
                <div className="absolute top-20 left-8 w-12 h-20 bg-gray-600 rounded-lg opacity-60"></div>
                <div className="absolute top-16 right-16 w-24 h-18 bg-gray-600 rounded-2xl opacity-60"></div>
                <div className="absolute bottom-8 left-20 w-18 h-14 bg-gray-600 rounded-lg opacity-60"></div>

                {/* Location Markers */}
                <div className="absolute top-12 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                  <div className="absolute -top-6 -left-4 text-white text-xs whitespace-nowrap">LONDON</div>
                </div>
                <div className="absolute top-20 left-36 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                  <div className="absolute -top-6 -left-4 text-white text-xs whitespace-nowrap">CYPRUS</div>
                </div>
                <div className="absolute top-24 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                  <div className="absolute -top-6 -left-8 text-white text-xs whitespace-nowrap">HONG KONG</div>
                </div>
                <div className="absolute bottom-12 left-24 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                  <div className="absolute -bottom-6 -left-6 text-white text-xs whitespace-nowrap">SEYCHELLES</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Newsletter */}
          <div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                  SUBSCRIBE
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Join the news
                </h3>
                <p className="text-white/90 mb-8">
                  Sign up to our mail list today
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>

            {/* Decorative 3D Element */}
            <div className="mt-8 relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;