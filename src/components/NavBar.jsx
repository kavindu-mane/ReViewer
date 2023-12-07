import React, { lazy, useState } from "react";
import { CgMenuRight, CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { useAuth } from "../hooks/AuthContext";
import Logout from "../hooks/Logout";
const ThemeButton = lazy(() => import("./ThemeButton"));
const Search = lazy(() => import("../components/user/Search.Modal"));

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();

  // nav link object
  const pagesWithPath = {
    "/about": "About",
    "/contact": "Contact",
    "/privacy": "Privacy",
    "/books": "Books",
  };

  // nav element component
  const nevElements = (className = "") => {
    return (
      <Navbar.Collapse className={className}>
        {Object.keys(pagesWithPath).map((path, key) => {
          return (
            <Navbar.Link key={key} className="!text-gray-300" href={path}>
              {pagesWithPath[path]}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    );
  };

  return (
    <Navbar fluid className="w-screen bg-slate-700">
      {openModal && (
        <Search openModal={openModal} setOpenModal={setOpenModal} />
      )}
      {/* logo */}
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap font-Poppins text-2xl font-medium text-sky-400">
          ReViewer
        </span>
      </Navbar.Brand>
      {/* right container */}
      <div className="flex items-center md:order-2">
        {/* nav element for md+ devices */}
        <div className="hidden items-center md:me-8 md:flex">
          {nevElements()}
        </div>
        {/* search */}
        <TextInput
          type="text"
          sizing={"sm"}
          placeholder="Type something..."
          className="inputs hidden w-80 md:me-5 lg:flex"
          onClick={() => setOpenModal(true)}
          required
        />

        {/* if user already logged in he/she can see profile and if not he/she can see log in button */}
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt={user?.name[0]}
                img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                rounded
                size={"sm"}
                className="m-auto text-xl font-bold"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.name}</span>
              <span className="block w-40 truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <CgProfile className="me-2 h-5 w-5" /> Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Logout>
                <IoLogOutOutline className="me-2 h-5 w-5" />
                Logout
              </Logout>
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Button
            size={"xs"}
            href="/login"
            className="rounded-[5px] bg-sky-600 px-3 text-lg"
          >
            Login
          </Button>
        )}

        {/* search icon for small screens */}
        <IoMdSearch
          className="ms-5 block h-5 w-5 cursor-pointer text-white lg:hidden"
          onClick={() => setOpenModal(true)}
        />
        {/* theme button */}
        <div className="!text-white">
          <ThemeButton />
        </div>
        {/* toggle button */}
        <Navbar.Toggle barIcon={CgMenuRight} className="p-1 !ring-0" />
      </div>
      {/* nav element */}
      {nevElements("md:hidden")}
    </Navbar>
  );
};

export default NavBar;
