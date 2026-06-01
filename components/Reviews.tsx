import React from 'react';

export function Reviews() {
  return (
    <section className="mt-8 mb-6">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
        <div>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">What Homeowners Say</h2>
          <p className="text-[#5F6F75] text-sm mt-2 font-sans">Verified customer reviews.</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A3D] bg-[#FFE1C7]/30 px-3 py-1 rounded-full">
          Final reviews to be added after client provides approved testimonials.
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="bg-white border border-[#E6EDF2] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm">
            <p className="text-[#5F6F75] text-base leading-relaxed mb-8 flex-grow italic font-sans">
              Testimonial Placeholder. Approved client reviews will be integrated here prior to production launch.
            </p>
            <div className="border-t border-[#E6EDF2] pt-5 mt-auto">
              <span className="font-bold text-[#123B5D] text-sm block font-poppins">Customer Testimonial</span>
              <span className="text-xs text-[#5F6F75] uppercase tracking-wider font-bold block mt-1">Florida Resident</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


