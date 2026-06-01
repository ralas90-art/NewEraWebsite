'use client';

import React, { useState } from 'react';
import { Star, AlertTriangle } from 'lucide-react';

type StateFilter = 'All' | 'Florida' | 'Massachusetts' | 'Connecticut';

const TABS: StateFilter[] = ['All', 'Florida', 'Massachusetts', 'Connecticut'];

const PLACEHOLDER_REVIEWS = [
  { state: 'Florida' as StateFilter },
  { state: 'Florida' as StateFilter },
  { state: 'Massachusetts' as StateFilter },
  { state: 'Massachusetts' as StateFilter },
  { state: 'Connecticut' as StateFilter },
  { state: 'Connecticut' as StateFilter },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FF8A3D] text-[#FF8A3D]" />
      ))}
    </div>
  );
}

function PlaceholderCard({ state }: { state: StateFilter }) {
  return (
    <div className="bg-white border border-[#E6EDF2] rounded-3xl p-6 md:p-8 flex flex-col shadow-sm">
      {/* Amber warning badge */}
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
          ⚠️ Verified Review Placeholder — Awaiting Client-Provided Google Reviews
        </span>
      </div>
      <StarRow />
      <p className="text-[#5F6F75] text-sm leading-relaxed mb-6 flex-grow italic font-sans">
        This review space is reserved for a verified Google review. Actual customer testimonials will be displayed here after verification.
      </p>
      <div className="border-t border-[#E6EDF2] pt-4 mt-auto">
        <span className="font-bold text-[#123B5D] text-sm block font-poppins">Homeowner — {state}</span>
        <span className="text-xs text-[#5F6F75] uppercase tracking-wider font-bold block mt-1">
          {state} Resident
        </span>
      </div>
    </div>
  );
}

export function ReviewTabs() {
  const [activeTab, setActiveTab] = useState<StateFilter>('All');

  const visible = activeTab === 'All'
    ? PLACEHOLDER_REVIEWS
    : PLACEHOLDER_REVIEWS.filter(r => r.state === activeTab);

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl font-poppins font-bold text-sm transition-all ${
              activeTab === tab
                ? 'bg-[#123B5D] text-white shadow-sm'
                : 'bg-white border border-[#E6EDF2] text-[#5F6F75] hover:border-[#123B5D] hover:text-[#123B5D]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((review, idx) => (
          <PlaceholderCard key={idx} state={review.state} />
        ))}
      </div>

      {/* Disclosure note */}
      <div className="mt-8 bg-[#F5F7FA] border border-[#E6EDF2] rounded-2xl p-5 text-sm text-[#5F6F75] font-sans leading-relaxed">
        <strong className="text-[#123B5D]">Editorial Note:</strong> Real customer reviews from Google will replace these placeholders prior to launch. We do not publish or fabricate unverified testimonials.
      </div>
    </div>
  );
}
