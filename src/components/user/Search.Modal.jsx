import React from "react";
import { Modal, TextInput } from "flowbite-react";
import { IoMdSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";

const Search = ({ openModal, setOpenModal }) => {
  // search function
  const searchBooks = (keyword) => {
    console.log(keyword);
  };

  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
      position={"center"}
    >
      <Modal.Body className="overflow-y-hidden">
        <div className="mb-4 flex items-center justify-between space-x-3">
          {/* search input box */}
          <TextInput
            type="text"
            sizing={"sm"}
            icon={IoMdSearch}
            placeholder="Type something..."
            className="inputs w-full"
            onChange={(e) => searchBooks(e.target.value)}
            required
          />
          {/* close button */}
          <CgClose
            onClick={() => setOpenModal(false)}
            className="h-8 w-8 rounded-md bg-sky-600 p-1.5 font-bold text-white hover:cursor-pointer hover:bg-sky-700"
          />
        </div>

        {/* results area */}
        <div className="max-h-[40rem] space-y-1 overflow-y-scroll py-2">
          <a
            href="/"
            className="flex w-full items-center justify-between rounded-md bg-slate-200 p-2 text-sm hover:bg-sky-600 hover:text-white dark:bg-slate-600 dark:hover:bg-sky-600"
          >
            <div className="">
              {/* title */}
              <p className="">Temp Title</p>
              {/* author */}
              <p className="">Author : Author Name</p>
            </div>
            <FaAngleRight />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Search;
