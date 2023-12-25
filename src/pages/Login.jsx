import React, { lazy, useState } from "react";
import { Button, Checkbox, Label, TextInput, Avatar } from "flowbite-react";
import background from "../assets/wave-line.svg";
import axios from "axios";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useAuth } from "../hooks/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import tostDefault from "../data/tostDefault";
import Logout from "../hooks/Logout";
import useAxios from "../hooks/useAxios";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));

const Login = () => {
  const { user, setUserValue } = useAuth();
  const [error, setError] = useState(null);
  const axiosPrivateInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // login user
  const loginUser = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(e.target);
    const id = toast.loading("Please wait...", tostDefault);
    await axios
      .post("/login", formData)
      .then((response) => {
        if (response.data?.details === undefined) {
          toast.update(id, {
            ...tostDefault,
            render: "Login successful",
            type: "success",
            isLoading: false,
            closeButton: true,
          });
          localStorage.setItem("token", response?.data?.access);
          localStorage.setItem("csrf", response?.data?.csrf);
          if (response?.data?.status) {
            const { data } = axiosPrivateInstance.get("/user");
            setUserValue(data);
            navigate("/admin", { replace: true });
          } else navigate("/", { replace: true });
          setLoading(false);
        } else {
          toast.dismiss(id);
          setError(response.data?.details);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.update(id, {
          ...tostDefault,
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          closeButton: true,
        });
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
          {/* login window */}
          {!user && (
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
                    helperText={<span className="text-red-500">{error}</span>}
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
                    helperText={<span className="text-red-500">{error}</span>}
                  />
                </div>
                {/* remember me */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="remember"
                        name="remember"
                        defaultChecked={false}
                        className="inputs !ring-0"
                      />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                  </div>
                </div>
                {/* submit */}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && (
                    <CgSpinnerTwoAlt className="me-3 h-5 w-5 animate-spin text-white" />
                  )}
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

export default Login;
