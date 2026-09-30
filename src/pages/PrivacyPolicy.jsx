import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-stone-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-stone-800">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-stone-200/80">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 mb-8 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase block mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-stone-500 text-sm">Last updated: 29 October 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-stone-600 leading-relaxed font-light text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">1. Information We Collect</h2>
            <p>
              When you make a reservation, visit our properties, or interact with our digital platforms, we collect personal information necessary to deliver exceptional hospitality services. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-stone-600">
              <li>Full name, contact email address, phone number, and postal address.</li>
              <li>Payment card details, billing address, and transaction histories.</li>
              <li>Guest preferences, dietary requests, and special stay requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">2. How We Use Your Data</h2>
            <p>
              Your data is utilized exclusively to confirm bookings, customize stay experiences, process transactions, and provide personalized concierge support. We may also send transactional notifications, feedback inquiries, or promotional offerings if you have opted in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">3. Data Sharing & Security</h2>
            <p>
              We do not sell or rent your personal information to third parties. Data is shared strictly with trusted operational partners (such as payment gateways and reservation engines) required to fulfill our services. Robust industry-standard encryption protocols safeguard your information against unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">4. Cookies & Web Analytics</h2>
            <p>
              Our website uses cookies to enhance user experience, remember session details, and analyze traffic patterns. You can disable cookies through your browser settings, though certain functionality may be limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or privacy concerns regarding this policy, please reach out to our privacy team at{' '}
              <a href="mailto:privacy@vicohhotel.com" className="text-amber-600 hover:underline">
                privacy@vicohhotel.com
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}