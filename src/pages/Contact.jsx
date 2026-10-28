import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';
import EnquiryForm from '../components/EnquiryForm';
import { siteConfig } from '../data/siteConfig';

const places = [
  ['Goa', 'By the beach'],
  ['Jim Corbett', 'Next to the forest'],
  ['Manali', 'In the mountains'],
  ['Bhimtal', 'Beside a quiet lake'],
  ['Dehradun', 'Easy to get to'],
  ['Jaipur', 'In the Pink City'],
  ['Rishikesh', 'On the Ganga'],
];

const nextSteps = [
  'Someone from our team reads your message.',
  'We call or message you back.',
  'We talk about dates, the place, and what you need.',
];

const Contact = () => (
  <div className="bg-[#FAF9F6] text-[#1C1C1C]">
    <section
      className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-20 text-center text-white md:h-[550px]"
      style={{ backgroundImage: "url('/images/Banner/Image.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <Reveal variant="arch" className="relative z-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight md:text-6xl">
            Write to Us, or Just Call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
            Planning a stay, a wedding, or a team trip? Tell us a little, and
            we&apos;ll take it from there.
          </p>
        </div>
      </Reveal>
    </section>

    <SectionDivider variant="arch" />
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-24">
      <Reveal variant="arch">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8941F]">
            Send us a note
          </p>
          <EnquiryForm />
        </div>
      </Reveal>

      <Reveal variant="arch">
        <aside className="space-y-8">
          <div className="border border-[#E5DCC3] bg-white p-7 md:p-9">
            <h2 className="font-serif text-2xl">Easier to talk?</h2>
            <p className="mt-3 text-sm leading-7 text-[#666]">
              Call us on{' '}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="font-medium text-[#1C1C1C] underline underline-offset-4"
              >
                {siteConfig.phone}
              </a>{' '}
              or send a WhatsApp to{' '}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1C1C1C] underline underline-offset-4"
              >
                {siteConfig.phone}
              </a>
              . Call or message us to check our current availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-[#1C1C1C] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#B8941F]"
              >
                <Phone size={15} />
                Call
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#1C1C1C] px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-[#B8941F] hover:text-[#B8941F]"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-[#E5DCC3] pt-7">
            <h2 className="font-serif text-2xl">What happens next</h2>
            <ol className="mt-5 space-y-5">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-6 text-[#666]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] text-xs font-semibold text-[#B8941F]">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </Reveal>
    </section>

    <SectionDivider variant="arch" />
    <Reveal as="section" variant="arch" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8941F]">
            Find your kind of place
          </p>
          <h2 className="font-serif text-3xl md:text-5xl">Our seven places</h2>
          <p className="mt-4 text-sm text-[#666]">
            Not sure where to go? Here&apos;s a quick idea of each.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {places.map(([place, description]) => (
            <li key={place} className="border-t border-[#E5DCC3] p-5">
              <h3 className="font-serif text-xl">{place}</h3>
              <p className="mt-2 text-sm text-[#666]">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </div>
);

export default Contact;
