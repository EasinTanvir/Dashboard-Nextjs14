"use server";
import { PrismaCli } from "../prismaCli/prismaClient";
import { revalidatePath } from "next/cache";
import { getServerCredentials } from "../session/serverSesseion";

export const deleteCategoryAction = async (formData: any) => {
  const session = await getServerCredentials();

  //@ts-ignore
  if (session?.user.status === "GUEST") {
    return {
      error: "Sorry Guest are not allowed to delete",
    };
  }
  if (!session) {
    return {
      error: "Unauthenticated",
    };
  }

  const result = formData.map((item: any) => ({ id: item }));

  try {
    await PrismaCli.category.deleteMany({
      where: {
        OR: result,
      },
    });
    revalidatePath("/post");

    return {
      message: "Delete Category successfully",
    };
  } catch (err: any) {
    return {
      error: "Category delete failed",
    };
  }
};
