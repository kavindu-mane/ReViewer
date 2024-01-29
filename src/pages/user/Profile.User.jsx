import {
  TextInput,
  Label,
  Button,
  Rating,
  Datepicker,
  Pagination,
  FileInput,
  Avatar,
} from "flowbite-react";
import React, { lazy, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/AuthContext";
import { toast } from "react-toastify";
import toastDefault from "../../data/toastDefault";
import { useNavigate } from "react-router-dom";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Profile = () => {
  const { user, setUserValue } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birth_date: "",
    avatar: "/media/users/default_user.svg",
  });
  const [error, setError] = useState({});
  const [review, setReview] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [loading, setLoading] = useState({
    basic: false,
    email: false,
    password: false,
  });
  const axiosPrivateInstance = useAxios();
  const navigate = useNavigate();
  const [wishlistCurrentPage, setWishlistCurrentPage] = useState(1);
  const onWishlistPageChange = (page) => setWishlistCurrentPage(page);
  const [reviewCurrentPage, setReviewCurrentPage] = useState(1);
  const onReviewPageChange = (page) => setReviewCurrentPage(page);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e, type) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    setLoading({ ...loading, [type]: true });
    await axiosPrivateInstance
      .put(`/user/update/${type}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        if (response?.data?.details === "success") {
          if (type === "basic" || type === "picture") {
            const { data } = await axiosPrivateInstance.get("/user/");
            setUserValue(data);
          } else {
            setUserValue(null);
            localStorage.removeItem("token");
            localStorage.removeItem("csrf");
            navigate("/login", { replace: true });
          }

          toast.success("Update Successful", toastDefault);
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong", toastDefault);
      })
      .finally(() => {
        setLoading({ ...loading, [type]: false });
      });
  };

  useEffect(() => {
    setUserData(user);
  }, []);

  // fetch data in loading
  useEffect(() => {
    // wishlist
    axiosPrivateInstance
      .get(`/user/wishlist/`)
      .then((response) => {
        if (response?.status === 200) {
          if (response?.data !== null) {
            setWishlist(response?.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [wishlistCurrentPage]);

  useEffect(() => {
    // reviews
    axiosPrivateInstance
      .get(`/user/reviews/`)
      .then((response) => {
        if (response?.status === 200) {
          if (response?.data !== null) {
            setReview(response?.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reviewCurrentPage]);

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
                    src={
                      import.meta.env.VITE_BASE_URL?.slice(0, -4) +
                      userData?.avatar
                    }
                    className="h-40 w-40 rounded-full border-4 border-white object-contain"
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
                  <form
                    onSubmit={(e) => {
                      handleUpdate(e, "basic");
                    }}
                  >
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
                    {/*birthday start */}
                    <div className="relative">
                      <div className="mb-1 block">
                        <Label htmlFor="birth_date" value="Birthday" />
                      </div>
                      <Datepicker
                        id="birth_date"
                        name="birth_date"
                        value={userData?.birth_date || ""}
                        onSelectedDateChanged={(date) =>
                          setUserData({
                            ...userData,
                            birth_date: `${date.toLocaleString("default", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`,
                          })
                        }
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
                      <Button
                        type="submit"
                        size={"sm"}
                        className="w-32 rounded-[5px]"
                      >
                        Save
                      </Button>
                    </div>
                    {/*button end */}
                  </form>

                  {/*email form */}
                  <form
                    onSubmit={(e) => {
                      handleUpdate(e, "email");
                    }}
                  >
                    <div>
                      <div className="mb-1 block">
                        <Label htmlFor="email" value="Email" />
                      </div>
                      <TextInput
                        id="email"
                        className="inputs"
                        type="email"
                        placeholder="name@abcd.com"
                        value={userData?.email || ""}
                        onChange={handleInputChange}
                        required
                        name="email"
                        helperText={
                          <span className="text-red-500">{error?.email}</span>
                        }
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button
                        size={"sm"}
                        className="w-32 rounded-[5px] "
                        type="submit"
                      >
                        Change Email
                      </Button>
                    </div>
                  </form>

                  {/* password change form */}
                  <form
                    onSubmit={(e) => {
                      handleUpdate(e, "password");
                    }}
                  >
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
                            {error?.currentpassword}
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
                        helperText={
                          <span className="text-red-500">
                            {error?.newpassword}
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
                        name="conf_password"
                        className="inputs"
                        helperText={
                          <span className="text-red-500">
                            {error?.confpassword}
                          </span>
                        }
                      />
                    </div>
                    {/*Conform Password:end*/}
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      <Button
                        size={"sm"}
                        className="w-44 rounded-[5px]"
                        type="submit"
                      >
                        Change Password
                      </Button>
                    </div>
                  </form>

                  {/* profile photo */}
                  <form
                    className="mt-5 flex flex-col items-end space-y-5"
                    onSubmit={(e) => {
                      handleUpdate(e, "picture");
                    }}
                  >
                    <div className="w-full">
                      <div className="mb-1 block">
                        <Label htmlFor="name" value="Name" />
                      </div>
                      <FileInput name="avatar" className="inputs w-full" />
                    </div>
                    <Button
                      size={"sm"}
                      className="w-44 rounded-[5px]"
                      type="submit"
                    >
                      Change Picture
                    </Button>
                  </form>
                </div>
                {/* form area end */}
              </div>
            </div>

            {/* right side */}
            <div className="mt-10 w-full">
              {/* want to read */}
              <div className="">
                {/* Want to read topic */}
                <h1 className="mb-5 text-left font-Poppins text-2xl font-medium">
                  Want to Read
                </h1>
                {/*card start*/}
                {wishlist?.wishlist?.length > 0 ? (
                  wishlist?.wishlist?.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="mb-5 flex space-x-5 border-b border-gray-400/70 pb-5 dark:border-gray-600">
                          {/* left side */}
                          <img
                            src={
                              import.meta.env.VITE_BASE_URL?.slice(0, -4) +
                              data?.book?.cover_image
                            }
                            alt="book"
                            className="h-20 w-20 rounded-md object-cover"
                          />
                          {/* right side */}
                          <div className="">
                            <h5 className="font-Poppins text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                              {data?.book?.title}
                            </h5>
                            <p className="flex text-sm text-gray-700 dark:text-gray-400">
                              {data?.book?.author}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Pagination
                            layout="navigation"
                            currentPage={wishlistCurrentPage}
                            totalPages={wishlist?.meta?.page_count || 1}
                            onPageChange={onWishlistPageChange}
                            showIcons
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-sm italic">
                    Wishlist is empty
                  </p>
                )}
                {/*card end*/}
              </div>

              {/* review */}
              <div className="mt-10">
                {/* review start */}
                <h1 className="mb-5 text-left font-Poppins text-2xl font-medium">
                  My Review
                </h1>
                {/* review -start*/}
                {review?.reviews?.length > 0 ? (
                  review?.reviews?.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="mb-5 border-b border-gray-400/70 pb-5 dark:border-gray-600">
                          <p className="mb-1 text-lg">{data?.book?.title}</p>
                          <Rating size={"sm"} className="mb-5">
                            {Array(data?.rate ?? 1)
                              .fill(1)
                              .map((el, i) => (
                                <Rating.Star key={i} />
                              ))}
                          </Rating>

                          <p className="text-sm italic text-gray-600 dark:text-gray-300">
                            {data?.review}
                          </p>
                        </div>
                        {/* review pagination */}
                        <div className="flex justify-end">
                          <Pagination
                            layout="navigation"
                            currentPage={reviewCurrentPage}
                            totalPages={review?.meta?.page_count || 1}
                            onPageChange={onReviewPageChange}
                            showIcons
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-sm italic">
                    No reviews added yet
                  </p>
                )}
                {/* review -end*/}
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
