import React from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const missionAndVision = [
  {
    label: 'Our Mission',
    title: 'Make every stay feel easy.',
    description:
      'We want travelling in India to feel easy. A trip should start with a clear booking and end with good memories, not stress. We hope that wherever you plan to go, a VICOH stay is there waiting for you. From the hills to the beaches, we want to be the name you trust when you book your next break.',
  },
  {
    label: 'Our Vision',
    title: 'A trusted stay, wherever you go.',
    description:
      ' Every guest should get a clean, comfortable room and honest answers before they book. We want our team to be friendly, quick to help, and easy to reach. When something goes wrong, we fix it instead of making excuses. If you leave our stay rested and happy, we’ve done our job.',
  },
];

export default function OurMissionAndVision() {
  return (
    <Reveal
      as="section"
      variant="arch"
      className="bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          subtitle="What Guides Us"
          title="Our Mission & Vision"
          paragraph="The promise behind every VICOH stay, and the future we are working towards."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {missionAndVision.map((item) => (
            <article
              key={item.label}
              className="border border-[#D4AF37]/30 bg-[#FAF9F6] p-8 md:p-10"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                {item.label}
              </span>
              <h3 className="mb-4 font-serif text-2xl text-[#1C1C1C] md:text-3xl">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[#555]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
