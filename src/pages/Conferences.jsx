import React from "react";
import { conferenceData } from "../data/hospitalityData";
import { ArrowRight, Check, MapPin, Maximize, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import { ConferencesFaqData } from "../data/faqData";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import SectionTitle from "../components/SectionTitle";

const destinations = [
  {
    title: "Conference Hall in Jim Corbett",
    description:
      "Looking for a quiet place to focus? Jim Corbett is surrounded by forest and has hardly any city noise. Teams often start the day with a meeting and finish with a safari at the national park, which makes a good reward for a long agenda.",
  },
  {
    title: "Corporate Offsite in Manali",
    description:
      "Manali’s cool air keeps people alert and relaxed at once. Good for leadership retreats, planning sessions, and sales meetings, with Solang Valley and the Beas River nearby for a break between sessions.",
  },
  {
    title: "Meeting Venue in Goa",
    description:
      "Not every Goa trip needs to be a party. For smaller groups, our private pool villas in Saligao, Assagao and Anjuna can work as a base for a team retreat. The Saligao villa sleeps up to 10, and a private chef and barbecue are available on request. Ask us what’s possible for work sessions.",
  },
  {
    title: "Corporate Events in Jaipur",
    description:
      "Jaipur is easy to reach from most Indian cities, and it’s full of things for an out-of-town team to see. Fit a client dinner, a conference day, and a heritage walk into one trip.",
  },
  {
    title: "Team Retreat in Rishikesh",
    description:
      "If your goal is wellness or team bonding, Rishikesh is hard to beat. Morning yoga, a rafting trip, an evening by the Ganga. Good for HR-led retreats, training programmes and small leadership groups.",
  },
  {
    title: "Offsite in Bhimtal",
    description:
      "Bhimtal is quiet, green and a little slow, which is exactly why it suits a planning offsite. A lake, wooded hills and few distractions.",
  },
  {
    title: "Conference Venue in Dehradun",
    description:
      "Dehradun has good road and air links, so it’s an easy pick for a group coming from different cities. Mussoorie and Rishikesh are nearby if you want to add a day out.",
  },
];

const facilities = [
  "Meeting space and seating: layouts to suit your group",
  "Projector, screen and sound: tell us your needs",
  "Wi-Fi: confirmed per property",
  "Meals and tea breaks: planned around your agenda",
  "Rooms for your guests: stay and meet at the same place",
  "Help on the ground: our team supports you before and during the event",
];

const eventTypes = [
  "Corporate meetings: board meetings, review sessions, client visits",
  "Conferences: annual meets, dealer meets, seminars",
  "Offsites and retreats: leadership planning, strategy days",
  "Team events: training workshops, incentive trips, celebrations",
  "Product launches: small launches and press interactions †",
];

const planningSteps = [
  {
    title: "Tell us the basics.",
    description: "Date, number of guests, city, and the kind of event.",
  },
  {
    title: "We suggest a venue.",
    description:
      "We’ll recommend the right destination and explain what’s possible.",
  },
  {
    title: "Confirm the details.",
    description: "Seating, food, rooms, and anything extra.",
  },
  {
    title: "Enjoy the event.",
    description:
      "Our team looks after the stay, so you can focus on the agenda.",
  },
];

const enquiryDetails = [
  "Your preferred dates (and any flexibility)",
  "Number of guests, and how many need rooms",
  "Type of event and how many hours or days",
  "Any equipment needs (projector, mic, stage)",
  "Food preferences and budget range",
];

function EnquireLink({ children = "Enquire About This Venue", className = "", ...props }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 bg-[#1C1C1C] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#D4AF37] ${className}`}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

export default function Conferences() {
  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">
      <section
        className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-fixed bg-cover bg-center md:h-[550px]"
        style={{
          backgroundImage: "url('/images/Banner/Vicoh Confrence banner.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Meetings & Events
          </p>
          <h1 className="mb-6 font-serif text-5xl font-light md:text-7xl">
            Conferences & Corporate Events Across India
          </h1>
          <p className="mx-auto max-w-2xl text-[20px] leading-7 text-white">
            Hold your next meeting, offsite, or team event in the hills, by the
            beach, or near the forest. Seven destinations, one team to talk to.
          </p>
        </div>
      </section>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            VICOH Business Events
          </p>
          <h2 className="mb-7 font-serif text-4xl font-light md:text-5xl">
            A Different Kind of Meeting Room
          </h2>
          <p className="leading-8 text-[#1C1C1C]/70">
            Some meetings work better when people are away from the office. A
            change of scene helps teams think clearly, and it makes the trip
            easier to remember afterwards.
          </p>
          <p className="mt-5 leading-8 text-[#1C1C1C]/70">
            VICOH hosts conferences, meetings and corporate events at all seven
            of our destinations. Every place is different, so every event is
            planned around the venue and your group. Tell us what you have in
            mind, and we’ll tell you honestly what works.
          </p>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-12"
      >
        <SectionTitle
          subtitle="Our Venues"
          title="Explore Our Conference Venues"
        />
        <div className="mt-14 space-y-12">
          {conferenceData.map((venue, index) => (
            <Reveal key={venue.id} variant="arch" delay={index * 0.12}>
              <article
                className={`grid grid-cols-1 overflow-hidden border border-[#E5DCC3] bg-white lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="h-[350px] overflow-hidden lg:h-[430px]">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    decoding="async"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {venue.location}
                    </span>
                  </div>
                  <h3 className="mb-5 font-serif text-3xl md:text-4xl">
                    {venue.name}
                  </h3>
                  <p className="mb-8 leading-7 text-[#1C1C1C]/70">
                    {venue.shortDescription}
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="border border-[#E5DCC3] p-4">
                      <Users className="mb-3 h-5 w-5 text-[#D4AF37]" />
                      <p className="text-[9px] uppercase tracking-widest text-[#999]">
                        Capacity
                      </p>
                      <p className="mt-1 text-sm">{venue.capacity}</p>
                    </div>
                    <div className="border border-[#E5DCC3] p-4">
                      <Maximize className="mb-3 h-5 w-5 text-[#D4AF37]" />
                      <p className="text-[9px] uppercase tracking-widest text-[#999]">
                        Venue Area
                      </p>
                      <p className="mt-1 text-sm">{venue.area}</p>
                    </div>
                  </div>
                  {venue.seating && (
                    <div className="mb-8">
                      <p className="mb-3 text-[10px] uppercase tracking-widest text-[#999]">
                        Seating Options
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {venue.seating.map((item) => (
                          <span
                            key={item}
                            className="border border-[#D4AF37]/30 px-3 py-2 text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/conferences/${venue.slug}`}
                    className="inline-flex items-center gap-3 self-start bg-[#1C1C1C] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#D4AF37]"
                  >
                    Explore Venue
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-12"
      >
        <SectionTitle
          subtitle="Our Destinations"
          title="Pick the Place That Suits Your Team"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {destinations.map((destination, index) => (
            <Reveal
              key={destination.title}
              variant="arch"
              delay={index * 0.07}
              className="h-full"
            >
              <article className="flex h-full flex-col border border-[#E5DCC3] bg-white p-7 md:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    className="h-4 w-4 text-[#D4AF37]"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {destination.title.split(" in ").pop()}
                  </span>
                </div>
                <h3 className="mb-4 font-serif text-2xl md:text-3xl">
                  {destination.title}
                </h3>
                <p className="mb-7 flex-1 leading-7 text-[#1C1C1C]/70">
                  {destination.description}
                </p>
                <EnquireLink
                  className="self-start"
                  aria-label={`Enquire about ${destination.title}`}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="bg-white px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Business Facilities"
            title="What Your Event May Need"
            paragraph="Every venue is different, so we confirm what’s available for your dates before you book. Here’s what most event organisers ask us about:"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <Reveal key={facility} variant="arch" delay={index * 0.07}>
                <li className="flex h-full gap-3 border border-[#E5DCC3] p-5">
                  <Check
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#D4AF37]"
                  />
                  <span className="text-sm leading-relaxed">{facility}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-center leading-relaxed text-[#1C1C1C]/70">
            Not sure what you need? That’s fine. Describe your event, and we’ll
            work it out together.
          </p>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Every Occasion"
            title="From Boardrooms to Team Celebrations"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event, index) => (
              <Reveal key={event} variant="arch" delay={index * 0.07}>
                <li className="flex h-full items-start gap-3 border border-[#E5DCC3] bg-white p-6">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                  />
                  <span className="leading-relaxed">{event}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="bg-white px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            subtitle="How It Works"
            title="Planning Your Event With Us"
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2">
            {planningSteps.map((step, index) => (
              <Reveal key={step.title} variant="arch" delay={index * 0.08}>
                <li className="flex h-full gap-5 border border-[#E5DCC3] p-6">
                  <span className="font-serif text-3xl text-[#D4AF37]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-serif text-xl">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1C1C1C]/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            subtitle="Before You Call"
            title="Help Us Help You"
            paragraph="To give you a clear answer on the first call, have these ready:"
          />
          <ul className="mx-auto max-w-3xl space-y-4">
            {enquiryDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                />
                <span className="leading-relaxed text-[#1C1C1C]/80">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <SectionDivider variant="bloom" />
      <Reveal
        as="section"
        variant="bloom"
        className="bg-white px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Plan Your Event
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light md:text-5xl">
            Let’s Plan Your Event Together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl leading-7 text-[#1C1C1C]/70">
            Tell us about your event, and our team will help you choose the
            right venue and setup. Prefer to talk? Call us directly. [Phone /
            WhatsApp]
          </p>
          <EnquireLink>Enquire About Your Event</EnquireLink>
        </div>
      </Reveal>

      <FAQSection title="Conference FAQs" data={ConferencesFaqData} />
    </div>
  );
}
