import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', requirements: '' });

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] p-8 md:p-12 border border-[#E5DCC3] shadow-lg">
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">Enquiry Received</h3>
          <p className="text-[#555] text-sm max-w-md mx-auto leading-relaxed">
            {/* TODO: client verify the response-time promise before publishing. */}
            Thank you for reaching out to Vibe Collective Hospitality. Our private concierge team will review your specifications and get in touch within 24 hours.
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2.5 text-xs uppercase tracking-widest border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#FAF9F6] transition-colors">
            Submit Another Query
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="enquiry-name" className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Full Name *</label>
              <input id="enquiry-name" type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:border-[#D4AF37]" />
            </div>
            <div>
              <label htmlFor="enquiry-email" className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Email Address *</label>
              <input id="enquiry-email" type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:border-[#D4AF37]" />
            </div>
            <div>
              <label htmlFor="enquiry-phone" className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Phone Number *</label>
              <input id="enquiry-phone" type="tel" required name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:border-[#D4AF37]" />
            </div>
          </div>
          <div>
            <label htmlFor="enquiry-requirements" className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Bespoke Requirements / Message</label>
            <textarea id="enquiry-requirements" rows="4" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Tell us about your requirements..." className="w-full bg-white border border-[#E5DCC3] p-4 text-xs text-[#1C1C1C] focus:border-[#D4AF37]" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#1C1C1C] text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-all duration-300">
            Submit Specifications
          </button>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
