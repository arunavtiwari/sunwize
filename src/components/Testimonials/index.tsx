"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import testimonialData from "./testimonialData";

const googleRating = {
  value: 4.5,
  max: 5,
  url: "https://www.google.com/search?q=sunwize+energy+systems+lucknow", // Replace with your actual Google Business URL
};


const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-8 py-16 md:py-10 lg:py-18">
      <div className="container">
        {/* Section heading */}
        <SectionTitle
          title="What Our Customers Say"
          paragraph="Hear directly from our happy customers about their experience with Sunwize."
          center
        />


        

        {/* Two-column layout */}
        <div className="mt-1 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Left column: video embed */}
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl shadow-xl">
            <iframe
              src="https://sunwize.co.in/assets/video/feedback-one.mp4"
              title="Testimonial Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
          {/* Right column: Testimonials carousel */}
          <div className="relative pt-20 pb-10 min-h-[420px]">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              loop
              className="testimonial-swiper"
            >
              {testimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <SingleTestimonial testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-1 flex justify-center">
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full shadow px-4 py-2 border border-gray-200 dark:border-gray-600 hover:shadow-md transition"
          >
            <Image
              src="/images/logo/google-logo.png"
              alt="Google Logo"
              width={24}
              height={24}
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              Rated <strong>{googleRating.value}</strong> / {googleRating.max} on{" "}
              <span className="text-yellow-500 font-bold">★ Google</span>
            </span>
          </a>
        </div>
          </div>
        </div>
      </div>

      {/* Optional SVG background decorations can go here */}
    </section>
  );
};

export default Testimonials;
