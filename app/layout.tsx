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
    default: "ASPAL International | Best Play School & Primary School in Sector 55, Noida",
    template: "%s | ASPAL International School Noida",
  },
  description:
    "ASPAL International (Aspal Juniors) is a top-ranked play school and primary school in Sector 55, Noida. Experiential learning, 42+ synthetic phonics, concrete math, and 100% CCTV child-safe campus. Admissions open 2025–26 for Sectors 55, 56, 62, 12, 22.",
  keywords: [
    // 1. Hyper-Local Sector 55 & Surrounding Sectors (Central Noida)
    "best school in sector 55 noida",
    "play school in sector 55 noida",
    "pre school in sector 55 noida",
    "primary school in sector 55 noida",
    "nursery admission in sector 55 noida",
    "kindergarten in sector 55 noida",
    "kids school sector 55 noida",
    "play school near sector 56 noida",
    "best primary school near sector 62 noida",
    "nursery admission sector 12 noida",
    "play school in sector 22 noida",
    "schools near sector 53 noida",
    "pre school near sector 57 noida",
    "schools near sector 34 noida",
    "best preschool in central noida",

    // 2. City-Wide High-Volume Intent
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

    // 3. Parent Decision Factors (Safety, Curriculum, Fees)
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

    // 4. Grade & Age Specific
    "playgroup admission in noida",
    "nursery school near me noida",
    "lkg admission in noida",
    "ukg admission in noida",
    "class 1 admission in noida",
    "school admission for 3 year old in noida",
    "preschool admission age criteria noida",

    // 5. Brand, Authority & Local Entity
    "ASPAL International",
    "Aspal Juniors",
    "ASPAL International School Noida",
    "ASPAL International Sector 55 Noida",
    "aspal school admission noida",
    "aspal juniors play school sector 55",
  ],
  authors: [{ name: "ASPAL International School" }],
  creator: "ASPAL International",
  publisher: "ASPAL International",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "ASPAL International | Primary School in Sector 55, Noida",
    description:
      "Little Steps. Big Dreams. A joyful primary school in Sector 55, Noida cultivating curiosity, creativity, and confident futures for young learners.",
    url: "https://www.aspal.co.in",
    siteName: "ASPAL International School",
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
    name: SCHOOL_DATA.name,
    alternateName: ["Aspal Juniors", SCHOOL_DATA.shortName, "ASPAL International Sector 55 Noida"],
    description: SCHOOL_DATA.subTagline,
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
      { "@type": "AdministrativeArea", name: "Sector 62, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 12, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 22, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 53, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 57, Noida" },
      { "@type": "AdministrativeArea", name: "Sector 34, Noida" },
      { "@type": "City", name: "Noida" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Early Childhood & Primary Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Playgroup & Toddler Program (Age 2-3)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Nursery Program (Age 3-4)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kindergarten LKG & UKG (Age 4-6)" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Primary School Grade 1 to 5" } },
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
