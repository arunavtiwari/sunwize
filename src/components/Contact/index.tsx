"use client";
import { useState } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SHEETDB_URL = process.env.NEXT_PUBLIC_SHEETDB_URL as string;

const ContactForm = () => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    bill: "",
    societyName: "",
    designation: "",
    agmApproved: false,
    companyName: "",
    city: "",
    policyAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.policyAccepted) {
      alert("Please accept the terms and privacy policy.");
      return;
    }

    const dataToSend = {
      propertyType,
      ...formData,
    };

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataToSend }),
      });

      if (!res.ok) throw new Error("Failed to send to SheetDB");

      const message = `New Solar Inquiry:

Property Type: ${propertyType}
Full Name: ${formData.fullName}
Phone: ${formData.phone}
Pin Code: ${formData.pincode}
Monthly Bill: ${formData.bill}
${
  propertyType === "Housing Society"
    ? `Society Name: ${formData.societyName}
Designation: ${formData.designation}
AGM Approved: ${formData.agmApproved ? "Yes" : "No"}`
    : ""
}
${
  propertyType === "Commercial"
    ? `Company Name: ${formData.companyName}
City: ${formData.city}`
    : ""
}
`;

      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodedMsg}`, "_blank");

      alert("Details submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        pincode: "",
        bill: "",
        societyName: "",
        designation: "",
        agmApproved: false,
        companyName: "",
        city: "",
        policyAccepted: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  const tabs = ["Residential", "Housing Society", "Commercial"];
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
          <div className="lg:w-3/5 p-8 bg-gray-50 dark:bg-gray-900 space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Schedule a <span className="text-primary">FREE consultation</span> with us today!
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Fill out the form and we&apos;ll be in touch to explore your solar journey with Sunwize.
            </p>
            <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
              {images.map((src, idx) => (
                <div key={idx} className="relative h-64 sm:h-80 lg:h-96">
                  <Image src={src} alt={`Slide ${idx + 1}`} fill priority={idx === 0} className="object-cover rounded-xl" />
                </div>
              ))}
            </Slider>
          </div>

          {/* FORM */}
          <div className="lg:w-2/5 p-6 md:p-8 bg-white dark:bg-gray-800 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 border border-gray-300 rounded-full bg-gray-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPropertyType(tab)}
                  className={classNames("flex-1 py-2 px-4 text-sm font-medium rounded-full transition", {
                    "bg-white text-gray-700 shadow-sm": propertyType === tab,
                    "text-gray-500 hover:text-[#1E40AF]": propertyType !== tab,
                  })}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <FormField label="Full Name" required name="fullName" value={formData.fullName} onChange={handleChange} />

              {propertyType === "Residential" && (
                <>
                  <FormField label="WhatsApp number" required name="phone" value={formData.phone} onChange={handleChange} />
                  <FormField label="Pin code" required name="pincode" value={formData.pincode} onChange={handleChange} />
                  <FormSelect
                    label="What is your average monthly bill?"
                    required
                    name="bill"
                    value={formData.bill}
                    onChange={handleChange}
                    options={["Less than ₹1500", "₹1500 - ₹2500", "₹2500 - ₹4000", "₹4000 - ₹8000", "More than ₹8000"]}
                  />
                </>
              )}

              {propertyType === "Housing Society" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Name of Housing Society" required name="societyName" value={formData.societyName} onChange={handleChange} />
                    <FormField label="Pin code" required name="pincode" value={formData.pincode} onChange={handleChange} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="WhatsApp number" required name="phone" value={formData.phone} onChange={handleChange} />
                    <FormSelect
                      label="Your Designation"
                      required
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      options={["Management committee member", "Resident", "Builder", "Facility Manager"]}
                    />
                  </div>

                  <FormField label="Monthly Electricity Bill" required name="bill" value={formData.bill} onChange={handleChange} />

                  <label className="inline-flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      name="agmApproved"
                      checked={formData.agmApproved}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#1E40AF] border-gray-300 rounded"
                    />
                    <span>AGM approval status</span>
                  </label>
                </>
              )}

              {propertyType === "Commercial" && (
                <>
                  <FormField label="Company Name" required name="companyName" value={formData.companyName} onChange={handleChange} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="City" required name="city" value={formData.city} onChange={handleChange} />
                    <FormField label="Pin code" required name="pincode" value={formData.pincode} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="WhatsApp number" required name="phone" value={formData.phone} onChange={handleChange} />
                    <FormField label="Average Monthly Bill" required name="bill" value={formData.bill} onChange={handleChange} />
                  </div>
                </>
              )}

              {/* Policy */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="policyAccepted"
                  checked={formData.policyAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-[#1E40AF] border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  I agree to Sunwize&apos;s{" "}
                  <a href="/terms" className="text-primary underline">terms of service</a> &{" "}
                  <a href="/privacy" className="text-primary underline">privacy policy</a>
                </label>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-full hover:bg-dark transition">
              Submit & Contact on WhatsApp 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, name, value, onChange, required = false }: any) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-gray-800 dark:text-gray-200">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF] bg-white"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required = false }: any) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-gray-800 dark:text-gray-200">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF] bg-white"
    >
      <option value="">Select</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default ContactForm;
