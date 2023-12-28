import React, { useState, useEffect } from "react";
import { Label, TextInput, Select, Textarea, Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import bookCategory from "../../../../data/Admin/bookCategory";
import tostDefault from "../../../../data/tostDefault";

const AddBook = () => {
  const startYear = new Date().getFullYear() - 100;
  const [files, setFiles] = useState([]);
  // file drop feature
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png", ".jpeg", ".jpg"],
    },
    maxFiles: 1,
    maxSize: 2097152,
    multiple: false,
    onDropRejected: () =>
      toast.error("You can't upload this file", tostDefault),
    onDropAccepted: (acceptedFiles) =>
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      ),
  });

  // submit details
  const submit = async (e) => {
    e.preventDefault();
    // setError(null);
    // setLoading(true);
    const formData = new FormData(e.target);
    console.log(JSON.stringify(Object.fromEntries(formData)));
    // const id = toast.loading("Please wait...", tostDefault);
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="mt-10 w-full max-w-4xl">
      <div className="mb-9 text-start font-Poppins text-2xl font-medium">
        Add new Book
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => submit(e)}>
        <div className="w-full space-y-4">
          {/* ISBN Registration number */}
          <div className="mb-2 block space-y-1">
            <Label
              htmlFor="isbn"
              value="ISBN"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="isbn"
              placeholder="978-93-96055-02-6"
              required
              type="text"
              name="isbn"
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
              value="Price (Approx. in USD)"
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

          {/* cover image */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Upload Cover Image</p>

            <div className="container flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                {...getRootProps({
                  className: "dropzone",
                  onClick: (event) => event.stopPropagation(),
                })}
                className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <input
                  {...getInputProps()}
                  name="cover-image"
                  id="dropzone-file"
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <BsCloudUpload className="text-5xl" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG (MAX. 2MB)
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* cover image preview */}
          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Cover Image Preview</p>

              <img
                src={files[0].preview}
                alt="preview"
                className="h-72 w-full rounded-md border object-cover"
              />
            </div>
          )}

          <div className="flex justify-end">
            <Button type="submit" className="mt-2" size={"xs"}>
              Add this book
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
