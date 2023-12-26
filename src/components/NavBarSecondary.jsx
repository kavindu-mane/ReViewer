import React from "react";
import { Navbar } from "flowbite-react";
import ThemeButton from "./ThemeButton";

const NavBarSecondary = () => {
  return (
    <Navbar
      fluid
      rounded
      className="z-10 w-screen bg-transparent dark:bg-transparent"
    >
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap font-Poppins text-2xl font-medium text-sky-500 dark:text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      <div className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
        <ThemeButton />
      </div>
    </Navbar>
  );
};

export default NavBarSecondary;
