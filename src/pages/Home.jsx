import React, { lazy } from "react";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <React.Fragment>
      {/* header */}
      <NavBar />
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
