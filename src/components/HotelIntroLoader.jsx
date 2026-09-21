import React, { useEffect, useState } from 'react';

const HotelIntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer1 = setTimeout(() => {
      setStage(1);
    }, 400);

    const timer2 = setTimeout(() => {
      setStage(2);
    }, 1200);

    const timer3 = setTimeout(() => {
      setStage(3);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-neutral-950 transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
  
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Hotel Ambience"
          className="h-full w-full object-cover animate-bg-zoom filter brightness-50 contrast-125"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/60 to-neutral-950/80" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center select-none">
        
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent transition-all duration-1000 ${
            stage >= 1 ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
        />

        <div className="h-8 flex items-center justify-center my-3">
          {stage >= 1 && (
            <span className="font-sans-clean text-xs md:text-sm uppercase tracking-[0.4em] text-amber-100/80 font-light animate-fade-in-up">
              Welcome To
            </span>
          )}
        </div>

        <div className="h-20 md:h-28 flex items-center justify-center my-2">
          {stage >= 2 && (
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-amber-50 uppercase tracking-[0.3em] pl-[0.3em] animate-cinematic-scale drop-shadow-2xl">
              Vicohhotel
            </h1>
          )}
        </div>

        <div className="flex flex-col items-center justify-center min-h-[4rem] space-y-3">
          {stage >= 3 && (
            <>
              <p className="font-serif-luxury italic text-lg sm:text-xl md:text-2xl text-stone-200/90 font-light animate-fade-in-up">
                Where Luxury Meets Timeless Hospitality
              </p>
              
              <p className="font-sans-clean text-[10px] sm:text-xs uppercase tracking-[0.35em] text-amber-200/60 font-light animate-fade-in-up pt-1">
                Experience &bull; Relax &bull; Belong
              </p>
            </>
          )}
        </div>

        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent transition-all duration-1000 mt-4 ${
            stage >= 3 ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default HotelIntroLoader;