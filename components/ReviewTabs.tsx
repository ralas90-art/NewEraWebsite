'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Star, MessageSquare, ExternalLink } from 'lucide-react';

type StateFilter = 'All' | 'Florida' | 'Massachusetts' | 'Connecticut';

const TABS: { labelEn: string; labelEs: string; val: StateFilter }[] = [
  { labelEn: 'All', labelEs: 'Todos', val: 'All' },
  { labelEn: 'Florida', labelEs: 'Florida', val: 'Florida' },
  { labelEn: 'Massachusetts', labelEs: 'Massachusetts', val: 'Massachusetts' },
  { labelEn: 'Connecticut', labelEs: 'Connecticut', val: 'Connecticut' }
];

interface ReviewItem {
  name: string;
  rating: number;
  text: string;
  location: string;
  state: StateFilter;
  tag: string;
  profileUrl?: string;
  photos?: string[];
}

const VERIFIED_REVIEWS: { en: ReviewItem[]; es: ReviewItem[] } = {
  en: [
    {
      name: 'Christian Casco',
      rating: 5,
      text: 'Highly Recommend New Era Solar! 🌟 We had our 26 solar panels installed by New Era Solar this week at our home on Ashville Lane, and we couldn\'t be happier with the entire experience! From start to finish, the process was super fast, professional, and hassle-free. What impressed us the most was the unbeatable pricing—they came in almost $20,000 cheaper than any other solar company we looked at! Plus, there was absolutely no pressure to buy.',
      location: 'Orlando, FL',
      state: 'Florida',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j',
      photos: ['/images/gallery/install-1.jpg']
    },
    {
      name: 'Jack Tunstill',
      rating: 5,
      text: 'Rudy did a great job to explain where New Era was going to provide me with more power at less cost from their panels compared to a competitor. I have 30 panels on my roof installed previously in 2017. They will be incorporated to supply more solar power to my home. I felt no pressure to complete the deal with Rudy.',
      location: 'Tampa, FL',
      state: 'Florida',
      tag: 'Solar Integration',
      profileUrl: 'https://www.google.com/maps/contrib/109664566418764018914/reviews?hl=en-US',
      photos: ['/images/gallery/install-2.jpg']
    },
    {
      name: 'Sofia Romero',
      rating: 5,
      text: 'All went as planned and all the team were punctual and worked with a high standard! Thank you! Highly recommended!!',
      location: 'Boston, MA',
      state: 'Massachusetts',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/102807196056381487692/reviews?hl=en',
      photos: ['/images/gallery/install-3.jpg']
    },
    {
      name: 'Deborah Kent',
      rating: 5,
      text: 'They were very polite and answered any questions that we had. They cleaned up all of their mess. Those guys are very hard workers. Thanks again guys, you are awesome!',
      location: 'Hartford, CT',
      state: 'Connecticut',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/102706376617790958645/reviews?hl=en',
      photos: ['/images/gallery/install-4.jpg']
    },
    {
      name: 'Indira Lopez',
      rating: 5,
      text: 'Had a wonderful experience Ruben was so knowledgeable and helpful. Pricing was so affordable and straight forward. No hidden fees or additional unwanted costs. I would definitely recommend this company. Their level of commitment and customer service is exceptional.',
      location: 'Miami, FL',
      state: 'Florida',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/110299289896471025110/reviews?hl=en-US',
      photos: ['/images/gallery/install-5.jpg']
    },
    {
      name: 'Doug Nelson',
      rating: 5,
      text: 'We purchased a system from New Era Solar and everything went smoothly. Steve, our rep, kept us informed all the time... The install crew was amazing and finished within 6 hours. The final inspection and approval was done quickly and we flipped the switch to get the system running. We are now producing enough solar power.',
      location: 'Worcester, MA',
      state: 'Massachusetts',
      tag: 'Solar & Roof Combo',
      profileUrl: 'https://www.google.com/maps/contrib/108404010507799200306/reviews?hl=en',
      photos: ['/images/gallery/install-6.jpg']
    },
    {
      name: 'Gustavo Arbeláez',
      rating: 5,
      text: 'New Era Solar completed our installation a while ago, and I just want to express how happy we are with our decision to choose them. They were professional from start to finish. A big shoutout to the installation team for doing an outstanding job. I’m already recommending them to my family and friends!',
      location: 'Orlando, FL',
      state: 'Florida',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/114666900932577875099/reviews?hl=en-US'
    },
    {
      name: 'María Adelaida Arboleda',
      rating: 5,
      text: 'I have to say, the entire experience with New Era Solar was seamless. From working with Christian and the project managers to the installation team and everyone in between, everything went smoothly from start to finish.',
      location: 'Jacksonville, FL',
      state: 'Florida',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/103938589709507596424/reviews?hl=en-US'
    },
    {
      name: 'David Hormaza',
      rating: 5,
      text: 'John was very helpful. Customer service team is very nice and I’m saving thousands of dollars a year on electricity.',
      location: 'Kissimmee, FL',
      state: 'Florida',
      tag: 'Solar Savings',
      profileUrl: 'https://www.google.com/maps/contrib/101376387424307958377/reviews?hl=en'
    },
    {
      name: 'Virginia Gilman',
      rating: 5,
      text: 'Great presentation of product. Very well explained. Carmen and Steve were wonderful to work with.',
      location: 'St. Petersburg, FL',
      state: 'Florida',
      tag: 'Consultation',
      profileUrl: 'https://www.google.com/maps/contrib/115408279625487296078/reviews?hl=en'
    },
    {
      name: 'Erick Sanchez',
      rating: 5,
      text: 'Great company to work with, and fast install timelines and payments on time, all my clients are happy.',
      location: 'Miami, FL',
      state: 'Florida',
      tag: 'Speedy Install',
      profileUrl: 'https://www.google.com/maps/contrib/111588353346852781561/reviews?hl=en'
    },
    {
      name: 'Buddy Gates',
      rating: 4,
      text: 'It\'s only been a week since installation. The techs were very good installing and tested the solar panels which showed they were working. It\'s too early to know how much I may be saving.',
      location: 'Stamford, CT',
      state: 'Connecticut',
      tag: 'Solar Testing',
      profileUrl: 'https://www.google.com/maps/contrib/105097005161798788178/reviews?hl=en'
    },
    {
      name: 'Walid Halty',
      rating: 5,
      text: 'Best installer we work with, by far!',
      location: 'Springfield, MA',
      state: 'Massachusetts',
      tag: 'Solar Installation',
      profileUrl: 'https://www.google.com/maps/contrib/101959031130775402527/reviews?hl=en'
    }
  ],
  es: [
    {
      name: 'Christian Casco',
      rating: 5,
      text: '¡Recomiendo ampliamente a New Era Solar! 🌟 ¡Instalaron nuestros 26 paneles solares esta semana en nuestra casa en Ashville Lane y no podríamos estar más felices con toda la experiencia! De principio a fin, el proceso fue súper rápido, profesional y sin complicaciones. Lo que más nos impresionó fue el precio inmejorable: ¡fueron casi $20,000 más baratos que cualquier otra empresa de energía solar que vimos! Además, no hubo absolutamente ninguna presión para comprar.',
      location: 'Orlando, FL',
      state: 'Florida',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j',
      photos: ['/images/gallery/install-1.jpg']
    },
    {
      name: 'Jack Tunstill',
      rating: 5,
      text: 'Rudy hizo un gran trabajo explicando que New Era me proporcionaría más energía a un menor costo con sus paneles en comparación con un competidor. Tengo 30 paneles en mi techo instalados anteriormente en 2017. Se incorporarán para suministrar más energía solar a mi hogar. No sentí ninguna presión para completar el trato con Rudy.',
      location: 'Tampa, FL',
      state: 'Florida',
      tag: 'Integración Solar',
      profileUrl: 'https://www.google.com/maps/contrib/109664566418764018914/reviews?hl=en-US',
      photos: ['/images/gallery/install-2.jpg']
    },
    {
      name: 'Sofia Romero',
      rating: 5,
      text: '¡Todo salió según lo planeado y todo el equipo fue puntual y trabajó con un alto estándar! ¡Gracias! ¡Muy recomendado!',
      location: 'Boston, MA',
      state: 'Massachusetts',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/102807196056381487692/reviews?hl=en',
      photos: ['/images/gallery/install-3.jpg']
    },
    {
      name: 'Deborah Kent',
      rating: 5,
      text: 'Fueron muy amables y respondieron a todas nuestras preguntas. Limpiaron todo su desorden. Esos muchachos son muy trabajadores. ¡Gracias de nuevo, son increíbles!',
      location: 'Hartford, CT',
      state: 'Connecticut',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/102706376617790958645/reviews?hl=en',
      photos: ['/images/gallery/install-4.jpg']
    },
    {
      name: 'Indira Lopez',
      rating: 5,
      text: 'Tuve una experiencia maravillosa, Ruben fue muy atento y servicial. El precio fue muy accesible y claro. Sin tarifas ocultas ni costos adicionales no deseados. Recomiendo totalmente esta empresa. Su nivel de compromiso y servicio al cliente es excepcional.',
      location: 'Miami, FL',
      state: 'Florida',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/110299289896471025110/reviews?hl=en-US',
      photos: ['/images/gallery/install-5.jpg']
    },
    {
      name: 'Doug Nelson',
      rating: 5,
      text: 'Compramos un sistema de New Era Solar y todo salió muy bien. Steve, nuestro representante, nos mantuvo informados todo el tiempo... El equipo de instalación fue increíble y terminó en 6 horas. La inspección final y aprobación se hizo rápido y encendimos el sistema. Ahora estamos produciendo suficiente energía solar.',
      location: 'Worcester, MA',
      state: 'Massachusetts',
      tag: 'Combo Solar y Techo',
      profileUrl: 'https://www.google.com/maps/contrib/108404010507799200306/reviews?hl=en',
      photos: ['/images/gallery/install-6.jpg']
    },
    {
      name: 'Gustavo Arbeláez',
      rating: 5,
      text: 'New Era Solar completó nuestra instalación hace un tiempo, y solo quiero expresar lo felices que estamos con nuestra decisión de elegirlos. Fueron profesionales de principio a fin. Un gran reconocimiento al equipo de instalación por hacer un trabajo excepcional. ¡Ya los estoy recomendando a mis familiares y amigos!',
      location: 'Orlando, FL',
      state: 'Florida',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/114666900932577875099/reviews?hl=en-US'
    },
    {
      name: 'María Adelaida Arboleda',
      rating: 5,
      text: 'Debo decir que toda la experiencia con New Era Solar fue perfecta. Desde trabajar con Christian y los gerentes de proyecto hasta el equipo de instalación y todos los demás, todo salió muy bien de principio a fin.',
      location: 'Jacksonville, FL',
      state: 'Florida',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/103938589709507596424/reviews?hl=en-US'
    },
    {
      name: 'David Hormaza',
      rating: 5,
      text: 'John fue de gran ayuda. El equipo de atención al cliente es muy amable y estoy ahorrando miles de dólares al año en electricidad.',
      location: 'Kissimmee, FL',
      state: 'Florida',
      tag: 'Ahorro Solar',
      profileUrl: 'https://www.google.com/maps/contrib/101376387424307958377/reviews?hl=en'
    },
    {
      name: 'Virginia Gilman',
      rating: 5,
      text: 'Excelente presentación del producto. Muy bien explicado. Carmen y Steve fueron maravillosos para trabajar.',
      location: 'St. Petersburg, FL',
      state: 'Florida',
      tag: 'Consulta Solar',
      profileUrl: 'https://www.google.com/maps/contrib/115408279625487296078/reviews?hl=en'
    },
    {
      name: 'Erick Sanchez',
      rating: 5,
      text: 'Excelente empresa para trabajar, tiempos de instalación rápidos y pagos a tiempo, todos mis clientes están contentos.',
      location: 'Miami, FL',
      state: 'Florida',
      tag: 'Instalación Rápida',
      profileUrl: 'https://www.google.com/maps/contrib/111588353346852781561/reviews?hl=en'
    },
    {
      name: 'Buddy Gates',
      rating: 4,
      text: 'Ha pasado solo una semana desde la instalación. Los técnicos fueron muy buenos instalando y probaron los paneles solares para demostrar que funcionaban. Es muy pronto para saber cuánto estaré ahorrando.',
      location: 'Stamford, CT',
      state: 'Connecticut',
      tag: 'Prueba de Paneles',
      profileUrl: 'https://www.google.com/maps/contrib/105097005161798788178/reviews?hl=en'
    },
    {
      name: 'Walid Halty',
      rating: 5,
      text: '¡El mejor instalador con el que hemos trabajado, por mucho!',
      location: 'Springfield, MA',
      state: 'Massachusetts',
      tag: 'Instalación Solar',
      profileUrl: 'https://www.google.com/maps/contrib/101959031130775402527/reviews?hl=en'
    }
  ]
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#ff5722] text-[#ff5722]" />
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
                ? 'bg-[#14324b] text-white shadow-sm'
                : 'bg-white border border-[#E2E8F0] text-[#5F6F75] hover:border-[#14324b] hover:text-[#14324b]'
            }`}
          >
            {isSpanish ? tab.labelEs : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Review Grid */}
      {visibleReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all min-w-0">
              <div className="flex justify-between items-start mb-2">
                <StarRow count={review.rating} />
                {review.profileUrl && (
                  <a 
                    href={review.profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={isSpanish ? `Ver reseña de ${review.name} en Google Maps` : `View Google review by ${review.name}`}
                    className="flex items-center gap-1 text-[10px] font-bold text-[#082fa3] hover:text-[#ff5722] transition-colors font-sans"
                    title={isSpanish ? "Ver perfil de Google" : "Verify review on Google Maps"}
                  >
                    <span>Google</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
              <p className="text-[#5F6F75] text-sm leading-relaxed mb-6 flex-grow italic font-sans">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-[#E2E8F0] pt-4 mt-auto flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#14324b] text-sm block font-poppins">{review.name}</span>
                  <span className="text-xs text-[#5F6F75] font-semibold block mt-0.5">{review.location}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#ff5722] bg-[#ff572210] px-2.5 py-1 rounded-lg">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State for MA and CT (Fallback if needed, though they now have reviews!) */
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#ff572210] text-[#ff5722] flex items-center justify-center mx-auto mb-5">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-2">
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
            aria-label={isSpanish ? "Dejar una reseña sobre New Era en Google" : "Leave a review for New Era on Google"}
            className="inline-flex items-center justify-center bg-[#14324b] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#14324b]/95 transition-all"
          >
            {isSpanish ? "Dejar una Reseña en Google" : "Leave a Google Review"}
          </a>
        </div>
      )}

      {/* Disclosure note */}
      <div className="mt-8 bg-[#F5F7FA] border border-[#E2E8F0] rounded-2xl p-5 text-sm text-[#5F6F75] font-sans leading-relaxed">
        {isSpanish ? (
          <>
            Comentarios reales publicados por clientes en el Perfil de Empresa de Google de New Era Solar Energy.
          </>
        ) : (
          <>
            Real feedback published by customers on the New Era Solar Energy Google Business Profile.
          </>
        )}
      </div>
    </div>
  );
}

