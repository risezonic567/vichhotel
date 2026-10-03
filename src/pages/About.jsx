import React from 'react';
import AboutIntro from '../components/AboutIntro';
import Testimonials from '../components/home/Testimonials';
import FeaturedHotel from '../components/Featured';

import { ourHotelsData } from "../data/hospitalityData"

export default function About() {
  const featuredHotel = ourHotelsData.find(
    (hotel) => hotel.slug === "sparklyn-view-manali")
  return (
    <>
      <div className="bg-[#FAF9F6]">
        <section
          className="relative md:h-[550px] min-h-[65vh] md:mt-20 flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/Banner/Vicoh About Us banner.jpg.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative z-10 text-center text-white max-w-4xl px-6">
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
              Meetings & Events
            </p>

            <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
              Spaces Designed to Inspire
            </h1>

            <p className="text-white max-w-2xl mx-auto text-[20px] leading-7">
              Sophisticated venues, seamless service and thoughtfully designed spaces
              for conferences, meetings and memorable corporate gatherings.
            </p>
          </div>
        </section>

        <AboutIntro />

        <FeaturedHotel hotel={featuredHotel} />

        <Testimonials />


      </div>
    </>

  );
}
