import api from "@/utils/api";
import React from "react";
import { Search } from "../../types/type";
import LineGraph from "@/linegraph/LineGraph";
import PostLineGraph from "@/components/Posts/PostLineGraph";

const Home = async ({ searchParams }: Search) => {
  let result, postResult;
  const searchQuery = searchParams?.days ? searchParams.days : 7;
  try {
    result = await api.get(`/api/user/?test=${searchQuery}`);
  } catch (err) {
    console.log(err);
  }

  // const postQuery = searchParams?.posts ? searchParams.posts : 7;

  // try {
  //   postResult = await api.get(`/api/posts/?posts=${postQuery}`);
  // } catch (err) {
  //   console.log(err);
  // }

  return (
    <div className="min-h-custom bg-white  p-4 ">
      {/* <div className="sm:w-[900px] w-[350px] ">
        <PostLineGraph result={postResult?.data} />
      </div> */}

      <hr className="my-10" />
      <div className="sm:w-[900px] w-[350px] ">
        <LineGraph result={result?.data} />
      </div>
    </div>
  );
};

export default Home;
