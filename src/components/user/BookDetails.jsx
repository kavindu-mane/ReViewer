import React, { useState, useEffect } from "react";
import axios from "axios";

function BookDetails({ isbn }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://api/books/${isbn}/`);
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    fetchBookDetails();
  }, [isbn]);
 const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {bookDetails ? (
        <>
          {/* Book topic */}
          <h1 className="font-Poppins text-2xl font-medium md:text-3xl">
            {bookDetails.title}
          </h1>

          {/* Book author */}
          <h2 className="mb-8 text-lg italic text-gray-600 dark:text-gray-400 md:text-xl">
            by {bookDetails.author}
          </h2>

          {/* Book details */}
          <p className="leading-relaxed">
            {isExpanded ? bookDetails.description : bookDetails.description.slice(0, 200)}
            {/* expanded text */}
            <span id="more-text" className={isExpanded ? "" : "hidden"}>
              {isExpanded ? "" : "..."}
              {bookDetails.description.slice(200)}
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