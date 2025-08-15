import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Globe,
  User,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle,
  Smartphone,
  BarChart,
  Users,
  HelpCircle,
  BellRing,
  Briefcase,
  Handshake,
  Mail,
} from "lucide-react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Forex from "./components/Forex";
import IndexTrading from "./components/IndexTradingSection";
import CryptoTrading from "./components/CryptoTrading";
import Commodities from "./components/Commodities";
import ContractSpecifications from "./components/ContractSpecifications";
import LeveragePolicy from "./components/LeveragePolicy";
import STPTrading from "./components/STPTrading";
import ContactUsPage from "./components/ContactUsPage";
import HelpCenter from "./components/HelpCenter";
import Announcements from "./components/Announcements";
import CFDExpirationSection from "./components/CFDExpirationSection";
import CopyTradingPlatform from "./components/CopyTradeSection";
import StandardTradingAccount from "./components/StandardTradingAccount";
import ECNTradingAccount from "./components/ECNTradingAccount";
import MT4forWindows from "./components/MT4forWindows";
import MT4forMac from "./components/MT4forMac";
import MT4forMobile from "./components/MT4forMobile";
import EconomicCalendar from "./components/EconomicCalendar";
import TrazeMobileApp from "./components/TrazeMobileApp";
import MAMServicesSection from "./components/MAMServicesSection";
import Partnership from "./components/Partnership";
// import Partnership from "./components/Partnership";
// import MAMServicesSection from "./components/sign";
import Share from "./components/Share";
 

const App = () => {
  return (
    <Router basename="/traze-trade">
      <div className="bg-gray-950 text-white min-h-screen font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/markets/indices" element={<IndexTrading />} />
            <Route path="/markets/crypto" element={<CryptoTrading />} />
            <Route path="/markets/commodities" element={<Commodities />} />
            <Route path="/markets/contract-spec" element={<ContractSpecifications />} />
            <Route path="/markets/leverage-policy" element={<LeveragePolicy />} />
            <Route path="/markets/leverage-policy" element={<STPTrading />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/tools/cfd-expiration" element={<CFDExpirationSection />} />
            <Route path="/tools/signal-center" element={<CopyTradingPlatform />} />
            <Route path="/standard-trading-account" element={<StandardTradingAccount />} /> 
            <Route path="/tools/copy-trading" element={<CopyTradingPlatform />} />
            <Route path="/ecn-trading-account" element={<ECNTradingAccount />} />
            <Route path="/accounts/shares" element={<Share />} />
            <Route path="/platforms/mt4-windows" element={<MT4forWindows />} />
            <Route path="/platforms/mt4-mobile" element={<MT4forMobile />} />
            <Route path="/platforms/mt4-mac" element={<MT4forMac />} />
            <Route path="/tools/economic-calendar" element={<EconomicCalendar />} />
            <Route path="/platforms/mobile-app" element={<TrazeMobileApp />} />
            <Route path="/tools/mam-services" element={<MAMServicesSection />} />
            <Route path="/partnership" element={<Partnership />} />

           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
