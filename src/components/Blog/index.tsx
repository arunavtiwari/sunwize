import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Explore Our Latest Solar Insights"
          paragraph="Stay updated with the latest trends, technologies, and policies in India's solar energy sector."
          center
        />

        <div className="flex snap-x snap-mandatory gap-4 px-4 overflow-x-auto scrollbar-hide">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="snap-start shrink-0 w-[250px] sm:w-[280px] md:w-[300px] bg-white dark:bg-gray-900 rounded-xl shadow-md p-4"
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Blog;
