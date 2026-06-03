import React from 'react';

export function TrustIndicators() {
  const indicators = [
    { name: "Free Solar Assessment", abbr: "FREE", desc: "Personalized Analysis" },
    { name: "No-Pressure Consultation", abbr: "CLEAR", desc: "Honest Guidance" },
    { name: "Bilingual Support", abbr: "ESP/ENG", desc: "Spanish & English" },
    { name: "Fast Response Team", abbr: "FAST", desc: "Florida-Based Support" }
  ];

  return (
    <section className="w-full py-8 flex flex-col items-center justify-center gap-6">
      <span className="text-[10px] font-bold uppercase text-[#5F6F75] tracking-widest text-center">
        Providing Transparent Guidance & Support
      </span>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 w-full">
        {indicators.map((indicator, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e5e5e5] rounded-full flex items-center justify-center text-newera-dark-gray font-black text-xs md:text-sm tracking-tighter">
              {indicator.abbr}
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-poppins font-bold text-xs text-newera-dark-gray uppercase leading-tight">
                {indicator.name}
              </span>
              <span className="text-[9px] text-[#5F6F75] tracking-wider uppercase font-sans">
                {indicator.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
