"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      <section id="services" className="py-10 px-10 lg:py-16 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-6 xl:px-0">
          <div className="container">
          <SectionTitle
            title={
              <>
                Our{" "}
                <span className="relative inline-block text-primary">
                  Services
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-primary/40 rounded-full"></span>
                </span>
              </>
            }
            paragraph="Explore our best-selling and most trusted solar energy solutions used across residential, commercial, and industrial sectors."
            center
          />
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
