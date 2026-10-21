import React from 'react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function OurPromise() {
  return (
    <Reveal
      as="section"
      variant="arch"
      className="border-y border-[#D4AF37]/20 bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle subtitle="Our Promise" title="Our Promise" />
        <p className="text-center text-base leading-relaxed text-[#555] md:text-lg">
          Tell us what you need before you book, and we’ll answer honestly. If
          something goes wrong during your stay, tell us, and we’ll fix it.
        </p>
      </div>
    </Reveal>
  );
}
