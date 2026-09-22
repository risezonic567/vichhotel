import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  UtensilsCrossed,
  BedDouble,
  ArrowRight,
  CalendarDays,
  Gift,
} from "lucide-react";

const offersData = [
  {
    id: 1,
    title: "Stay Longer, Experience More",
    category: "Extended Stay",
    description:
      "Turn a short escape into an unforgettable retreat with exclusive benefits when you stay longer.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Daily breakfast",
      "Complimentary room upgrade",
      "Late check-out",
    ],
  },
  {
    id: 2,
    title: "A Weekend Worth Remembering",
    category: "Weekend Escape",
    description:
      "Escape the ordinary with an elegant weekend stay complemented by thoughtful experiences.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Luxury accommodation",
      "Breakfast for two",
      "Welcome amenity",
    ],
  },
  {
    id: 3,
    title: "Dine, Stay & Indulge",
    category: "Dining Escape",
    description:
      "Discover the perfect combination of refined accommodation and memorable dining.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Breakfast included",
      "Dining credit",
      "Premium room benefits",
    ],
  },
];

const Offers = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">

     
      {/* <section className="relative h-[65vh] min-h-[500px] md:mt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury hotel room"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end pb-20">
          <div className="max-w-2xl text-white">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
              Exclusive Offers
            </span>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight mt-4">
              More Reasons
              <br />
              to Stay With Us.
            </h1>

            <p className="mt-6 text-sm md:text-base text-white/80 leading-7 max-w-xl">
              Discover thoughtfully curated stays, seasonal experiences and
              exclusive benefits created to make every Vicoh stay more special.
            </p>
          </div>
        </div>
      </section> */}

       <section className="relative md:mt-20 min-h-[65vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2000&auto=format&fit=crop"
          alt="Vicoh Hotels"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">

          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
            Exclusive Offers
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            More Reasons
       
              to Stay With Us.
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto leading-7 text-sm md:text-base">
           Discover thoughtfully curated stays, seasonal experiences and
              exclusive benefits created to make every Vicoh stay more special.
          </p>

        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Curated For You
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-5">
            Exclusive Experiences, Thoughtfully Designed
          </h2>

          <p className="text-sm text-[#666] leading-7">
            Whether you're planning a relaxing weekend, an extended escape or
            a memorable dining experience, explore our collection of offers
            designed around the way you love to travel.
          </p>
        </div>
      </section>

      {/* Featured Offer */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#1C1C1C] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="h-[380px] lg:h-[520px]">
              <img
                src={offersData[0].image}
                alt={offersData[0].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-14 flex flex-col justify-center">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
                Featured Offer
              </span>

              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-5">
                {offersData[0].title}
              </h2>

              <p className="text-sm text-white/65 leading-7 mb-8">
                {offersData[0].description}
              </p>

              <div className="space-y-4 mb-10">
                {offersData[0].benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Sparkles size={15} className="text-[#D4AF37]" />
                    {benefit}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 self-start border border-[#D4AF37] text-[#D4AF37] px-7 py-3 text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                Enquire Now
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
              Explore Our Offers
            </span>

            <h2 className="text-3xl md:text-5xl font-serif mt-4">
              Something Special Awaits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offersData.slice(1).map((offer) => (
              <article
                key={offer.id}
                className="bg-white border border-[#E5DCC3] overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-7">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-semibold">
                    {offer.category}
                  </span>

                  <h3 className="font-serif text-2xl mt-3 mb-4">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-[#666] leading-6 mb-6">
                    {offer.description}
                  </p>

                  <div className="space-y-3 mb-7">
                    {offer.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-xs text-[#555]"
                      >
                        <Sparkles
                          size={13}
                          className="text-[#D4AF37]"
                        />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                  >
                    Enquire Now
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#E5DCC3]/30 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
              With Every Stay
            </span>

            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              The Vicoh Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-8 bg-white">
              <BedDouble
                size={28}
                strokeWidth={1.3}
                className="mx-auto text-[#D4AF37] mb-5"
              />

              <h3 className="font-serif text-xl mb-3">
                Beautiful Stays
              </h3>

              <p className="text-xs text-[#666] leading-6">
                Thoughtfully designed spaces created for comfort and relaxation.
              </p>
            </div>

            <div className="text-center p-8 bg-white">
              <UtensilsCrossed
                size={28}
                strokeWidth={1.3}
                className="mx-auto text-[#D4AF37] mb-5"
              />

              <h3 className="font-serif text-xl mb-3">
                Exceptional Dining
              </h3>

              <p className="text-xs text-[#666] leading-6">
                Discover refined flavours and memorable dining experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-white">
              <Gift
                size={28}
                strokeWidth={1.3}
                className="mx-auto text-[#D4AF37] mb-5"
              />

              <h3 className="font-serif text-xl mb-3">
                Exclusive Benefits
              </h3>

              <p className="text-xs text-[#666] leading-6">
                Enjoy thoughtful extras and privileges designed around your stay.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">

          <CalendarDays
            size={28}
            strokeWidth={1.2}
            className="mx-auto text-[#D4AF37] mb-5"
          />

          <h2 className="text-3xl md:text-5xl font-serif">
            Your Next Escape Starts Here
          </h2>

          <p className="text-sm text-[#666] leading-7 mt-5 mb-8">
            Explore our hotels, discover your perfect stay and experience
            the distinctive hospitality of Vicoh.
          </p>

          <Link
            to="/our-hotels"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
          >
            Explore Our Hotels
            <ArrowRight size={14} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Offers;