import { PrismaCli } from "../prismaCli/prismaClient";

export const fetchUser = async (filter: string, page?: string) => {
  const filterNum = Number(filter);
  const postsPerPage = (filterNum > 6 ? 6 : filterNum) || 5;
  const currentPage = Number(page) || 1;

  const totalUsers = await PrismaCli.user.count();
  const skipUser = postsPerPage * (currentPage - 1);

  const totalPages = Math.ceil(totalUsers / postsPerPage);

  try {
    const result = await PrismaCli.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        status: true,
      },
      take: postsPerPage,
      skip: skipUser,
    });

    return { result, totalPages };
  } catch (err: any) {
    throw new Error("Fetch User Failed");
  }
};
