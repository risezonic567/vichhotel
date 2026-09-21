import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  MapPin,
  Users,
  UtensilsCrossed,
  Camera,
  ArrowRight,
} from "lucide-react";
import { weddingsData } from "../data/hospitalityData";
import SectionTitle from "../components/SectionTitle";

const Weddings = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

      <section className="relative  min-h-[65vh] md:mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury destination wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end pb-20">
          <div className="max-w-3xl text-white">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
              Destination Weddings
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mt-4">
              Celebrate Your Story
              <br />
              Somewhere Extraordinary.
            </h1>

            <p className="mt-6 max-w-xl text-sm md:text-base text-white/85 leading-relaxed">
              From intimate celebrations to grand destination weddings,
              Vicoh Hotel creates unforgettable moments surrounded by
              exceptional hospitality and beautiful settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Your Day, Your Way
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Weddings Made Remarkable
          </h2>

          <p className="text-sm md:text-base text-[#666] leading-8">
            Every wedding deserves a setting as special as the story behind
            it. At Vicoh Hotel, our dedicated team brings together elegant
            venues, exceptional dining, thoughtful details and personalized
            service to create celebrations that feel uniquely yours.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Wedding Destinations"
            title="Where Beautiful Beginnings Take Place"
          />

          <div className="mt-16 space-y-20">
            {weddingsData.map((wedding, index) => (
              <div
                key={wedding.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
          
                <div
                  className={`relative overflow-hidden group ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="h-[420px] md:h-[500px]">
                    <img
                      src={wedding.heroImage}
                      alt={wedding.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 bg-white px-5 py-4">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <MapPin size={14} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold">
                        Destination
                      </span>
                    </div>

                    <p className="font-serif text-lg mt-1">
                      {wedding.location || "India"}
                    </p>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">
                    Wedding Experience
                  </span>

                  <h3 className="text-3xl md:text-4xl font-serif mt-3 mb-5">
                    {wedding.title}
                  </h3>

                  <p className="text-sm text-[#666] leading-7 mb-8">
                    {wedding.shortDesc}
                  </p>

                  <div className="grid grid-cols-2 gap-5 mb-8">
                    <div className="border-t border-[#E5DCC3] pt-4">
                      <Heart
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#D4AF37] mb-3"
                      />
                      <h4 className="text-sm font-semibold">
                        Bespoke Celebrations
                      </h4>
                      <p className="text-xs text-[#777] mt-1">
                        Designed around your story
                      </p>
                    </div>

                    <div className="border-t border-[#E5DCC3] pt-4">
                      <Sparkles
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#D4AF37] mb-3"
                      />
                      <h4 className="text-sm font-semibold">
                        Luxury Hospitality
                      </h4>
                      <p className="text-xs text-[#777] mt-1">
                        Thoughtful service throughout
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/weddings/${wedding.slug}`}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold border-b border-[#1C1C1C] pb-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                  >
                    Explore Wedding
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="The Vicoh Wedding Experience"
            title="Every Detail, Thoughtfully Considered"
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              {
                icon: Heart,
                title: "Wedding Planning",
                text: "Personalized planning and coordination from the first conversation to the final celebration.",
              },
              {
                icon: UtensilsCrossed,
                title: "Curated Dining",
                text: "Thoughtfully crafted menus and memorable dining experiences for your guests.",
              },
              {
                icon: Camera,
                title: "Beautiful Moments",
                text: "Elegant spaces and stunning surroundings designed for unforgettable memories.",
              },
              {
                icon: Users,
                title: "Guest Experience",
                text: "Comfortable stays and attentive hospitality for you and your loved ones.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-white/10 p-7 hover:border-[#D4AF37]/60 transition-colors"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.3}
                    className="text-[#D4AF37] mb-6"
                  />

                  <h3 className="font-serif text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-6">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Begin Your Celebration
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Let’s Create Something Beautiful Together
          </h2>

          <p className="text-sm text-[#666] leading-7 mb-8">
            Tell us about your celebration and our wedding specialists
            will help you create an experience tailored to your vision.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
          >
            Plan Your Wedding
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Weddings;