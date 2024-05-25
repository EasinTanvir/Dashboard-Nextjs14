"use server";
import { PrismaCli } from "../prismaCli/prismaClient";
import { revalidatePath } from "next/cache";

export const updateUser = async (formData: any, id: string) => {
  try {
    console.log(formData);
    await PrismaCli.user.update({
      where: { id },
      data: formData,
    });
    revalidatePath("/user");

    return {
      message: "User Update Success",
    };
  } catch (err: any) {
    throw new Error("User Update failed");
  }
};
