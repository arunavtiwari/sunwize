import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Panel Price in India 2025 | 1kW–10kW Solar System Cost",
  description:
    "Complete solar panel price list for India 2025. Compare 1kW, 2kW, 3kW, 5kW & 10kW solar system costs with government subsidy. Sunwize offers the best solar prices in Lucknow & Uttar Pradesh.",
  keywords: [
    "solar panel price",
    "solar system price",
    "3kw solar panel price in india",
    "solar rooftop price list",
    "1kw solar panel price in india",
    "2kw solar panel price in india",
    "5kw solar panel price in india",
    "solar panel price list",
    "solar panel cost india",
    "rooftop solar price",
  ],
  alternates: { canonical: "https://www.sunwize.co.in/solar-panel-price" },
};

const systems = [
  {
    kw: "1 kW",
    panels: "2–4 panels",
    area: "60–80 sq. ft.",
    gross: "₹70,000",
    subsidy: "₹30,000",
    net: "₹40,000",
    units: "100–120 units/month",
    saving: "₹800–1,000/month",
    payback: "4–5 years",
    ideal: "Small homes, 1–2 BHK",
  },
  {
    kw: "2 kW",
    panels: "4–8 panels",
    area: "120–150 sq. ft.",
    gross: "₹1,40,000",
    subsidy: "₹60,000",
    net: "₹80,000",
    units: "200–240 units/month",
    saving: "₹1,600–2,000/month",
    payback: "4–5 years",
    ideal: "2–3 BHK homes",
  },
  {
    kw: "3 kW",
    panels: "8–10 panels",
    area: "180–220 sq. ft.",
    gross: "₹2,10,000",
    subsidy: "₹78,000",
    net: "₹1,32,000",
    units: "300–360 units/month",
    saving: "₹2,400–3,000/month",
    payback: "4–5 years",
    ideal: "3–4 BHK, small shops",
    popular: true,
  },
  {
    kw: "5 kW",
    panels: "12–16 panels",
    area: "300–350 sq. ft.",
    gross: "₹3,50,000",
    subsidy: "₹78,000",
    net: "₹2,72,000",
    units: "500–600 units/month",
    saving: "₹4,000–5,000/month",
    payback: "4–6 years",
    ideal: "Large homes, offices",
  },
  {
    kw: "10 kW",
    panels: "25–32 panels",
    area: "600–700 sq. ft.",
    gross: "₹7,00,000",
    subsidy: "₹0 (commercial)",
    net: "₹7,00,000",
    units: "1,000–1,200 units/month",
    saving: "₹8,000–10,000/month",
    payback: "5–7 years",
    ideal: "Factories, schools, hospitals",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the price of a 3kW solar panel system in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3kW solar panel system in India costs approximately ₹2,10,000 before subsidy. After the PM Surya Ghar central government subsidy of ₹78,000, the net cost is around ₹1,32,000. The exact price varies by state, brand, and installer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of 1kW solar panel in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1kW solar panel system in India costs ₹70,000 gross. After the ₹30,000 central subsidy under PM Surya Ghar Yojana, the net cost is ₹40,000. This system generates 100–120 units per month.",
      },
    },
    {
      "@type": "Question",
      name: "What is the solar rooftop price list in India for 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar rooftop prices in India for 2025 (after subsidy): 1kW — ₹40,000; 2kW — ₹80,000; 3kW — ₹1,32,000; 5kW — ₹2,72,000; 10kW — ₹7,00,000 (commercial, no subsidy). Prices include installation and net metering.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a solar panel system cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no monthly cost for solar panels if paid upfront. If financed via loan/EMI, a 3kW system (net cost ₹1,32,000) financed at 0% for 5 years costs about ₹2,200/month — far less than the ₹2,400–3,000 monthly electricity savings.",
      },
    },
  ],
};

export default function SolarPanelPrice() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-24 pb-10 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            India Solar Price Guide 2025
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Solar Panel Price in India
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Compare 1kW to 10kW solar system prices with government subsidy applied. All prices include installation, inverter, and net metering setup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/solar-calculator" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition">
              Calculate My System Size
            </Link>
            <Link href="/contact" className="border border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/10 transition">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Solar System Price List India 2025
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            On-grid rooftop solar — prices after PM Surya Ghar central subsidy (residential)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((s, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-6 shadow-sm ${
                  s.popular
                    ? "border-primary bg-primary/5 dark:bg-primary/10"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">{s.kw}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.ideal}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gross Price</span>
                    <span className="line-through text-gray-400">{s.gross}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Govt. Subsidy</span>
                    <span className="text-green-600 font-medium">-{s.subsidy}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Net Cost</span>
                    <span className="font-bold text-primary text-lg">{s.net}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Panels</span>
                    <span className="text-gray-700 dark:text-gray-300">{s.panels}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Roof Area</span>
                    <span className="text-gray-700 dark:text-gray-300">{s.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Generation</span>
                    <span className="text-gray-700 dark:text-gray-300">{s.units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monthly Saving</span>
                    <span className="text-green-600 font-medium">{s.saving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payback Period</span>
                    <span className="text-gray-700 dark:text-gray-300">{s.payback}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`mt-5 block text-center font-semibold py-2 rounded-full transition ${
                    s.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Get {s.kw} Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            * Prices are indicative for Lucknow / Uttar Pradesh region. Actual price depends on roof type, brand, and site conditions.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            What&apos;s Included in the Solar System Price?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "☀️", label: "Solar Panels", detail: "Tier-1 monocrystalline / PERC panels from ALMM-listed brands" },
              { icon: "⚡", label: "Solar Inverter", detail: "On-grid / hybrid inverter with 5-year warranty" },
              { icon: "🔧", label: "Mounting Structure", detail: "Galvanised iron / aluminium frame for rooftop or ground mount" },
              { icon: "🔌", label: "Wiring & BOS", detail: "DC cables, AC cables, junction boxes, earthing, and protection" },
              { icon: "📊", label: "Net Meter Application", detail: "DISCOM documentation, inspection coordination, and net meter installation" },
              { icon: "📱", label: "Monitoring System", detail: "Wi-Fi enabled monitoring with app access to track live production" },
              { icon: "🛡️", label: "5-Year AMC", detail: "Annual maintenance and cleaning for first 5 years" },
              { icon: "📋", label: "Subsidy Processing", detail: "End-to-end PM Surya Ghar subsidy application and follow-up" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Solar Price FAQs
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

      <section className="py-12 bg-gray-50 dark:bg-gray-800 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want an Exact Price for Your Location?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Prices vary by roof type, shadow analysis, and local installation costs. Get a site-specific quote from our Lucknow team within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition">
              Get My Quote
            </Link>
            <Link href="/solar-subsidy-uttar-pradesh" className="border border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/10 transition">
              Check UP Subsidy Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
