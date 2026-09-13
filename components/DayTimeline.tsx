"use client";

import React, { useState } from "react";
import { 
  Sun, 
  BookOpen, 
  Apple, 
  Boxes, 
  Palette, 
  Smile, 
  Clock,
  Sparkles
} from "lucide-react";
import { DAY_DISCOVERY_STEPS, DayStep } from "@/data/school-data";

export default function DayTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "Apple":
        return <Apple className="w-5 h-5" />;
      case "Boxes":
        return <Boxes className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Smile":
      default:
        return <Smile className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
      
      {/* Step Navigation Bar for Desktop / Tablet */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {DAY_DISCOVERY_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border-2 ${
                isActive
                  ? "bg-white border-coral-400 shadow-playful transform -translate-y-1"
                  : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mb-2 shadow-sm transition-transform ${step.color} ${
                  isActive ? "scale-110" : "opacity-80"
                }`}
              >
                {getIcon(step.icon)}
              </div>
              <span className="text-[11px] font-extrabold text-slate-500 tracking-tight">
                {step.time}
              </span>
              <span className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                {step.title.split("&")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Highlight Card */}
      <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
        
        {/* Background accent wave */}
        <div className={`absolute top-0 left-0 right-0 h-2.5 ${DAY_DISCOVERY_STEPS[activeStep].color}`}></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0 ${DAY_DISCOVERY_STEPS[activeStep].color}`}
            >
              {getIcon(DAY_DISCOVERY_STEPS[activeStep].icon)}
            </div>

            <div className="space-y-1 text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-ocean-600" />
                <span>{DAY_DISCOVERY_STEPS[activeStep].time} Daily Routine</span>
              </div>
              
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                {DAY_DISCOVERY_STEPS[activeStep].title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl pt-1">
                {DAY_DISCOVERY_STEPS[activeStep].desc}
              </p>
            </div>
          </div>

          {/* Quick interactive next/prev buttons */}
          <div className="flex items-center space-x-2 self-end md:self-center">
            <button
              onClick={() => setActiveStep((prev) => (prev === 0 ? DAY_DISCOVERY_STEPS.length - 1 : prev - 1))}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev === DAY_DISCOVERY_STEPS.length - 1 ? 0 : prev + 1))}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 transition-colors shadow"
            >
              Next Step
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
