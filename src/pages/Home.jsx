import React, { lazy } from "react";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));
const Parallax = lazy(() => import("../components/home/Parallax"));

const Home = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />

        {/* parallax */}
        <section className="relative mb-12 h-screen w-screen overflow-hidden bg-slate-950">
          <Parallax />
        </section>

        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
