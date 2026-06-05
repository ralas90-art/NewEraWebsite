'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ClipboardCheck, Ruler, FileCheck, Wrench, Power } from 'lucide-react';

export function ProcessTimeline() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const icons = [ClipboardCheck, Ruler, FileCheck, Wrench, Power];

  const stepsEn = [
    { num: 1, title: "Free Assessment", desc: "We evaluate your home\u2019s solar potential and energy needs with zero pressure." },
    { num: 2, title: "Custom Design", desc: "Our engineers create a tailored solar plan optimized for your roof and usage." },
    { num: 3, title: "Permitting", desc: "We handle all local regulations, HOA approvals, and necessary paperwork." },
    { num: 4, title: "Installation", desc: "Our certified professionals install your system, typically in just 1\u20133 days." },
    { num: 5, title: "Activation", desc: "Once inspected and approved, flip the switch to start enjoying clean energy." },
  ];

  const stepsEs = [
    { num: 1, title: "Evaluaci\u00f3n Gratis", desc: "Evaluamos el potencial solar de su hogar y sus necesidades de energ\u00eda con cero presi\u00f3n." },
    { num: 2, title: "Dise\u00f1o Personalizado", desc: "Nuestros ingenieros crean un plan solar adaptado y optimizado para su techo y consumo." },
    { num: 3, title: "Permisos y Tr\u00e1mites", desc: "Nos encargamos de las regulaciones locales, aprobaciones de HOA y todo el papeleo." },
    { num: 4, title: "Instalaci\u00f3n", desc: "Profesionales certificados instalan su sistema, por lo general en solo 1 a 3 d\u00edas." },
    { num: 5, title: "Activaci\u00f3n", desc: "Una vez inspeccionado y aprobado, encendemos el sistema para que disfrute de energ\u00eda limpia." },
  ];

  const steps = isSpanish ? stepsEs : stepsEn;

  return (
    <section className="mt-8 mb-4 py-12 px-6">
      <div className="text-center mb-16">
        <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block font-poppins">
          {isSpanish ? "Simple y Transparente" : "Simple & Transparent"}
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
          {isSpanish ? "Nuestro Proceso" : "Our Process"}
        </h2>
        <p className="text-[#4e5257] text-sm md:text-base mt-3 max-w-xl mx-auto font-sans">
          {isSpanish
            ? "Desde su primera pregunta hasta su primer d\u00eda con energ\u00eda solar, le guiamos en cada paso del camino."
            : "From your first question to your first day of solar power, we guide you every step of the way."}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal connecting line for desktop */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#ff5722]/20 via-[#ff5722]/40 to-[#ff5722]/20 z-0"></div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-0 relative z-10">
          {steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center flex-1 gap-4 md:gap-3 relative group">
                {/* Vertical connecting line for mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[56px] bottom-[-24px] left-[27px] w-[2px] bg-[#E2E8F0] z-0"></div>
                )}

                {/* Step circle with icon */}
                <div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center relative z-10 md:mx-auto bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step number badge */}
                <div className="hidden md:flex absolute top-[-8px] right-[calc(50%-8px)] w-5 h-5 bg-white border-2 border-[#ff5722] rounded-full items-center justify-center z-20">
                  <span className="text-[9px] font-bold text-[#ff5722]">{step.num}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 pt-1 md:pt-3">
                  <span className="md:hidden text-[10px] font-bold text-[#ff5722] uppercase tracking-widest mb-1 font-poppins">
                    {isSpanish ? `Paso ${step.num}` : `Step ${step.num}`}
                  </span>
                  <h4 className="font-poppins font-semibold text-base md:text-lg text-[#14324b] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#4e5257] font-sans leading-relaxed md:px-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Reassurance & CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-sm text-[#4e5257] font-sans leading-relaxed">
            {isSpanish ? (
              <>Most homeowners complete the full solar process in about <strong className="text-[#14324b]">4 a 8 semanas</strong>, dependiendo de los permisos, la aprobaci&oacute;n de la empresa el&eacute;ctrica y los plazos de inspecci&oacute;n.</>
            ) : (
              <>Most homeowners complete the full solar process in about <strong className="text-[#14324b]">4&#8211;8 weeks</strong>, depending on permitting, utility approval, and inspection timelines.</>
            )}
          </p>
          <button
            onClick={() => {
              const leadForm = document.getElementById('lead-form');
              if (leadForm) { leadForm.scrollIntoView({ behavior: 'smooth' }); }
            }}
            className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:bg-[#e04a1b] hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans"
          >
            {isSpanish ? "Iniciar Mi Evaluaci\u00f3n Gratis" : "Start My Free Assessment"}
          </button>
        </div>
      </div>
    </section>
  );
}
