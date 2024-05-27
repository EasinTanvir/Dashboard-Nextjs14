import { PrismaCli } from "../prismaCli/prismaClient";

export const fetchAllPosts = async (
  filter?: string,
  page?: string,
  searchTerm?: string
) => {
  const filterNum = Number(filter);
  const postsPerPage = (filterNum > 6 ? 6 : filterNum) || 4;
  const currentPage = Number(page) || 1;

  let searchQury = searchTerm ? searchTerm : "";

  const totalPost = await PrismaCli.posts.count({
    where: {
      OR: [
        { title: { contains: searchQury, mode: "insensitive" } },
        { desc: { contains: searchQury, mode: "insensitive" } },
      ],
    },
  });
  //totalPageNumber
  const totalPageNumber = Math.ceil(totalPost / postsPerPage);
  //skipPosts
  const skipPosta = postsPerPage * (currentPage - 1);

  try {
    const allPost = await PrismaCli.posts.findMany({
      where: {
        OR: [
          { title: { contains: searchQury, mode: "insensitive" } },
          { desc: { contains: searchQury, mode: "insensitive" } },
        ],
      },
      take: postsPerPage,
      skip: skipPosta,
    });

    return { allPost, totalPageNumber };
  } catch (err: any) {
    throw new Error("Fetch User Failed");
  }
};
