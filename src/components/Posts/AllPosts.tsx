import React from "react";
import SearchUser from "../Users/Search";
import FilterUser from "../Users/FilterUser";

import { Post } from "../../../types/type";
import dynamic from "next/dynamic";
import UserPagination from "../Users/Pagination";

const PostItem = dynamic(() => import("./PostItem"), {
  ssr: false,
});

const AllPosts = ({
  post,
  totalPageNumber,
}: {
  post: any;
  totalPageNumber: number;
}) => {
  const numberOfPage = Array.from({ length: totalPageNumber }, (_, i) => i + 1);
  return (
    <div className=" sm:p-4 p-0 relative rounded-sm min-h-custom3 max-h-custom3 overflow-y-auto">
      <div className=" flex flex-row   gap-2  p-2 sm:px-5 px-2 rounded-sm  justify-between">
        <SearchUser />
        <FilterUser text="Post Per Page" />
      </div>
      <hr className="text-slate-700 my-3" />
      <div className="flex flex-col gap-2 pt-10">
        {post.map((item: any) => (
          <PostItem key={item.id} {...item} />
        ))}
      </div>
      <div className="fixed bottom-2 flex justify-center left-0 right-0">
        <UserPagination numberOfPage={numberOfPage} />
      </div>
    </div>
  );
};

export default AllPosts;
