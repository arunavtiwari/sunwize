import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Loaded via next/image (instead of a CSS background-image) so it
          gets a responsive srcset, next-gen format, and a high-priority
          preload hint - this is the homepage's LCP element. */}
      <Image
        src="/images/hero/bg-image.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50 z-[-1]" />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[950px] text-center py-12 px-4 sm:px-6 lg:px-8">
                 <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl md:text-5xl">
                  Power your space⚡, not your bills🙅🏻‍♀️
                </h1>
                <p className="mb-12 text-base leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
                  Sleek solar solutions for modern homes,
                  businesses, and communities
                </p>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white sm:text-base">
                  {[
                    "20+ Years of Expertise",
                    "1000+ Projects Completed",
                    "UPNEDA Empanelled",
                  ].map((stat) => (
                    <span key={stat} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 shrink-0 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.415l-7.005 7.004a1 1 0 01-1.414 0L4.296 9.71a1 1 0 111.414-1.414l3.283 3.282 6.297-6.296a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {stat}
                    </span>
                  ))}
                  
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                  >
                    Sign Up for Free Electricity {'->'}
                  </Link>
                  <Link
                    href="/solar-panel-price-lucknow"
                    className="rounded-full border border-white px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-white/10"
                  >
                    View Solar Prices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
