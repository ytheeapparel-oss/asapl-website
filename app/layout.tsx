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
    default: "ASAPL International | Best Play School & Primary School in Sector 55, Noida",
    template: "%s | ASAPL International School Noida",
  },
  description:
    "ASAPL International (Aspal Juniors) is a top-ranked play school and primary school in Sector 55, Noida. Experiential learning, 42+ synthetic phonics, concrete math, and 100% CCTV child-safe campus. Admissions open 2025–26 for Sectors 55, 56, 62, 12, 22.",
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
    "ASAPL International",
    "Aspal Juniors",
    "ASAPL International School Noida",
  ],
  authors: [{ name: "ASAPL International School" }],
  creator: "ASAPL International",
  publisher: "ASAPL International",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "ASAPL International | Primary School in Sector 55, Noida",
    description:
      "Little Steps. Big Dreams. A joyful primary school in Sector 55, Noida cultivating curiosity, creativity, and confident futures for young learners.",
    url: "https://www.aspal.co.in",
    siteName: "ASAPL International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aspal.co.in/images/hero-indian-kids.jpg",
        width: 1200,
        height: 675,
        alt: "Happy Indian children learning together at ASAPL International School Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAPL International | Primary School in Sector 55, Noida",
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
    description: SCHOOL_DATA.subTagline,
    url: "https://www.aspal.co.in",
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
