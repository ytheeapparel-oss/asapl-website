import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  BookOpen, 
  Palette, 
  BrainCircuit, 
  Music, 
  Activity, 
  Compass, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Sun
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgramCard from "@/components/ProgramCard";
import ProgramShowcase from "@/components/ProgramShowcase";
import { PROGRAMS_DATA } from "@/data/school-data";

export const metadata: Metadata = {
  title: "Playgroup, Nursery, Kindergarten & Primary Programs in Noida | ASPAL",
  description:
    "Explore early childhood and primary school programs at ASPAL International (Aspal Juniors), Sector 55, Noida. Playgroup, Nursery, LKG, UKG, Class 1-5, 42+ Synthetic Phonics Lab, Concrete Math CPA, STEM, Fine Arts, and Kids Yoga.",
  keywords: [
    "play school in sector 55 noida",
    "kindergarten in sector 55 noida",
    "pre school curriculum noida",
    "synthetic phonics classes for kids noida",
    "concrete mathematics preschool noida",
    "activity based learning school in noida",
    "experiential learning primary school noida",
    "best primary school in noida",
    "playgroup admission in noida",
    "lkg admission in noida",
    "ukg admission in noida",
    "class 1 admission in noida",
    "early childhood education sector 55 noida",
    "holistic development primary school noida",
  ],
};

export default function ProgramsPage() {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero Banner - 100% CLEAN, BRIGHT & CLEAR IMAGE (ZERO BLACK SHADE) */}
      <section className="relative min-h-[70vh] lg:min-h-[78vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* Crisp daylight photo background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/art-creative.jpg"
            alt="Indian primary school children engaged in joyful creative learning at ASPAL International Sector 55 Noida"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Floating clean white frosted card */}
        <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10">
          <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
            
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs sm:text-sm font-bold shadow-xs mb-5">
              <Sun className="w-4 h-4 text-purple-600" />
              <span className="uppercase tracking-wider font-extrabold text-purple-900">
                Foundational Primary Curriculum
              </span>
              <span className="text-purple-300">•</span>
              <span>Ages 2.5 to 10 Years</span>
              <span className="text-purple-300">•</span>
              <span className="text-purple-900">Sector 55, Noida</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto">
              Inspiring Curiosity,{" "}
              <span className="bg-gradient-to-r from-purple-600 via-bubblegum-500 to-coral-500 bg-clip-text text-transparent">
                Crafting Brilliance
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-body tracking-normal">
                Comprehensive Early Childhood & Primary Academic Excellence
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              At ASPAL International, our thoughtfully sequenced programs blend hands-on sensory exploration, synthetic phonics, CPA mathematics, expressive arts, and physical agility. We nurture every facet of a child&apos;s cognitive, social, and emotional growth in an environment that sparks boundless enthusiasm for learning.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-900 font-bold border border-purple-200">
                🔤 Phonics & Conversational Fluency
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sunshine-50 text-amber-900 font-bold border border-amber-200">
                🔢 Concrete CPA Mathematics
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-800 font-bold border border-mint-200">
                🎨 Arts, Drama & Physical Sports
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center px-9 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Enroll for 2025–26
              </Link>
              <Link
                href="/contact-us#visit-campus"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all shadow-md"
              >
                Schedule Campus Walkthrough →
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream curved-edge-bottom pointer-events-none"></div>
      </section>

      {/* Main Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: "Programs" }]} />

        {/* Introduction */}
        <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-ocean-600">
            Experiential Primary Education
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            A Curriculum Designed for the Whole Child
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Children do not learn in rigid silos. At ASPAL International, our learning programs connect literacy, numeracy, science, music, and physical play into cohesive, thematic learning quests.
          </p>
        </div>

        {/* All Modular Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROGRAMS_DATA.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Extra Holistic Enrichment Areas */}
        <section className="mt-24 pt-20 lg:pt-28 border-t border-slate-200/60">
          <SectionHeading
            badge="Enrichment Modules"
            badgeColor="mint"
            title="Beyond Books: Holistic Development Pillars"
            highlightWord="Holistic"
            highlightColor="text-sunshine-600"
            subtitle="Co-curricular enrichment woven seamlessly into daily school life in Sector 55, Noida."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sunshine-100 text-sunshine-600 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Nature & Green Garden Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Children plant seeds, observe earthworms, compost plant leaves, and discover biological cycles firsthand in our campus garden.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Bilingual Story Circles
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nurturing fluent English expression alongside pride in cultural folk tales and Hindi poetry for expressive bilingual eloquence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center font-bold">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Puzzles & Logic Mazes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Early algorithmic thinking without computers: sequencing wooden arrows, solving tangram puzzles, and classification riddles.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Yoga & Breath Mindfulness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Animal-pose yoga routines that calm restless nervous systems, improve posture, and give young children emotional self-regulation tools.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* 4. Cultural Arts, Festivities & Extended Care Showcase (Panel 4) - Full Length & Breadth */}
      <ProgramShowcase />

    </div>
  );
}
