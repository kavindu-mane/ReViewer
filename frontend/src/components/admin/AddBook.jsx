import React from "react";
import { Label, TextInput, Select } from "flowbite-react";

const AddBook = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-9 font-Poppins text-2xl font-medium">Add new Book</div>
      <form className="flex flex-col gap-4">
        <div className="w-full space-y-4">
          {/* ISBN Registration number */}
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
              <option value="Adventure">Adventure Fiction</option>
              <option value="Arts-&-New-Media">Arts & New Media</option>
              <option value="Business-Literature">Business Literature</option>
              <option value="Crime">Crime</option>
              <option value="Detective">Detective</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Health-fitness">Health,Fitness & Dieting</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Love-story">Love Story</option>
              <option value="Mystery-Thriller">
                Mystery,Thriller & Suspense
              </option>
              <option value="Poetry">Poetry</option>
              <option value="Psychology">Psychology</option>
              <option value="Religion">Religion</option>
              <option value="Romance">Romance</option>
              <option value="Scinece Fiction">Scinece Fiction</option>
              <option value="Spirituality">Spirituality</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
              <option value="Young-Adult">Young Adult</option>
            </Select>
          </div>

          {/* Published Year */}
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
          {/* Language of the book */}
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-between">
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
        </div>
      </form>
    </div>
  );
};
export default AddBook;
