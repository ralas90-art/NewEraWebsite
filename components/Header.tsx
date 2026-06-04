'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  /** Only used on the homepage to pre-select a service in the Home Upgrade Advisor */
  onSelectService?: (service: string) => void;
}

export function Header({ onSelectService }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleServiceClick = (service: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      if (onSelectService) {
        onSelectService(service);
      } else {
        // Fallback global event for layout-rendered Header
        const selectEvent = new CustomEvent('select-service', { detail: service });
        window.dispatchEvent(selectEvent);
        setTimeout(() => {
          document.getElementById('upgrade-advisor')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const scrollToLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  const serviceLinks = [
    { label: 'Solar', href: '/solar', service: 'Solar' },
    { label: 'Roofing', href: '/roofing', service: 'Roofing' },
    { label: 'Water Purification', href: '/water-purification', service: 'Water Purification' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solar', href: '/solar' },
    { label: 'Roofing', href: '/roofing' },
    { label: 'Water Purification', href: '/water-purification' },
    { label: 'Cost & Savings', href: '/cost-savings' },
    { label: 'Our Process', href: '/process' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Referral Program', href: '/referral' },
    { label: 'Contact', href: '/contact' },
  ];

  const desktopLinks = navLinks.slice(0, 7);

  return (
    <>
      <header className="w-full bg-white border-b border-[#e5e5e5] px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src={pathname === '/roofing' ? '/logo-roofing.jpg' : '/logo.png'} 
            alt={pathname === '/roofing' ? 'New Era Roofing Services' : 'New Era Solar Energy'} 
            width={180} 
            height={44} 
            className="h-11 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-[#5F6F75]">
          {desktopLinks.map((link) => {
            const isActive = pathname === link.href;
            const svcLink = serviceLinks.find(s => s.href === link.href);
            if (svcLink && isHomePage) {
              return (
                <button
                  key={link.href}
                  onClick={() => handleServiceClick(svcLink.service)}
                  className={`pb-1 transition-colors ${isActive ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'hover:text-[#ff5722]'}`}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition-colors ${isActive ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'hover:text-[#ff5722]'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Click to Call (Desktop) */}
          <a
            href="tel:+13213813192"
            className="hidden sm:flex items-center gap-1.5 text-xs md:text-sm font-bold text-newera-dark-gray hover:text-[#ff5722] transition-colors mr-1 font-sans"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5722]">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.15a13.5 13.5 0 01-13.07-13.07V3.5z" clipRule="evenodd" />
            </svg>
            (321) 381-3192
          </a>

          {/* Click to Call (Mobile Icon) */}
          <a
            href="tel:+13213813192"
            className="sm:hidden p-2 text-newera-dark-gray hover:text-[#ff5722]"
            aria-label="Call New Era Solar Energy"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#ff5722]">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.15a13.5 13.5 0 01-13.07-13.07V3.5z" clipRule="evenodd" />
            </svg>
          </a>

          <button
            onClick={scrollToLeadForm}
            className="bg-newera-dark-blue text-white px-3 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-newera-dark-blue/90 transition-colors whitespace-nowrap"
          >
            Free Assessment
          </button>

          {/* Language Toggle (Desktop) */}
          <button
            onClick={scrollToLeadForm}
            className="text-xs font-bold text-[#5F6F75] hover:text-[#ff5722] transition-colors border-l border-[#e5e5e5] pl-3 ml-2 hidden sm:block uppercase tracking-wider font-poppins outline-none"
          >
            Hablamos Español
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-newera-dark-gray"
            onClick={handleMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
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

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-[#e5e5e5] z-40 shadow-lg p-4 flex flex-col gap-1 h-[calc(100vh-73px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-poppins font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-[#ff572210] text-[#ff5722]' : 'text-newera-dark-gray hover:bg-[#F5F7FA]'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-6 mb-4 px-4 flex flex-col gap-3">
            <button
              onClick={scrollToLeadForm}
              className="w-full bg-newera-dark-blue text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-md hover:bg-newera-dark-blue/90 transition-colors"
            >
              Get a Free Assessment
            </button>
            <Link
              href="/referral"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#ff5722] text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-center shadow-md hover:bg-[#e04a1b] transition-colors"
            >
              Refer a Homeowner — Earn $1,000
            </Link>
            <a
              href="tel:+13213813192"
              className="w-full bg-[#F5F7FA] text-newera-dark-gray border border-[#e5e5e5] px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-center shadow-sm hover:bg-white hover:text-[#ff5722] transition-colors flex items-center justify-center gap-2 font-sans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5722]">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.15a13.5 13.5 0 01-13.07-13.07V3.5z" clipRule="evenodd" />
              </svg>
              Call Us: (321) 381-3192
            </a>
            <button
              onClick={scrollToLeadForm}
              className="w-full border border-dashed border-[#e5e5e5] text-[#5F6F75] hover:text-[#ff5722] px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-center hover:bg-[#F5F7FA] transition-colors flex items-center justify-center gap-1.5 font-poppins outline-none"
            >
              🌐 Hablamos Español
            </button>
          </div>
        </div>
      )}
    </>
  );
}
