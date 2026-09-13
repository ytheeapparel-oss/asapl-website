import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  User, 
  ArrowRight, 
  Heart, 
  Tag, 
  ShieldAlert,
  Sun
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import ParentingPartnerShowcase from "@/components/ParentingPartnerShowcase";
import { PARENTING_ARTICLES, ParentingArticle } from "@/data/parenting-articles";

export const metadata: Metadata = {
  title: "Happy Parenting Hub | Child Development & Learning Guides Noida",
  description:
    "Expert parenting advice, early reading phonics strategies, screen-time balance, and healthy nutrition tips curated by ASAPL International educators for families in Noida.",
};

export default function HappyParentingPage() {
  const featuredArticle = PARENTING_ARTICLES[0];
  const otherArticles = PARENTING_ARTICLES.slice(1);

  const categories = [
    "All Guides",
    "Reading & Phonics",
    "Learning at Home",
    "Positive Parenting",
    "Nutrition & Wellness",
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Hero Banner - 100% CLEAN, BRIGHT & CLEAR IMAGE (ZERO BLACK SHADE) */}
      <section className="relative min-h-[70vh] lg:min-h-[78vh] w-full flex flex-col justify-between overflow-hidden bg-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* Crisp daylight photo background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/toddler-play.jpg"
            alt="Young Indian children playing and learning happily at ASAPL International Sector 55 Noida"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Floating clean white frosted card */}
        <div className="relative z-20 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10">
          <div className="w-full rounded-3xl bg-white/90 sm:bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
            
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-sunshine-100 border border-sunshine-300 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-5">
              <Sun className="w-4 h-4 text-sunshine-600" />
              <span className="uppercase tracking-wider font-extrabold text-amber-900">
                Parent Resource Center
              </span>
              <span className="text-amber-300">•</span>
              <span className="text-amber-900">Sector 55, Noida</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto">
              Happy Children Begin with{" "}
              <span className="bg-gradient-to-r from-sunshine-600 via-coral-500 to-bubblegum-500 bg-clip-text text-transparent">
                Supported Families
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-body tracking-normal">
                Nurturing Positive Parenting, Growth & Emotional Well-Being
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Explore practical, heartwarming, and expert-curated developmental articles written by the educators and child psychologists at ASAPL International. From managing healthy screen habits to creative phonics at home and balanced nutrition, we partner with you on every step of your child&apos;s journey.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl text-xs sm:text-sm">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sunshine-50 text-amber-900 font-bold border border-sunshine-200">
                📖 Expert Phonics & Reading Guides
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-800 font-bold border border-ocean-200">
                🥗 Healthy Tiffin & Nutrition Plans
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-800 font-bold border border-mint-200">
                📱 Balanced Screen-Time Frameworks
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#guides"
                className="inline-flex items-center px-9 py-4 rounded-full text-base font-bold text-slate-900 bg-sunshine-400 hover:bg-sunshine-300 shadow-playful hover:shadow-playful-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Browse Parenting Guides ↓
              </a>
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all shadow-md"
              >
                Admissions Information →
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream curved-edge-bottom pointer-events-none"></div>
      </section>

      {/* Main Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: "Happy Parenting" }]} />

        {/* Responsible Medical Guidance Disclaimer (Prompt Requirement #9) */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start space-x-3">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Parenting Resource Advisory:</strong> All articles published on Happy Parenting are developed for educational guidance, habit-building, and home literacy enrichment. For any pediatric medical, clinical dietary, or developmental concerns, always consult a qualified healthcare professional or pediatrician.
          </p>
        </div>

        {/* FEATURED HERO ARTICLE */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] overflow-hidden bg-slate-100">
                <Image
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sunshine-400 text-slate-950 shadow-md">
                    ★ Featured Resource
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-ocean-50 text-ocean-700 border border-ocean-200">
                    {featuredArticle.category}
                  </span>

                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-ocean-600 transition-colors leading-snug">
                    <Link href={`/happy-parenting/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2">
                    <span className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {featuredArticle.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/happy-parenting/${featuredArticle.slug}`}
                    className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 shadow-md transition-all"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>

                  <span className="text-xs text-slate-400">
                    Updated {new Date(featuredArticle.updatedDate).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <section id="guides" className="py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Latest Parenting Resources
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Actionable ideas to build happy, confident, and well-rounded children at home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-3xl bg-white border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-800 border shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center text-[11px] text-slate-400 space-x-2">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.authorRole}</span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-ocean-600 transition-colors leading-snug">
                      <Link href={`/happy-parenting/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/happy-parenting/${article.slug}`}
                      className="inline-flex items-center text-xs font-bold text-ocean-600 hover:text-ocean-700"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <span className="text-[11px] text-slate-400">
                      {new Date(article.publishedDate).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* 4. Looking for a School Partner Showcase (Section 4) - Full Length & Breadth */}
      <ParentingPartnerShowcase />

    </div>
  );
}
