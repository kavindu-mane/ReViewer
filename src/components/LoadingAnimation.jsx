import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="z-[999] flex h-screen items-center justify-center">
      <svg viewBox="0 0 450 100" className="w-[450px] font-bold">
        <text
          x="50%"
          y="50%"
          dy="0.32em"
          textAnchor="middle"
          className="loading-animation stroke-[2.2px] font-Poppins text-6xl leading-[-4px] lg:text-7xl"
        >
          ReViewer
        </text>
      </svg>
    </div>
  );
};

export default LoadingAnimation;
