import React from 'react';

const AnnouncementsSection: React.FC = () => {
  const announcements = [
    {
      id: 1,
      date: "2024-08",
      title: "Trade System Maintenance - August 26, 2024",
      preview: "Dear Valued Clients, We would like to inform you that on Saturday, August 24, between 2:00 pm and 7:00 pm UTC, we will be performing maintenance on our trading servers. Certain services may be temporarily unavailable during this time period. These services include: MT4 platform, Live MT4 News for newsrooms such as advisors, withdrawals, and internal transfers. Live Market News coverage. All services will resume normal operations promptly after the maintenance is completed. We apologize for the inconvenience.",
      isImportant: true
    },
    {
      id: 2,
      date: "2024-08",
      title: "Trade System Maintenance - August 24, 2024",
      preview: "Scheduled maintenance update for trading systems and platform improvements.",
      isImportant: false
    },
    {
      id: 3,
      date: "2024-07",
      title: "Amendment of Market Opening Time for GBP/H and PM40 Indices",
      preview: "Notice of changes to market opening hours for specific trading instruments effective immediately.",
      isImportant: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Header Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Announcements</h1>
            </div>
            
            {/* Floating UI Elements */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="w-64 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold">Trading Dashboard</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-white text-sm">Active Sessions: 1,247</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="text-white text-sm">Pending Orders: 892</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="text-white text-sm">Market Status: Open</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative floating card */}
              <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements Cards */}
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <div key={announcement.id} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${announcement.isImportant && index === 0 ? 'ring-2 ring-red-400/50' : ''}`}>
                {announcement.isImportant && index === 0 && (
                  <div className="absolute -top-2 -left-2">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      IMPORTANT
                    </div>
                  </div>
                )}
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        {announcement.date}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {index === 0 ? 'Active' : 'Archived'}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {announcement.preview}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center space-x-1 transition-colors">
                        <span>See more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                      
                      {index === 0 && (
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span>2 hours ago</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Load More Announcements
            </button>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default AnnouncementsSection;