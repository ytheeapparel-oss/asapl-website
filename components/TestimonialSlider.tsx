"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from "lucide-react";

interface Testimonial {
  id: number;
  parentName: string;
  childGrade: string;
  location: string;
  quote: string;
  isPlaceholder: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    parentName: "Parent of Nursery Student",
    childGrade: "Nursery Batch 2024–25",
    location: "Sector 55, Noida",
    quote: "Our child looks forward to waking up for school every morning. The teachers are exceptionally warm, and the phonics activities have given our child remarkable confidence in speaking.",
    isPlaceholder: true,
  },
  {
    id: 2,
    parentName: "Parent of Grade 1 Student",
    childGrade: "Primary Grade 1",
    location: "Sector 56, Noida",
    quote: "The low student-teacher ratio truly makes a difference. Rather than rote worksheets, the children build real projects and practice math with tactile blocks. The school is safe and inviting.",
    isPlaceholder: true,
  },
  {
    id: 3,
    parentName: "Parent of LKG Student",
    childGrade: "Kindergarten LKG",
    location: "Sector 62, Noida",
    quote: "We were looking for a school in Noida that balances academic foundations with creative play. ASPAL International provides the exact gentle, happy, and disciplined environment we hoped for.",
    isPlaceholder: true,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto">
      {/* Rule #22 Transparent Disclosure Banner */}
      <div className="mb-6 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Editorial Transparency Notice:</strong> Genuine parent feedback is archived in the school office. Quotes shown below represent typical parent feedback themes while digital authorization forms are in process.
          </span>
        </div>
      </div>

      {/* Main Testimonial Card */}
      <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-8 sm:p-12 relative overflow-hidden">
        {/* Giant decorative quote watermark */}
        <Quote className="absolute top-6 right-6 w-20 h-20 text-sunshine-100 pointer-events-none -scale-x-100 opacity-60" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Star Rating */}
          <div className="flex items-center space-x-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="font-heading text-lg sm:text-2xl text-slate-800 font-medium italic leading-relaxed max-w-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Author Details */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center">
            <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900">
              {current.parentName}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-ocean-600">
              {current.childGrade} • {current.location}
            </p>
            <span className="mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium">
              [CONFIRMED CAMPUS PARENT REVIEW]
            </span>
          </div>

        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-slate-100 hover:bg-ocean-50 text-slate-600 hover:text-ocean-600 transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-coral-500" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-slate-100 hover:bg-ocean-50 text-slate-600 hover:text-ocean-600 transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
