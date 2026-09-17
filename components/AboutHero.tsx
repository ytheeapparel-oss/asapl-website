"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Calendar, 
  Sun, 
  Maximize2, 
  X, 
  Heart, 
  ShieldCheck, 
  Award, 
  Smile
} from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

export default function AboutHero() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
      
      {/* 1. Full Length and Breadth Image Background - 100% CLEAN, BRIGHT & CLEAR (ZERO BLACK SHADE) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/about-hero-kids.jpg"
          alt="Cute Indian school kids performing in traditional costumes at ASPAL International Sector 55 Noida"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-100 transition-transform duration-1000"
        />
      </div>

      {/* 2. Top Controls & Photo Badge - CLEAN BRIGHT FROSTED GLASS */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 flex items-center justify-between">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-lg">
          <Sun className="w-3.5 h-3.5 text-sunshine-600" />
          <span>About ASPAL International • Sector 55, Noida</span>
        </div>

        {/* Expand/View Full Image Button */}
        <button
          onClick={() => setIsPhotoModalOpen(true)}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-semibold shadow-lg transition-all transform hover:scale-105"
          title="View Full High-Resolution Photo"
        >
          <Maximize2 className="w-3.5 h-3.5 text-coral-600" />
          <span className="hidden sm:inline font-bold">View Full Photo</span>
        </button>
      </div>

      {/* 3. Main Hero Content Container in Bright Clean White Glass Card (NO BLACK SHADE) */}
      <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10 flex flex-col items-center">
        
        <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
          
          {/* Cultural Celebration Tag */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-sunshine-100 border border-sunshine-300 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-5">
            <Sparkles className="w-4 h-4 text-sunshine-600 animate-pulse" />
            <span className="uppercase tracking-wider font-extrabold text-amber-900">
              Cultural Values & Stage Confidence
            </span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-900">Noida’s Joyful Primary School</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-5xl">
            Nurturing Young Hearts &{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-sunshine-600 via-coral-500 to-bubblegum-500 bg-clip-text text-transparent">
                Curious Minds
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 sm:h-5 text-sunshine-400 opacity-90"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q 50 0 100 15"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-3 font-body tracking-normal">
              A Warm, Values-Based Learning Sanctuary in Sector 55, Noida
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl leading-relaxed">
            Welcome to <strong className="text-slate-900 font-bold">ASPAL International</strong>, Sector 55, Noida — where children celebrate Indian cultural roots, build stage confidence, and cultivate lifelong academic wonder. Founded on principles of emotional safety, individualized attention, and joyful exploration, we shape compassionate, resilient young leaders prepared for tomorrow&apos;s world.
          </p>

          {/* Quick Pillars Highlight Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-200 shadow-2xs">
              🌟 Indian Values & Cultural Roots
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 font-bold border border-sky-200 shadow-2xs">
              🎭 Stage Bravery & Expressive Arts
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shadow-2xs">
              🛡️ Safe, Secure & Nurturing Campus
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold text-slate-900 bg-gradient-to-r from-sunshine-400 via-sunshine-300 to-amber-400 hover:from-sunshine-300 hover:to-amber-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-5 h-5 mr-2 text-slate-900" />
              Admissions 2025–26
            </Link>

            <button
              onClick={() => setIsPhotoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Maximize2 className="w-5 h-5 mr-2" />
              <span>View Campus Celebrations</span>
            </button>

            <Link
              href="/contact-us#visit-campus"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full text-base sm:text-lg font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <Calendar className="w-5 h-5 mr-2 text-ocean-600" />
              Book a School Visit
            </Link>
          </div>

        </div>

      </div>

      {/* 4. Expansive Full-Breadth Bottom Feature Ribbon - BRIGHT, SUNNY & CLEAN */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-white/80 shadow-2xl">
          
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 hover:bg-amber-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-sunshine-400 text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Stage Bravery</p>
              <p className="text-[11px] sm:text-xs text-slate-600">Dramatics & Cultural Days</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-sky-50/80 border border-sky-200/60 hover:bg-sky-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-ocean-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Empathetic Care</p>
              <p className="text-[11px] sm:text-xs text-slate-600">1:12 Mentorship Ratio</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 hover:bg-emerald-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-mint-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Child Safety First</p>
              <p className="text-[11px] sm:text-xs text-slate-600">100% CCTV & GPS Vans</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-rose-50/80 border border-rose-200/60 hover:bg-rose-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-coral-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Happy Children</p>
              <p className="text-[11px] sm:text-xs text-slate-600">Playgroup to Grade 5</p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Curved Divider */}
      <div className="absolute -bottom-1 left-0 right-0 h-6 sm:h-8 bg-cream curved-edge-bottom pointer-events-none"></div>

      {/* 5. Full Resolution Photo Viewer Modal */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/20 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md transition-colors border border-white/20"
              aria-label="Close photo modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src="/images/about-hero-kids.jpg"
                alt="ASPAL International primary school students cultural performance in Sector 55 Noida"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            <div className="p-4 text-center">
              <h4 className="font-heading text-lg font-bold text-white">
                Cultural Day Performance • ASPAL International
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Celebrating theatrical expression, Indian heritage, and stage poise at our Sector 55, Noida campus.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
