import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ 
  subtitle = "NEED HELP?",
  title = "Frequently Asked Questions", 
  data = [],
  darkMode = false 
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!data || data.length === 0) return null;

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
      darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Subtitle & Title */}
        <div className="text-center mb-14">
          {subtitle && (
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3 block">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight font-medium">
            {title}
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/60 mx-auto mt-4" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {data.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-xl border transition-all duration-300 ${
                  darkMode 
                    ? isOpen 
                      ? 'bg-neutral-900/80 border-amber-500/40 shadow-lg shadow-amber-500/5' 
                      : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700' 
                    : isOpen 
                      ? 'bg-white border-amber-500/30 shadow-md shadow-amber-900/5' 
                      : 'bg-white/70 border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between  items-center p-5 sm:p-6 text-left focus:outline-none group"
                >
                  <span className={`text-base sm:text-lg font-serif transition-colors duration-200 ${
                    isOpen 
                      ? 'text-[#D4AF37] font-medium' 
                      : darkMode ? 'text-stone-200 group-hover:text-[#D4AF37]' : 'text-stone-800 group-hover:text-[#D4AF37] cursor-pointer'
                  }`}>
                    {faq.question}
                  </span>

                  <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                    isOpen 
                      ? 'bg-amber-500/10 text-amber-500 rotate-180' 
                      : darkMode ? 'bg-neutral-800 text-stone-400 group-hover:text-stone-200' : 'bg-stone-100 text-stone-500 group-hover:text-stone-800'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className={`p-5 sm:p-6 pt-0  text-sm sm:text-base leading-relaxed border-t font-light ${
                        darkMode 
                          ? 'border-neutral-800/60 text-stone-400' 
                          : 'border-stone-100 text-stone-600'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}