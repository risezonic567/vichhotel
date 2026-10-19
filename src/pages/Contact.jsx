import React from 'react';
import SectionTitle from '../components/SectionTitle';
import EnquiryForm from '../components/EnquiryForm';
import LocationMap from '../components/home/LocationMap';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';

const Contact = () => (
  <div className="bg-[#FAF9F6] pb-24">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <Reveal variant="arch"><SectionTitle subtitle="Get In Touch" title="Let's Create Something Extraordinary." /></Reveal>
      <SectionDivider variant="arch" />
      <Reveal variant="arch"><EnquiryForm /></Reveal>
    </div>
    <SectionDivider variant="arch" />
    <LocationMap/>
  </div>
);

export default Contact;
