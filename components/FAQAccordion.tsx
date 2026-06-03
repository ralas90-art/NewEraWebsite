'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e5e5e5] rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:bg-[#F5F7FA] hover:bg-[#F5F7FA] transition-colors"
      >
        <span className="font-poppins font-bold text-base md:text-lg text-newera-dark-gray pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#ff5722] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#5F6F75] text-sm md:text-base leading-relaxed font-sans border-t border-[#e5e5e5] pt-4 mt-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion({ items, title = 'Frequently Asked Questions', subtitle }: FAQAccordionProps) {
  return (
    <section className="py-12 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block">
          Have Questions?
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">{title}</h2>
        {subtitle && (
          <p className="text-[#5F6F75] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
            {subtitle}
          </p>
        )}
      </div>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <FAQRow key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
