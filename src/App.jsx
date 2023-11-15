import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const LinkArray = {
  "/": <Home />,
  "/login": <Login />,
};

function App() {
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
