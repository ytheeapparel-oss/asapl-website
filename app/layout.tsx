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
  metadataBase: new URL("https://asaplinternational.edu.in"),
  title: {
    default: "ASAPL International | Primary School in Sector 55, Noida",
    template: "%s | ASAPL International School Noida",
  },
  description:
    "ASAPL International is a premier primary school in Sector 55, Noida. Happy Children, Creative Learning, Safe Environment, and Caring Teachers. Admissions open for 2025-26.",
  keywords: [
    "Primary school in Noida",
    "Primary school in Sector 55 Noida",
    "School in Sector 55 Noida",
    "Best primary schools in Noida",
    "Admissions for primary school in Noida",
    "Child-friendly school in Noida",
    "Primary education in Noida",
    "ASAPL International",
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
    url: "https://asaplinternational.edu.in",
    siteName: "ASAPL International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://asaplinternational.edu.in/images/hero-indian-kids.jpg",
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
      "https://asaplinternational.edu.in/images/hero-indian-kids.jpg",
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
    url: "https://asaplinternational.edu.in",
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
    url: "https://asaplinternational.edu.in",
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
