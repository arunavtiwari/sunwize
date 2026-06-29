import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Panel Price in Lucknow 2025 | Best Solar Dealers in Lucknow",
  description:
    "Get the latest solar panel prices in Lucknow 2025. 1kW system from ₹59,000 after UP subsidy. Compare prices, installers & get a free quote from Sunwize — Lucknow's leading solar panel dealer.",
  keywords: [
    "solar panel price in lucknow",
    "solar panel price lucknow",
    "solar panel dealers in lucknow",
    "best solar company in lucknow",
    "solar panel company in lucknow",
    "solar panel installation lucknow",
    "solar in lucknow",
    "rooftop solar price lucknow",
    "solar panel lucknow",
    "solar system price lucknow",
  ],
  alternates: { canonical: "https://www.sunwize.co.in/solar-panel-price-lucknow" },
};

const pricingData = [
  {
    size: "1 kW",
    use: "1–2 BHK Home",
    gross: "₹70,000",
    subsidy: "₹30,000",
    net: "₹40,000",
    units: "100–120 units/month",
    saving: "₹800–1,000/month",
  },
  {
    size: "2 kW",
    use: "2–3 BHK Home",
    gross: "₹1,40,000",
    subsidy: "₹60,000",
    net: "₹80,000",
    units: "200–240 units/month",
    saving: "₹1,600–2,000/month",
  },
  {
    size: "3 kW",
    use: "3–4 BHK / Small Shop",
    gross: "₹2,10,000",
    subsidy: "₹78,000",
    net: "₹1,32,000",
    units: "300–360 units/month",
    saving: "₹2,400–3,000/month",
  },
  {
    size: "5 kW",
    use: "Large Home / Office",
    gross: "₹3,50,000",
    subsidy: "₹78,000",
    net: "₹2,72,000",
    units: "500–600 units/month",
    saving: "₹4,000–5,000/month",
  },
  {
    size: "10 kW",
    use: "Commercial / Factory",
    gross: "₹7,00,000",
    subsidy: "₹0 (commercial)",
    net: "₹7,00,000",
    units: "1,000–1,200 units/month",
    saving: "₹8,000–10,000/month",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the price of a solar panel in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar panel prices in Lucknow range from ₹40,000 for a 1kW system (after UP subsidy) to ₹7,00,000+ for a 10kW commercial system. The exact price depends on system size, panel brand, and installation complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Which is the best solar company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunwize Energy Systems is one of Lucknow's leading solar panel companies, offering residential, commercial, and housing society installations with UP government subsidy assistance, net metering support, and 24/7 after-sales service.",
      },
    },
    {
      "@type": "Question",
      name: "How much subsidy do I get on solar panels in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the PM Surya Ghar Muft Bijli Yojana, residents of Lucknow (UP) are eligible for central government subsidies: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW and above. Additional UP state subsidies may also apply.",
      },
    },
    {
      "@type": "Question",
      name: "How many solar panels do I need for a 3 BHK house in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 3 BHK house in Lucknow consuming 250–300 units per month would need a 2–3 kW solar system, which requires approximately 6–10 panels depending on wattage (300W–400W each).",
      },
    },
    {
      "@type": "Question",
      name: "Is solar worth it in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lucknow receives 5–5.5 peak sun hours per day, making it ideal for solar. With UP electricity rates of ₹6–9/unit and after-subsidy system costs, most homeowners achieve payback in 3–5 years and save ₹5–15 lakhs over 25 years.",
      },
    },
  ],
};

export default function SolarPanelPriceLucknow() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="pt-24 pb-8 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Lucknow Solar Price Guide 2025
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5">
              Solar Panel Price in Lucknow
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compare solar system prices in Lucknow with UP government subsidy applied. Get an accurate quote for your home or business in minutes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition"
              >
                Get Free Quote
              </Link>
              <Link
                href="/solar-calculator"
                className="border border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/10 transition"
              >
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Solar System Price List in Lucknow (2025)
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm">
            Prices shown after central government subsidy under PM Surya Ghar Yojana
          </p>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-primary text-white text-sm">
                  <th className="py-3 px-4 text-left">System Size</th>
                  <th className="py-3 px-4 text-left">Best For</th>
                  <th className="py-3 px-4 text-left">Gross Price</th>
                  <th className="py-3 px-4 text-left">UP Subsidy</th>
                  <th className="py-3 px-4 text-left font-bold">Net Cost</th>
                  <th className="py-3 px-4 text-left">Units/Month</th>
                  <th className="py-3 px-4 text-left">Monthly Saving</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-700/50" : "bg-white dark:bg-gray-800"}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-900 dark:text-white">{row.size}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{row.use}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.gross}</td>
                    <td className="py-3 px-4 text-green-600 font-medium">{row.subsidy}</td>
                    <td className="py-3 px-4 text-primary font-bold">{row.net}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{row.units}</td>
                    <td className="py-3 px-4 text-green-600 font-medium">{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Prices are indicative for on-grid rooftop systems in Lucknow. Final price depends on roof type, brand, and installation complexity. Contact us for an exact quote.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Choose Sunwize for Solar in Lucknow?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "Lucknow's Trusted Installer", desc: "Years of experience installing solar across Lucknow, Kanpur Road, Gomti Nagar, Hazratganj & beyond." },
              { icon: "💰", title: "Subsidy Assistance Included", desc: "We handle all UP government subsidy paperwork so you receive your ₹30,000–₹78,000 benefit hassle-free." },
              { icon: "⚡", title: "Net Metering Setup", desc: "We coordinate with LESCO/UPPCL for net metering so you earn credit for excess power sent to the grid." },
              { icon: "🔧", title: "AMC & 24/7 Support", desc: "Annual maintenance contracts and round-the-clock customer support keep your system running at peak efficiency." },
              { icon: "📋", title: "Certified Installers", desc: "MNRE-empanelled, ALMM-compliant panels installed by trained technicians with safety certification." },
              { icon: "📈", title: "Free ROI Projection", desc: "We provide a detailed savings report before you commit — showing your exact payback period and 25-year savings." },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
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

      <section className="py-14 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar in Lucknow?</h2>
          <p className="text-lg mb-8 text-white/90">
            Get a free site assessment and customised solar price quote for your home or business in Lucknow within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-white/90 transition text-lg"
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
