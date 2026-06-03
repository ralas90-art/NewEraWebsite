import React from 'react';

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Free Assessment",
      desc: "We evaluate your home's solar potential and energy needs with zero pressure.",
      icon: "📋"
    },
    {
      num: "02",
      title: "Custom Design",
      desc: "Our engineers create a tailored solar plan optimized for your roof and usage.",
      icon: "📐"
    },
    {
      num: "03",
      title: "Permitting",
      desc: "We handle all local regulations, HOA approvals, and necessary paperwork.",
      icon: "📄"
    },
    {
      num: "04",
      title: "Installation",
      desc: "Our certified professionals install your system, typically in just 1-3 days.",
      icon: "🛠️"
    },
    {
      num: "05",
      title: "Activation",
      desc: "Once inspected and approved, flip the switch to start enjoying clean energy.",
      icon: "⚡"
    }
  ];

  return (
    <section className="mt-8 mb-4 py-12 px-6">
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block">Simple & Transparent</span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">Our Process</h2>
        <p className="text-[#5F6F75] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
          From your first question to your first day of solar power, we guide you every step of the way.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-[#e5e5e5] z-0"></div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-row md:flex-col items-center md:items-start text-left md:text-center flex-1 gap-6 md:gap-4 relative group">
              {/* Vertical line for mobile */}
              {idx !== steps.length - 1 && (
                <div className="md:hidden absolute top-[70px] bottom-[-20px] left-[44px] w-[2px] bg-[#e5e5e5] z-0"></div>
              )}
              
              {/* Number / Icon Circle */}
              <div className="w-[88px] h-[88px] shrink-0 bg-white border-4 border-[#F5F7FA] rounded-full flex flex-col items-center justify-center shadow-sm group-hover:border-[#ff572220] transition-colors relative z-10 md:mx-auto">
                <span className="text-xl mb-1">{step.icon}</span>
                <span className="text-[10px] font-bold text-[#ff5722]">{step.num}</span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 pt-2 md:pt-0">
                <h4 className="font-poppins font-bold text-lg text-newera-dark-gray mb-2">{step.title}</h4>
                <p className="text-sm text-[#5F6F75] font-sans leading-relaxed md:px-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
