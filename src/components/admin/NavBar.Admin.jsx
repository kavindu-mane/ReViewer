import React, { lazy } from "react";
import { Navbar, Avatar, Dropdown } from "flowbite-react";
import { CgMenuLeft } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
const ThemeButton = lazy(() => import("../ThemeButton"));

const NavBar = ({ isSideBarOpend, setIsSideBarOpend }) => {
  return (
    <Navbar fluid className="z-10 w-screen border-b">
      {/* left side */}
      <div className="flex items-center">
        <Navbar.Toggle
          barIcon={CgMenuLeft}
          className="me-3 !flex rounded-full p-1 !ring-0 lg:!hidden"
          onClick={() => setIsSideBarOpend(!isSideBarOpend)}
        />
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap font-Poppins text-2xl font-medium text-sky-500 dark:text-sky-400">
            ReViewer
          </span>
        </Navbar.Brand>
      </div>
      {/* right side */}
      <div className="flex items-center">
        <ThemeButton />
        <Dropdown
          arrowIcon={false}
          inline
          className="w-28"
          label={<Avatar alt="Admin" size={"sm"} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Admin</span>
          </Dropdown.Header>
          <Dropdown.Item className="gap-x-2">
            <MdLogout />
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default NavBar;
