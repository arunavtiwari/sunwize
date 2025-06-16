import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import OnGridVsOffGridSolarIndia from "@/app/blog-content/on-grid-vs-off-grid-solar-india";
import SolarSubsidySchemesIndia from "@/app/blog-content/solar-subsidy-schemes-india-2025";
import SolarPowerPlantSavingsIndia from "@/app/blog-content/solar-power-plant-savings-india";
import SolarWaterHeatersVsElectricGeysers from "@/app/blog-content/solar-water-heaters-vs-electric-geysers-2025";
import SolarForAgriculture from "@/app/blog-content/solar-for-agriculture-indian-farmers";
import blogData from "@/components/Blog/blogData";

const blogContentComponents = {
  "on-grid-vs-off-grid-solar-india": OnGridVsOffGridSolarIndia,
  "solar-subsidy-schemes-india-2025": SolarSubsidySchemesIndia,
  "solar-power-plant-savings-india": SolarPowerPlantSavingsIndia,
  "solar-water-heaters-vs-electric-geysers-2025": SolarWaterHeatersVsElectricGeysers,
  "solar-for-agriculture-indian-farmers": SolarForAgriculture,
};

interface Params {
  params: { slug: string };
}

const BlogDetailsPage = ({ params }: Params) => {
  const slug = params.slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  const BlogContent = blogContentComponents[slug];

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
              {blog.title}
            </h1>

            <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
              <div className="flex flex-wrap items-center">
                <div className="mr-10 mb-5 flex items-center">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-body-color mb-1 text-base font-medium">
                      By <span>{blog.author.name}</span>
                    </p>
                    <p className="text-body-color text-sm">{blog.author.designation}</p>
                  </div>
                </div>

                <div className="mb-5 flex items-center space-x-5 text-body-color text-base font-medium">
                  <p className="flex items-center">
                    <span className="mr-3">
                      {/* Example icon placeholder */}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="7.5" cy="7.5" r="7.5" />
                      </svg>
                    </span>
                    {blog.publishDate}
                  </p>
                  {/* You can add more meta info here like reading time, comments count if available */}
                </div>
              </div>

              <div className="mb-5">
                {blog.tags.length > 0 && (
                  <TagButton text={blog.tags[0]} />
                )}
              </div>
            </div>

            <div className="mb-10 w-full overflow-hidden rounded-sm">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover object-center rounded"
                />
              </div>
            </div>

            <article className="prose max-w-none dark:prose-invert">
              {BlogContent ? <BlogContent /> : <p>Content not available.</p>}
            </article>

            <div className="items-center justify-between sm:flex mt-10">
              <div className="mb-5">
                <h4 className="text-body-color mb-3 text-sm font-medium">
                  Popular Tags :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <TagButton key={tag} text={tag} />
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                  Share this post :
                </h5>
                <div className="flex items-center sm:justify-end">
                  <SharePost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
