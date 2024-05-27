"use server";
import { PrismaCli } from "../prismaCli/prismaClient";
import { revalidatePath } from "next/cache";
import { Category } from "../types/type";

export const addNewCategory = async (formData: Category) => {
  console.log(formData);

  try {
    await PrismaCli.category.create({ data: formData });
    revalidatePath("/post/add-post");

    return {
      message: "Category Added successfully",
    };
  } catch (err: any) {
    throw new Error("User Update failed");
  }
};
