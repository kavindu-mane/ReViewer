import React, { lazy } from "react";
import "../custom_styles/animations.css";
import AnimatedLogo from "../components/home/AnimatedLogo";
const NavBar = lazy(() => import("../components/NavBar"));
const CursorEffect = lazy(() => import("../components/CursorEffect"));
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
          <div className="absolute inset-0 flex items-center bg-gradient-to-t from-slate-950/50 via-slate-950 to-slate-950/50 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/80 lg:to-transparent">
            <div className="flex h-1/2 w-full flex-col items-center justify-center p-3 lg:h-full lg:w-1/2">
              <AnimatedLogo />
              <h3 className="mt-5 flex flex-col space-y-5 text-center font-Poppins text-2xl capitalize italic text-amber-300 child:py-1 sm:flex-row sm:space-y-0">
                <span>Worlds number 1</span>
                <span className="after:content[''] book-review-animate relative z-0 mx-2 px-2 text-center text-white duration-200 after:absolute after:inset-0 after:-z-[2] after:-skew-y-[5deg] after:bg-emerald-600">
                  book review
                </span>
                <span>website.</span>
              </h3>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
