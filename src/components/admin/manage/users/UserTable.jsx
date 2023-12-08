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
import tostDefault from "../../../../data/tostDefault";

const UserTable = () => {
  const [accountStatus, setAccountStatus] = useState("active");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState();
  const axiosPrivateInstance = useAxios();
  // page changing function
  const onPageChange = (page) => setCurrentPage(page);

  const loadUsers = useCallback(async () => {
    setUsers();
    await axiosPrivateInstance
      .post("/admin/users", { status: accountStatus })
      .then((response) => {
        if (response?.status === 200) {
          setUsers(response?.data);
        }
      })
      .catch((error) => {
        toast("Something went wrong", {
          ...tostDefault,
          type: "error",
          isLoading: false,
          closeButton: true,
        });
      });
  }, [setUsers, accountStatus]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers, accountStatus]);

  return (
    <section className="w-full p-0 md:p-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative">
          {/* heading section */}
          <div className="flex flex-col items-center justify-between space-y-3 py-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full lg:w-1/2">
              {/* search */}
              <TextInput
                type="text"
                sizing={"sm"}
                placeholder="Search users..."
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
          <Table
            striped
            hoverable
            className="rounded-lg ring-1 ring-gray-300 dark:ring-gray-600"
          >
            {/* table heading */}
            <Table.Head>
              <Table.HeadCell className="bg-gray-300">Name</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Email</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Birth Day</Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">
                Total Reviews
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-300">Action</Table.HeadCell>
            </Table.Head>
            {/* table body */}
            {users &&
              users?.map((user, key) => {
                return (
                  <Table.Body key={key} className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium">
                        {user?.name}
                      </Table.Cell>
                      <Table.Cell> {user?.email}</Table.Cell>
                      <Table.Cell> {user?.birth_date}</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>
                        <Button size={"xs"} className="min-w-[5rem]">
                          Active
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                );
              })}
          </Table>
          {/* footer section */}
          <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
            {/* total record count */}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                1 - 10
              </span>
              of
              <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            {/* pagination */}
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={100}
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
