import React from 'react';
import { Building2, TrendingUp, Headphones, BarChart3, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Regulated",
      subtitle: "Licensed by",
      description: "FSA"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Leverage",
      subtitle: "Leverage up to",
      description: "1:2000"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support",
      subtitle: "Uninterrupted Customer",
      description: "Support"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "120+",
      subtitle: "Trading",
      description: "Instruments"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High speed",
      subtitle: "Fast execution",
      description: "< 1ms"
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
                <div className="text-white mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{feature.subtitle}</p>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;