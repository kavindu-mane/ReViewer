import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function WishList() {
  const [wishList, setWishList] = useState(true);

  // need to add functionality to add to wishlist
  const addToWishList = () => {
    setWishList((prev) => !prev);
  };

  return (
    // Wishlist icon
    <div className="flex w-full items-center justify-end space-x-3">
      {/* Wishlist Label */}
      <p className="ms-2 font-Poppins text-sm font-medium">Want to Read</p>

      {/* Wishlist icon */}
      <span className="cursor-pointer">
        <FaHeart
          onClick={addToWishList}
          className={wishList ? "text-red-500" : ""}
        />
      </span>
    </div>
  );
}

export default WishList;
