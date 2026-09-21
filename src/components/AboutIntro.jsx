import React from 'react'
import SectionTitle from '../components/SectionTitle';
import WhyVibeCollective from '../components/home/WhyVibeCollective';

export default function AboutIntro() {
  return (
     <div className="bg-[#FAF9F6] pt-10 pb-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionTitle subtitle="Our Essence" title="Creating Journeys, Celebrations & Experiences Worth Remembering." />
      <div className="mt-16 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">Our Story</span>
            <h3 className="text-2xl font-serif text-[#1C1C1C] mb-4">Born Out of Passion for Artful Hospitality</h3>
            <p className="text-xs text-[#555] leading-relaxed mb-4">
              Vibe Collective Hospitality was founded on a singular vision: to dismantle generic travel templates and usher in bespoke, elevated hospitality experiences tailored to refined tastemakers.
            </p>
          </div>
          <div className="h-96">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" alt="Our Story" className="w-full h-full object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </div>
    <WhyVibeCollective/>
  </div>
  )
}
