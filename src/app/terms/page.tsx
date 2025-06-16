import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sunwize Energy System Pvt. Ltd.",
  description:
    "Read the terms and conditions governing your use of services provided by Sunwize Energy System Pvt. Ltd.",
  keywords: [
    "Sunwize Terms",
    "Solar Installation Terms",
    "Solar Service Conditions",
    "Solar Contract",
    "Sunwize Energy India",
    "Lucknow Solar Company",
    "Renewable Energy"
  ],
  authors: [{ name: "Sunwize Energy" }],
  openGraph: {
    title: "Terms of Service | Sunwize Energy",
    description:
      "Review the terms and conditions for using Sunwize Energy's website, services, and solar project installations.",
    url: "https://www.sunwize.co.in/terms",
    type: "website",
  },
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Please review the following terms and conditions carefully before using our website or engaging our solar services."
      />

      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-primary">1. Consent to Contact</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            By registering or providing your contact details on our website, you authorize Sunwize Energy System Pvt. Ltd. to contact you via phone call, email, WhatsApp, or SMS for service-related communication, product information, or promotional offers.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">2. Refund Policy</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            All advance payments made to Sunwize Energy System Pvt. Ltd. are non-refundable under any circumstances. We encourage customers to carefully evaluate their commitment before initiating any transaction.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">3. Project Delivery & Shipping</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            Our standard project timeline ranges from 45 to 90 days from the date of agreement and advance payment. While we aim for timely delivery, delays may occur due to unforeseen circumstances such as regulatory approvals, supply chain disruptions, or adverse weather. In such cases, customers will be promptly informed, and timelines may be reasonably extended.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">4. Use of Website</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            By using our website, you agree not to misuse the content, attempt unauthorized access, or infringe on the intellectual property of Sunwize Energy System Pvt. Ltd. We reserve the right to modify these terms at any time without prior notice.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">5. Contact Us</h2>
          <p className="text-base text-body-color dark:text-white">
            For any queries or concerns related to these Terms of Service, you may contact us at <a href="mailto:info@sunwize.com" className="text-primary underline">info@sunwize.com</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
