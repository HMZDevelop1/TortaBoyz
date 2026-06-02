import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torta Boyz | Authentic Mexican Tortas in Ottawa",
  description:
    "Rated 4.8 stars. Authentic Mexican tortas, tacos, and cocktails on Preston Street, Ottawa. Generous portions, outdoor seating, vegetarian options. Reserve on OpenTable.",
  keywords: [
    "Mexican restaurant Ottawa",
    "tortas Ottawa",
    "tacos Ottawa",
    "Preston Street restaurant",
    "Little Italy Ottawa",
    "Mexican food Ottawa",
    "Torta Boyz",
  ],
  icons: {
    icon: [
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "Torta Boyz | Authentic Mexican Tortas in Ottawa",
    description:
      "Rated 4.8 stars. Authentic Mexican tortas, tacos, and cocktails on Preston Street, Ottawa.",
    type: "website",
    locale: "en_CA",
    siteName: "Torta Boyz",
    images: [
      {
        url: "/images/food1.jpg",
        width: 1200,
        height: 630,
        alt: "Torta Boyz",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Torta Boyz | Authentic Mexican Tortas in Ottawa",
    description:
      "Rated 4.8 stars. Authentic Mexican tortas, tacos, and cocktails on Preston Street, Ottawa.",
    images: ["/images/food1.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Torta Boyz",
  description:
    "Authentic Mexican restaurant serving tortas, tacos, and cocktails in Ottawa's Little Italy.",
  url: "https://tortaboyz.ca",
  servesCuisine: "Mexican",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "961",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "354A Preston Street",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K1S 3J2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.4045",
    longitude: "-75.7061",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "21:00",
    },
  ],
  image: "/images/logo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
