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
import { getCloudinaryImageUrl } from "../utils/cloudinaryImage";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";

export default function Hotel() {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

      {/* ================= HERO ================= */}
     <section
          className="relative md:h-[550px] min-h-[65vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/Banner/Vicoh Our hotel banner.webp')",
          }}
        >
        {/* <img
          src="/images/Banner/Vicoh Our hotel banner.webp"
          alt="Vicoh Hotels"
          className="absolute inset-0 w-full h-full object-cover" decoding="async" loading="lazy" width={1200} height={800} /> */}

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs mb-4 font-semibold">
            Our Properties
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
           Hotels & Villas Across India
          </h1>

          <p className="text-white text-[20px] max-w-2xl mx-auto leading-relaxed  font-light">
           Seven destinations, from the Himalayan foothills to North Goa. Find the stay that fits your trip.
          </p>
        </div>
      </section>

      {/* ================= COLLECTION INTRO ================= */}
      <SectionDivider variant="doors" />
      <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Issue #3 Fixed: Sentence case / tracking fix */}
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            The Vicoh Collection
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-[#1C1C1C]">
           One Brand, Seven Very Different Trips
          </h2>

          <p className="text-[#1C1C1C]/70 leading-relaxed text-base sm:text-lg font-light">
           A weekend in Manali and a week in Goa don’t look anything alike, and our stays don’t either. Some are hotels with a view and a restaurant. Others are whole villas with a pool you won’t have to share.What stays the same is the basics. A clean room, honest details on this page, and a real person to call when you need a hand.
          </p>
        </div>
      </Reveal>

      {/* ================= HOTELS GRID ================= */}
      <SectionDivider variant="doors" />
      <Reveal as="section" variant="doors" className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Properties"
          title="Pick Your Destination"
        />

        {/* Issue #8 Fixed: Grid alignment fix on 2-column viewports */}
        <div id="properties" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-mt-24">
          {ourHotelsData.slice(1, 4).map((hotel, index) => (
            <Reveal key={hotel.id} variant="arch" delay={index * 0.12} className="sm:last:col-span-2 sm:last:max-w-md sm:last:mx-auto lg:last:col-span-1 lg:last:max-w-none">
            <div
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={getCloudinaryImageUrl(hotel.heroImage, 900)}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" decoding="async" width={1200} height={800} />

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
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ================= CHOOSE YOUR STAY ================= */}
      <SectionDivider variant="arch" />
      <Reveal
        as="section"
        variant="arch"
        className="bg-[#FAF9F6] px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            subtitle="Not Sure Where to Go?"
            title="Which Stay Suits Your Trip?"
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              Safari and wildlife:{' '}
              <Link
                to="/our-hotels#properties"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Jim Corbett
              </Link>
              .
            </li>
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              Cool air and mountains:{' '}
              <Link
                to="/our-hotels/sparklyn-view-manali"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Manali
              </Link>{' '}
              or{' '}
              <Link
                to="/our-hotels#properties"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Dehradun
              </Link>
              .
            </li>
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              A quiet lake:{' '}
              <Link
                to="/our-hotels#properties"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Bhimtal
              </Link>
              .
            </li>
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              Yoga and the river:{' '}
              <Link
                to="/our-hotels#properties"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Rishikesh
              </Link>
              .
            </li>
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              Forts, palaces and shopping:{' '}
              <Link
                to="/our-hotels#properties"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                Jaipur
              </Link>
              .
            </li>
            <li className="border border-[#E5DCC3] p-5 leading-relaxed text-[#1C1C1C]/80">
              Beaches and a big group:{' '}
              <Link
                to="/our-hotels/cielorra-villas-goa"
                className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
              >
                our private pool villas in North Goa
              </Link>
              .
            </li>
          </ul>
        </div>
      </Reveal>

      <SectionDivider variant="doors" />
      <Reveal as="section" variant="arch" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="The Vicoh Difference"
            title="More Than a Room"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Issue #9 Fixed: Added min-h-[3rem] for equal height heading alignment */}
            <Reveal variant="arch" delay={0}>
            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <BedDouble className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Stays That Match the Place
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                We don’t make every property look the same. A pool villa in
                Goa and a mountain stay in Manali are built for different
                trips, so we run them differently.
              </p>
            </div>
            </Reveal>

            <Reveal variant="arch" delay={0.12}>
            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <UtensilsCrossed className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Food Your Way
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                At our Goa villas, you can book a private chef and a barbecue
                evening. Other properties serve meals on site, and our team can
                help with local recommendations.
              </p>
            </div>
            </Reveal>

            <Reveal variant="arch" delay={0.24}>
            <div className="text-center border border-[#E5DCC3] p-8 flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
              <h3 className="font-serif text-xl mb-3 min-h-[3rem] flex items-center justify-center text-[#1C1C1C]">
                Someone Picks Up
              </h3>
              <p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                Got a question before you book, or a problem during your stay?{' '}
                <Link
                  to="/contact"
                  className="font-medium text-[#1C1C1C] underline decoration-[#D4AF37] decoration-2 underline-offset-4 hover:text-[#D4AF37]"
                >
                  Call or message us. [Phone / WhatsApp]
                </Link>
              </p>
            </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ================= WEDDINGS & EVENTS ================= */}
      <SectionDivider variant="arch" />
      <Reveal as="section" variant="bloom" className="py-24 px-6 md:px-12 bg-[#FAF9F6] text-[#1C1C1C]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            Weddings & Events
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Planning Something Big?
          </h2>

          <p className="text-[#1C1C1C]/70 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Weddings, team offsites, family functions. We host events at all
            seven destinations. Tell us your dates and guest count, and we’ll
            show you what works.
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
      </Reveal>

      {/* ================= FIND YOUR VICOH & FAQ ================= */}
      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Your Next Stay
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Find Your VICOH
          </h2>

          <p className="text-[#1C1C1C]/70 leading-relaxed mb-8 font-light">
            Tell us your dates, your group size, and what kind of trip you
            want. We’ll suggest the right place.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-all shadow-sm"
          >
            Plan Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SectionDivider variant="doors" />
        <FAQSection title="Hotel FAQs" data={HotelFaqData} />
      </Reveal>

    </div>
  );
}
