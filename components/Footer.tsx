import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-newera-dark-blue text-[#F5F7FA]">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="inline-block">
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
              Premium residential solar, roofing, and water purification services across Florida, Massachusetts, and Connecticut.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">f</a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">in</a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-colors">▶</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                ['Residential Solar', '/solar'],
                ['Roofing Services', '/roofing'],
                ['Water Purification', '/water-purification'],
                ['Cost & Savings', '/cost-savings'],
                ['Our Process', '/process'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                ['Reviews', '/reviews'],
                ['Service Areas', '/service-areas'],
                ['Referral Program', '/referral'],
                ['Become a Dealer', '/dealer'],
                ['Careers', '/careers'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#082fa3] mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {[
                ['Florida', '/service-areas/florida'],
                ['Massachusetts', '/service-areas/massachusetts'],
                ['Connecticut', '/service-areas/connecticut'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="/contact" className="text-xs font-bold uppercase tracking-widest text-[#082fa3] hover:text-white transition-colors">
                English / Español
              </a>
              <p className="text-xs text-white/50 font-sans mt-1">Bilingual support available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs font-sans text-white/50">
            © {currentYear} New Era Solar Energy. All rights reserved.
          </span>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-xs text-white/50 font-sans hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/50 font-sans hover:text-white transition-colors">Terms of Service</a>
            <a href="/dealer" className="text-xs text-white/50 font-sans hover:text-white transition-colors">For Solar Professionals</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
