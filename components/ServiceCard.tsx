'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText?: string;
  icon?: string;
  isPrimary?: boolean;
  category?: string;
  onClick?: () => void;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  buttonText,
  icon,
  isPrimary = false,
  category = "Support Service",
  onClick,
  index = 0
}: ServiceCardProps) {
  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: index * 0.15 }
  };

  if (isPrimary) {
    return (
      <motion.div 
        {...motionProps}
        onClick={onClick}
        className="bg-newera-dark-blue text-white rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between border-b-4 border-[#ff5722] hover:translate-y-[-2px] transition-transform cursor-pointer gap-4 min-h-[140px] h-full"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-1">{category}</span>
          <h4 className="font-poppins font-bold text-xl md:text-2xl">{title}</h4>
          <span className="text-xs opacity-80 mt-2 font-sans">{description}</span>
          {buttonText && (
            <button className="mt-4 bg-[#ff5722] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider w-fit hover:bg-[#e04a1b] transition-colors">
              {buttonText}
            </button>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl md:text-3xl shrink-0">
            {icon}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      {...motionProps}
      onClick={onClick}
      className="bg-white border border-[#e5e5e5] rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-[#082fa3] hover:shadow-md transition-all cursor-pointer group gap-4 min-h-[140px] h-full"
    >
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase text-[#5F6F75] tracking-widest mb-1 group-hover:text-[#082fa3] transition-colors">{category}</span>
        <h4 className="font-poppins font-bold text-xl md:text-2xl text-newera-dark-gray">{title}</h4>
        <span className="text-xs text-[#5F6F75] mt-2 font-sans">{description}</span>
        {buttonText && (
          <button className="mt-4 bg-[#F5F7FA] text-newera-dark-gray border border-[#e5e5e5] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider w-fit group-hover:border-[#082fa3] transition-colors">
            {buttonText}
          </button>
        )}
      </div>
      {icon && (
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#5F6F75] group-hover:bg-[#082fa3]/10 group-hover:text-[#082fa3] transition-colors shrink-0">
          {icon}
        </div>
      )}
    </motion.div>
  );
}
