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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            End-to-End Solar Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Here’s how we ensure a seamless and complete solar installation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-8"
            >
              {/* Number Circle */}
              <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center text-xl font-bold shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndService;
