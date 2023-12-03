import axios from "axios";
import { useAuth } from "./AuthContext";

export default function useRefreshToken() {
  const { setAccessToken } = useAuth();

  // token refresh function
  const refresh = async () => {
    const response = await axios.post("login/refresh");
    setAccessToken(response.data.access);

    return {
      accessToken: response.data.access,
    };
  };

  return refresh;
}
