import React from "react";
import { FaSearch } from "react-icons/fa";
import { fetchUser } from "../../../action/fetchUser";
import UserList from "./UserList";
import FilterUser from "./FilterUser";
import { User } from "../../../types/type";
import UserPagination from "./Pagination";

type Filter = {
  filter: string;
  page: string;
};

const AllUsers = async ({ filter, page }: Filter) => {
  const userLists = await fetchUser(filter, page);
  const pageNum = Number(userLists.totalPages);

  const numberOfPage = Array.from({ length: pageNum }, (_, i) => i + 1);

  return (
    <div className="bg-slate-300 p-4 rounded-sm">
      <div className=" flex justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="search here"
            className="bg-transparent px-6 w-52 placeholder:to-white text-black outline-none  border-b-2 border-slate-800"
          />
          <FaSearch className="absolute left-0 top-0 bottom-3 m-auto text-slate-500" />
        </div>
        <FilterUser />
      </div>
      <hr className="text-slate-700 my-3" />

      <div className="grid grid-cols-4  mt-5">
        <div className="grid  font-bold  text-md justify-center ">Name</div>
        <div className="grid font-bold  text-md justify-center ">Email</div>
        <div className="grid font-bold  text-md justify-center ">Status</div>
        <div className="grid font-bold  text-md justify-center ">Role</div>
      </div>
      {userLists.result.map((item: User) => (
        <UserList key={item.id} {...item} />
      ))}

      <div className="flex justify-center">
        <UserPagination numberOfPage={numberOfPage} />
      </div>
    </div>
  );
};

export default AllUsers;
