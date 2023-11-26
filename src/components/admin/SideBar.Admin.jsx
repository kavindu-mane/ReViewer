import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUser } from "react-icons/hi";
import { MdBook, MdManageAccounts } from "react-icons/md";

const SideBar = ({ isSideBarOpend }) => {
  return (
    <Sidebar
      className={
        "relative z-10 block w-64 border-r border-gray-300 duration-300 dark:border-gray-700 lg:shadow-2xl lg:drop-shadow-2xl " +
        (!isSideBarOpend
          ? "-translate-x-full lg:translate-x-0"
          : "shadow-2xl drop-shadow-2xl")
      }
    >
      {/* sidebar items */}
      <Sidebar.Items className="pt-14">
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className="child-svg-white !bg-blue-600 !text-white"
            icon={HiChartPie}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={MdManageAccounts} label="Manage">
            <Sidebar.Item icon={MdBook}>Books</Sidebar.Item>
            <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
