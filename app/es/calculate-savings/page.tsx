import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Solar Instantáneo y Estimación de Ahorros | New Era Solar Energy',
  description:
    'Diseñe su sistema solar personalizado para el hogar y estime sus ahorros mensuales al instante con el calculador interactivo Artemis de New Era Solar Energy.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/calculate-savings',
    languages: {
      'en': 'https://newerasolarenergy.com/calculate-savings',
      'es': 'https://newerasolarenergy.com/es/calculate-savings',
    },
  },
};

export default function SpanishCalculateSavingsPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF9] py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
        {/* Header/Title */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
            Diseño Solar Artemis
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-[#14324b] mb-4">
            Calculadora Instantánea de Ahorro Solar
          </h1>
          <p className="text-[#4e5257] font-sans max-w-xl mx-auto text-base leading-relaxed">
            Ingrese su dirección a continuación para generar instantáneamente un diseño de sistema solar 3D personalizado, estimar su ahorro eléctrico mensual y agendar una llamada.
          </p>
        </div>

        {/* Artemis Inline Container */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div id="artemis-inline" className="w-full min-h-[700px] flex items-center justify-center text-sm font-sans text-[#6B7280]">
            Cargando calculadora solar interactiva...
          </div>
        </div>

        {/* Secure & Private Reassurance */}
        <div className="text-center mt-6 text-xs text-[#9CA3AF] font-sans flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
          Su información está segura y conectada directamente con el CRM de New Era Solar.
        </div>
      </div>
    </main>
  );
}
