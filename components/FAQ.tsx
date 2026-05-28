'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E6EDF2] rounded-2xl bg-white overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:bg-[#F5F7FA] hover:bg-[#F5F7FA] transition-colors"
      >
        <span className="font-poppins font-bold text-base md:text-lg text-[#123B5D] pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#FF8A3D] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#5F6F75] text-sm md:text-base leading-relaxed font-sans border-t border-[#E6EDF2] pt-4 mt-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "How long does a typical solar installation take?",
      answer: "A standard residential solar installation typically takes 1 to 3 days to complete the physical work. However, the entire process—including site assessment, permitting, and final utility interconnection—usually takes between 4 to 8 weeks depending on local regulations and HOA approvals."
    },
    {
      question: "Will installing solar panels damage my roof?",
      answer: "No, a professional solar installation will not damage your roof. In fact, panels can protect the portion of the roof they cover from weather and sun damage. If your roof is older and requires replacement soon, we offer comprehensive roofing services to coordinate both upgrades seamlessly."
    },
    {
      question: "What maintenance is required for a solar energy system?",
      answer: "Solar panel systems require very little maintenance. Since there are no moving parts, the primary upkeep is simply keeping them clean from significant dirt or debris. Rainfall usually handles the cleaning in Florida, but an annual professional cleaning and inspection is recommended to ensure maximum efficiency."
    },
    {
      question: "Do solar panels still work during a power outage or at night?",
      answer: "Standard grid-tied solar panels do not provide power during a grid outage for safety reasons, and they do not generate power at night. However, if you pair your solar system with a battery backup solution, you can store excess daytime energy to power your home during the night or when the grid goes down."
    }
  ];

  return (
    <section className="mt-8 mb-16 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-1 block">Learn More</span>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">Frequently Asked Questions</h2>
        <p className="text-[#5F6F75] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
          Find answers to common questions about switching to solar energy and improving your home.
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
