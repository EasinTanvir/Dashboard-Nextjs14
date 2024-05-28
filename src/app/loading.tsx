"use client";
import React from "react";
import { Blocks } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="bg-slate-300 min-h-custom flex justify-center items-center ">
      <Blocks
        height="50"
        width="45"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
      <span className="text-rose-700 font-semibold">Please Wait...</span>
    </div>
  );
};

export default Loading;
