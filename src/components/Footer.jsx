import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#1C1C1C]/90 text-[#FAF9F6] border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <div>
          <Link
            to="/"
            aria-label="Vicoh Hotel Home"
            className=" focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded z-10 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/logo/viccccccooohhhhh.jpg__1_-removebg-preview (1).png"
              alt="Vicoh Hotel Logo"

              className="w-auto object-contain transition-all duration-300 h-40"
            />  
          </Link>

          <p className="text-sm text-[#FAF9F6]/60 leading-relaxed">
            An elegant retreat where refined hospitality, timeless comfort, and
            exceptional experiences come together to create unforgettable stays.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
            Explore
          </h4>

          <ul className="space-y-3 text-sm tracking-wider text-[#FAF9F6]/80">
            <li>
              <Link to="/about-us" className="hover:text-[#D4AF37] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-hotels" className="hover:text-[#D4AF37] transition-colors">
                Our Hotels
              </Link>
            </li>
            <li>
              <Link to="/conferences" className="hover:text-[#D4AF37] transition-colors">
                Conferences
              </Link>
            </li>
            <li>
              <Link to="/weddings" className="hover:text-[#D4AF37] transition-colors">
                Weddings
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-[#D4AF37] transition-colors">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
            Hotel Concierge
          </h4>

          <ul className="space-y-4 text-sm text-[#FAF9F6]/80">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
              <span>
                Arabian Sea Road,<br />
                Mumbai, Maharashtra, India
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a
                href="mailto:reservations@vicohhotel.com"
                className="hover:text-[#D4AF37] transition-colors"
              >
                reservations@vicohhotel.com
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a
                href="tel:+912240000000"
                className="hover:text-[#D4AF37] transition-colors"
              >
                +91 22 4000 0000
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
            Connect With Us
          </h4>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#FAF9F6]/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>

            <span className="text-[#D4AF37]/40">•</span>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Facebook
            </a>

            <span className="text-[#D4AF37]/40">•</span>

            <a
              href="https://wa.me/912240000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#FAF9F6]/60">
        <p>© {currentYear} Vicoh Hotel. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-[#FAF9F6] transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#FAF9F6] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;