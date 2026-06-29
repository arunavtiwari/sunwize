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
    default: "Sunwize Energy Systems | Solar Panel Company in Lucknow & UP",
    template: "%s | Sunwize Energy Systems",
  },
  description:
    "Sunwize Energy Systems  -  trusted solar panel installer serving Lucknow, Kanpur, Unnao, Barabanki, Sitapur, Raebareli & all of Uttar Pradesh. Affordable rooftop solar with UP government subsidy support.",
  keywords: [
    "solar panel company in lucknow",
    "solar panel installation lucknow",
    "solar panel price in lucknow",
    "solar company kanpur",
    "solar panel installation kanpur",
    "solar panel barabanki",
    "solar panel unnao",
    "solar panel sitapur",
    "solar panel raebareli",
    "solar energy company uttar pradesh",
    "best solar company in up",
    "solar subsidy uttar pradesh",
    "solar panel dealer up",
    "rooftop solar uttar pradesh",
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
    "Solar panel installation company serving Lucknow, Kanpur, Unnao, Barabanki, Sitapur, Hardoi, Raebareli, Ayodhya and all of Uttar Pradesh. Residential, commercial, and housing society solar solutions with UP government subsidy assistance.",
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
    { "@type": "City", name: "Kanpur" },
    { "@type": "City", name: "Unnao" },
    { "@type": "City", name: "Barabanki" },
    { "@type": "City", name: "Sitapur" },
    { "@type": "City", name: "Hardoi" },
    { "@type": "City", name: "Raebareli" },
    { "@type": "City", name: "Sultanpur" },
    { "@type": "City", name: "Ayodhya" },
    { "@type": "City", name: "Lakhimpur Kheri" },
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
