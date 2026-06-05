'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none hover:bg-[#F9FAFB] transition-colors cursor-pointer"
      >
        <span className="font-poppins font-semibold text-base md:text-lg text-[#14324b] pr-4">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#ff5722] text-white' : 'bg-[#ff5722]/10 text-[#ff5722]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#4e5257] text-sm md:text-base leading-relaxed font-sans border-t border-[#E2E8F0] pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const faqsEn = [
    { question: "How much does residential solar cost?", answer: "The cost of a residential solar system varies depending on your roof size, energy usage, shading, and utility rates. A personalized solar savings assessment is required to determine the exact system size and pricing for your home, allowing you to estimate your payback timeline before making a commitment." },
    { question: "Are there $0 down solar options?", answer: "Yes. Many homeowners qualify for $0 down solar financing options, including solar loans, leases, or Power Purchase Agreements (PPAs) that allow you to pay for your system over time. Eligibility depends on credit profile, local utility compatibility, and program terms." },
    { question: "How does the federal solar tax credit work?", answer: "Eligible homeowners may qualify for the federal solar tax credit. The credit is currently up to 30% of eligible system costs, but tax benefits depend on your individual situation. Please consult a tax professional." },
    { question: "What happens to my solar panels if I sell my home?", answer: "Solar panels can be transferred to the new homeowner. Studies consistently show that homes with fully owned solar systems sell faster and at a premium. If your system is financed or leased, the remaining balance can typically be transferred to the buyer or paid off through home sale proceeds." },
    { question: "Will my Homeowners Association (HOA) allow solar panels?", answer: "In Florida, the Florida Solar Rights Act (and similar laws in Massachusetts and Connecticut) protects your right to install solar panels on your property. While HOAs can request minor modifications to design or location, they cannot prevent you from installing a system or render it significantly less efficient." },
    { question: "How does net metering work?", answer: "Net metering is a billing mechanism that credits you for excess electricity your panels send back to the power grid. During the day when your system generates more energy than your home consumes, the meter runs backward, and you earn utility credits to offset energy pulled from the grid at night." },
    { question: "How long does the solar process take from start to finish?", answer: "While the physical installation of panels on your roof typically takes just 1 to 3 days, the entire process from design to activation takes about 4 to 8 weeks. This timeline includes structural engineering reviews, local permitting, HOA design approvals, and utility interconnection inspections." },
    { question: "Do solar panels work during a grid outage?", answer: "For safety reasons, standard grid-tied solar systems automatically shut off during a utility grid outage to prevent back-feeding electricity into lines where technicians are working. To power your home during an outage, you must pair your solar system with a compatible battery backup solution." },
  ];

  const faqsEs = [
    { question: "\u00bfCu\u00e1nto cuesta la energ\u00eda solar residencial?", answer: "El costo de un sistema solar var\u00eda seg\u00fan el tama\u00f1o de su techo, consumo de energ\u00eda, sombreado y tarifas de servicios p\u00fablicos. Se requiere una evaluaci\u00f3n personalizada de ahorros solares para determinar el tama\u00f1o y precio exactos del sistema para su hogar, lo que le permitir\u00e1 estimar su tiempo de recuperaci\u00f3n antes de decidir." },
    { question: "\u00bfExisten opciones solares con $0 de pago inicial?", answer: "S\u00ed. Muchos propietarios de viviendas podr\u00edan calificar para opciones de financiamiento con $0 de pago inicial, incluyendo pr\u00e9stamos solares, arrendamientos (leases) o Acuerdos de Compra de Energ\u00eda (PPA) que le permiten pagar por su sistema con el tiempo." },
    { question: "\u00bfC\u00f3mo funciona el cr\u00e9dito fiscal federal para energ\u00eda solar?", answer: "Los propietarios de viviendas que califiquen podr\u00edan ser elegibles para el cr\u00e9dito fiscal federal para energ\u00eda solar. El cr\u00e9dito es actualmente de hasta el 30% de los costos de un sistema elegible, pero los beneficios fiscales dependen de su situaci\u00f3n financiera individual. Por favor, consulte con un profesional de impuestos." },
    { question: "\u00bfQu\u00e9 pasa con mis paneles solares si vendo mi casa?", answer: "Los paneles solares se pueden transferir al nuevo propietario de la vivienda. Los estudios demuestran que las casas con sistemas solares en propiedad tienden a venderse m\u00e1s r\u00e1pido y a un mejor precio." },
    { question: "\u00bfPermitir\u00e1 mi Asociaci\u00f3n de Propietarios (HOA) la instalaci\u00f3n de paneles?", answer: "En Florida, la Ley de Derechos Solares de Florida protege su derecho legal a instalar paneles solares en su propiedad. Aunque las HOA pueden solicitar modificaciones menores en el dise\u00f1o o ubicaci\u00f3n por est\u00e9tica, no pueden impedirle la instalaci\u00f3n ni reducir significativamente la eficiencia del sistema." },
    { question: "\u00bfC\u00f3mo funciona la medici\u00f3n neta (net metering)?", answer: "La medici\u00f3n neta es un mecanismo de facturaci\u00f3n que le otorga cr\u00e9ditos por el exceso de electricidad que sus paneles env\u00edan de regreso a la red el\u00e9ctrica." },
    { question: "\u00bfCu\u00e1nto tiempo toma el proceso de instalaci\u00f3n de paneles solares?", answer: "La instalaci\u00f3n f\u00edsica de los paneles en su techo generalmente toma de 1 a 3 d\u00edas, pero el proceso completo desde el dise\u00f1o hasta la activaci\u00f3n suele tomar de 4 a 8 semanas." },
    { question: "\u00bfFuncionan los paneles solares durante un apag\u00f3n de la red?", answer: "Por razones de seguridad, los sistemas solares est\u00e1ndar conectados a la red se apagan autom\u00e1ticamente durante un apag\u00f3n para evitar enviar electricidad a las l\u00edneas donde los t\u00e9cnicos pueden estar trabajando. Para alimentar su hogar durante un corte de energ\u00eda, debe equipar su sistema con una soluci\u00f3n de bater\u00eda de respaldo compatible." },
  ];

  const faqs = isSpanish ? faqsEs : faqsEn;

  return (
    <section className="mt-8 mb-16 max-w-3xl mx-auto w-full">
      <div className="text-center mb-10">
        <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block font-poppins">
          {isSpanish ? "Aprende M\u00e1s" : "Learn More"}
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
          {isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h2>
        <p className="text-[#4e5257] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
          {isSpanish
            ? "Encuentra respuestas a preguntas comunes sobre la transici\u00f3n a energ\u00eda solar y mejoras para tu hogar."
            : "Find answers to common questions about switching to solar energy and improving your home."}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
