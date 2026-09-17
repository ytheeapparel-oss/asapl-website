import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Navigation,
  Sun
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import ContactVisitShowcase from "@/components/ContactVisitShowcase";
import { SCHOOL_DATA } from "@/data/school-data";

export const metadata: Metadata = {
  title: "Contact Us & Campus Tour | ASPAL International Sector 55 Noida",
  description:
    "Contact ASPAL International primary school in Sector 55, Noida. Phone: +91 9873539445, Email: Rakeshpandey2001@gmail.com. Schedule a campus visit or submit an inquiry.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero Banner - 100% CLEAN, BRIGHT & CLEAR IMAGE (ZERO BLACK SHADE) */}
      <section className="relative min-h-[70vh] lg:min-h-[78vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* Crisp daylight photo background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/caring-teacher.jpg"
            alt="Caring Indian teacher mentoring young student at ASPAL International Sector 55 Noida"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Floating clean white frosted card */}
        <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10">
          <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
            
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-ocean-50 border border-ocean-200 text-ocean-900 text-xs sm:text-sm font-bold shadow-xs mb-5">
              <Sun className="w-4 h-4 text-ocean-600" />
              <span className="uppercase tracking-wider font-extrabold text-ocean-900">
                Connect with Our Academic Desk
              </span>
              <span className="text-ocean-300">•</span>
              <span className="text-ocean-900">Sector 55, Noida</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto">
              We Would Love to{" "}
              <span className="bg-gradient-to-r from-ocean-600 via-mint-600 to-sunshine-600 bg-clip-text text-transparent">
                Welcome Your Family
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-body tracking-normal">
                Visit Our Campus & Experience the ASPAL Difference
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Have questions about nursery or primary admissions, our experiential curriculum, safety protocols, or bus routes? Our dedicated admissions and academic counseling team in Sector 55, Noida is here to guide you every step of the way. We welcome parents to tour our sunlit classrooms and vibrant playfields.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-800 font-bold border border-ocean-200">
                📍 Conveniently Located in Sector 55, Noida
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sunshine-50 text-amber-900 font-bold border border-amber-200">
                🕒 Campus Tours: Mon–Sat 8:30 AM – 2:30 PM
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-800 font-bold border border-mint-200">
                📞 Instant Helpline: +91 9873539445
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SCHOOL_DATA.phone}`}
                className="inline-flex items-center px-9 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 mr-2 text-slate-900" />
                Call {SCHOOL_DATA.displayPhone}
              </a>
              <a
                href="#visit-campus"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2 text-ocean-600" />
                Plan Campus Visit ↓
              </a>
            </div>

          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream curved-edge-bottom pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Phone Card */}
          <div className="rounded-3xl p-8 bg-white border-2 border-sunshine-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-sunshine-100 text-sunshine-600 flex items-center justify-center">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">Call Us Directly</h3>
            <p className="text-xs text-slate-500">Admissions & Administrative Support</p>
            <a
              href={`tel:${SCHOOL_DATA.phone}`}
              className="text-lg font-bold text-ocean-600 hover:text-ocean-700 underline pt-1"
            >
              {SCHOOL_DATA.displayPhone}
            </a>
            <span className="text-[11px] text-slate-400">Monday – Saturday</span>
          </div>

          {/* Email Card */}
          <div className="rounded-3xl p-8 bg-white border-2 border-coral-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">Email Admissions</h3>
            <p className="text-xs text-slate-500">Direct Academic & Inquiries Inbox</p>
            <a
              href={`mailto:${SCHOOL_DATA.email}`}
              className="text-sm font-bold text-coral-600 hover:text-coral-700 underline truncate max-w-full pt-1"
            >
              {SCHOOL_DATA.email}
            </a>
            <span className="text-[11px] text-slate-400">Responses within 24 business hours</span>
          </div>

          {/* Location Card */}
          <div className="rounded-3xl p-8 bg-white border-2 border-ocean-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-ocean-100 text-ocean-600 flex items-center justify-center">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">Campus Location</h3>
            <p className="text-xs text-slate-500">Sector 55, Noida, UP, India</p>
            <p className="text-xs font-semibold text-slate-700">
              Convenient access for Sectors 55, 56, 62, 12 & 22
            </p>
            <a
              href="https://maps.google.com/?q=Sector+55+Noida+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-ocean-600 underline pt-1"
            >
              Get Directions on Google Maps →
            </a>
          </div>

        </div>

        {/* Contact Form & Campus Information (2-Col Grid) */}
        <div id="visit-campus" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Campus Timings, Directions & Notice (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* School Timings & Office Hours Box */}
            <div className="rounded-3xl bg-white border-2 border-slate-100 p-6 sm:p-8 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-ocean-600">
                <Clock className="w-4 h-4" />
                <span>Operating Timings (Rule #22 Compliance)</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900">
                School Hours & Visiting Schedule
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900">Primary Student Hours:</p>
                  <p className="text-slate-600">[ADD SCHOOL TIMINGS e.g. 8:30 AM – 2:00 PM (Monday to Friday)]</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900">Admissions & Administrative Office:</p>
                  <p className="text-slate-600">[ADD OFFICE HOURS e.g. 8:00 AM – 3:30 PM (Monday to Saturday)]</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900">Principal Meeting Window:</p>
                  <p className="text-slate-600">[ADD PRINCIPAL VISITING HOURS: By prior appointment between 10:00 AM – 12:30 PM]</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                * Note: Campus tours are scheduled during active school hours so prospective families can observe classroom energy firsthand.
              </p>
            </div>

            {/* Driving Directions & Landmarks */}
            <div className="rounded-3xl bg-white border-2 border-slate-100 p-6 sm:p-8 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-mint-600">
                <Navigation className="w-4 h-4" />
                <span>How to Reach Us in Sector 55</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900">
                Getting to ASPAL International
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p>
                  <strong>Address:</strong> ASPAL International, Sector 55, Noida, Uttar Pradesh 201301, India.
                </p>
                <p>
                  <strong>Nearby Landmarks:</strong> [ADD EXACT STREET ADDRESS & NEAREST NOTABLE LANDMARK IN SECTOR 55 NOIDA].
                </p>
                <p>
                  <strong>Accessibility:</strong> Well-connected via wide Noida sector roads with dedicated student drop-off zones and secure perimeter parking.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/admissions#enquiry-form"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  Ready to Apply? Go to Admissions
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Interactive Map Section */}
        <section className="mt-16 rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl bg-white">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ocean-600">
                Campus Location Map
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                ASPAL International • Sector 55, Noida
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Sector+55+Noida+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow transition-colors"
            >
              Open Live Directions on Google Maps ↗
            </a>
          </div>

          {/* Interactive Google Map Embed for Sector 55 Noida */}
          <div className="relative w-full h-[480px] lg:h-[550px] bg-slate-100">
            <iframe
              title="ASPAL International School Location Map Sector 55 Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.235544154427!2d77.34825964999999!3d28.59050965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5075677025f%3A0xb35a0928a30ec8b7!2sSector%2055%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            ></iframe>
          </div>
        </section>

      </div>

      {/* 3. We Look Forward to Meeting You Showcase (Section 3) - Full Length & Breadth */}
      <ContactVisitShowcase />

    </div>
  );
}
