import React from 'react'
import SectionTitle from '../components/SectionTitle';
import Reveal from './Reveal';
import { themeFor } from '../config/sectionThemes';

export default function AboutIntro() {
  return (
     <>
     <Reveal variant={themeFor("Our Story")} as="div" className="bg-[#FAF9F6] pt-10 pb-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionTitle subtitle="Our Essence" title="A Simple Idea: Make Your Stay Easy" />
      <div className="mt-16 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">Our Story</span>
            <h3 className="text-2xl font-serif text-[#1C1C1C] mb-4">What VICOH Is About</h3>
            <p className="text-md text-[#555] leading-relaxed mb-4">
           Most trips go wrong in small ways. A room that isn’t as clean as the photos. A booking that takes five phone calls. Nobody to ask when you arrive late at night. We started VICOH to take worries like these off your list.<br/>
           Today you’ll find us in Jim Corbett, Manali, Goa, Jaipur, Rishikesh, Bhimtal and Dehradun. Some guests come for a safari near Jim Corbett National Park. Others want cool air in the mountains, a quiet lake, or a private pool in North Goa. Pick what suits your trip. We’ll handle the rest.
            </p>
          </div>
          <div className="h-96">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" alt="A tranquil hotel spa pool" className="w-full h-full object-cover shadow-lg" decoding="async" loading="lazy" width={1200} height={800} />
          </div>
        </div>
      </div>
    </div>
  </Reveal>
  </>
  )
}
