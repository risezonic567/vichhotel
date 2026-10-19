import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

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
            className="inline-block focus:ring-1 focus:ring-[#D4AF37] rounded transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/logo/logo.png"
              alt={`${siteConfig.brandName} logo`}
              className="h-20 md:h-24 w-auto object-contain brightness-110"
              decoding="async"
              width={490}
              height={552}
            />
          </Link>

          <p className="text-sm text-[#FAF9F6]/70 leading-relaxed max-w-sm font-light">
            Vicoh Hotel welcomes guests to Mumbai with a comfortable place to
            stay and a convenient base for exploring the city.
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
                {siteConfig.address}
              </span>
            </li>

            <li className="flex items-center space-x-3 group">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>

            <li className="flex items-center space-x-3 group">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {siteConfig.phone}
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
            {[["Instagram", siteConfig.instagram], ["Facebook", siteConfig.facebook], ["WhatsApp", siteConfig.whatsapp]].filter(([, url]) => url).map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border border-[#D4AF37]/20 px-3.5 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-sm">
                <span>{label}</span><span aria-hidden="true" className="text-xs text-[#D4AF37]">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#FAF9F6]/60 gap-4">
        <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>

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
