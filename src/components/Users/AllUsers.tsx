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
    <div className="bg-slate-300 p-4 relative rounded-sm min-h-custom2">
      <div className=" flex justify-between">
        <SearchUser />
        <FilterUser />
      </div>
      <hr className="text-slate-700 my-3" />

      <div className="grid grid-cols-4  mt-5">
        <div className="grid  font-bold  text-md justify-center ">Name</div>
        <div className="grid font-bold  text-md justify-center ">Email</div>
        <div className="grid font-bold  text-md justify-center ">Status</div>
        <div className="grid font-bold  text-md justify-center ">Role</div>
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

      {userLists.result.length > 0 && (
        <div className="flex  justify-center absolute left-0 right-0 bottom-4">
          <UserPagination numberOfPage={numberOfPage} />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
