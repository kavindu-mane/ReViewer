import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { Button, Navbar } from "flowbite-react";
import ThemeButton from "./ThemeButton";

const NavBarSecondary = () => {
  return (
    <Navbar
      fluid
      rounded
      className="absolute start-0 top-0 z-50 w-full bg-transparent dark:bg-transparent"
    >
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="font-Poppins self-center whitespace-nowrap text-2xl font-medium text-sky-500 dark:text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      <ThemeButton />
    </Navbar>
  );
};

export default NavBarSecondary;
