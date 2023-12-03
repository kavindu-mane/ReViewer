import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

export default function useAxiosPrivate() {
  const { accessToken, setAccessToken, user } = useAuth();

  // token refresh function
  const refresh = async () => {
    let access = {};
    await axios
      .post("login/refresh")
      .then((response) => {
        if (response.status === 200) {
          setAccessToken(response?.data?.access);

          access = {
            accessTokens: response?.data?.access,
          };
        }
      })
      .catch((error) => {});

    return access;
  };

  // axios private instance
  const axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const requestIntercept = axiosPrivateInstance.interceptors.request.use(
      (config) => {
        if (!config?.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivateInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest?.sent
        ) {
          prevRequest.sent = true;
          const { accessTokens: newAccessToken } = await refresh();
          setAccessToken(newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivateInstance(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestIntercept);
      axiosPrivateInstance.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, user]);

  return axiosPrivateInstance;
}
