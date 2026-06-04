'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Star, MessageSquare } from 'lucide-react';

type StateFilter = 'All' | 'Florida' | 'Massachusetts' | 'Connecticut';

const TABS: { labelEn: string; labelEs: string; val: StateFilter }[] = [
  { labelEn: 'All', labelEs: 'Todos', val: 'All' },
  { labelEn: 'Florida', labelEs: 'Florida', val: 'Florida' },
  { labelEn: 'Massachusetts', labelEs: 'Massachusetts', val: 'Massachusetts' },
  { labelEn: 'Connecticut', labelEs: 'Connecticut', val: 'Connecticut' }
];

const VERIFIED_REVIEWS = {
  en: [
    {
      name: 'Christian Casco',
      rating: 5,
      text: 'Highly Recommend New Era Solar! 🌟 We had our 26 solar panels installed by New Era Solar this week at our home on Ashville Lane, and we couldn’t be happier with the entire experience! From start to finish, the process was super fast, professional, and hassle-free. What impressed us the most was the unbeatable pricing—they came in almost $20,000 cheaper than any other solar company we looked at! Plus, there was absolutely no pressure to buy.',
      location: 'Florida Resident',
      state: 'Florida' as StateFilter,
      tag: 'Solar Installation',
    },
    {
      name: 'Jack Tunstill',
      rating: 5,
      text: 'Rudy did a great job to explain where New Era was going to provide me with more power at less cost from their panels compared to a competitor. I have 30 panels on my roof installed previously in 2017. They will be incorporated to supply more solar power to my home. I felt no pressure to complete the deal with Rudy.',
      location: 'Florida Resident',
      state: 'Florida' as StateFilter,
      tag: 'Solar Integration',
    }
  ],
  es: [
    {
      name: 'Christian Casco',
      rating: 5,
      text: '¡Recomiendo ampliamente a New Era Solar! 🌟 ¡Instalaron nuestros 26 paneles solares esta semana en nuestra casa en Ashville Lane y no podríamos estar más felices con toda la experiencia! De principio a fin, el proceso fue súper rápido, profesional y sin complicaciones. Lo que más nos impresionó fue el precio inmejorable: ¡fueron casi $20,000 más baratos que cualquier otra empresa de energía solar que vimos! Además, no hubo absolutamente ninguna presión para comprar.',
      location: 'Residente de Florida',
      state: 'Florida' as StateFilter,
      tag: 'Instalación Solar',
    },
    {
      name: 'Jack Tunstill',
      rating: 5,
      text: 'Rudy hizo un gran trabajo explicando que New Era me proporcionaría más energía a un menor costo con sus paneles en comparación con un competidor. Tengo 30 paneles en mi techo instalados anteriormente en 2017. Se incorporarán para suministrar más energía solar a mi hogar. No sentí ninguna presión para completar el trato con Rudy.',
      location: 'Residente de Florida',
      state: 'Florida' as StateFilter,
      tag: 'Integración Solar',
    }
  ]
};

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-newera-orange text-newera-orange" />
      ))}
    </div>
  );
}

export function ReviewTabs() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const [activeTab, setActiveTab] = useState<StateFilter>('All');

  const reviewsList = isSpanish ? VERIFIED_REVIEWS.es : VERIFIED_REVIEWS.en;
  const visibleReviews = activeTab === 'All'
    ? reviewsList
    : reviewsList.filter(r => r.state === activeTab);

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.val}
            onClick={() => setActiveTab(tab.val)}
            className={`px-5 py-2.5 rounded-xl font-poppins font-bold text-sm transition-all cursor-pointer ${
              activeTab === tab.val
                ? 'bg-newera-dark-blue text-white shadow-sm'
                : 'bg-white border border-[#e5e5e5] text-[#5F6F75] hover:border-newera-dark-gray hover:text-newera-dark-gray'
            }`}
          >
            {isSpanish ? tab.labelEs : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Review Grid */}
      {visibleReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <div key={idx} className="bg-white border border-[#e5e5e5] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all">
              <StarRow />
              <p className="text-[#5F6F75] text-sm leading-relaxed mb-6 flex-grow italic font-sans">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-[#e5e5e5] pt-4 mt-auto flex items-center justify-between">
                <div>
                  <span className="font-bold text-newera-dark-gray text-sm block font-poppins">{review.name}</span>
                  <span className="text-xs text-[#5F6F75] font-semibold block mt-0.5">{review.location}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide text-newera-orange bg-[#ff572210] px-2.5 py-1 rounded-lg">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State for MA and CT */
        <div className="bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#ff572210] text-newera-orange flex items-center justify-center mx-auto mb-5">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-poppins font-bold text-lg text-newera-dark-gray mb-2">
            {isSpanish 
              ? `Expandiendo nuestras reseñas locales en ${activeTab}`
              : `Expanding Our Local Reviews in ${activeTab}`}
          </h3>
          <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-6">
            {isSpanish 
              ? `Actualmente estamos instalando sistemas de energía solar residencial y realizando actualizaciones eléctricas en ${activeTab}. Si es un propietario en la zona que ha trabajado con nosotros, ¡nos encantaría recibir sus comentarios!`
              : `We are actively installing residential solar energy systems and conducting electrical upgrades in ${activeTab}. If you're a homeowner in the area who has worked with us, we'd love to hear your feedback!`}
          </p>
          <a
            href="https://share.google/l98mSvN0KB1nYSs0J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-newera-dark-blue text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-newera-dark-blue/95 transition-all"
          >
            {isSpanish ? "Dejar una Reseña en Google" : "Leave a Google Review"}
          </a>
        </div>
      )}

      {/* Disclosure note */}
      <div className="mt-8 bg-[#F5F7FA] border border-[#e5e5e5] rounded-2xl p-5 text-sm text-[#5F6F75] font-sans leading-relaxed">
        {isSpanish ? (
          <>
            <strong className="text-newera-dark-gray">Nota sobre opiniones verificadas:</strong> Todas las reseñas que se muestran arriba representan comentarios reales de clientes publicados directamente en nuestro Perfil de Empresa de Google. Solo mostramos nombres de clientes verificados y detalles de comentarios reales.
          </>
        ) : (
          <>
            <strong className="text-newera-dark-gray">Note on Verified Testimonials:</strong> All reviews shown above represent real customer feedback published directly on our Google Business Profile. We display only verified customer names and actual feedback details.
          </>
        )}
      </div>
    </div>
  );
}
