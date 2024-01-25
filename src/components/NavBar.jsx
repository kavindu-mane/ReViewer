import React, { lazy, useRef, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import {
  Button,
  Navbar,
  TextInput,
  Dropdown,
  Avatar,
  Sidebar,
} from "flowbite-react";
import { useAuth } from "../hooks/AuthContext";
import Logout from "../hooks/Logout";
const ThemeButton = lazy(() => import("./ThemeButton"));
const Search = lazy(() => import("../components/user/Search.Modal"));

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef();

  // remove side bar when user click the outside of the sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && sidebarOpen) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, sidebarOpen]);

  // nav link object
  const pagesWithPath = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/privacy": "Privacy",
  };

  return (
    <React.Fragment>
      <Navbar fluid className="w-screen bg-slate-700">
        {/* search modal */}
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
            <Navbar.Collapse>
              {Object.keys(pagesWithPath).map((path, key) => {
                return (
                  <Navbar.Link
                    key={key}
                    className="!text-gray-300 hover:!text-white hover:underline"
                    href={path}
                  >
                    {pagesWithPath[path]}
                  </Navbar.Link>
                );
              })}
            </Navbar.Collapse>
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

          {/* search icon for small screens */}
          <IoMdSearch
            className="me-3 block h-9 w-9 cursor-pointer rounded-full p-2 text-white hover:bg-slate-600 lg:hidden"
            onClick={() => setOpenModal(true)}
          />

          {/* if user already logged in he/she can see profile and if not he/she can see log in button */}
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt={user?.name[0]}
                  img={
                    import.meta.env.VITE_BASE_URL?.slice(0, -4) + user?.avatar
                  }
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
              <Dropdown.Item href="/profile">
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
              className="ms-5 rounded-[5px] bg-sky-600 px-3 text-lg duration-200 hover:!bg-sky-500"
            >
              Login
            </Button>
          )}

          {/* theme button */}
          <div className="ms-5 hidden rounded-full hover:bg-slate-600 child:!text-white md:flex">
            <ThemeButton />
          </div>

          {/* toggle button */}
          <RiMenu3Fill
            className="relative ms-5 h-9 w-9 cursor-pointer rounded-full p-2 text-white hover:bg-slate-600 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>
      </Navbar>

      {/* side bar for md- devices */}
      <div
        ref={ref}
        className={
          "fixed end-0 top-0 z-50 flex h-screen min-h-[20rem] w-full max-w-xs flex-col items-end overflow-auto bg-white pt-2 text-sm duration-200 ease-in dark:bg-slate-800 md:hidden " +
          (sidebarOpen
            ? "shadow-xl drop-shadow-xl"
            : "translate-x-full shadow-none drop-shadow-none")
        }
      >
        {/* close button */}
        <div className="mb-2 me-3 h-9 w-9">
          <MdClose
            className="relative h-9 w-9 cursor-pointer rounded-full p-2 text-slate-900 hover:bg-slate-300 dark:text-white dark:hover:bg-slate-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>

        {/* nav links */}
        <div className="flex w-full flex-col space-y-2">
          <Sidebar className="w-full child:bg-white dark:child:bg-slate-800">
            <Sidebar.Items>
              <Sidebar.ItemGroup className="">
                {Object.keys(pagesWithPath).map((key, i) => {
                  return (
                    <Sidebar.Item
                      href={key}
                      key={i}
                      className={
                        "rounded-md p-2 font-medium duration-200 hover:bg-slate-300 dark:hover:bg-slate-600 dark:hover:text-white"
                      }
                    >
                      {pagesWithPath[key]}
                    </Sidebar.Item>
                  );
                })}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
