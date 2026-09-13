"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  Info,
  Sun
} from "lucide-react";

interface GradeResult {
  grade: string;
  ageRange: string;
  stage: string;
  tagColor: string;
  badgeBg: string;
  highlights: string[];
  message: string;
}

export default function AgeCalculator() {
  const [birthYear, setBirthYear] = useState<number>(2021);
  const [birthMonth, setBirthMonth] = useState<number>(5); // June

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Years appropriate for 2.5 to 10 year olds for academic session 2025-26
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  const calculateGrade = (): GradeResult => {
    // Reference date: 31st March 2025 (Standard Delhi-NCR academic cutoff)
    const cutoffDate = new Date(2025, 2, 31);
    const dob = new Date(birthYear, birthMonth, 1);
    
    // Calculate approximate age in months
    const diffMonths = (cutoffDate.getFullYear() - dob.getFullYear()) * 12 + (cutoffDate.getMonth() - dob.getMonth());
    const ageYears = diffMonths / 12;

    if (ageYears < 3) {
      return {
        grade: "Playgroup / Toddlers",
        ageRange: "2 to 3 Years",
        stage: "Early Years Gentle Transition",
        tagColor: "text-amber-800 border-sunshine-300",
        badgeBg: "bg-sunshine-100",
        highlights: [
          "Sensory texture play, soft dough modeling, finger songs",
          "Socialization without separation anxiety",
          "Gross motor balance & outdoor playground strolls",
        ],
        message: "Your child is ready for our warm, sensory-rich playgroup! A loving home-away-from-home.",
      };
    } else if (ageYears < 4) {
      return {
        grade: "Nursery",
        ageRange: "3 to 4 Years",
        stage: "Foundational Phonics & Wonder",
        tagColor: "text-coral-800 border-coral-300",
        badgeBg: "bg-coral-100",
        highlights: [
          "Auditory phonemic awareness & big picture books",
          "Colors, shapes, sorting, and fine-motor tracing",
          "Circle time vocabulary and musical rhythm games",
        ],
        message: "Your child is eligible for Nursery for 2025–26! The ideal age to fall in love with school life.",
      };
    } else if (ageYears < 5) {
      return {
        grade: "Lower KG (LKG)",
        ageRange: "4 to 5 Years",
        stage: "Letter Sounds & Early Numbers",
        tagColor: "text-ocean-800 border-ocean-300",
        badgeBg: "bg-ocean-100",
        highlights: [
          "Synthetic phonics letter-sound blending (CVC words)",
          "Concrete number sense 1 to 20 with math blocks",
          "Expressive drawing, clay sculpting, and collaborative play",
        ],
        message: "Your child is eligible for LKG! A vibrant year of budding language and number confidence.",
      };
    } else if (ageYears < 6) {
      return {
        grade: "Upper KG (UKG)",
        ageRange: "5 to 6 Years",
        stage: "Independent Reading & Logic",
        tagColor: "text-emerald-800 border-mint-300",
        badgeBg: "bg-mint-100",
        highlights: [
          "Fluent independent reading of decodable storybooks",
          "Early addition, spatial geometry, and measurement",
          "Creative writing journal and public speaking poise",
        ],
        message: "Your child is eligible for UKG! Preparing joyful young minds for formal primary schooling.",
      };
    } else if (ageYears < 7) {
      return {
        grade: "Primary Grade 1",
        ageRange: "6 to 7 Years",
        stage: "Formal Primary Inquiry",
        tagColor: "text-purple-800 border-purple-300",
        badgeBg: "bg-purple-100",
        highlights: [
          "Integrated English, Hindi, Mathematics & Environmental Studies",
          "STEM nature discovery, garden science, and sports agility",
          "Team problem-solving and moral character building",
        ],
        message: "Your child is eligible for Grade 1! A major, inspiring milestone in their academic journey.",
      };
    } else if (ageYears < 8) {
      return {
        grade: "Primary Grade 2",
        ageRange: "7 to 8 Years",
        stage: "Primary Exploration",
        tagColor: "text-pink-800 border-bubblegum-300",
        badgeBg: "bg-bubblegum-100",
        highlights: [
          "Reading comprehension, story chapter books, creative composition",
          "Mental mathematics, multiplication concepts with arrays",
          "Visual arts studio and performing theater arts",
        ],
        message: "Your child is eligible for Grade 2! Expanding analytical horizons and creative talents.",
      };
    } else {
      return {
        grade: "Primary Grades 3 to 5",
        ageRange: "8 to 10+ Years",
        stage: "Advanced Primary Foundations",
        tagColor: "text-slate-800 border-slate-300",
        badgeBg: "bg-slate-100",
        highlights: [
          "In-depth scientific investigation and environmental projects",
          "Logical deduction, applied arithmetic, and digital literacy basics",
          "Competitive team sports, leadership, and speech debates",
        ],
        message: "Your child is eligible for our Senior Primary batch! Inquire for specific section availability.",
      };
    }
  };

  const result = calculateGrade();

  return (
    <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-6 sm:p-10 relative overflow-hidden">
      
      {/* Decorative top ribbon */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sunshine-400 via-coral-500 to-ocean-500"></div>

      <div className="w-full max-w-4xl xl:max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sunshine-100 text-amber-900 border border-sunshine-200">
            <Calculator className="w-3.5 h-3.5 text-sunshine-600" />
            <span>Interactive Admission Guide</span>
          </div>
          
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Which Grade Fits Your Child for 2025–26?
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Select your child’s birth month and year to instantly view the recommended grade level as per Delhi-NCR educational guidelines (calculated as of 31st March 2025).
          </p>
        </div>

        {/* Input Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          <div>
            <label htmlFor="calc-month" className="block text-xs font-bold text-slate-700 mb-1.5">
              Birth Month
            </label>
            <select
              id="calc-month"
              value={birthMonth}
              onChange={(e) => setBirthMonth(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 bg-white shadow-sm"
            >
              {months.map((m, idx) => (
                <option key={idx} value={idx}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="calc-year" className="block text-xs font-bold text-slate-700 mb-1.5">
              Birth Year
            </label>
            <select
              id="calc-year"
              value={birthYear}
              onChange={(e) => setBirthYear(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 bg-white shadow-sm"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Real-time Calculated Result Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border-2 border-slate-200/80 space-y-4 animate-in fade-in duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold border ${result.badgeBg} ${result.tagColor} mb-1.5`}>
                Recommended Grade
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                {result.grade}
              </h4>
            </div>

            <div className="sm:text-right">
              <span className="text-xs font-semibold text-slate-500 block">Typical Age Bracket</span>
              <span className="font-bold text-ocean-600 text-sm">{result.ageRange}</span>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            {result.message}
          </p>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Curriculum & Developmental Focus:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {result.highlights.map((h, i) => (
                <div key={i} className="flex items-start text-xs text-slate-700 p-2.5 rounded-xl bg-white border border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-mint-500 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-xs text-slate-500">
              <Info className="w-4 h-4 mr-1 text-slate-400" />
              <span>Cutoff dates are subject to local Uttar Pradesh guidelines</span>
            </div>

            <Link
              href={`/admissions#enquiry-form`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-md transition-all whitespace-nowrap"
            >
              <span>Apply for {result.grade}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
