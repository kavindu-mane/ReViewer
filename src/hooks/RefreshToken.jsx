import axios from "axios";

const RefreshToken = async () => {
  let access = {};
  await axios
    .post("/login/refresh/")
    .then((response) => {
      if (response.status === 200) {
        localStorage.token = response?.data?.access;
        localStorage.csrf = response?.data?.csrf;
        access = {
          accessTokens: response?.data?.access,
          csrfTokens: response?.data?.csrf,
        };
      }
    })
    .catch((error) => {
      localStorage.removeItem("token");
    });

  return access;
};

export default RefreshToken;
