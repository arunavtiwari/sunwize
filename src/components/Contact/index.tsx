"use client";
import { useState } from "react";
import classNames from "classnames";

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
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.policyAccepted) {
      alert("Please accept the terms and privacy policy.");
      return;
    }
    console.log("Form Submitted", formData);
  };

  const tabs = ["Residential", "Housing Society", "Commercial"];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-10">
      {/* LEFT: Carousel + Heading */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Go solar with Sunwize – for homes, societies, and businesses
        </h2>
        <Carousel />
      </div>

      {/* RIGHT: Form */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        {/* Tabs */}
        <div className="flex justify-between border border-gray-300 rounded-full overflow-hidden mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setPropertyType(tab)}
              className={classNames(
                "flex-1 py-2 text-sm font-medium focus:outline-none transition",
                {
                  "bg-white text-gray-700": propertyType !== tab,
                  "bg-[#F6F8FF] text-[#1E40AF] font-semibold": propertyType === tab,
                }
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* Shared Field */}
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
              <FormField label="Name of Housing Society" required name="societyName" value={formData.societyName} onChange={handleChange} />
              <FormField label="Pin code" required name="pincode" value={formData.pincode} onChange={handleChange} />
              <FormField label="WhatsApp number" required name="phone" value={formData.phone} onChange={handleChange} />
              <FormField label="Monthly Electricity Bill" required name="bill" value={formData.bill} onChange={handleChange} />
              <FormSelect
                label="Your Designation"
                required
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                options={["Management committee member", "Resident", "Builder", "Facility Manager"]}
              />
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
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="policyAccepted"
              checked={formData.policyAccepted}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-[#1E40AF] border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I agree to Sunwize's{" "}
              <a href="/terms" className="text-[#1E40AF] underline">terms of service</a> &{" "}
              <a href="/privacy" className="text-[#1E40AF] underline">privacy policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E40AF] text-white font-semibold py-2 rounded-full hover:bg-[#1A358D] transition"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

const FormField = ({ label, name, value, onChange, required = false }: any) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-800">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required = false }: any) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-800">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
    >
      <option value="">Select</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

// Dummy Carousel Component
const Carousel = () => (
  <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
    Image Carousel (replace with real carousel)
  </div>
);

export default ContactForm;
