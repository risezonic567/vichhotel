import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Hotels", path: "/our-hotels" },
    { name: "Conferences", path: "/conferences" },
    { name: "Weddings", path: "/weddings" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
        isScrolled
          ? "py-3 md:py-4 border-b border-[#D4AF37]/20 shadow-lg"
          : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            className="flex flex-col leading-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-light uppercase text-[#D4AF37]">
              Vicoh
            </span>

            <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.3em] sm:tracking-[0.35em] text-[#D4AF37] uppercase font-sans font-medium mt-1">
              Hotel
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 relative py-2 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#1C1C1C] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#1C1C1C] focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#1C1C1C] border-t border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="px-6 py-7">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/10 text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-white/85 hover:text-[#D4AF37]"
                        }`}
                      >
                        <span>{link.name}</span>

                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom branding */}
              <div className="pt-6 text-center">
                <span className="text-[8px] tracking-[0.35em] uppercase text-[#D4AF37]/70">
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