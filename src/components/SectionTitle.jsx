import React from 'react';

const SectionTitle = ({ subtitle, title, alignment = "center", light = false }) => (
  <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
    {subtitle && (
      <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-serif font-normal tracking-wide ${light ? "text-[#FAF9F6]" : "text-[#1C1C1C]"}`}>
      {title}
    </h2>
    <div className={`w-16 h-[1px] bg-[#D4AF37] mt-4 ${alignment === "center" ? "mx-auto" : "mr-auto"}`} />
  </div>
);

export default SectionTitle;