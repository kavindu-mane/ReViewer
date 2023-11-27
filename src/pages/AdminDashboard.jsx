import React, { useState, lazy } from "react";
const NavBar = lazy(() => import("../components/admin/NavBar.Admin"));
const SideBar = lazy(() => import("../components/admin/SideBar.Admin"));
const Books = lazy(() => import("../components/admin/Books.Manage.Admin"));
const AdminDashboard = () => {
  const [isSideBarOpend, setIsSideBarOpend] = useState(false);
  return (
    <React.Fragment>
      <div className="absolute start-0 top-0 z-0 flex h-screen min-h-[40rem] w-screen items-start">
        {/* navbar */}
        <NavBar
          isSideBarOpend={isSideBarOpend}
          setIsSideBarOpend={setIsSideBarOpend}
        />
        <div className="absolute start-0 top-0 z-0 flex h-screen min-h-[40rem] w-screen">
          {/* sidebar */}
          <SideBar isSideBarOpend={isSideBarOpend} />
          {/* content */}
          <div className="absolute px-2 py-16 duration-300 lg:start-64">
            <Books/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
