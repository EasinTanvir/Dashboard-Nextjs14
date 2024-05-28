import React, { Suspense } from "react";
import PostLists from "@/components/Posts/AllPosts";
import { fetchAllPosts } from "../../../../action/fetchAllPosts copy";
import { Search } from "../../../../types/type";
import Loaders from "@/components/Users/Loaders";

const Posts = async ({ searchParams }: Search) => {
  const { allPost, totalPageNumber } = await fetchAllPosts(
    searchParams.filter,
    searchParams.page,
    searchParams.searchterm
  );

  return (
    <div className="sm:px-4 py-4 px-1">
      <Suspense fallback={<Loaders />}>
        <PostLists post={allPost} totalPageNumber={totalPageNumber} />
      </Suspense>
    </div>
  );
};

export default Posts;
