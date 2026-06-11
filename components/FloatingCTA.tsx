'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (approx 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially in case page is already scrolled on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLeadForm = () => {
    console.log('floating_cta_click');
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={scrollToLeadForm}
        className="w-full bg-[#ff5722] text-white py-4 rounded-full font-bold text-[13px] uppercase tracking-wider shadow-[0_8px_30px_rgb(255,138,61,0.3)] border border-[#e04a1b] hover:bg-[#e0752f] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <span>{isSpanish ? 'Evaluación Solar Gratis' : 'Get a Free Solar Assessment'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
}

