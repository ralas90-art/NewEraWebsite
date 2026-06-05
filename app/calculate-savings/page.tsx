import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Solar Savings Design & Estimate | New Era Solar Energy',
  description:
    'Design your custom home solar system and estimate your monthly savings instantly with the New Era Solar Energy interactive Artemis calculator.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/calculate-savings',
    languages: {
      'en': 'https://newerasolarenergy.com/calculate-savings',
      'es': 'https://newerasolarenergy.com/es/calculate-savings',
    },
  },
};

export default function CalculateSavingsPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF9] py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
        {/* Header/Title */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
            Artemis Solar Design
          </span>
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-[#14324b] mb-4">
            Instant Solar Savings Calculator
          </h1>
          <p className="text-[#4e5257] font-sans max-w-xl mx-auto text-base leading-relaxed">
            Enter your address below to instantly generate a custom 3D solar system design, estimate your monthly electricity savings, and connect with our team.
          </p>
        </div>

        {/* Artemis Inline Container */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div id="artemis-inline" className="w-full min-h-[700px] flex items-center justify-center text-sm font-sans text-[#6B7280]">
            Loading interactive solar calculator...
          </div>
        </div>

        {/* Secure & Private Reassurance */}
        <div className="text-center mt-6 text-xs text-[#9CA3AF] font-sans flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
          Your information is secure and directly connected to the New Era Solar CRM.
        </div>
      </div>
    </main>
  );
}
