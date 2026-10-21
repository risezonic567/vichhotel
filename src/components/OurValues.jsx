import React from 'react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const values = [
  {
    name: 'Comfort',
    description: 'Sleep well. Everything else comes second.',
  },
  {
    name: 'Honesty',
    description: 'The photos and details on our site match what you’ll find.',
  },
  {
    name: 'Care',
    description: 'Guests get looked after the way we’d want to be.',
  },
  {
    name: 'Simplicity',
    description: 'Easy booking, no surprise extras.',
  },
];

export default function OurValues() {
  return (
    <Reveal
      as="section"
      variant="arch"
      className="border-y border-[#D4AF37]/20 bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle subtitle="Our Values" title="What We Care About" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal
              key={value.name}
              variant="arch"
              delay={index * 0.08}
              className="h-full"
            >
              <article className="h-full border border-[#D4AF37]/30 p-7">
                <h3 className="mb-3 font-serif text-2xl text-[#1C1C1C]">
                  {value.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#555]">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
