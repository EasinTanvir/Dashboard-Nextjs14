"use client";
import React, { useEffect } from "react";
import Input from "../Users/Input";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import api from "@/utils/api";
import toast from "react-hot-toast";
import SubmitButton from "../Users/SubmitButton";
import { Category } from "../../../types/type";
import Buttons from "../Buttons";
import CategoryList from "./CategoryList";
import { addNewCategory } from "../../../serverAction/addCategoryAction";
import slugify from "slugify";

const AddCategory = ({ cateLists }: { cateLists: Category[] }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    setValue,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      dirtyFields,
      isDirty,
      isValid,
    },
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
    },
    mode: "onTouched",
  });

  const categoryValue = useWatch({
    control,
    name: "name",
  });

  useEffect(() => {
    if (categoryValue) {
      setValue("slug", slugify(categoryValue, { lower: true }));
    }
  }, [categoryValue, setValue]);

  const onSubmitHandler: SubmitHandler<Category> = async (datas: Category) => {
    console.log(datas);

    try {
      const res = await addNewCategory(datas);

      reset();
      toast.success(res.message);
    } catch (err: any) {
      toast.error("Category Added Failed");
    }
  };
  const lists = [];

  return (
    <div className="min-h-custom  w-full flex md:flex-row flex-col  sm:gap-10 gap-0 md:p-4 p-1">
      <div className=" flex-1   ">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="sm:w-full w-fit md:p-4 p-3"
        >
          <h1 className=" text-xl font-bold   text-topBar">Add New Category</h1>
          <hr className="my-4" />
          <div className="flex flex-col gap-6">
            <Input
              label="Category Name"
              type="text"
              id="name"
              placeholder="type category name"
              errors={errors}
              required
              className="text-topBar  w-72"
              register={register}
              message="Category name is required"
            />
            <Input
              label="Slug"
              id="slug"
              errors={errors}
              required
              type="text"
              className="text-topBar w-72"
              placeholder="slug will generate automatically"
              register={register}
              message="Slug is required"
            />
          </div>
          <SubmitButton isSubmitting={isSubmitting}>Add category</SubmitButton>
        </form>
      </div>
      <div className="flex-1">
        <CategoryList cateLists={cateLists} />
      </div>
    </div>
  );
};

export default AddCategory;
