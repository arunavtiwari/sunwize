import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import OnGridVsOffGridSolarIndia from "@/app/blog-content/on-grid-vs-off-grid-solar-india";
import SolarSubsidySchemesIndia from "@/app/blog-content/solar-subsidy-schemes-india-2025";
import SolarPowerPlantSavingsIndia from "@/app/blog-content/solar-power-plant-savings-india";
import SolarWaterHeatersVsElectricGeysers from "@/app/blog-content/solar-water-heaters-vs-electric-geysers-2025";
import SolarForAgriculture from "@/app/blog-content/solar-for-agriculture-indian-farmers";
import SolarPanelPriceLucknowGuide from "@/app/blog-content/solar-panel-price-lucknow-guide";
import PmSuryaGharYojana2026 from "@/app/blog-content/pm-surya-ghar-yojana-2025";
import BestSolarPanelsIndia2026 from "@/app/blog-content/best-solar-panels-india-2025";
import SolarPanelMaintenanceIndia from "@/app/blog-content/solar-panel-maintenance-india";
import SolarForSmallBusinessesUp from "@/app/blog-content/solar-for-small-businesses-up";
import SolarBatteryStorageIndia2026 from "@/app/blog-content/solar-battery-storage-india-2026";
import NetMeteringGuideUppcl from "@/app/blog-content/net-metering-guide-uppcl";
import SolarForApartmentsIndia from "@/app/blog-content/solar-for-apartments-india";
import SolarPerformanceWinterNorthIndia from "@/app/blog-content/solar-performance-winter-north-india";
import PmKusumSolarPumpUp from "@/app/blog-content/pm-kusum-solar-pump-up";
import SolarInverterBuyingGuideIndia from "@/app/blog-content/solar-inverter-buying-guide-india";
import SolarEmiFinancingIndia from "@/app/blog-content/solar-emi-financing-india";
import CommercialSolarRooftopUp from "@/app/blog-content/commercial-solar-rooftop-up";
import SolarSavingsLucknow from "@/app/blog-content/solar-savings-lucknow";
import SolarSubsidyApplyUppcl2026 from "@/app/blog-content/solar-subsidy-apply-uppcl-2026";
import SolarForSchoolsCollegesUp from "@/app/blog-content/solar-for-schools-colleges-up";
import SolarPanelLifespanIndia from "@/app/blog-content/solar-panel-lifespan-india";
import HybridSolarSystemIndia from "@/app/blog-content/hybrid-solar-system-india";
import SolarRooftopVsGroundMount from "@/app/blog-content/solar-rooftop-vs-ground-mount";
import SolarEvChargingUp from "@/app/blog-content/solar-ev-charging-up";
import SolarVsGeneratorLucknow from "@/app/blog-content/solar-vs-generator-lucknow";
import SolarAcLucknow from "@/app/blog-content/solar-ac-lucknow";
import SolarColdStorageUp from "@/app/blog-content/solar-cold-storage-up";
import SolarForHousingSocietiesUp from "@/app/blog-content/solar-for-housing-societies-up";
import SolarForHospitalsClinicsUp from "@/app/blog-content/solar-for-hospitals-clinics-up";
import BlogCover from "@/components/Blog/BlogCover";
import blogData from "@/components/Blog/blogData";

const blogContentComponents = {
  "on-grid-vs-off-grid-solar-india": OnGridVsOffGridSolarIndia,
  "solar-subsidy-schemes-india-2026": SolarSubsidySchemesIndia,
  "solar-power-plant-savings-india": SolarPowerPlantSavingsIndia,
  "solar-water-heaters-vs-electric-geysers-2026": SolarWaterHeatersVsElectricGeysers,
  "solar-for-agriculture-indian-farmers": SolarForAgriculture,
  "solar-panel-price-lucknow-guide": SolarPanelPriceLucknowGuide,
  "pm-surya-ghar-yojana-2026": PmSuryaGharYojana2026,
  "best-solar-panels-india-2026": BestSolarPanelsIndia2026,
  "solar-panel-maintenance-india": SolarPanelMaintenanceIndia,
  "solar-for-small-businesses-up": SolarForSmallBusinessesUp,
  "solar-battery-storage-india-2026": SolarBatteryStorageIndia2026,
  "net-metering-guide-uppcl": NetMeteringGuideUppcl,
  "solar-for-apartments-india": SolarForApartmentsIndia,
  "solar-performance-winter-north-india": SolarPerformanceWinterNorthIndia,
  "pm-kusum-solar-pump-up": PmKusumSolarPumpUp,
  "solar-inverter-buying-guide-india": SolarInverterBuyingGuideIndia,
  "solar-emi-financing-india": SolarEmiFinancingIndia,
  "commercial-solar-rooftop-up": CommercialSolarRooftopUp,
  "solar-savings-lucknow": SolarSavingsLucknow,
  "solar-subsidy-apply-uppcl-2026": SolarSubsidyApplyUppcl2026,
  "solar-for-schools-colleges-up": SolarForSchoolsCollegesUp,
  "solar-panel-lifespan-india": SolarPanelLifespanIndia,
  "hybrid-solar-system-india": HybridSolarSystemIndia,
  "solar-rooftop-vs-ground-mount": SolarRooftopVsGroundMount,
  "solar-ev-charging-up": SolarEvChargingUp,
  "solar-vs-generator-lucknow": SolarVsGeneratorLucknow,
  "solar-ac-lucknow": SolarAcLucknow,
  "solar-cold-storage-up": SolarColdStorageUp,
  "solar-for-housing-societies-up": SolarForHousingSocietiesUp,
  "solar-for-hospitals-clinics-up": SolarForHospitalsClinicsUp,
};

function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Blog post not found" };
  }

  const description = truncate(blog.paragraph);
  const canonicalPath = `/blog-details/${blog.slug}`;

  return {
    title: blog.title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: blog.title,
      description,
      images: blog.image
        ? [{ url: blog.image, alt: blog.title }]
        : undefined,
    },
  };
}

export default async function BlogDetailsPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) notFound();

  const BlogContent = blogContentComponents[slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: truncate(blog.paragraph),
    image: blog.image
      ? `https://www.sunwize.co.in${blog.image}`
      : undefined,
    author: { "@type": "Person", name: blog.author.name },
    publisher: {
      "@type": "Organization",
      name: "Sunwize Energy Systems",
      legalName: "Sunwize Energy Systems Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sunwize.co.in/favicon.ico",
      },
    },
    datePublished: blog.publishDate,
    mainEntityOfPage: `https://www.sunwize.co.in/blog-details/${blog.slug}`,
  };

  return (
    <section className="pt-[150px] pb-[120px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
                {blog.image && blog.image.trim() ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center rounded"
                  />
                ) : (
                  <BlogCover
                    title={blog.title}
                    tag={blog.tags?.[0]}
                    slug={blog.slug}
                    className="absolute inset-0 h-full w-full rounded object-cover object-center"
                  />
                )}
              </div>
            </div>

            <article className="blogContent">
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

