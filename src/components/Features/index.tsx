"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      <section id="features" className="py-10 px-10 lg:py-16 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-6 xl:px-0">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
          </div>

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            

          </div>
        </div>
      </section>

    </>
  );
};

export default Feature;
