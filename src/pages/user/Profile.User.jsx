import { TextInput, Label, Button, Rating, Datepicker } from "flowbite-react";
import React, { lazy, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import LoadingAnimation from "../../components/LoadingAnimation";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birth_date: "",
  });

  const [error, setError] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const axiosPrivateInstance = useAxios();

  // user data load
  useEffect(() => {
    axiosPrivateInstance
      .get("/account/")
      .then((response) => {
        if (response?.status === 200) {
          if (response?.data !== null) {
            setUser(response?.data);
            console.log(response?.data);
          } else {
            // navigate("/login");
            
            /**  
             * unconnect these navigate("/login") lines after completing the backend and testing 
             * the both frontend and backend together.
             **/
          }
        } else {
          // navigate("/login");
        }
      })
      .catch((error) => {
        // navigate("/login");
      });
  }, [user]);


  // Define handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
//update name,email and birth_date
  const handlePasswordChange = (field, value) => {
    setPasswordData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivateInstance.put("/profile_update", userData);
      setSuccessMessage(response.data.details);
    } catch (error) {
      setError({ profile: error.response.data.details });
    }
  };
  
  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivateInstance.put("/profile_password", passwordData);
      setSuccessMessage(response.data.details);
    } catch (error) {
      setError({ password: error.response.data.details });
    }
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
              <div className="flex-1 rounded-lg">
                {/*avatar start*/}
                <div className="items-left flex flex-col">
                  <img
                    src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                    className="w-40 rounded-full border-4 border-white"
                  />
                  <div className="mt-5 flex items-center space-x-2">
                    <p className="font-Poppins text-2xl font-medium italic">
                      {userData?.name || "Loading..."}

                    </p>
                  </div>
                </div>
                {/*avatar end*/}

                {/* form area start*/}
                <div className="mx-auto mt-5 w-full max-w-[750px]">
                  {/* basic details form */}
                  <form onSubmit={() => { handleProfileSubmit }}>
                    {/*Name  : start  */}
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="name" value="Name" />
                      </div>
                      <TextInput
                        id="name"
                        name="name"
                        className="inputs"
                        type="text"
                        placeholder="Tharushi Vithanage"
                        value={userData?.name || ""}
                        onChange={handleInputChange}
                        required

                        helperText={
                          <span className="text-red-500">{error?.name}</span>
                        }
                      />
                    </div>
                    {/* Name : end */}
                    {/*email start */}
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="email1" value="Email" />
                      </div>
                      <TextInput
                        id="email1"
                        className="inputs"
                        type="email"
                        placeholder="name@gmail.com"
                        value={userData?.email || ""}
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
                        value={userData?.birth_date || ''}
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
                          <span className="text-red-500">{error?.birth_date}</span>
                        }
                      />
                    </div>
                    {/*birthday end */}
                    {/*button start */}
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button size={"sm"} className="w-32 rounded-[5px]">
                        Save
                      </Button>
                    </div>
                    {/*button end */}
                  </form>

                  {/* password reset form */}
                  <form onSubmit={() => { handleChangePasswordSubmit }}>
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
                        <Label htmlFor="new_password" value="New Password" />
                      </div>
                      <TextInput
                        id="new_password"
                        type="password"
                        placeholder="********"
                        required
                        name="new_password"
                        className="inputs"
                        value={userData?.new_password || ''}  // Add the nullish coalescing operator here
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
                          value="Conform Password"
                        />
                      </div>
                      <TextInput
                        id="confirm_password"
                        type="password"
                        placeholder="********"
                        required
                        name="confirm_password"
                        className="inputs"
                        defaultValue={userData?.confirm_password || ''} // Use defaultValue
                        onChange={(e) => handleInputChange('confirm_password', e.target.value)} // Add this line
                        helperText={
                          <span className="text-red-500">
                            {error?.confirm_password}
                          </span>
                        }
                      />
                    </div>
                    {/*Conform Password:end*/}
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button size={"sm"} className="w-44 rounded-[5px]">
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
                    <div
                      key={index}
                      className="mb-5 border-b border-gray-400/70 pb-5 dark:border-gray-600"
                    >
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










