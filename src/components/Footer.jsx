import React from "react";

const Footer = () => {
  return (
    <footer class="rounded-lg bg-white shadow dark:bg-gray-950">
      <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div class="font-Poppins sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            class="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <span class="self-center whitespace-nowrap text-2xl font-medium text-sky-500 dark:text-sky-400">
              ReViewer
            </span>
          </a>
          <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" class="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="me-4 hover:underline md:me-6">
                T&C
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="/" class="hover:underline">
            ReViewer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
