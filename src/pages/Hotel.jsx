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

export default function Hotel() {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

      {/* ================= HERO ================= */}
      <section className="relative md:mt-20 min-h-[65vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
          alt="Vicoh Hotels"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">

          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
            Our Properties
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            A Collection of Exceptional Stays
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto leading-7 text-sm md:text-base">
            Discover distinctive Vicoh properties across India's most
            inspiring destinations, where refined hospitality meets
            unforgettable experiences.
          </p>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            The Vicoh Collection
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-7">
            Places to Stay. Experiences to Remember.
          </h2>

          <p className="text-black/60 leading-8">
            From vibrant city escapes and serene coastal retreats to
            majestic mountain destinations and heritage-inspired stays,
            every Vicoh property is thoughtfully designed around comfort,
            character and exceptional hospitality.
          </p>

        </div>
      </section>

      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Our Properties"
          title="Discover Our Hotels"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {ourHotelsData.map((hotel) => (

            <div
              key={hotel.id}
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="h-72 overflow-hidden relative">

                <img
                  src={hotel.heroImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4">

                  <span className="bg-white/95 px-3 py-2 text-[10px] uppercase tracking-widest text-[#1C1C1C]">
                    {hotel.category}
                  </span>

                </div>

              </div>


              {/* CONTENT */}
              <div className="p-6">

                {/* LOCATION */}
                <div className="flex items-center gap-1.5 mb-2">

                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />

                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {hotel.location}
                  </span>

                </div>


                {/* NAME */}
                <h3 className="text-2xl font-serif text-[#1C1C1C] mb-3">
                  {hotel.name}
                </h3>


                {/* DESCRIPTION */}
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">
                  {hotel.shortDescription}
                </p>


                {/* QUICK INFO */}
                <div className="grid grid-cols-2 gap-3 mb-6">

                  <div className="border border-[#E5DCC3] p-3">

                    <BedDouble className="w-4 h-4 text-[#D4AF37] mb-2" />

                    <p className="text-[9px] uppercase tracking-widest text-[#999]">
                      Accommodation
                    </p>

                    <p className="text-xs mt-1 text-[#333]">
                      {hotel.rooms}
                    </p>

                  </div>


                  <div className="border border-[#E5DCC3] p-3">

                    <UtensilsCrossed className="w-4 h-4 text-[#D4AF37] mb-2" />

                    <p className="text-[9px] uppercase tracking-widest text-[#999]">
                      Dining
                    </p>

                    <p className="text-xs mt-1 text-[#333]">
                      {hotel.dining?.length || 0} Experiences
                    </p>

                  </div>

                </div>


                {/* RATING + PRICE */}
                <div className="flex items-center justify-between mb-6">

                  {/* RATING */}
                  <div className="flex items-center gap-2">

                    <div className="flex items-center gap-1 bg-[#1C1C1C] text-white px-2.5 py-1.5">

                      <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />

                      <span className="text-xs font-semibold">
                        {hotel.rating}
                      </span>

                    </div>

                    <span className="text-xs text-[#777]">
                      {hotel.reviews} reviews
                    </span>

                  </div>


                  {/* PRICE */}
                  <div className="text-right">

                    <p className="text-[9px] uppercase tracking-widest text-[#999]">
                      Starting from
                    </p>

                    <p className="font-serif text-lg text-[#1C1C1C]">

                      {hotel.currency}
                      {hotel.price.toLocaleString("en-IN")}

                      <span className="text-xs font-sans text-[#777]">
                        {" "}
                        / night
                      </span>

                    </p>

                  </div>

                </div>


                {/* BUTTONS */}
                <div className="flex items-center justify-between">

                  <Link
                    to={`/our-hotels/${hotel.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                  >
                    Discover Hotel
                    <ArrowRight className="w-3 h-3" />
                  </Link>


                  <Link
                    to="/contact"
                    className="bg-[#1C1C1C] text-white px-5 py-3 text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
                  >
                    Enquire
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY VICOH ================= */}
      <section className="py-20 px-6 md:px-12 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="The Vicoh Difference"
            title="More Than a Stay"
          />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            {/* CARD 1 */}
            <div className="text-center border border-[#E5DCC3] p-8">

              <BedDouble className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />

              <h3 className="font-serif text-xl mb-3">
                Exceptional Stays
              </h3>

              <p className="text-sm text-black/60 leading-7">
                Thoughtfully designed rooms and suites created for
                comfort, privacy and effortless relaxation.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="text-center border border-[#E5DCC3] p-8">

              <UtensilsCrossed className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />

              <h3 className="font-serif text-xl mb-3">
                Curated Dining
              </h3>

              <p className="text-sm text-black/60 leading-7">
                Discover distinctive culinary experiences inspired
                by local flavours and global cuisine.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="text-center border border-[#E5DCC3] p-8">

              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />

              <h3 className="font-serif text-xl mb-3">
                Personalized Hospitality
              </h3>

              <p className="text-sm text-black/35 leading-7">
                Attentive service and thoughtful details designed
                around every guest and every occasion.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EVENTS CTA ================= */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] text-black">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-5">
            Weddings & Events
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Celebrate Something Extraordinary
          </h2>

          <p className="text-black/50 max-w-2xl mx-auto leading-7 mb-10">
            From destination weddings to sophisticated conferences
            and private celebrations, Vicoh creates spaces for
            moments that deserve to be remembered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/weddings"
              className="border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all"
            >
              Explore Weddings
            </Link>

            <Link
              to="/conferences"
              className="border border-black/40
               px-8 py-4 text-xs uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            >
              Explore Conferences
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 md:px-12 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Your Next Stay
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Find Your Vicoh
          </h2>

          <p className="text-black/60 leading-7 mb-8">
            Choose your destination and discover a stay designed
            around comfort, character and exceptional hospitality.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1C1C1C]/90 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all"
          >
            Plan Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </section>

    </div>
  );
}