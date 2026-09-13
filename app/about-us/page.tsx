import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  BookOpen, 
  Eye, 
  Target, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Sun,
  Award,
  Smile
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SafetyCharter from "@/components/SafetyCharter";
import AboutHero from "@/components/AboutHero";
import CampusCelebrationShowcase from "@/components/CampusCelebrationShowcase";
import AboutWarmEnvironment from "@/components/AboutWarmEnvironment";
import { SCHOOL_DATA } from "@/data/school-data";

export const metadata: Metadata = {
  title: "About Us | ASAPL International Primary School Noida",
  description:
    "Discover the philosophy, caring educators, and child-safe campus of ASAPL International in Sector 55, Noida. Cultivating confident learners through happy, experiential education.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Top Hero Banner with Uploaded Image Full Length & Breadth */}
      <AboutHero />

      {/* Main Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* 1. WELCOME & OUR STORY */}
        <section className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Our Story & Origins"
              badgeColor="sunshine"
              title="A School Built on Wonder, Respect & Joy"
              highlightWord="Wonder"
              highlightColor="text-coral-500"
              subtitle="ASAPL International was conceived with a singular heartfelt objective: to create a primary school in Sector 55, Noida where academic excellence never comes at the cost of childhood happiness."
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                In an era where early education often resembles high-pressure testing, ASAPL International returns to the essence of childhood: playful inquiry, multisensory wonder, and empathetic relationships between teachers and children.
              </p>
              <p>
                Located in Sector 55, Noida, our campus was deliberately designed with open, sunny classrooms, child-scale tactile furniture, lush outdoor green corners, and interactive learning studios where children develop foundational literacy, numeracy, and social-emotional maturity at their own developmental pace.
              </p>
            </div>

            {/* Factual Transparency Note (Rule #22) */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-700" />
                School Accreditation & Academic Governance Notice:
              </p>
              <p className="text-slate-600">
                [ADD ESTABLISHMENT YEAR] • [ADD CBSE / STATE AFFILIATION NUMBER & REGISTRATION DETAILS] • [ADD FORMAL ACCREDITATIONS & GOVERNING BODY DETAILS]. For complete regulatory documentation, visit the campus office.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <Image
                src="/images/hero-indian-kids.jpg"
                alt="Cute smiling Indian primary school students at ASAPL International Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-ocean-300 max-w-xs animate-float">
              <p className="text-xs font-bold text-ocean-600 uppercase tracking-wide">Our Motto</p>
              <p className="font-heading font-bold text-slate-900 text-sm">
                Little Steps. Big Dreams.
              </p>
              <p className="text-[11px] text-slate-500">Every child has an extraordinary voice waiting to shine.</p>
            </div>
          </div>

        </section>

        {/* 2. VISION & MISSION */}
        <section className="py-20 lg:py-28 border-t border-slate-200/60">
          <SectionHeading
            badge="Our Guiding Compass"
            badgeColor="ocean"
            title="Vision & Mission That Directs Every Lesson"
            highlightWord="Vision & Mission"
            highlightColor="text-sunshine-600"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Vision Card */}
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-sunshine-50 via-white to-amber-50 border-2 border-sunshine-200 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-sunshine-500 text-white flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">Our Vision</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Illuminating the Lifelong Joy of Discovery
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To be Noida’s benchmark for joyful primary education, nurturing compassionate, curious, and resilient young citizens who possess strong moral values, creative independent minds, and deep love for continuous learning.
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-ocean-50 via-white to-sky-50 border-2 border-ocean-200 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-ocean-500 text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-ocean-800">Our Mission</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Nurturing Potential in a Safe, Loving Sanctuary
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To provide a high-quality, inclusive, and experiential primary curriculum supported by caring certified educators, interactive learning spaces, low student-teacher ratios, and an authentic parent partnership that honors every child’s dignity.
              </p>
            </div>

          </div>
        </section>

        {/* 3. OUR PHILOSOPHY & APPROACH TO LEARNING */}
        <section className="py-20 lg:py-28 border-t border-slate-200/60">
          <SectionHeading
            badge="Our Pedagogy"
            badgeColor="coral"
            title="The 5 ASAPL Educational Principles"
            highlightWord="Principles"
            highlightColor="text-ocean-600"
            subtitle="How we bridge theory with joyful classroom practice every single day."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-coral-100 text-coral-600 flex items-center justify-center font-bold">1</div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Child-First Empathy</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe a child who feels emotionally secure and heard can learn anything. Teachers listen actively, never shame, and celebrate small breakthroughs daily.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold">2</div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Concrete Before Abstract</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before writing numbers on paper, children count physical pinecones, weigh wooden blocks, and feel textured letters with their fingertips.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sunshine-100 text-sunshine-600 flex items-center justify-center font-bold">3</div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Synthetic Phonics Mastery</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Teaching reading through multi-sensory letter sounds and rhythmic blending rather than rote look-and-say, creating confident, independent readers early.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-mint-100 text-mint-600 flex items-center justify-center font-bold">4</div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Creative Agency</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Art, music, building blocks, and drama are treated with equal reverence alongside math and language, giving every unique cognitive style an avenue to shine.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">5</div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Moral Character & Kindness</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Politeness, gratitude, environmental care, and respectful peer communication are woven organically into morning circle times and collaborative games.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-bubblegum-50/60 border border-bubblegum-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-bubblegum-700 uppercase">Parent Involvement</span>
                <h4 className="font-heading text-lg font-bold text-slate-900 mt-1">Open-Door Partnership</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Parents are our co-educators. We share regular developmental milestone portfolios and host parenting discussions.
                </p>
              </div>
              <Link href="/admissions" className="text-xs font-bold text-bubblegum-700 hover:underline">
                Discover Admission Details →
              </Link>
            </div>

          </div>
        </section>

        {/* 4. THE 12-POINT CHILD SAFETY & SAFEGUARDING CHARTER */}
        <section className="py-20 lg:py-28 border-t border-slate-200/60">
          <SafetyCharter />
        </section>

        {/* 5. LEADERSHIP & EDUCATORS PLACEHOLDER (RULE #22 STRICT COMPLIANCE) */}
        <section className="py-20 lg:py-28 border-t border-slate-200/60">
          <SectionHeading
            badge="Leadership & Faculty"
            badgeColor="purple"
            title="Guided by Compassionate Mentors"
            highlightWord="Mentors"
            highlightColor="text-sunshine-600"
            subtitle="Meet the hearts that guide our primary learners every day."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="p-8 rounded-3xl bg-white border-2 border-slate-100 shadow-md space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700 uppercase">
                From the Head of School
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                A Message from the Principal
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &ldquo;Our promise to every parent is simple: we will look after your child with the same patience, tenderness, and respect we would wish for our own children. Every morning when our school bus pulls in or parents drop their little ones at the gate, our joy is to see smiles replace tears and curiosity replace doubt.&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="font-heading font-bold text-slate-800">
                  [ADD PRINCIPAL’S NAME & CREDENTIALS]
                </p>
                <p className="text-xs text-slate-500">
                  Head of School, ASAPL International, Sector 55, Noida
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-sunshine-50/50 border-2 border-sunshine-200 space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sunshine-200 text-amber-900 uppercase">
                Faculty Standards
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Our Teacher Selection & Training
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-sunshine-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Certified in Early Childhood Care & Primary Education (NTT / B.Ed / Montessori certified).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-sunshine-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Trained in positive discipline, emotional co-regulation, and non-violent communication.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-sunshine-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous professional development workshops in synthetic phonics and concrete math heuristics.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-sunshine-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>[ADD TOTAL FACULTY COUNT & AVERAGE YEARS OF TEACHING EXPERIENCE AS PER RECORD].</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

      </div>

      {/* 6. Full Length & Breadth Campus Celebration Showcase (User Uploaded Image) */}
      <CampusCelebrationShowcase />

      {/* 8. Panel 8: Experience Our Warm School Environment (User Uploaded Full Length & Breadth Image) */}
      <AboutWarmEnvironment />

    </div>
  );
}
