import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  Sun,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  ExternalLink
} from "lucide-react";
import { SCHOOL_DATA, DELHI_NCR_ADMISSION_PORTALS } from "@/data/school-data";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-8 overflow-hidden">
      
      {/* Decorative Top Wave Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sunshine-400 via-coral-500 to-ocean-500"></div>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Identity & Mission (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sunshine-400 via-coral-500 to-purple-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-heading font-black text-coral-400 text-lg">
                  A
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-white tracking-tight">
                  ASAPL <span className="text-coral-400">International</span>
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Primary School • Sector 55, Noida
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A vibrant primary school where little steps turn into big dreams. Cultivating curiosity, warmth, independent thinking, and emotional safety for young learners in Noida.
            </p>

            {/* Five Pillars Badge */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Our Core Pillars:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SCHOOL_DATA.pillars.map((pillar, idx) => {
                  const colors = [
                    "bg-sunshine-500/20 text-sunshine-300 border-sunshine-500/30",
                    "bg-ocean-500/20 text-ocean-300 border-ocean-500/30",
                    "bg-coral-500/20 text-coral-300 border-coral-500/30",
                    "bg-mint-500/20 text-mint-300 border-mint-500/30",
                    "bg-purple-500/20 text-purple-300 border-purple-500/30",
                  ];
                  return (
                    <span 
                      key={idx}
                      className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${colors[idx % colors.length]}`}
                    >
                      {pillar}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Child Safeguarding Badge */}
            <div className="flex items-center space-x-2 pt-2 text-xs text-mint-400">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Committed to Child Safeguarding, Privacy & 100% CCTV Safety</span>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Connect With Us Online:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SCHOOL_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                  title="Watch ASAPL International on YouTube"
                  aria-label="YouTube channel"
                >
                  <Youtube className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>YouTube</span>
                </a>

                <a
                  href={SCHOOL_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                  title="Follow ASAPL International on Instagram"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-3.5 h-3.5 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>

                <a
                  href={SCHOOL_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                  title="Follow ASAPL International on Facebook"
                  aria-label="Facebook page"
                >
                  <Facebook className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  About Our School
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  Admissions 2025–26
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  Learning Programs
                </Link>
              </li>
              <li>
                <Link href="/happy-parenting" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  Happy Parenting Hub
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-sunshine-400 transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  Contact & Campus Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Programs */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white tracking-wide uppercase">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs#early-foundations" className="hover:text-ocean-400 transition-colors">
                  Early Foundations & Play
                </Link>
              </li>
              <li>
                <Link href="/programs#literacy-language" className="hover:text-ocean-400 transition-colors">
                  Foundational Literacy & Phonics
                </Link>
              </li>
              <li>
                <Link href="/programs#numbers-mathematics" className="hover:text-ocean-400 transition-colors">
                  Numeracy & STEM Discovery
                </Link>
              </li>
              <li>
                <Link href="/programs#creative-arts" className="hover:text-ocean-400 transition-colors">
                  Creative Arts & Expression
                </Link>
              </li>
              <li>
                <Link href="/programs#music-movement" className="hover:text-ocean-400 transition-colors">
                  Music, Rhythm & Drama
                </Link>
              </li>
              <li>
                <Link href="/programs#physical-sports" className="hover:text-ocean-400 transition-colors">
                  Physical Agility & Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white tracking-wide uppercase">
              Campus Visit
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-coral-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300">
                  {SCHOOL_DATA.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sunshine-400 flex-shrink-0" />
                <a 
                  href={`tel:${SCHOOL_DATA.phone}`} 
                  className="text-slate-300 hover:text-white font-semibold transition-colors"
                >
                  {SCHOOL_DATA.displayPhone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                <a 
                  href={`mailto:${SCHOOL_DATA.email}`} 
                  className="text-slate-300 hover:text-white transition-colors truncate"
                >
                  {SCHOOL_DATA.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-mint-400 flex-shrink-0 mt-0.5" />
                <span>
                  Office Hours: Monday – Saturday<br />
                  <span className="text-slate-400">[ADD SCHOOL TIMINGS e.g. 8:00 AM – 3:30 PM]</span>
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Sector+55+Noida+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-ocean-400 hover:text-ocean-300 underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Delhi NCR School Admission Portals Directory Showcase */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-sunshine-400 block mb-1">
                Verified Delhi-NCR Admission Search Platforms
              </span>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                Find ASAPL International on Leading School Discovery Portals
              </h4>
            </div>
            <span className="text-xs text-slate-400">
              Primary & Pre-School Admissions 2025–26
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {DELHI_NCR_ADMISSION_PORTALS.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all group flex flex-col justify-between"
                title={`Find ASAPL International on ${portal.name}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-700/70 text-sunshine-300">
                      {portal.badge}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sunshine-400 transition-colors" />
                  </div>
                  <span className="font-bold text-xs text-white group-hover:text-sunshine-300 transition-colors block">
                    {portal.name}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 mt-2 line-clamp-1">
                  {portal.category}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} ASAPL International. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/contact-us" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-slate-300">Child Safeguarding Policy</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-slate-300">Terms of Enrolment</Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs font-semibold text-slate-300">Follow Our School:</span>
            <div className="flex flex-wrap items-center gap-2">
              {/* YouTube Button */}
              <a
                href={SCHOOL_DATA.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                title="Watch ASAPL International on YouTube"
                aria-label="YouTube channel"
              >
                <Youtube className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>YouTube</span>
              </a>

              {/* Instagram Button */}
              <a
                href={SCHOOL_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                title="Follow ASAPL International on Instagram"
                aria-label="Instagram profile"
              >
                <Instagram className="w-3.5 h-3.5 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>

              {/* Facebook Button */}
              <a
                href={SCHOOL_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
                title="Follow ASAPL International on Facebook"
                aria-label="Facebook page"
              >
                <Facebook className="w-3.5 h-3.5 fill-white text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Responsible Transparency Disclaimer Note */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-400 text-center">
          <p>
            * Note for Parents: Admissions are strictly on a first-come, first-served basis subject to age readiness and classroom vacancy. ASAPL International follows child-friendly, stress-free interaction for foundational grade admissions.
          </p>
        </div>

      </div>
    </footer>
  );
}
