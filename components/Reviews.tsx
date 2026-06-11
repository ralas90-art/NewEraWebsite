import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface ReviewsProps {
  locale?: 'en' | 'es';
}

const VERIFIED_REVIEWS = {
  en: [
    {
      name: 'Christian Casco',
      initials: 'CC',
      color: 'bg-[#ff5722]',
      rating: 5,
      text: 'Highly Recommend New Era Solar! We had our 26 solar panels installed by New Era Solar this week at our home on Ashville Lane, and we couldn’t be happier with the entire experience! From start to finish, the process was super fast, professional, and hassle-free. What impressed us the most was the unbeatable pricing—they came in almost $20,000 cheaper than any other solar company we looked at! Plus, there was absolutely no pressure to buy.',
      location: 'Orlando, FL',
      tag: 'Solar Installation',
    },
    {
      name: 'Jack Tunstill',
      initials: 'JT',
      color: 'bg-[#082fa3]',
      rating: 5,
      text: 'Rudy did a great job to explain where New Era was going to provide me with more power at less cost from their panels compared to a competitor. I have 30 panels on my roof installed previously in 2017. They will be incorporated to supply more solar power to my home. I felt no pressure to complete the deal with Rudy.',
      location: 'Tampa, FL',
      tag: 'Solar Integration',
    },
    {
      name: 'Sofia Romero',
      initials: 'SR',
      color: 'bg-green-600',
      rating: 5,
      text: 'All went as planned and all the team were punctual and worked with a high standard! Thank you! Highly recommended!!',
      location: 'Boston, MA',
      tag: 'Solar Installation',
    },
    {
      name: 'Deborah Kent',
      initials: 'DK',
      color: 'bg-purple-600',
      rating: 5,
      text: 'They were very polite and answered any questions that we had. They cleaned up all of their mess. Those guys are very hard workers. Thanks again guys, you are awesome!',
      location: 'Hartford, CT',
      tag: 'Solar Installation',
    }
  ],
  es: [
    {
      name: 'Christian Casco',
      initials: 'CC',
      color: 'bg-[#ff5722]',
      rating: 5,
      text: '¡Recomiendo ampliamente a New Era Solar! Instalaron nuestros 26 paneles solares esta semana en nuestra casa en Ashville Lane y no podríamos estar más felices con toda la experiencia. De principio a fin, el proceso fue súper rápido, profesional y sin complicaciones. Lo que más nos impresionó fue el precio inmejorable: ¡fueron casi $20,000 más baratos que cualquier otra empresa de energía solar que vimos! Además, no hubo absolutamente ninguna presión para comprar.',
      location: 'Orlando, FL',
      tag: 'Instalación Solar',
    },
    {
      name: 'Jack Tunstill',
      initials: 'JT',
      color: 'bg-[#082fa3]',
      rating: 5,
      text: 'Rudy hizo un gran trabajo explicando que New Era me proporcionaría más energía a un menor costo con sus paneles en comparación con un competidor. Tengo 30 paneles en mi techo instalados anteriormente en 2017. Se incorporarán para suministrar más energía solar a mi hogar. No sentí ninguna presión para completar el trato con Rudy.',
      location: 'Tampa, FL',
      tag: 'Integración Solar',
    },
    {
      name: 'Sofia Romero',
      initials: 'SR',
      color: 'bg-green-600',
      rating: 5,
      text: '¡Todo salió según lo planeado y todo el equipo fue puntual y trabajó con un alto estándar! ¡Gracias! ¡Muy recomendado!',
      location: 'Boston, MA',
      tag: 'Instalación Solar',
    },
    {
      name: 'Deborah Kent',
      initials: 'DK',
      color: 'bg-purple-600',
      rating: 5,
      text: 'Fueron muy amables y respondieron a todas nuestras preguntas. Limpiaron todo su desorden. Esos muchachos son muy trabajadores. ¡Gracias de nuevo, son increíbles!',
      location: 'Hartford, CT',
      tag: 'Instalación Solar',
    }
  ]
};

export function Reviews({ locale = 'en' }: ReviewsProps) {
  const isSpanish = locale === 'es';
  const reviews = isSpanish ? VERIFIED_REVIEWS.es : VERIFIED_REVIEWS.en;

  return (
    <section className="mt-8 mb-6">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block font-poppins">
            {isSpanish ? "Rese\u00f1as de Clientes" : "Customer Reviews"}
          </span>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
            {isSpanish ? "Lo Que Dicen los Propietarios" : "What Homeowners Say"}
          </h2>
          <p className="text-[#4e5257] text-xs mt-2 font-sans leading-relaxed">
            {isSpanish 
              ? "Comentarios reales publicados por clientes en el Perfil de Empresa de Google de New Era Solar Energy." 
              : "Real feedback published by customers on the New Era Solar Energy Google Business Profile."}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#ff5722]/5 border border-[#ff5722]/15 px-4 py-2 rounded-2xl">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#14324b] font-poppins">
            {isSpanish ? "Calificaci\u00f3n de 5.0 en Google" : "5.0 Rating on Google"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3" />
                {isSpanish ? 'Rese\u00f1a de Google' : 'Google Review'}
              </span>
            </div>
            <p className="text-[#4e5257] text-sm leading-relaxed mb-6 flex-grow italic font-sans">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="border-t border-[#E2E8F0] pt-5 mt-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {review.initials}
                </div>
                <div>
                  <span className="font-bold text-[#14324b] text-sm block font-poppins">{review.name}</span>
                  <span className="text-xs text-[#6B7280] font-sans mt-0.5 block">{review.location}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#ff5722] bg-[#ff5722]/5 px-2.5 py-1 rounded-lg">
                {review.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


