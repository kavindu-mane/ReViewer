import axios from "axios";
import React, { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation";
const Error = lazy(() => import("../Error"));
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));
const BookCard = lazy(() => import("../../components/user/BookCard"));
const StarRating = lazy(() => import("../../components/user/StarRating"));
const AddReview = lazy(() => import("../../components/user/AddReview"));
const UserReview = lazy(() => import("../../components/user/UserReview"));
const BookDetails = lazy(() => import("../../components/user/BookDetails"));
const WishList = lazy(() => import("../../components/user/WishList"));

const Books = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState(null);

  // load book data
  useEffect(() => {
    axios
      .get(`/books/${isbn}/`)
      .then((response) => {
        if (response?.status === 200) {
          if (response?.data !== null) {
            setBook(response?.data);
          } else {
            setBook(404);
          }
        }
      })
      .catch((error) => {
        setBook(404);
      });
  }, []);

  // load reviews
  useEffect(() => {
    if (book !== null && book !== 404) {
      axios
        .get(`/review/${isbn}/1/ratings/`)
        .then((response) => {
          if (response?.status === 200) {
            if (response?.data !== null) {
              setReviews(response?.data);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [book]);

  if (book === null) return <LoadingAnimation />;
  if (book === 404) return <Error />;

  return (
    <React.Fragment>
      {book !== null && book !== 404 && (
        <div className="relative flex min-h-screen flex-col items-center justify-between">
          {/* Header */}
          <NavBar />
          {/* Body */}
          <section className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
            <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
              {/* Top */}
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:items-start sm:space-x-5 sm:space-y-0 md:space-x-10 xl:space-x-20">
                {/* Left column */}
                <div className="flex w-full max-w-xs flex-col items-center space-y-4">
                  {/* BookCard Component */}
                  <BookCard bookDetails={book} />
                  {/* WishList Component */}
                  <WishList bookDetails={book} />
                </div>

                {/* Right row */}
                <div className="w-full">
                  {/* BookDetails Component */}
                  <BookDetails bookDetails={book} />
                  {/* StarRating Component */}
                  <StarRating bookDetails={book} />
                  {/* AddReview Component */}
                  <AddReview isbn={isbn} />

                  <hr className="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-col space-y-8">
                <h3 className="font-Poppins text-xl font-medium md:text-2xl">
                  User Reviews
                </h3>
                {/* UserReview Component */}
                <UserReview reviews={reviews?.reviews} />
                <Link
                  to={"reviews"}
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
      )}
    </React.Fragment>
  );
};

export default Books;
