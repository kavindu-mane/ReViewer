import React, { lazy } from "react";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));
import BookCard from "../../components/user/BookCard";
import StarRating from "../../components/user/StarRating";
import AddReview from "../../components/user/AddReview";
import CustomerReview from "../../components/user/CustomerReview";

const Review = () => {
  const mainDivStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-photo/stack-books-table-with-mountain-background_865967-50667.jpg?w=740")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col justify-between" >
        {/* header */}
        <NavBar />
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-auto lg:py-16 lg:px-6" style={mainDivStyle}>
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <BookCard />
              <br></br>
              <StarRating />
              <br></br>
              <AddReview />
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-Black rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <CustomerReview />
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-Black rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <CustomerReview />
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-Black rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <CustomerReview />
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Review;
