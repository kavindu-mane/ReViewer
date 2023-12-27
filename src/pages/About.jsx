import React, { lazy } from "react";
import aboutData from "../data/aboutData";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const About = () => {
  return (
    <React.Fragment>
      {/* header */}
      <NavBar />
      {/* main section */}
      <section className="flex w-full justify-center py-12">
        <div className="w-full max-w-7xl px-2 md:py-6">
          <h1 className="mb-10 font-Poppins text-2xl font-medium lg:text-4xl">
            About us
          </h1>
          <p className="text-justify indent-8 font-Poppins">
            Welcome to ReViewer.com, your go-to destination for literary
            exploration and insightful book reviews. At ReViewer.com, we believe
            in the transformative power of words and the magic that unfolds
            within the pages of a book. Our passion for literature is the
            driving force behind this platform, where we invite you to embark on
            a journey through the vast and enchanting world of books.
          </p>

          <div className="my-10 w-full">
            {aboutData.map((data, key) => {
              return (
                <div className="" key={key}>
                  <h3 className="mb-2 font-Poppins text-xl font-bold">
                    {data.title}
                  </h3>
                  <p className="mb-8 indent-8">{data?.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
};

export default About;
