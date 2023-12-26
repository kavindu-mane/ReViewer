import { TextInput, Table, Button, Pagination } from "flowbite-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FindBook = () => {
  const [search] = useSearchParams();
  const [paginationData, setPaginationData] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [books, setBooks] = useState();
  const [currentPage, setCurrentPage] = useState(search.get("page") || 1);
  return (
    <div className="relative w-full">
      <div className="flex w-full flex-col items-center">
        {/* search */}
        <div className="flex w-full space-x-2 sm:max-w-[25rem] lg:max-w-[30rem]">
          <TextInput
            type="text"
            sizing={"sm"}
            placeholder="Search any existing book"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="inputs w-full "
            required
          />
          <Button className="!ring-0">
            <FaSearch />
          </Button>
        </div>
      </div>

      {/* table section */}
      {books && (
        <div className="overflow-x-auto p-6">
          <Table
            hoverable
            className="rounded-lg ring-1 ring-gray-300 dark:ring-gray-600"
          >
            {/* table heading */}
            <Table.Head>
              <Table.HeadCell className="bg-gray-300">ISBN No.</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Title</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Category</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">
                Total Reviews
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Action</Table.HeadCell>
            </Table.Head>
            {/* table body */}
            {books &&
              books?.map((book, key) => {
                return (
                  <Table.Body
                    key={key}
                    className="divide-y border-b dark:border-gray-700"
                  >
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium">
                        {book?.ISBN_no}
                      </Table.Cell>
                      <Table.Cell> {book?.title}</Table.Cell>
                      <Table.Cell> {book?.category}</Table.Cell>
                      <Table.Cell>{book?.reviews}</Table.Cell>
                      <Table.Cell>
                        <Button
                          size={"xs"}
                          className="min-w-[5rem]"
                          onClick={() =>
                            changebookstatus(
                              accountStatus === "active"
                                ? "deactivate"
                                : "active",
                              book?.email,
                            )
                          }
                        >
                          {accountStatus === "active" ? "Deactivate" : "Active"}
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                );
              })}
          </Table>
        </div>
      )}
      {/* pagination */}
      {books && (
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={paginationData?.page_count || 1}
          onPageChange={(page) => onPageChange(page)}
          showIcons
          className="flex justify-center"
        />
      )}
    </div>
  );
};
export default FindBook;
