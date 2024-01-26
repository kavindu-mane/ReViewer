import React, { lazy, useState } from "react";
import CustomerReview from "../../components/user/CustomerReview";
import AddReview from "../../components/user/AddReview";
import HalfBookCard from "../../components/user/HalfBookCard";
import { Pagination, Dropdown } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Review = () => {
  const [search] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(search.get("page") || 1);
  const [paginationData, setPaginationData] = useState({});

  // page changing function
  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate("?page=" + page);
  };

  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* header */}
        <NavBar />
        {/* Body */}
        <section className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
          <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
            <HalfBookCard />
            <div className="flex w-full justify-between">
              <AddReview />
              <Dropdown label="Sort by" inline>
                <Dropdown.Item>Popular Reviews</Dropdown.Item>
                <Dropdown.Item>Newest first</Dropdown.Item>
                <Dropdown.Item>Oldest first</Dropdown.Item>               
              </Dropdown>
            </div>
            <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
              <CustomerReview />
            </div>

            {/* pagination for reviews moves */}
            <div className="flex w-full justify-end">
              <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={paginationData?.page_count || 5}
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
