import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function StarRating({ isbn }) {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    // Fetch average rating and total reviews
    const fetchRating = async () => {
      try {
        const response = await axios.get(`http://api/books/${isbn}/average-rating/`);
        setAverageRating(response.data.average_rating);
        setTotalReviews(response.data.total_reviews);
      } catch (error) {
        console.error("Error fetching rating:", error);
      }
    };

    fetchRating();
  }, [isbn]); // Re-fetch rating when the ISBN changes

  return (
    <div className="mb-5 flex items-center">
      <BsStarFill className="text-yellow-400" />
      {/* rating */}
      <p className="ms-2 text-sm font-bold">{averageRating.toFixed(2)}</p>
      {/* dot */}
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
      <Link to={`/books/${isbn}/reviews`} className="text-sm font-medium underline hover:no-underline">
        {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
      </Link>
    </div>
  );
}

export default StarRating;
