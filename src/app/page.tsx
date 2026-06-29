import PopularProductsSection from "@/components/About/PopularProductsSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import EndToEndService from "@/components/About/EndtoEndService";

export const metadata: Metadata = {
  title: "Solar Panel Company in Lucknow, Kanpur & UP | Sunwize Energy Systems",
  description:
    "Sunwize Energy Systems  -  trusted solar installer across Lucknow, Kanpur, Barabanki, Unnao, Sitapur, Raebareli & Uttar Pradesh. Affordable rooftop solar for homes & businesses. UP subsidy support included.",
  keywords: [
    "solar panel company in lucknow",
    "solar panel lucknow",
    "solar panel price in lucknow",
    "solar company kanpur",
    "solar panel kanpur",
    "solar panel price kanpur",
    "solar panel barabanki",
    "solar panel unnao",
    "solar panel sitapur",
    "solar panel raebareli",
    "solar panel hardoi",
    "solar company uttar pradesh",
    "best solar company in up",
    "solar subsidy uttar pradesh",
    "rooftop solar up",
    "solar panel installer lucknow",
  ],
  alternates: { canonical: "https://www.sunwize.co.in/" },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Contact />
      <Features />
      <Testimonials />
      <PopularProductsSection />
      <EndToEndService />
      <Blog />
      <Brands />
    </>
  );
}
