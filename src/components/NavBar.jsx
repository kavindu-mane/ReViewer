import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { Button, Navbar } from "flowbite-react";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="font-Poppins self-center whitespace-nowrap text-2xl font-medium text-sky-500 dark:text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <Button size={"xs"} className="hidden bg-sky-600 px-3 text-lg md:block">
          Login
        </Button>
        <ThemeButton />
        <Navbar.Toggle barIcon={CgMenuRight} className="!ring-0" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
