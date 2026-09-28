import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';

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

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const Testimonials = () => {
  return (
    <section className="py-24 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-t border-[#D4AF37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <SectionTitle subtitle="Client Voices" title="Words of Appreciation" light={false} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 24px -10px rgba(212, 175, 55, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-white border border-[#D4AF37]/20 flex flex-col justify-between text-left relative transition-colors duration-300 hover:border-[#D4AF37]/50"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />
                <p className="text-xs text-black/80 italic leading-relaxed mb-6">{t.quote}</p>
              </div>

              <div>
                <div className="flex text-[#D4AF37] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="text-sm font-serif text-black font-semibold">{t.author}</h4>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{t.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;