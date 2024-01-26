import React, { useState, useEffect } from "react";
import axios from "axios";

function BookCard() {
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    //Fetch book details
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get("http://127.0.0.1.:8000/api/books/..../");
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, []); // Empty dependency array

  return (
    // Book image card
    <figure className="relative max-w-sm rounded-md border grayscale-0 filter transition-all duration-300 hover:grayscale dark:border-slate-700">
      {bookDetails ? (
        <>
          <img
            className="rounded-lg"
            src={bookDetails.cover_image}
            alt="book cover"
          />
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </figure>
  );
}

export default BookCard;
