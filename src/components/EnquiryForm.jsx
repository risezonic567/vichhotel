import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const enquiryTypes = [
  'A stay',
  'A wedding',
  'A conference or offsite',
  'Something else',
];

const destinations = [
  'Goa',
  'Jim Corbett',
  'Manali',
  'Bhimtal',
  'Dehradun',
  'Jaipur',
  'Rishikesh',
  "Haven't decided",
];

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [enquiryType, setEnquiryType] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [emailNotice, setEmailNotice] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const toggleDestination = (destination) => {
    setSelectedDestinations((current) => {
      if (destination === "Haven't decided") {
        return current.includes(destination) ? [] : [destination];
      }

      const withoutUndecided = current.filter((item) => item !== "Haven't decided");
      return withoutUndecided.includes(destination)
        ? withoutUndecided.filter((item) => item !== destination)
        : [...withoutUndecided, destination];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Enquiry: ${enquiryType || 'Not specified'}`,
      `Places: ${selectedDestinations.join(', ') || 'Not specified'}`,
      '',
      'Message:',
      formData.message || 'No message provided',
    ].join('\n');
    const query = new URLSearchParams({
      subject: 'Website enquiry for VICOH',
      body: details,
    });

    setEmailNotice(true);
    window.location.href = `mailto:${siteConfig.email}?${query.toString()}`;
  };

  const chipClass = (selected) =>
    `cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors focus-within:ring-2 focus-within:ring-[#B8941F] ${
      selected
        ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white'
        : 'border-[#E5DCC3] bg-white text-[#555] hover:border-[#B8941F]'
    }`;

  return (
    <div className="border border-[#E5DCC3] bg-white p-6 shadow-sm md:p-9">
      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset>
          <legend className="mb-4 font-serif text-xl">What can we help you with?</legend>
          <div className="flex flex-wrap gap-2">
            {enquiryTypes.map((type) => (
              <label key={type} className={chipClass(enquiryType === type)}>
                <input
                  type="radio"
                  name="enquiryType"
                  value={type}
                  checked={enquiryType === type}
                  onChange={() => setEnquiryType(type)}
                  className="sr-only"
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 font-serif text-xl">Which place?</legend>
          <div className="flex flex-wrap gap-2">
            {destinations.map((destination) => (
              <label
                key={destination}
                className={chipClass(selectedDestinations.includes(destination))}
              >
                <input
                  type="checkbox"
                  name="destinations"
                  value={destination}
                  checked={selectedDestinations.includes(destination)}
                  onChange={() => toggleDestination(destination)}
                  className="sr-only"
                />
                {destination}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-name" className="mb-2 block text-xs font-medium text-[#555]">
              Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              autoComplete="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-[#E5DCC3] bg-[#FAF9F6] px-4 py-3 text-sm focus:border-[#B8941F] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="enquiry-email" className="mb-2 block text-xs font-medium text-[#555]">
              Email *
            </label>
            <input
              id="enquiry-email"
              type="email"
              required
              autoComplete="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-[#E5DCC3] bg-[#FAF9F6] px-4 py-3 text-sm focus:border-[#B8941F] focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-phone" className="mb-2 block text-xs font-medium text-[#555]">
              Phone number
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              autoComplete="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full border border-[#E5DCC3] bg-[#FAF9F6] px-4 py-3 text-sm focus:border-[#B8941F] focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-message" className="mb-2 block text-xs font-medium text-[#555]">
              Message
            </label>
            <textarea
              id="enquiry-message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dates, number of guests, anything you want us to know. A rough idea is fine."
              className="w-full resize-y border border-[#E5DCC3] bg-[#FAF9F6] p-4 text-sm focus:border-[#B8941F] focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1C1C1C] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#B8941F]"
        >
          Send Message
        </button>
        <p className="text-center text-xs leading-5 text-[#777]">
          We&apos;ll only use your details to reply to you.
        </p>
        {emailNotice && (
          <p role="status" className="text-center text-sm leading-6 text-[#555]">
            Your email app should open with your message ready. Press Send there
            to contact us. If it doesn&apos;t open, email{' '}
            <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
