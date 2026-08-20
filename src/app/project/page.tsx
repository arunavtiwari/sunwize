import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import projectData from "@/components/Projects/projectData";
import SingleProject from "@/components/Projects/SingleProject";

export const metadata: Metadata = {
  title: "Our Solar Projects",
  description:
    "Explore Sunwize's featured solar energy projects across Lucknow and Uttar Pradesh, spanning residential, commercial, and industrial installations.",
  alternates: { canonical: "/project" },
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Projects"
        description="Explore our featured solar energy projects across India, spanning residential, commercial, and industrial sectors."
      />

      <section className="pt-[120px] pb-[120px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="w-full px-4 py-5 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleProject project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
