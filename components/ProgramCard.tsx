"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Lightbulb, 
  X,
  Clock,
  Heart
} from "lucide-react";
import { ProgramItem } from "@/data/school-data";

interface ProgramCardProps {
  program: ProgramItem;
  featured?: boolean;
}

export default function ProgramCard({ program, featured = false }: ProgramCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const colorStyles = {
    sunshine: {
      tag: "bg-sunshine-100 text-amber-900 border-sunshine-300",
      accent: "text-amber-600",
      borderHover: "hover:border-sunshine-400",
      btnBg: "bg-sunshine-500 hover:bg-sunshine-400 text-slate-900",
      lightBg: "bg-sunshine-50/50",
    },
    ocean: {
      tag: "bg-ocean-100 text-ocean-900 border-ocean-300",
      accent: "text-ocean-600",
      borderHover: "hover:border-ocean-400",
      btnBg: "bg-ocean-500 hover:bg-ocean-400 text-white",
      lightBg: "bg-ocean-50/50",
    },
    coral: {
      tag: "bg-coral-100 text-coral-900 border-coral-300",
      accent: "text-coral-600",
      borderHover: "hover:border-coral-400",
      btnBg: "bg-coral-500 hover:bg-coral-400 text-white",
      lightBg: "bg-coral-50/50",
    },
    mint: {
      tag: "bg-mint-100 text-emerald-900 border-mint-300",
      accent: "text-emerald-600",
      borderHover: "hover:border-mint-400",
      btnBg: "bg-mint-500 hover:bg-mint-400 text-white",
      lightBg: "bg-mint-50/50",
    },
    purple: {
      tag: "bg-purple-100 text-purple-900 border-purple-300",
      accent: "text-purple-600",
      borderHover: "hover:border-purple-400",
      btnBg: "bg-purple-500 hover:bg-purple-400 text-white",
      lightBg: "bg-purple-50/50",
    },
    bubblegum: {
      tag: "bg-bubblegum-100 text-pink-900 border-bubblegum-300",
      accent: "text-pink-600",
      borderHover: "hover:border-bubblegum-400",
      btnBg: "bg-bubblegum-500 hover:bg-bubblegum-400 text-white",
      lightBg: "bg-bubblegum-50/50",
    },
  }[program.themeColor];

  return (
    <>
      <div 
        id={program.id}
        className={`group relative rounded-3xl bg-white border-2 border-slate-100 ${colorStyles.borderHover} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1`}
      >
        {/* Top Image Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

          {/* Age Group Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur-md bg-white/90 text-slate-800`}>
              <Clock className="w-3 h-3 mr-1 text-slate-500" />
              {program.ageGroup}
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${colorStyles.tag}`}>
              {program.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors leading-snug">
              {program.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {program.shortDesc}
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Key Growth Areas:
              </span>
              {program.keyBenefits.slice(0, 2).map((benefit, idx) => (
                <div key={idx} className="flex items-start text-xs text-slate-700">
                  <CheckCircle2 className={`w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5 ${colorStyles.accent}`} />
                  <span className="line-clamp-1">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-700 hover:text-ocean-600 transition-colors"
            >
              <span>View Curriculum</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href={`/admissions#enquiry-form`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${colorStyles.btnBg} shadow-sm transition-all`}
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>

      {/* Curriculum Details Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${colorStyles.tag}`}>
                {program.category} • {program.ageGroup}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                {program.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {program.shortDesc}
              </p>
            </div>

            {/* Modal Sections */}
            <div className="mt-6 space-y-5">
              
              {/* What Children Learn */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center mb-2">
                  <BookOpen className="w-4 h-4 mr-2 text-ocean-600" />
                  What Children Learn
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {program.whatTheyLearn.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-coral-500 font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How They Learn */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center mb-2">
                  <Sparkles className="w-4 h-4 mr-2 text-sunshine-600" />
                  How They Learn (Hands-on Methodology)
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {program.howTheyLearn.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-sunshine-600 font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example Activities */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center mb-2">
                  <Lightbulb className="w-4 h-4 mr-2 text-mint-600" />
                  Classroom Activity Highlights
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {program.sampleActivities.map((act, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-mint-600 font-bold mr-2">✓</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Admissions open for {program.ageGroup} in Sector 55, Noida
              </span>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <Link
                  href="/admissions#enquiry-form"
                  onClick={() => setModalOpen(false)}
                  className="w-1/2 sm:w-auto px-5 py-2 rounded-full text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-md text-center"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
