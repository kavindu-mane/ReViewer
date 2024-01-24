import { TextInput, Label, Button, Rating, Datepicker } from "flowbite-react";
import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/AuthContext";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birth_date: "",
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const axiosPrivateInstance = useAxios();
  const { user } = useAuth()

  // Fetch user profile details when the component mounts
  useEffect(() => {
    setUserData(user)
  }, []);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  




  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* content start */}
        <div className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
          <div className="mb-10 flex w-full flex-col md:flex-row md:space-x-10 lg:space-x-20 xl:max-w-7xl xl:space-x-32">
            {/* left side */}
            <div className="w-full">
              <div className="flex-1 rounded-lg ">
                {/*avatar start*/}
                <div className="items-left flex flex-col ">
                  <img
                    src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                    className="w-40 rounded-full border-4 border-white"
                  />
                  <div className="mt-5 flex items-center space-x-2">
                    <p className="font-Poppins text-2xl font-medium italic">
                      {userData.name}
                    </p>
                  </div>
                </div>
                {/*avatar end*/}

                {/* form area start*/}
                <div className="mx-auto mt-5 w-full max-w-[750px]">
                  {/* basic details form */}
                  <form onSubmit={handleProfileUpdate}>
                    {/*Name  : start  */}
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="name" value="name" />
                      </div>
                      <TextInput
                        id="name"
                        className="inputs"
                        type="text"
                        placeholder="Tharushi Vithanage"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                        name="name"
                        helperText={
                          <span className="text-red-500">{error?.name}</span>
                        }
                      />
                    </div>
                    {/* Name : end */}
                    {/*email start */}
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="email" value="email" />
                      </div>
                      <TextInput
                        id="email"
                        className="inputs"
                        type="email"
                        placeholder="name@gmail.com"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                        name="email"
                        helperText={
                          <span className="text-red-500">{error?.email1}</span>
                        }
                      />
                    </div>
                    {/*email end */}
                    {/*birthday start */}
                    <div className="relative">
                      <div className="mb-1 block">
                        <Label htmlFor="birth_date" value="Birthday" />
                      </div>
                      <Datepicker
                        id="birth_date"
                        name="birth_date"
                        value={userData.birth_date}
                        onChange={handleInputChange}
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
                    {/*birthday end */}
                    {/*button start */}
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button size={"sm"} className="w-32 rounded-[5px]" type="submit" >
                        Save
                      </Button>
                    </div>
                    {/*button end */}
                  </form>

                  {/* password reset form */}
                  <form onSubmit={(event) => {
                    event.preventDefault();
                    handleProfileUpdate(event);
                  }}>
                    {/*Current Password:start*/}
                    <div>
                      <div className="mb-1 mt-5 block">
                        <Label
                          htmlFor="current_password"
                          value="Current Password"
                        />
                      </div>
                      <TextInput
                        id="current_password"
                        type="password"
                        placeholder="********"
                        required
                        name="current_password"
                        className="inputs"
                        helperText={
                          <span className="text-red-500">
                            {error?.current_password}
                          </span>
                        }
                      />
                    </div>
                    {/*Current Password:end*/}
                    {/*New Password:start*/}
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="new_password" value="new_Password" />
                      </div>
                      <TextInput
                        id="new_password"
                        type="password"
                        placeholder="********"
                        required
                        name="new_password"
                        className="inputs"
                        onChange={handleInputChange}
                        value={userData.new_password}
                        helperText={
                          <span className="text-red-500">
                            {error?.new_password}
                          </span>
                        }
                      />
                    </div>
                    {/*New Password:end*/}
                    {/*Conform Password:start*/}
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="confirm_password"
                          value="confirm_password"
                        />
                      </div>
                      <TextInput
                        id="confirm_password"
                        type="password"
                        placeholder="********"
                        required
                        name="confirm_password"
                        className="inputs"
                        onChange={handleInputChange}
                        value={userData.confirm_password}
                        helperText={
                          <span className="text-red-500">
                            {error?.confirm_password}
                          </span>
                        }
                      />
                    </div>
                    {/*Conform Password:end*/}
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button size={"sm"} className="w-44 rounded-[5px]" type="submit">
                        Change Password
                      </Button>
                    </div>
                  </form>
                </div>
                {/* form area end */}
              </div>
            </div>

            {/* right side */}
            <div className="w-full">
              {/* want to read */}
              <div className="">
                {/* Want to read topic */}
                <h1 className="mb-5 text-left font-Poppins text-2xl font-medium">
                  Want to Read
                </h1>
                {/*card start*/}
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-5 flex space-x-5 border-b border-gray-400/70 pb-5 dark:border-gray-600"
                    >
                      {/* left side */}
                      <img
                        src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                        alt="book"
                        className="h-20 w-20 rounded-md object-cover"
                      />
                      {/* right side */}
                      <div className="">
                        <h5 className="font-Poppins text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                          Noteworthy Technology
                        </h5>
                        <p className="flex text-sm text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology .
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-end">
                  <Button
                    href="/"
                    className="bg-transparent text-sky-500 duration-200 hover:text-sky-700 dark:bg-transparent"
                  >
                    View More
                  </Button>
                </div>
                {/*card end*/}
              </div>

              {/* review */}
              <div className="mt-10">
                {/* review start */}
                <h1 className="mb-5 text-left font-Poppins text-2xl font-medium">
                  My Review
                </h1>
                {/* review -start*/}
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <div className="mb-5 border-b border-gray-400/70 pb-5 dark:border-gray-600" key={index}>
                      <p className="mb-1 text-lg">Noteworthy Technology</p>
                      <Rating size="sm" className="mb-5">
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                      </Rating>

                      <p className="text-sm italic text-gray-600 dark:text-gray-300">
                        "Flowbite is just awesome. It contains tons of
                        predesigned components and pages starting from login
                        screen to complex dashboard. Perfect choice for your
                        next SaaS application."
                      </p>
                    </div>
                  );
                })}
                {/* review -end*/}
                {/* review pagination */}
                <div className="flex justify-end">
                  <Button
                    href="/"
                    className="bg-transparent text-sky-500 duration-200 hover:text-sky-700 dark:bg-transparent"
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content end */}
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;


