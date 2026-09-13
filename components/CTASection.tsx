import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Phone, ArrowRight, Sun, Heart } from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonPrimaryText?: string;
  buttonPrimaryLink?: string;
  buttonSecondaryText?: string;
  buttonSecondaryLink?: string;
}

export default function CTASection({
  title = "Ready to Begin Their Learning Adventure?",
  subtitle = "Experience the joy, care, and colorful discovery of ASAPL International. Schedule a campus tour or inquire for 2025-26 admissions today.",
  buttonPrimaryText = "Enquire for Admission",
  buttonPrimaryLink = "/admissions#enquiry-form",
  buttonSecondaryText = "Schedule a School Visit",
  buttonSecondaryLink = "/contact-us#visit-campus",
}: CTASectionProps) {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-r from-coral-500 via-coral-600 to-amber-500 text-white overflow-hidden">
      
      {/* Decorative background doodles and glowing orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sunshine-300/20 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>
      
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
        
        {/* Playful Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-sm">
          <Sun className="w-4 h-4 text-sunshine-300 animate-spin" style={{ animationDuration: '15s' }} />
          <span>Sector 55, Noida • Admissions Open 2025–26</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonPrimaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-5 h-5 mr-2 text-slate-900" />
            {buttonPrimaryText}
          </Link>

          <Link
            href={buttonSecondaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <Calendar className="w-5 h-5 mr-2 text-sunshine-200" />
            {buttonSecondaryText}
          </Link>
        </div>

        {/* Direct Phone Call Reminder */}
        <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-white/80">
          <span>Prefer speaking directly with an admissions advisor?</span>
          <a
            href={`tel:${SCHOOL_DATA.phone}`}
            className="font-bold underline text-white hover:text-sunshine-200 flex items-center"
          >
            <Phone className="w-3 h-3 mr-1 inline" />
            {SCHOOL_DATA.displayPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
