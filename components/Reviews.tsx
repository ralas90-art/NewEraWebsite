import React from 'react';
import { Star } from 'lucide-react';

const VERIFIED_REVIEWS = [
  {
    name: 'Christian Casco',
    rating: 5,
    text: 'Highly Recommend New Era Solar! 🌟 We had our 26 solar panels installed by New Era Solar this week at our home on Ashville Lane, and we couldn’t be happier with the entire experience! From start to finish, the process was super fast, professional, and hassle-free. What impressed us the most was the unbeatable pricing—they came in almost $20,000 cheaper than any other solar company we looked at! Plus, there was absolutely no pressure to buy.',
    location: 'Florida Resident',
    tag: 'Solar Installation',
  },
  {
    name: 'Jack Tunstill',
    rating: 5,
    text: 'Rudy did a great job to explain where New Era was going to provide me with more power at less cost from their panels compared to a competitor. I have 30 panels on my roof installed previously in 2017. They will be incorporated to supply more solar power to my home. I felt no pressure to complete the deal with Rudy.',
    location: 'Florida Resident',
    tag: 'Solar Integration',
  },
  {
    name: 'Tereca Dwinell',
    rating: 5,
    text: 'Great experience with Ruben and Boris who installed 2 ceiling fans in my home. Communication was clear and prompt setting up the job. On the scheduled day, I was given a text update about the arrival time, as well as a follow up at completion. Everything was very courteous and professional. Plan on using them again for my next home project. Highly recommend!',
    location: 'Florida Resident',
    tag: 'Electrical Services',
  }
];

export function Reviews() {
  return (
    <section className="mt-8 mb-6">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
        <div>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">What Homeowners Say</h2>
          <p className="text-[#5F6F75] text-sm mt-2 font-sans">Verified customer experiences from Google Reviews.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#ff572215] border border-[#ff572230] px-4 py-2 rounded-2xl">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-newera-orange text-newera-orange" />
            ))}
          </div>
          <span className="text-xs font-bold text-newera-dark-gray font-poppins">
            5.0 Rating on Google
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VERIFIED_REVIEWS.map((review, idx) => (
          <div key={idx} className="bg-white border border-[#e5e5e5] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="flex gap-0.5 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-newera-orange text-newera-orange" />
              ))}
            </div>
            <p className="text-[#5F6F75] text-sm leading-relaxed mb-6 flex-grow italic font-sans">
              "{review.text}"
            </p>
            <div className="border-t border-[#e5e5e5] pt-5 mt-auto flex items-center justify-between">
              <div>
                <span className="font-bold text-newera-dark-gray text-sm block font-poppins">{review.name}</span>
                <span className="text-xs text-[#5F6F75] font-semibold font-sans mt-0.5 block">{review.location}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide text-newera-orange bg-[#ff572210] px-2.5 py-1 rounded-lg">
                {review.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
