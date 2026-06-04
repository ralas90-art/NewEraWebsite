'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { footerTranslations } from '@/lib/i18n/content';

export function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const t = isSpanish ? footerTranslations.es : footerTranslations.en;
  const currentYear = new Date().getFullYear();

  // Helper to prefix paths with /es if in Spanish locale
  const getPath = (path: string) => {
    if (isSpanish) {
      if (path === '/') return '/es';
      if (path.startsWith('/es/')) return path;
      return `/es${path}`;
    }
    return path;
  };

  return (
    <footer className="w-full bg-newera-dark-blue text-[#F5F7FA]">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href={getPath('/')} className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="New Era Solar Energy" 
                  width={160} 
                  height={40} 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                />
              </Link>
            </div>
            <p className="text-sm text-white/70 font-sans leading-relaxed mb-4 max-w-xs">
              {t.desc}
            </p>
            <div className="flex flex-col gap-2.5 mb-4 text-xs font-sans text-white/70">
              <a href="tel:+13213813192" className="flex items-center gap-2 hover:text-[#ff5722] transition-colors w-fit">
                <span>📞</span> (321) 381-3192
              </a>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>{t.addressPending}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61556855015821" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">fb</a>
              <a href="https://www.instagram.com/newera.solar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">ig</a>
              <a href="https://www.linkedin.com/company/newerasolar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">in</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">{t.servicesTitle}</h4>
            <ul className="space-y-2">
              {[
                [isSpanish ? 'Solar Residencial' : 'Residential Solar', '/solar'],
                [isSpanish ? 'Servicios de Techos' : 'Roofing Services', '/roofing'],
                [isSpanish ? 'Purificación de Agua' : 'Water Purification', '/water-purification'],
                [isSpanish ? 'Costos y Ahorros' : 'Cost & Savings', '/cost-savings'],
                [isSpanish ? 'Nuestro Proceso' : 'Our Process', '/process'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={getPath(href)} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">{t.companyTitle}</h4>
            <ul className="space-y-2">
              {[
                [isSpanish ? 'Reseñas' : 'Reviews', '/reviews'],
                [isSpanish ? 'Áreas de Servicio' : 'Service Areas', '/service-areas'],
                [isSpanish ? 'Programa de Referidos' : 'Referral Program', '/referral'],
                [isSpanish ? 'Hazte Distribuidor' : 'Become a Dealer', '/dealer'],
                [isSpanish ? 'Empleo' : 'Careers', '/careers'],
                [isSpanish ? 'Contacto' : 'Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={getPath(href)} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">{t.areasTitle}</h4>
            <ul className="space-y-2">
              {[
                [t.florida, '/service-areas/florida'],
                [t.mass, '/service-areas/massachusetts'],
                [t.conn, '/service-areas/connecticut'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={getPath(href)} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={getPath('/contact')} className="text-xs font-bold uppercase tracking-widest text-[#082fa3] hover:text-white transition-colors">
                English / Español
              </Link>
              <p className="text-xs text-white/50 font-sans mt-1">{t.bilingualSupport}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs font-sans text-white/50">
            © {currentYear} New Era Solar Energy. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </span>
          <div className="flex gap-4 md:gap-6">
            <Link href={getPath('/contact')} className="text-xs text-white/50 font-sans hover:text-white transition-colors">
              {isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}
            </Link>
            <Link href={getPath('/contact')} className="text-xs text-white/50 font-sans hover:text-white transition-colors">
              {isSpanish ? 'Términos de Servicio' : 'Terms of Service'}
            </Link>
            <Link href={getPath('/dealer')} className="text-xs text-white/50 font-sans hover:text-white transition-colors">
              {t.dealerPortal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
