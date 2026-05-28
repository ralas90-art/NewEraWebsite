import React from 'react';

export function TrustIndicators() {
  const certifications = [
    { name: "NABCEP Certified", abbr: "NABCEP", desc: "Installation Professional" },
    { name: "SEIA Member", abbr: "SEIA", desc: "Solar Energy Industries" },
    { name: "Florida Solar Energy Center", abbr: "FSEC", desc: "Certified Equipment" },
    { name: "Licensed Contractor", abbr: "CGC", desc: "State of Florida" }
  ];

  return (
    <section className="w-full py-8 flex flex-col items-center justify-center gap-6">
      <span className="text-[10px] font-bold uppercase text-[#5F6F75] tracking-widest text-center">
        Adhering to Industry Leading Standards
      </span>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 w-full">
        {certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E6EDF2] rounded-full flex items-center justify-center text-[#123B5D] font-black text-xs md:text-sm tracking-tighter">
              {cert.abbr}
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-poppins font-bold text-xs text-[#123B5D] uppercase leading-tight">
                {cert.name}
              </span>
              <span className="text-[9px] text-[#5F6F75] tracking-wider uppercase font-sans">
                {cert.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
