"use client";
import React from "react";
import { Blocks } from "react-loader-spinner";

const Loaders = () => {
  return (
    <div className="bg-slate-300 min-h-custom flex justify-center items-center ">
      <Blocks
        height="30"
        width="25"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loaders;
