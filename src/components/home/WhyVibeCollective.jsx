import React from 'react';
import SectionTitle from '../SectionTitle';
import { BedDouble, UtensilsCrossed, Sparkles } from 'lucide-react';
import Reveal from '../Reveal';

const whyUsFeatures = [
  {
    icon: <BedDouble className="w-8 h-8 text-[#D4AF37]" />,
    title: "Comfortable Rooms",
    desc: "Clean, well-kept rooms and villas, so you can rest properly after a day out."
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-[#D4AF37]" />,
    title: "Food Your Way",
    desc: "At our Goa villas, a private chef and barbecue setup are available on request."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    title: "Easy Booking",
    desc: "Choose a destination, check your dates, and book on the website or call our team. [Phone / WhatsApp]"
  }
];

const WhyVibeCollective = () => {
  return (
    <Reveal as="section" variant="arch" className="py-20 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          dark
          subtitle="The Vicoh Experience"
          title="Why Stay With Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {whyUsFeatures.map((feat, index) => (
            <Reveal
              key={index}
              variant="arch"
              delay={index * 0.12}
            >
            <div className="text-center p-8 bg-[#FAF9F6] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300">
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
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default WhyVibeCollective;
