import Image from "next/image";
import Link from "next/link";

export default function CommercialServicePage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Commercial Solar Solutions
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Cut operational costs and improve your carbon footprint with tailored solar systems for commercial properties. Whether it's a factory, office, or retail outlet — we deliver scalable, high-performance installations.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  High-capacity rooftop & ground-mounted solar installations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Power consumption analysis and ROI projection reports
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Industrial-grade panels, inverters & BOS equipment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Comprehensive energy audits & ESG-ready reporting
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Request a Free Business Consultation
            </Link>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/services/solar2_new.jpeg"
              alt="Commercial building with solar panels"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
