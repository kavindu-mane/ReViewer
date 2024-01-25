import React, { lazy, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
  Avatar,
} from "flowbite-react";
import background from "../assets/wave-line.svg";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useAuth } from "../hooks/AuthContext";
import tostDefault from "../data/tostDefault";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logout from "../hooks/Logout";
import axios from "axios";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // register user
  const registerUser = async (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    const formData = new FormData(e.target);
    await axios
      .post("/register", formData)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          if (response.data?.details === "success") {
            toast.success("Registration successful", tostDefault);
            navigate("/login", { replace: true });
          } else {
            setError(response.data);
          }
        }
      })
      .catch((error) => {
        toast.success("Something went wrong", tostDefault);
      })
      .finally(() => setLoading(false));
  };

  return (
    <React.Fragment>
      <div className="relative flex h-full min-h-screen flex-col items-center justify-between">
        <NavBarSecondary />
        {/* background */}
        <img
          src={background}
          alt="background"
          className="pointer-events-none absolute top-0 -z-50 h-screen w-screen object-cover"
        />
        {/*register card */}
        <div className="relative z-20 my-10 w-[96%] rounded-lg border border-gray-200 bg-white shadow-xl drop-shadow-xl dark:border-slate-800 dark:bg-slate-800 sm:w-full sm:max-w-md lg:max-w-2xl">
          {/* register window */}
          {!user && (
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Create account
              </h1>
              {/* form */}
              <form className="" onSubmit={(e) => registerUser(e)}>
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  {/* left side */}
                  <div className="w-full space-y-4">
                    {/* name */}
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" />
                      </div>
                      <TextInput
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Perera"
                        required
                        className="inputs"
                        helperText={
                          <span className="text-red-500">{error?.name}</span>
                        }
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
                        helperText={
                          <span className="text-red-500">{error?.email}</span>
                        }
                      />
                    </div>
                    {/* birthday */}
                    <div className="relative">
                      <div className="mb-2 block">
                        <Label htmlFor="birth_date" value="Birthday" />
                      </div>
                      <Datepicker
                        id="birth_date"
                        name="birth_date"
                        className="inputs relative"
                        size={"xs"}
                        showClearButton={false}
                        showTodayButton={false}
                        maxDate={
                          new Date(
                            new Date().getFullYear(),
                            new Date().getMonth(),
                            new Date().getDate(),
                          )
                        }
                        helperText={
                          <span className="text-red-500">
                            {error?.birth_date}
                          </span>
                        }
                      />
                    </div>
                  </div>
                  {/* right side */}
                  <div className="mt-4 w-full space-y-4 lg:mt-0">
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
                        helperText={
                          <span className="text-red-500">
                            {error?.password}
                          </span>
                        }
                      />
                    </div>
                    {/* conf password */}
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="confpassword"
                          value="Confirm Password"
                        />
                      </div>
                      <TextInput
                        id="confpassword"
                        name="confpassword"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="inputs"
                        helperText={
                          <span className="text-red-500">
                            {error?.confpassword}
                          </span>
                        }
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
                      disabled={!acceptTerms || loading}
                    >
                      {loading && (
                        <CgSpinnerTwoAlt className="me-3 h-5 w-5 animate-spin text-white" />
                      )}
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
          )}
          {/* logout window */}
          {user && (
            <div className="flex flex-col items-center p-3">
              {/* current user */}
              <Avatar
                alt={user?.name[0]}
                img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                rounded
                size={"lg"}
                className="m-auto mb-2 mt-4"
              />
              <p className="flex">
                You are currently login as
                <span className="ps-2 font-medium text-sky-600 dark:text-sky-400">
                  {user?.name}
                </span>
              </p>
              {/* buttons */}
              <div className="flex w-full space-x-2">
                <Logout isNavigate={false}>
                  <Button type="submit" className="mt-5 w-full">
                    Logout
                  </Button>
                </Logout>
                <Button
                  type="submit"
                  className="mt-5 w-full border-2 border-sky-700 bg-transparent text-slate-900 duration-200 hover:!border-transparent hover:bg-sky-700 hover:text-white dark:border-sky-400 dark:bg-transparent dark:text-white dark:hover:bg-sky-600"
                  href="/"
                >
                  Continue as {user?.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          )}
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Register;
