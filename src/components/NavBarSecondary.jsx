import React from "react";
import { Navbar } from "flowbite-react";
import ThemeButton from "./ThemeButton";

const NavBarSecondary = () => {
  return (
    <Navbar
      fluid
      rounded
      className="w-screen bg-transparent dark:bg-transparent"
    >
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap font-Poppins text-2xl font-medium text-sky-500 dark:text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      <ThemeButton />
    </Navbar>
  );
};

export default NavBarSecondary;
