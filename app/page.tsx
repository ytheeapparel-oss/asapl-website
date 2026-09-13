import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Users, 
  SmilePlus, 
  Smile,
  GraduationCap, 
  Star, 
  CheckCircle2, 
  Layers,
  Compass,
  Palette,
  BrainCircuit,
  MessageCircle,
  Puzzle,
  Sun,
  School,
  MapPin,
  Check,
  Video,
  Phone,
  Calendar
} from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import DayTimeline from "@/components/DayTimeline";
import GalleryWithLightbox from "@/components/GalleryWithLightbox";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import AdmissionForm from "@/components/AdmissionForm";
import CampusFacilities from "@/components/CampusFacilities";
import AgeCalculator from "@/components/AgeCalculator";
import SchoolVideoTour from "@/components/SchoolVideoTour";
import { 
  SCHOOL_DATA, 
  PROGRAMS_DATA, 
  WHY_CHOOSE_DATA, 
  FAQ_DATA 
} from "@/data/school-data";
import { PARENTING_ARTICLES } from "@/data/parenting-articles";

export default function HomePage() {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <Heart className="w-6 h-6 text-sunshine-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-ocean-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-mint-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-coral-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-purple-600" />;
      case "SmilePlus":
      default:
        return <SmilePlus className="w-6 h-6 text-bubblegum-600" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-cream">
      
      {/* 1. HERO SECTION WITH ANIMATED LOOPING VIDEO */}
      <HeroVideo />

      {/* 2. WELCOME TO ASAPL INTERNATIONAL (SPLIT-SCREEN STORYTELLING - FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Image */}
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
              <Image
                src="/images/caring-teacher.jpg"
                alt="Caring Indian teacher guiding smiling young school children in modern Noida classroom"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Floating Secondary Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-sunshine-300 max-w-xs animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-sunshine-100 flex items-center justify-center text-sunshine-600 font-bold flex-shrink-0">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-slate-900">Sector 55, Noida</p>
                  <p className="text-xs text-slate-500">Child-Centric Campus Designed for Joy</p>
                </div>
              </div>
            </div>

            {/* Decorative organic blob in background */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-ocean-100 rounded-full blur-2xl -z-10 pointer-events-none"></div>

          </div>

          {/* Right Column: Warm Welcome Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <SectionHeading
              align="left"
              badge="Welcome to ASAPL International"
              badgeColor="sunshine"
              title="Where Curiosity Blossoms Into Radiant Confidence"
              highlightWord="Curiosity"
              highlightColor="text-coral-500"
              subtitle="Every child enters this world with an innate spark of wonder. At ASAPL International in Sector 55, Noida, we build an emotionally secure, colorful sanctuary where young minds flourish through experiential learning, caring guidance, and boundless joyful discovery."
            />

            <div className="space-y-4 pt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                We believe that the early school years are not a race to memorize facts, but an adventure in discovering who you are. Our compassionate educators honor each child&apos;s unique pace, cultivating the courage to ask questions, experiment without fear of failure, and build lifelong friendships.
              </p>
              <p>
                From sensory phonics and concrete mathematics to rhythmic music, sports agility, and expressive studio arts, every corner of our Sector 55 campus is thoughtfully crafted to make children feel celebrated, protected, and inspired.
              </p>
            </div>

            {/* Pillar checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sunshine-500 flex-shrink-0" />
                <span>Happy, Emotionally Safe Classrooms</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                <span>Play-Based & Concrete Phonics</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                <span>Low Student-to-Teacher Ratio</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0" />
                <span>100% CCTV & Safety Protocols</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <Link
                href="/about-us"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-ocean-500 hover:bg-ocean-600 shadow-playful hover:shadow-playful-hover transition-all"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-ocean-600 transition-colors"
              >
                <span>View Admissions →</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. DEDICATED ANIMATED SCHOOL VIDEO TOUR SECTION */}
      <div id="school-video-tour">
        <SchoolVideoTour />
      </div>

      {/* 4. WHY PARENTS CHOOSE ASAPL (FULL BREADTH 6-CARD GRID) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-white border-y border-slate-100 relative">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <SectionHeading
            badge="The ASAPL Difference"
            badgeColor="ocean"
            title="Why Families in Noida Choose ASAPL International"
            highlightWord="Choose"
            highlightColor="text-sunshine-600"
            subtitle="Choosing a primary school is one of the most consequential decisions for your child. Here is how we cultivate a supportive, joyful, and rigorous foundational journey."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_DATA.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-cream border-2 border-slate-100 hover:border-ocean-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${item.color}`}
                  >
                    {getWhyIcon(item.icon)}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-ocean-600">
                  <span>Pillar {idx + 1} of 6</span>
                  <span className="transform group-hover:translate-x-1 transition-transform font-bold text-sm">✓</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VIRTUAL CAMPUS FACILITIES EXPLORER (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <SectionHeading
          badge="Campus Environment"
          badgeColor="mint"
          title="Explore Our Colorful Learning Sanctuary in Sector 55"
          highlightWord="Sanctuary"
          highlightColor="text-mint-600"
          subtitle="Take a virtual look inside our sunlit classrooms, wonder library, art studios, and sensory arenas designed to spark child curiosity."
        />

        <div className="mt-14">
          <CampusFacilities />
        </div>
      </section>

      {/* 6. LEARNING MADE JOYFUL (PROGRAM PREVIEWS - FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-white border-y border-slate-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <SectionHeading
              align="left"
              badge="Our Curriculum"
              badgeColor="coral"
              title="Learning Made Joyful Across Every Domain"
              highlightWord="Joyful"
              highlightColor="text-sunshine-600"
              subtitle="Our holistic primary framework combines foundational academics with imaginative creativity, motor agility, and emotional empathy."
            />

            <Link
              href="/programs"
              className="mt-4 md:mt-0 inline-flex items-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-coral-600 bg-coral-50 hover:bg-coral-100 border border-coral-200 transition-all self-start md:self-auto"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS_DATA.map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE AGE & GRADE ELIGIBILITY CALCULATOR (FULL BREADTH) */}
      <section id="calculator" className="py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <div className="w-full max-w-5xl xl:max-w-6xl mx-auto">
          <AgeCalculator />
        </div>
      </section>

      {/* 8. A DAY FULL OF DISCOVERY (INTERACTIVE TIMELINE - FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-gradient-to-b from-sky-light/40 to-white border-y border-sky-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <SectionHeading
            badge="Student Life in Sector 55"
            badgeColor="mint"
            title="A Day Full of Joy, Learning & Discovery"
            highlightWord="Discovery"
            highlightColor="text-ocean-600"
            subtitle="Step into your child's shoes and experience our balanced daily rhythm: combining structured phonics and math with open creative play and mindful rest."
          />

          <div className="mt-14">
            <DayTimeline />
          </div>

        </div>
      </section>

      {/* 9. GROWING HAPPY, CONFIDENT LEARNERS (6 CORE PILLARS - FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <SectionHeading
          badge="Child-Centered Growth"
          badgeColor="purple"
          title="Growing Happy, Confident Learners"
          highlightWord="Confident"
          highlightColor="text-coral-500"
          subtitle="True education goes far beyond exams. We nurture six vital human capabilities that prepare young minds for a fulfilling life."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-8 rounded-3xl bg-white border-2 border-sunshine-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-sunshine-100 text-sunshine-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">1. Exploration</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Encouraging children to touch, test, observe, and ask bold questions about nature and mechanics in our guided discovery centers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-ocean-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">2. Collaboration</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Learning the beauty of sharing, active listening, and working harmoniously in small teams to solve collective puzzles.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-coral-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <Palette className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">3. Creativity</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Expressing internal feelings and wild imaginations freely through paint, clay, rhyme, and original storytelling.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-mint-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">4. Communication</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Articulating thoughts with polite poise, rich vocabulary, and emotional honesty through daily circle conversations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <Smile className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">5. Play</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Honoring unstructured and guided play as the highest form of early childhood research and cognitive integration.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-bubblegum-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-bubblegum-100 text-bubblegum-600 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
              <Puzzle className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">6. Problem Solving</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Building patience to try different strategies when a tower falls or a puzzle piece doesn&apos;t fit on the first try.
            </p>
          </div>

        </div>
      </section>

      {/* 10. SCHOOL LIFE GALLERY & ACCESSIBLE LIGHTBOX (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-white border-y border-slate-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <SectionHeading
            badge="Campus Moments"
            badgeColor="sunshine"
            title="School Life at ASAPL International"
            highlightWord="School Life"
            highlightColor="text-ocean-600"
            subtitle="Glance through our vibrant classrooms, art studios, and energetic playground celebrations in Sector 55, Noida."
          />

          <div className="mt-14">
            <GalleryWithLightbox />
          </div>

        </div>
      </section>

      {/* 11. HAPPY PARENTING RESOURCE CARDS (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <SectionHeading
            align="left"
            badge="Parenting Support"
            badgeColor="mint"
            title="Growing Together — School & Family"
            highlightWord="Together"
            highlightColor="text-coral-500"
            subtitle="Explore practical, child-centered guidance written by our early education faculty for families navigating the primary years."
          />

          <Link
            href="/happy-parenting"
            className="mt-4 md:mt-0 inline-flex items-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-mint-700 bg-mint-50 hover:bg-mint-100 border border-mint-200 transition-all self-start md:self-auto"
          >
            <span>Explore Happy Parenting Hub</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARENTING_ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl bg-white border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
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

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400">
                    {article.readTime} • By {article.author}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors mt-2 leading-snug">
                    <Link href={`/happy-parenting/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/happy-parenting/${article.slug}`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-ocean-600 hover:text-ocean-700"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <span className="text-xs text-slate-400">
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

      {/* 12. PARENT TESTIMONIALS (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-amber-50/40 border-y border-amber-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <SectionHeading
            badge="Parent Voices"
            badgeColor="sunshine"
            title="What Parents Say About ASAPL"
            highlightWord="Say"
            highlightColor="text-coral-500"
            subtitle="Parent trust is our greatest pride. Hear reflections from families who have chosen our Sector 55, Noida campus."
          />

          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* 13. ADMISSIONS FAQ ACCORDION WITH LIVE SEARCH & FILTERS (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1720px] mx-auto">
        <SectionHeading
          badge="Got Questions?"
          badgeColor="ocean"
          title="Frequently Asked Admissions Questions"
          highlightWord="Questions"
          highlightColor="text-sunshine-600"
          subtitle="Search or filter through common parent questions about enrolling at ASAPL International in Sector 55, Noida."
        />

        <div className="mt-14">
          <FAQAccordion items={FAQ_DATA} />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            Have a question not listed here? Call our admissions coordinator at{" "}
            <a href={`tel:${SCHOOL_DATA.phone}`} className="font-bold text-ocean-600 underline">
              {SCHOOL_DATA.displayPhone}
            </a>
          </p>
        </div>
      </section>

      {/* 14. CAMPUS LOCATION, NOIDA VAN ROUTES & TRANSIT CONNECTIVITY (FULL BREADTH) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-white border-t border-slate-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <SectionHeading
            badge="Campus Connectivity"
            badgeColor="sunshine"
            title="Conveniently Located in Sector 55, Noida"
            highlightWord="Located"
            highlightColor="text-coral-500"
            subtitle="Easily accessible from all key sectors of Noida with safe GPS-tracked school transport and smooth road connectivity."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Column: Campus Info, Highlights & Routes */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-cream border-2 border-sunshine-200 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-sunshine-100 text-sunshine-600 flex items-center justify-center flex-shrink-0 font-bold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900">Campus Address</h4>
                      <p className="text-sm text-slate-600">Sector 55, Noida, Uttar Pradesh 201301, India</p>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-sunshine-500 flex-shrink-0" />
                      <span>Near Sector 55/56 Green Park</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                      <span>Quick access from Noida Metro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0" />
                      <span>Wide, child-safe entry gates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                      <span>Dedicated parent parking zone</span>
                    </div>
                  </div>
                </div>

                {/* Van Route Sectors List */}
                <div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-sm space-y-3">
                  <h4 className="font-heading text-lg font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-ocean-500"></span>
                    <span>GPS-Monitored School Van Coverage Sectors</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our verified school vans operate daily pick-up and drop routes across:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Sector 55", "Sector 56", "Sector 62", "Sector 51", 
                      "Sector 50", "Sector 34", "Sector 12", "Sector 22", 
                      "Sector 61", "Sector 70", "Sector 71", "Noida Extension"
                    ].map((sec, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-xs">
                        {sec}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1">
                    * Need transport for another sector? Inquire at our admission desk for custom route planning.
                  </p>
                </div>
              </div>

              {/* Direct Campus Visit Action */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${SCHOOL_DATA.phone}`}
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-ocean-500 hover:bg-ocean-600 shadow-playful transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call {SCHOOL_DATA.displayPhone}</span>
                </a>
                <a
                  href={`https://wa.me/91${SCHOOL_DATA.phone}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20ASAPL%20International%20admissions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-playful transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp Admission Desk</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Embed Card */}
            <div className="lg:col-span-6">
              <div className="h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative bg-slate-100 flex flex-col">
                <iframe
                  title="ASAPL International Location Map Sector 55 Noida"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.109015949216!2d77.34861445!3d28.5914619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50f38b4d8d7%3A0x7d28713d8d741cb3!2sSector%2055%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-1"
                ></iframe>
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Sector 55, Noida • Near Main Sector Road</span>
                  <a
                    href="https://maps.google.com/?q=Sector+55+Noida+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ocean-600 hover:text-ocean-700 underline"
                  >
                    Open in Google Maps App →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 15. QUICK ADMISSION ENQUIRY SHOWCASE (FULL BREADTH DUAL-COLUMN) */}
      <section className="py-24 lg:py-32 xl:py-36 bg-cream border-t border-slate-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Friendly invitation */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                badge="Admission Enrolment"
                badgeColor="coral"
                title="Begin Your Child’s Journey with Us"
                highlightWord="Journey"
                highlightColor="text-sunshine-600"
                subtitle="Admissions are open for Playgroup, Nursery, LKG, UKG, and Primary Grades (Class 1 to 5) for the 2025–26 academic session."
              />

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-sunshine-100 text-sunshine-700 flex items-center justify-center flex-shrink-0 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-slate-900 text-sm">Stress-Free Interaction</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Gentle, play-oriented readiness conversations with parents and child.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center flex-shrink-0 font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-slate-900 text-sm">Campus Guided Tour</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Explore smart classrooms, library, and play zones Monday to Saturday.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-mint-100 text-mint-700 flex items-center justify-center flex-shrink-0 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-slate-900 text-sm">Verified Governance</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Complete transparent paperwork and documentation assistance at campus desk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Validated Form */}
            <div className="lg:col-span-7">
              <AdmissionForm />
            </div>

          </div>
        </div>
      </section>

      {/* 16. HIGH-IMPACT FINAL ADMISSION CTA BANNER */}
      <CTASection />

    </div>
  );
}
