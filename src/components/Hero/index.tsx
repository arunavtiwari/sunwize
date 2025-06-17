import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 bg-cover bg-center bg-no-repeat pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      style={{
        backgroundImage: "url('/images/hero/bg-image.jpg')", 
      }}
      
    >
      <div className="absolute inset-0 bg-black/50 z-[-1]" />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl md:text-5xl">
                  Powering the Future with Clean Solar Energy
                </h1>
                <p className="mb-12 text-base leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
                  SunWize offers reliable solar panel solutions for homes,
                  businesses, and communities. Let us help you harness the power
                  of the sun for a cleaner tomorrow.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                  >
                    Sign Up for Free Electricity
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/5"
                  >
                    Learn More
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
