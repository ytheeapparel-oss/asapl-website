"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_DATA, GalleryImage } from "@/data/gallery-data";

export default function GalleryWithLightbox() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Activities", "Creativity", "Play", "Celebrations"];

  const filteredImages = activeCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, showNext, showPrev]);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                isActive
                  ? "bg-coral-500 text-white shadow-playful hover:bg-coral-600 transform -translate-y-0.5"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, idx) => (
          <div
            key={image.id}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-64 sm:h-72 border-2 border-transparent hover:border-sunshine-400"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-bold text-sunshine-300 uppercase tracking-wider mb-1">
                {image.category}
              </span>
              <h4 className="font-heading text-base font-bold text-white leading-snug">
                {image.title}
              </h4>
              <div className="mt-3 flex items-center text-xs text-slate-200">
                <Maximize2 className="w-3.5 h-3.5 mr-1 text-sunshine-400" />
                <span>Click to expand view</span>
              </div>
            </div>

            {/* Corner category tag */}
            <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image in Lightbox */}
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <span className="text-xs font-bold text-sunshine-400 uppercase tracking-widest block mb-1">
                {filteredImages[selectedImageIndex].category} ({selectedImageIndex + 1} of {filteredImages.length})
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                {filteredImages[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-lg mx-auto">
                {filteredImages[selectedImageIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
