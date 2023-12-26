import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import ThemeSitcher from "./functions/ThemeSwitcher";
import axios from "axios";
import Authentications from "./pages/Authentications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom_styles/animations.css";
import AuthMiddleware from "./middleware/Auth";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import CursorEffect from "./components/CursorEffect";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Error = lazy(() => import("./pages/Error"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Books = lazy(() => import("./pages/user/Books.User"));
const Review = lazy(() => import("./pages/user/Review.User"));
const Profile = lazy(() => import("./pages/user/Profile.User"));
const AdminUsers = lazy(() => import("./components/admin/Users.Manage.Admin"));
const AdminBooks = lazy(() => import("./components/admin/Books.Manage.Admin"));
const Dashboard = lazy(() => import("./components/admin/Dashboard.Admin"));

const LinkArray = {
  "/login": <Login />,
  "/register": <Register />,
  "/books": <Books />,
  "/profile": <Profile />,
  "/*": <Error />,
};

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  ThemeSitcher();

  // lenis setup - start
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  // lenis setup - end

  return (
    <React.Fragment>
      {/* cursor effect */}
      <CursorEffect />
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
            </p>
          }
        >
          <ToastContainer limit={1} />
          <Routes>
            <Route path="/" element={<Authentications />}>
              <Route index exact element={<Home />} />
              {Object.keys(LinkArray).map((key) => {
                return <Route key={key} path={key} element={LinkArray[key]} />;
              })}

              {/* admin dashboard routing */}
              <Route path="/admin" element={<AuthMiddleware />}>
                <Route
                  index
                  exact
                  element={
                    <AdminDashboard>
                      <Dashboard />
                    </AdminDashboard>
                  }
                />
                <Route
                  path="users"
                  element={
                    <AdminDashboard>
                      <AdminUsers />
                    </AdminDashboard>
                  }
                />
                <Route
                  path="books"
                  element={
                    <AdminDashboard>
                      <AdminBooks />
                    </AdminDashboard>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
