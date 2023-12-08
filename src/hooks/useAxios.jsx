import axios from "axios";
import dayjs from "dayjs";
import RefreshToken from "./RefreshToken";
import { jwtDecode } from "jwt-decode";

const useAxios = () => {
  // axios private instance
  const axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosPrivateInstance.interceptors.request.use(
    async (config) => {
      const user = jwtDecode(localStorage.token);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) {
        if (!config?.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${localStorage.token}`;
          config.headers["X-CSRFToken"] = localStorage.csrf;
        }
        return config;
      }
      const { accessTokens: newAccessToken, csrfTokens: newCsrfTokens } =
        await RefreshToken();
      localStorage.setItem("token", newAccessToken);
      localStorage.setItem("csrf", newCsrfTokens);
      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      config.headers["X-CSRFToken"] = newCsrfTokens;
      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosPrivateInstance;
};

export default useAxios;
