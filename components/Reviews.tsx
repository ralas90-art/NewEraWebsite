import React from 'react';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "John D.",
      location: "Miami, FL",
      text: "This is a placeholder review to demonstrate the layout. The actual review text will go here and highlight the great service.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      location: "Orlando, FL",
      text: "Another example review text. It shows how a customer's positive experience with the solar installation process would look on the site.",
      rating: 5,
    },
    {
      name: "Michael T.",
      location: "Tampa, FL",
      text: "A third placeholder review. This helps visualize the grid layout and ensures the typography and spacing look consistent and aligned.",
      rating: 5,
    }
  ];

  return (
    <section className="mt-8 mb-6">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
        <div>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">What Homeowners Say</h2>
          <p className="text-[#5F6F75] text-sm mt-2 font-sans">Real experiences from Florida residents.</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A3D] bg-[#FFE1C7]/30 px-3 py-1 rounded-full">
          Demonstration Only
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white border border-[#E6EDF2] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF8A3D] text-[#FF8A3D]" />
              ))}
            </div>
            <p className="text-[#123B5D] text-base leading-relaxed mb-8 flex-grow italic font-sans overflow-hidden">
              &quot;{review.text}&quot;
            </p>
            <div className="border-t border-[#E6EDF2] pt-5 mt-auto">
              <span className="font-bold text-[#123B5D] text-sm block font-poppins">{review.name}</span>
              <span className="text-xs text-[#5F6F75] uppercase tracking-wider font-bold block mt-1">{review.location}</span>
              <span className="text-[10px] text-[#5EC8E5] font-bold uppercase tracking-widest mt-2 block">Example / Placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
