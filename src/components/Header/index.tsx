"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const headerRef = useRef(null);
  const pathname = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // close menus on route change
  useEffect(() => {
    setOpenIndex(-1);
    setNavbarOpen(false);
  }, [pathname]);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenIndex(-1);
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-9999 bg-white/80 backdrop-blur-xs shadow-sticky transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "white-10"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-4"
              }`}
            >
              <Image
                src="/images/logo/sunwize-logo.png"
                alt="Sunwize Energy Systems logo"
                width={150}
                height={40}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/sunwize-logo.png"
                alt="Sunwize Energy Systems logo"
                width={150}
                height={40}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>

            {/* NAVBAR */}
            <nav
              className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 top-full z-30 w-[250px] rounded border bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 ${
                navbarOpen ? "block" : "hidden"
              } lg:block`}
            >
              <ul className="block lg:flex lg:space-x-12">

                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">

                    {/* NORMAL LINK */}
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-base font-bold lg:inline-flex lg:px-0 lg:py-3 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        {/* PARENT ITEM */}
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 font-bold text-base lg:inline-flex lg:px-0 lg:py-3 dark:text-white/70 dark:group-hover:text-white"
                        >
                          {menuItem.title}

                          <span className="pl-3">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29 8.84a1 1 0 011.42 0L12 13.13l4.29-4.29a1 1 0 111.42 1.42l-5 5a1 1 0 01-1.42 0l-5-5a1 1 0 010-1.42z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>

                        {/* SUBMENU */}
                        <div
                          className={`submenu hidden rounded-sm bg-white dark:bg-dark transition-all duration-300 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 ${
                            openIndex === index ? "!block" : ""
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={submenuItem.path}
                              onClick={() => {
                                setNavbarOpen(false);
                                setOpenIndex(-1);
                              }}
                              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-dark transition-colors hover:bg-primary/10 hover:text-primary dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}

              </ul>
            </nav>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">

              <Link
                href="/contact"
                className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/solar-calculator"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-full px-6 py-2 text-base font-medium text-white transition duration-300 md:block md:px-8 lg:px-4 xl:px-6"
              >
                Solar Calculator
              </Link>

              <ThemeToggler />

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;