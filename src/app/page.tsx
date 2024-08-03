import api from "@/utils/api";
import React, { Suspense } from "react";
import { Search } from "../../types/type";
import LineGraph from "@/linegraph/LineGraph";
import PostLineGraph from "@/components/Posts/PostLineGraph";
import ClientOverView from "@/components/overView/ClientOverView";
import Graph from "@/components/Posts/PostLineGraph";
import { allPosts } from "../../action/fetchAllPosts copy";
import { fetchUser } from "../../action/fetchUser";
import Loaders from "@/components/Users/Loaders";

const Home = async ({ searchParams }: Search) => {
  const { allPost, count } = await allPosts();
  const { count: userCount } = await fetchUser();

  return (
    <Suspense fallback={<Loaders />}>
      <div className="min-h-custom bg-white  py-4 sm:px-10 px-4 ">
        <div className="pt-5 pb-20">
          <ClientOverView count={count} userCount={userCount} />
        </div>
        <h1 className={`sm:text-3xl text-2xl  font-semibold py-4 `}>
          Post Analaysis
        </h1>
        <div className="sm:w-[900px] w-[350px] ">
          <Graph myUrlList={allPost} />
        </div>

        <hr className="my-10" />
        <h1 className={`sm:text-3xl text-2xl  font-semibold py-4 `}>
          Product Analaysis
        </h1>
        <div className="sm:w-[900px] w-[350px] relative ">
          <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
            <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
              No Data For The Product Yet
            </h1>
            <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
              Add New Product to view the Analaysis
            </h3>
          </div>
          <LineGraph />
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
