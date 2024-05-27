"use client";

import { useSession } from "next-auth/react";
import Buttons from "../Buttons";
import TextEditor from "./TextEditor";
import { Alert } from "@mui/material";
import Link from "next/link";
import UnAuthorizedStatus from "../UnAuthorizedStatus";
import { useState } from "react";
import DargDromImageUploader from "./DargDromImageUploader";
import { Category } from "../../../types/type";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PostSidebar from "./PostSidebar";

const CreatePost = ({ cateLists }: { cateLists: Category[] }) => {
  const { data: session, status } = useSession();
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className=" min-h-custom  ">
      <div className=" relative">
        <div className="flex justify-end px-10 py-10">
          <Buttons
            onClick={() => setOpen(!open)}
            className="bg-topBar text-white font-semibold px-4 py-2"
          >
            Option
          </Buttons>
        </div>
        <>
          <PostSidebar
            open={open}
            setOpen={setOpen}
            cateLists={cateLists}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </>
        <div className="px-10 py-10 ">
          {status === "authenticated" ? (
            <>
              {" "}
              <form action="">
                <div>
                  <label htmlFor=""></label>
                  <input
                    placeholder="Enter title"
                    className="w-full py-2 px-2 text-4xl rounded-sm border-b-2  border-slate-600 outline-none"
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
      </div>
    </div>
  );
};

export default CreatePost;
