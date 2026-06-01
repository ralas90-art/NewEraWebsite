'use client';

import React, { useState } from 'react';

export function Header({ onSelectService }: { onSelectService?: (service: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      console.log('mobile_menu_open');
    }
  };

  const scrollToLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('header_free_assessment_click');
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (label === 'Solar' || label === 'Roofing' || label === 'Water Purification') {
      if (onSelectService) {
        onSelectService(label);
      }
      const advisorElement = document.getElementById('upgrade-advisor');
      if (advisorElement) {
        advisorElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Our Process') {
      const processElement = document.getElementById('our-process');
      if (processElement) {
        processElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Service Areas') {
      const serviceAreasElement = document.getElementById('service-areas');
      if (serviceAreasElement) {
        serviceAreasElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Reviews') {
      const reviewsElement = document.getElementById('reviews');
      if (reviewsElement) {
        reviewsElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Referral Program') {
      const referralElement = document.getElementById('referral-program');
      if (referralElement) {
        referralElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Contact') {
      const formElement = document.getElementById('lead-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Solar", href: "#" },
    { label: "Roofing", href: "#" },
    { label: "Water Purification", href: "#" },
    { label: "Our Process", href: "#" },
    { label: "Service Areas", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Referral Program", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-[#E6EDF2] px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, 'Home')}>
          <div className="w-10 h-10 bg-[#FF8A3D] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            N
          </div>
          <div className="flex flex-col text-left">
            <span className="font-poppins font-bold text-lg leading-tight uppercase tracking-tight text-[#123B5D]">New Era</span>
            <span className="text-[10px] text-[#5EC8E5] font-semibold uppercase tracking-[0.2em] -mt-1 hidden sm:block">Solar Energy</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#5F6F75]">
          {navLinks.slice(0, 8).map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.label)}
              className="hover:text-[#FF8A3D] transition-colors pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={scrollToLeadForm}
            className="bg-[#123B5D] text-white px-3 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#1a4a75] transition-colors whitespace-nowrap"
          >
            Free Assessment
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#123B5D]" 
            onClick={handleMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-[#E6EDF2] z-40 shadow-lg p-4 flex flex-col gap-2 h-[calc(100vh-73px)] overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              className="text-lg font-poppins font-medium py-3 px-4 rounded-xl text-[#123B5D] hover:bg-[#F5F7FA]"
              onClick={(e) => handleLinkClick(e, link.label)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 mb-4 px-4">
            <button 
              onClick={scrollToLeadForm}
              className="w-full bg-[#123B5D] text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-md"
            >
              Get a Free Assessment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
