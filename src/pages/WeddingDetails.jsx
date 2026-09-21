import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Check,
  Hotel,
  BedDouble,
  Palette,
  Utensils,
  Car,
  ConciergeBell,
} from "lucide-react";
import { weddingsData } from "../data/hospitalityData";

const WeddingDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const w =
    weddingsData.find((wed) => wed.slug === slug) || weddingsData[0];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  const detailItems = [
    {
      label: "Venue",
      value: w.details?.venue,
      icon: Hotel,
    },
    {
      label: "Accommodation",
      value: w.details?.accommodation,
      icon: BedDouble,
    },
    {
      label: "Decor & Styling",
      value: w.details?.decor,
      icon: Palette,
    },
    {
      label: "Catering",
      value: w.details?.catering,
      icon: Utensils,
    },
    {
      label: "Transfers",
      value: w.details?.transfers,
      icon: Car,
    },
    {
      label: "Hospitality",
      value: w.details?.hospitality,
      icon: ConciergeBell,
    },
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C] pt-20">
      <section className="relative h-[65vh] md:min-h-[600px] overflow-hidden">
        <img
          src={w.heroImage}
          alt={w.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-14">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] mb-5">
              <MapPin size={15} />
              {w.destination}
            </div>

            <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              {w.title}
            </h1>

            {w.shortDesc && (
              <p className="max-w-2xl mt-5 text-sm md:text-base text-white/85 leading-relaxed">
                {w.shortDesc}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
            The Experience
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
            A Celebration Designed Around You
          </h2>

          <div className="w-16 h-px bg-[#D4AF37] mx-auto my-8" />

          <p className="text-[#555] text-sm md:text-base leading-8">
            {w.overview}
          </p>
        </div>
      </section>

      {w.features?.length > 0 && (
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
                Signature Moments
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-serif">
                What Makes It Special
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {w.features.map((feature, index) => (
                <div
                  key={index}
                  className="group border border-[#E5DCC3] p-8 md:p-10 text-center hover:bg-[#FAF9F6] transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#D4AF37] flex items-center justify-center">
                    <Check
                      size={18}
                      className="text-[#B8941F]"
                    />
                  </div>

                  <h3 className="font-serif text-xl mb-3">
                    {feature}
                  </h3>

                  <p className="text-sm text-[#777] leading-7">
                    Thoughtfully curated details that transform your
                    celebration into an unforgettable experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {w.details && (
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
                  Curated For You
                </span>

                <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
                  Every Detail,
                  <br />
                  Beautifully Planned
                </h2>

                <div className="w-16 h-px bg-[#D4AF37] my-8" />

                <p className="text-[#666] text-sm md:text-base leading-8 max-w-lg">
                  From the venue and accommodation to culinary experiences
                  and guest transfers, every element is carefully selected
                  to create a seamless luxury wedding experience.
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-8 px-8 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
                >
                  Start Planning
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#E5DCC3]">
                {detailItems.map((item, index) => {
                  const Icon = item.icon;

                  if (!item.value) return null;

                  return (
                    <div
                      key={index}
                      className="p-7 md:p-8 border-r border-b border-[#E5DCC3] bg-white"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#B8941F] mb-5"
                      />

                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#999] mb-2">
                        {item.label}
                      </p>

                      <p className="font-serif text-lg leading-7">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={w.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
            Your Celebration Awaits
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
            Let's Create Your
            <br />
            Perfect Wedding
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/80 leading-7 max-w-xl mx-auto">
            Tell us your vision, guest list and preferred dates. Our
            wedding specialists will curate an unforgettable celebration
            around you.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-9 px-9 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default WeddingDetails;