import React from "react";
import AddBook from "./manage/books/AddBook";
import FindBook from "./manage/books/FindBook";

const Books = () => {
  return (
    <React.Fragment>
      <div className="flex w-full flex-col items-center justify-center p-2 md:p-5">
        <FindBook />
        <AddBook />
      </div>
    </React.Fragment>
  );
};

export default Books;
