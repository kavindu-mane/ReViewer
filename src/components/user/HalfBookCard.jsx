import React, { useState } from "react";
import StarRating from "../../components/user/StarRating";

function HalfBookCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Book topic */}
      <h1 className="font-Poppins text-2xl font-medium md:text-3xl">
        Harry Potter and the Prisoner of Azkaban
      </h1>

      {/* Book author */}
      <h2 className="mb-8 text-lg italic text-gray-600 dark:text-gray-400 md:text-xl">
        by J.K. Rowling
      </h2>
        <StarRating/>
    </div>
  );
}

export default HalfBookCard;
