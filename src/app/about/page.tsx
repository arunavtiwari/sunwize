import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sunwize Energy Systems",
  description: "Learn more about Sunwize's mission, technology, and impact in solar energy.",
};

const benefits = [
  { icon: "💰", text: "Cost Effective / Economical" },
  { icon: "⚡", text: "Decentralized Energy Generation" },
  { icon: "🌍", text: "Environment Friendly, Cleaner Earth for Future Generations" },
  { icon: "✅", text: "Eligible for Clean Development Mechanism" },
  { icon: "⏩", text: "Accelerated Depreciation" },
  { icon: "🛡️", text: "Insurance Against Rising Cost of Fossil Fuel Operations" },
];

const systems = [
  {
    title: "Solar Lighting / Power System",
    desc: "Designed to provide 2–4 hours of daily lighting using a photovoltaic module, charge controller, and battery.",
    img: "/images/about/p3.jpg",
    apps: [
      "Domestic / Home Lighting",
      "Street & Garden Lighting",
      "Common Spaces / Halls",
      "Commercial / Industrial / Telecom",
      "Railway Signaling & Communication",
      "Hospitals & Offshore Platforms",
    ],
  },
  {
    title: "Solar Thermal System",
    desc: "Absorbs solar radiation and converts it to usable heat. Available from 100–10,000 LPD for homes and industries.",
    img: "/images/about/p5.jpg",
    apps: [
      "Residences / Apartments",
      "Hotels / Canteens",
      "Dairies",
      "Textile / Process Industries",
      "Schools / Colleges",
      "Hospitals",
    ],
  },
  {
    title: "Solar Hybrid System",
    desc: "Combines solar with other power sources for reliability. Ideal for off-grid or unreliable-grid locations.",
    img: "/images/about/hybrid.jpg",
    apps: ["Villages with No Grid Supply", "Industries", "Remote BTS Sites"],
  },
];

const successStories = [
  {
    title: "Village Electrification (Mini Grid)",
    desc: "Provided solar home lighting systems through nodal agencies across Uttar Pradesh.",
    img:"/images/about/village.png"
  },
  {
    title: "On-Grid Rooftop Plant (50 kWp)",
    desc: "One of Lucknow’s largest PV projects; power transmitted via 11kV line to state grid.",
    img:"/images/about/ongrid.png"
  },
  {
    title: "Solar Power Packs & Plants",
    desc: "Completed 430kWp+ standalone PV projects via nodal agencies and govt bodies.",
    img:"/images/about/powerpack.png"
  },
  {
    title: "Solar for Fuel Stations",
    desc: "Installed solar PV systems for fuel stations in remote northern India, with automated switching between solar and DG power.",
    img:"/images/about/fuelstation.png"
  },
  {
    title: "Telecom Hybrid Systems",
    desc: "10 mWP hybrid systems installed to power telecom towers; diesel generators used only during prolonged outages.",
    img:"/images/about/telecom.png"
  },
  {
    title: "Thermal Systems for Institutions",
    desc: "Installed over 50,000 LPD of thermal water heating systems across hospitals, universities, and hostels.",
    img:"/images/about/thermal.png"
  },
  {
    title: "Street Lighting Across Uttar Pradesh",
    desc: "Installed 1,200+ solar-powered streetlights in both rural and urban areas, reducing power load and enhancing security.",
    img:"/images/about/streetlight.png"
  },
];


const AboutPage = () => (
  <>
    {/* Hero */}
    <div className="w-full">
      <Image
        src="/images/about/about_bg.png"
        alt="About Sunwize"
        width={1920}
        height={500}
        className="w-full h-auto max-h-[500px] object-cover"
        priority
      />
    </div>

    {/* Introduction */}
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="container mx-auto max-w-5xl px-4 space-y-6">
        <h2 className="text-4xl font-bold text-center text-primary">About Us</h2>
        <p>As a pioneer and leader in the renewable energy industry. Sunwize is positioned to provide the best solutions for grid connected solar power systems. Our expertise in solar photovoltaic technologies insures you green and sustainable energy harnessed through a combination of quality products and proved engineering.</p>
        <p>
          Established in 2002 by Mr. Sanjai Tiwari, Sunwize Energy Systems is a leading renewable energy company based in Lucknow. A proud BNI member and ISO 9001:14001 certified, Sunwize delivers sustainable solar solutions across India.
        </p>
        <p>
          As an empaneled vendor with UPNEDA, our commitment to excellence and compliance ensures long-term value and trust. Our team specializes in solar photovoltaic, thermal, and hybrid systems customized for residential, commercial, and industrial use.
        </p>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-primary">Why Choose Solar with Sunwize?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
            >
              <span className="text-3xl">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Systems Offered */}
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl px-4 space-y-12">
        {systems.map((sys, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <Image
              src={sys.img}
              alt={sys.title}
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
            />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                {sys.title}
              </h4>
              <p className="mb-2">{sys.desc}</p>
              <ul className="list-disc pl-5 space-y-1">
                {sys.apps.map((app, j) => (
                  <li key={j}>{app}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Our Success Story */}
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-primary">
          Our Success Stories
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
        {successStories.map((story, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow"
          >
            <div className="w-full md:w-1/3 h-48 md:h-auto relative">
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6">
              <h4 className="text-xl font-semibold mb-2 text-primary">{story.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{story.desc}</p>
            </div>
          </div>
        ))}

        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 bg-primary text-white text-center">
      <h4 className="text-2xl font-semibold mb-2">Ready to harness the power of the sun?</h4>
      <p className="mb-6">Contact us now for a free consultation and custom solar solution.</p>
      <a href="#contact" className="inline-block bg-white text-primary font-bold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Get in Touch
      </a>
    </section>
  </>
);

export default AboutPage;
