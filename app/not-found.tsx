import React from "react";
import Link from "next/link";
import { Home, Compass, Sparkles, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-cream">
      <div className="max-w-lg w-full text-center space-y-6">
        
        {/* Playful 404 Visual */}
        <div className="relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-sunshine-200 border-4 border-dashed border-sunshine-400 flex items-center justify-center mx-auto shadow-inner">
            <span className="font-heading text-5xl sm:text-6xl font-black text-amber-600">
              404
            </span>
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold text-xl shadow">
            ?
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-coral-100 text-coral-700">
            Page Not Found
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            Oops! We Wandered Off the Playground!
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved or doesn’t exist. Let&apos;s guide you back to the classroom!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-md transition-all"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>

          <Link
            href="/admissions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-ocean-700 bg-ocean-50 hover:bg-ocean-100 border border-ocean-200 transition-all"
          >
            <Sparkles className="w-4 h-4 mr-2 text-ocean-600" />
            Admissions 2025–26
          </Link>
        </div>

        {/* Help Link */}
        <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
          Need immediate assistance? Call our office at{" "}
          <a href="tel:9873539445" className="font-bold text-ocean-600 underline">
            +91 9873539445
          </a>
        </div>

      </div>
    </div>
  );
}
