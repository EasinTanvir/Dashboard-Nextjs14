import React from "react";
import { User } from "../../../types/type";

const UserList = (item: User) => {
  return (
    <div className="grid grid-cols-4  my-5">
      <div className="grid text-md justify-center ">{item.username}</div>
      <div className="grid text-md justify-center ">{item.email}</div>
      <div className="grid text-md justify-center ">{item.status}</div>
      <div className="flex gap-1 justify-center ">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default UserList;
