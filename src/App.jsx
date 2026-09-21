// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';

// import Home from './pages/Home';
// import About from './pages/About';
// // import HolidayPackages from './pages/HolidayPackages';
// // import PackageDetails from './pages/PackageDetails';
// // import Events from './pages/Events';
// // import EventDetails from './pages/EventDetails';
// import Weddings from './pages/Weddings';
// import WeddingDetails from './pages/WeddingDetails';
// import Contact from './pages/Contact';

// import HotelDetails from './pages/HotelDetails';
// import Hotel from './pages/Hotel';

// import Conferences from './pages/Conferences';
// import ConferenceDetails from './pages/ConferenceDetails';

// import HotelIntroLoader from './components/HotelIntroLoader';

// export default function App() {
//   const [showLoader, setShowLoader] = useState(false);
//   const [isAppReady, setIsAppReady] = useState(false);

//   useEffect(() => {
//     // Check if the intro has already been displayed in this browser session
//     const hasSeenIntro = sessionStorage.getItem('vicoh_intro_seen');

//     if (!hasSeenIntro) {
//       setShowLoader(true);
//     } else {
//       setIsAppReady(true);
//     }
//   }, []);

//   const handleLoaderComplete = () => {
//     // Save session flag so loader won't reappear on page refresh/navigation
//     sessionStorage.setItem('vicoh_intro_seen', 'true');
    
//     // Completely unmount the loader component
//     setShowLoader(false);
//     setIsAppReady(true);
//   };
//   return (
//     <>
//     <div className="min-h-screen bg-neutral-950 text-stone-100">
//       {/* 3-Second Luxury Intro Loader */}
//       {showLoader && (
//         <HotelIntroLoader onComplete={handleLoaderComplete} />
//       )}

//       {/* Main Website Homepage / React Router Outlet */}
//       <main
//         className={`transition-all duration-1000 ease-out ${
//           isAppReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//         }`}
//       >
//         <Home />
//       </main>
//     </div>

//      <Router>
//       <ScrollToTop />
//       <div className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-[#1C1C1C] antialiased">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<About />} />
//             {/* <Route path="/holiday-packages" element={<HolidayPackages />} /> */}
//             {/* <Route path="/holiday-packages/:slug" element={<PackageDetails />} /> */}
//             {/* <Route path="/events" element={<Events />} /> */}
//             {/* <Route path="/events/:slug" element={<EventDetails />} /> */}

//             <Route path='/our-hotels' element={<Hotel/>}/>
//             <Route path='/our-hotels/:slug' element={<HotelDetails/>}/>

//             <Route path='/conferences' element={<Conferences/>}/>
//             <Route path='/conferences/:slug' element={<ConferenceDetails/>}/>


//             <Route path="/weddings" element={<Weddings />} />
//             <Route path="/weddings/:slug" element={<WeddingDetails />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//     </>
   
//   );
// } 


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
// import HolidayPackages from './pages/HolidayPackages';
// import PackageDetails from './pages/PackageDetails';
// import Events from './pages/Events';
// import EventDetails from './pages/EventDetails';
import Weddings from './pages/Weddings';
import WeddingDetails from './pages/WeddingDetails';
import Contact from './pages/Contact';

import HotelDetails from './pages/HotelDetails';
import Hotel from './pages/Hotel';

import Conferences from './pages/Conferences';
import ConferenceDetails from './pages/ConferenceDetails';

import HotelIntroLoader from './components/HotelIntroLoader';
import Offers from './pages/Offers';

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
        <main className="flex-grow">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}