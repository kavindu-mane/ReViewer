import React, { useState, lazy } from "react";
const NavBar = lazy(() => import("../components/admin/NavBar.Admin"));
const SideBar = lazy(() => import("../components/admin/SideBar.Admin"));

const AdminDashboard = ({ children }) => {
  const [isSideBarOpend, setIsSideBarOpend] = useState(false);

  return (
    <React.Fragment>
      <div className="flex h-screen w-screen flex-col">
        {/* navbar */}
        <div className="">
          <NavBar
            isSideBarOpend={isSideBarOpend}
            setIsSideBarOpend={setIsSideBarOpend}
          />
        </div>
        <div className="relative flex h-full overflow-hidden">
          {/* sidebar */}
          <div
            className={
              "absolute bottom-0 start-0 top-0 z-10 w-72 border-r border-gray-300 bg-white duration-300 dark:border-gray-700 dark:bg-slate-800 lg:relative lg:shadow-2xl lg:drop-shadow-2xl " +
              (!isSideBarOpend
                ? "-ms-72 lg:ms-0"
                : "-ms-0 shadow-2xl drop-shadow-2xl")
            }
          >
            <SideBar />
          </div>
          {/* content area */}
          <div className="w-full grow">
            <div className="no-scrollbar h-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
