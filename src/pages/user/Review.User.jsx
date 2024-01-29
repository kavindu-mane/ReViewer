import React, { lazy, useState, useEffect } from "react";
import UserReview from "../../components/user/UserReview";
import AddReview from "../../components/user/AddReview";
import HalfBookCard from "../../components/user/HalfBookCard";
import { Pagination, Dropdown } from "flowbite-react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Review = () => {
  const [search] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(search.get("page") || 1);
  const [paginationData, setPaginationData] = useState({});
  const [book, setBook] = useState(null);
  const [sortby, setSortby] = useState("ratings");
  const { isbn } = useParams();
  const [reviews, setReviews] = useState(null);

  // page changing function
  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate("?page=" + page);
  };

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
        .get(`/review/${isbn}/${currentPage}/${sortby}/`)
        .then((response) => {
          if (response?.status === 200) {
            if (response?.data !== null) {
              setReviews(response?.data?.reviews);
              setPaginationData(response?.data?.meta);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [book, sortby, currentPage]);

  const changeSortBy = (value) => {
    setSortby(value);
    setCurrentPage(1);
  };

  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* header */}
        <NavBar />
        {/* Body */}
        <section className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
          <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
            <HalfBookCard bookDetails={book} />
            <div className="flex w-full justify-between">
              <AddReview isbn={isbn} />
              <Dropdown label="Sort by" inline>
                <Dropdown.Item onClick={() => changeSortBy("ratings")}>
                  Ratings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeSortBy("newest")}>
                  Newest first
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeSortBy("oldest")}>
                  Oldest first
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
              <UserReview reviews={reviews} />
            </div>

            {/* pagination for reviews moves */}
            <div className="flex w-full justify-end">
              <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={paginationData?.page_count || 1}
                onPageChange={(page) => onPageChange(page)}
                showIcons
              />
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
