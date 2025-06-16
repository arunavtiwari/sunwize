import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunwize Blog | Insights & Innovations in Solar Energy",
  description:
    "Explore expert articles and insights on solar energy, sustainability, and Sunwize innovations.",
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sunwize Blog"
        description="Stay up to date with the latest in solar innovation, sustainability trends, and updates from the Sunwize team."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 py-5 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination (can be made dynamic later) */}
          <div className="-mx-4 flex flex-wrap mt-10">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {["Prev", "1", "2", "3", "...", "10", "Next"].map(
                  (item, index) => {
                    const isDisabled = item === "...";
                    return (
                      <li key={index} className="mx-1">
                        {isDisabled ? (
                          <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                            {item}
                          </span>
                        ) : (
                          <a
                            href="#0"
                            className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                          >
                            {item}
                          </a>
                        )}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
