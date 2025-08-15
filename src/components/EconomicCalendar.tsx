import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp, Filter, Search, ChevronDown, ChevronUp } from 'lucide-react';

const EconomicCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2024-06-22');
  
  const economicEvents = [
    { time: '08:30', country: 'GB', flag: '🇬🇧', event: 'Retail Sales (MoM)', impact: 'medium', forecast: '0.3%', previous: '-2.3%' },
    { time: '10:00', country: 'EU', flag: '🇪🇺', event: 'German Business Day', impact: 'low', forecast: '-', previous: '-' },
    { time: '12:30', country: 'US', flag: '🇺🇸', event: 'Michigan Consumer Sentiment', impact: 'high', forecast: '72.1', previous: '67.4' },
    { time: '13:30', country: 'CA', flag: '🇨🇦', event: 'CPI m/m Core Consumer price Decisions', impact: 'high', forecast: '0.3%', previous: '0.7%' },
    { time: '14:00', country: 'US', flag: '🇺🇸', event: 'CPI m/m Core Consumer price Decisions', impact: 'high', forecast: '0.3%', previous: '0.4%' },
    { time: '15:00', country: 'US', flag: '🇺🇸', event: 'CPI m/m Core Consumer price Decisions', impact: 'high', forecast: '0.3%', previous: '0.4%' },
    { time: '15:30', country: 'CA', flag: '🇨🇦', event: 'CPI m/m Core Consumer price Decisions', impact: 'medium', forecast: '0.2%', previous: '0.3%' },
    { time: '16:00', country: 'US', flag: '🇺🇸', event: 'CPI m/m Core Consumer price Decisions', impact: 'high', forecast: '0.3%', previous: '0.4%' },
    { time: '16:30', country: 'US', flag: '🇺🇸', event: 'CPI m/m Core Consumer price Decisions', impact: 'medium', forecast: '0.2%', previous: '0.3%' },
    { time: '17:00', country: 'CA', flag: '🇨🇦', event: 'CPI m/m New Commercial Aid Decisions', impact: 'low', forecast: '-0.1%', previous: '0.2%' },
    { time: '18:00', country: 'US', flag: '🇺🇸', event: 'CPI m/m Core Consumer price Decisions', impact: 'high', forecast: '0.3%', previous: '0.4%' },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Economic Calendar
                </h1>
                
                <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                  The Economic Calendar allows you to monitor market-moving events as they occur in real time. Staying informed about major economic indicators, Fed announcements, and other economic indicators. These may be causing big movements in share and from a high percentage of trading opportunities.
                </p>
              </div>
              
              {/* Right Content - Calendar Cards Mockup */}
              <div className="relative">
                <div className="relative max-w-lg mx-auto">
                  {/* Calendar Cards Stack */}
                  <div className="relative">
                    {/* Back Card */}
                    <div className="absolute top-4 left-4 w-full bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform rotate-3">
                      <div className="h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl"></div>
                    </div>
                    
                    {/* Middle Card */}
                    <div className="absolute top-2 left-2 w-full bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 transform rotate-1">
                      <div className="h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl"></div>
                    </div>
                    
                    {/* Front Card */}
                    <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-white" />
                          <span className="text-white font-medium">Today's Events</span>
                        </div>
                        <div className="text-white/70 text-sm">Jun 22</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-white text-sm flex-1">US CPI Data</span>
                          <span className="text-white/70 text-xs">14:00</span>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-white text-sm flex-1">EU Retail Sales</span>
                          <span className="text-white/70 text-xs">16:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Table Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Controls */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium">Current week starting today</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">All Day</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">Today</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">Tomorrow</button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Advanced</span>
              </div>
              <Search className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Calendar Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-600">
                <div className="col-span-1">Time</div>
                <div className="col-span-1">Cur</div>
                <div className="col-span-1">Imp</div>
                <div className="col-span-5">Event</div>
                <div className="col-span-2">Forecast</div>
                <div className="col-span-2">Previous</div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {economicEvents.map((event, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 text-sm text-gray-600">{event.time}</div>
                  <div className="col-span-1 text-lg">{event.flag}</div>
                  <div className="col-span-1">
                    <div className={`w-3 h-3 rounded-full ${getImpactColor(event.impact)}`}></div>
                  </div>
                  <div className="col-span-5 text-sm text-gray-800">{event.event}</div>
                  <div className="col-span-2 text-sm text-gray-600">{event.forecast}</div>
                  <div className="col-span-2 text-sm text-gray-600">{event.previous}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-end mt-4 space-x-2">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <ChevronUp className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomicCalendar;