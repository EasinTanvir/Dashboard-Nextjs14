import AllUsers from "@/components/Users/AllUsers";
import React from "react";
import { Search } from "../../../../types/type";

const Users = ({ searchParams }: Search) => {
  return (
    <div className="p-4  ">
      {/* @ts-ignore */}
      <AllUsers filter={searchParams?.filter} page={searchParams?.page} />
    </div>
  );
};

export default Users;
