import React from "react";
import SearchUser from "../Users/Search";
import FilterUser from "../Users/FilterUser";

import { Post } from "../../../types/type";
import dynamic from "next/dynamic";

const PostItem = dynamic(() => import("./PostItem"), {
  ssr: false,
});

const AllPosts = ({ post }: { post: any }) => {
  return (
    <div className=" sm:p-4 p-0 relative rounded-sm min-h-custom2">
      <div className=" flex flex-row   gap-2 sm:bg-topBar p-2 sm:px-5 px-2 rounded-sm  justify-between">
        <SearchUser />
        <FilterUser />
      </div>
      <hr className="text-slate-700 my-3" />
      <div className="flex flex-col gap-2">
        {post.map((item: any) => (
          <PostItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
