import React, { lazy, useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import background from "../assets/wave-line.svg";
import { useAuth } from "../hooks/AuthContext";
import axios from "axios";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Login = () => {
  const { setAccessToken} = useAuth();
  // login user
  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("/login", formData)
      .then((response) => {
        setAccessToken(response?.data?.access);
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };

  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        <NavBarSecondary />
        {/* background */}
        <img
          src={background}
          alt="background"
          className="pointer-events-none absolute top-0 -z-50 h-screen w-screen object-cover"
        />
        {/*login card */}
        <div className="my-10 w-[96%] rounded-lg border border-gray-200 bg-white shadow-xl drop-shadow-xl dark:border-slate-800 dark:bg-slate-800 sm:w-full sm:max-w-md lg:max-w-lg">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-md font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-lg">
              Sign in to{" "}
              <span className="text-xl text-cyan-600 dark:text-cyan-500 md:text-2xl">
                ReViewer
              </span>
            </h1>
            {/* form */}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => loginUser(e)}
            >
              {/* email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@abc.com"
                  required
                  className="inputs"
                  helperText={<span className="text-red-500"></span>}
                />
              </div>
              {/* password */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="inputs"
                  helperText={<span className="text-red-500"></span>}
                />
              </div>
              {/* remember me */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" className="inputs !ring-0" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                </div>
              </div>
              {/* submit */}
              <Button type="submit" className="w-full">
                Login
              </Button>
              {/* redirected to register */}
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Don't have an account yet?
                <a
                  href="/register"
                  className="ms-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Login;
