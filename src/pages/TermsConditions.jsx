import React from 'react';

export default function TermsConditions() {
  return (
    <div className="bg-stone-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-stone-800">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-stone-200/80">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 mb-8 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase block mb-2">
            User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-stone-500 text-sm">Last updated: 29 October 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-stone-600 leading-relaxed font-light text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">1. Reservations & Check-In</h2>
            <p>
              By booking a stay or event through our website, you agree to provide accurate personal and financial details. Guests must present a valid government-issued photo ID along with a credit/debit card upon arrival at check-in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">2. Payment & Cancellation Policy</h2>
            <p>
              Room rates are subject to applicable government taxes and service charges. Cancellation terms vary by rate plan and package type. Standard reservations can be cancelled up to 48 hours prior to check-in without penalty unless explicitly stated otherwise during booking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">3. Property Rules & Guest Responsibilities</h2>
            <p>
              Guests are expected to conduct themselves in a respectful manner. Any property damage, unauthorized noise disturbance, or violation of hotel safety regulations may result in immediate termination of the stay without refund, plus applicable repair charges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">4. Intellectual Property</h2>
            <p>
              All website content, logos, imagery, and text assets are the exclusive property of Vicoh Hotel. Reproduction, distribution, or commercial use without prior written authorization is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Vicoh Hotel is not liable for indirect or consequential damages arising from website technical interruptions or unexpected property service unavailability caused by force majeure events beyond our reasonable control.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}