import Image from "next/image";
import Link from "next/link";

export default function HousingSocietiesServicePage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Solar Power for Housing Societies & Apartments
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Make your society energy independent and environmentally responsible. We offer
              community-scale solar panel solutions that are easy to manage and highly cost-effective.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Shared rooftop system design for optimal space and efficiency
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Individual billing integration for flat-wise savings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Centralized high-efficiency inverters & energy storage options
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  24/7 performance monitoring and analytics dashboard for the RWA
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Book a Free Site Survey
            </Link>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/services/solar5_new.jpeg"
              alt="Solar panels on housing society rooftop"
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
