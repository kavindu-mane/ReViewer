import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../../hooks/AuthContext";
import useAxios from "../../hooks/useAxios";
import toastDefault from "../../data/toastDefault";
import { toast } from "react-toastify";

function WishList({ bookDetails }) {
  const [inWishList, setInWishList] = useState(false);
  const { user } = useAuth();
  const axiosPrivateInstance = useAxios();

  const changeWishListStatus = async (path) => {
    if (user) {
      setInWishList((prev) => !prev);
      await axiosPrivateInstance
        .post(`/wishlist/${bookDetails?.isbn}/${path}/`)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Wishlist updated", toastDefault);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (user) {
      axiosPrivateInstance
        .get(`/wishlist/${bookDetails?.isbn}/`)
        .then((response) => {
          if (response.status === 200) {
            setInWishList(response.data?.is_in_wishlist);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    // Wishlist icon
    <div className="flex w-full items-center justify-end space-x-3">
      {/* Wishlist Label */}
      <p className="ms-2 font-Poppins text-sm font-medium">Want to Read</p>

      {/* Wishlist icon */}
      <span className="cursor-pointer">
        {inWishList ? (
          <FaHeart
            onClick={() => changeWishListStatus("remove")}
            className="text-red-500"
          />
        ) : (
          <FaRegHeart
            onClick={() => changeWishListStatus("add")}
            className="text-red-500"
          />
        )}
      </span>
    </div>
  );
}

export default WishList;
