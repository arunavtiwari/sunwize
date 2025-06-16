import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sunwize Energy System Pvt. Ltd.",
  description:
    "Understand how Sunwize Energy System Pvt. Ltd. collects, uses, and protects your personal information when you use our website or services.",
  keywords: [
    "Sunwize Privacy Policy",
    "Data Protection Solar",
    "Solar Company Privacy Terms",
    "Sunwize Energy India",
    "Personal Data Policy",
  ],
  authors: [{ name: "Sunwize Energy" }],
  openGraph: {
    title: "Privacy Policy | Sunwize Energy",
    description:
      "Learn how Sunwize Energy System Pvt. Ltd. protects your personal data and respects your privacy across our digital platforms.",
    url: "https://www.sunwize.co.in/privacy",
    type: "website",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="We value your privacy. Please read below to understand how your personal data is handled by Sunwize Energy System Pvt. Ltd."
      />

      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-primary">1. Information We Collect</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            We collect personal information such as your name, contact number, email address, and location when you submit a form, request a quote, or interact with our services. This helps us provide relevant solar energy solutions and improve your overall experience.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">2. How We Use Your Information</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            Your data is used to provide and enhance our services, send updates or promotional materials, and respond to inquiries. We may also use it for internal analytics and compliance with legal obligations.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">3. Consent for Communication</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            By providing your details, you consent to be contacted by Sunwize Energy System Pvt. Ltd. via phone, SMS, WhatsApp, or email, even if your number is registered on DND/NCPR lists. You may opt out anytime by contacting us.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">4. Sharing of Information</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            We do not sell your personal information. It may be shared with trusted partners or service providers involved in delivering our services, under strict confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">5. Data Security</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            We use industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of data transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">6. Cookies & Tracking</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            Our website may use cookies to improve user experience and analyze site traffic. You can control cookie settings in your browser.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">7. Your Rights</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            You have the right to access, correct, or request deletion of your data at any time. You may also withdraw consent for communications.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">8. Policy Updates</h2>
          <p className="mb-6 text-base text-body-color dark:text-white">
            This policy may be updated from time to time. Continued use of our services implies acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-primary">9. Contact Us</h2>
          <p className="text-base text-body-color dark:text-white">
            For any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@sunwize.com" className="text-primary underline">info@sunwize.com</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
