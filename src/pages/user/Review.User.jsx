import React, { lazy } from "react";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));
import BookCard from "../../components/user/BookCard";
import StarRating from "../../components/user/StarRating";
import AddReview from "../../components/user/AddReview";
import CustomerReview from "../../components/user/CustomerReview";
import BookDetails from "../../components/user/BookDetails";
import WishList from "../../components/user/WishList";

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
        {/* Body */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-auto lg:py-16 lg:px-6" >
          <div className="grid grid-rows grid-flow-col gap-10">
          {/* Left column */}
          <div className="row-span-3 ...">
            <BookCard />
            <br></br>
            <WishList />
          </div>
          {/* Top row */}
          <div className="col-span-2 ...">     
              <BookDetails/>
              <br></br>
              <StarRating />
              <br></br>          
              <AddReview />
              <br></br>
              <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
          </div>
          {/* Bottom row */}
          <div className="row-span-2 col-span-2 ..."> 
          <div className="space-y-8 lg:grid lg:grid-raw-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User Reviews</h3>
                <CustomerReview />
                <br></br>
                <CustomerReview />
                <br></br>
                <CustomerReview />
          </div>
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
