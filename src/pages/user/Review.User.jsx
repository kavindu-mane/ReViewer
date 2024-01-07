import React, { lazy } from "react";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Review = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* header */}
        <NavBar />
        {/* Body */}

        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Review;
