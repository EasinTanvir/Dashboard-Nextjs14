import React from "react";
import fetchCategoryList from "../../../../../serverAction/fetchCategoryList";
import dynamic from "next/dynamic";
const CreatePost = dynamic(() => import("@/components/Posts/CreatePost"), {
  ssr: false,
});
const AddPost = async () => {
  const cateLists = await fetchCategoryList();
  return (
    <>
      <CreatePost cateLists={cateLists} />
    </>
  );
};

export default AddPost;
