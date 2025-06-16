const steps = [
  {
    number: 1,
    title: "On-Call Consultation",
    description: "We discuss your energy needs and help you choose the best solution.",
  },
  {
    number: 2,
    title: "Site Visit & Measurements",
    description: "Our engineers inspect your site for feasibility and requirements.",
  },
  {
    number: 3,
    title: "Custom Estimation",
    description: "We share a tailored estimate based on your site and goals.",
  },
  {
    number: 4,
    title: "Installation",
    description: "Certified team installs your system with quality assurance.",
  },
  {
    number: 5,
    title: "Support & Aftercare",
    description: "We help with setup, performance monitoring, and after-sales queries.",
  },
  {
    number: 6,
    title: "Cleaning & Maintenance",
    description: "Scheduled maintenance and cleaning to ensure peak performance.",
  },
];

const EndToEndService = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            End-to-End Solar Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s how we ensure a seamless and complete solar installation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-20">
              {/* Number Box */}
              <div className="absolute left-0 top-0 w-14 h-14 rounded-md bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
                {step.number}
              </div>

              {/* Extended Connector Line */}
              <div className="absolute left-[56px] top-7 h-1 bg-primary/30 w-[50%] rounded-full" />

              {/* Step Content */}
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {step.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndService;
