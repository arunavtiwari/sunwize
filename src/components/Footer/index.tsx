import Link from 'next/link';
import Image from 'next/image';
const phoneIcon = (
  <svg
    className="h-4 w-4 fill-current text-primary"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.73 3.88.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.4 22.5 1.5 13.6 1.5 2.5a1 1 0 011-1H6a1 1 0 011 1c0 1.35.25 2.67.73 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

const emailIcon = (
  <svg className="h-4 w-4 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
);

const locationIcon = (
  <svg
    className="h-4 w-4 fill-current text-primary"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between -mx-4">
          {/* Logo & Description */}
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-10">
            <div className="mb-6">
              <Link href="/" aria-label="Sunwize Energy Home">
              <Image
                  src="/images/logo/sunwize-logo.png"
                  alt="Sunwize Energy System Pvt. Ltd. Logo"
                  width={192} 
                  height={48} 
                />
              </Link>
            </div>
            <p className="text-base text-white-subtle dark:text-white">
            Our expertise in solar photovoltaic technologies insures you green and sustainable energy harnessed through a combination of quality products and proved engineering.</p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-10">
            <h4 className="text-lg font-semibold mb-6">Reach Us</h4>
            <ul>
              <li className="mb-4 flex items-center space-x-2">
                {emailIcon}
                <a href="mailto:info@sunwize.com" className="text-base text-white-subtle hover:text-primary hover:underline" target="_blank">
                  info@sunwize.com
                </a>
              </li>
              <li className="mb-4 flex items-center space-x-2">
                {phoneIcon}
                <a href="tel:+919876543210" className="text-base text-white-subtle hover:text-primary hover:underline">
                  +91 9876543210
                </a>
                <span>/</span>
                <a href="tel:+919918993936" className="text-base text-white-subtle hover:text-primary hover:underline">
                  9918993936
                </a>
              </li>
              
              <li className="mb-4 flex items-start space-x-2">
                {locationIcon}
                <a
                  href="https://maps.app.goo.gl/UGFiCJ3FiejzjGg36"
                  className="text-base text-white-subtle hover:text-primary hover:underline"
                  target="_blank"
                >
                  589, Kanpur Rd, near Tata Motors,<br />
                  Hind Nagar, Sector C1, LDA Colony,<br />
                  Lucknow, Uttar Pradesh 226012
                </a>
              </li>
            </ul>
          </div>


          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-10">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul>
              <li className="mb-4">
                <Link href="/about" className="text-base text-white-subtle hover:text-primary hover:underline">About</Link>
              </li>
              <li className="mb-4">
                <Link href="/blog" className="text-base text-white-subtle hover:text-primary hover:underline">Blogs</Link>
              </li>
              <li className="mb-4">
                <Link href="/project" className="text-base text-white-subtle hover:text-primary hover:underline">Projects</Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="text-base text-white-subtle hover:text-primary hover:underline">Contact</Link>
              </li>
            </ul>
          </div>


          {/* Policy Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-10">
            <ul>
              <li className="mb-4">
                <Link href="/terms" className="text-base text-white-subtle hover:text-primary hover:underline">Terms Of Service</Link>
              </li>
              <li className="mb-4">
                <Link href="/privacy" className="text-base text-white-subtle hover:text-primary hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <a href="https://www.cognitoforms.com/Bnilucknownorth/CustomerFeedbackForm"
                   target="_blank"
                   className="text-base text-white-subtle hover:text-primary hover:underline"
                >Customer Feedback Form</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 mt-8 flex justify-center space-x-6">
          <a href="https://www.facebook.com/sunwize.co.in/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-yellow-400"
            >
              <title>Facebook Icon</title>
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.88 3.66 8.92 8.44 9.85v-6.97h-2.54V12h2.54v-2.03c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45H15.8c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.95h-2.34v6.97C18.34 21 22 16.95 22 12.07z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/sunwizeenergy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-yellow-400"
            >
              <title>Instagram Icon</title>
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
          </a>
          <a href="https://in.linkedin.com/company/anushka-&-associates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-yellow-400"
            >
              <title>LinkedIn Icon</title>
              <path d="M20.45 20.45h-3.555v-5.568c0-1.328-.027-3.038-1.85-3.038-1.85 0-2.132 1.445-2.132 2.938v5.668H9.355V9h3.414v1.56h.048c.475-.9 1.635-1.848 3.362-1.848 3.595 0 4.256 2.366 4.256 5.445v6.293zM5.337 7.433a2.06 2.06 0 1 1 0-4.119 2.06 2.06 0 0 1 0 4.119zM3.555 20.45h3.555V9H3.555v11.45z" />
            </svg>
          </a>
          
          <Link href="https://jsdl.in/DT-39NQAVPRSFA" aria-label="Justdial Profile" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logo/justdiallogo.svg"
              alt="Justdial Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-base text-white-subtle dark:text-white mt-8">
          © {new Date().getFullYear()} Sunwize Energy System Pvt. Ltd. | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
