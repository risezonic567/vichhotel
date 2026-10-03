import React from "react";
import { ourHotelsData } from "../data/hospitalityData";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import {
  Star,
  MapPin,
  BedDouble,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import FAQSection from "../components/FAQSection";
import { HotelFaqData } from "../data/faqData";

export default function Hotel() {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

      {/* ================= HERO ================= */}
     <section
          className="relative md:h-[550px] min-h-[65vh] md:mt-20 flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/Banner/Vicoh Our hotel banner.jpg.jpeg')",
          }}
        >
        {/* <img
          src="/images/Banner/Vicoh Our hotel banner.jpg.jpeg"
          alt="Vicoh Hotels"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs mb-4 font-semibold">
            Our Properties
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            A Collection of Exceptional Stays
          </h1>

          <p className="text-white text-[20px] max-w-2xl mx-auto leading-relaxed  font-light">
            Discover distinctive Vicoh properties across India's most
            inspiring destinations, where refined hospitality meets
            unforgettable experiences.
          </p>
        </div>
      </section>

      {/* ================= COLLECTION INTRO ================= */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Issue #3 Fixed: Sentence case / tracking fix */}
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            The Vicoh Collection
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-[#1C1C1C]">
            Places to Stay. Experiences to Remember.
          </h2>

          <p className="text-[#1C1C1C]/70 leading-relaxed text-base sm:text-lg font-light">
            From vibrant city escapes and serene coastal retreats to
            majestic mountain destinations and heritage-inspired stays,
            every Vicoh property is thoughtfully designed around comfort,
            character and exceptional hospitality.
          </p>
        </div>
      </section>

      {/* ================= HOTELS GRID ================= */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Properties"
          title="Discover Our Hotels"
        />

        {/* Issue #8 Fixed: Grid alignment fix on 2-column viewports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ourHotelsData.slice(1, 4).map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:last:col-span-2 md:last:max-w-md md:last:mx-auto lg:last:col-span-1 lg:last:max-w-none"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={hotel.heroImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Issue #4 Fixed: Category label formatting */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-medium tracking-wide text-[#1C1C1C] shadow-sm">
                    {hotel.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Issue #5 Fixed: Text size standardized to text-xs */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {hotel.location}
                    </span>
                  </div>

                  {/* NAME */}
                  <h3 className="text-2xl font-serif text-[#1C1C1C] mb-3">
                    {hotel.name}
                  </h3>

                  <p className="text-sm text-[#1C1C1C]/70 leading-relaxed mb-6 line-clamp-2">
                    {hotel.shortDescription}
                  </p>

                  {/* ACCOMMODATION & DINING STATS */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="border border-[#E5DCC3] p-3">
                      <BedDouble className="w-4 h-4 text-[#D4AF37] mb-2" />
                      <p className="text-xs uppercase tracking-wider text-[#1C1C1C]/50">
                        Accommodation
                      </p>
                      <p className="text-sm font-medium mt-1 text-[#1C1C1C]">
                        {hotel.rooms}
                      </p>
                    </div>

                    <div className="border border-[#E5DCC3] p-3">
                      <UtensilsCrossed className="w-4 h-4 text-[#D4AF37] mb-2" />
                      <p className="text-xs uppercase tracking-wider text-[#1C1C1C]/50">
                        Dining
                      </p>
                      <p className="text-sm font-medium mt-1 text-[#1C1C1C]">
                        {hotel.dining?.length || 0} Experiences
                      </p>
                    </div>
                  </div>

                  {/* RATING + PRICE */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-[#1C1C1C] text-white px-2.5 py-1">
                        <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="text-xs font-semibold">
                          {hotel.rating}
                        </span>
                      </div>
                      <span className="text-xs text-[#1C1C1C]/60">
                        {hotel.reviews} reviews
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-[#1C1C1C]/50">
                        Starting from
                      </p>
                      <p className="font-serif text-lg text-[#1C1C1C] font-medium">
                        {hotel.currency}
                        {hotel.price.toLocaleString("en-IN")}
                        <span className="text-xs font-sans text-[#1C1C1C]/60 font-normal">
                          {" "}/ night
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Issue #12 Fixed: Primary action hierarchy updated for 'Discover Hotel' */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <Link
                    to={`/our-hotels/${hotel.slug}`}
                    className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-4 py-2.5 text-xs font-medium uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
                  >
                    Discover Hotel
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="border border-[#1C1C1C]/30 text-[#1C1C1C] px-4 py-2.5 text-xs font-medium uppercase tracking-wider hover:border-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition-colors"
                  >
                    Enquire
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
            subtitle="The Vicoh Difference"
            title="More Than a Stay"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Issue #9 Fixed: Added min-h-[3rem] for equal height heading alignment */}
            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <BedDouble className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Exceptional Stays
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                Thoughtfully designed rooms and suites created for
                comfort, privacy and effortless relaxation.
              </p>
            </div>

            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <UtensilsCrossed className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Curated Dining
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                Discover distinctive culinary experiences inspired
                by local flavours and global cuisine.
              </p>
            </div>

            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Personalized Hospitality
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                Attentive service and thoughtful details designed
                around every guest and every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WEDDINGS & EVENTS ================= */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] text-[#1C1C1C]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            Weddings & Events
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Celebrate Something Extraordinary
          </h2>

          <p className="text-[#1C1C1C]/70 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            From destination weddings to sophisticated conferences
            and private celebrations, Vicoh creates spaces for
            moments that deserve to be remembered.
          </p>

          {/* Issue #6 & #10 Fixed: Standardized button styles using original theme colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/weddings"
              className="bg-[#1C1C1C] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-all shadow-sm"
            >
              Explore Weddings
            </Link>

            <Link
              to="/conferences"
              className="bg-[#1C1C1C] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-all shadow-sm"
            >
              Explore Conferences
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FIND YOUR VICOH & FAQ ================= */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Your Next Stay
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Find Your Vicoh
          </h2>

          <p className="text-[#1C1C1C]/70 leading-relaxed mb-8 font-light">
            Choose your destination and discover a stay designed
            around comfort, character and exceptional hospitality.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-all shadow-sm"
          >
            Plan Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <FAQSection title="Hotel FAQs" data={HotelFaqData} />
      </section>

    </div>
  );
}