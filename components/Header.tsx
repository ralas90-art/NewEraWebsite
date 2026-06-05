'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { headerTranslations } from '@/lib/i18n/content';
import { getAlternatePath } from '@/lib/i18n/getLocalizedPath';
import { Phone, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  onSelectService?: (service: string) => void;
}

export function Header({ onSelectService }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const isHomePage = pathname === '/' || pathname === '/es';
  const t = isSpanish ? headerTranslations.es : headerTranslations.en;

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleServiceClick = (service: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      if (onSelectService) {
        onSelectService(service);
      } else {
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
      window.location.href = isSpanish ? '/es/contact' : '/contact';
    }
  };

  const desktopLinks = [
    { label: t.solar, href: isSpanish ? '/es/solar' : '/solar', service: 'Solar' },
    { label: t.roofing, href: isSpanish ? '/es/roofing' : '/roofing', service: 'Roofing' },
    { label: t.water, href: isSpanish ? '/es/water-purification' : '/water-purification', service: 'Water Purification' },
    { label: t.process, href: isSpanish ? '/es/process' : '/process' },
    { label: t.reviews, href: isSpanish ? '/es/reviews' : '/reviews' },
    { label: t.referral, href: isSpanish ? '/es/referral' : '/referral' },
  ];

  const mobileLinks = [
    { label: isSpanish ? 'Inicio' : 'Home', href: isSpanish ? '/es' : '/' },
    { label: t.solar, href: isSpanish ? '/es/solar' : '/solar', service: 'Solar' },
    { label: t.roofing, href: isSpanish ? '/es/roofing' : '/roofing', service: 'Roofing' },
    { label: t.water, href: isSpanish ? '/es/water-purification' : '/water-purification', service: 'Water Purification' },
    { label: t.cost, href: isSpanish ? '/es/cost-savings' : '/cost-savings' },
    { label: t.process, href: isSpanish ? '/es/process' : '/process' },
    { label: t.reviews, href: isSpanish ? '/es/reviews' : '/reviews' },
    { label: t.referral, href: isSpanish ? '/es/referral' : '/referral' },
    { label: t.areas, href: isSpanish ? '/es/service-areas' : '/service-areas' },
    { label: t.contact, href: isSpanish ? '/es/contact' : '/contact' },
  ];

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {/* Logo */}
        <Link href={isSpanish ? '/es' : '/'} className="flex items-center shrink-0">
          <Image
            src={pathname.includes('/roofing') ? '/logo-roofing.jpg' : '/logo.png'}
            alt={pathname.includes('/roofing') ? 'New Era Roofing Services' : 'New Era Solar Energy'}
            width={180}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-[#4e5257]">
          {desktopLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.service && isHomePage) {
              return (
                <button
                  key={link.href}
                  onClick={() => handleServiceClick(link.service!)}
                  className={`pb-1 transition-colors font-sans ${isActive ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'hover:text-[#ff5722] cursor-pointer'}`}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition-colors font-sans ${isActive ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'hover:text-[#ff5722]'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Phone (Desktop) */}
          <a
            href="tel:+13213813192"
            className="hidden sm:flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#14324b] hover:text-[#ff5722] transition-colors font-sans"
          >
            <Phone className="w-4 h-4 text-[#ff5722]" />
            (321) 381-3192
          </a>

          {/* Phone (Mobile) */}
          <a href="tel:+13213813192" className="sm:hidden p-2 text-[#14324b] hover:text-[#ff5722]" aria-label="Call New Era Solar Energy">
            <Phone className="w-5 h-5 text-[#ff5722]" />
          </a>

          {/* Primary CTA */}
          <Link
            href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
            className="hidden sm:block bg-[#ff5722] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#e04a1b] hover:shadow-[0_8px_30px_rgba(255,87,34,0.25)] transition-all cursor-pointer font-sans text-center"
          >
            {t.freeAssessment}
          </Link>

          {/* Language Toggle (Desktop) */}
          <Link
            href={getAlternatePath(pathname)}
            title={isSpanish ? 'View in English' : 'Ver en Espa\u00f1ol'}
            className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#6B7280] hover:text-[#ff5722] transition-colors border-l border-[#E2E8F0] pl-3 ml-1 uppercase tracking-wider font-poppins"
          >
            <Globe className="w-3.5 h-3.5" />
            {isSpanish ? 'EN' : 'ES'}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#14324b] cursor-pointer"
            onClick={handleMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[65px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] z-40 shadow-xl p-4 flex flex-col gap-1 h-[calc(100vh-65px)] overflow-y-auto">
          {mobileLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-poppins font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-[#ff5722]/5 text-[#ff5722]' : 'text-[#14324b] hover:bg-[#F9FAFB]'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-6 mb-4 px-4 flex flex-col gap-3">
            <Link
              href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#ff5722] text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:bg-[#e04a1b] transition-all cursor-pointer font-sans text-center"
            >
              {t.freeAssessment}
            </Link>
            <a
              href="tel:+13213813192"
              className="w-full bg-[#F9FAFB] text-[#14324b] border border-[#E2E8F0] px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-center hover:bg-white hover:text-[#ff5722] transition-all flex items-center justify-center gap-2 font-sans"
            >
              <Phone className="w-4 h-4 text-[#ff5722]" />
              {isSpanish ? 'Ll\u00e1manos: (321) 381-3192' : 'Call Us: (321) 381-3192'}
            </a>
            <Link
              href={getAlternatePath(pathname)}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full border border-dashed border-[#E2E8F0] text-[#6B7280] hover:text-[#ff5722] px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-center hover:bg-[#F9FAFB] transition-colors flex items-center justify-center gap-1.5 font-poppins"
            >
              <Globe className="w-3.5 h-3.5" />
              {isSpanish ? 'View in English (EN)' : 'Ver en Espa\u00f1ol (ES)'}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

