import {
  TextInput,
  Dropdown,
  Label,
  Button,
  Table,
  Pagination,
} from "flowbite-react";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";
import toastDefault from "../../../../data/toastDefault";
import Swal from "sweetalert2";
import { IoMdSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserTable = () => {
  const [search] = useSearchParams();
  const [accountStatus, setAccountStatus] = useState("active");
  const [paginationData, setPaginationData] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(search.get("page") || 1);
  const [users, setUsers] = useState();
  const axiosPrivateInstance = useAxios();
  const navigate = useNavigate();

  // page changing function
  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate("?page=" + page);
  };

  // load users based on user status
  const loadUsers = useCallback(async () => {
    setUsers();
    await axiosPrivateInstance
      .post("/admin/users/", {
        status: accountStatus,
        page: currentPage,
        search: searchKeyword,
      })
      .then((response) => {
        if (response?.status === 200) {
          setUsers(response?.data?.users);
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
  }, [setUsers, accountStatus, currentPage, searchKeyword]);

  // update user status
  const changeUserStatus = async (status, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action affected to selected user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const id = toast.loading("Please wait...", toastDefault);
        await axiosPrivateInstance
          .post("/admin/users/update/", { status: status, email: email })
          .then((response) => {
            if (response?.status === 200) {
              toast.update(id, {
                ...toastDefault,
                render: "Update successful",
                type: "success",
                isLoading: false,
                closeButton: true,
              });

              loadUsers();
            }
          })
          .catch((error) => {
            toast.update(id, {
              ...toastDefault,
              render: "Something went wrong",
              type: "error",
              isLoading: false,
              closeButton: true,
            });
            navigate("/login");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast("Account status change canceled", {
          ...toastDefault,
          type: "info",
          isLoading: false,
          closeButton: true,
        });
      }
    });
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers, accountStatus, currentPage, searchKeyword]);

  return (
    <section className="w-full p-0 md:p-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative">
          {/* heading section */}
          <div className="flex flex-col items-center justify-between space-y-3 px-2 py-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full lg:w-1/2">
              {/* search */}
              <TextInput
                type="text"
                sizing={"sm"}
                icon={IoMdSearch}
                placeholder="Search users by name or email"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="inputs flex w-full md:me-5"
                required
              />
            </div>
            <div className="flex w-full flex-shrink-0 items-center justify-start space-x-4 space-y-2 md:w-auto md:items-center md:space-x-3 md:space-y-0">
              {/* account status dropdown */}
              <Label htmlFor="status">Account Status</Label>
              <div className="flex w-[8rem] justify-center rounded-md !bg-transparent py-1 ring-1 ring-slate-500 dark:ring-slate-500">
                <Dropdown
                  id="status"
                  label={<span className="capitalize">{accountStatus}</span>}
                  size={"xs"}
                  inline
                  placement="bottom-end"
                >
                  <Dropdown.Item onClick={() => setAccountStatus("active")}>
                    Active
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setAccountStatus("disabled")}>
                    Disabled
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
          {/* table section */}
          <div className="overflow-x-auto p-2">
            <Table
              hoverable
              className="rounded-lg ring-1 ring-gray-300 dark:ring-gray-600"
            >
              {/* table heading */}
              <Table.Head>
                <Table.HeadCell className="bg-gray-300">Name</Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">Email</Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">
                  Birth Day
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">
                  Total Reviews
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-300">Action</Table.HeadCell>
              </Table.Head>
              {/* table body */}
              {users &&
                users?.map((user, key) => {
                  return (
                    <Table.Body
                      key={key}
                      className="divide-y border-b dark:border-gray-700"
                    >
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium">
                          {user?.name}
                        </Table.Cell>
                        <Table.Cell> {user?.email}</Table.Cell>
                        <Table.Cell> {user?.birth_date}</Table.Cell>
                        <Table.Cell>{user?.review_user}</Table.Cell>
                        <Table.Cell>
                          <Button
                            size={"xs"}
                            className="min-w-[5rem]"
                            onClick={() =>
                              changeUserStatus(
                                accountStatus === "active"
                                  ? "deactivate"
                                  : "active",
                                user?.email,
                              )
                            }
                          >
                            {accountStatus === "active"
                              ? "Deactivate"
                              : "Active"}
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  );
                })}
            </Table>
          </div>
          {/* footer section */}
          <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
            {/* total record count */}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                {paginationData?.start ?? 0} - {paginationData?.end ?? 0}
              </span>
              of
              <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                {paginationData?.count ?? 0}
              </span>
            </span>
            {/* pagination */}
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={paginationData?.page_count || 1}
              onPageChange={(page) => onPageChange(page)}
              showIcons
            />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserTable;
