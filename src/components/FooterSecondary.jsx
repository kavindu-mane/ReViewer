import React from "react";

const FooterSecondary = () => {
  return (
    <div className="absolute bottom-3 start-0 w-full text-center font-Poppins text-xs font-medium text-gray-300">
      Copyrights 2023 | reviewer.com |
      <a href="/privacy" target="_blank" className="mx-1">
        privacy policy
      </a>
      |
      <a href="/terms" target="_blank" className="mx-1">
        terms
      </a>
      |
      <a href="/faq" target="_blank" className="mx-1">
        FAQ
      </a>
    </div>
  );
};

export default FooterSecondary;
