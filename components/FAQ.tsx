'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#e5e5e5] rounded-2xl bg-white overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:bg-[#F5F7FA] hover:bg-[#F5F7FA] transition-colors cursor-pointer"
      >
        <span className="font-poppins font-bold text-base md:text-lg text-newera-dark-gray pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#ff5722] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#5F6F75] text-sm md:text-base leading-relaxed font-sans border-t border-[#e5e5e5] pt-4 mt-1">
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
    {
      question: "How much does residential solar cost?",
      answer: "The cost of a residential solar system varies depending on your roof size, energy usage, shading, and utility rates. A personalized solar savings assessment is required to determine the exact system size and pricing for your home, allowing you to estimate your payback timeline before making a commitment."
    },
    {
      question: "Are there $0 down solar options?",
      answer: "Yes. Many homeowners qualify for $0 down solar financing options, including solar loans, leases, or Power Purchase Agreements (PPAs) that allow you to pay for your system over time. Eligibility depends on credit profile, local utility compatibility, and program terms."
    },
    {
      question: "How does the federal solar tax credit work?",
      answer: "Eligible homeowners may qualify for the federal solar tax credit. The credit is currently up to 30% of eligible system costs, but tax benefits depend on your individual situation. Please consult a tax professional."
    },
    {
      question: "What happens to my solar panels if I sell my home?",
      answer: "Solar panels can be transferred to the new homeowner. Studies consistently show that homes with fully owned solar systems sell faster and at a premium. If your system is financed or leased, the remaining balance can typically be transferred to the buyer or paid off through home sale proceeds."
    },
    {
      question: "Will my Homeowners Association (HOA) allow solar panels?",
      answer: "In Florida, the Florida Solar Rights Act (and similar laws in Massachusetts and Connecticut) protects your right to install solar panels on your property. While HOAs can request minor modifications to design or location, they cannot prevent you from installing a system or render it significantly less efficient."
    },
    {
      question: "How does net metering work?",
      answer: "Net metering is a billing mechanism that credits you for excess electricity your panels send back to the power grid. During the day when your system generates more energy than your home consumes, the meter runs backward, and you earn utility credits to offset energy pulled from the grid at night."
    },
    {
      question: "How long does the solar process take from start to finish?",
      answer: "While the physical installation of panels on your roof typically takes just 1 to 3 days, the entire process from design to activation takes about 4 to 8 weeks. This timeline includes structural engineering reviews, local permitting, HOA design approvals, and utility interconnection inspections."
    },
    {
      question: "Do solar panels work during a grid outage?",
      answer: "For safety reasons, standard grid-tied solar systems automatically shut off during a utility grid outage to prevent back-feeding electricity into lines where technicians are working. To power your home during an outage, you must pair your solar system with a compatible battery backup solution."
    }
  ];

  const faqsEs = [
    {
      question: "¿Cuánto cuesta la energía solar residencial?",
      answer: "El costo de un sistema solar varía según el tamaño de su techo, consumo de energía, sombreado y tarifas de servicios públicos. Se requiere una evaluación personalizada de ahorros solares para determinar el tamaño y precio exactos del sistema para su hogar, lo que le permitirá estimar su tiempo de recuperación antes de decidir."
    },
    {
      question: "¿Existen opciones solares con $0 de pago inicial?",
      answer: "Sí. Muchos propietarios de viviendas podrían calificar para opciones de financiamiento con $0 de pago inicial, incluyendo préstamos solares, arrendamientos (leases) o Acuerdos de Compra de Energía (PPA) que le permiten pagar por su sistema con el tiempo. La elegibilidad depende de su perfil crediticio, compatibilidad con la empresa de servicios públicos y los términos de los programas."
    },
    {
      question: "¿Cómo funciona el crédito fiscal federal para energía solar?",
      answer: "Los propietarios de viviendas que califiquen podrían ser elegibles para el crédito fiscal federal para energía solar. El crédito es actualmente de hasta el 30% de los costos de un sistema elegible, pero los beneficios fiscales dependen de su situación financiera individual. Por favor, consulte con un profesional de impuestos."
    },
    {
      question: "¿Qué pasa con mis paneles solares si vendo mi casa?",
      answer: "Los paneles solares se pueden transferir al nuevo propietario de la vivienda. Los estudios demuestran que las casas con sistemas solares en propiedad tienden a venderse más rápido y a un mejor precio. Si su sistema está financiado o arrendado, el saldo restante generalmente se puede transferir al comprador o liquidar con las ganancias de la venta."
    },
    {
      question: "¿Permitirá mi Asociación de Propietarios (HOA) la instalación de paneles?",
      answer: "En Florida, la Ley de Derechos Solares de Florida protege su derecho legal a instalar paneles solares en su propiedad. Aunque las HOA pueden solicitar modificaciones menores en el diseño o ubicación por estética, no pueden impedirle la instalación ni reducir significativamente la eficiencia del sistema."
    },
    {
      question: "¿Cómo funciona la medición neta (net metering)?",
      answer: "La medición neta es un mecanismo de facturación que le otorga créditos por el exceso de electricidad que sus paneles envían de regreso a la red eléctrica. Durante el día, cuando su sistema genera más energía de la que consume su hogar, el medidor gira hacia atrás y usted acumula créditos para compensar la energía que consume de la red por la noche."
    },
    {
      question: "¿Cuánto tiempo toma el proceso de instalación de paneles solares?",
      answer: "La instalación física de los paneles en su techo generalmente toma de 1 a 3 días, pero el proceso completo desde el diseño hasta la activación suele tomar de 4 a 8 semanas. Este plazo incluye ingeniería estructural, permisos locales, aprobaciones de HOA e inspecciones de interconexión con la empresa eléctrica."
    },
    {
      question: "¿Funcionan los paneles solares durante un apagón de la red?",
      answer: "Por razones de seguridad, los sistemas solares estándar conectados a la red se apagan automáticamente durante un apagón para evitar enviar electricidad a las líneas de distribución donde los técnicos pueden estar trabajando. Para alimentar su hogar durante un corte de energía, debe equipar su sistema con una solución de batería de respaldo compatible."
    }
  ];

  const faqs = isSpanish ? faqsEs : faqsEn;

  return (
    <section className="mt-8 mb-16 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block">
          {isSpanish ? "Aprende Más" : "Learn More"}
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">
          {isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h2>
        <p className="text-[#5F6F75] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
          {isSpanish 
            ? "Encuentra respuestas a preguntas comunes sobre la transición a energía solar y mejoras para tu hogar."
            : "Find answers to common questions about switching to solar energy and improving your home."}
        </p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
