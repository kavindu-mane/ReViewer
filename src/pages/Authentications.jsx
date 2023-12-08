import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/AuthContext";
import { Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Authentications = () => {
  const { setUserValue } = useAuth();
  const axiosPrivateInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const localtion = useLocation();

  useEffect(() => {
    let isMounted = true;

    async function verifyUser() {
      try {
        if ("token" in localStorage) {
          const { data } = await axiosPrivateInstance.get("/user");
          setUserValue(data);
        }
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        isMounted && setLoading(false);
      }
    }

    "token" in localStorage ? verifyUser() : setLoading(false);

    return () => {
      isMounted = false;
    };
  }, [localtion.pathname]);

  return loading ? <LoadingSpinner /> : <Outlet />;
};

export default Authentications;
