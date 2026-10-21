import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const destinations = [
  {
    name: 'Jim Corbett',
    description:
      'Safari mornings, birdsong and quiet evenings near Jim Corbett National Park. [Distance to park gate]',
    to: '/our-hotels',
  },
  {
    name: 'Manali',
    description:
      'Cool air, pine hills and snow on the peaks. Good for a long weekend or a proper break.',
    to: '/our-hotels/sparklyn-view-manali',
  },
  {
    name: 'Goa',
    description:
      'Private pool villas in Saligao, Assagao and Anjuna. Anjuna and Calangute beaches are close by.',
    to: '/our-hotels/cielorra-villas-goa',
  },
  {
    name: 'Jaipur',
    description:
      'Forts, palaces and bazaars full of colour. The Pink City keeps you busy.',
    to: '/our-hotels',
  },
  {
    name: 'Rishikesh',
    description:
      'Yoga by day, the Ganga in the evening. A slow, calm stay in the Himalayan foothills.',
    to: '/our-hotels',
  },
  {
    name: 'Bhimtal',
    description: 'A lake, green hills, and not much else to worry about.',
    to: '/our-hotels',
  },
  {
    name: 'Dehradun',
    description:
      'A handy stop at the foothills, with an easy road on to Mussoorie.',
    to: '/our-hotels',
  },
];

export default function WhereYouCanStayWithUs() {
  return (
    <Reveal
      as="section"
      variant="arch"
      className="bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          subtitle="Our Destinations"
          title="Where You Can Stay With Us"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal
              key={destination.name}
              variant="arch"
              delay={index * 0.06}
            >
              <Link
                to={destination.to}
                className="group flex h-full flex-col border border-[#D4AF37]/30 bg-[#FAF9F6] p-6 transition-colors hover:border-[#D4AF37] focus-visible:outline-[#D4AF37]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <MapPin
                    aria-hidden="true"
                    className="h-5 w-5 text-[#D4AF37]"
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-[#D4AF37] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-[#1C1C1C]">
                  {destination.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#555]">
                  {destination.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
