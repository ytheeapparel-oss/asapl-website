"use client";

import React from "react";

export default function PlayfulDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      
      {/* 1. Animated Smiling Sun (Top Left) */}
      <div className="absolute -top-6 -left-6 sm:top-4 sm:left-8 animate-float">
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-sunshine-400 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rotating Sun Rays */}
          <g className="animate-spin" style={{ animationDuration: '30s', transformOrigin: '50% 50%' }}>
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="10"
                x2="50"
                y2="2"
                stroke="#FFB703"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </g>
          {/* Sun Center */}
          <circle cx="50" cy="50" r="26" fill="#FFB703" />
          {/* Happy Eyes */}
          <circle cx="42" cy="46" r="3" fill="#8D4900" />
          <circle cx="58" cy="46" r="3" fill="#8D4900" />
          {/* Cheerful Smile */}
          <path
            d="M40 54 Q 50 64 60 54"
            stroke="#8D4900"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 2. Floating Paper Airplane with Dashed Flight Path */}
      <div className="hidden lg:block absolute top-12 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <svg className="w-48 h-24 overflow-visible" viewBox="0 0 160 80">
          <path
            d="M 10 70 Q 70 10 140 20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
          {/* Airplane */}
          <g transform="translate(136, 14) rotate(15)">
            <polygon points="0,0 24,8 4,14 10,22 14,14" fill="#FF6B6B" />
            <polygon points="0,0 24,8 14,14" fill="#FF8585" />
          </g>
        </svg>
      </div>

      {/* 3. Floating Colorful Rainbow (Top Right) */}
      <div className="hidden md:block absolute top-6 right-16 sm:right-32 animate-float-reverse">
        <svg className="w-20 h-14" viewBox="0 0 80 50">
          <path d="M 10 45 A 30 30 0 0 1 70 45" fill="none" stroke="#FF6B6B" strokeWidth="4" />
          <path d="M 16 45 A 24 24 0 0 1 64 45" fill="none" stroke="#FFB703" strokeWidth="4" />
          <path d="M 22 45 A 18 18 0 0 1 58 45" fill="none" stroke="#06D6A0" strokeWidth="4" />
          <path d="M 28 45 A 12 12 0 0 1 52 45" fill="none" stroke="#3A86FF" strokeWidth="4" />
        </svg>
      </div>

      {/* 4. Cute Little School Bus (Bottom Left) */}
      <div className="hidden xl:block absolute bottom-16 left-8 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-lg border-2 border-sunshine-300">
          <svg className="w-8 h-8 text-sunshine-500" viewBox="0 0 64 64" fill="currentColor">
            <rect x="8" y="16" width="48" height="28" rx="6" fill="#FFB703" />
            <rect x="12" y="22" width="10" height="10" rx="2" fill="#E0F2FE" />
            <rect x="26" y="22" width="10" height="10" rx="2" fill="#E0F2FE" />
            <rect x="40" y="22" width="12" height="10" rx="2" fill="#E0F2FE" />
            <circle cx="18" cy="46" r="6" fill="#1E293B" />
            <circle cx="18" cy="46" r="2.5" fill="#E2E8F0" />
            <circle cx="46" cy="46" r="6" fill="#1E293B" />
            <circle cx="46" cy="46" r="2.5" fill="#E2E8F0" />
          </svg>
          <div>
            <p className="text-[11px] font-black text-slate-900 leading-none">GPS School Bus</p>
            <p className="text-[9px] font-bold text-mint-600">Safe Sector 55 Routes</p>
          </div>
        </div>
      </div>

      {/* 5. Crayon & Creativity Badge (Bottom Right) */}
      <div className="hidden lg:block absolute bottom-20 right-8 animate-float-reverse" style={{ animationDelay: '1.8s' }}>
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-lg border-2 border-coral-200">
          <span className="text-xl">🎨</span>
          <div>
            <p className="text-[11px] font-black text-slate-900 leading-none">Creative Studio</p>
            <p className="text-[9px] font-bold text-coral-600">Art, Clay & Phonics</p>
          </div>
        </div>
      </div>

      {/* 6. Twinkling Colorful Stars */}
      <div className="absolute top-28 left-1/4 animate-pulse opacity-80">
        <span className="text-sunshine-400 text-lg">★</span>
      </div>
      <div className="absolute bottom-36 right-1/3 animate-pulse opacity-70" style={{ animationDelay: '1.2s' }}>
        <span className="text-coral-400 text-base">★</span>
      </div>
      <div className="absolute top-40 right-1/4 animate-pulse opacity-80" style={{ animationDelay: '0.8s' }}>
        <span className="text-mint-400 text-xl">★</span>
      </div>

    </div>
  );
}
