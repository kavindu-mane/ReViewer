import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { Button, Navbar } from "flowbite-react";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap font-Poppins text-2xl font-medium text-sky-500 dark:text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <a href="/login">
          <Button
            size={"xs"}
            className="hidden rounded-[5px] bg-sky-600 px-3 text-lg md:block"
          >
            Login
          </Button>
        </a>
        <ThemeButton />
        <Navbar.Toggle barIcon={CgMenuRight} className="!ring-0" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Privacy</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
