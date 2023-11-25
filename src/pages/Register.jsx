import React, { lazy, useState } from "react";
import { Button, Checkbox, Label, TextInput, Datepicker } from "flowbite-react";
import background from "../assets/wave-line.svg";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
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
        {/*register card */}
        <div className="my-10 w-[96%] rounded-lg border border-gray-200 bg-white shadow-xl drop-shadow-xl dark:border-slate-800 dark:bg-slate-800 sm:w-full sm:max-w-md lg:max-w-2xl">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create account
            </h1>
            <form className="">
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full space-y-4">
                  {/* name */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput
                      id="name"
                      type="email"
                      name="name"
                      placeholder="John Perera"
                      required
                      className="inputs"
                      helperText={<span className="text-red-500"></span>}
                    />
                  </div>
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
                  {/* birthday */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="birthday" value="Birthday" />
                    </div>
                    <Datepicker
                      id="birthday"
                      name="birthday"
                      className="inputs"
                      showClearButton={false}
                      showTodayButton={false}
                      maxDate={
                        new Date(
                          new Date().getFullYear(),
                          new Date().getMonth(),
                          new Date().getDate(),
                        )
                      }
                    />
                  </div>
                </div>
                <div className="w-full space-y-4">
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
                  {/* conf password */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="conf-password" value="Confirm Password" />
                    </div>
                    <TextInput
                      id="conf-password"
                      name="conf-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="inputs"
                      helperText={<span className="text-red-500"></span>}
                    />
                  </div>
                  {/* terms */}
                  <div className="flex items-start">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="terms"
                        onChange={(e) =>
                          e.target.checked
                            ? setAcceptTerms(true)
                            : setAcceptTerms(false)
                        }
                        className="inputs !ring-0"
                        name="terms"
                      />
                      <Label htmlFor="terms">
                        I accept the
                        <a
                          className="ms-1 font-medium text-sky-600 hover:underline dark:text-sky-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </Label>
                    </div>
                  </div>
                  {/* submit */}
                  <Button
                    type="submit"
                    className="w-full disabled:cursor-not-allowed disabled:bg-gray-500 disabled:dark:bg-gray-500"
                    disabled={!acceptTerms}
                  >
                    Create an account
                  </Button>
                  {/* redirected to login */}
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-medium text-sky-600 hover:underline dark:text-sky-500"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Register;
