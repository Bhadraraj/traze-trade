import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, User, Menu, X, ArrowUpRight, CheckCircle, Smartphone, BarChart, Users, HelpCircle, BellRing, Briefcase, Handshake, Mail } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer from './components/Home';
 
// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'Accounts':
        return <AccountsPage />;
      case 'Standard Trading Account':
        return <GenericPage title="Standard Trading Account" content="A versatile account suitable for all traders." />;
      case 'ECN Trading Account':
        return <GenericPage title="ECN Trading Account" content="Experience lightning-fast execution and razor-thin spreads." />;
      case 'VIP Account':
        return <GenericPage title="VIP Account" content="Enjoy exclusive benefits, dedicated support, and premium trading conditions." />;
      case 'Islamic Account':
        return <GenericPage title="Islamic Account" content="Swap-free trading for clients following the Islamic faith." />;
      case 'Demo Account':
        return <GenericPage title="Demo Account" content="Practice your strategies risk-free with virtual funds." />;
      case 'Account Types Comparison':
        return <GenericPage title="Account Types Comparison" content="Detailed comparison of all our trading account types." />;
      case 'Platforms':
        return <PlatformsPage />;
      case 'MT4 Platforms':
        return <GenericPage title="MT4 Platforms" content="Discover the world's most popular trading platform, MetaTrader 4." />;
      case 'MT4 For Windows':
        return <GenericPage title="MT4 For Windows" content="Download MT4 for your Windows desktop." />;
      case 'MT4 For Mac':
        return <GenericPage title="MT4 For Mac" content="Download MT4 for your macOS desktop." />;
      case 'MT4 For Mobile':
        return <GenericPage title="MT4 For Mobile" content="Trade on the go with MT4 mobile apps." />;
      case 'MT5 Platforms':
        return <GenericPage title="MT5 Platforms" content="Experience the next generation trading platform, MetaTrader 5." />;
      case 'MT5 For Windows':
        return <GenericPage title="MT5 For Windows" content="Download MT5 for your Windows desktop." />;
      case 'MT5 For Mac':
        return <GenericPage title="MT5 For Mac" content="Download MT5 for your macOS desktop." />;
      case 'MT5 For Mobile':
        return <GenericPage title="MT5 For Mobile" content="Trade on the go with MT5 mobile apps." />;
      case 'Traze Mobile App':
        return <GenericPage title="Traze Mobile App" content="Trade and manage your account with our custom-built mobile app." />;
      case 'MAM Services':
        return <GenericPage title="MAM Services" content="Explore our Multi-Account Manager services for professional traders." />;
      case 'Trading Tools':
        return <TradingToolsPage />;
      case 'CFD Expiration Date':
        return <GenericPage title="CFD Expiration Date" content="View the expiration dates for various CFD instruments." />;
      case 'Economic calendar':
        return <GenericPage title="Economic calendar" content="Stay ahead of the market with our real-time economic calendar." />;
      case 'Copy-Trading Platform':
        return <GenericPage title="Copy-Trading Platform" content="Copy successful traders and grow your portfolio." />;
      case 'Signal Center':
        return <GenericPage title="Signal Center" content="Get professional trading signals directly to your platform." />;
      case 'Partnership':
        return <PartnershipPage />;
      case 'About Us':
        return <AboutUsPage />;
      case 'Contact Us':
        return <GenericPage title="Contact Us" content="Get in touch with our support team." />;
      case 'Help Center':
        return <GenericPage title="Help Center" content="Find answers to frequently asked questions and guides." />;
      case 'Announcements':
        return <GenericPage title="Announcements" content="Read the latest company news and updates." />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-24 pb-16">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};




// Page Components
const HomePage = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 text-center lg:text-left min-h-[calc(100vh-12rem)]">
    <div className="lg:w-1/2">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
        Trade <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Smarter</span>, Not Harder.
      </h1>
      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
        Traze offers a powerful and intuitive platform for forex and CFD trading. With advanced tools and transparent conditions, we help you navigate the markets with confidence.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={() => alert("Open Live Account page coming soon!")}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Open Live Account
        </button>
        <button 
          onClick={() => alert("Learn More page coming soon!")}
          className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 border border-gray-700"
        >
          Learn More
        </button>
      </div>
    </div>
    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
      <img src="https://placehold.co/600x400/1f2937/d1d5db?text=Trading+Dashboard" alt="Trading Dashboard" className="rounded-xl shadow-2xl border border-gray-700" />
    </div>
  </div>
);

const AccountsPage = () => (
  <div className="max-w-7xl mx-auto p-8 lg:p-16">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Account Types</h1>
    <p className="text-lg text-gray-300 mb-12">Choose the account that best fits your trading style and experience level.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <Briefcase className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-semibold text-white">Standard Trading Account</h2>
        </div>
        <p className="text-gray-400 mb-4">A great starting point for all traders. Offers competitive spreads and no commission.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Competitive spreads</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> No commission</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Flexible lot sizes</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Learn More <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <BarChart className="w-8 h-8 text-pink-400" />
          <h2 className="text-2xl font-semibold text-white">ECN Trading Account</h2>
        </div>
        <p className="text-gray-400 mb-4">For experienced traders seeking the best market spreads and fast execution.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Raw, interbank spreads</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Low commissions</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Ultra-fast execution</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Learn More <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <Briefcase className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-semibold text-white">VIP Account</h2>
        </div>
        <p className="text-gray-400 mb-4">Exclusive trading conditions and services for high-volume traders.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Dedicated account manager</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Zero commission</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> VIP market analysis</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Learn More <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const PlatformsPage = () => (
  <div className="max-w-7xl mx-auto p-8 lg:p-16">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Trading Platforms</h1>
    <p className="text-lg text-gray-300 mb-12">Access the markets from anywhere with our powerful and user-friendly platforms.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <BarChart className="w-8 h-8 text-green-400" />
          <h2 className="text-2xl font-semibold text-white">MetaTrader 4 (MT4)</h2>
        </div>
        <p className="text-gray-400 mb-4">The industry-standard platform known for its robust features, analytical tools, and expert advisors.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Advanced charting</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Expert Advisors (EAs)</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Available on Desktop & Mobile</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Download Now <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <BarChart className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-semibold text-white">MetaTrader 5 (MT5)</h2>
        </div>
        <p className="text-gray-400 mb-4">A multi-asset platform offering more technical indicators and additional timeframes.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> More timeframes and indicators</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Advanced market depth</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Hedging and netting systems</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Download Now <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <Smartphone className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-semibold text-white">Traze Mobile App</h2>
        </div>
        <p className="text-gray-400 mb-4">Trade on the go with our proprietary mobile trading app, designed for performance and ease of use.</p>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Intuitive interface</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Real-time market data</li>
          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Secure and reliable</li>
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          Get the App <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const TradingToolsPage = () => (
  <div className="max-w-7xl mx-auto p-8 lg:p-16">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Advanced Trading Tools</h1>
    <p className="text-lg text-gray-300 mb-12">Enhance your trading strategy with our suite of powerful tools and resources.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <BellRing className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl font-semibold text-white">Signal Center</h2>
        </div>
        <p className="text-gray-400">Receive real-time trading signals from experienced analysts to inform your decisions.</p>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <Briefcase className="w-8 h-8 text-teal-400" />
          <h2 className="text-2xl font-semibold text-white">Economic Calendar</h2>
        </div>
        <p className="text-gray-400">Stay up-to-date with key economic events and their potential impact on the markets.</p>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <Users className="w-8 h-8 text-pink-400" />
          <h2 className="text-2xl font-semibold text-white">Copy-Trading Platform</h2>
        </div>
        <p className="text-gray-400">Automate your trading by copying the strategies of successful traders on our platform.</p>
      </div>
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <BarChart className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-semibold text-white">CFD Expiration Dates</h2>
        </div>
        <p className="text-gray-400">Keep track of CFD expiration dates to manage your positions effectively.</p>
      </div>
    </div>
  </div>
);

const PartnershipPage = () => (
  <div className="max-w-4xl mx-auto p-8 lg:p-16 text-center">
    <Handshake className="w-16 h-16 text-purple-400 mx-auto mb-6" />
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Partnership Program</h1>
    <p className="text-lg text-gray-300 mb-8">
      Join our partnership program and earn rewards by introducing clients to our platform. We offer competitive commission structures and dedicated support.
    </p>
    <div className="flex justify-center">
      <button 
        onClick={() => alert("Partnership details coming soon!")}
        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Become a Partner
      </button>
    </div>
  </div>
);

const AboutUsPage = () => (
  <div className="max-w-4xl mx-auto p-8 lg:p-16 text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
    <p className="text-lg text-gray-300 mb-8">
      Traze is a real company with a mission to provide a transparent, secure, and technologically advanced trading environment for all our clients. We are committed to innovation and customer success.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
        <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Contact Us</h3>
      </div>
      <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
        <HelpCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Help Center</h3>
      </div>
      <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
        <BellRing className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Announcements</h3>
      </div>
    </div>
  </div>
);

// Generic page for sub-pages
const GenericPage = ({ title, content }) => (
  <div className="max-w-4xl mx-auto p-8 lg:p-16 text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
    <p className="text-lg text-gray-300">{content}</p>
  </div>
);


export default App;
