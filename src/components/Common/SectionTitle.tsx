const SectionTitle = ({
  title,
  paragraph,
  width = "750px",
  center,
  mb = "100px",
}: {
  title: React.ReactNode;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h3 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h3>
      <p className="text-base text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
