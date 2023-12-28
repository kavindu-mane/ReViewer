import React, { lazy, Suspense, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSitcher from "./functions/ThemeSwitcher";
import axios from "axios";
import Authentications from "./pages/Authentications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom_styles/animations.css";
import AuthMiddleware from "./middleware/Auth";
import CursorEffect from "./components/CursorEffect";
import LoadingAnimation from "./components/LoadingAnimation";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Error = lazy(() => import("./pages/Error"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
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
  "/privacy": <Privacy />,
  "/contact": <Contact />,
  "/about": <About />,
  "/*": <Error />,
};

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  ThemeSitcher();

  return (
    <React.Fragment>
      {/* cursor effect */}
      <CursorEffect />
      <Router>
        <Suspense fallback={<LoadingAnimation />}>
          <ToastContainer limit={1} />
          <Routes>
            <Route path="/" element={<Authentications />}>
              <Route index exact element={<Home />} />
              {Object.keys(LinkArray).map((key) => {
                return <Route key={key} path={key} element={LinkArray[key]} />;
              })}

              {/* admin dashboard routing */}
              <Route path="/admin" element={<AuthMiddleware isAdmin={true} />}>
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
