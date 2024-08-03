import React from "react";
import { fetchUser } from "../../../action/fetchUser";
import UserList from "./UserList";
import FilterUser from "./FilterUser";
import { User } from "../../../types/type";
import UserPagination from "./Pagination";
import SearchUser from "./Search";
import Alert from "@mui/material/Alert";

type Filter = {
  filter?: string;
  page?: string;
  searchTerm?: string;
};

const AllUsers = async ({ filter, page, searchTerm }: Filter) => {
  const userLists = await fetchUser(filter, page, searchTerm);
  const pageNum = Number(userLists.totalPages);

  const numberOfPage = Array.from({ length: pageNum }, (_, i) => i + 1);

  return (
    <div className=" sm:p-4 p-0 relative rounded-sm min-h-custom2">
      <div className=" flex flex-row  gap-2  p-2 sm:px-5 px-2 rounded-sm  justify-between">
        <SearchUser />
        <FilterUser text="User Per Page" />
      </div>
      <hr className="text-slate-700 my-3" />

      <div className=" max-w-full overflow-x-auto sm:mb-5 mb-12 ">
        <div className="grid md:grid-cols-4 grid-cols-200px mt-5">
          <div className="grid  font-bold  text-md md:justify-center justify-start ">
            Name
          </div>
          <div className="grid font-bold  text-md md:justify-center justify-start ">
            Email
          </div>
          <div className="grid font-bold  text-md md:justify-center justify-start ">
            Status
          </div>
          <div className="grid font-bold  text-md md:justify-center justify-start ">
            Action
          </div>
        </div>

        <>
          {userLists.result.length > 0 ? (
            <>
              {userLists.result.map((item: User) => (
                <UserList key={item.id} {...item} />
              ))}
            </>
          ) : (
            <>
              <div className="w-full min-h-96 flex justify-center items-center">
                <Alert severity="warning">No User Found</Alert>
              </div>
            </>
          )}
        </>
      </div>
      {userLists.result.length > 0 && (
        <div className="flex  justify-center absolute left-0 right-0 bottom-4">
          <UserPagination numberOfPage={numberOfPage} />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
