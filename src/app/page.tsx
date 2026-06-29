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
  title: "Best Solar Panel Company in Lucknow | Sunwize Energy Systems",
  description:
    "Sunwize Energy Systems — Lucknow's #1 solar panel installer. Affordable rooftop solar for homes, businesses & housing societies in Uttar Pradesh. Get UP government subsidy support. Free site assessment.",
  keywords: [
    "solar panel company in lucknow",
    "solar panel lucknow",
    "solar panel price in lucknow",
    "rooftop solar lucknow",
    "solar system lucknow",
    "solar subsidy uttar pradesh",
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
