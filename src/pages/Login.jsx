import React, { lazy } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import background from "../assets/wave-line.svg";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Login = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen">
        <div className="text-white">
          <NavBarSecondary />
        </div>
        {/* background */}
        <img
          src={background}
          alt="background"
          className="pointer-events-none absolute top-0 -z-50 h-screen w-screen object-cover"
        />
        <div className="flex h-screen w-full items-center justify-center px-2">
          {/*login card */}
          <div className="mx-auto flex w-full flex-col items-center justify-center px-6 py-8 font-Poppins md:h-screen lg:py-0">
            <div className="w-full rounded-lg bg-white shadow dark:border dark:border-slate-800 dark:bg-slate-900 sm:max-w-md md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-md font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-lg">
                  Sign in to{" "}
                  <span className="text-xl text-cyan-600 dark:text-cyan-500 md:text-2xl">
                    ReViewer
                  </span>
                </h1>
                {/* form */}
                <form className="space-y-4 md:space-y-6" action="#">
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
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>

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
          </div>
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Login;
