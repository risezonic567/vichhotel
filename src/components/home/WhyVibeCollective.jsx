import React from 'react';
import SectionTitle from '../SectionTitle';
import { BedDouble, UtensilsCrossed, Sparkles } from 'lucide-react';

const whyUsFeatures = [
  {
    icon: <BedDouble className="w-8 h-8 text-[#D4AF37]" />,
    title: "Elegant Accommodations",
    desc: "Thoughtfully designed rooms and suites offering refined comfort, timeless elegance, and a relaxing stay."
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-[#D4AF37]" />,
    title: "Exceptional Dining",
    desc: "Savour exquisite cuisine, carefully curated menus, and memorable dining experiences in an elegant setting."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    title: "Personalized Hospitality",
    desc: "Attentive service and thoughtful details designed to make every stay seamless, comfortable, and unforgettable."
  }
];

const WhyVibeCollective = () => {
  return (
    <section className="py-20 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          dark
          subtitle="The Vicoh Experience"
          title="Why Choose Vicoh Hotel"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {whyUsFeatures.map((feat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-[#FAF9F6] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {feat.icon}
              </div>

              <h3 className="text-xl font-serif text-black mb-4">
                {feat.title}
              </h3>

              <p className="text-sm text-black/70 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVibeCollective;