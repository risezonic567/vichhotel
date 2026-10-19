import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [openMenuLocationKey, setOpenMenuLocationKey] = useState(null);
  const mobileMenuOpen = openMenuLocationKey === location.key;

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 40;
      setIsScrolled((current) => current === nextIsScrolled ? current : nextIsScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? "py-1.5 border-b border-[#D4AF37]/20 shadow-md"
          : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-[76px]">
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
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-11 md:h-14" : "h-12 md:h-[72px]"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" &&
                  location.pathname.startsWith(`${link.path}/`));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[12px] lg:text-xs font-semibold uppercase tracking-[0.16em] lg:tracking-[0.18em] transition-colors duration-300 relative py-2 whitespace-nowrap ${
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

          <button
            type="button"
            onClick={() => setOpenMenuLocationKey((current) => current === location.key ? null : location.key)}
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-[#1C1C1C] border-t border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="px-5 sm:px-6 py-5 sm:py-7">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive =
                    location.pathname === link.path ||
                    (link.path !== "/" &&
                      location.pathname.startsWith(`${link.path}/`));

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
                        onClick={() => setOpenMenuLocationKey(null)}
                        className={`flex items-center justify-between py-4 border-b border-white/10 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-colors duration-300 ${
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
