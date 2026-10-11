import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Star, 
  Music, 
  Baby, 
  Smile, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Compass, 
  Heart,
  Youtube,
  Instagram,
  Facebook,
  ExternalLink
} from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";
import SectionHeading from "@/components/SectionHeading";
import { SCHOOL_DATA, CAMPUSES_DATA } from "@/data/school-data";

export const metadata: Metadata = {
  title: "Aspal Juniors | Best Pre-School, Daycare & Creche in Sector 51 & Sector 22, Noida",
  description:
    "Aspal Juniors is Noida's premier pre-school, daycare & creche located in Sector 51 and Sector 22. Featuring roller skating rink, dance academy, music studio, synthetic phonics, and 100% CCTV safety for children aged 2 to 8 years. Admissions open.",
  keywords: [
    "Aspal Juniors",
    "Aspal Juniors Sector 51",
    "Aspal Juniors Sector 22",
    "pre school in sector 51 noida",
    "play school in sector 51 noida",
    "daycare in sector 51 noida",
    "creche in sector 51 noida",
    "skating classes for kids in noida",
    "dance and music classes for kids sector 51 noida",
    "best preschool near sector 50 noida",
    "daycare near sector 34 noida",
    "play school near sector 41 noida",
    "preschool sector 49 noida",
    "play school sector 71 noida",
    "play school sector 72 noida",
    "preschool sector 75 noida",
    "play school sector 76 noida",
    "preschool sector 77 noida",
    "play school sector 78 noida",
    "preschool sector 79 noida",
    "pre school in sector 22 noida",
    "play school in sector 22 noida",
    "daycare in sector 22 noida",
    "creche near sector 12 noida",
    "kids school sector 21 noida",
    "preschool near rajat vihar noida",
    "play school near mayur vihar phase 3",
    "toddler school noida",
    "nursery admission in sector 51 noida"
  ],
  alternates: {
    canonical: "https://www.aspal.co.in/aspal-juniors",
  },
  openGraph: {
    title: "Aspal Juniors | Pre-School, Daycare & Creche in Sector 51 & Sector 22 Noida",
    description: "Nurturing early childhood with joy, roller skating, dance, music, and loving daycare for ages 2 to 8 years.",
    url: "https://www.aspal.co.in/aspal-juniors",
    siteName: "Aspal Juniors - ASPAL Group of Schools",
    images: [
      {
        url: "https://www.aspal.co.in/images/hero-indian-kids.jpg",
        width: 1200,
        height: 630,
        alt: "Aspal Juniors Noida Early Childhood & Daycare",
      },
    ],
  },
};

export default function AspalJuniorsPage() {
  const juniors51 = CAMPUSES_DATA.find((c) => c.id === "aspal-juniors-51")!;
  const juniors22 = CAMPUSES_DATA.find((c) => c.id === "aspal-juniors-22")!;
  const international55 = CAMPUSES_DATA.find((c) => c.id === "aspal-international-55")!;

  const juniorSchema = {
    "@context": "https://schema.org",
    "@type": ["PreSchool", "ChildCare", "LocalBusiness"],
    name: "Aspal Juniors",
    description: "Premier Pre-School, Daycare & Creche with Dance, Music & Roller Skating in Sector 51 and Sector 22, Noida.",
    url: "https://www.aspal.co.in/aspal-juniors",
    telephone: SCHOOL_DATA.displayPhone,
    email: SCHOOL_DATA.email,
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "ASPAL Group of Schools",
      url: "https://www.aspal.co.in"
    },
    department: [
      {
        "@type": "PreSchool",
        name: "Aspal Juniors - Sector 51 Campus",
        description: "Pre-School, Daycare, Creche, Roller Skating, Dance & Music Studio",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 51",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN"
        },
        areaServed: juniors51.promotedSectors
      },
      {
        "@type": "PreSchool",
        name: "Aspal Juniors - Sector 22 Campus",
        description: "Pre-School & Loving Daycare Sanctuary",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 22",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN"
        },
        areaServed: juniors22.promotedSectors
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(juniorSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-sunshine-100/60 via-coral-50/40 to-cream border-b border-coral-200/60">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coral-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sunshine-300/30 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border-2 border-coral-300 text-coral-700 text-xs sm:text-sm font-extrabold shadow-sm">
                <Sparkles className="w-4 h-4 text-coral-500 animate-spin" style={{ animationDuration: "6s" }} />
                <span>ASPAL JUNIORS • PRE-SCHOOL & DAYCARE • SECTOR 51 & 22</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Where Joyful Beginnings Meet <span className="text-coral-500">Skating, Music</span> & Loving Care!
              </h1>

              <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to <strong className="text-slate-900">Aspal Juniors</strong> — Noida&apos;s beloved early childhood sanctuary for children aged <strong>2 to 8 years</strong>. Experience award-winning playgroup, nursery, kindergarten, and full-day daycare with specialized roller skating, dance, and music in Sector 51 and Sector 22.
              </p>

              {/* Quick highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white/80 border border-coral-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-coral-100 text-coral-600 flex items-center justify-center font-bold">
                    ⛸️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Roller Skating Rink</p>
                    <p className="text-[11px] text-slate-500">Sector 51 Campus</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white/80 border border-sunshine-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-sunshine-100 text-amber-700 flex items-center justify-center font-bold">
                    🎵
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Dance & Music Studio</p>
                    <p className="text-[11px] text-slate-500">Professional instructors</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white/80 border border-mint-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-mint-100 text-mint-700 flex items-center justify-center font-bold">
                    👶
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Daycare & Full Creche</p>
                    <p className="text-[11px] text-slate-500">Trained loving caregivers</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white/80 border border-ocean-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center font-bold">
                    🛡️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">100% CCTV Safety</p>
                    <p className="text-[11px] text-slate-500">Live monitoring & secure access</p>
                  </div>
                </div>
              </div>

              {/* Call to actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#admissions-juniors"
                  className="px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-coral-500 hover:bg-coral-600 shadow-playful hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Book a Campus Tour & Admission
                </a>
                <a
                  href={`tel:${SCHOOL_DATA.phone}`}
                  className="px-6 py-4 rounded-full text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 shadow-sm transition-all flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-coral-500" />
                  <span>Call {SCHOOL_DATA.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
                <Image
                  src="/images/toddler-play.jpg"
                  alt="Happy toddlers playing and learning at Aspal Juniors pre-school Noida"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Campus Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-4 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-sunshine-300 max-w-xs animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center text-coral-600 font-bold flex-shrink-0 text-xl">
                    🌟
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-slate-900">2 Branch Campuses</p>
                    <p className="text-xs text-slate-500">Sector 51 & Sector 22, Noida</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. DEDICATED SPOTLIGHT: SECTOR 51 & SECTOR 22 CAMPUSES */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <SectionHeading
          badge="Our Two Pre-School Campuses"
          badgeColor="coral"
          title="Explore Aspal Juniors Across Noida"
          highlightWord="Noida"
          highlightColor="text-coral-500"
          subtitle="Strategically located to serve families across central, east, and residential Noida with zero commute hassle and reliable van facilities."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          
          {/* CAMPUS A: SECTOR 51 */}
          <div className="rounded-3xl bg-white border-2 border-coral-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-coral-400 transition-all">
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* Campus Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-coral-100">
                <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-coral-100 text-coral-700 border border-coral-300">
                  SECTOR 51 NOIDA CAMPUS
                </span>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  Age: 2 Years – 8 Years
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Aspal Juniors — Sector 51
                </h3>
                <p className="text-sm font-bold text-coral-600 mt-1">
                  Pre-School • Daycare & Creche • Dance, Music & Roller Skating
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our Sector 51 branch is uniquely equipped with a dedicated <strong>Roller Skating Rink</strong>, state-of-the-art <strong>Dance Academy</strong>, and <strong>Music Studio</strong>, alongside warm pre-school and nurturing daycare for working parents.
              </p>

              {/* Special Features Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  Featured Highlights & Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>Roller Skating Rink with Coaches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>Western & Classical Dance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>Vocal & Keyboard Music Studio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>Full-Day Creche & Daycare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>1:10 Nurturing Student-Teacher Ratio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                    <span>100% CCTV Monitored Child Safety</span>
                  </div>
                </div>
              </div>

              {/* Promoted Sectors Box */}
              <div className="p-5 rounded-2xl bg-coral-50/70 border border-coral-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-coral-900">
                  <Compass className="w-4 h-4 text-coral-600" />
                  <span>Sectors Promoted & Covered by Van:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {juniors51.promotedSectors.map((sectorName, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-coral-800 border border-coral-200 shadow-2xs"
                    >
                      {sectorName}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Conveniently close to Sector 50 metro, 7X sectors (75, 76, 77, 78, 79), and Sector 34 / 41 / 49.
                </p>
              </div>

            </div>

            {/* Campus CTA */}
            <div className="p-8 sm:p-10 pt-0 flex flex-wrap items-center gap-3">
              <a
                href="#admissions-juniors"
                className="flex-1 py-3.5 px-6 rounded-xl text-center text-xs sm:text-sm font-extrabold text-white bg-coral-600 hover:bg-coral-700 shadow-md transition-all"
              >
                Apply for Sector 51 Campus
              </a>
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="py-3.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                title="Call Sector 51 desk"
              >
                <Phone className="w-4 h-4 text-coral-600" />
              </a>
            </div>
          </div>

          {/* CAMPUS B: SECTOR 22 */}
          <div className="rounded-3xl bg-white border-2 border-sunshine-300 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-sunshine-400 transition-all">
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* Campus Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-sunshine-100">
                <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-sunshine-100 text-amber-900 border border-sunshine-300">
                  SECTOR 22 NOIDA CAMPUS
                </span>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  Age: 2 Years – 8 Years
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Aspal Juniors — Sector 22
                </h3>
                <p className="text-sm font-bold text-amber-700 mt-1">
                  Pre-School & Loving Daycare Sanctuary
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our Sector 22 branch provides an intimate, cheerful early childhood setting featuring interactive phonics, sensory discovery, and dependable after-school daycare for families in central Noida and surrounding sectors.
              </p>

              {/* Special Features Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  Featured Highlights & Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Loving Daycare & Infant Care</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Playgroup, Nursery, LKG & UKG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Synthetic Phonics Sound Lab</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Sensory Art & Creative Craft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Safe Outdoor & Indoor Play Zone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Verified Female Attendants</span>
                  </div>
                </div>
              </div>

              {/* Promoted Sectors Box */}
              <div className="p-5 rounded-2xl bg-sunshine-50/70 border border-sunshine-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-950">
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>Sectors Promoted & Covered by Van:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {juniors22.promotedSectors.map((sectorName, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-slate-800 border border-sunshine-200 shadow-2xs"
                    >
                      {sectorName}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Ideal for parents living in Sector 22, 55, 56, 12, 21, 26, Rajat Vihar, and Mayur Vihar Phase 3.
                </p>
              </div>

            </div>

            {/* Campus CTA */}
            <div className="p-8 sm:p-10 pt-0 flex flex-wrap items-center gap-3">
              <a
                href="#admissions-juniors"
                className="flex-1 py-3.5 px-6 rounded-xl text-center text-xs sm:text-sm font-extrabold text-white bg-amber-600 hover:bg-amber-700 shadow-md transition-all"
              >
                Apply for Sector 22 Campus
              </a>
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="py-3.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                title="Call Sector 22 desk"
              >
                <Phone className="w-4 h-4 text-amber-600" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. TRANSITION BRIDGE TO ASPAL INTERNATIONAL (SECTOR 55) */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-ocean-900 via-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ocean-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-ocean-500/20 text-ocean-300 border border-ocean-500/30">
                NEED PRIMARY SCHOOL TILL CLASS 6 (AGES 2 TO 12)?
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                Aspal International School — Sector 55, Noida
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                For parents seeking primary schooling up to <strong>VIth Standard (Class 6)</strong>, our sister campus in <strong>Sector 55</strong> provides rigorous CBSE foundations, an advanced science lab, and seamless transition from kindergarten.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">Class 1 to 6</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">Concrete CPA Math</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">Synthetic Phonics Lab</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">Sectors 55, 56, 12, 21, 26, MV Phase 3</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/"
                className="px-7 py-3.5 rounded-full text-sm font-bold bg-white text-slate-950 hover:bg-slate-100 transition-all text-center shadow-lg"
              >
                Visit International School Portal
              </Link>
              <Link
                href="/admissions"
                className="px-7 py-3.5 rounded-full text-sm font-bold bg-ocean-500 hover:bg-ocean-600 text-white transition-all text-center"
              >
                Primary Admissions
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 4. SOCIAL MEDIA & COMMUNITY HUB (SMO) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-coral-600">
              SOCIAL MEDIA & VIDEOS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Watch Our Happy Kids in Action
            </h2>
            <p className="text-sm text-slate-600">
              Follow our official YouTube channel and Instagram for daily glimpses of roller skating, dance recitals, and classroom fun!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YouTube Card */}
            <a
              href="https://www.youtube.com/@aspaljuniors"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-red-50 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  @aspaljuniors on YouTube
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Watch school annual days, skating performances, phonics rhymes, and parent testimonials on our official video channel.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-red-200/60 flex items-center justify-between text-xs font-bold text-red-600">
                <span>Subscribe & Watch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/aspaljuniors_51"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-pink-50 border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  @aspaljuniors_51 on Instagram
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily campus stories, festival celebrations, student art, and joyful preschool moments in Sector 51 & 22.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-pink-200/60 flex items-center justify-between text-xs font-bold text-pink-600">
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/aspalinternationalschool"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-blue-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  ASPAL on Facebook
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stay updated with official parent notices, event photo albums, and upcoming admission cycles for all campuses.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Like & Follow</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. ADMISSION ENQUIRY SECTION */}
      <section id="admissions-juniors" className="py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Guidance & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-coral-100 text-coral-700 text-xs font-extrabold">
              <Calendar className="w-3.5 h-3.5" />
              <span>ACADEMIC SESSION 2025–26 ADMISSIONS OPEN</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Begin Your Child&apos;s Joyful Journey with <span className="text-coral-500">Aspal Juniors</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fill out the enquiry form to book a private campus walk-through, meet our early childhood educators, and secure admission at Sector 51 or Sector 22.
            </p>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-100 shadow-md space-y-4">
              <h4 className="font-heading text-base font-bold text-slate-900">
                Central Admissions Helpline
              </h4>
              <div className="space-y-2.5 text-sm text-slate-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-coral-500" />
                  <a href={`tel:${SCHOOL_DATA.phone}`} className="font-bold hover:text-coral-600">
                    {SCHOOL_DATA.displayPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-ocean-500" />
                  <a href={`mailto:${SCHOOL_DATA.email}`} className="hover:text-ocean-600">
                    {SCHOOL_DATA.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-mint-500 mt-0.5" />
                  <span className="text-xs text-slate-600">
                    Campuses in Sector 51 & Sector 22, Noida (Primary campus in Sector 55)
                  </span>
                </div>
              </div>
            </div>

            {/* Safety Assurance Note */}
            <div className="p-4 rounded-2xl bg-mint-50 border border-mint-200 text-xs text-mint-900 flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-mint-600 flex-shrink-0 mt-0.5" />
              <span>
                All inquiries are processed confidentially and routed directly to our admissions director. Zero donation or capitation fees.
              </span>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>

        </div>
      </section>

    </div>
  );
}
