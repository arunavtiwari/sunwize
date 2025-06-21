import Image from "next/image";
import Link from "next/link";

export default function HouseServicePage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Image + Title */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Residential Solar Solutions for Indian Homes
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Take control of your energy bills with clean, affordable solar power. We provide
              custom-designed solar solutions tailored for Indian households—easy installation,
              government subsidies, and zero maintenance stress.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Customized rooftop panel layout based on your home’s size and sunlight exposure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Net metering setup & government documentation handled for you
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Real-time monitoring & 24/7 customer support
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  30–70% savings on electricity bills from Day 1
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Get a Free Solar Assessment
            </Link>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/services/solar7_new.jpeg"
              alt="Residential Solar Panel Setup"
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
