'use client';

import { LeadForm } from '@/components/LeadForm';
import { usePathname } from 'next/navigation';

export function ContactLeadForm() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  return (
    <div>
      <h2 className="font-poppins font-bold text-2xl text-[#14324b] mb-6">
        {isSpanish ? 'Solicita tu Evaluación Gratis' : 'Schedule Your Free Assessment'}
      </h2>
      <LeadForm />
    </div>
  );
}

