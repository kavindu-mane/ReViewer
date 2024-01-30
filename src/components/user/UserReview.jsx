import { Avatar, Rating } from "flowbite-react";

function UserReview({ reviews }) {
  return (
    <div>
      {reviews?.length !== 0 ? (
        reviews?.map((review, key) => (
          <div key={key}>
            <div className="mb-4 flex items-center">
              {/* User image */}
              <Avatar
                rounded
                className="me-4"
                alt="User avatar"
                img={
                  import.meta.env.VITE_BASE_URL?.slice(0, -4) +
                  review.user?.avatar
                }
              />
              {/* User name */}
              <p className="font-medium dark:text-white">{review.user?.name}</p>
            </div>
            <div className="flex items-center justify-between">
              {/* Star rating */}
              <Rating size={"sm"}>
                {Array(review.rate ?? 1)
                  .fill(1)
                  .map((el, i) => (
                    <Rating.Star key={i} />
                  ))}
              </Rating>
              {/* date */}
              <p className="text-gray-400 dark:text-gray-500">
                {new Date(review.created_at).toLocaleDateString()}
              </p>
            </div>
            {/* User review */}
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {review.review}
            </p>
            <hr className="mb-5 mt-8 h-px border-0 bg-gray-400 dark:bg-gray-700"></hr>
          </div>
        ))
      ) : (
        <p className="text-center text-sm italic">No reviews yet</p>
      )}
    </div>
  );
}

export default UserReview;
