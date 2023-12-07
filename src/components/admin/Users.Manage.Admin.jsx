import React from "react";
import UserTable from "./manage/users/UserTable";

const Users = () => {
  return (
    <React.Fragment>
      <div className="p-2">
        <UserTable />
      </div>
    </React.Fragment>
  );
};

export default Users;
