import React, { lazy } from "react";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const Contact = () => {
  return (
    <React.Fragment>
      {/* header */}
      <NavBar />
      <section className="flex w-full justify-center py-12">
        <div className="w-full max-w-7xl px-2 md:py-6"></div>
      </section>
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
