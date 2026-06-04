'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export function ProcessTimeline() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const stepsEn = [
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

  const stepsEs = [
    {
      num: "01",
      title: "Evaluación Gratis",
      desc: "Evaluamos el potencial solar de su hogar y sus necesidades de energía con cero presión.",
      icon: "📋"
    },
    {
      num: "02",
      title: "Diseño Personalizado",
      desc: "Nuestros ingenieros crean un plan solar adaptado y optimizado para su techo y consumo.",
      icon: "📐"
    },
    {
      num: "03",
      title: "Permisos y Trámites",
      desc: "Nos encargamos de las regulaciones locales, aprobaciones de HOA y todo el papeleo.",
      icon: "📄"
    },
    {
      num: "04",
      title: "Instalación",
      desc: "Profesionales certificados instalan su sistema, por lo general en solo 1 a 3 días.",
      icon: "🛠️"
    },
    {
      num: "05",
      title: "Activación",
      desc: "Una vez inspeccionado y aprobado, encendemos el sistema para que disfrute de energía limpia.",
      icon: "⚡"
    }
  ];

  const steps = isSpanish ? stepsEs : stepsEn;

  return (
    <section className="mt-8 mb-4 py-12 px-6">
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block">
          {isSpanish ? "Simple y Transparente" : "Simple & Transparent"}
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">
          {isSpanish ? "Nuestro Proceso" : "Our Process"}
        </h2>
        <p className="text-[#5F6F75] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
          {isSpanish 
            ? "Desde su primera pregunta hasta su primer día con energía solar, le guiamos en cada paso del camino."
            : "From your first question to your first day of solar power, we guide you every step of the way."}
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

        {/* Timeline Reassurance & CTA Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-6 animate-in fade-in duration-300">
          <p className="text-sm text-[#5F6F75] font-sans leading-relaxed">
            {isSpanish ? (
              <>
                La mayoría de los propietarios completan el proceso solar completo en aproximadamente <strong>4 a 8 semanas</strong>, dependiendo de los permisos, la aprobación de la empresa eléctrica y los plazos de inspección.
              </>
            ) : (
              <>
                Most homeowners complete the full solar process in about <strong>4–8 weeks</strong>, depending on permitting, utility approval, and inspection timelines.
              </>
            )}
          </p>
          <button
            onClick={() => {
              const leadForm = document.getElementById('lead-form');
              if (leadForm) {
                leadForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#ff5722]/20 hover:bg-[#e04a1b] hover:scale-105 transition-all cursor-pointer font-sans"
          >
            {isSpanish ? "Iniciar Mi Evaluación Gratis" : "Start My Free Assessment"}
          </button>
        </div>
      </div>
    </section>
  );
}
