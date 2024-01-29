import React, { useState } from "react";
import StarRating from "../../components/user/StarRating";

function HalfBookCard({ bookDetails }) {
  return (
    <div>
      {/* Book topic */}
      <h1 className="flex justify-between font-Poppins text-2xl font-medium md:text-3xl">
        {bookDetails?.title}
        <div className="flex flex-col text-sm gap-y-1 text-gray-600 dark:text-gray-400 font-normal">
          <div className="">Category : {bookDetails?.category}</div>
          <div className="">Approx. price : ${bookDetails?.price}</div>
        </div>
      </h1>

      {/* Book author */}
      <h2 className="mb-8 text-lg italic text-gray-600 dark:text-gray-400 md:text-xl">
        by {bookDetails?.author}
      </h2>
      <StarRating bookDetails={bookDetails} />
    </div>
  );
}

export default HalfBookCard;
