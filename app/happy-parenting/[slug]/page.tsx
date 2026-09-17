import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  CheckCircle2, 
  HelpCircle,
  ShieldAlert,
  Sun
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { PARENTING_ARTICLES, ParentingArticle } from "@/data/parenting-articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PARENTING_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = PARENTING_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | ASPAL International",
    };
  }

  return {
    title: `${article.title} | Happy Parenting Guide`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ParentingArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = PARENTING_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = PARENTING_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.featuredImage],
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "ASPAL International School",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aspal.co.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.aspal.co.in/happy-parenting/${article.slug}`,
    },
  };

  return (
    <div className="bg-cream min-h-screen">
      
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-14 sm:py-20">
        
        {/* Breadcrumbs Navigation */}
        <Breadcrumbs
          items={[
            { label: "Happy Parenting", href: "/happy-parenting" },
            { label: article.title },
          ]}
        />

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/happy-parenting"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-ocean-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to all parenting resources</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sunshine-100 text-amber-900 border border-sunshine-300">
            {article.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 pb-6 border-b border-slate-200">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1.5 text-ocean-600" />
              <span className="font-bold text-slate-800">{article.author}</span>
              <span className="text-slate-400 ml-1">({article.authorRole})</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-slate-400" />
              <span>Published {new Date(article.publishedDate).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[320px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl my-8 border-4 border-white bg-slate-100">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 850px"
          />
        </div>

        {/* Responsible Medical / Health Guidance Notice (Prompt Requirement #9) */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start space-x-3 mb-8">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Parenting & Wellness Disclaimer:</strong> This article is intended solely for educational, parenting, and home learning enrichment. It does not constitute medical, psychological, or pediatric nutritional diagnosis. For clinical health inquiries, please consult your family pediatrician or qualified medical specialist.
          </p>
        </div>

        {/* Table of Contents */}
        {article.tableOfContents.length > 0 && (
          <nav aria-label="Table of Contents" className="p-6 rounded-3xl bg-white border-2 border-slate-100 shadow-sm mb-10">
            <h3 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-ocean-600 hover:text-coral-500 font-semibold transition-colors"
                  >
                    {toc.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Main Article Content */}
        <article className="space-y-10 text-slate-800 leading-relaxed text-base">
          {article.contentSections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 pt-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}

              {section.calloutTip && (
                <div className="p-5 rounded-2xl bg-sunshine-50/70 border-l-4 border-sunshine-400 text-sm text-slate-800 my-4 shadow-sm">
                  <p className="font-bold text-amber-900 mb-1 flex items-center">
                    <Sun className="w-4 h-4 mr-1 text-sunshine-600" />
                    Teacher’s Practical Tip:
                  </p>
                  <p className="text-slate-700">{section.calloutTip}</p>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Practical Takeaways Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border-2 border-mint-200 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-emerald-950 mb-4 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-mint-600" />
            Key Parent Takeaways to Try This Week
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
            {article.practicalTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-mint-600 font-bold mr-2 text-base">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Frequently Asked Questions */}
        {article.faq && article.faq.length > 0 && (
          <div className="mt-12 space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
              Common Parent Questions on This Topic
            </h3>
            <div className="space-y-3">
              {article.faq.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-2">
                    {f.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags & Social Sharing Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Tags:</span>
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600"
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
            <Share2 className="w-4 h-4" />
            <span>Share Guide with Other Parents</span>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6">
            More Helpful Parenting Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-5 rounded-3xl bg-white border-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-ocean-600">
                    {rel.category} • {rel.readTime}
                  </span>
                  <h4 className="font-heading text-base font-bold text-slate-900 mt-1">
                    <Link href={`/happy-parenting/${rel.slug}`} className="hover:text-ocean-600 transition-colors">
                      {rel.title}
                    </Link>
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/happy-parenting/${rel.slug}`}
                    className="inline-flex items-center text-xs font-bold text-coral-600 hover:text-coral-700"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection
        title="Looking for a School That Partners with Families?"
        subtitle="Experience our warm child-centered culture in Sector 55, Noida. Book a campus tour today."
      />

    </div>
  );
}
