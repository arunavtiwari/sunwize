import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const products = [
  {
    title: "On-Grid/Off-Grid Solar System",
    description:
      "Connected to the electricity grid, great for reducing bills and net metering.",
    isSolution: true,
    image: "/images/about/ongrid.png"
  },
  {
    title: "Solar Home System",
    description:
      "Perfect compact solution for an independent power supply in remote locations where electricity is unavailable, unreliable or expensive.",
    isSolution: true,
    image: "/images/about/solarhome.png"
  },
  {
    title: "Solar Power Plant",
    description:
      "Sunwize is an experienced player in setting up industrial and residential solar plants.",
      image: "/images/about/solar.png"
  },
  {
    title: "Solar Water Heater",
    description:
      "Sunwize solar thermal water heating systems are complete and efficient.",
      image: "/images/about/sunwizewaterheater.png"
  },
  {
    title: "Solar Water Pump",
    description:
      "Specially designed solar water pumping systems for agriculture and industry.",
      image: "/images/about/waterpump.png"
  },
  {
    title: "Solar Street Light",
    description:
      "Photovoltaic-based lighting for streets, parks, and commercial zones.",
      image: "/images/about/solar_light.jpeg"
  },
];


const ProductCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => (
  <div className="flex rounded-xl border border-gray-200 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
    {/* Image Section */}
    <div className="w-1/3 relative min-h-[120px]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-l-xl"
      />
    </div>

    {/* Text Section */}
    <div className="w-2/3 p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
    </div>
  </div>
);


const PopularProductsSection = () => {
  return (
    <section id="products" className="pt-16 md:pt-20 lg:pt-28 bg-white dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Our Popular Products"
          paragraph="Explore our best-selling and most trusted solar energy solutions used across residential, commercial, and industrial sectors."
          center
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
