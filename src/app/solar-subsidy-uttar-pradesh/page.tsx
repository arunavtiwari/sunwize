import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Subsidy in Uttar Pradesh 2026 | UP Solar Panel Subsidy Guide",
  description:
    "Complete guide to solar panel subsidy in Uttar Pradesh 2026. Get up to ₹78,000 central subsidy + UP state benefits under PM Surya Ghar Yojana. Sunwize helps you apply and install in Lucknow.",
  keywords: [
    "solar subsidy in uttar pradesh",
    "solar panel subsidy in up",
    "solar subsidy up",
    "up solar subsidy",
    "up government solar subsidy",
    "solar scheme in up",
    "solar panel scheme in uttar pradesh",
    "rooftop solar subsidy in up",
    "solar subsidy lucknow",
    "pm surya ghar yojana up",
  ],
  alternates: { canonical: "https://www.sunwize.co.in/solar-subsidy-uttar-pradesh" },
};

const subsidySlabs = [
  { size: "1 kW", central: "₹30,000", state: "Additional benefits applicable", total: "₹30,000+" },
  { size: "2 kW", central: "₹60,000", state: "Additional benefits applicable", total: "₹60,000+" },
  { size: "3 kW and above", central: "₹78,000", state: "Additional benefits applicable", total: "₹78,000+" },
];

const steps = [
  { step: "1", title: "Register on PM Surya Ghar Portal", desc: "Visit pmsuryaghar.gov.in and register with your electricity consumer number and Aadhaar." },
  { step: "2", title: "Apply for Rooftop Solar", desc: "Submit your application with property details, roof area, and preferred system capacity." },
  { step: "3", title: "DISCOM Feasibility Check", desc: "UPPCL/LESCO conducts a technical feasibility check for net metering eligibility." },
  { step: "4", title: "Choose an Empanelled Vendor", desc: "Select a MNRE-empanelled installer like Sunwize. We handle the entire process from here." },
  { step: "5", title: "Installation & Inspection", desc: "Solar system is installed. DISCOM inspection confirms system quality and net meter connection." },
  { step: "6", title: "Subsidy Credited to Bank Account", desc: "After successful inspection, the subsidy amount is directly credited to your bank account within 30 days." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much solar subsidy is available in Uttar Pradesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under PM Surya Ghar Muft Bijli Yojana, UP residents get: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW or above. The subsidy is credited directly to your bank account after installation.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible for solar subsidy in UP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any residential consumer in Uttar Pradesh with a domestic electricity connection, valid Aadhaar, and a suitable rooftop is eligible. The scheme applies to homeowners and is not available for commercial/industrial connections under the central scheme.",
      },
    },
    {
      "@type": "Question",
      name: "How to apply for solar subsidy in Uttar Pradesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply online at pmsuryaghar.gov.in with your UPPCL consumer number. After approval, choose an MNRE-empanelled vendor like Sunwize for installation. The subsidy is auto-credited after DISCOM inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a solar subsidy in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lucknow falls under LESCO (Lucknow Electricity Supply Company), which participates in PM Surya Ghar Yojana. Residents in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Kanpur Road and other areas are fully eligible.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get the solar subsidy in UP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The typical timeline from application to subsidy credit is 60–90 days. Installation takes 2–5 days. DISCOM inspection and subsidy disbursal take another 30–45 days after installation.",
      },
    },
  ],
};

export default function SolarSubsidyUP() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-24 pb-10 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">
            PM Surya Ghar Yojana — Uttar Pradesh
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Solar Panel Subsidy in Uttar Pradesh 2026
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Get up to <strong>₹78,000 central government subsidy</strong> on rooftop solar in UP. Sunwize helps Lucknow residents navigate every step — from application to installation to subsidy credit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition"
            >
              Apply with Our Help — Free
            </Link>
            <Link
              href="/solar-panel-price-lucknow"
              className="border border-green-600 text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition"
            >
              See Solar Prices in Lucknow
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            UP Solar Subsidy Slabs (2026)
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Central government subsidy under PM Surya Ghar Muft Bijli Yojana</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subsidySlabs.map((slab, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 border border-green-100 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2">{slab.size} System</p>
                <p className="text-4xl font-extrabold text-green-600 mb-1">{slab.central}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Central Subsidy</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{slab.state}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-5">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <strong>Important:</strong> The central subsidy is available only for residential (domestic) connections. Commercial and industrial installations do not qualify for the PM Surya Ghar subsidy but may be eligible for accelerated depreciation benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How to Get Solar Subsidy in UP — Step by Step
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-5 bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sunwize handles Steps 4–6 for you — installation, DISCOM coordination, and subsidy follow-up.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition"
            >
              Let Us Handle It — Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Solar Subsidy FAQs for Uttar Pradesh
          </h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 cursor-pointer group">
                <summary className="font-semibold text-gray-900 dark:text-white list-none flex justify-between items-center">
                  {faq.name}
                  <span className="text-primary ml-2 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Claim Your UP Solar Subsidy Today</h2>
          <p className="text-lg mb-8 text-white/90">
            Don&apos;t miss out on ₹78,000 in government savings. Our team in Lucknow will guide you through the entire subsidy process at no extra charge.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-700 font-bold px-10 py-4 rounded-full hover:bg-white/90 transition text-lg"
          >
            Contact Sunwize — Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
