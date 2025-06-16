import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about/about_bg.png')`, 
        }}
      >
       <div className="absolute inset-0 bg-black/50 z-[1]"></div>
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium leading-relaxed text-white/90">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-white/80 hover:text-white"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                  </li>
                  <li className="text-base font-medium text-white">{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVGs remain here if desired */}
        <div>
          <span className="absolute left-0 top-0 z-0">
            {/* ...SVG 1... */}
          </span>
          <span className="absolute right-0 top-0 z-0">
            {/* ...SVG 2... */}
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
