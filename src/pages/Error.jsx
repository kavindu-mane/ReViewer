import React, { lazy } from "react";
import errorImg from "../assets/404.svg";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const Error = () => {
  return (
    <React.Fragment>
      <div className="relative flex h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* image */}
        <img
          src={errorImg}
          alt="background"
          className="pointer-events-none h-2/3"
        />
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Error;
