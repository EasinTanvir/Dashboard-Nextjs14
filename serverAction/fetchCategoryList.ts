import { PrismaCli } from "../prismaCli/prismaClient";

const fetchCategoryList = async () => {
  try {
    const res = await PrismaCli.category.findMany();

    return res;
  } catch (err: any) {
    throw new Error("SomeThing went wrong");
  }
};

export default fetchCategoryList;
