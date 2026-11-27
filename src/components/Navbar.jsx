import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { ourHotelsData } from "../data/hospitalityData"; // path apne project ke hisaab se

// ---------- data se automatic grouping ----------
const groupedHotels = ourHotelsData.reduce((groups, hotel) => {
  const key = hotel.destination || "More Hotels";
  if (!groups[key]) groups[key] = [];
  groups[key].push(hotel);
  return groups;
}, {});
const hotelGroups = Object.entries(groupedHotels);

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Hotels", path: "/our-hotels", hasDropdown: true },
  { name: "Conferences", path: "/conferences" },
  { name: "Weddings", path: "/weddings" },
  { name: "Offers", path: "/offers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// Chhoti image ke liye Cloudinary/Unsplash se hi chhota size mangwao (fast load)
const getThumb = (url) => {
  if (!url) return "";
  if (url.includes("res.cloudinary.com") && url.includes("/image/upload/")) {
    return url.replace(
      "/image/upload/",
      "/image/upload/c_fill,g_auto,w_96,h_96/"
    );
  }
  if (url.includes("images.unsplash.com")) {
    return url.replace(/([?&])w=\d+/, "$1w=96&h=96");
  }
  return url;
};

// Gol image. Image na ho ya fail ho jaye to naam ka pehla akshar dikhega
const HotelThumb = ({ hotel, small = false }) => {
  const [failed, setFailed] = useState(false);

  const src = getThumb(hotel.heroImage);
  const size = small ? "w-9 h-9" : "w-11 h-11";

  if (!src || failed) {
    return (
      <span
        className={`${size} shrink-0 rounded-full bg-[#D4AF37]/10 ring-1 ring-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-sm font-semibold`}
      >
        {hotel.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      width={44}
      height={44}
      onError={() => setFailed(true)}
      className={`${size} shrink-0 rounded-full object-cover ring-1 ring-[#D4AF37]/40`}
    />
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [openMenuLocationKey, setOpenMenuLocationKey] = useState(null);
  const [hotelsMenuLocationKey, setHotelsMenuLocationKey] = useState(null);
  const [mobileHotelsOpen, setMobileHotelsOpen] = useState(false);
  const [activeDestination, setActiveDestination] = useState(hotelGroups[0]?.[0]);

  const mobileMenuOpen = openMenuLocationKey === location.key;
  const hotelsMenuOpen = hotelsMenuLocationKey === location.key;

  const openHotelsMenu = () => setHotelsMenuLocationKey(location.key);
  const closeHotelsMenu = () => setHotelsMenuLocationKey(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 40;
      setIsScrolled((c) => (c === nextIsScrolled ? c : nextIsScrolled));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Esc dabane par dropdown band
  useEffect(() => {
    if (!hotelsMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setHotelsMenuLocationKey(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hotelsMenuOpen]);

  const isLinkActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(`${path}/`));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "py-1.5 border-b border-[#D4AF37]/20 shadow-md" : "py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* relative: dropdown isi row ki poori width mein khulega */}
        <div className="relative flex items-center justify-between h-16 md:h-[76px]">
          <Link
            to="/"
            aria-label="Vicoh Hotel Home"
            className="flex items-center shrink-0 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            <img
              src="/images/logo/logo.png"
              alt="Vicoh Hotel logo"
              decoding="async"
              width={490}
              height={552}
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-11 md:h-14" : "h-12 md:h-[72px]"
                }`}
            />
          </Link>

          {/* ---------- Desktop nav ---------- */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 self-stretch">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.path);

              const linkClass = `text-[12px] lg:text-xs font-semibold uppercase tracking-[0.16em] lg:tracking-[0.18em] transition-colors duration-300 relative py-2 whitespace-nowrap inline-flex items-center gap-1 ${isActive
                  ? "text-[#D4AF37]"
                  : "text-[#1C1C1C] hover:text-[#D4AF37]"
                }`;

              const activeLine = isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              );

              if (link.hasDropdown) {
                return (
                  // relative nahi hai: panel nearest relative (row) se align hoga.
                  // self-stretch + h-full: hover area row ki poori height tak
                  <div
                    key={link.name}
                    className="relative flex items-center h-full"
                    onMouseEnter={openHotelsMenu}
                    onMouseLeave={closeHotelsMenu}
                    onFocus={openHotelsMenu}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        closeHotelsMenu();
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={linkClass}
                      aria-haspopup="true"
                      aria-expanded={hotelsMenuOpen}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${hotelsMenuOpen ? "rotate-180" : ""
                          }`}
                      />
                      {activeLine}
                    </Link>

                    <AnimatePresence>
                      {hotelsMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 8, x: "-50%" }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full pt-2 z-50 w-[560px] lg:w-[760px] max-w-[calc(100vw-2rem)]"
                        >
                          <div className="bg-white border-t-2 border-[#D4AF37] rounded-b-xl shadow-2xl overflow-hidden">
                            <div className="flex">
                              {/* ---------- LEFT: destinations ---------- */}
                              <div className="w-[190px] lg:w-[230px] shrink-0 bg-white border-r border-[#D4AF37]/15 py-4 max-h-[70vh] overflow-y-auto">
                                <p className="px-5 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                                  Destinations
                                </p>

                                {hotelGroups.map(([destination, list]) => {
                                  const isActiveDest = destination === activeDestination;
                                  return (
                                    <button
                                      key={destination}
                                      type="button"
                                      onMouseEnter={() => setActiveDestination(destination)}
                                      onFocus={() => setActiveDestination(destination)}
                                      onClick={() => setActiveDestination(destination)}
                                      className={`w-full flex items-center gap-2.5 px-5 py-2.5 text-left border-l-2 transition-colors ${isActiveDest
                                          ? "bg-white border-[#D4AF37] text-[#B8921F]"
                                          : "border-transparent text-[#1C1C1C] hover:bg-white/70"
                                        }`}
                                    >
                                      <MapPin className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                                      <span className="flex-1 text-[12px] font-semibold uppercase tracking-[0.16em]">
                                        {destination}
                                      </span>
                                      <span className="text-[10px] text-[#1C1C1C]/40">
                                        {list.length}
                                      </span>
                                      <ArrowRight
                                        className={`w-3.5 h-3.5 transition-all duration-200 ${isActiveDest
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-1"
                                          }`}
                                      />
                                    </button>
                                  );
                                })}
                              </div>

                              {/* ---------- RIGHT: selected destination ke hotels ---------- */}
                              <div className="flex-1 min-w-0 p-6 min-h-[300px] max-h-[70vh] overflow-y-auto">
                                <motion.div
                                  key={activeDestination}
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex items-end justify-between mb-4 pb-3 border-b border-[#D4AF37]/25">
                                    <p className="text-lg font-semibold text-[#1C1C1C]">
                                      {activeDestination}
                                    </p>
                                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1C1C1C]/50">
                                      {(groupedHotels[activeDestination] || []).length}{" "}
                                      {(groupedHotels[activeDestination] || []).length === 1
                                        ? "stay"
                                        : "stays"}
                                    </p>
                                  </div>

                                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                                    {(groupedHotels[activeDestination] || []).map((hotel) => (
                                      <li key={hotel.slug}>
                                        <Link
                                          to={`/our-hotels/${hotel.slug}`}
                                          onClick={closeHotelsMenu}
                                          className="group flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#FBF7EE] transition-colors"
                                        >
                                          <HotelThumb hotel={hotel} />
                                          <span className="min-w-0 flex-1">
                                            <span className="block text-[13px] font-medium leading-snug text-[#1C1C1C] group-hover:text-[#B8921F] transition-colors">
                                              {hotel.name}
                                            </span>
                                            <span className="block mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
                                              {hotel.draft
                                                ? "Coming soon"
                                                : hotel.category || ""}
                                            </span>
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              </div>
                            </div>

                            <Link
                              to="/our-hotels"
                              onClick={closeHotelsMenu}
                              className="group flex items-center justify-center gap-1.5 border-t border-[#D4AF37]/15 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1C1C] hover:text-[#D4AF37] transition-colors"
                            >
                              View all hotels
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link key={link.name} to={link.path} className={linkClass}>
                  {link.name}
                  {activeLine}
                </Link>
              );
            })}
          </nav>

          {/* ---------- Mobile toggle ---------- */}
          <button
            type="button"
            onClick={() =>
              setOpenMenuLocationKey((c) =>
                c === location.key ? null : location.key
              )
            }
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#1C1C1C] rounded focus:ring-1 focus:ring-[#D4AF37]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ---------- Mobile menu ---------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#1C1C1C] border-t border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="px-5 sm:px-6 py-5 sm:py-7 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = isLinkActive(link.path);
                  const itemClass = `flex items-center justify-between py-4 border-b border-white/10 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-colors duration-300 ${isActive
                      ? "text-[#D4AF37]"
                      : "text-white/85 hover:text-[#D4AF37]"
                    }`;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.25 }}
                    >
                      {link.hasDropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setMobileHotelsOpen((o) => !o)}
                            aria-expanded={mobileHotelsOpen}
                            className={`${itemClass} w-full text-left`}
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${mobileHotelsOpen ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileHotelsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-3">
                                  {hotelGroups.map(([destination, list]) => (
                                    <div key={destination} className="pt-4">
                                      <div className="flex items-center gap-2 mb-1">
                                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                                          {destination}
                                        </p>
                                      </div>

                                      {list.map((hotel) => (
                                        <Link
                                          key={hotel.slug}
                                          to={`/our-hotels/${hotel.slug}`}
                                          onClick={() =>
                                            setOpenMenuLocationKey(null)
                                          }
                                          className="flex items-center gap-3 py-2 pl-2 rounded-lg hover:bg-white/5"
                                        >
                                          <HotelThumb hotel={hotel} small />
                                          <span className="min-w-0 flex-1">
                                            <span className="block truncate text-[13px] text-white/90">
                                              {hotel.name}
                                            </span>
                                            <span className="block truncate text-[11px] text-white/40">
                                              {hotel.category || hotel.location}
                                            </span>
                                          </span>
                                          {hotel.draft && (
                                            <span className="shrink-0 text-[9px] uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40 rounded-full px-2 py-0.5">
                                              Soon
                                            </span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}

                                  <Link
                                    to="/our-hotels"
                                    onClick={() => setOpenMenuLocationKey(null)}
                                    className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]"
                                  >
                                    View all hotels
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setOpenMenuLocationKey(null)}
                          className={itemClass}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-6 text-center">
                <span className="text-[8px] tracking-[0.3em] uppercase text-[#D4AF37]/70">
                  Vibe Collective Hospitality
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;