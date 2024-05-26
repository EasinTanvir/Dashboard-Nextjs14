"use client";

import { useSession } from "next-auth/react";
import Buttons from "../Buttons";
import TextEditor from "./TextEditor";
import { Alert } from "@mui/material";
import Link from "next/link";
import UnAuthorizedStatus from "../UnAuthorizedStatus";

const CreatePost = () => {
  const { data: session, status } = useSession();
  return (
    <div className="px-10 py-10  min-h-custom  ">
      {status === "authenticated" ? (
        <>
          {" "}
          <form action="">
            <div>
              <label htmlFor=""></label>
              <input
                placeholder="Enter title"
                className="w-full py-2 px-2 rounded-sm border-b-2  border-slate-600 outline-none"
                type="text"
                name=""
                id=""
              />
            </div>

            <div className="my-4">
              <TextEditor />
            </div>
            <Buttons className="bg-teal-700 py-2 px-6 font-semibold text-white mt-10">
              Create Post
            </Buttons>
          </form>
        </>
      ) : (
        <>
          <UnAuthorizedStatus text="You Must Need to Login to Add New Post" />
        </>
      )}
    </div>
  );
};

export default CreatePost;
