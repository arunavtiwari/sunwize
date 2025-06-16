import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Sunwize Energy Systems | Uttar Pradesh Solar Solutions",
  description: "About Sunwize Energy Systems | Lucknow Solar Solutions",
};

const AboutPage = () => {
  return (
    <>
      {/* Full-Width Banner Image Right After Navbar */}
      <div className="w-screen">
        <Image
          src="/images/about/about_bg.png"
          alt="About Sunwize"
          width={1920}
          height={500}
          className="w-full h-auto max-h-[500px] object-cover"
          priority
        />
      </div>

      {/* About Text Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-bg-color-dark">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Sunwize Energy Systems
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Established in 2002 by Mr. Sanjai Tiwari, Sunwize Energy Systems is a
            leading renewable energy company based in Lucknow. As a proud member
            of BNI and an ISO 9001:14001 certified company, we’ve earned a strong
            reputation for delivering high-quality, sustainable solar solutions
            across India.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sunwize is an empaneled vendor with UPNEDA (Uttar Pradesh New and
            Renewable Energy Development Agency), recognized at both the state and
            national level. This endorsement reflects our commitment to quality,
            compliance, and impactful renewable energy deployment.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            As pioneers in solar photovoltaic and hybrid technologies, our mission
            is to make reliable and affordable green energy accessible to all. We
            specialize in grid-connected, off-grid, thermal, and hybrid solar
            systems tailored for residential, commercial, and industrial
            applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            With over two decades of experience and a customer-first approach, our
            team ensures unmatched service, responsive support, and long-lasting
            value.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
