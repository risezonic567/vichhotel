// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Search,
//   Building2,
//   Compass,
//   Sparkles,
//   UserCheck,
//   Car,
//   Ship,
//   ChevronLeft,
//   ChevronRight,
// } from 'lucide-react';
// import SectionTitle from '../components/SectionTitle';
// import { holidayPackagesData, weddingsData } from '../data/hospitalityData';

// import WhyVibeCollective from '../components/home/WhyVibeCollective';
// import Gallery from '../components/home/Gallery';
// import Testimonials from '../components/home/Testimonials';

// export default function Home () {

//   const [activeTab, setActiveTab] = useState('Hotel');
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     destination: '',
//     checkIn: null, // Date Object
//     checkOut: null, // Date Object
//     guests: '2 Adults - 0 Children - 1 Room',
//   });

//   const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8, 1));
//   const calendarRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (calendarRef.current && !calendarRef.current.contains(event.target)) {
//         setIsCalendarOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const formatDate = (date) => {
//     if (!date) return '';
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//   };

//   const handleDateClick = (date) => {
//     if (!formData.checkIn || (formData.checkIn && formData.checkOut)) {
//       setFormData({ ...formData, checkIn: date, checkOut: null });
//     } else if (date < formData.checkIn) {
//       setFormData({ ...formData, checkIn: date, checkOut: null });
//     } else {
//       setFormData({ ...formData, checkOut: date });
//       setIsCalendarOpen(false); 
//     }
//   };

//   const renderCalendarMonth = (year, month) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const monthName = new Date(year, month).toLocaleString('en-US', {
//       month: 'long',
//       year: 'numeric',
//     });

//     const days = [];
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = new Date(year, month, day);
//       const isCheckIn = formData.checkIn && date.getTime() === formData.checkIn.getTime();
//       const isCheckOut = formData.checkOut && date.getTime() === formData.checkOut.getTime();
//       const isInRange =
//         formData.checkIn &&
//         formData.checkOut &&
//         date > formData.checkIn &&
//         date < formData.checkOut;

//       let btnStyle = 'hover:bg-[#D4AF37]/20 text-gray-800';
//       if (isCheckIn || isCheckOut) {
//         btnStyle = 'bg-[#D4AF37] text-white font-bold rounded-full';
//       } else if (isInRange) {
//         btnStyle = 'bg-[#D4AF37]/30 text-gray-900 rounded-none';
//       }

//       days.push(
//         <button
//           key={day}
//           type="button"
//           onClick={() => handleDateClick(date)}
//           className={`h-8 w-8 text-xs flex items-center justify-center transition-all ${btnStyle}`}
//         >
//           {day}
//         </button>
//       );
//     }
//   // const navigate = useNavigate()

//   // const today = new Date().toISOString().split('T')[0];

//   // const [formData, setFormData] = useState({
//   //   destination: '',
//   //   checkIn: '',
//   //   checkOut: '',
//   //   guests: '2 Guests',
//   // });

//   // const handleCheckInChange = (e) => {
//   //   const newCheckIn = e.target.value;
//   //   setFormData((prev) => {
//   //     let updatedCheckOut = prev.checkOut;
//   //     if (prev.checkOut && newCheckIn > prev.checkOut) {
//   //       updatedCheckOut = newCheckIn; 
//   //     }
//   //     return {
//   //       ...prev,
//   //       checkIn: newCheckIn,
//   //       checkOut: updatedCheckOut,
//   //     };
//   //   });
//   // };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log('Luxury Hotel Search Query:', formData);
//   // };




//   return (
//     <div className="bg-[#FAF9F6]">
//       {/* <section className="relative h-auto min-h-[600px] lg:h-[600px] flex items-end pb-12 lg:pb-16 justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/Images/Image.jpg.jpeg"
//           alt="Luxury Hospitality"
//           className="w-full h-full object-cover filter brightness-90 scale-105 transition-transform duration-10000"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/20 to-black/20" />
//       </div>

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="w-full bg-white/85 backdrop-blur-md rounded-md border border-[#D4AF37]/30 shadow-2xl p-4 sm:p-6 lg:p-3"
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-300/60 items-center"
//           >
//             <div className="lg:col-span-3 px-3 py-2 flex flex-col justify-center">
//               <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                 <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
//                 Destination or Property
//               </label>
//               <input
//                 type="text"
//                 name="destination"
//                 value={formData.destination}
//                 onChange={handleChange}
//                 placeholder="Where are you going?"
//                 required
//                 className="w-full bg-transparent text-gray-900 placeholder-gray-500 font-serif text-sm sm:text-base focus:outline-none focus:ring-0 border-none p-0"
//               />
//             </div>

//             <div className="lg:col-span-2 px-3 py-2 flex flex-col justify-center">
//               <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                 <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
//                 Check In
//               </label>
//               <input
//                 type="date"
//                 name="checkIn"
//                 min={today}
//                 value={formData.checkIn}
//                 onChange={handleCheckInChange}
//                 required
//                 className="w-full bg-transparent text-gray-900 font-sans text-xs sm:text-sm focus:outline-none border-none p-0 cursor-pointer text-gray-700"
//               />
//             </div>

//             <div className="lg:col-span-2 px-3 py-2 flex flex-col justify-center">
//               <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                 <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
//                 Check Out
//               </label>
//               <input
//                 type="date"
//                 name="checkOut"
//                 min={formData.checkIn || today}
//                 value={formData.checkOut}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent text-gray-900 font-sans text-xs sm:text-sm focus:outline-none border-none p-0 cursor-pointer text-gray-700"
//               />
//             </div>

//             <div className="lg:col-span-3 px-3 py-2 flex flex-col justify-center">
//               <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                 <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
//                 Guests
//               </label>
//               <select
//                 name="guests"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 className="w-full bg-transparent text-gray-900 font-serif text-sm sm:text-base focus:outline-none border-none p-0 cursor-pointer text-gray-800"
//               >
//                 <option value="1 Guest">1 Guest</option>
//                 <option value="2 Guests">2 Guests</option>
//                 <option value="3 Guests">3 Guests</option>
//                 <option value="4 Guests">4 Guests</option>
//                 <option value="5+ Guests">5+ Guests</option>
//               </select>
//             </div>

//             <div className="lg:col-span-2 md:col-span-2 px-2 flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="w-full h-12 bg-[#D4AF37] hover:bg-[#C5A028] text-gray-950 font-semibold tracking-widest text-xs uppercase rounded transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
//               >
//                 <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
//                 <span>Search</span>
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </section> */}

//       <section className="relative h-auto min-h-[600px] lg:h-[600px] flex items-end pb-12 lg:pb-16 justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/Images/Image.jpg.jpeg"
//           alt="Luxury Hospitality"
//           className="w-full h-full object-cover filter brightness-90 scale-105 transition-transform duration-10000"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/20 to-black/20" />
//       </div>

//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="w-full"
//         >
//           <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar mb-0 max-w-max">
//             {tabs.map((tab) => {
//               const Icon = tab.icon;
//               const isActive = activeTab === tab.name;
//               return (
//                 <button
//                   key={tab.name}
//                   type="button"
//                   onClick={() => setActiveTab(tab.name)}
//                   className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
//                     isActive
//                       ? 'bg-white/95 text-[#D4AF37] shadow-lg backdrop-blur-md font-semibold'
//                       : 'bg-black/40 text-white/80 hover:bg-black/60 hover:text-white backdrop-blur-sm'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{tab.name}</span>
//                 </button>
//               );
//             })}
//           </div>

//           <div className="relative bg-white/90 backdrop-blur-md rounded-b-md rounded-tr-md border border-[#D4AF37]/30 shadow-2xl p-4 sm:p-6 lg:p-4">
//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-300/60 items-center"
//             >
//               <div className="lg:col-span-4 px-3 py-1 flex flex-col justify-center">
//                 <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                   <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
//                   City / Hotel / Area
//                 </label>
//                 <input
//                   type="text"
//                   name="destination"
//                   value={formData.destination}
//                   onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
//                   placeholder="Where are you going?"
//                   required
//                   className="w-full bg-transparent text-gray-900 placeholder-gray-400 font-serif text-sm sm:text-base focus:outline-none border-none p-0"
//                 />
//               </div>

//               {/* 2. COMBINED CHECK-IN & CHECK-OUT DATE PICKER */}
//               <div
//                 className="lg:col-span-4 px-3 py-1 flex flex-col justify-center relative cursor-pointer"
//                 onClick={() => setIsCalendarOpen(!isCalendarOpen)}
//               >
//                 <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                   <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
//                   Check in - Check out
//                 </label>
//                 <div className="text-sm sm:text-base font-serif text-gray-900">
//                   {formData.checkIn ? (
//                     <span>
//                       {formatDate(formData.checkIn)}
//                       {formData.checkOut ? ` - ${formatDate(formData.checkOut)}` : ' - Select Check-out'}
//                     </span>
//                   ) : (
//                     <span className="text-gray-400">Select Dates</span>
//                   )}
//                 </div>
//               </div>

//               {/* 3. GUESTS & ROOMS */}
//               <div className="lg:col-span-2 px-3 py-1 flex flex-col justify-center">
//                 <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
//                   <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
//                   Guests
//                 </label>
//                 <select
//                   name="guests"
//                   value={formData.guests}
//                   onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                   className="w-full bg-transparent text-gray-900 font-serif text-xs sm:text-sm focus:outline-none border-none p-0 cursor-pointer"
//                 >
//                   <option value="1 Adult - 0 Children - 1 Room">1 Adult - 1 Room</option>
//                   <option value="2 Adults - 0 Children - 1 Room">2 Adults - 1 Room</option>
//                   <option value="2 Adults - 1 Child - 1 Room">2 Adults - 1 Child - 1 Room</option>
//                   <option value="4 Adults - 2 Children - 2 Rooms">4 Adults - 2 Rooms</option>
//                 </select>
//               </div>

//               {/* 4. SEARCH BUTTON */}
//               <div className="lg:col-span-2 px-2 flex items-center justify-center">
//                 <button
//                   type="submit"
//                   className="w-full h-12 bg-[#D4AF37] hover:bg-[#C5A028] text-gray-950 font-semibold tracking-widest text-xs uppercase rounded transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
//                 >
//                   <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
//                   <span>Search</span>
//                 </button>
//               </div>
//             </form>

//             {/* DUAL-MONTH CALENDAR POPUP (MODAL LIKE IMAGE) */}
//             <AnimatePresence>
//               {isCalendarOpen && (
//                 <motion.div
//                   ref={calendarRef}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   className="absolute left-1/2 -translate-x-1/2 lg:left-1/3 top-full mt-3 bg-white border border-[#D4AF37]/30 shadow-2xl rounded-xl p-4 z-50 flex flex-col sm:flex-row items-center gap-4"
//                 >
//                   <div className="flex items-center justify-between w-full sm:hidden mb-2">
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setCurrentMonth(
//                           new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
//                         )
//                       }
//                       className="p-1 hover:bg-gray-100 rounded"
//                     >
//                       <ChevronLeft className="w-4 h-4 text-gray-600" />
//                     </button>
//                     <span className="text-xs font-bold text-[#D4AF37]">Select Range</span>
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setCurrentMonth(
//                           new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
//                         )
//                       }
//                       className="p-1 hover:bg-gray-100 rounded"
//                     >
//                       <ChevronRight className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>

//                   {renderCalendarMonth(
//                     currentMonth.getFullYear(),
//                     currentMonth.getMonth()
//                   )}
//                   <div className="hidden sm:block border-r border-gray-200 h-48" />
//                   {renderCalendarMonth(
//                     currentMonth.getFullYear(),
//                     currentMonth.getMonth() + 1
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>


//       <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto">

//         {/* Content */}
//         <div className="max-w-5xl mx-auto text-center">
//           <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
//             Welcome to Royalty
//           </span>

//           <h2 className="mt-3 text-3xl md:text-4xl font-['Cormorant_Garamond']  text-slate-900 leading-tight">
//             {/* <span className="inline-block w-16 h-px bg-gray-600 align-text-bottom mr-4"></span>   A Sanctuary of Elegance <br/> Serenity By The Arabian Sea   */}More Than Travel. We Create Experiences.
//             {/* <span className="inline-block w-16 h-px font-bold bg-gray-600 align-sub ml-4"></span> */}
//           </h2>

//           <p className="text-slate-600 mt-5 leading-relaxed max-w-4xl mx-auto">
//             Experience world-class hospitality where coastal charm meets modern
//             sophistication. Nestled atop majestic cliffs, The Grand Horizon offers
//             breathtaking ocean views, private beach access, and handcrafted luxury
//             experiences designed for royalty.
//           </p>
//           <button onClick={() => navigate(`/about`)} className="text-sm uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] mt-6 text-center mx-auto items-center pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
//             OUR STORY →
//           </button>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
//             alt="Hotel Main View"
//             className="w-full max-w-4xl h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
//           />

//         </div>


//       </section>

//       <WhyVibeCollective />

//       <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
//         <SectionTitle subtitle="Destinations" title="Explore Our Journeys" />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {holidayPackagesData.map((pkg) => (
//             <div key={pkg.id} className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
//               <div className="h-64 overflow-hidden relative">
//                 <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-6">
//                 <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">{pkg.destination}</span>
//                 <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
//                 <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">{pkg.shortDesc}</p>
//                 <button onClick={() => navigate(`/holiday-packages/${pkg.slug}`)} className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
//                   Explore Package →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
//         <SectionTitle subtitle="Destinations Weddings" title="Explore Our Weddings" />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {weddingsData.slice(0, 3).map((pkg) => (
//             <div key={pkg.id} className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
//               <div className="h-64 overflow-hidden relative">
//                 <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-6">
//                 <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">{pkg.destination}</span>
//                 <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
//                 <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">{pkg.shortDesc}</p>
//                 <button onClick={() => navigate(`/weddings/${pkg.slug}`)} className="text-xs uppercase tracking-widest text-[#1C1C1C] cursor-pointer font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
//                   Explore Package →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Gallery />

//       <Testimonials />
//       {/* <Testimonials/> */}
//     </div>
//   );
// };
// }