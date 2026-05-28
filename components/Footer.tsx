import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#123B5D] px-8 py-8 md:py-10 mt-auto flex flex-col gap-8 text-[#F5F7FA]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <div className="w-10 h-10 bg-[#FF8A3D] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
              N
            </div>
            <div className="flex flex-col text-left">
              <span className="font-poppins font-bold text-base leading-tight uppercase tracking-tight">New Era</span>
              <span className="text-[9px] text-[#5EC8E5] font-semibold uppercase tracking-[0.2em]">Solar Energy</span>
            </div>
          </div>
          
          <div className="hidden md:block h-8 w-[1px] bg-white/20"></div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a href="#" className="text-sm font-sans font-medium text-white/80 hover:text-[#5EC8E5] transition-colors">For Solar Professionals</a>
            <a href="#" className="text-sm font-sans font-medium text-white/80 hover:text-[#5EC8E5] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-sans font-medium text-white/80 hover:text-[#5EC8E5] transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#5EC8E5] hover:text-white transition-colors">
            English / Español
          </a>
          <div className="flex gap-3 mt-1">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-sans font-bold hover:bg-[#FF8A3D] hover:text-white transition-colors">f</a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm font-sans font-bold hover:bg-[#FF8A3D] hover:text-white transition-colors">in</a>
          </div>
        </div>
      </div>
      
      <div className="text-center w-full max-w-6xl mx-auto border-t border-white/10 pt-6">
        <span className="text-sm font-sans text-white/50">© {new Date().getFullYear()} New Era Solar Energy. All rights reserved.</span>
      </div>
    </footer>
  );
}
