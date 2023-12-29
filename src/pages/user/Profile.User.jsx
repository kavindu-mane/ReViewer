import React, { lazy } from "react";
import Account from "../../components/user/Account";


const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));






const Profile = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
      
      {/*account*/}
      <Account/>
     
   
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;