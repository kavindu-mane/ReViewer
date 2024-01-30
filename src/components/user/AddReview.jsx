import { Button, Modal, Rating, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import toastDefault from "../../data/toastDefault";

function AddReview({ isbn }) {
  const [openModal, setOpenModal] = useState(false);
  const [rate, setRatings] = useState(1);
  const [review, setReview] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const axiosPrivateInstance = useAxios();

  // review submit handler
  const handleSubmit = async () => {
    setLoading(true);
    await axiosPrivateInstance
      .post(`/review/${isbn}/add/`, { rate, review })
      .then((response) => {
        if (response?.data?.details === "success") {
          toast.success("Update Successful", toastDefault);
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong", toastDefault);
      })
      .finally(() => {
        setLoading(false);
        setOpenModal(false);
      });
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
              filled={rate >= 2}
              className="cursor-pointer"
              onClick={() => setRatings(2)}
            />
            <Rating.Star
              filled={rate >= 3}
              className="cursor-pointer"
              onClick={() => setRatings(3)}
            />
            <Rating.Star
              filled={rate >= 4}
              className="cursor-pointer"
              onClick={() => setRatings(4)}
            />
            <Rating.Star
              filled={rate === 5}
              className="cursor-pointer"
              onClick={() => setRatings(5)}
            />
            <p className="ms-3 text-sm">{rate} Star ratring</p>
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
