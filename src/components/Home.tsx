import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import KeyHighlights from './KeyHighlights';
import AssetsSection from './AssetsSection';
import AccountsSection from './AccountsSection';
import TradingSection from './TradingSection';
import CopyTradeSection from './CopyTradeSection';
import AcademySection from './AcademySection';
import PartnershipsSection from './PartnershipsSection';
import GlobalPresence from './GlobalPresence';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
 
      <HeroSection />
      <FeaturesSection />
      <KeyHighlights />
      <AssetsSection />
      <AccountsSection />
      <TradingSection />
      <CopyTradeSection />
      <AcademySection />
      <PartnershipsSection />
      <GlobalPresence />
   
    </div>
  );
}

export default Home;