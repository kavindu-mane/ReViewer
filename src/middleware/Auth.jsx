import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function AuthMiddleware() {
  const { accessToken } = useAuth()
  const location = useLocation();

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
