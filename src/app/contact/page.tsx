import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sunwize Energy Systems Pvt. Ltd.",
  description:
    "Get in touch with Sunwize Energy Systems Pvt. Ltd. for solar solutions, project inquiries, or support. We're here to help you switch to sustainable energy.",
  alternates: { canonical: "/contact" },
  keywords: [
    "Sunwize Energy Systems",
    "Solar Company India",
    "Contact Sunwize",
    "Renewable Energy",
    "Solar Projects",
    "Solar Installation",
    "Lucknow Solar Company",
  ],
  authors: [{ name: "Sunwize Energy Systems Pvt. Ltd." }],
  openGraph: {
    title: "Contact Us | Sunwize Energy Systems Pvt. Ltd.",
    description:
      "Reach out to Sunwize Energy Systems Pvt. Ltd. for reliable solar energy solutions and expert consultation.",
    url: "https://www.sunwize.co.in/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Need assistance or want to learn more about our solar energy solutions? Our team at Sunwize Energy Systems Pvt. Ltd. is here to help you with expert guidance and support."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
