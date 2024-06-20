import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Image } from "astro:assets";
import nextgenLogo from "../assets/next-gen-logo.png";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  TIKTOK_URL,
  EMAIL_ADDRESS,
} from "../consts.ts";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname
          )
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  return (
    <nav className="w-full h-0 sticky top-0 z-50 font-stock tracking-wider">
      <div
        className={`${
          navBar || openMobile
            ? "bg-gray-500/90 backdrop-blur border-primary/80"
            : "bg-transparent border-white/20"
        } duration-300 border-b-2`}
      >
        <div className="px-5 max-w-7xl mx-auto ">
          <div
            className={`lg:h-28 relative flex h-20 items-center justify-between transition-all`}
            id="navbar"
          >
            <div className="flex w-full items-center justify-between">
              <a
                href="/"
                className="relative h-20 lg:h-36 mt-6 uppercase flex justify-center align-middle items-center leading-none text-white z-0 font-bold text-4xl tracking-wider ml-3 lg:ml-8"
              >
                <img
                  src="/NG Logo White Background 2.webp"
                  alt="NextGen Logo"
                  className="z-10 bg-white px-3 py-2 rounded-md w-24 h-24 lg:w-36 lg:h-32"
                />
              </a>
              <div className="hidden lg:flex justify-center w-full">
                <ul className="flex justify-between align-middle w-9/12 items-center">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${isActive(item, pathname) ? "bg-primary px-4 py-2" : ""} font-sans1 relative group last:no-underline last:px-0`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white font-normal text-lg duration-300 hover:underline decoration-secondary decoration-4 underline-offset-[10px] py-12 border-main-red whitespace-nowrap group-last:font-bold group-last:hover:text-primary-dark group-last:bg-accent group-last:py-4 group-last:px-8 group-last:rounded-bl-lg group-last:rounded-tr-lg group-last:hover:bg-white group-last:hover:no-underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-normal cursor-default text-white text-lg duration-300 hover:underline decoration-secondary  decoration-4 underline-offset-[10px] py-12 border-main-red whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`absolute z-10 top-12 bg-primary whitespace-nowrap text-white left-0 duration-500 ${hoveredIndex === index ? "h-auto w-auto opacity-100" : "h-0 w-0 opacity-0 overflow-hidden"}`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${isActive(subitem, pathname) ? "bg-accent" : ""} relative hover:bg-accent`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a className="p-3 block" href={subitem.link}>
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="cursor-default p-3 block">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute z-20 top-0 bg-primary whitespace-nowrap left-full duration-500 ${subHoveredIndex === subIndex ? "h-auto w-auto opacity-100" : "h-0 w-0 opacity-0 overflow-hidden"}`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${isActive(subsubitem, pathname) ? "bg-accent" : ""} relative hover:bg-secondary`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "max-h-screen" : "max-h-0 delay-300"
        } overflow-x-hidden duration-700 ease-in-out h-screen lg:hidden absolute w-full bg-gradient-to-b from-primary to-primary-dark z-50 top-0`}
        id="mobile-menu"
      >
        <div className="flex justify-end pl-5 pr-[26px] py-6">
          <svg
            className={`text-white h-6 w-6 cursor-pointer`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <a
          href="/"
          className="text-white px-10 w-fit block leading-none uppercase font-bold text-lg z-40 relative"
        >
          <h1 className="text-4xl font-sans">NextGen</h1>
          <h2 className="text-primary-dark font-medium font-sans">
            Flight Academy
          </h2>
        </a>

        <div
          className={`absolute w-60 h-20 bg-accent top-16 z-30 duration-300  ${
            openMobile ? "translate-x-0 delay-300" : "-translate-x-full "
          }`}
        ></div>

        <ul className="px-4 pb-3 mt-5 pt-2 flex flex-col">
          {mobileNavbarLinks.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onClick={() => handleItemClick(index)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  className="font-bold p-5 block text-white text-lg duration-300 border-main-red whitespace-nowrap group-last:bg-accent group-last:py-4 group-last:px-8 group-last:rounded-full group-last:mt-4 group-last:text-center group-last:mx-5"
                >
                  {item.name}
                </a>
              ) : (
                <div className="font-bold p-5 w-full justify-between flex cursor-pointer text-white text-lg duration-300  border-main-red whitespace-nowrap">
                  <p>{item.name}</p>
                  <div
                    className={`p-1 pointer-events-none duration-300 rounded-full ${hoveredIndex === index ? "bg-white rotate-90" : "bg-accent -rotate-90"} 
                    `}
                  >
                    <IoIosArrowForward
                      className={`${hoveredIndex === index ? "text-accent" : "text-white"} size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`z-10 ml-5 bg-primary whitespace-nowrap text-white left-0 duration-500 overflow-hidden ${hoveredIndex === index ? "max-h-[28rem]" : "max-h-0"}`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a className="p-5 block font-bold" href={subitem.link}>
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="font-bold p-5 w-full justify-between flex cursor-pointer text-white text-lg duration-300  border-main-red whitespace-nowrap">
                          <p>{subitem.name}</p>
                          <div
                            className={`p-1 pointer-events-none duration-300 rounded-full ${subHoveredIndex === subIndex ? "bg-white rotate-90" : "bg-accent -rotate-90"} 
                    `}
                          >
                            <IoIosArrowForward
                              className={`${subHoveredIndex === subIndex ? "text-accent" : "text-white"} size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`z-20 ml-8 bg-primary whitespace-nowrap left-full duration-500 overflow-hidden ${subHoveredIndex === subIndex ? "max-h-32" : "max-h-0"}`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                className="block p-5 font-bold"
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="p-5 px-10 text-white flex flex-col gap-3 overflow-hidden">
          <div className="flex gap-3 items-center">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="border p-2 w-fit border-white rounded-full bg-white cursor-pointer"
            >
              <MdEmail className="size-3 text-accent" />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="border p-2 w-fit border-white rounded-full bg-white"
            >
              <FaPhone className="size-3 text-accent" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>

          <div className="flex gap-3 mt-2">
            <a href={FACEBOOK_URL} target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                className="size-6 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={TIKTOK_URL} target="_blank">
              <span className="sr-only">YouTube</span>
              <svg
                className="size-6 text-accent"
                fill="currentColor"
                viewBox="0 0 512 512"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
