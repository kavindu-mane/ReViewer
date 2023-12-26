import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function AuthMiddleware() {
  const { user } = useAuth();
  const location = useLocation();

  return user !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
