import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Globe, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const menuItems = [
    { 
      name: 'Trading', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Forex', path: '/forex' },
        { name: 'Indices', path: '/markets/indices' },
        { name: 'Shares', path: '/accounts/shares' },
        { name: 'Commodities', path: '/markets/commodities' },
        { name: 'Cryptocurrency', path: '/markets/crypto' },
        { name: 'Contract Specification', path: '/markets/contract-spec' },
        { name: 'Leverage Policy', path: '/markets/leverage-policy' }
      ]
    },
    { 
      name: 'Account', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Standard Trading Accounts', path: '/standard-trading-account' },
        { name: 'ECN Trading Accounts', path: '/ecn-trading-account' },
        
      ]
    },
    { 
      name: 'Platforms', 
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'MT4 Platforms', 
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'MT4 For Windows', path: '/platforms/mt4-windows' },
            { name: 'MT4 For Mac', path: '/platforms/mt4-mac' },
            { name: 'MT4 For Mobile', path: '/platforms/mt4-mobile' }
          ]
        },
 
        { name: 'Traze Mobile App', path: '/platforms/mobile-app' },
        { name: 'MAM Services', path: '/tools/mam-services' }
      ]
    },
    { 
      name: 'Trading Tools', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'CFD Expiration Date', path: '/tools/cfd-expiration' },
        { name: 'Economic calendar', path: '/tools/economic-calendar' },
        { name: 'Copy-Trading Platform', path: '/tools/copy-trading' },
        // { name: 'Signal Center', path: '/tools/signal-center' }
      ]
    },
    { 
      name: 'Partnership', 
      hasDropdown: false,
      path: '/partnership',
      dropdownItems: []
    },
    { 
      name: 'About Us', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Help Center', path: '/help-center' },
        { name: 'Announcements', path: '/announcements' }
      ]
    },
  ];
 
  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveSubDropdown(null);
  };
  
  const handleSubDropdownToggle = (subItemName: string) => {
    setActiveSubDropdown(activeSubDropdown === subItemName ? null : subItemName);
  };

  const handleMouseEnter = (itemName: string) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(itemName);
      setActiveSubDropdown(null);
    }
  };

  const handleSubMouseEnter = (subItemName: string) => {
    if (window.innerWidth >= 1024) {
      setActiveSubDropdown(subItemName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <div className="text-white font-bold text-2xl">traze</div>
          <div className="text-xs text-gray-300 ml-1">A REAL COMPANY</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <button 
                  className="text-white hover:text-gray-300 flex items-center space-x-1 text-sm font-medium py-2"
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  <span>{item.name}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              ) : (
                <Link 
                  to={item.path || '#'}
                  className="text-white hover:text-gray-300 flex items-center space-x-1 text-sm font-medium py-2"
                >
                  <span>{item.name}</span>
                </Link>
              )}
              
              {/* Desktop Dropdown */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50">
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <div key={index} className="relative">
                      {!dropdownItem.hasSubDropdown ? (
                        <Link
                          to={dropdownItem.path || '#'}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ) : (
                        <div
                          className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500 cursor-pointer"
                          onMouseEnter={() => handleSubMouseEnter(dropdownItem.name)}
                          onClick={() => handleSubDropdownToggle(dropdownItem.name)}
                        >
                          <span>{dropdownItem.name}</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}

                      {/* Desktop Sub-dropdown */}
                      {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.name && (
                        <div className="absolute top-0 left-full ml-1 w-56 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50">
                          {dropdownItem.subDropdownItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path || '#'}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 flex items-center space-x-1 text-sm">
            <User className="w-4 h-4" />
            <span>My Traze</span>
          </button>
          
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Live Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg mt-4 rounded-xl shadow-2xl border border-gray-700/50 p-6">
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <div key={item.name} className="space-y-2">
                {item.hasDropdown ? (
                  <button 
                    className="text-white hover:text-gray-300 text-left text-sm font-medium w-full py-2 flex items-center justify-between"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                ) : (
                  <Link 
                    to={item.path || '#'}
                    className="text-white hover:text-gray-300 text-left text-sm font-medium block py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="ml-4 space-y-1 border-l-2 border-purple-500/30 pl-4">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <div key={index}>
                        {!dropdownItem.hasSubDropdown ? (
                          <Link
                            to={dropdownItem.path || '#'}
                            className="block text-gray-400 hover:text-white text-sm py-2 transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ) : (
                          <div className="space-y-1">
                            <button
                              className="text-gray-400 hover:text-white text-sm w-full py-2 flex items-center justify-between transition-colors duration-200"
                              onClick={() => handleSubDropdownToggle(dropdownItem.name)}
                            >
                              <span>{dropdownItem.name}</span>
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  activeSubDropdown === dropdownItem.name ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            {activeSubDropdown === dropdownItem.name && (
                              <div className="ml-4 space-y-1 border-l-2 border-purple-500/30 pl-4">
                                {dropdownItem.subDropdownItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path || '#'}
                                    className="block text-gray-400 hover:text-white text-sm py-2 transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;