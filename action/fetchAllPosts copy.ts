import { PrismaCli } from "../prismaCli/prismaClient";

export const fetchAllPosts = async () => {
  try {
    const result = await PrismaCli.posts.findMany();

    return result;
  } catch (err: any) {
    throw new Error("Fetch User Failed");
  }
};
