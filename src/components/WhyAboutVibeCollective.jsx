import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { BedDouble, UtensilsCrossed, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';

const whyUsFeatures = [
  {
    icon: <BedDouble className="w-8 h-8 text-[#D4AF37]" />,
    title: "One Name, Seven Places",
    desc: "Mountains, lakes, forests, forts and beaches. Once you’ve stayed with us, you know what to expect in the next place too."
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-[#D4AF37]" />,
    title: "Your Own Space in Goa",
    desc: "Our Goa villas come with private pools and full kitchens. The Saligao villa sleeps up to 10, so a big family can stay under one roof."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    title: "Easy to Reach",
    desc: "Got a question before you book? Call or message us. We’ll help with dates and details. [Phone / WhatsApp]"
  }
];

const WhyAboutVibeCollective = () => {
  return (
    <Reveal as="section" variant="arch" className="py-20 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          dark
          subtitle="The Vicoh Experience"
          title="Why Choose VICOH Hotel & Resorts"
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

export default WhyAboutVibeCollective;
