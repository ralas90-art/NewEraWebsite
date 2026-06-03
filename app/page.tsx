'use client';

import React, { useState, useEffect } from 'react';
import { ServiceCard } from '../components/ServiceCard';

import { LeadForm } from '../components/LeadForm';

import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TrustIndicators } from '../components/TrustIndicators';
import { FloatingCTA } from '../components/FloatingCTA';
import { HomeUpgradeAdvisor } from '../components/HomeUpgradeAdvisor';
import { ReferralProgram } from '../components/ReferralProgram';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const service = (e as CustomEvent).detail;
      setSelectedService(service);
    };
    window.addEventListener('select-service', handleSelect);
    return () => window.removeEventListener('select-service', handleSelect);
  }, []);

  const scrollToLeadForm = (id: string, trackingEvent: string) => {
    console.log(trackingEvent);
    const formElement = document.getElementById(id);
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setTimeout(() => {
      document.getElementById('upgrade-advisor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full selection:bg-[#ff5722] selection:text-white">
      

      {/* Main Viewport Content */}
      <main className="flex-grow flex flex-col p-6 gap-6 max-w-6xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
          <div className="lg:col-span-7 border border-[#e5e5e5] rounded-[32px] p-8 md:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden bg-newera-dark-blue">
            {/* Background Video Layer */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
              <div className="absolute inset-0 bg-newera-dark-blue/60 sm:bg-[linear-gradient(to_right,#123B5D_40%,transparent)] z-10 pointer-events-none"></div>
              <video 
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1509391366360-1e5e4acb5042?q=80&w=1200&auto=format&fit=crop"
              >
                <source src="https://videos.pexels.com/video-files/3201509/3201509-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-start w-full">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[#ff5722] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 w-fit">
                Florida&apos;s Solar Specialist
              </span>
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-white drop-shadow-md">
                Make the Switch to <br/><span className="text-[#ff5722] drop-shadow-none">Solar</span> With Confidence
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-lg drop-shadow-sm font-medium">
                New Era Solar Energy helps homeowners explore residential solar with clear guidance, personalized assessments, and Florida-inspired support.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => scrollToLeadForm('lead-form', 'hero_solar_assessment_click')}
                  className="w-full sm:w-auto bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-[0_8px_30px_rgb(255,138,61,0.3)] hover:bg-[#e04a1b] hover:scale-105 active:scale-95 transition-all"
                >
                  Get a Free Solar Assessment
                </button>
                <button 
                  onClick={() => scrollToLeadForm('lead-form', 'estimate_savings_click')}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
                >
                  Estimate My Savings
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-white/20 w-full text-left">
                <p className="text-[12px] md:text-sm font-bold text-white/80 uppercase tracking-widest flex flex-wrap items-center gap-x-2 gap-y-2">
                  Clear solar guidance. <span className="hidden sm:inline w-[3px] h-[3px] bg-[#ff5722] rounded-full"></span> 
                  No-pressure consultations. <span className="hidden sm:inline w-[3px] h-[3px] bg-[#ff5722] rounded-full"></span> 
                  Fast follow-up.
                </p>
              </div>
            </div>
          </div>

          {/* Lead Form Sidebar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <LeadForm />
          </div>
        </div>

        {/* Trust Indicators Section */}
        <TrustIndicators />

        {/* Home Upgrade Advisor Section */}
        <div id="upgrade-advisor" className="scroll-mt-20">
          <HomeUpgradeAdvisor initialService={selectedService} onServiceClear={() => setSelectedService(undefined)} />
        </div>

        {/* Bottom Service Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Residential Solar"
            description="Personalized Assessments"
            category="Primary Service"
            isPrimary={true}
            icon="☀️"
            onClick={() => handleSelectService('Solar')}
            index={0}
          />
          <ServiceCard
            title="Roofing Review"
            description="Protect your investment"
            category="Support Service"
            icon="🏠"
            onClick={() => handleSelectService('Roofing')}
            index={1}
          />
          <ServiceCard
            title="Water Filtration"
            description="Clean home comfort"
            category="Support Service"
            icon="💧"
            onClick={() => handleSelectService('Water Purification')}
            index={2}
          />
        </div>

        {/* Process Timeline Section */}
        <div id="our-process" className="scroll-mt-20">
          <ProcessTimeline />
        </div>

        {/* Service Areas Section */}
        <section id="service-areas" className="mt-8 mb-4 border-t border-b border-[#e5e5e5] py-12 scroll-mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block">Local Expertise</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">Service Areas</h2>
              <p className="text-[#5F6F75] text-sm mt-2 max-w-xl font-sans">
                We primarily serve Florida homeowners with premium solar and home upgrade solutions. 
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
              <span className="bg-[#F5F7FA] text-newera-dark-gray px-4 py-2 rounded-xl text-xs font-bold border border-[#e5e5e5]">Miami</span>
              <span className="bg-[#F5F7FA] text-newera-dark-gray px-4 py-2 rounded-xl text-xs font-bold border border-[#e5e5e5]">Orlando</span>
              <span className="bg-[#F5F7FA] text-newera-dark-gray px-4 py-2 rounded-xl text-xs font-bold border border-[#e5e5e5]">Tampa</span>
              <span className="bg-[#F5F7FA] text-newera-dark-gray px-4 py-2 rounded-xl text-xs font-bold border border-[#e5e5e5]">Jacksonville</span>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <div id="reviews" className="scroll-mt-20">
          <Reviews />
        </div>

        {/* Referral Program Section */}
        <ReferralProgram />

        {/* FAQ Section */}
        <FAQ />

      </main>

      
      <FloatingCTA />
    </div>
  );
}
