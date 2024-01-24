import React, { lazy } from "react";
import CustomerReview from "../../components/user/CustomerReview";
import AddReview from "../../components/user/AddReview";
import HalfBookCard from "../../components/user/HalfBookCard";
import FilterReview from "../../components/user/FilterReview";
import { Button, Modal, Rating, Label, Textarea } from "flowbite-react";
import { CgAlignRight } from "react-icons/cg";


const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));

const Review = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* header */}
        <NavBar />
        {/* Body */}
        <section className="mt-10 flex w-full flex-col items-center px-5 lg:px-8">
          <div className="flex w-full">
            <HalfBookCard />
          </div>
          <div className="flex w-full justify-end">
            <FilterReview />
          </div>
          <div className="flex w-full justify-start mb-4">
            <AddReview />
          </div>
          <div className="mb-10 flex w-full max-w-7xl flex-col space-y-10">
            <CustomerReview />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button gradientMonochrome="info">
              <svg
                class="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
              </svg>
            </Button>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Review;
