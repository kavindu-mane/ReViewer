import React, { lazy } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Button, Navbar } from "flowbite-react";
const ThemeButton = lazy(() => import("./ThemeButton"));

const NavBar = () => {
  const pagesWithPath = {
    "/about": "About",
    "/contact": "Contact",
    "/privacy": "Privacy",
    "/books": "Books",
  };
  return (
    <Navbar fluid className="w-screen bg-slate-700">
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
        <div className="!text-white">
          <ThemeButton />
        </div>
        <Navbar.Toggle barIcon={CgMenuRight} className="!ring-0" />
      </div>
      <Navbar.Collapse>
        {Object.keys(pagesWithPath).map((path, key) => {
          return (
            <Navbar.Link key={key} className="!text-gray-300" href={path}>
              {pagesWithPath[path]}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
