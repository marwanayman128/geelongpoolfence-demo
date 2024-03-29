"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    const menu = document.getElementById("navbar-cta");
    menu?.classList.toggle("hidden");
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <nav className="border-gray-200 bg-gray-900 static w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-enter">
          <Image
            width={220}
            height={120}
            src={"/Logo.png"}
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2">
          <a href="tel:0404494904">
            <button
              type="button"
              className="text-white bg-[#2499ED] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#2499ED] hover:bg-blue-700 focus:ring-blue-300 flex max-[500px]:hidden flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <h1 className="text-lg">0404 494 904</h1>
            </button>
          </a>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 max-[767px]:absolute z-50 max-[767px]:top-14 max-[767px]:left-0"
          id="navbar-cta"
        >
          <ul
            style={{ backgroundColor: "#111827" }}
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700"
          >
            <li>
              <a
                href="/#home"
                className={`block py-2 pl-3 pr-4 text-white ${
                  activeLink === "#home" ? "bg-[#2499ED] text-white" : ""
                } rounded  md:px-2 `}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded  ${
                  activeLink === "#about"
                    ? " md:bg-[#2499ED] md:px-2  text-white "
                    : " md:hover:text-blue-700 md:px-2 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white "
                } border-gray-700`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded  ${
                  activeLink === "#services"
                    ? " bg-[#2499ED] md:px-2  text-white "
                    : " md:hover:text-blue-700 md:px-2 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white "
                } border-gray-700`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded  ${
                  activeLink === "#contact"
                    ? " bg-[#2499ED] md:px-2  text-white "
                    : " md:hover:text-blue-700 md:px-2 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white "
                } border-gray-700`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
