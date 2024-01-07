import React from "react";

function BookCard() {
  return (
    //  Book image card
    <figure className="relative max-w-sm rounded-md border grayscale-0 filter transition-all duration-300 hover:grayscale dark:border-slate-700">
      <img
        className="rounded-lg"
        src="src\assets\Harry-Potter-and-the-Prisoner-of-Azkaban.jpg"
        alt="book cover"
      ></img>
    </figure>
  );
}

export default BookCard;
