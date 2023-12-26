import React from "react";

const AnimatedLogo = () => {
  return (
    <svg viewBox="0 0 450 100" className="w-[450px] font-bold">
      <text
        x="50%"
        y="50%"
        dy="0.32em"
        textAnchor="middle"
        className="logo-animate stroke-white stroke-[2.2px] font-Poppins text-6xl leading-[-4px] lg:text-7xl xl:text-8xl"
      >
        ReViewer
      </text>
    </svg>
  );
};

export default AnimatedLogo;
