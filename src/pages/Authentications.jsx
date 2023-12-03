import React, { useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxios";
import { useAuth } from "../hooks/AuthContext";
import useRefreshToken from "../hooks/useRefreshToken";
import axios from "axios";

const Authentications = ({ children }) => {
  const { setUser, accessToken, setAccessToken } = useAuth();
  const axiosPrivateInstance = useAxiosPrivate();
  const refresh = useRefreshToken();

  useEffect(() => {
    const getUser = async () => {
      try {
        await refresh().then(async () => {
          const { data } = await axiosPrivateInstance.get("/user");
          setUser(data);
        });
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    !accessToken ? getUser() : setLoading(false);
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentications;
