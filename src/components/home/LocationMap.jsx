import React from 'react';
import SectionTitle from '../SectionTitle';

export default function LocationMap() {
  return (
    <section className=" py-7 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <SectionTitle
          subtitle="Location"
          title="Find Us Here"
        />
      </div>

      <div className="rounded-3xl  overflow-hidden shadow-lg border border-slate-200 h-80 relative">
        <iframe
          title="Hotel Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.355325851893!2d76.7093246!3d8.7378619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e94b29c1356f%3A0xe96280db5fbfb7c2!2sVarkala%20Cliff!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}