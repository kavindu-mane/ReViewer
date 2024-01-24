import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function StarRating() {
  return (
    <div className="mb-5 flex items-center">
      <BsStarFill className="text-yellow-400" />
      {/* rating */}
      <p className="ms-2 text-sm font-bold">4.95</p>
      {/* dot */}
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
      <Link
        to={"review"}
        className="text-sm font-medium underline hover:no-underline"
      >
        73 reviews
      </Link>
    </div>
  );
}

export default StarRating;
