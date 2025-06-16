"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import testimonialData from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-8 py-16 md:py-10 lg:py-18">
      <div className="container">
        <SectionTitle
          title="What Our Customers Say"
          paragraph="Hear directly from our happy customers about their experience with Sunwize."
          center
        />

        {/* Two-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
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
          </div>
        </div>
      </div>

      {/* Optional SVG background decorations can go here */}
    </section>
  );
};

export default Testimonials;
