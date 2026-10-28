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
import FAQSection from "../components/FAQSection";
import { WeddingFaqData } from "../data/faqData";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import { siteConfig } from "../data/siteConfig";

const Weddings = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">
        <section
          className="relative md:h-[550px] min-h-[65vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/Banner/Vicoh Wedding banner.webp')",
          }}
        >

        {/* <img
          src="/images/Banner/Vicoh Wedding banner.webp"
          alt="Vicoh Hotels"
          className="absolute inset-0 w-full h-full object-cover" decoding="async" loading="lazy" width={1200} height={800} /> */}

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">

          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
            Weddings at VICOH
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
           Destination Weddings in Seven Amazing Locations
          </h1>

          <p className="text-white max-w-2xl mx-auto leading-7 text-[20px] md:text-base">
          Sub-line: Mountains, forest, lake, river, and beach. Find your location based on what is perfect for the two of you.
          </p>

        </div>
      </section>

      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="bloom" className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Destination Weddings
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
           Get Married Where It Feels Like a Holiday
          </h2>

          <p className="text-sm md:text-base text-[#666] leading-8">
        A wedding doesn't have to happen in a banquet hall in your own city. Some couples want mountain air, some want the sea, and some want a quiet green corner where family can slow down for a few days.
VICOH weddings take place across seven destinations in India. Each one has its own mood, so we start by listening to what you imagine and then suggest the place that fits your guest list, your season, and your style.

          </p>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="bloom" className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Wedding Destinations"
            title="Seven Places. Seven Different Moods."
          />

          <div className="mt-16 space-y-20">
            {weddingsData.map((wedding, index) => (
              <Reveal key={wedding.id} variant="arch" delay={index * 0.12}>
              <div
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" width={1200} height={800} />
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
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="bloom" className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="The VICOH Wedding Experience"
            title="The Little Things We Take Care Of"
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              {
                icon: Heart,
                title: "Planning, Start to Finish",
                text: "One team to talk to, from your first call to the last day. Tell us your ideas, and we'll help turn them into a plan.",
              },
              {
                icon: UtensilsCrossed,
                title: "Food Your Guests Will Remember",
                text: "Menus planned around your family's tastes, your guests' preferences, and the traditions you want to keep.",
              },
              {
                icon: Camera,
                title: "Settings Made for Photographs",
                text: "Mountains, forests, lakes, and beaches give you beautiful backdrops without you having to create them.",
              },
              {
                icon: Users,
                title: "Comfortable Guests",
                text: "A wedding is a happy occasion for everyone. We help with stays and small details so your guests feel looked after.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={index} variant="arch" delay={index * 0.12}>
                <div
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="bloom" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="How Planning a Wedding With Us Works" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              {
                title: "Tell us about your wedding",
                text: "Share your preferred dates, guest count, and the feel you want.",
              },
              {
                title: "We suggest a destination",
                text: "We'll tell you honestly which location suits your plans.",
              },
              {
                title: "Shape the details together",
                text: "Plan the food, stay, and small things that matter to you.",
              },
              {
                title: "Enjoy your celebration",
                text: "Our team looks after the arrangements so you can enjoy the day.",
              },
            ].map((step, index) => (
              <li key={step.title} className="border-t border-[#E5DCC3] pt-6">
                <span className="text-[#B8941F] text-xs uppercase tracking-[0.2em] font-semibold">
                  Step {index + 1}
                </span>
                <h3 className="font-serif text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-[#666] leading-7">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal as="section" variant="bloom" className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Start Your Party
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Let's Plan Your Wedding Together
          </h2>

          <p className="text-sm text-[#666] leading-7 mb-8">
            Give us some details about your wedding, and we will help you choose the best destination. Rather talk? Then call us on{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-[#1C1C1C] underline underline-offset-4 hover:text-[#B8941F]"
            >
              {siteConfig.phone}
            </a>
            {" "}or{" "}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-[#1C1C1C] underline underline-offset-4 hover:text-[#B8941F]"
            >
              WhatsApp us
            </a>
            .
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
          >
            Plan Your Wedding
            <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <FAQSection title="Wedding FAQs" data={WeddingFaqData} />
    </div>
  );
};

export default Weddings;
