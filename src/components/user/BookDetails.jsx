import React, { useState, useEffect } from "react";

function BookDetails({ bookDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {bookDetails ? (
        <>
          {/* Book topic */}
          <h1 className="font-Poppins text-2xl font-medium md:text-3xl">
            {bookDetails?.title}
          </h1>

          {/* Book author */}
          <h2 className="mb-8 text-lg italic text-gray-600 dark:text-gray-400 md:text-xl">
            by {bookDetails?.author}
          </h2>

          {/* Book details */}
          <p className="leading-relaxed">
            {isExpanded
              ? bookDetails?.description
              : bookDetails?.description?.slice(0, 400)}
            {/* expanded text */}
            <span id="more-text" className={isExpanded ? "" : "hidden"}>
              {isExpanded ? "" : "..."}
              {bookDetails?.description?.slice(400)}
            </span>
          </p>

          {/* Read more function */}
          <button
            id="toggle-btn"
            onClick={handleToggle}
            className={"my-4 text-blue-500 hover:underline"}
          >
            Read {isExpanded ? "Less" : "More"}
          </button>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}

export default BookDetails;