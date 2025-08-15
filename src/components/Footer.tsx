import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "PRODUCTS",
      links: [
        "Forex",
        "Shares",
        "Commodities",
        "Cryptocurrency"
      ]
    },
    {
      title: "ACCOUNTS",
      links: [
        "Account Comparison",
        "STP Trading Account",
        "ECN Trading Account",
        "Advanced Spreads",
        "Contract Specifications"
      ]
    },
    {
      title: "PLATFORMS",
      links: [
        "MT4 for Windows",
        "MT4 for Mobile",
        "Traze Mobile App",
        "MAM Services"
      ]
    },
    {
      title: "TOOLS",
      links: [
        "Trading Calculator",
        "Copy-Trading Platform",
        "CFD Education Hub"
      ]
    },
    {
      title: "ABOUT US",
      links: [
        "About Traze",
        "Help Center",
        "Corporate News"
      ]
    },
    {
      title: "CONTACT US 24/5",
      links: [
        "support@traze.com"
      ]
    }
  ];

  const legalLinks = [
    "Risk Disclosure",
    "Cookie Policy",
    "Order Execution Policy",
    "Privacy Policy",
    "Website usage rules",
    "AML Policy",
    "Terms & Conditions",
    "PNA Manual",
    "CFD Policy",
    "Other Documents"
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Logo and Social */}
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-2xl">traze</div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 text-xs text-gray-400 leading-relaxed">
            <div>
              <p className="mb-4">
                Traze is a brand and trading name of <strong>Traze Capital Markets Limited</strong>, which is regulated as a Securities Dealer by 
                the Financial Services Authority (FSA) under license number SD026. Traze Capital Markets Limited is 
                incorporated in Seychelles with company registration number 8426970-1, having its registered office at 
                CT House, Office 9A, Providence, Mahe, Seychelles.
              </p>
              <p>
                Traze Capital Markets (Seychelles) Limited operates under the registered trading 
                name "Traze Capital" and "Traze", and is regulated by the Financial Services Authority (FSA) of Seychelles 
                under Securities Dealer License No. SD026, and its registered office is at CT House, Office 9A, Providence, 
                Mahe, Seychelles.
              </p>
            </div>
            <div>
              <p className="mb-4">
                CFD, Capital Spread Bet Limited is a company registered in England and Wales 
                (Company Registration No. 07207392) and is authorised and regulated by the Financial Conduct Authority 
                (FCA) under firm reference number 536976. Our registered office is at 32 Cornhill, London, EC3V 3SG, 
                United Kingdom.
              </p>
              <p>
                Risk Warning: Derivatives and leveraged products carry a high level of risk to your capital with the 
                possibility of losing more than your initial investment and may not be suitable for all investors. Any 
                opinions, news, research, analysis, prices, or other information contained on this website is provided as 
                general market commentary and does not constitute investment advice. We will not accept liability for any 
                loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly 
                from use of or reliance on such information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;