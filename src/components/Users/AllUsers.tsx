import React from "react";
import { FaSearch } from "react-icons/fa";

const AllUsers = () => {
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
        <button className="bg-teal-600 hover:text-slate-200 text-white px-4 py-2 rounded-md">
          Filter
        </button>
      </div>
      <hr className="text-slate-700 my-3" />

      <div className="grid grid-cols-4  mt-5">
        <div className="grid  font-bold  text-md justify-center ">Name</div>
        <div className="grid font-bold  text-md justify-center ">Email</div>
        <div className="grid font-bold  text-md justify-center ">Status</div>
        <div className="grid font-bold  text-md justify-center ">Action</div>
      </div>
      <div className="grid grid-cols-4  my-5">
        <div className="grid text-md justify-center ">Easin</div>
        <div className="grid text-md justify-center ">easin@gamil.com</div>
        <div className="grid text-md justify-center ">Active</div>
        <div className="flex gap-1 justify-center ">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="">helo</div>
    </div>
  );
};

export default AllUsers;
