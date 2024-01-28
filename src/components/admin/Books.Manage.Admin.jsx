import React from "react";

const Books = ({children}) => {
  return (
    <React.Fragment>
      <div className="flex w-full flex-col items-center justify-center p-2 md:p-5">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Books;
