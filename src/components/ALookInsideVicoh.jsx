import React from 'react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const photos = [
  {
    src: 'https://res.cloudinary.com/vax63czu/image/upload/f_auto,q_auto/v1790580914/room6.jpg',
    alt: 'Guest room at Sparklyn View in Manali',
    caption: 'A room in Manali',
  },
  {
    src: 'https://res.cloudinary.com/vax63czu/image/upload/f_auto,q_auto/v1791546572/4.jpg',
    alt: 'Private pool at a Cielorra villa in Goa',
    caption: 'A Goa villa pool',
  },
  {
    src: 'https://res.cloudinary.com/vax63czu/image/upload/f_auto,q_auto/v1790580901/buildingview1.jpg',
    alt: 'Mountain view around Sparklyn View in Manali',
    caption: 'A view from Manali',
  },
];

export default function ALookInsideVicoh() {
  return (
    <Reveal
      as="section"
      variant="arch"
      className="bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle subtitle="Our Stays" title="A Look Inside VICOH" />

        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              variant="arch"
              delay={index * 0.1}
              className="group overflow-hidden border border-[#D4AF37]/30"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-80"
                decoding="async"
                loading="lazy"
                width={1200}
                height={800}
              />
              <p className="border-t border-[#D4AF37]/30 px-5 py-4 font-serif text-xl text-[#1C1C1C]">
                {photo.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
