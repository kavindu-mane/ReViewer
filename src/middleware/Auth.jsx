import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import LoadingAnimation from "../components/LoadingAnimation";

export default function AuthMiddleware({ isAdmin = false }) {
  const { user } = useAuth();
  const location = useLocation();
  const axiosPrivateInstance = useAxios();
  const navigate = useNavigate();
  const [isVerifiedAdmin, setIsVerifiedAdmin] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      axiosPrivateInstance
        .get("/whoiam/")
        .then((response) => {
          if (response.status === 200) {
            if (!response.data?.details) {
              navigate("/");
            } else {
              setIsVerifiedAdmin(true);
            }
          }
        })
        .catch((error) => {
          navigate("/");
        });
    }
    return;
  }, [isAdmin]);

  // weiting for current user is admin or not.
  if (isAdmin && !isVerifiedAdmin) return <LoadingAnimation />;

  return user !== null && (!isAdmin || isVerifiedAdmin) ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
