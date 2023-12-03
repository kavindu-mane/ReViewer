import { useEffect } from "react";
import axios from "axios";
import RefreshToken from "./RefreshToken";

export default function useAxiosPrivate() {

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
          config.headers["Authorization"] = `Bearer ${localStorage.token}`;
          config.headers["X-CSRFToken"] = localStorage.csrf;
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
          const { accessTokens: newAccessToken, csrfTokens: newCsrfTokens } =
            await RefreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          config.headers["X-CSRFToken"] = newCsrfTokens;
          return axiosPrivateInstance(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestIntercept);
      axiosPrivateInstance.interceptors.response.eject(responseIntercept);
    };
  }, [localStorage.token]);

  return axiosPrivateInstance;
}
