import CreatePost from "@/components/Posts/CreatePost";
import React from "react";
import fetchCategoryList from "../../../../../serverAction/fetchCategoryList";

const AddPost = async () => {
  const cateLists = await fetchCategoryList();
  return (
    <>
      <CreatePost cateLists={cateLists} />
    </>
  );
};

export default AddPost;
