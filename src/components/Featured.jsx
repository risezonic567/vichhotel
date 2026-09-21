import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  ArrowRight,
  Wifi,
  Utensils,
  Waves,
  BedDouble,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function FeaturedHotel({ hotel }) {
    
  if (!hotel) return null;

  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <SectionTitle
          subtitle="Featured Hotel"
          title="A Stay Designed to Be Remembered."
        />

        {/* Hotel Card */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 bg-white overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

          {/* Image */}
          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden group">

            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Featured Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-[#D4AF37] text-white px-5 py-2 text-[10px] uppercase tracking-[0.25em]">
                Featured Property
              </span>
            </div>

            {/* Image Content */}
            <div className="absolute bottom-8 left-7 md:left-9 text-white">

              <p className="text-[10px] uppercase tracking-[0.3em] mb-2">
                Vibe Collective Hospitality
              </p>

              <h3 className="text-3xl md:text-4xl font-serif">
                {hotel.name}
              </h3>

            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">

            {/* Location */}
            <div className="flex items-center gap-2 text-[#666] text-xs uppercase tracking-wider">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />

              <span>{hotel.location}</span>
            </div>

            {/* Hotel Name */}
            <h3 className="mt-5 text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-[1.1]">
              {hotel.name}
            </h3>

            {/* Category */}
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              {hotel.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6">

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    strokeWidth={1.5}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <span className="text-xs text-[#555]">
                {hotel.rating}
              </span>

              <span className="text-[#D5D5D5]">
                |
              </span>

              <span className="text-xs text-[#777]">
                {hotel.reviews}+ Reviews
              </span>

            </div>

            {/* Description */}
            <p className="mt-7 text-sm text-[#555] leading-7">
              {hotel.shortDescription}
            </p>

            {/* Hotel Details */}
            <div className="grid grid-cols-2 gap-y-5 mt-8 py-7 border-y border-[#E5E5E5]">

              <div className="flex items-center gap-3">
                <BedDouble
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-[#555]">
                  {hotel.rooms}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Wifi
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-[#555]">
                  Complimentary Wi-Fi
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Utensils
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-[#555]">
                  Fine Dining
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Waves
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-[#555]">
                  Swimming Pool
                </span>
              </div>

            </div>

            {/* Price + CTA */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#777]">
                  Starting From
                </p>

                <div className="mt-1">
                  <span className="text-3xl font-serif text-[#1C1C1C]">
                    {hotel.currency}
                    {hotel.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-xs text-[#777] ml-2">
                    / night
                  </span>
                </div>
              </div>

              <Link
                to={`/our-hotels/${hotel.slug}`}
                className="group inline-flex items-center justify-center gap-3 bg-[#1C1C1C] text-white px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37]"
              >
                Explore Hotel

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}