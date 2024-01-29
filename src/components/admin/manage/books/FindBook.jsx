import { TextInput, Table, Button, Pagination } from "flowbite-react";
import React, { useState, useCallback, useEffect, lazy } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import useAxios from "../../../../hooks/useAxios";
const ViewBook = lazy(() => import("./ViewBook"));

const FindBook = () => {
  const [search] = useSearchParams();
  const [paginationData, setPaginationData] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [books, setBooks] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [views, setViews] = useState(false);
  const [currentPage, setCurrentPage] = useState(search.get("page") || 1);
  const axiosPrivateInstance = useAxios();
  const navigate = useNavigate();

  // page changing function
  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate("?page=" + page);
  };

  // load books based on user status
  const loadBooks = useCallback(async () => {
    setBooks();
    await axiosPrivateInstance
      .post("/admin/books/", {
        page: currentPage,
        search: searchKeyword,
      })
      .then((response) => {
        if (response?.status === 200) {
          setBooks(response?.data?.books);
          setPaginationData(response?.data?.meta);
        }
      })
      .catch((error) => {
        toast("Something went wrong", {
          ...toastDefault,
          type: "error",
          isLoading: false,
          closeButton: true,
        });
        navigate("/login");
      });
  }, [setBooks, currentPage, searchKeyword]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks, currentPage, searchKeyword]);

  return (
    <>
      <ViewBook
        openModal={openModal}
        setOpenModal={setOpenModal}
        book={views}
      />
      <div className="relative w-full">
        <div className="flex w-full justify-center">
          {/* search */}
          <div className="flex w-full space-x-2 sm:max-w-[25rem] lg:max-w-[30rem]">
            <TextInput
              type="text"
              icon={IoMdSearch}
              sizing={"sm"}
              placeholder="Search any existing book"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="inputs w-full"
              required
            />
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
                <Table.HeadCell className="bg-gray-300">
                  ISBN No.
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">Title</Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">
                  Category
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">
                  Total Reviews
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">Action</Table.HeadCell>
              </Table.Head>
              {/* table body */}
              {books?.map((book, key) => {
                return (
                  <Table.Body
                    key={key}
                    className="divide-y border-b dark:border-gray-700"
                  >
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium">
                        {book?.isbn}
                      </Table.Cell>
                      <Table.Cell> {book?.title}</Table.Cell>
                      <Table.Cell> {book?.category}</Table.Cell>
                      <Table.Cell>
                        {book?.reviews !== 0
                          ? book?.reviews_score / book?.reviews
                          : 0}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          size={"xs"}
                          className="min-w-[5rem]"
                          onClick={() => {
                            setViews(book);
                            setOpenModal(true);
                          }}
                        >
                          View
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
          <div className="flex justify-end px-6">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={paginationData?.page_count || 1}
              onPageChange={(page) => onPageChange(page)}
              showIcons
              className=""
            />
          </div>
        )}
      </div>
    </>
  );
};
export default FindBook;
