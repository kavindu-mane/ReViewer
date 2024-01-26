import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

function WishList({ bookId }) {
  const [wishList, setWishList] = useState(true);

 
  const addToWishList = async () => {
    try {
      const response = await axios.post(
        `http://api/wishlist/${bookId}/`
      );
      setWishList(response.data.is_in_wishlist);    
      console.log("Wishlist status updated successfully");
    } catch (error) {
      console.error("Error updating wishlist status", error);  
    }
  };

  return (
    // Wishlist icon
    <div className="flex w-full items-center justify-end space-x-3">
      {/* Wishlist Label */}
      <p className="ms-2 font-Poppins text-sm font-medium">Want to Read</p>

      {/* Wishlist icon */}
      <span className="cursor-pointer">
        <FaHeart onClick={addToWishList} className={wishList ? "text-red-500" : ""} />
      </span>
    </div>
  );
}

export default WishList;
