import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 't-1',
    quote: "Vibe Collective organized our wedding in Udaipur with absolute precision. Every guest felt treated like royalty.",
    author: "Lord & Lady Harrington",
    location: "London, UK"
  },
  {
    id: 't-2',
    quote: "Our annual leadership summit in Dubai was handled flawlessly. From private jets to venue setups, top tier work.",
    author: "Vikram Singhania",
    location: "CEO, Tech Horizon"
  },
  {
    id: 't-3',
    quote: "The Swiss chalet experience exceeded our expectations. The attention to detail and private chef services were unmatched.",
    author: "Sophia & Marc Laurent",
    location: "Geneva, Switzerland"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Adjusted to light={false} for the light background */}
        <SectionTitle subtitle="Client Voices" title="Words of Appreciation" light={false} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white border border-[#D4AF37]/20 flex flex-col justify-between text-left relative">
              <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />
              <p className="text-xs text-black/80 italic leading-relaxed mb-6">{t.quote}</p>
              <div>
                <div className="flex text-[#D4AF37] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="text-sm font-serif text-black font-semibold">{t.author}</h4>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;