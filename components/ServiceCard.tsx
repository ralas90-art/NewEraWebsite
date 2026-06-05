'use client';

import React from 'react';
import { Sun, Home, Droplets, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  isPrimary?: boolean;
  icon?: string;
  onClick?: () => void;
  index?: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  solar: Sun,
  roofing: Home,
  water: Droplets,
};

function getIconComponent(icon?: string): React.ElementType {
  if (!icon) return Sun;
  const lower = icon.toLowerCase();
  if (lower.includes('roof') || lower.includes('house') || lower === '\uD83C\uDFE0') return Home;
  if (lower.includes('water') || lower.includes('drop') || lower === '\uD83D\uDCA7') return Droplets;
  return Sun;
}

export function ServiceCard({ title, description, category, isPrimary = false, icon, onClick, index = 0 }: ServiceCardProps) {
  const Icon = getIconComponent(icon);

  return (
    <button
      onClick={onClick}
      className={`group relative bg-white rounded-2xl border text-left p-6 transition-all duration-300 cursor-pointer w-full hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] ${
        isPrimary
          ? 'border-l-4 border-l-[#ff5722] border-t border-r border-b border-t-[#E2E8F0] border-r-[#E2E8F0] border-b-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]'
          : 'border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]'
      }`}
    >
      {/* Category Badge */}
      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full ${
        isPrimary
          ? 'bg-[#ff5722]/10 text-[#ff5722]'
          : 'bg-[#F5F7FA] text-[#6B7280]'
      }`}>
        {category}
      </span>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        isPrimary ? 'bg-[#ff5722]/10' : 'bg-[#F5F7FA]'
      }`}>
        <Icon className={`w-6 h-6 ${isPrimary ? 'text-[#ff5722]' : 'text-[#14324b]'}`} />
      </div>

      {/* Content */}
      <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-2 group-hover:text-[#ff5722] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#4e5257] font-sans leading-relaxed mb-4">
        {description}
      </p>

      {/* Arrow */}
      <div className="flex items-center gap-1 text-[#ff5722] text-sm font-semibold font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
