"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Phone, Heart, Maximize2, X, Sun } from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

export default function ParentingPartnerShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[78vh] lg:min-h-[88vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 py-16 sm:py-24 lg:py-28">
      
      {/* 1. Full Length & Breadth Background Image - 100% CLEAN, BRIGHT & CLEAR (ZERO BLACK SHADE) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/happy-parenting-family.jpg"
          alt="Indian parents walking joyfully hand-in-hand with their primary school daughter at ASPAL International campus in Sector 55 Noida"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>

      {/* 2. Top Floating Badge & View Full Photo Button */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold shadow-md">
          <Heart className="w-4 h-4 text-coral-600 fill-coral-500" />
          <span>Parent-School Partnership • Sector 55, Noida</span>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold shadow-md transition-all transform hover:scale-105"
          title="View Full High-Resolution Photo"
        >
          <Maximize2 className="w-4 h-4 text-coral-600" />
          <span className="hidden sm:inline">View Full Photo</span>
        </button>
      </div>

      {/* 3. Central Content in Clean, Bright Frosted Glass Card (NO BLACK SHADING) */}
      <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10">
        <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-sunshine-50 border border-sunshine-200 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-5">
            <Sun className="w-4 h-4 text-sunshine-600" />
            <span className="uppercase tracking-wider font-extrabold text-amber-900">
              Family-Centered Education • Open Communication
            </span>
            <span className="text-amber-300">•</span>
            <span className="text-amber-900">Sector 55, Noida</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Looking for a{" "}
            <span className="bg-gradient-to-r from-sunshine-600 via-coral-500 to-bubblegum-500 bg-clip-text text-transparent">
              School Partner
            </span>{" "}
            for Your Child?
          </h2>

          <p className="mt-5 text-base sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            At ASPAL International, teachers and parents work hand-in-hand to nurture confident, happy, and resilient young learners. Experience our warm, supportive campus in Sector 55, Noida.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact-us#visit-campus"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-5 h-5 mr-2 text-slate-900" />
              Schedule a School Visit
            </Link>

            <Link
              href="/admissions#enquiry-form"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all shadow-md"
            >
              <Sparkles className="w-5 h-5 mr-2 text-coral-600" />
              Inquire for Admissions
            </Link>
          </div>

          {/* Direct Phone Call Assistance */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-slate-500">
            <span>Speak directly with our family admissions coordinator:</span>
            <a
              href={`tel:${SCHOOL_DATA.phone}`}
              className="font-bold underline text-ocean-600 hover:text-ocean-700 flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1 inline" />
              {SCHOOL_DATA.displayPhone}
            </a>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Curved Edge */}
      <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream curved-edge-bottom pointer-events-none"></div>

      {/* 4. Full-Screen High Resolution Photo Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/20 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md transition-colors border border-white/20"
              aria-label="Close photo modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src="/images/happy-parenting-family.jpg"
                alt="Happy Indian parents and daughter walking through school campus in Sector 55 Noida"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            <div className="p-4 text-center">
              <h4 className="font-heading text-lg font-bold text-white">
                Happy Parenting & Family Partnership • ASPAL International
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Sector 55, Noida — Building trust, nurturing curiosity, and working together with parents for every child’s success.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
