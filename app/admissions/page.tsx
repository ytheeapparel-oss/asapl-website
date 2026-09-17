import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Clock, 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Info, 
  Check 
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdmissionForm from "@/components/AdmissionForm";
import AgeCalculator from "@/components/AgeCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import AdmissionsTourShowcase from "@/components/AdmissionsTourShowcase";
import { SCHOOL_DATA, FAQ_DATA } from "@/data/school-data";

export const metadata: Metadata = {
  title: "Nursery & Primary School Admissions 2025–26 | Sector 55 Noida | ASAPL International",
  description:
    "Admissions open for 2025-26 at ASAPL International (Aspal Juniors), Sector 55, Noida. Playgroup, Nursery, LKG, UKG & Primary school admissions. Transparent process, age eligibility criteria, campus visits, and online application form.",
  keywords: [
    "nursery admission in noida 2025-26",
    "school admission sector 55 noida",
    "pre school admission noida",
    "primary school admission criteria noida",
    "play school admission near sector 56 noida",
    "kindergarten admissions sector 62 noida",
    "nursery admission form noida",
  ],
};

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Online Enquiry or Campus Walk-in",
      desc: "Submit the quick enquiry form below, call our admissions desk at +91 9873539445, or visit our Sector 55, Noida campus to receive the school prospectus.",
      color: "bg-sunshine-500",
    },
    {
      step: "02",
      title: "Campus Walkthrough & Parent Interaction",
      desc: "Join an informal, friendly campus visit. Tour our sunlit classrooms, art and phonics discovery zones, outdoor sports field, and discuss your child’s needs with our educators.",
      color: "bg-ocean-500",
    },
    {
      step: "03",
      title: "Child Familiarization Session",
      desc: "No stressful exams or high-pressure interviews! We invite your child for a joyful play session in our classroom so our teachers can understand their comfort, readiness, and language foundation.",
      color: "bg-coral-500",
    },
    {
      step: "04",
      title: "Enrolment & Welcome Pack",
      desc: "Complete the document verification and registration formalities to secure your child’s seat for the 2025-26 academic term. Welcome to the ASAPL family!",
      color: "bg-mint-500",
    },
  ];

  const ageGuidelines = [
    {
      grade: "Toddlers / Playgroup",
      ageBracket: "2 to 3 Years",
      focus: "Sensory play, gentle social transition, motor agility, nursery rhymes",
    },
    {
      grade: "Nursery",
      ageBracket: "3 to 4 Years",
      focus: "Synthetic phonics readiness, vocabulary, color discovery, circle time",
    },
    {
      grade: "Lower Kindergarten (LKG)",
      ageBracket: "4 to 5 Years",
      focus: "Letter-sound blending, number sense 1-20, drawing, social teamwork",
    },
    {
      grade: "Upper Kindergarten (UKG)",
      ageBracket: "5 to 6 Years",
      focus: "Fluent decodable reading, concrete addition/subtraction, writing fluency",
    },
    {
      grade: "Primary Grades 1 to 5",
      ageBracket: "6 to 10+ Years",
      focus: "Holistic primary curriculum, science inquiry, environmental studies, sports, art",
    },
  ];

  const requiredDocuments = [
    "Original Birth Certificate of the child (with 2 photocopies)",
    "Proof of Residence in Noida/NCR (Aadhaar Card, Passport, Electricity Bill, or Rent Agreement)",
    "4 recent passport-size photographs of the child",
    "2 recent passport-size photographs each of mother and father/guardian",
    "Child's Immunization / Vaccination Record Card copy",
    "Previous School Report Card & Transfer Certificate (for Grade 1 and above)",
    "Aadhaar Card copy of child (if available)",
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero Section - 100% CLEAN, BRIGHT & CLEAR IMAGE (ZERO BLACK SHADE) */}
      <section className="relative min-h-[70vh] lg:min-h-[78vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* Crisp daylight photo background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/hero-indian-kids.jpg"
            alt="Smiling Indian primary school students at ASAPL International Sector 55 Noida"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Floating clean white frosted card */}
        <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10">
          <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
            
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-coral-50 border border-coral-200 text-coral-800 text-xs sm:text-sm font-bold shadow-xs mb-5">
              <Sparkles className="w-4 h-4 text-coral-600 animate-pulse" />
              <span className="uppercase tracking-wider font-extrabold text-coral-800">
                Admissions Open for {SCHOOL_DATA.admissionsYear}
              </span>
              <span className="text-coral-300">•</span>
              <span>Playgroup to Grade 5</span>
              <span className="text-coral-300">•</span>
              <span className="text-coral-800">Sector 55, Noida</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto">
              Your Child’s Educational Journey{" "}
              <span className="bg-gradient-to-r from-coral-500 via-amber-500 to-sunshine-600 bg-clip-text text-transparent">
                Starts Here
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-body tracking-normal">
                Transparent, Child-Friendly & Stress-Free Admissions
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Welcome to ASAPL International, Sector 55, Noida. We believe the admission experience should be welcoming and anxiety-free for every family. Explore our step-by-step admission roadmap, age eligibility criteria, campus tour bookings, and transparent documentation guidelines designed to support your child&apos;s joyful transition into school life.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-800 font-bold border border-coral-200">
                ✅ No Written Screening Tests for Toddlers
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-200">
                🎒 Interactive Play Familiarization
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-800 font-bold border border-mint-200">
                🏫 Limited Batch Size Admissions
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center px-9 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Fill Admission Enquiry Form ↓
              </a>
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 mr-2 text-ocean-600" />
                Call: {SCHOOL_DATA.displayPhone}
              </a>
            </div>

          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream curved-edge-bottom pointer-events-none"></div>
      </section>

      {/* Main Content Area */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: "Admissions" }]} />

        {/* 1. ADMISSION PROCESS (4 STEPS) */}
        <section className="py-16 lg:py-24">
          <SectionHeading
            badge="Simple 4-Step Journey"
            badgeColor="sunshine"
            title="A Stress-Free, Child-Friendly Admission Process"
            highlightWord="Child-Friendly"
            highlightColor="text-coral-500"
            subtitle="We believe enrolling your child into primary school should be an exciting milestone filled with reassurance, not bureaucratic anxiety."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border-2 border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-heading font-black text-xl shadow-md ${item.color}`}
                  >
                    {item.step}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-400 group-hover:text-ocean-600">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. INTERACTIVE AGE & GRADE CALCULATOR */}
        <section className="py-16 lg:py-24 border-t border-slate-200/60">
          <AgeCalculator />
        </section>

        {/* 3. AGE ELIGIBILITY CRITERIA TABLE */}
        <section className="py-16 lg:py-24 border-t border-slate-200/60">
          <SectionHeading
            badge="Eligibility"
            badgeColor="ocean"
            title="Grade Level & Age Guidelines"
            highlightWord="Age Guidelines"
            highlightColor="text-ocean-600"
            subtitle="Age benchmarks ensure children are developmentally ready to thrive in their social and educational peer groups."
          />

          {/* Rule #22 Age Cutoff Disclaimer Note */}
          <div className="mt-8 mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-4xl mx-auto flex items-start space-x-2">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Administrative Rule Note:</strong> [ADD EXACT AGE CUT-OFF DATE e.g. as of 31st March of the academic year]. Age brackets listed below represent standard primary education guidelines. Special exceptions may be considered following a child development assessment.
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-slate-100 bg-white shadow-md">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-heading">
                  <th className="py-4 px-6 font-bold">Grade / Class</th>
                  <th className="py-4 px-6 font-bold">Age Bracket</th>
                  <th className="py-4 px-6 font-bold">Core Learning Focus</th>
                  <th className="py-4 px-6 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ageGuidelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {row.grade}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-ocean-50 text-ocean-700 border border-ocean-200">
                        {row.ageBracket}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">
                      {row.focus}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="#enquiry-form"
                        className="text-xs font-bold text-coral-600 hover:text-coral-700 underline"
                      >
                        Enquire →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. REQUIRED DOCUMENTS CHECKLIST & FEE INFO */}
        <section className="py-16 lg:py-24 border-t border-slate-200/60 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Documents Checklist (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-slate-100 p-8 sm:p-10 shadow-md space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-ocean-600">
                Document Checklist
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Documents Required for Enrolment
              </h3>
              <p className="text-xs text-slate-500">
                Keep self-attested copies ready during your campus visit for swift verification.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-mint-100 text-mint-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fee & Transparent Policy Placeholder (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-sunshine-50 border-2 border-sunshine-200 p-8 sm:p-10 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sunshine-500 text-white flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Fee Structure & Policy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ASAPL International is committed to transparent, fair, and competitive fee policies for families residing in Noida.
              </p>

              {/* Rule #22 Fee Placeholder Notice */}
              <div className="p-4 rounded-2xl bg-white border border-amber-300 text-xs text-amber-950 space-y-2">
                <p className="font-bold">Transparent Fee Notice (Rule #22 Compliance):</p>
                <p className="text-slate-600">
                  [ADD DETAILED FEE STRUCTURE: Admission Fee, Composite Tuition Fee, Activity Fee, Transport Charges & Sibling Concession Policy].
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Fee sheets with itemized payment terms are presented in person during the campus tour.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Call Admissions: {SCHOOL_DATA.displayPhone}
              </a>
            </div>
          </div>

        </section>

        {/* 5. THE INTERACTIVE ADMISSION ENQUIRY FORM */}
        <section id="enquiry-form" className="py-20 lg:py-28 border-t border-slate-200/60 w-full max-w-5xl xl:max-w-6xl mx-auto">
          <AdmissionForm />
        </section>

        {/* 6. ADMISSION FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 lg:py-28 border-t border-slate-200/60">
          <SectionHeading
            badge="Got Questions?"
            badgeColor="purple"
            title="Admissions & Campus FAQ"
            highlightWord="FAQ"
            highlightColor="text-coral-500"
          />

          <div className="mt-12">
            <FAQAccordion items={FAQ_DATA} />
          </div>
        </section>

      </div>

      <AdmissionsTourShowcase />

    </div>
  );
}
