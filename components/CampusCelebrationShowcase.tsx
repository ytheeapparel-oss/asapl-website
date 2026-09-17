"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, Heart, Sun, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function CampusCelebrationShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Cultural Heritage & Campus Joy"
          badgeColor="sunshine"
          title="Living Traditions & Creative Celebrations"
          highlightWord="Traditions"
          highlightColor="text-coral-500"
          subtitle="At ASPAL International, Sector 55, Noida, cultural festivals foster moral values, creative artistic pride, and joyous teamwork."
        />

        {/* Full Length & Breadth Image Showcase - 100% Clean & Clear (Zero Black Shade) */}
        <div className="mt-12 relative w-full h-[520px] sm:h-[680px] lg:h-[820px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
          <Image
            src="/images/about-festive-kids.jpg"
            alt="ASPAL International students celebrating cultural heritage with handcrafted Navratri artwork in Sector 55 Noida"
            fill
            priority
            sizes="(max-width: 1720px) 100vw, 1720px"
            className="w-full h-full object-cover object-center opacity-100 transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Top Floating Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-800 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-sunshine-600 animate-pulse" />
            <span>Campus Cultural Day • Sector 55, Noida</span>
          </div>

          {/* Top Right Zoom Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-800 text-xs sm:text-sm font-bold transition-all transform hover:scale-105"
            title="View Full High-Resolution Photo"
          >
            <Maximize2 className="w-4 h-4 text-coral-600" />
            <span className="hidden sm:inline">View Full Photo</span>
          </button>

          {/* Bottom Floating Information Card (Clean White Glass) */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
                Festive Discovery & Character Building
              </span>
              <h4 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                Children Celebrating Cultural Roots with Handcrafted Navratri Artwork
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
                Students stand proudly with their collaborative classroom display depicting the nine forms of divine strength, wisdom, and kindness.
              </p>
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={() => setIsOpen(true)}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-sm transition-colors"
              >
                Expand Photo ↗
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Photo Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/20 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md transition-colors border border-white/20"
              aria-label="Close photo modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src="/images/about-festive-kids.jpg"
                alt="ASPAL International students celebrate Navratri with handcrafted art in Sector 55 Noida"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            <div className="p-4 text-center">
              <h4 className="font-heading text-lg font-bold text-white">
                Handcrafted Navratri Bulletin Board Display • ASPAL International
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Sector 55, Noida campus — Celebrating unity, creativity, and cultural devotion.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
