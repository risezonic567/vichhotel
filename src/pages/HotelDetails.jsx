// import React, { useEffect, useState } from "react";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Link, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   Check,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react"

// import { ourHotelsData } from "../data/hospitalityData";
// import { getCloudinaryImageUrl } from "../utils/cloudinaryImage";
// import Reveal from "../components/Reveal";
// import SectionDivider from "../components/SectionDivider";


// const HotelDetails = () => {
//   const { slug } = useParams();

//   const [showAllGallery, setShowAllGallery] = useState(false)
//   const INITIAL_IMAGE_COUNT = 6

//   const hotel = ourHotelsData.find(
//     (item) => item.slug === slug
//   );

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "instant",
//     });
//   }, [slug]);

//   if (!hotel) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
//         <div className="text-center">
//           <h1 className="font-serif text-4xl mb-4">
//             Hotel Not Found
//           </h1>

//           <Link
//             to="/our-hotels"
//             className="text-[#D4AF37]"
//           >
//             Back to Our Hotels
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-[#FAF9F6] text-[#1C1C1C]">

//       <section className="relative h-[70vh] min-h-[550px]">
//         <img
//           src={getCloudinaryImageUrl(hotel.heroImage, 2000)}
//           alt={hotel.name}
//           className="absolute inset-0 w-full h-full object-cover"
//           fetchPriority="high" decoding="async" width={2000} height={1200} />

//         <div className="absolute inset-0 bg-black/45" />

//         <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end pb-20">
//           <div className="text-white max-w-3xl">

//             <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-5">
//               {hotel.category}
//             </p>

//             <h1 className="font-serif text-5xl md:text-7xl font-light mb-5">
//               {hotel.name}
//             </h1>

//             <div className="flex items-center gap-2 text-white/80">
//               <MapPin className="w-4 h-4 text-[#D4AF37]" />
//               {hotel.location}
//             </div>
//           </div>
//         </div>
//       </section>

//       <SectionDivider variant="doors" />
//       <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">

//           <Link
//             to="/our-hotels"
//             className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-12"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Our Hotels
//           </Link>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

//             <div className="lg:col-span-2">

//               <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
//                 The Vicoh Experience
//               </p>

//               <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-7">
//                 A stay designed around comfort, elegance and discovery.
//               </h2>

//               <p className="text-black/65 leading-8">
//                 {hotel.description}
//               </p>

//             </div>

//             <div className="border border-[#D4AF37]/30 p-8">

//               <h3 className="font-serif text-2xl mb-7">
//                 Hotel Information
//               </h3>

//               <div className="space-y-6">

//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
//                     Accommodation
//                   </p>
//                   <p className="text-sm">
//                     {hotel.rooms}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
//                     Check In
//                   </p>
//                   <p className="text-sm">
//                     {hotel.checkIn}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
//                     Check Out
//                   </p>
//                   <p className="text-sm">
//                     {hotel.checkOut}
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </Reveal>

//       {/* <section className="px-6 md:px-12 pb-20">
//         <div className="max-w-7xl mx-auto">

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//             {hotel.gallery.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${hotel.name} ${index + 1}`}
//                 className="w-full h-[300px] object-cover" decoding="async" loading="lazy" width={1200} height={800} />
//             ))}

//           </div>

//         </div>
//       </section> */}

//       <SectionDivider variant="doors" />
//       <Reveal as="section" variant="arch" className="px-6 md:px-12 pb-20">
//         <div className="max-w-7xl mx-auto">

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {(showAllGallery
//               ? hotel.gallery
//               : hotel.gallery.slice(0, INITIAL_IMAGE_COUNT)
//             ).map((image, index) => (
//               // <img
//               //   key={index}
//               //   src={image}
//               //   alt={`${hotel.name} ${index + 1}`}
//               //   className="w-full h-[300px] object-cover"
//               // decoding="async" loading="lazy" width={1200} height={800} />

//                 <Reveal key={index} variant="arch" delay={index * 0.12}>
//                 <LazyLoadImage
//                 src={getCloudinaryImageUrl(image, 900)}
//                 alt={`${hotel.name} ${index + 1}`}
//                 effect="blue"
//                 className="w-full h-[300px]  object-cover"
//                 loading="lazy"
//                 decoding="async"
               
//                 />
//                 </Reveal>

//             ))}
//           </div>

//           {hotel.gallery.length > INITIAL_IMAGE_COUNT && (
//             <div className="text-center mt-8">
//               <button
//                 onClick={() => setShowAllGallery((prev) => !prev)}
//                 className="inline-block border border-[#D4AF37] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all cursor-pointer"
//               >
//                 {showAllGallery ? "Show Less" : `View All Photos (${hotel.gallery.length})`}
//               </button>
//             </div>
//           )}

//         </div>
//       </Reveal>

//       <SectionDivider variant="arch" />
//       <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">

//           <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
//             Facilities
//           </p>

//           <h2 className="font-serif text-4xl mb-10">
//             Amenities & Services
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

//             {hotel.amenities.map((item, index) => (
//               <Reveal key={index} variant="arch" delay={index * 0.12}>
//               <div
//                 className="border border-[#D4AF37]/20 p-6"
//               >
//                 <Check className="w-5 h-5 text-[#D4AF37] mb-4" />

//                 <p className="text-sm">
//                   {item}
//                 </p>
//               </div>
//               </Reveal>
//             ))}

//           </div>

//         </div>
//       </Reveal>

//       <SectionDivider variant="doors" />
//       <Reveal as="section" variant="cloche" className="py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">

//           <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
//             Culinary Experiences
//           </p>

//           <h2 className="font-serif text-4xl mb-10">
//             Dining at {hotel.name}
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

//             {hotel.dining.map((item, index) => (
//               <Reveal key={index} variant="arch" delay={index * 0.12}>
//               <div
//                 className="border border-[#D4AF37]/20 p-7"
//               >
//                 <h3 className="font-serif text-xl mb-3">
//                   {item}
//                 </h3>

//                 <p className="text-sm text-black/60 leading-relaxed">
//                   Thoughtfully curated dining experiences
//                   designed for memorable moments.
//                 </p>
//               </div>
//               </Reveal>
//             ))}

//           </div>

//         </div>
//       </Reveal>

//       <SectionDivider variant="cloche" />
//       <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-[#1C1C1C] text-white">
//         <div className="max-w-7xl mx-auto">

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//             <div>
//               <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
//                 Location
//               </p>

//               <div className="flex gap-3">
//                 <MapPin className="w-5 h-5 text-[#D4AF37]" />
//                 <span className="text-white/70 text-sm">
//                   {hotel.location}
//                 </span>
//               </div>
//             </div>

//             <div>
//               <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
//                 Reservations
//               </p>

//               <div className="flex gap-3 mb-3">
//                 <Phone className="w-5 h-5 text-[#D4AF37]" />
//                 <span className="text-white/70 text-sm">
//                   {hotel.phone}
//                 </span>
//               </div>

//               <div className="flex gap-3">
//                 <Mail className="w-5 h-5 text-[#D4AF37]" />
//                 <span className="text-white/70 text-sm">
//                   {hotel.email}
//                 </span>
//               </div>
//             </div>

//             <div>
//               <Link
//                 to="/contact"
//                 className="inline-block border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all"
//               >
//                 Enquire About Your Stay
//               </Link>
//             </div>

//           </div>

//         </div>
//       </Reveal>
//     </main>
//   );
// };

// export default HotelDetails;


import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

import { ourHotelsData } from "../data/hospitalityData";
import { getCloudinaryImageUrl } from "../utils/cloudinaryImage";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";

// Blank ("") ya missing values ko hide karne ke liye
const hasValue = (value) =>
  value !== undefined && value !== null && String(value).trim() !== "";

const formatPrice = (currency, value) =>
  hasValue(value) ? `${currency}${Number(value).toLocaleString("en-IN")}` : "-";

const FACILITY_LABELS = {
  swimmingPool: "Swimming Pool",
  spa: "Spa",
  gym: "Gym",
  indoorGames: "Indoor Games",
  outdoorGames: "Outdoor Games",
  parking: "Parking",
  travelDesk: "Travel Desk",
  jungleSafariBooking: "Jungle Safari Booking",
  bonfire: "Bonfire",
  conferenceFacilities: "Conference Facilities",
  weddingEventFacilities: "Wedding & Event Facilities",
  other: "Other Facilities",
};

const HALL_CAPACITY_LABELS = {
  theatre: "Theatre Style",
  classroom: "Classroom Style",
  uShape: "U-Shape",
  boardroom: "Boardroom",
  cluster: "Cluster",
};

const TARIFF_NOTE_LABELS = {
  extraAdult: "Extra Adult",
  extraChild: "Extra Child",
  gst: "GST",
  seasonalTariff: "Seasonal Tariff",
  weekendTariff: "Weekend Tariff",
  specialPackages: "Special Packages",
};

const DISTANCE_LABELS = {
  airport: "Airport",
  railwayStation: "Railway Station",
  busStand: "Bus Stand",
};

const HotelDetails = () => {
  const { slug } = useParams();

  const [showAllGallery, setShowAllGallery] = useState(false)
  const INITIAL_IMAGE_COUNT = 6

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

  const currency = hotel.currency || "₹";

  const filledFacilities = hotel.facilities
    ? Object.entries(hotel.facilities).filter(([, value]) => hasValue(value))
    : [];

  const filledTariffNotes = hotel.tariffNotes
    ? Object.entries(hotel.tariffNotes).filter(([, value]) => hasValue(value))
    : [];

  const filledDistances = hotel.nearby?.distances
    ? Object.entries(hotel.nearby.distances).filter(([, value]) => hasValue(value))
    : [];

  const hasEvents =
    hotel.banquet?.halls?.length > 0 || hotel.lawns?.list?.length > 0;

  const hasNearby =
    hasValue(hotel.nearby?.highlights) ||
    hotel.nearby?.attractions?.length > 0 ||
    hotel.nearby?.majorAttractions?.length > 0 ||
    filledDistances.length > 0;

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C]">

      <section className="relative h-[70vh] min-h-[550px] bg-[#1C1C1C]">
        {hotel.heroImage && (
          <img
            src={getCloudinaryImageUrl(hotel.heroImage, 2000)}
            alt={hotel.name}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high" decoding="async" width={2000} height={1200} />
        )}

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

      <SectionDivider variant="doors" />
      <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12">
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

                {hasValue(hotel.propertyType) && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                      Property Type
                    </p>
                    <p className="text-sm">
                      {hotel.propertyType}
                    </p>
                  </div>
                )}

                {hasValue(hotel.landArea) && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                      Total Land Area
                    </p>
                    <p className="text-sm">
                      {hotel.landArea}
                    </p>
                  </div>
                )}

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
      </Reveal>

      {/* <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

            {hotel.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} ${index + 1}`}
                className="w-full h-[300px] object-cover" decoding="async" loading="lazy" width={1200} height={800} />
            ))}

          </div>

        </div>
      </section> */}

      {hotel.gallery?.length > 0 && (
        <>
          <SectionDivider variant="doors" />
          <Reveal as="section" variant="arch" className="px-6 md:px-12 pb-20">
            <div className="max-w-7xl mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {(showAllGallery
                  ? hotel.gallery
                  : hotel.gallery.slice(0, INITIAL_IMAGE_COUNT)
                ).map((image, index) => (
                  // <img
                  //   key={index}
                  //   src={image}
                  //   alt={`${hotel.name} ${index + 1}`}
                  //   className="w-full h-[300px] object-cover"
                  // decoding="async" loading="lazy" width={1200} height={800} />

                  <Reveal key={index} variant="arch" delay={index * 0.12}>
                    <LazyLoadImage
                      src={getCloudinaryImageUrl(image, 900)}
                      alt={`${hotel.name} ${index + 1}`}
                      effect="blur"
                      className="w-full h-[300px]  object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </Reveal>

                ))}
              </div>

              {hotel.gallery.length > INITIAL_IMAGE_COUNT && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllGallery((prev) => !prev)}
                    className="inline-block border border-[#D4AF37] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all cursor-pointer"
                  >
                    {showAllGallery ? "Show Less" : `View All Photos (${hotel.gallery.length})`}
                  </button>
                </div>
              )}

            </div>
          </Reveal>
        </>
      )}

      {/* NEW: Rooms & Tariff */}
      {(hotel.roomCategories?.length > 0 || hotel.tariff?.length > 0) && (
        <>
          <SectionDivider variant="arch" />
          <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                Accommodation
              </p>

              <h2 className="font-serif text-4xl mb-10">
                Rooms & Tariff
              </h2>

              {hotel.roomCategories?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                  {hotel.roomCategories.map((room, index) => (
                    <Reveal key={index} variant="arch" delay={index * 0.12}>
                      <div className="border border-[#D4AF37]/20 p-7 h-full">
                        <h3 className="font-serif text-xl mb-5">
                          {room.name}
                        </h3>

                        <div className="flex justify-between text-sm text-black/60 border-t border-[#D4AF37]/20 pt-4">
                          <span>{room.rooms} {room.rooms === 1 ? "Room" : "Rooms"}</span>
                          <span>{room.size}</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {hotel.roomFacilities?.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-serif text-2xl mb-5">
                    In Every Room
                  </h3>

                  <ul className="flex flex-wrap gap-x-8 gap-y-3">
                    {hotel.roomFacilities.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-black/70">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hotel.tariff?.length > 0 && (
                <div>
                  <h3 className="font-serif text-2xl mb-5">
                    Tariff
                  </h3>

                  <div className="overflow-x-auto border border-[#D4AF37]/20 bg-white">
                    <table className="w-full min-w-[640px] text-sm text-left">
                      <thead>
                        <tr className="text-[10px] uppercase tracking-widest text-black/45 border-b border-[#D4AF37]/20">
                          <th className="p-4 font-normal">Room Category</th>
                          <th className="p-4 font-normal">EP / CP</th>
                          <th className="p-4 font-normal">MAP</th>
                          <th className="p-4 font-normal">AP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotel.tariff.map((row, index) => (
                          <tr key={index} className="border-b border-[#D4AF37]/10 last:border-b-0">
                            <td className="p-4 font-serif text-base">{row.name}</td>
                            <td className="p-4">{formatPrice(currency, row.epCp)}</td>
                            <td className="p-4">{formatPrice(currency, row.map)}</td>
                            <td className="p-4">{formatPrice(currency, row.ap)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-black/45 mt-3">
                    Rates are in {currency} per room.
                  </p>

                  {filledTariffNotes.length > 0 && (
                    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-8">
                      {filledTariffNotes.map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                            {TARIFF_NOTE_LABELS[key] || key}
                          </dt>
                          <dd className="text-sm">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              )}

            </div>
          </Reveal>
        </>
      )}

      <SectionDivider variant="arch" />
      <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Facilities
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Amenities & Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

            {hotel.amenities.map((item, index) => (
              <Reveal key={index} variant="arch" delay={index * 0.12}>
              <div
                className="border border-[#D4AF37]/20 p-6"
              >
                <Check className="w-5 h-5 text-[#D4AF37] mb-4" />

                <p className="text-sm">
                  {item}
                </p>
              </div>
              </Reveal>
            ))}

          </div>

          {/* NEW: sheet me jo "Other Property Facilities" bhare hue hain wahi dikhte hain */}
          {filledFacilities.length > 0 && (
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mt-12">
              {filledFacilities.map(([key, value]) => (
                <div key={key}>
                  <dt className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                    {FACILITY_LABELS[key] || key}
                  </dt>
                  <dd className="text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          )}

        </div>
      </Reveal>

      <SectionDivider variant="doors" />
      <Reveal as="section" variant="cloche" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
            Culinary Experiences
          </p>

          <h2 className="font-serif text-4xl mb-10">
            Dining at {hotel.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {hotel.dining.map((item, index) => {
              // dining item string bhi ho sakta hai (purane hotels) ya { title, description } object
              const title = typeof item === "string" ? item : item.title;
              const description =
                typeof item === "string"
                  ? "Thoughtfully curated dining experiences designed for memorable moments."
                  : item.description;

              return (
                <Reveal key={index} variant="arch" delay={index * 0.12}>
                <div
                  className="border border-[#D4AF37]/20 p-7"
                >
                  <h3 className="font-serif text-xl mb-3">
                    {title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed">
                    {description}
                  </p>
                </div>
                </Reveal>
              );
            })}

          </div>

        </div>
      </Reveal>

      {/* NEW: Conference, Banquet & Lawns */}
      {hasEvents && (
        <>
          <SectionDivider variant="cloche" />
          <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                Events & Celebrations
              </p>

              <h2 className="font-serif text-4xl mb-10">
                Conference, Banquet & Lawns
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {hotel.banquet?.halls?.map((hall, index) => {
                  const capacities = Object.entries(HALL_CAPACITY_LABELS).filter(
                    ([key]) => hasValue(hall[key])
                  );

                  return (
                    <Reveal key={`hall-${index}`} variant="arch" delay={index * 0.12}>
                      <div className="border border-[#D4AF37]/20 p-7 h-full">
                        <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                          Conference Hall
                        </p>

                        <h3 className="font-serif text-xl mb-3">
                          {hall.name}
                        </h3>

                        <p className="text-sm text-black/60">
                          {hall.area}
                        </p>

                        {capacities.length > 0 && (
                          <ul className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-2 text-sm text-black/60">
                            {capacities.map(([key, label]) => (
                              <li key={key} className="flex justify-between">
                                <span>{label}</span>
                                <span>{hall[key]}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Reveal>
                  );
                })}

                {hotel.lawns?.list?.map((lawn, index) => (
                  <Reveal
                    key={`lawn-${index}`}
                    variant="arch"
                    delay={((hotel.banquet?.halls?.length || 0) + index) * 0.12}
                  >
                    <div className="border border-[#D4AF37]/20 p-7 h-full">
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                        Wedding Lawn
                      </p>

                      <h3 className="font-serif text-xl mb-3">
                        {lawn.name}
                      </h3>

                      <p className="text-sm text-black/60">
                        {lawn.area}
                      </p>
                    </div>
                  </Reveal>
                ))}

              </div>

              {(hasValue(hotel.lawns?.eventCapacity) ||
                hasValue(hotel.lawns?.otherOutdoorVenues) ||
                hasValue(hotel.banquet?.wifi)) && (
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mt-10">
                  {hasValue(hotel.lawns?.eventCapacity) && (
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                        Wedding / Event Capacity
                      </dt>
                      <dd className="text-sm">{hotel.lawns.eventCapacity}</dd>
                    </div>
                  )}

                  {hasValue(hotel.lawns?.otherOutdoorVenues) && (
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                        Other Outdoor Venues
                      </dt>
                      <dd className="text-sm">{hotel.lawns.otherOutdoorVenues}</dd>
                    </div>
                  )}

                  {hasValue(hotel.banquet?.wifi) && (
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-black/40 mb-2">
                        Hall Wi-Fi
                      </dt>
                      <dd className="text-sm">{hotel.banquet.wifi}</dd>
                    </div>
                  )}
                </dl>
              )}

            </div>
          </Reveal>
        </>
      )}

      {/* NEW: Nearby & Getting Here */}
      {hasNearby && (
        <>
          <SectionDivider variant="doors" />
          <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                Around the Property
              </p>

              <h2 className="font-serif text-4xl mb-10">
                Nearby & Getting Here
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {(hasValue(hotel.nearby?.highlights) || hotel.nearby?.attractions?.length > 0) && (
                  <div>
                    <h3 className="font-serif text-2xl mb-5">
                      Property Highlights
                    </h3>

                    <ul className="space-y-3">
                      {hasValue(hotel.nearby?.highlights) && (
                        <li className="flex items-start gap-3 text-sm text-black/70">
                          <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                          {hotel.nearby.highlights}
                        </li>
                      )}

                      {hotel.nearby?.attractions
                        ?.filter((item) => item !== hotel.nearby.highlights)
                        .map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-black/70">
                            <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {hotel.nearby?.majorAttractions?.length > 0 && (
                  <div>
                    <h3 className="font-serif text-2xl mb-5">
                      Nearby Attractions
                    </h3>

                    <ul className="space-y-3">
                      {hotel.nearby.majorAttractions.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-black/70">
                          <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {filledDistances.length > 0 && (
                  <div>
                    <h3 className="font-serif text-2xl mb-5">
                      Distances
                    </h3>

                    <ul className="space-y-3">
                      {filledDistances.map(([key, value]) => (
                        <li
                          key={key}
                          className="flex justify-between text-sm text-black/70 border-b border-[#D4AF37]/20 pb-3"
                        >
                          <span>{DISTANCE_LABELS[key] || key}</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </div>
          </Reveal>
        </>
      )}

      <SectionDivider variant="cloche" />
      <Reveal as="section" variant="doors" className="py-20 px-6 md:px-12 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
                Location
              </p>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-white/70 text-sm">
                  {hotel.address || hotel.location}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
                Reservations
              </p>

              {hasValue(hotel.phone) && (
                <div className="flex gap-3 mb-3">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <a href={`tel:${hotel.phone.replace(/\s+/g, "")}`} className="text-white/70 text-sm">
                    {hotel.phone}
                  </a>
                </div>
              )}

              {hasValue(hotel.email) && (
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <a href={`mailto:${hotel.email}`} className="text-white/70 text-sm break-all">
                    {hotel.email}
                  </a>
                </div>
              )}

              {!hasValue(hotel.phone) && !hasValue(hotel.email) && (
                <p className="text-white/70 text-sm">
                  Please use the enquiry form to reach the reservations team.
                </p>
              )}
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
      </Reveal>
    </main>
  );
};

export default HotelDetails;