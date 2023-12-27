import React, { lazy, useEffect } from "react";
import "../custom_styles/animations.css";
import AnimatedLogo from "../components/home/AnimatedLogo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import categotiesData from "../data/categoriesData";
import AnimatedTextSections from "../components/home/AnimatedTextSections";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));
const Parallax = lazy(() => import("../components/home/Parallax"));
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // animate sections with gsap
  useEffect(() => {
    const entries = document.querySelectorAll(".entries");
    entries.forEach((entry) => {
      const leftEntry = entry.querySelector(".left_entries");
      const rightEntry = entry.querySelector(".right_entries");

      const moves = (xStart, element) => {
        if (element !== null) {
          gsap.set(element, {
            xPercent: xStart,
            opacity: 0,
          });

          gsap.to(element, {
            scrollTrigger: {
              trigger: entry,
              start: "top bottom",
              end: "bottom 90%",
              scrub: true,
            },
            xPercent: 0,
            opacity: 1,
          });
        }
      };

      moves(-100, leftEntry);
      moves(100, rightEntry);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />

        {/* parallax */}
        <section className="relative mb-16 h-screen w-screen overflow-hidden bg-slate-950">
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

        {/* categoties */}
        <section className="relative mb-16 h-fit w-full p-3 py-24 after:absolute after:inset-0 after:-z-10 after:-skew-y-6 after:bg-gradient-to-tr after:from-sky-700 after:to-fuchsia-600 lg:px-6">
          <div className="entries">
            <div className="left_entries">
              <AnimatedTextSections
                data={categotiesData}
                title={"Top Categories"}
                position={"end"}
              />
            </div>
          </div>
        </section>

        <section className="relative mb-16 h-fit w-full p-3 py-24 after:absolute after:inset-0 after:-z-10 after:skew-y-6 after:bg-gradient-to-tr after:from-sky-700 after:to-fuchsia-600 lg:px-6">
          <div className="entries">
            <div className="right_entries flex w-full flex-col items-end">
              <AnimatedTextSections
                data={categotiesData}
                title={"Top Categories"}
                position={"start"}
              />
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
