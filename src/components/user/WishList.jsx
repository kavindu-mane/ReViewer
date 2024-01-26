import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

function WishList({ bookId }) {
  const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    // Fetch wishlist status for the current book
    const fetchWishListStatus = async () => {
      try {
        const response = await axios.get(
          `http://api/wishlist/status/${bookId}/`
        );
        setInWishList(response.data.is_in_wishlist);
      } catch (error) {
        console.error("Error fetching wishlist status:", error);
      }
    };

    fetchWishListStatus();
  }, [bookId]); // Re-fetch wishlist status when bookId changes

  const addToWishList = async () => {
    try {
      if (inWishList) {
        // If already in wishlist, remove it
        await axios.post(`http://api/remove_from_wishlist/`, {
          book_id: bookId
        });
      } else {
        // If not in wishlist, add it
        await axios.post(`http://api/add_to_wishlist/`, {
          book_id: bookId
        });
      }

      // Update the local state
      setInWishList((prev) => !prev);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    // Wishlist icon
    <div className="flex w-full items-center justify-end space-x-3">
      {/* Wishlist Label */}
      <p className="ms-2 font-Poppins text-sm font-medium">Want to Read</p>

      {/* Wishlist icon */}
      <span className="cursor-pointer">
        <FaHeart onClick={addToWishList} className={inWishList ? "text-red-500" : ""} />
      </span>
    </div>
  );
}

export default WishList;
