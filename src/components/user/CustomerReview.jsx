import { Avatar, Rating } from "flowbite-react";

function CustomerReview({reviews}) {

  return (
    <div>
      {reviews?.map((review) => (
        <div key={review.id}>
          <div className="mb-4 flex items-center">
            {/* User image */}
            <Avatar rounded className="me-4" alt="User avatar" />
            {/* User name */}
            <p className="font-medium dark:text-white">{review.user}</p>
          </div>
          <div className="flex items-center justify-between">
            {/* Star rating */}
            <Rating id={`stars-${review.id}`} size={"sm"} value={review.ratings} readonly />
            {/* date */}
            <p className="text-gray-400 dark:text-gray-500">{review.date}</p>
          </div>
          {/* User review */}
          <p className="mt-4 text-gray-500 dark:text-gray-300">{review.comment}</p>
          <hr className="mt-8 h-px border-0 bg-gray-400 dark:bg-gray-700"></hr>
        </div>
      ))}
    </div>
  );
}

export default CustomerReview;
