import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUser } from "react-icons/hi";
import { MdBook } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import Logout from "../../hooks/Logout";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    icon: HiChartPie,
    text: "Dashboard",
    path: "/admin",
  },
  {
    icon: MdBook,
    text: "Manage Books",
    path: "/admin/books",
  },
  {
    icon: HiUser,
    text: "Manage Users",
    path: "/admin/users",
  },
];

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar className="h-full w-72">
      {/* sidebar items */}
      <Sidebar.Items className="flex h-full flex-col justify-between">
        <Sidebar.ItemGroup>
          {sidebarItems.map((item, key) => {
            return (
              <Sidebar.Item
                key={key}
                onClick={() => navigate(item?.path)}
                className={
                  "cursor-pointer " +
                  (location.pathname.replace(/\/+$/, "") === item?.path
                    ? "child-svg-white !bg-blue-600 !text-white"
                    : "")
                }
                icon={item?.icon}
              >
                {item?.text}
              </Sidebar.Item>
            );
          })}
        </Sidebar.ItemGroup>
        {/* logout button */}
        <Logout>
          <button className="mt-2 flex w-full items-center rounded-md bg-transparent px-3 py-2 hover:bg-gray-600/50">
            <IoLogOutOutline className="me-3 h-5 w-5" />
            <span>Logout</span>
          </button>
        </Logout>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
