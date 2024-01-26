import { Button, Modal } from "flowbite-react";

const ViewBook = ({ openModal, setOpenModal, book }) => {
  return (
    <Modal
      className="backdrop-blur-sm dark:bg-slate-800"
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="dark:bg-slate-900">{book?.title}</Modal.Header>
      <Modal.Body className="dark:bg-slate-900">
        <div className="text-md space-y-2 text-gray-700 dark:text-gray-200">
          <p className="text-base leading-relaxed">ISBN : {book?.isbn}</p>
          <p className="text-base leading-relaxed ">
            Category : {book?.category}
          </p>
          <p className="text-base leading-relaxed">Author : {book?.author}</p>
          <p className="text-base leading-relaxed">
            Published Year : {book?.pubyear}
          </p>
          <p className="text-base leading-relaxed">
            Language : {book?.language}
          </p>
          <p className="text-base leading-relaxed">Price : {book?.price}</p>
          <p className="text-base leading-relaxed">
            Description : {book?.description}
          </p>
          <p className="text-base leading-relaxed">
            No. of Reviews : {book?.reviews}
          </p>
          <p className="text-base leading-relaxed">
            Reviews Rate :{" "}
            {book?.reviews !== 0 ? book?.reviews_score / book?.reviews : 0}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end dark:bg-slate-900">
        <Button
          size={"sm"}
          className="w-20"
          onClick={() => setOpenModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewBook;
