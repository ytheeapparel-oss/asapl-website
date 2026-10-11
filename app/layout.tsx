import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { SCHOOL_DATA } from "@/data/school-data";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFB703",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aspal.co.in"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "ASPAL International & Aspal Juniors | Best Primary School (Class 6), Pre-School & Daycare in Noida",
    template: "%s | ASPAL Group of Schools Noida",
  },
  description:
    "ASPAL International (Sector 55 • Primary School till Class VI) & Aspal Juniors (Sector 51 & 22 • Pre-School, Daycare, Skating, Dance & Music). Experiential learning, 42+ synthetic phonics, and 100% CCTV child-safe campuses. Admissions open for Sectors 55, 56, 51, 50, 22, 12, 34, 41, 49, 71-79 & Mayur Vihar.",
  keywords: [
    // 1. "Kids School in Noida" Core Variations
    "kids school in noida",
    "best kids school in noida",
    "top kids school in noida",
    "kids school near me noida",
    "kids play school in noida",
    "kids primary school in noida",
    "kids school sector 55 noida",
    "kids school near sector 56 noida",
    "kids school near sector 62 noida",
    "kids school in sector 12 noida",
    "kids school in sector 22 noida",
    "kids school admission in noida",
    "affordable kids school in noida",
    "safe kids school with cctv in noida",
    "little kids school noida",
    "small kids school in noida",

    // 2. Hyper-Local Sector 55 & Surrounding Sectors (Central Noida)
    "best school in sector 55 noida",
    "play school in sector 55 noida",
    "pre school in sector 55 noida",
    "primary school in sector 55 noida",
    "nursery admission in sector 55 noida",
    "kindergarten in sector 55 noida",
    "play school near sector 56 noida",
    "best primary school near sector 62 noida",
    "nursery admission sector 12 noida",
    "play school in sector 22 noida",
    "schools near sector 53 noida",
    "pre school near sector 57 noida",
    "schools near sector 34 noida",
    "best preschool in central noida",

    // 3. City-Wide High-Volume Intent
    "best primary school in noida",
    "top 10 primary schools in noida",
    "best play school in noida",
    "top 10 play schools in noida",
    "best preschool in noida",
    "top rated play school in noida",
    "nursery admission in noida",
    "pre nursery admission noida",
    "primary school admission in noida 2025-26",
    "primary school admission in noida 2026-27",
    "best kindergarten school in noida",
    "international primary school in noida",
    "cbse primary school in noida",

    // 4. Parent Decision Factors (Safety, Curriculum, Fees)
    "play school with cctv in noida",
    "child safe play school in noida",
    "affordable primary school in noida",
    "primary school in noida with fee structure",
    "experiential learning primary school noida",
    "synthetic phonics classes for kids noida",
    "concrete mathematics preschool noida",
    "play school with transport facility noida",
    "preschool with daycare in noida",
    "activity based learning school in noida",
    "school with low student teacher ratio noida",
    "caring teachers play school noida",

    // 5. Grade & Age Specific
    "playgroup admission in noida",
    "nursery school near me noida",
    "lkg admission in noida",
    "ukg admission in noida",
    "class 1 admission in noida",
    "school admission for 3 year old in noida",
    "preschool admission age criteria noida",

    // 6. Brand, Multi-Campus & Sector Coverage
    "ASPAL International",
    "Aspal Juniors",
    "Aspal Juniors Sector 51",
    "Aspal Juniors Sector 22",
    "ASPAL International School Noida",
    "ASPAL International Sector 55 Noida",
    "aspal school admission noida",
    "aspal juniors play school sector 55",
    "pre school in sector 51 noida",
    "play school in sector 51 noida",
    "daycare in sector 51 noida",
    "skating classes for kids in noida",
    "pre school in sector 22 noida",
    "daycare in sector 22 noida",
    "best primary school till class 6 in noida",
    "schools near sector 50 noida",
    "schools near sector 41 noida",
    "schools near sector 49 noida",
    "schools near sector 71 noida",
    "schools near sector 75 noida",
    "schools near sector 76 noida",
    "schools near sector 77 noida",
    "schools near sector 78 noida",
    "schools near mayur vihar phase 3",
  ],
  authors: [{ name: "ASPAL Group of Schools" }],
  creator: "ASPAL Group",
  publisher: "ASPAL International & Aspal Juniors",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "ASPAL International & Aspal Juniors | Noida",
    description:
      "Little Steps. Big Dreams. Aspal International School (Sector 55 • Till Class 6) & Aspal Juniors (Sector 51 & 22 • Pre-School, Daycare, Skating, Dance & Music).",
    url: "https://www.aspal.co.in",
    siteName: "ASPAL Group of Schools",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspal.co.in/images/hero-indian-kids.jpg",
        width: 1200,
        height: 675,
        alt: "Happy Indian children learning together at ASPAL International School Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASPAL International | Primary School in Sector 55, Noida",
    description:
      "Little Steps. Big Dreams. A joyful primary school in Sector 55, Noida. Admissions open for 2025-26.",
    images: [
      "https://www.aspal.co.in/images/hero-indian-kids.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cf857e5ed6f9e189",
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      ...(process.env.BING_VERIFICATION ? { "msvalidate.01": process.env.BING_VERIFICATION } : {}),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization", "LocalBusiness"],
    name: "ASPAL International School & Aspal Juniors",
    alternateName: [
      "ASPAL Group of Schools",
      "Aspal International School",
      "Aspal Juniors",
      "Aspal Juniors Sector 51",
      "Aspal Juniors Sector 22",
      "ASPAL International Sector 55 Noida"
    ],
    description: "ASPAL Group comprises Aspal International School (Sector 55 • Primary School till Class VI) and Aspal Juniors (Sector 51 & Sector 22 • Pre-School, Daycare, Skating, Dance & Music).",
    url: "https://www.aspal.co.in",
    image: "https://www.aspal.co.in/images/hero-indian-kids.jpg",
    telephone: SCHOOL_DATA.displayPhone,
    email: SCHOOL_DATA.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 55",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5993",
      longitude: "77.3517",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sector 55, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 56, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 21, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 22, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 12, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 26, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 31, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 34, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 36, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 19, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 51, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 50, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 41, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 49, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 71, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 72, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 75, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 76, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 77, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 78, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 79, Noida" },
      { "@type": "AdministrativeArea", name: "Rajat Vihar, Noida" },
      { "@type": "AdministrativeArea", name: "Mayur Vihar Phase 3, Delhi NCR" },
      { "@type": "City", name: "Noida" },
    ],
    department: [
      {
        "@type": "PreSchool",
        name: "Aspal Juniors - Sector 51 Campus",
        description: "Pre-School, Daycare & Creche with Dance, Music & Roller Skating",
        telephone: SCHOOL_DATA.displayPhone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 51",
          addressLocality: "Noida",
          postalCode: "201301",
          addressCountry: "IN",
        },
      },
      {
        "@type": "PreSchool",
        name: "Aspal Juniors - Sector 22 Campus",
        description: "Pre-School & Loving Daycare Sanctuary",
        telephone: SCHOOL_DATA.displayPhone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 22",
          addressLocality: "Noida",
          postalCode: "201301",
          addressCountry: "IN",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kids School, Early Childhood & Primary Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kids Play School & Toddler Program (Age 2-3)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kids Nursery School Program (Age 3-4)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kids Kindergarten LKG & UKG (Age 4-6)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Primary School Grade 1 to 6 (Class VI)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Loving Daycare & Full-Day Creche (Ages 2-8)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Dance, Music & Roller Skating Academy (Sector 51)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Synthetic Phonics 42+ Sounds Lab" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Concrete CPA Mathematics" } },
      ],
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "100% CCTV Monitored Child-Safe Campus", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air-Conditioned Thematic Classrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Sandpit & Play Turf", value: true },
      { "@type": "LocationFeatureSpecification", name: "GPS-Enabled School Transport", value: true },
      { "@type": "LocationFeatureSpecification", name: "Low Student-Teacher Ratio (1:12)", value: true },
    ],
    sameAs: [
      SCHOOL_DATA.socialLinks.youtube,
      SCHOOL_DATA.socialLinks.instagram,
      SCHOOL_DATA.socialLinks.facebook,
    ],
    openingHours: "Mo-Sa 08:00-15:30",
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SCHOOL_DATA.name,
    url: "https://www.aspal.co.in",
  };

  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-sunshine-300 selection:text-slate-900 pb-16 sm:pb-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
