import React, { lazy } from "react";
const ThemeButton = lazy(() => import("./ThemeButton"));

const Footer = () => {
  return (
    <footer className="w-screen bg-slate-800 shadow dark:bg-gray-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="font-Poppins sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
            >
              <span className="self-center whitespace-nowrap text-2xl font-medium text-sky-500 dark:text-sky-400">
                ReViewer
              </span>
            </a>
            <div className="child:!text-white ms-5 rounded-full hover:bg-slate-700 md:hidden">
              <ThemeButton />
            </div>
          </div>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="/about" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="me-4 hover:underline md:me-6">
                T&C
              </a>
            </li>
            <li>
              <a href="/cantact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            ReViewer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
