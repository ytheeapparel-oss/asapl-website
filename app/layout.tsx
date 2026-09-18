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
  title: {
    default: "ASPAL International | Best Play School & Primary School in Sector 55, Noida",
    template: "%s | ASPAL International School Noida",
  },
  description:
    "ASPAL International (Aspal Juniors) is a top-ranked play school and primary school in Sector 55, Noida. Experiential learning, 42+ synthetic phonics, concrete math, and 100% CCTV child-safe campus. Admissions open 2025–26 for Sectors 55, 56, 62, 12, 22.",
  keywords: [
    // Core Sector 55 Rankings
    "best school in sector 55 noida",
    "play school in sector 55 noida",
    "pre school in sector 55 noida",
    "primary school in sector 55 noida",
    "nursery admission in sector 55 noida",
    "kids school sector 55 noida",
    "kindergarten in sector 55 noida",
    // Surrounding Noida Sectors
    "play school near sector 56 noida",
    "best primary school near sector 62 noida",
    "nursery admission sector 12 noida",
    "play school in sector 22 noida",
    "schools near sector 53 noida",
    "pre school near sector 57 noida",
    // City-Wide Noida High Intent
    "best play school in noida",
    "top 10 play schools in noida",
    "best primary schools in noida",
    "nursery school admission in noida 2025-26",
    "play school with cctv in noida",
    "experiential learning primary school noida",
    "synthetic phonics classes for kids noida",
    // Brand & Variations
    "ASPAL International",
    "Aspal Juniors",
    "ASPAL International School Noida",
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
    "@type": "School",
    name: SCHOOL_DATA.name,
    alternateName: ["Aspal Juniors", SCHOOL_DATA.shortName],
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
