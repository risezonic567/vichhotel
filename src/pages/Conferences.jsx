import React from "react";
import { conferenceData } from "../data/hospitalityData";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import {
  Users,
  Maximize,
  Check,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";

export default function Conferences() {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

      <section className="relative md:mt-20 min-h-[65vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop"
          alt="Vicoh Conference Venues"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">

          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
            Meetings & Events
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            Spaces Designed to Inspire
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto leading-7">
            Sophisticated venues, seamless service and thoughtfully
            designed spaces for conferences, meetings and memorable
            corporate gatherings.
          </p>

        </div>
      </section>

      <section className="py-20 px-6 md:px-12">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Vicoh Business Events
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-7">
            Meetings Made Remarkable
          </h2>

          <p className="text-black/60 leading-8">
            From intimate executive meetings to large-scale conferences,
            Vicoh offers elegant venues equipped with modern facilities,
            flexible layouts and attentive hospitality.
          </p>

        </div>

      </section>

      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Our Venues"
          title="Find the Perfect Space"
        />

        <div className="space-y-12 mt-14">

          {conferenceData.map((venue, index) => (

            <div
              key={venue.id}
              className={`grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#E5DCC3] overflow-hidden ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >

              <div className="h-[350px] lg:h-[430px] overflow-hidden">

                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>


              <div className="p-8 md:p-12 flex flex-col justify-center">

                <div className="flex items-center gap-2 mb-4">

                  <MapPin className="w-4 h-4 text-[#D4AF37]" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    {venue.location}
                  </span>

                </div>

                <h3 className="font-serif text-3xl md:text-4xl mb-5">
                  {venue.name}
                </h3>

                <p className="text-md text-black/60 leading-7 mb-8">
                  {venue.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">

                  <div className="border border-[#E5DCC3] p-4">

                    <Users className="w-5 h-5 text-[#D4AF37] mb-3" />

                    <p className="text-[9px] uppercase tracking-widest text-[#999]">
                      Capacity
                    </p>

                    <p className="text-sm mt-1">
                      {venue.capacity}
                    </p>

                  </div>

                  <div className="border border-[#E5DCC3] p-4">

                    <Maximize className="w-5 h-5 text-[#D4AF37] mb-3" />

                    <p className="text-[9px] uppercase tracking-widest text-[#999]">
                      Venue Area
                    </p>

                    <p className="text-sm mt-1">
                      {venue.area}
                    </p>

                  </div>

                </div>

                {venue.seating && (
                  <div className="mb-8">

                    <p className="text-[10px] uppercase tracking-widest text-[#999] mb-3">
                      Seating Options
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {venue.seating.map((item, i) => (
                        <span
                          key={i}
                          className="border border-[#D4AF37]/30 px-3 py-2 text-xs"
                        >
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>
                )}

                <div>

                  <Link
                    to={`/conferences/${venue.slug}`}
                    className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-[#D4AF37] transition-all"
                  >
                    Explore Venue

                    <ArrowRight className="w-4 h-4" />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="py-20 px-6 md:px-12 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Business Facilities"
            title="Everything Your Event Needs"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {[
              "High-Speed Wi-Fi",
              "Modern AV Equipment",
              "Professional Event Support",
              "Flexible Seating",
              "Private Meeting Rooms",
              "Catering Services",
              "Business Centre",
              "Dedicated Concierge",
            ].map((facility, index) => (

              <div
                key={index}
                className="border border-[#E5DCC3] p-6"
              >

                <Check className="w-5 h-5 text-[#D4AF37] mb-4" />

                <p className="text-sm">
                  {facility}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="py-24 px-6 md:px-12">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-5">
            Every Occasion
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
            From Boardrooms to Grand Celebrations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            {[
              "Corporate Meetings",
              "Conferences",
              "Product Launches",
              "Executive Retreats",
            ].map((event, index) => (

              <div
                key={index}
                className="border border-[#E5DCC3] bg-white p-6"
              >

                <Building2 className="w-6 h-6 text-[#D4AF37] mx-auto mb-4" />

                <p className="font-serif text-lg">
                  {event}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="py-24 px-6 md:px-12 bg-white text-[#1C1C1C]">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-5">
            Plan Your Event
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Let's Create an Exceptional Event
          </h2>

          <p className="text-[#999] text-md leading-7 max-w-2xl mx-auto mb-10">
            Tell us about your event and our team will help you
            select the right venue, setup and services for your occasion.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all"
          >
            Enquire About Your Event
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </section>

    </div>
  );
}