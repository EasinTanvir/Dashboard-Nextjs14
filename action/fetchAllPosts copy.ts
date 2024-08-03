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

export const allPosts = async () => {
  try {
    const count = await PrismaCli.posts.count();
    const allPost = await PrismaCli.posts.findMany();

    // Group by date and count occurrences
    const groupedData = allPost.reduce((acc, post) => {
      // Format date to YYYY-MM-DD
      const dateKey = new Date(post.time).toISOString().split("T")[0];

      //@ts-ignore
      if (!acc[dateKey]) {
        //@ts-ignore
        acc[dateKey] = { ...post, count: 1 };
      } else {
        //@ts-ignore
        acc[dateKey].count += 1;
      }

      return acc;
    }, {});

    // Convert groupedData object to an array of objects
    const result = Object.values(groupedData);

    return { allPost: result, count };
  } catch (err: any) {
    throw new Error("Fetch User Failed");
  }
};
