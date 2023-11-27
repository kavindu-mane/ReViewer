import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import ThemeSitcher from "./functions/ThemeSwitcher";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Error = lazy(() => import("./pages/Error"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Books = lazy(() => import("./pages/user/Books.User"));
const Review = lazy(() => import("./pages/user/Review.User"));
const Profile = lazy(() => import("./pages/user/Profile.User"));

const LinkArray = {
  "/": <Home />,
  "/login": <Login />,
  "/register": <Register />,
  "/admin": <AdminDashboard />,
  "/books": <Books />,
  "/profile": <Profile />,
  "/*": <Error />,
};

function App() {
  ThemeSitcher();

  return (
    <React.Fragment>
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
            </p>
          }
        >
          <Routes>
            {Object.keys(LinkArray).map((key) => {
              return <Route key={key} path={key} element={LinkArray[key]} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
