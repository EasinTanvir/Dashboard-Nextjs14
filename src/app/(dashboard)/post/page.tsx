import PostLists from "@/components/Posts/AllPosts";
import React from "react";
import { fetchAllPosts } from "../../../../action/fetchAllPosts copy";
import { Search } from "../../../../types/type";

const Posts = async ({ searchParams }: Search) => {
  const { allPost, totalPageNumber } = await fetchAllPosts(
    searchParams.filter,
    searchParams.page,
    searchParams.searchterm
  );

  return (
    <div className="sm:px-4 py-4 px-1">
      <PostLists post={allPost} totalPageNumber={totalPageNumber} />
    </div>
  );
};

export default Posts;
