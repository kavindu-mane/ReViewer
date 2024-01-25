import { Button, Modal, Rating, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

function AddReview() {
  const [openModal, setOpenModal] = useState(false);
  const [ratings, setRatings] = useState(1);
  const [review, setReview] = useState("");

  // review submit handler
  const handleSubmit = () => {
    setOpenModal(false);
    const formData = new FormData();
    formData.append("ratings", ratings);
    formData.append("review", review);
    // axios
    console.log(formData);
  };

  return (
    <>
      <Button
        size={"sm"}
        className="rounded-full dark:bg-sky-700"
        onClick={() => setOpenModal(true)}
      >
        <BsPlus className="h-6 w-6" /> Add Review
      </Button>

      <Modal
        className="backdrop-blur-sm dark:bg-slate-800"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="dark:bg-slate-900">
          Write a Review
        </Modal.Header>
        <Modal.Body className="dark:bg-slate-900">
          {/* rating */}
          <Rating id="stars" size={"md"}>
            <Rating.Star
              className="cursor-pointer"
              onClick={() => setRatings(1)}
            />
            <Rating.Star
              filled={ratings >= 2}
              className="cursor-pointer"
              onClick={() => setRatings(2)}
            />
            <Rating.Star
              filled={ratings >= 3}
              className="cursor-pointer"
              onClick={() => setRatings(3)}
            />
            <Rating.Star
              filled={ratings >= 4}
              className="cursor-pointer"
              onClick={() => setRatings(4)}
            />
            <Rating.Star
              filled={ratings === 5}
              className="cursor-pointer"
              onClick={() => setRatings(5)}
            />
            <p className="ms-3 text-sm">{ratings} Star ratring</p>
          </Rating>
          {/* review area */}
          <div className="mt-4">
            <div className="mb-2 block">
              <Label
                htmlFor="review"
                value="Review"
                className="after:ml-0.5 after:text-red-500 after:content-['*']"
              />
            </div>
            <Textarea
              id="review"
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="dark:bg-slate-800"
              required
            />
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-end dark:bg-slate-900">
          <Button
            size={"sm"}
            className="rounded-sm"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
          <Button
            size={"sm"}
            className="rounded-sm"
            color="gray"
            onClick={() => setOpenModal(false)}
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReview;
