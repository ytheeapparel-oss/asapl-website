"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Music, 
  Baby, 
  GraduationCap, 
  ShieldCheck,
  Compass
} from "lucide-react";
import { CAMPUSES_DATA, CampusInfo } from "@/data/school-data";

export default function CampusDirectory() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCampuses = activeTab === "all" 
    ? CAMPUSES_DATA 
    : CAMPUSES_DATA.filter((c) => c.brand === activeTab);

  return (
    <section id="our-campuses" className="py-20 lg:py-28 bg-white border-y border-amber-100 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sunshine-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-ocean-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sunshine-100 border border-sunshine-300 text-amber-900 text-xs sm:text-sm font-extrabold shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: "8s" }} />
            <span>ONE ASPAL FAMILY • THREE STRATEGIC NOIDA CAMPUSES</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Choose the Perfect <span className="text-coral-500">ASPAL Campus</span> for Your Child
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From premier primary schooling up to Class VI in Sector 55 to specialized early childhood, daycare, dance, music & roller skating at Aspal Juniors in Sector 51 and Sector 22.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === "all"
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All 3 Noida Campuses
            </button>
            <button
              onClick={() => setActiveTab("Aspal International School")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === "Aspal International School"
                  ? "bg-ocean-600 text-white shadow-md scale-105"
                  : "bg-ocean-50 text-ocean-700 hover:bg-ocean-100"
              }`}
            >
              Aspal International (Sec 55 • Till Class 6)
            </button>
            <button
              onClick={() => setActiveTab("Aspal Juniors")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === "Aspal Juniors"
                  ? "bg-coral-600 text-white shadow-md scale-105"
                  : "bg-coral-50 text-coral-700 hover:bg-coral-100"
              }`}
            >
              Aspal Juniors (Sec 51 & Sec 22 • Pre-School & Daycare)
            </button>
          </div>
        </div>

        {/* Campuses Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCampuses.map((campus: CampusInfo) => (
            <div
              key={campus.id}
              className={`rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 ${
                campus.id === "aspal-international-55"
                  ? "border-ocean-300 bg-gradient-to-b from-ocean-50/50 via-white to-white"
                  : campus.id === "aspal-juniors-51"
                  ? "border-coral-300 bg-gradient-to-b from-coral-50/50 via-white to-white"
                  : "border-sunshine-300 bg-gradient-to-b from-sunshine-50/40 via-white to-white"
              }`}
            >
              {/* Header Ribbon */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wide border ${campus.badgeColor}`}>
                    {campus.sector}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {campus.ageGroup}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 leading-snug">
                    {campus.name}
                  </h3>
                  <p className="text-xs font-bold text-coral-600 mt-1 uppercase tracking-wider">
                    {campus.type}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed min-h-[40px]">
                  {campus.tagline}
                </p>

                {/* Key Campus Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Campus Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {campus.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Activities Badge List */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Signature Activities:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {campus.activities.map((act, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Promoted Nearby Sectors */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-700 mb-2">
                    <Compass className="w-3.5 h-3.5 text-ocean-600" />
                    <span>Nearby Sectors Covered:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {campus.promotedSectors.map((sectorName, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700"
                      >
                        {sectorName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 sm:p-8 pt-0 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href={campus.pageUrl === "/" ? "/admissions" : campus.pageUrl}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center text-white shadow-playful transition-all flex items-center justify-center space-x-1.5 ${
                      campus.id === "aspal-international-55"
                        ? "bg-ocean-600 hover:bg-ocean-700"
                        : campus.id === "aspal-juniors-51"
                        ? "bg-coral-600 hover:bg-coral-700"
                        : "bg-amber-600 hover:bg-amber-700"
                    }`}
                  >
                    <span>{campus.pageUrl === "/" ? "Admissions Sec 55" : "Explore Aspal Juniors"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${campus.phone}`}
                    className="p-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                    title={`Call ${campus.name}`}
                    aria-label={`Call ${campus.name}`}
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
                <div className="text-center">
                  <Link
                    href="/admissions"
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-2 transition-colors"
                  >
                    Enquire for {campus.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Unified Transport & Admissions */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-bold text-sunshine-400">
              <ShieldCheck className="w-4 h-4" />
              <span>UNIFIED ASPAL ADMISSIONS HOTLINE & TRANSPORT</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Looking for guidance on which campus fits your sector and child&apos;s age?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our central admissions counselor will help you choose between Sector 55, Sector 51, and Sector 22.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/admissions"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold bg-gradient-to-r from-sunshine-400 to-coral-500 text-slate-950 hover:brightness-105 shadow-md transition-all"
            >
              Apply Online Now
            </Link>
            <a
              href="tel:9873539445"
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              +91 9873539445
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
