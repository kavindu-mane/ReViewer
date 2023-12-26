import React from "react";
import ReviewsChart from "./manage/dashboard/ReviewsChart";
import BooksChart from "./manage/dashboard/BooksChart";
import UsersChart from "./manage/dashboard/UsersChart";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="p-5">
        <div className="flex w-full flex-col pb-5 lg:flex-row">
          <ReviewsChart />
        </div>
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <BooksChart />
          <UsersChart />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
