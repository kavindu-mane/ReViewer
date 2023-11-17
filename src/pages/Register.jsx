import React, { lazy } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import background from "../assets/wave-line.svg";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Register = () => {
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
          {/*register card */}
          <div className="mx-auto flex w-full flex-col items-center justify-center px-6 py-8 font-Poppins md:h-screen lg:py-0">
            <div className="w-full rounded-lg bg-white shadow dark:border dark:border-slate-800 dark:bg-slate-900 sm:max-w-md md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Create account
                </h1>
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
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="conf-password" value="Confirm Password" />
                    </div>
                    <TextInput
                      id="conf-password"
                      name="conf-password"
                      type="password"
                      required
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">
                        I accept the
                        <a
                          class="ms-1 font-medium text-sky-600 hover:underline dark:text-sky-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </Label>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Create an account
                  </Button>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-medium text-sky-600 hover:underline dark:text-sky-500"
                    >
                      Login here
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

export default Register;
