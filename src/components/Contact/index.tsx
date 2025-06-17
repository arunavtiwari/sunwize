"use client"
import { useState } from "react";

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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.policyAccepted) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }
  
    // 1. Send to SheetDB
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
      const res = await fetch(process.env.SHEETDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });
  
      if (!res.ok) {
        throw new Error("Failed to submit to SheetDB");
      }
  
      const message = `👋 Hello, I would like to schedule a *FREE consultation* with Sunwize.
  
  *Name:* ${formData.name}
  *WhatsApp Number:* ${formData.phone}
  *Pin Code:* ${formData.pincode}
  *Property Type:* ${formData.propertyType}
  *Monthly Bill:* ${formData.bill}
  
  Please get in touch with me!`;
  
      const whatsappURL = `https://wa.me/${process.env.whatsappNumber}?text=${encodeURIComponent(
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
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your form. Please try again.");
    }
  };
  

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-md bg-white px-6 py-10 shadow-md dark:bg-gray-dark">
          <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">
            Schedule a <span className="text-primary font-bold">FREE consultation</span> with us today!
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
            Please fill the form and we will get in touch with you for the consultation.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded border border-stroke bg-[#f8f8f8] px-4 py-3 text-base dark:bg-[#2C303B] dark:text-body-color-dark"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your WhatsApp number"
                className="w-full rounded border border-stroke bg-[#f8f8f8] px-4 py-3 text-base dark:bg-[#2C303B] dark:text-body-color-dark"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                Pin Code
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Your area's pin code"
                className="w-full rounded border border-stroke bg-[#f8f8f8] px-4 py-3 text-base dark:bg-[#2C303B] dark:text-body-color-dark"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                Property Type
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-[#f8f8f8] px-4 py-3 text-base dark:bg-[#2C303B] dark:text-body-color-dark"
                required
              >
                <option value="">Select</option>
                <option value="Residential">Residential</option>
                <option value="Housing Society">Housing Society</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                What is your average monthly electricity bill?
              </label>
              <select
                name="bill"
                value={formData.bill}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-[#f8f8f8] px-4 py-3 text-base dark:bg-[#2C303B] dark:text-body-color-dark"
                required
              >
                <option value="">Select</option>
                <option value="Less than ₹1500">Less than ₹1500</option>
                <option value="₹1500 - ₹2500">₹1500 - ₹2500</option>
                <option value="₹2500 - ₹4000">₹2500 - ₹4000</option>
                <option value="₹4000 - ₹8000">₹4000 - ₹8000</option>
                <option value="More than ₹8000">More than ₹8000</option>
              </select>
            </div>

            <div className="mb-6 flex items-start gap-3">
              <input
                type="checkbox"
                name="policyAccepted"
                checked={formData.policyAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-sm text-dark dark:text-white">
                I agree to Sunwize&apos;s{" "}
                <a href="/terms" className="text-primary underline">
                  terms of service
                </a>{" "}
                &{" "}
                <a href="/privacy" className="text-primary underline">
                  privacy policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-primary px-6 py-3 text-white transition hover:bg-primary/90"
            >
              Submit & Contact on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
