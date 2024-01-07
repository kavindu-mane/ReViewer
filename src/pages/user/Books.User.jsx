import React, { lazy } from "react";
import { Link } from "react-router-dom";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));
const BookCard = lazy(() => import("../../components/user/BookCard"));
const StarRating = lazy(() => import("../../components/user/StarRating"));
const AddReview = lazy(() => import("../../components/user/AddReview"));
const CustomerReview = lazy(
  () => import("../../components/user/CustomerReview"),
);
const BookDetails = lazy(() => import("../../components/user/BookDetails"));
const WishList = lazy(() => import("../../components/user/WishList"));

const Books = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* body */}
        <section className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
          <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
            {/* top */}
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:items-start sm:space-x-5 sm:space-y-0 md:space-x-10 xl:space-x-20">
              {/* Left column */}
              <div className="flex w-full max-w-xs flex-col items-center space-y-4">
                <BookCard />
                <WishList />
              </div>

              {/* right row */}
              <div className="w-full">
                <BookDetails />
                <StarRating />
                <AddReview />

                <hr className="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col space-y-8">
              <h3 className="font-Poppins text-xl font-medium md:text-2xl">
                User Reviews
              </h3>
              {/* need to be implement */}
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <Link
                to={"review"}
                className={"my-4 self-end text-blue-500 hover:underline"}
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Books;
