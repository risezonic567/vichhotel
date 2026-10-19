import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Weddings = lazy(() => import('./pages/Weddings'));
const WeddingDetails = lazy(() => import('./pages/WeddingDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const HotelDetails = lazy(() => import('./pages/HotelDetails'));
const Hotel = lazy(() => import('./pages/Hotel'));
const Conferences = lazy(() => import('./pages/Conferences'));
const ConferenceDetails = lazy(() => import('./pages/ConferenceDetails'));

import HotelIntroLoader from './components/HotelIntroLoader';
const Offers = lazy(() => import('./pages/Offers'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Dining = lazy(() => import('./pages/Dining'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('vicoh_intro_seen');

    if (!hasSeenIntro) {
      setShowLoader(true);
    } else {
      setIsAppReady(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('vicoh_intro_seen', 'true');
    
    setShowLoader(false);
    setIsAppReady(true);
  };

  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <Seo />
      {showLoader && (
        <HotelIntroLoader onComplete={handleLoaderComplete} />
      )}

      <div
        className={`min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-[#1C1C1C] antialiased transition-opacity duration-1000 ease-out ${
          isAppReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-[80px] md:pt-[92px]">
          <Suspense fallback={<div className="flex min-h-[40vh] items-center justify-center" role="status" aria-label="Loading page"><span className="h-8 w-8 motion-safe:animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            {/* <Route path="/holiday-packages" element={<HolidayPackages />} /> */}
            {/* <Route path="/holiday-packages/:slug" element={<PackageDetails />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/events/:slug" element={<EventDetails />} /> */}

            <Route path="/our-hotels" element={<Hotel />} />
            <Route path="/our-hotels/:slug" element={<HotelDetails />} />

            <Route path="/conferences" element={<Conferences />} />
            <Route path="/conferences/:slug" element={<ConferenceDetails />} />

            <Route path="/weddings" element={<Weddings />} />
            <Route path="/weddings/:slug" element={<WeddingDetails />} />
            
            <Route path='/offers' element={<Offers/>}/>

            <Route path="/contact" element={<Contact />} />
            <Route path="/dining" element={<Dining />} />

            <Route path='/terms-conditions' element={<TermsConditions/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      </MotionConfig>
    </Router>
  );
}
