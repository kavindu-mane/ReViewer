import React from "react";
import { Label, TextInput } from "flowbite-react";

const AddBook = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="mb-9 font-Poppins text-2xl font-medium">Add new Book</div>
      <form className="flex flex-col gap-4">
        <div className="w-full space-y-4">
          {/* ISBN Registration number */}
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <Label
              htmlFor="regno"
              value="Book Reg.No"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="regno"
              placeholder="978-93-96055-02-6"
              required
              type="text"
              name="regno"
              className="inputs"
            />
          </div>
          {/* Author's Name */}
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <Label
              htmlFor="authorname"
              value="Author name"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="authorname"
              placeholder="author's name"
              required
              type="text"
              name="authorname"
              className="inputs"
            />
          </div>
          {/* Book Category */}
          <div className="w-full">
            <Label
              htmlFor="vehicle-type"
              value="Vehicle Type"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <Select
              id="book-category"
              name="Book Category"
              required
              defaultValue={"car"}
              className="inputs"
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="tuk-tuk">Tuk-Tuk</option>
              <option value="van">Van</option>
            </Select>
          </div>

          {/* Published Year */}
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <Label
              htmlFor="pubyear"
              value="Year of Publishing"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="pubyear"
              //   placeholder="01-01-1998"
              required
              type="date"
              name="pubyear"
              className="inputs"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
