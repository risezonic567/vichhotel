import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const EnquiryForm = ({ defaultInterest = "Holiday" }) => {
  const [interest, setInterest] = useState(defaultInterest);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', destination: '',
    date: '', guests: '', duration: '', budget: '',
    eventType: '', companyName: '', requirements: '', weddingType: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] p-8 md:p-12 border border-[#E5DCC3] shadow-lg">
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">Enquiry Received</h3>
          <p className="text-[#555] text-sm max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Vibe Collective Hospitality. Our private concierge team will review your specifications and get in touch within 24 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2.5 text-xs uppercase tracking-widest border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#FAF9F6] transition-colors">
            Submit Another Query
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#1C1C1C] mb-3 font-semibold">I am interested*</label>
            {/* <div className="grid grid-cols-3 gap-3">
              {['Holiday'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setInterest(type)}
                  className={`py-3 text-xs uppercase tracking-wider border transition-all ${
                    interest === type ? "bg-[#1C1C1C] text-[#D4AF37] border-[#1C1C1C]" : "bg-white text-[#555] border-[#E5DCC3] hover:border-[#1C1C1C]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Full Name *</label>
              <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Lord Alexander" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Email Address *</label>
              <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="alexander@domain.com" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Phone Number *</label>
              <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
            </div>
          </div>

          {/* Dynamic Fields */}
          {/* {interest === 'Holiday' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Destination of Interest</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. Rajasthan, Maldives, Swiss Alps" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Travel Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Number of Travellers</label>
                <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="e.g. 2 Travellers" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Estimated Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]">
                  <option value="">Select Range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
            </div>
          )} */}

          {/* {interest === 'Event' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Event Type</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]">
                  <option value="">Select Event Type</option>
                  <option value="corporate">Corporate Summit</option>
                  <option value="conference">Global Conference</option>
                  <option value="launch">Product Launch</option>
                  <option value="gala">Luxury Gala</option>
                  <option value="celebrity">Artist/Celebrity Night</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Company / Organization Name</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Global Tech Enterprise" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Event Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Expected Number of Guests</label>
                <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="e.g. 150 Guests" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
            </div>
          )} */}

          {/* {interest === 'Wedding' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Preferred Wedding Destination</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. Udaipur, Goa, Dubai, Amalfi" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Proposed Wedding Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Estimated Guest Count</label>
                <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="e.g. 250 Guests" className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white border border-[#E5DCC3] px-4 py-3 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]">
                  <option value="">Select Range</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k+">$250,000+</option>
                </select>
              </div>
            </div>
          )} */}

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-[#555] mb-2">Bespoke Requirements / Message</label>
            <textarea rows="4" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Tell us about your specific vision..." className="w-full bg-white border border-[#E5DCC3] p-4 text-xs text-[#1C1C1C] focus:outline-none focus:border-[#D4AF37]" />
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