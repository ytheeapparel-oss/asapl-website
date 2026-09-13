"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sun, 
  BookOpen, 
  Palette, 
  Sprout, 
  Smile, 
  Activity, 
  Bus, 
  Utensils,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface Facility {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

const FACILITIES: Facility[] = [
  {
    id: "smart-classrooms",
    name: "Sunlit Experiential Classrooms",
    category: "Learning Spaces",
    tagline: "Airy, natural light filled spaces designed for joyful discovery",
    description: "Our classrooms feature expansive windows, child-scale modular furniture that rearranges effortlessly for group circles or individual creation, non-toxic organic wall finishes, and interactive multimedia touch boards.",
    features: [
      "Natural cross-ventilation and air-purified learning zones",
      "Ergonomic, rounded-corner child furniture to prevent accidents",
      "Low open shelving empowering children to pick their learning materials",
      "Continuous CCTV coverage for parental peace of mind",
    ],
    image: "/images/caring-teacher.jpg",
    color: "bg-sunshine-500",
  },
  {
    id: "wonder-library",
    name: "The Wonder Tree Phonics & Story Library",
    category: "Literacy Sanctuary",
    tagline: "A magical oasis that sparks an insatiable appetite for reading",
    description: "Curated with over 800+ international and Indian picture books, big books, tactile touch-and-feel books, and comfortable bean bags under our handcrafted decorative 'Story Tree'.",
    features: [
      "Graded synthetic phonics reading series for all stages",
      "Storytelling amphitheater with hand puppets and flannel boards",
      "Audio listening stations for bilingual story immersion",
      "Weekly library checkout cards teaching responsibility",
    ],
    image: "/images/reading-library.jpg",
    color: "bg-ocean-500",
  },
  {
    id: "art-studio",
    name: "Picasso Juniors Art & Pottery Studio",
    category: "Creative Expression",
    tagline: "Where imagination has no borders and every mess is a masterpiece",
    description: "Equipped with standing easels, terracotta clay sculpting tables, natural non-toxic vegetable dyes, and drying racks where children explore watercolors, finger paints, block printing, and paper mache.",
    features: [
      "Natural light exposure to observe true color tones",
      "Safe child-height clay pottery wheels and sculpting tools",
      "Dedicated recycled crafts corner promoting eco-consciousness",
      "Annual school gallery exhibition celebrating every student",
    ],
    image: "/images/art-creative.jpg",
    color: "bg-purple-500",
  },
  {
    id: "nature-garden",
    name: "Little Explorers STEM & Nature Garden",
    category: "Outdoor Science",
    tagline: "Digging hands in soil to discover botany, weather, and life cycles",
    description: "An outdoor living science lab where children plant vegetable seeds, observe butterfly pollination, measure rain gauges, and study compost worms with magnifying glasses.",
    features: [
      "Sensory herbal garden (mint, tulsi, lemongrass, lavender)",
      "Child-safe weather station with wind vanes and thermometers",
      "Hands-on seed germination and watering routines",
      "Bird feeders and safe insect observation magnifying domes",
    ],
    image: "/images/science-stem.jpg",
    color: "bg-mint-500",
  },
  {
    id: "indoor-soft-play",
    name: "Indoor Soft-Play & Sensory Arena",
    category: "Motor Agility",
    tagline: "Padded active haven for rainy days and motor coordination",
    description: "A climate-controlled play arena lined with thick shock-absorbing safety mats, soft foam climbing pyramids, sensory balance beams, and colorful ball pools that build gross motor bravery.",
    features: [
      "Padded walls and anti-microbial medical grade foam mats",
      "Vestibular sensory swings and crawl tunnels",
      "Encourages balance, risk assessment, and active physical resilience",
      "Supervised by certified early childhood physical educators",
    ],
    image: "/images/toddler-play.jpg",
    color: "bg-coral-500",
  },
  {
    id: "safe-transport",
    name: "GPS-Tracked Safe School Vans",
    category: "Safety & Transport",
    tagline: "Comfortable, monitored daily transit across Noida sectors",
    description: "Our dedicated school vans cover key residential sectors of Noida with speed limiters, on-board CCTV cameras, seat belts, and caring female attendants for safe door-to-school transit.",
    features: [
      "Real-time GPS tracking accessible by school administration",
      "Female attendants accompany children on every single route",
      "Rigorous driver police verification and regular breathalyzer checks",
      "[ADD NOIDA BUS ROUTES: Inquire at campus desk for route maps]",
    ],
    image: "/images/sports-activity.jpg",
    color: "bg-bubblegum-500",
  },
];

export default function CampusFacilities() {
  const [activeId, setActiveId] = useState<string>(FACILITIES[0].id);

  const activeFacility = FACILITIES.find((f) => f.id === activeId) || FACILITIES[0];

  return (
    <div className="w-full">
      
      {/* Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 justify-start lg:justify-center">
        {FACILITIES.map((facility) => {
          const isActive = facility.id === activeId;
          return (
            <button
              key={facility.id}
              onClick={() => setActiveId(facility.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-2 border shadow-sm ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-0.5"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${facility.color}`}></span>
              <span>{facility.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Facility Display */}
      <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 animate-in fade-in duration-300">
        
        {/* Left Col: Image (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-slate-100">
          <Image
            src={activeFacility.image}
            alt={activeFacility.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-white/20 backdrop-blur-md border border-white/30 text-white mb-2">
              {activeFacility.category}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
              {activeFacility.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              {activeFacility.tagline}
            </p>
          </div>
        </div>

        {/* Right Col: Details (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-slate-900">
              Campus Environment Highlight
            </h4>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeFacility.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Facility Features:
              </span>
              <ul className="space-y-2">
                {activeFacility.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-mint-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Located at Sector 55, Noida
            </span>
            <a
              href="#enquiry-form"
              className="px-5 py-2 rounded-full text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow transition-all"
            >
              Book a Walkthrough
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
