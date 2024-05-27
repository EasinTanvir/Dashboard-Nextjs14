"use client";

import { useSession } from "next-auth/react";
import Buttons from "../Buttons";
import TextEditor from "./TextEditor";
import { Alert } from "@mui/material";
import Link from "next/link";
import UnAuthorizedStatus from "../UnAuthorizedStatus";
import { useState } from "react";
import DargDromImageUploader from "./DargDromImageUploader";
import { Category, Post } from "../../../types/type";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PostSidebar from "./PostSidebar";
import { addPostAction } from "../../../serverAction/addPostAction";
import toast from "react-hot-toast";
import { Blocks } from "react-loader-spinner";

const CreatePost = ({ cateLists }: { cateLists: Category[] }) => {
  const { data: session, status } = useSession();
  const [editValue, setEditorValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState("");
  const [featureImageUrl, setFeatureImageUrl] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const onSubmitHandler = async () => {
    if (!title) {
      return toast.error("Title is required");
    } else if (!editValue) {
      return toast.error("Short Description is required");
    } else if (!categoryValue) {
      return toast.error("Category is required");
    }
    //@ts-ignore
    setLoader(true);

    const sendData: Post = {
      title,
      desc: editValue,
      image: featureImageUrl,
    };
    try {
      const res = await addPostAction(sendData);
      toast.success(res.message);
      setEditorValue("");
      setTitle("");
      setCategoryValue("");
      setFeatureImageUrl("");
    } catch (err: any) {
      toast.success(err.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className=" min-h-custom  ">
      <div className=" relative">
        <div className="flex justify-end sm:p-10 p-2">
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
            selectedValue={categoryValue}
            setSelectedValue={setCategoryValue}
            featureImageUrl={featureImageUrl}
            setFeatureImageUrl={setFeatureImageUrl}
          />
        </>
        <div className="sm:p-10 p-2 ">
          {status === "authenticated" ? (
            <>
              {" "}
              <form action={onSubmitHandler}>
                <div>
                  <label htmlFor=""></label>
                  <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    className="w-full py-2 px-2 text-4xl rounded-sm border-b-2  border-slate-600 outline-none"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="min-h-fit sm:py-0 py-10">
                  <TextEditor value={editValue} setValue={setEditorValue} />
                </div>
                <Buttons className="bg-teal-700 py-2 px-6 font-semibold text-white mt-10">
                  {loader ? (
                    <Blocks
                      height="30"
                      width="25"
                      color="#4fa94d"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      visible={true}
                    />
                  ) : (
                    "Create Post"
                  )}
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
