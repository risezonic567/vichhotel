import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1C1C] text-[#FAF9F6] border-t border-[#D4AF37]/30 pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

        <div className="space-y-4">
          <Link
            to="/"
            aria-label="Vicoh Hotel Home"
            className="inline-block focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/logo/viccccccooohhhhh.jpg__1_-removebg-preview (1).png"
              alt="Vicoh Hotel Logo"
              className="w-auto h-32 object-contain brightness-110"
            />
          </Link>

          <p className="text-sm text-[#FAF9F6]/70 leading-relaxed max-w-sm font-light">
            An elegant retreat where refined hospitality, timeless comfort, and
            exceptional experiences come together to create unforgettable stays.
          </p>
        </div>

        <div> 
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6 border-b border-[#D4AF37]/20 pb-2 inline-block">
            Explore
          </h4>

          <ul className="space-y-3 text-sm tracking-wide text-[#FAF9F6]/80">
            {[
              { label: "About Us", path: "/about-us" },
              { label: "Our Hotels", path: "/our-hotels" },
              { label: "Conferences", path: "/conferences" },
              { label: "Weddings", path: "/weddings" },
              { label: "Offers", path: "/offers" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-block hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6 border-b border-[#D4AF37]/20 pb-2 inline-block">
            Hotel Concierge
          </h4>

          <ul className="space-y-4 text-sm text-[#FAF9F6]/80 font-light">
            <li className="flex items-start space-x-3 group">
              <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="leading-relaxed">
                Arabian Sea Road,<br />
                Mumbai, Maharashtra, India
              </span>
            </li>

            <li className="flex items-center space-x-3 group">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
              <a
                href="mailto:info.vicoh@gmail.com"
                className="hover:text-[#D4AF37] transition-colors"
              >
                info.vicoh@gmail.com
              </a>
            </li>

            <li className="flex items-center space-x-3 group">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
              <a
                href="tel:+91 92667 30494"
                className="hover:text-[#D4AF37] transition-colors"
              >
                +91 92667 30494
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6 border-b border-[#D4AF37]/20 pb-2 inline-block">
            Connect With Us
          </h4>

          <p className="text-sm text-[#FAF9F6]/70 mb-4 font-light">
            Follow our social channels for stories, updates and exclusive offers.
          </p>

          <div className="flex flex-col space-y-2.5 text-sm text-[#FAF9F6]/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-[#D4AF37]/20 px-3.5 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-sm"
            >
              <span>Instagram</span>
              <span className="text-xs text-[#D4AF37]">→</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-[#D4AF37]/20 px-3.5 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-sm"
            >
              <span>Facebook</span>
              <span className="text-xs text-[#D4AF37]">→</span>
            </a>

            <a
              href="https://wa.me/912240000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-[#D4AF37]/20 px-3.5 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-sm"
            >
              <span>WhatsApp</span>
              <span className="text-xs text-[#D4AF37]">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#FAF9F6]/60 gap-4">
        <p>© {currentYear} Vicoh Hotel. All rights reserved.</p>

        <div className="flex items-center space-x-6">
          <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#D4AF37]/30">•</span>
          <Link to="/terms-conditions" className="hover:text-[#D4AF37] transition-colors">
            Terms of Service
          </Link>
          <span className="text-[#D4AF37]/30">•</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center cursor-pointer gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;