"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  X, 
  Maximize2, 
  Sun, 
  Heart,
  Video,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface VideoTab {
  id: string;
  title: string;
  category: string;
  description: string;
  videoSrc: string;
  poster: string;
  duration: string;
}

const VIDEO_TABS: VideoTab[] = [
  {
    id: "classroom-discovery",
    title: "Joyful Classroom Learning & Phonics",
    category: "Academic Discovery",
    description: "Watch our young learners interact with certified educators, explore synthetic phonics games, and practice concrete mathematics with hands-on wooden manipulatives.",
    videoSrc: "/videos/classroom-tour.mp4",
    poster: "/images/caring-teacher.jpg",
    duration: "1:24 Min",
  },
  {
    id: "arts-creativity",
    title: "Picasso Juniors Art & Pottery Studio",
    category: "Creative Arts",
    description: "Experience the vibrant energy of our art studio where children express their imagination through clay sculpting, watercolor painting, and recycled craft work.",
    videoSrc: "/videos/arts-tour.mp4",
    poster: "/images/art-creative.jpg",
    duration: "1:15 Min",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor Agility & Playground Fun",
    category: "Sports & Physical Play",
    description: "Watch children build motor agility, teamwork, and sportsmanship across our lush green campus playfields and indoor sensory arenas in Sector 55, Noida.",
    videoSrc: "/videos/sports-tour.mp4",
    poster: "/images/sports-activity.jpg",
    duration: "1:40 Min",
  },
];

export default function SchoolVideoTour() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const current = VIDEO_TABS[activeTab];

  return (
    <section className="py-24 lg:py-32 xl:py-36 bg-gradient-to-b from-white via-amber-50/30 to-cream relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sunshine-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-ocean-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="School Life in Motion"
          badgeColor="sunshine"
          title="Watch Our Joyful Learning Environment in Action"
          highlightWord="in Action"
          highlightColor="text-coral-500"
          subtitle="Experience the warmth, smiles, and vibrant classroom atmosphere of ASAPL International in Sector 55, Noida through our video tour."
        />

        {/* Video Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-8">
          {VIDEO_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(idx);
                setIsPlaying(true);
              }}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center space-x-2 border ${
                activeTab === idx
                  ? "bg-coral-500 text-white border-coral-500 shadow-playful transform -translate-y-0.5"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Main Video Frame (Playful Smart Screen Design - Full Breadth) */}
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="relative rounded-[36px] p-3 sm:p-5 bg-gradient-to-tr from-sunshine-400 via-coral-400 to-ocean-400 shadow-2xl">
            <div className="relative rounded-[24px] overflow-hidden bg-slate-950 aspect-video group">
              
              {/* Active Video Player */}
              <video
                key={current.id}
                src={current.videoSrc}
                poster={current.poster}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Info Ribbon */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-2"></span>
                  ASAPL Campus Video
                </span>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white">
                  Sector 55, Noida
                </span>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-20 flex items-center justify-between text-white">
                <div className="space-y-0.5 max-w-md">
                  <span className="text-[11px] font-bold text-sunshine-300 uppercase tracking-widest block">
                    {current.category}
                  </span>
                  <h4 className="font-heading text-base sm:text-xl font-bold line-clamp-1">
                    {current.title}
                  </h4>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Mute Toggle */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                    title={isMuted ? "Unmute video" : "Mute video"}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  {/* Fullscreen / Modal Tour */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                    title="Expand Video"
                    aria-label="Expand Video"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Enquire CTA */}
                  <a
                    href="#enquiry-form"
                    className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow transition-all"
                  >
                    <span>Schedule Campus Tour</span>
                  </a>
                </div>
              </div>

              {/* Center Play Indicator on Hover */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-slate-950/10 hover:bg-slate-950/30 transition-colors group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-coral-500/90 hover:bg-coral-500 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

            </div>
          </div>

          {/* Supporting video description */}
          <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm text-slate-700 font-medium">
                {current.description}
              </p>
              <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center text-mint-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Real Classrooms
                </span>
                <span>•</span>
                <span className="flex items-center text-ocean-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Certified Faculty
                </span>
                <span>•</span>
                <span className="flex items-center text-coral-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Sector 55, Noida
                </span>
              </div>
            </div>

            <a
              href="#enquiry-form"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-ocean-600 hover:bg-ocean-700 shadow-sm transition-colors whitespace-nowrap"
            >
              Book School Visit
            </a>
          </div>
        </div>

      </div>

      {/* Expanded Modal Lightbox Video */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={current.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

    </section>
  );
}
