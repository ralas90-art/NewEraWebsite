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
    if (isHomePage) {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
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
          <button
            onClick={scrollToLeadForm}
            className="bg-newera-dark-blue text-white px-3 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-newera-dark-blue/90 transition-colors whitespace-nowrap"
          >
            Free Assessment
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
          </div>
        </div>
      )}
    </>
  );
}
