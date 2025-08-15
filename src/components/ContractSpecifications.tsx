import React, { useState } from 'react';
import { Search, Filter, Download, Smartphone } from 'lucide-react';

const ContractSpecifications: React.FC = () => {
  const [activeAccount, setActiveAccount] = useState('Standard STP Trading Account');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const accountTypes = [
    'Standard STP Trading Account',
    'ECN Trading Account'
  ];

  const categories = ['All', 'Forex', 'Commodities', 'Indices', 'Crypto', 'Shares'];

  const contractData = [
    {
      symbol: 'USDCAD',
      currency: 'US Dollar vs Canadian Dollar',
      typicalSpread: '1.8',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDCHF',
      currency: 'US Dollar vs Swiss Franc',
      typicalSpread: '1.9',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDCNH',
      currency: 'US Dollar vs Chinese Yuan',
      typicalSpread: '35.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDCZK',
      currency: 'US Dollar vs Czech Koruna',
      typicalSpread: '150.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDDKK',
      currency: 'US Dollar vs Danish Krone',
      typicalSpread: '25.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDHUF',
      currency: 'US Dollar vs Hungarian Forint',
      typicalSpread: '55.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDJPY',
      currency: 'US Dollar vs Japanese Yen',
      typicalSpread: '1.1',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDMXN',
      currency: 'US Dollar vs Mexican Peso',
      typicalSpread: '135.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDNOK',
      currency: 'US Dollar vs Norwegian Krone',
      typicalSpread: '55.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDPLN',
      currency: 'US Dollar vs Polish Zloty',
      typicalSpread: '35.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDSEK',
      currency: 'US Dollar vs Swedish Krona',
      typicalSpread: '35.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDSGD',
      currency: 'US Dollar vs Singapore Dollar',
      typicalSpread: '3.5',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDTRY',
      currency: 'US Dollar vs Turkish Lira',
      typicalSpread: '25.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    },
    {
      symbol: 'USDZAR',
      currency: 'US Dollar vs South African Rand',
      typicalSpread: '150.0',
      minSpread: 'SAME AS INTERBANK PRICE',
      maxSpread: 'SAME AS INTERBANK PRICE',
      minLotSize: '0.01',
      tradingSchedule: 'Sunday 17:05 - Friday 16:55 (Server time GMT)'
    }
  ];

  const filteredData = contractData.filter(item => 
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Contract Specifications
              </h1>
              <p className="text-lg mb-6 text-purple-200 leading-relaxed">
                Get started with the contract specifications below. Here at Traze,
                we understand you want real time trading results and transparent
                conditions with competitive spreads.
              </p>
              <p className="text-lg mb-8 text-purple-200 leading-relaxed">
                Below you'll find trading specifics for instruments on both STP
                & eliminating third contract specifications and get best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Start Trading
                </button>
                <button className="border-2 border-purple-300 text-purple-200 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Specifications
                </button>
              </div>
            </div>

            {/* Right Content - Mobile Mockups */}
            <div className="relative flex justify-center">
              {/* Main Phone */}
              <div className="relative z-10">
                <div className="w-64 h-[520px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-700">
                  <div className="w-full h-full bg-white rounded-2xl p-4 relative overflow-hidden">
                    {/* Phone Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-semibold text-gray-800">Contract Specs</div>
                      <div className="text-xs text-gray-600">9:41 AM</div>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center space-x-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search instruments..."
                        className="bg-transparent text-sm flex-1 outline-none text-gray-600"
                      />
                    </div>
                    
                    {/* Instrument List */}
                    <div className="space-y-3 mb-6">
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-800">USDCAD</div>
                            <div className="text-xs text-gray-600">US Dollar vs Canadian Dollar</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-purple-600">1.8</div>
                            <div className="text-xs text-gray-500">spread</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border-l-4 border-gray-300 p-3 rounded-r-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-800">USDCHF</div>
                            <div className="text-xs text-gray-600">US Dollar vs Swiss Franc</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-gray-600">1.9</div>
                            <div className="text-xs text-gray-500">spread</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border-l-4 border-gray-300 p-3 rounded-r-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-800">USDJPY</div>
                            <div className="text-xs text-gray-600">US Dollar vs Japanese Yen</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-gray-600">1.1</div>
                            <div className="text-xs text-gray-500">spread</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* View More Button */}
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold text-sm">
                      View All Specifications
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Phone (Background) */}
              <div className="absolute top-8 -right-16 z-0 opacity-60">
                <div className="w-56 h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-xl border border-slate-700">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-4 text-purple-800">Trading Specs</div>
                      <div className="space-y-2">
                        <div className="bg-white p-2 rounded text-xs">
                          <div className="font-semibold text-gray-800">Min Lot Size</div>
                          <div className="text-purple-600">0.01</div>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <div className="font-semibold text-gray-800">Max Leverage</div>
                          <div className="text-purple-600">1:500</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-purple-500 rounded-xl p-3 shadow-lg z-20">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-16 right-4 bg-pink-500 rounded-xl p-3 shadow-lg z-20">
                <Filter className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* Contract Specifications Table */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Account Type Selector */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {accountTypes.map((account) => (
                <button
                  key={account}
                  onClick={() => setActiveAccount(account)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeAccount === account
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {account}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by symbol or currency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center space-x-2 transition-all">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Symbol</th>
                    <th className="px-6 py-4 text-left font-semibold">Currency Pair / Instrument</th>
                    <th className="px-6 py-4 text-left font-semibold">Typical Spread</th>
                    <th className="px-6 py-4 text-left font-semibold">Min</th>
                    <th className="px-6 py-4 text-left font-semibold">Max</th>
                    <th className="px-6 py-4 text-left font-semibold">Minimum Lot Size</th>
                    <th className="px-6 py-4 text-left font-semibold">Trading Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50 transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-purple-600">{item.symbol}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-800">{item.currency}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">{item.typicalSpread}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600 text-sm">{item.minSpread}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600 text-sm">{item.maxSpread}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">{item.minLotSize}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600 text-sm">{item.tradingSchedule}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Competitive Spreads</h3>
              <p className="text-purple-700">
                Our spreads are based on interbank pricing, ensuring you get the most competitive rates in the market.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-pink-800 mb-3">Flexible Lot Sizes</h3>
              <p className="text-pink-700">
                Start trading with micro lots from 0.01, perfect for both beginners and experienced traders.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">24/5 Trading</h3>
              <p className="text-indigo-700">
                Trade Forex pairs 24 hours a day, 5 days a week with our reliable execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractSpecifications;