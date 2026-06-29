import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sunwize Energy Systems | Solar Panel Company in Lucknow",
    template: "%s | Sunwize Energy Systems",
  },
  description:
    "Sunwize Energy Systems is Lucknow's trusted solar panel company. Get affordable solar panel installation, rooftop solar systems, and UP government subsidy guidance for homes and businesses in Uttar Pradesh.",
  keywords: [
    "solar panel company in lucknow",
    "solar panel installation lucknow",
    "solar system price in lucknow",
    "solar panel price in lucknow",
    "rooftop solar lucknow",
    "solar energy company uttar pradesh",
    "solar subsidy up",
    "solar panel dealers in lucknow",
    "best solar company in lucknow",
  ],
  metadataBase: new URL("https://www.sunwize.co.in"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sunwize.co.in",
    siteName: "Sunwize Energy Systems",
    title: "Sunwize Energy Systems | Solar Panel Company in Lucknow",
    description:
      "Lucknow's trusted solar panel installer. Residential, commercial & housing society solar solutions with UP subsidy support.",
    images: [
      {
        url: "/images/hero/bg-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunwize Energy Systems - Solar Panel Company in Lucknow",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sunwize.co.in/#localbusiness",
  name: "Sunwize Energy Systems",
  description:
    "Solar panel installation company in Lucknow offering residential, commercial, and housing society solar solutions with UP government subsidy assistance.",
  url: "https://www.sunwize.co.in",
  telephone: "+91-9696267463",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lucknow",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  areaServed: [
    { "@type": "City", name: "Lucknow" },
    { "@type": "State", name: "Uttar Pradesh" },
  ],
  serviceType: [
    "Solar Panel Installation",
    "Rooftop Solar Systems",
    "Commercial Solar",
    "Solar Subsidy Assistance",
  ],
  priceRange: "₹₹",
  image: "https://www.sunwize.co.in/images/hero/bg-image.jpg",
  sameAs: ["https://www.sunwize.co.in"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
