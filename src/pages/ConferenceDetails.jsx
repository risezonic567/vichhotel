import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Users,
  Maximize,
  MapPin,
} from "lucide-react";

import { conferenceData } from "../data/hospitalityData";

const ConferenceDetails = () => {
  const { slug } = useParams();

  const conference = conferenceData.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!conference) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">

          <h1 className="font-serif text-4xl mb-4">
            Conference Venue Not Found
          </h1>

          <Link
            to="/conferences"
            className="text-[#D4AF37]"
          >
            Back to Conferences
          </Link>

        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C]">

      {/* HERO */}
      <section className="relative h-[65vh] min-h-[520px]">

        <img
          src={conference.image}
          alt={conference.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end pb-20">

          <div className="text-white max-w-3xl">

            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-5">
              Conferences & Events
            </p>

            <h1 className="font-serif text-5xl md:text-7xl font-light mb-5">
              {conference.name}
            </h1>

            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              {conference.location}
            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <Link
            to="/conferences"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Conferences
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            <div className="lg:col-span-2">

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                The Venue
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-7">
                A sophisticated setting for meaningful gatherings.
              </h2>

              <p className="text-black/65 leading-8">
                {conference.description}
              </p>

            </div>

            {/* QUICK INFO */}
            <div className="border border-[#D4AF37]/30 p-8">

              <h3 className="font-serif text-2xl mb-7">
                Venue Details
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <Users className="w-5 h-5 text-[#D4AF37]" />

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">
                      Capacity
                    </p>

                    <p className="text-sm">
                      {conference.capacity}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Maximize className="w-5 h-5 text-[#D4AF37]" />

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">
                      Venue Area
                    </p>

                    <p className="text-sm">
                      {conference.area}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SEATING */}
      <section className="py-20 px-6 md:px-12 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Flexible Arrangements
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Seating Capacities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {conference.seating.map((item, index) => (
              <div
                key={index}
                className="border border-[#D4AF37]/20 p-6"
              >
                <Users className="w-5 h-5 text-[#D4AF37] mb-5" />

                <p className="text-sm">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FACILITIES */}
      <section className="py-20 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Event Facilities
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Everything You Need
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

            {conference.facilities.map((item, index) => (
              <div
                key={index}
                className="border border-[#D4AF37]/20 p-6"
              >

                <Check className="w-5 h-5 text-[#D4AF37] mb-4" />

                <p className="text-sm">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SUITABLE FOR */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1C1C] text-white">

        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Ideal For
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Events & Occasions
          </h2>

          <div className="flex flex-wrap gap-4">

            {conference.suitableFor.map((item, index) => (
              <span
                key={index}
                className="border border-[#D4AF37]/40 px-5 py-3 text-sm text-white/80"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 text-center">

        <div className="max-w-3xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Plan Your Event
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Let's Create Your Next Gathering
          </h2>

          <p className="text-black/60 leading-7 mb-8">
            Speak with our events team to discuss your requirements,
            preferred setup, and personalised arrangements.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-[#1C1C1C] text-white px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all"
          >
            Enquire About This Venue
          </Link>

        </div>

      </section>

    </main>
  );
};

export default ConferenceDetails;