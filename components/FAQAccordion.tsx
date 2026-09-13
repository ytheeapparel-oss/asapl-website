"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { FAQItem } from "@/data/school-data";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "admissions", label: "Admissions" },
    { id: "curriculum", label: "Curriculum & Methods" },
    { id: "safety", label: "Safety & Security" },
    { id: "campus", label: "Campus & Transport" },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6 w-full max-w-5xl xl:max-w-6xl mx-auto">
      
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? "bg-ocean-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-3.5 h-3.5" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(0);
            }}
            className="w-full pl-9 pr-3 py-1.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-200 bg-white"
          />
        </div>

      </div>

      {/* Accordion Items */}
      {filteredItems.length > 0 ? (
        <div className="space-y-3.5">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white border-ocean-300 shadow-md"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-ocean-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-800 flex items-center pr-4">
                    <span className="w-6 h-6 rounded-full bg-ocean-100 text-ocean-700 font-bold text-xs flex items-center justify-center mr-3 flex-shrink-0">
                      Q{idx + 1}
                    </span>
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? "bg-ocean-500 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
          No questions found matching &ldquo;{searchQuery}&rdquo;. Try another term or call us directly.
        </div>
      )}
    </div>
  );
}
