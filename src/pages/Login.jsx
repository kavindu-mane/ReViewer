import React, { lazy } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import background from "../assets/animated-bg.svg";
const NavBarSecondary = lazy(() => import("../components/NavBarSecondary"));

const Login = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen">
        <NavBarSecondary />
        {/* background */}
        <img
          src={background}
          alt="background"
          className="absolute top-0 h-screen w-screen object-cover"
        />
        <div className="flex h-screen w-full items-center justify-center px-2">
          <form className="flex w-full max-w-xl flex-col gap-4 rounded-md bg-white px-3 py-10 shadow-xl drop-shadow-lg dark:bg-slate-900 sm:px-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="name@abc.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="password" />
              </div>
              <TextInput
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
