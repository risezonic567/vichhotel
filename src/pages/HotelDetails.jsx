import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Clock,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { ourHotelsData } from "../data/hospitalityData";

const HotelDetails = () => {
  const { slug } = useParams();

  const hotel = ourHotelsData.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">
            Hotel Not Found
          </h1>

          <Link
            to="/our-hotels"
            className="text-[#D4AF37]"
          >
            Back to Our Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C]">

      <section className="relative md:mt-20 h-[70vh] min-h-[550px]">
        <img
          src={hotel.heroImage}
          alt={hotel.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end pb-20">
          <div className="text-white max-w-3xl">

            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-5">
              {hotel.category}
            </p>

            <h1 className="font-serif text-5xl md:text-7xl font-light mb-5">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              {hotel.location}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <Link
            to="/our-hotels"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Hotels
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            <div className="lg:col-span-2">

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                The Vicoh Experience
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-7">
                A stay designed around comfort, elegance and discovery.
              </h2>

              <p className="text-black/65 leading-8">
                {hotel.description}
              </p>

            </div>

            <div className="border border-[#D4AF37]/30 p-8">

              <h3 className="font-serif text-2xl mb-7">
                Hotel Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                    Accommodation
                  </p>
                  <p className="text-sm">
                    {hotel.rooms}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                    Check In
                  </p>
                  <p className="text-sm">
                    {hotel.checkIn}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                    Check Out
                  </p>
                  <p className="text-sm">
                    {hotel.checkOut}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {hotel.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} ${index + 1}`}
                className="w-full h-[300px] object-cover"
              />
            ))}

          </div>

        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Facilities
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Amenities & Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

            {hotel.amenities.map((item, index) => (
              <div
                key={index}
                className="border border-[#D4AF37]/20 p-6"
              >
                <Check className="w-5 h-5 text-[#D4AF37] mb-4" />

                <p className="text-sm">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Culinary Experiences
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Dining at {hotel.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {hotel.dining.map((item, index) => (
              <div
                key={index}
                className="border border-[#D4AF37]/20 p-7"
              >
                <h3 className="font-serif text-xl mb-3">
                  {item}
                </h3>

                <p className="text-sm text-black/60 leading-relaxed">
                  Thoughtfully curated dining experiences
                  designed for memorable moments.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
                Location
              </p>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/70 text-sm">
                  {hotel.location}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
                Reservations
              </p>

              <div className="flex gap-3 mb-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/70 text-sm">
                  {hotel.phone}
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/70 text-sm">
                  {hotel.email}
                </span>
              </div>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-block border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all"
              >
                Enquire About Your Stay
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default HotelDetails;