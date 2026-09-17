import React from "react";
import { 
  ShieldCheck, 
  Camera, 
  UserCheck, 
  HeartHandshake, 
  Lock, 
  Sparkles, 
  AlertTriangle, 
  Droplets, 
  Flame, 
  Stethoscope, 
  EyeOff, 
  Smile
} from "lucide-react";

interface SafetyPoint {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function SafetyCharter() {
  const points: SafetyPoint[] = [
    {
      icon: <Camera className="w-5 h-5 text-ocean-600" />,
      title: "100% CCTV Surveillance",
      desc: "Continuous HD video monitoring across all classrooms, activity studios, corridors, and campus perimeter gates.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-coral-600" />,
      title: "Police-Verified Staff",
      desc: "Comprehensive background checks, police verification, and identity audits for all teachers, helpers, and drivers.",
    },
    {
      icon: <Lock className="w-5 h-5 text-mint-600" />,
      title: "Guarded Gate Security",
      desc: "Gated entry with 24/7 security personnel. Strict visitor ID logging; zero unauthorized visitors during school hours.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-purple-600" />,
      title: "Female Security & Attendants",
      desc: "Dedicated female attendants assist young children during restroom visits, snack times, and school van transit.",
    },
    {
      icon: <Smile className="w-5 h-5 text-sunshine-600" />,
      title: "Child-Safe Infrastructure",
      desc: "Rounded furniture corners, finger-pinch door protectors, electrical socket guards, and shock-absorbing rubber play flooring.",
    },
    {
      icon: <Droplets className="w-5 h-5 text-ocean-600" />,
      title: "Sanitization & Air Quality",
      desc: "Daily deep sanitization routines, child-height touchless washbasins, and clean cross-ventilated classroom spaces.",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-coral-600" />,
      title: "First-Aid & Medical Readiness",
      desc: "Certified pediatric first-aid station on campus and formal liaison with nearby medical facilities in Noida.",
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-600" />,
      title: "Fire Safety & Evacuation Drills",
      desc: "Equipped with certified fire extinguishers, multiple clear emergency exits, and regular child-friendly evacuation practice.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-mint-600" />,
      title: "Parent Pickup Authorization",
      desc: "Children are released strictly to parents or verified designated guardians presenting authenticated school pickup cards.",
    },
    {
      icon: <Droplets className="w-5 h-5 text-ocean-600" />,
      title: "RO Purified Drinking Water",
      desc: "Multi-stage Reverse Osmosis (RO) purified water stations with periodic microbiological water testing certificates.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-purple-600" />,
      title: "Positive Discipline & Zero Bullying",
      desc: "Strict zero-tolerance policy against physical reprimands, yelling, or bullying. Emotionally safe and kind classrooms.",
    },
    {
      icon: <EyeOff className="w-5 h-5 text-coral-600" />,
      title: "Student Privacy Protection",
      desc: "Rigorous student data protection. Photographs of children are never commercialized or shared without formal parental consent.",
    },
  ];

  return (
    <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-6 sm:p-10 relative overflow-hidden">
      
      {/* Decorative top ribbon */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-mint-500 via-ocean-500 to-purple-500"></div>

      <div className="text-center max-w-4xl xl:max-w-5xl mx-auto space-y-3 mb-12">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mint-100 text-emerald-900 border border-mint-200">
          <ShieldCheck className="w-4 h-4 mr-1.5 text-mint-600" />
          Our Sacred Commitment
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
          The ASPAL 12-Point Child Safety & Safeguarding Charter
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Because nothing is more precious than your child’s health, dignity, and emotional security. Every policy is enforced daily across our Sector 55, Noida campus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {points.map((pt, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-ocean-300 hover:shadow-md transition-all space-y-2 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {pt.icon}
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                {pt.title}
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-1">
              {pt.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <span>* Safety audits and staff training workshops are conducted quarterly.</span>
        <span className="font-bold text-mint-700 flex items-center">
          <ShieldCheck className="w-4 h-4 mr-1" />
          Sector 55, Noida Safe School Protocol
        </span>
      </div>

    </div>
  );
}
