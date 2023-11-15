import React, { lazy } from "react";
const NavBar = lazy(() => import("../components/NavBar"));

const Home = () => {
  return (
    <React.Fragment>
      {/* header */}
      <NavBar />
    </React.Fragment>
  );
};

export default Home;
