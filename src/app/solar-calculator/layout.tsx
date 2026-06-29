import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Calculator — Estimate Your System Size & Savings | Sunwize",
  description:
    "Use Sunwize's free solar calculator to estimate the right solar system size for your home or business in Lucknow. Enter your monthly bill and get instant savings, subsidy & ROI projections.",
  keywords: [
    "solar calculator",
    "solar savings calculator india",
    "solar system size calculator",
    "solar panel calculator lucknow",
    "solar roi calculator",
    "solar unit calculator",
  ],
  alternates: { canonical: "https://www.sunwize.co.in/solar-calculator" },
};

export default function SolarCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
