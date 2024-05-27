import PostLists from "@/components/Posts/AllPosts";
import React from "react";
import { fetchAllPosts } from "../../../../action/fetchAllPosts copy";

const Posts = async () => {
  const post = await fetchAllPosts();

  return (
    <div className="p-4">
      <PostLists post={post} />
    </div>
  );
};

export default Posts;
