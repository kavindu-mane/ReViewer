import React from "react";

const FooterSecondary = () => {
  return (
    <div className="w-screen px-1 pb-3 text-center font-Poppins text-xs font-medium text-gray-600 dark:text-gray-300">
      Copyrights 2023 |
      <a href="/" className="mx-1">
        reviewer.com
      </a>
      |
      <a href="/privacy" className="mx-1">
        Privacy policy
      </a>
      |
      <a href="/terms" className="mx-1">
        Terms
      </a>
      |
      <a href="/faq" className="mx-1">
        FAQ
      </a>
    </div>
  );
};

export default FooterSecondary;
