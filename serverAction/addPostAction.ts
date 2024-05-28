"use server";
import { PrismaCli } from "../prismaCli/prismaClient";
import { revalidatePath } from "next/cache";
import { Post } from "../types/type";
import { getServerCredentials } from "../session/serverSesseion";

export const addPostAction = async (formData: any) => {
  const session = await getServerCredentials();
  if (!session) {
    return {
      message: "Unauthorized access",
    };
  }

  const currentDate = new Date();

  const sendData = {
    title: formData.title,
    desc: formData.desc,
    image: formData.image,
    time: currentDate,
    //@ts-ignore
    userId: session.user.id,
  };

  try {
    await PrismaCli.posts.create({ data: sendData });
    revalidatePath("/post");

    return {
      message: "Post create successful",
    };
  } catch (err: any) {
    return {
      message: "Post create successful",
    };
  }
};
