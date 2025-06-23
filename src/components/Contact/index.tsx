"use client";
import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    bill: "",
    propertyType: "",
    policyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.policyAccepted) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    const sheetData = {
      data: [
        {
          name: formData.name,
          phone: formData.phone,
          pincode: formData.pincode,
          bill: formData.bill,
          propertyType: formData.propertyType,
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData),
      });
    
      const responseText = await res.text();
      if (!res.ok) {
        console.error("SheetDB response:", responseText);
        throw new Error("SheetDB error");
      }

      const message = `👋 Hello, I would like to schedule a *FREE consultation* with Sunwize.Add commentMore actions
  
      *Name:* ${formData.name}
      *WhatsApp Number:* ${formData.phone}
      *Pin Code:* ${formData.pincode}
      *Property Type:* ${formData.propertyType}
      *Monthly Bill:* ${formData.bill}
      
      Please get in touch with me!`;
  
      const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
      setFormData({
        name: "",
        phone: "",
        pincode: "",
        bill: "",
        propertyType: "",
        policyAccepted: false,
      });
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your form.");
    }
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "/images/contact/form.png",
    "/images/contact/p1.jpg",
    "/images/services/solar3_new.jpeg",
    "/images/services/solar5_new.jpeg",
  ];

  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

          {/* Left Carousel + Text */}
          <div className="lg:w-3/5 p-8 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2 leading-snug">
            Schedule a <span className="text-primary">FREE consultation</span> with us today!
          </h2>

            <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
              Please fill the form and we will get in touch with you for the consultation.
            </p>

            <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
              {images.map((src, idx) => (
                <div key={idx} className="relative h-64 sm:h-80 lg:h-96">
                  <Image
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    fill
                    
                    className="rounded-lg"
                    priority={idx === 0}
                    style={{objectFit: "cover"}}
                  />

                </div>
              ))}
            </Slider>
          </div>

          {/* Right Form */}
          <div className="lg:w-2/5 p-3 mt-20">
            <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6 sm:p-8 ">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} type="text" required />
                  <Input label="WhatsApp Number" name="phone" value={formData.phone} onChange={handleChange} type="tel" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Pin Code" name="pincode" value={formData.pincode} onChange={handleChange} type="text" required />
                  <Select label="Property Type" name="propertyType" value={formData.propertyType} onChange={handleChange} options={["Residential", "Housing Society", "Commercial"]} required />
                </div>
                
                <Select label="Monthly Bill" name="bill" value={formData.bill} onChange={handleChange}
                  options={["Less than ₹1500", "₹1500 - ₹2500", "₹2500 - ₹4000", "₹4000 - ₹8000", "More than ₹8000"]} required />

                <div className="flex items-start text-sm">
                  <input type="checkbox" name="policyAccepted" checked={formData.policyAccepted} onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary border-gray-300 rounded dark:bg-gray-700" />
                  <label className="ml-2 text-gray-700 dark:text-gray-300">
                    I agree to Sunwize&apos;s <a href="/terms" className="text-primary underline">terms</a> &amp; <a href="/privacy" className="text-primary underline">privacy policy</a>.
                  </label>
                </div>

                <button type="submit" className="w-full text-white bg-primary hover:bg-primary/90 font-semibold text-sm py-2 rounded-md transition">
                  Submit & Contact on WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Input = ({ label, name, value, onChange, type = "text", required = false }) => (
  <div>
    <label className="block text-xs font-medium text-gray-700 dark:text-gray-400 mb-1">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange}
      className="w-full px-3 py-2 text-base bg-gray-50 dark:bg-gray-700 rounded-md border focus:outline-none" required={required} />
  </div>
);

const Select = ({ label, name, value, onChange, options, required = false }) => (
  <div>
    <label className="block text-xs font-medium text-gray-700 dark:text-gray-400 mb-1">{label}</label>
    <select name={name} value={value} onChange={onChange}
      className="w-full rounded border border-stroke bg-[#f8f8f8] px-3 py-2 text-base dark:bg-[#2C303B] dark:text-body-color-dark" required={required}>
      <option value="">Select</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export default Contact;