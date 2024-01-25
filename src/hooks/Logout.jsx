import { useAuth } from "./AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";
import tostDefault from "../data/tostDefault";
import { useNavigate } from "react-router-dom";

const Logout = ({ children, isNavigate = true }) => {
  const axiosPrivateInstance = useAxios();
  const { setUserValue } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    const id = toast.loading("Please wait...", tostDefault);
    await axiosPrivateInstance
      .post("/logout/")
      .then((response) => {
        if (response.status === 200) {
          setUserValue(null);
          localStorage.removeItem("token");
          localStorage.removeItem("csrf");
          toast.update(id, {
            ...tostDefault,
            render: "Logout successful",
            type: "success",
            isLoading: false,
            closeButton: true,
          });
          if (isNavigate) navigate("/");
        } else {
          toast.update(id, {
            ...tostDefault,
            render: "Something went wrong",
            type: "error",
            isLoading: false,
            closeButton: true,
          });
        }
      })
      .catch((error) => {
        toast.update(id, {
          ...tostDefault,
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          closeButton: true,
        });
      });
  };

  return (
    <div className="flex w-full" onClick={logout}>
      {children}
    </div>
  );
};

export default Logout;
