import React, { Suspense } from "react";
import AllUsers from "@/components/Users/AllUsers";
import { Search } from "../../../../types/type";
import dynamic from "next/dynamic";
const Loaders = dynamic(() => import("@/components/Users/Loaders"), {
  ssr: false,
});

const Users = ({ searchParams }: Search) => {
  return (
    <div className="p-4  ">
      <Suspense fallback={<Loaders />}>
        {/* @ts-ignore */}
        <AllUsers
          filter={searchParams?.filter}
          page={searchParams?.page}
          searchTerm={searchParams?.searchterm}
        />
      </Suspense>
    </div>
  );
};

export default Users;
