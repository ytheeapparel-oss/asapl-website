"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  GraduationCap, 
  Calendar,
  ChevronRight,
  Sun,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Admissions", href: "/admissions" },
    { label: "Programs", href: "/programs" },
    { label: "Happy Parenting", href: "/happy-parenting" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-sunshine-500 via-coral-500 to-ocean-500 text-white text-xs md:text-sm py-1.5 px-4 sm:px-8 lg:px-12 xl:px-16 font-medium transition-all shadow-xs">
        <div className="w-full max-w-[1720px] mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left Side: Admissions Open Announcement Badge */}
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-white text-coral-600 shadow-sm animate-pulse">
              ADMISSIONS OPEN 2025–26
            </span>
            <span className="hidden sm:inline text-white/95 font-semibold text-xs">
              | Playgroup, Nursery, KG & Primary Grades 1–5 • Sector 55, Noida
            </span>
          </div>

          {/* Right Side: Quick Contact & Right Corner Three Social Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-semibold">
            <a 
              href={`tel:${SCHOOL_DATA.phone}`} 
              className="hidden md:flex items-center space-x-1 hover:text-sunshine-200 transition-colors font-bold"
              aria-label="Call ASAPL International"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SCHOOL_DATA.displayPhone}</span>
            </a>
            <span className="hidden md:inline text-white/50">•</span>
            <a 
              href={`mailto:${SCHOOL_DATA.email}`} 
              className="hidden xl:flex items-center space-x-1 hover:text-sunshine-200 transition-colors"
              aria-label="Email ASAPL International"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SCHOOL_DATA.email}</span>
            </a>
            <span className="hidden xl:inline text-white/50">•</span>

            {/* Right Corner: Three Dedicated Social Buttons (YouTube, Instagram, Facebook) */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {/* YouTube Button */}
              <a
                href={SCHOOL_DATA.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-xs hover:shadow-md transition-all transform hover:scale-105 active:scale-95 group"
                title="Watch ASAPL International on YouTube"
                aria-label="YouTube channel"
              >
                <Youtube className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-tight">YouTube</span>
              </a>

              {/* Instagram Button */}
              <a
                href={SCHOOL_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 shadow-xs hover:shadow-md transition-all transform hover:scale-105 active:scale-95 group"
                title="Follow ASAPL International on Instagram"
                aria-label="Instagram profile"
              >
                <Instagram className="w-3.5 h-3.5 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-tight">Instagram</span>
              </a>

              {/* Facebook Button */}
              <a
                href={SCHOOL_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-xs hover:shadow-md transition-all transform hover:scale-105 active:scale-95 group"
                title="Follow ASAPL International on Facebook"
                aria-label="Facebook page"
              >
                <Facebook className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-tight">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5" 
            : "bg-white py-3.5 border-b border-amber-100"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="ASAPL International Home"
          >
            {/* Playful Colorful Logo Icon */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-sunshine-400 via-coral-500 to-purple-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-sunshine-300/40 rounded-full blur-[2px]"></div>
                <div className="text-center font-black leading-none">
                  <span className="text-coral-500 text-lg block tracking-tighter">A</span>
                </div>
                <Sun className="w-3.5 h-3.5 text-sunshine-500 absolute bottom-1 right-1 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>

            {/* School Text */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-ocean-600 transition-colors leading-tight">
                  ASAPL <span className="text-coral-500">International</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-100 text-amber-800 border border-amber-200/80">
                  School
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide flex items-center space-x-1">
                <span className="text-mint-600 font-bold">●</span>
                <span>Premier Early Childhood & Primary School (Ages 2.5–10) • Sector 55, Noida</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-ocean-50 text-ocean-600 shadow-sm"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold text-ocean-700 bg-ocean-50 border border-ocean-200 hover:bg-ocean-100 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-ocean-600" />
              Book a Visit
            </Link>

            <Link
              href="/admissions#enquiry-form"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-coral-500 via-coral-500 to-amber-500 hover:from-coral-600 hover:to-amber-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 mr-1.5 animate-pulse text-sunshine-200" />
              Enquire for Admission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/admissions#enquiry-form"
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-bold text-white bg-coral-500 shadow-sm"
            >
              Enquire
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-coral-500 text-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <span className="font-heading font-bold text-base text-slate-900">
                    ASAPL International
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-base transition-colors ${
                        isActive
                          ? "bg-ocean-50 text-ocean-600"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Action Box */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 uppercase tracking-wide">
                  <GraduationCap className="w-4 h-4 text-sunshine-600" />
                  <span>Admissions 2025-26</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Limited seats available for early years & primary classes in Sector 55, Noida.
                </p>
                <Link
                  href="/admissions#enquiry-form"
                  className="mt-3 block text-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow"
                >
                  Enquire for Admission
                </Link>
              </div>

              {/* Social Channels in Drawer */}
              <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Follow Our Social Channels:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={SCHOOL_DATA.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-xs transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-white" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href={SCHOOL_DATA.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 shadow-xs transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-white" />
                    <span>Insta</span>
                  </a>

                  <a
                    href={SCHOOL_DATA.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-xs transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 fill-white" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Contact inside Drawer */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="flex items-center space-x-3 text-sm font-semibold text-slate-700 hover:text-ocean-600"
              >
                <div className="w-8 h-8 rounded-full bg-ocean-50 text-ocean-600 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{SCHOOL_DATA.displayPhone}</span>
              </a>

              <a
                href={`mailto:${SCHOOL_DATA.email}`}
                className="flex items-center space-x-3 text-xs font-medium text-slate-600 hover:text-ocean-600"
              >
                <div className="w-8 h-8 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{SCHOOL_DATA.email}</span>
              </a>

              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <div className="w-8 h-8 rounded-full bg-mint-50 text-mint-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Sector 55, Noida, UP, India</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
