import PopularProductsSection from "@/components/About/PopularProductsSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import EndToEndService from "@/components/About/EndtoEndService";

export const metadata: Metadata = {
  title: "Sunwize Energy Systems - Solar & Renewable Energy Solutions",
  description:
    "Sunwize Energy Systems provides end-to-end solar and renewable energy solutions for businesses, industries, and infrastructure projects in India.",
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
