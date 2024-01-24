import { Avatar, Rating } from "flowbite-react";
import React, { useEffect } from "react";

function CustomerReview() {
  // to be implement
  const ratings = 3;

  return (
    <div>
      <div className="mb-4 flex items-center">
        {/* User image */}
        <Avatar rounded className="me-4" alt="User avatar" />
        {/* User name */}
        <p className="font-medium dark:text-white">Harry</p>
      </div>
      <div className="flex items-center justify-between">
        {/* Star rating */}
        <Rating id="stars" size={"sm"}>
          <Rating.Star />
          <Rating.Star filled={ratings >= 2} className="cursor-pointer" />
          <Rating.Star filled={ratings >= 3} className="cursor-pointer" />
          <Rating.Star filled={ratings >= 4} className="cursor-pointer" />
          <Rating.Star filled={ratings === 5} className="cursor-pointer" />
        </Rating>
        {/* date */}
        <p className="text-gray-400 dark:text-gray-500">2023-07-12</p>
      </div>
      {/* User review */}
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        The third book, "Prisoner of Azkaban," surpasses its predecessors with a
        more intricate plot, detailed characters, and an expanding magical
        world. The story feels darker, with suspenseful events unfolding
        unpredictably. The narrative depth and the evolving complexity make it a
        standout, solidifying the series as a potential favorite in the making.
      </p>
      <hr className="mt-8 h-px border-0 bg-gray-400 dark:bg-gray-700"></hr>
    </div>
  );
}

export default CustomerReview;
