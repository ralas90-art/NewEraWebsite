'use client';

import React from 'react';
import { Shield, Award, Users, HardHat, CheckCircle2, Flag } from 'lucide-react';

interface WhyNewEraProps {
  locale?: 'en' | 'es';
}

export function WhyNewEra({ locale = 'en' }: WhyNewEraProps) {
  const isSpanish = locale === 'es';

  const cards = [
    {
      icon: Shield,
      title: isSpanish ? 'Integridad Primero' : 'Integrity First',
      desc: isSpanish 
        ? 'Hacemos negocios con total honestidad, transparencia y responsabilidad en cada paso.' 
        : 'We conduct business with absolute honesty, transparency, and accountability at every step.'
    },
    {
      icon: Award,
      title: isSpanish ? 'Calidad sin Concesiones' : 'Quality Without Compromise',
      desc: isSpanish 
        ? 'Utilizamos materiales de primera calidad y mantenemos los estándares de instalación más altos de Florida.' 
        : 'We use premium materials and maintain Florida’s highest installation standards.'
    },
    {
      icon: Users,
      title: isSpanish ? 'Valores Familiares' : 'Family-Owned Values',
      desc: isSpanish 
        ? 'Como empresa familiar, tratamos a nuestros clientes, empleados y socios como parte de la familia.' 
        : 'As a family-owned business, we treat our customers, employees, and partners like family.'
    },
    {
      icon: Flag,
      title: isSpanish ? 'Liderazgo Veterano' : 'Veteran-Led Leadership',
      desc: isSpanish 
        ? 'Operamos con la disciplina, dedicación, honor y precisión de un liderazgo veterano.' 
        : 'We operate with the discipline, dedication, honor, and precision of veteran leadership.'
    },
    {
      icon: HardHat,
      title: isSpanish ? 'La Seguridad Ante Todo' : 'Safety Above All',
      desc: isSpanish 
        ? 'Priorizamos la seguridad de nuestro equipo, sus seres queridos y su propiedad durante todo el proceso.' 
        : 'We prioritize the safety of our team, your loved ones, and your property throughout the entire project.'
    },
    {
      icon: CheckCircle2,
      title: isSpanish ? 'Excelencia en la Ejecución' : 'Excellence in Execution',
      desc: isSpanish 
        ? 'Desde el diseño técnico hasta los permisos y la activación, cuidamos cada pequeño detalle.' 
        : 'From custom engineering to permitting and final utility activation, we sweat every detail.'
    }
  ];

  return (
    <section className="w-full py-16 bg-[#F9FAFB] rounded-3xl border border-[#E2E8F0] overflow-hidden scroll-mt-20" id="why-new-era">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest mb-2 block font-poppins">
            {isSpanish ? 'La Diferencia New Era' : 'The New Era Difference'}
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b] tracking-tight">
            {isSpanish ? '¿Por qué elegir New Era?' : 'Why Choose New Era?'}
          </h2>
          <p className="text-[#4e5257] text-sm md:text-base mt-3 font-sans leading-relaxed">
            {isSpanish 
              ? 'Construimos confianza a largo plazo a través de la honestidad, la disciplina del servicio militar y la dedicación de una empresa familiar.'
              : 'We build long-term trust through honest guidance, the discipline of military service, and the dedication of a family business.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#ff5722]/30 transition-all flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base text-[#14324b] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-[#4e5257] text-xs leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
