import AddCategory from "@/components/Category/AddCategory";
import React from "react";
import fetchCategoryList from "../../../../../serverAction/fetchCategoryList";

const Category = async () => {
  const cateLists = await fetchCategoryList();

  return (
    <>
      <AddCategory cateLists={cateLists} />
    </>
  );
};

export default Category;
