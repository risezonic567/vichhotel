import React from 'react';
import SectionTitle from '../components/SectionTitle';
import EnquiryForm from '../components/EnquiryForm';
import LocationMap from '../components/home/LocationMap';

const Contact = () => (
  <div className="bg-[#FAF9F6] pt-32 pb-24">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <SectionTitle subtitle="Get In Touch" title="Let's Create Something Extraordinary." />
      <EnquiryForm defaultInterest="Holiday" />
    </div>
    <LocationMap/>
  </div>
);

export default Contact;