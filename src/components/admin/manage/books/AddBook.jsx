import React from "react";
import { Label, TextInput, Select, Textarea,Button } from "flowbite-react";
import bookCategory from "../../../../data/Admin/bookCategory";

const AddBook = () => {
  const startYear = new Date().getFullYear() - 100;
  return (
    <div className="w-full max-w-4xl mt-10">
      <div className="mb-9 text-center font-Poppins text-2xl font-medium">
        Add new Book
      </div>
      <form className="flex flex-col gap-4">
        <div className="w-full space-y-4">
          {/* ISBN Registration number */}
          <div className="mb-2 block space-y-1">
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
          {/* Title of the book */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="title"
              value="Book Title"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="booktitle"
              placeholder="title"
              required
              type="text"
              name="booktitle"
              className="inputs"
            />
          </div>
          {/* Author's Name */}
          <div className="mb-2 block space-y-1">
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
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="book-category"
              value="Book Category"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <Select
              id="book-category"
              name="Book Category"
              required
              defaultValue={"car"}
              className="inputs"
            >
              {bookCategory.map((category, i) => {
                return (
                  <option key={i} value={category}>
                    {category}
                  </option>
                );
              })}
            </Select>
          </div>

          {/* Published Year */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="pubyear"
              value="Year of Publishing"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <Select
              id="pubyear"
              required
              type="date"
              name="pubyear"
              className="inputs"
            >
              {Array.from({ length: 101 }, (_, index) => index + startYear).map(
                (pubyear, i) => {
                  return (
                    <option key={i} value={pubyear}>
                      {pubyear}
                    </option>
                  );
                },
              )}
            </Select>
          </div>
          {/* Language of the book */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="language"
              value="Language"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="language"
              placeholder=""
              required
              type="text"
              name="language"
              className="inputs"
            />
          </div>
          {/* Price of the book */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="price"
              value="Price"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="price"
              placeholder=""
              required
              type="text"
              name="price"
              className="inputs"
            />
          </div>
          {/* Description about the book */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="description"
              value="Description"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <Textarea
              id="description"
              placeholder=""
              required
              type="text"
              name="description"
              className="inputs"
              rows={8}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="mt-2">
              Add this book
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
