"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Star, 
  Sun, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X 
} from "lucide-react";
import PlayfulDoodles from "@/components/PlayfulDoodles";
import { SCHOOL_DATA } from "@/data/school-data";

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
      
      {/* 1. High-Resolution Looping Classroom Video Background - 100% CLEAN & CLEAR (NO BLACK OVERLAY) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            poster="/images/hero-indian-kids.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
          >
            <source src="/videos/classroom-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-indian-kids.jpg"
            alt="Joyful Indian primary school kids on campus at ASAPL International Noida"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-100"
          />
        )}
      </div>

      {/* 2. Playful Animated Vector Doodles */}
      <PlayfulDoodles />

      {/* 3. Live Video Status & Control Floating Badge (Top Right) - CLEAN BRIGHT FROSTED GLASS */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-30 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 text-slate-800 text-xs shadow-xl">
        <span className="flex items-center text-coral-600 font-extrabold mr-1">
          <span className="w-2.5 h-2.5 rounded-full bg-coral-500 animate-ping mr-2"></span>
          Campus Video
        </span>
        <button
          onClick={togglePlay}
          className="p-1 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
          title={isPlaying ? "Pause background video" : "Play background video"}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-1 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
          title={isMuted ? "Unmute video sound" : "Mute video sound"}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-ocean-600" />}
        </button>
      </div>

      {/* 4. Main Hero Content in a Bright, Premium Frosted Glass Container (ZERO BLACK SHADING) */}
      <div className="relative z-20 w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10 flex flex-col items-center">
        
        <div className="w-full rounded-3xl bg-white/85 sm:bg-white/90 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-sunshine-50 border border-sunshine-300/90 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-5">
            <span className="flex items-center space-x-1.5 text-coral-600 font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-coral-500 animate-ping"></span>
              <span className="uppercase tracking-wider">Admissions Open 2025–26</span>
            </span>
            <span className="text-amber-300 hidden sm:inline">•</span>
            <span className="text-slate-800 font-semibold">Playgroup to Primary Grade 5</span>
            <span className="text-amber-300 hidden sm:inline">•</span>
            <span className="text-ocean-700 font-bold flex items-center">
              Sector 55, Noida
            </span>
          </div>

          {/* Main Energetic Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-5xl">
            Little Steps.{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-sunshine-600 via-coral-500 to-bubblegum-500 bg-clip-text text-transparent">
                Big Dreams.
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
              Nurturing Confident, Curious & Joyful Young Minds
            </span>
          </h1>

          {/* Supporting Message - Comprehensive, Rich & Professional */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl leading-relaxed">
            Welcome to <strong className="text-slate-900 font-bold">ASAPL International</strong> in Sector 55, Noida — where early childhood wonder transforms into lifelong academic confidence. Our experiential curriculum blends play-based inquiry, synthetic phonics, concrete CPA mathematics, and expressive arts with compassionate 1:12 teacher mentorship in a secure, 100% CCTV-monitored campus.
          </p>

          {/* Key Quick Highlight Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sunshine-100/90 text-amber-900 font-bold border border-sunshine-200 shadow-2xs">
              🎓 Playgroup to Grade 5 (Ages 2.5–10)
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-800 font-bold border border-ocean-200 shadow-2xs">
              📚 Phonics & Concrete Math
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-800 font-bold border border-mint-200 shadow-2xs">
              🛡️ 100% CCTV Safe Campus
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-800 font-bold border border-coral-200 shadow-2xs">
              ❤️ 1:12 Teacher Mentorship
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold text-slate-900 bg-gradient-to-r from-sunshine-400 via-sunshine-300 to-amber-400 hover:from-sunshine-300 hover:to-amber-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-5 h-5 mr-2.5 text-slate-900" />
              Explore Admissions 2025–26
            </Link>

            {/* Watch Video Tour Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Video Tour</span>
            </button>

            <Link
              href="/contact-us#visit-campus"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full text-base sm:text-lg font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <Calendar className="w-5 h-5 mr-2.5 text-ocean-600" />
              Book a School Visit
            </Link>

          </div>

        </div>

      </div>

      {/* 5. Expansive Full-Breadth Bottom Feature Ribbon - BRIGHT, SUNNY & CLEAN */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 p-4 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-white/80 shadow-2xl">
          
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 hover:bg-amber-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-sunshine-400 text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Happy Children</p>
              <p className="text-[11px] sm:text-xs text-slate-600">Ages 2.5 to 10 Years</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-sky-50/80 border border-sky-200/60 hover:bg-sky-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-ocean-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Creative Learning</p>
              <p className="text-[11px] sm:text-xs text-slate-600">Phonics & CPA Math</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 hover:bg-emerald-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-mint-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Safe Environment</p>
              <p className="text-[11px] sm:text-xs text-slate-600">100% CCTV Monitored</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-rose-50/80 border border-rose-200/60 hover:bg-rose-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-coral-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Caring Teachers</p>
              <p className="text-[11px] sm:text-xs text-slate-600">1:12 Mentorship Ratio</p>
            </div>
          </div>

          <div className="hidden xl:flex items-center space-x-3 p-3 rounded-2xl bg-purple-50/80 border border-purple-200/60 hover:bg-purple-100/80 transition-colors">
            <div className="w-11 h-11 rounded-2xl bg-purple-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Confident Futures</p>
              <p className="text-[11px] sm:text-xs text-slate-600">Sector 55, Noida</p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Curved Divider */}
      <div className="absolute -bottom-1 left-0 right-0 h-6 sm:h-8 bg-cream curved-edge-bottom pointer-events-none"></div>

      {/* 6. Full Screen Animated School Video Tour Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video border-4 border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player in Modal */}
            <video
              src="/videos/classroom-hero.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

    </section>
  );
}
