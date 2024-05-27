"use client";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Buttons from "../Buttons";
import Modals from "../Modals";
import { User } from "../../../types/type";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserButton = ({ item }: { item: User }) => {
  const { data: session, status } = useSession();

  const [open, setOpen] = useState(false);
  const onEditHandler = () => {
    setOpen(true);
  };
  const onDeleteHandler = () => {};
  //@ts-ignore
  const userStatus = session?.user?.status;
  return (
    <>
      {status === "authenticated" && userStatus === "ADMIN" ? (
        <>
          <div className="flex gap-1 justify-center ">
            <Buttons
              onClick={onEditHandler}
              className="bg-teal-500  text-white "
            >
              Edit
            </Buttons>{" "}
            <Buttons
              onClick={onDeleteHandler}
              className="bg-rose-700  text-white "
            >
              Delete
            </Buttons>
          </div>
          <Modals setOpen={setOpen} open={open} item={item} />
        </>
      ) : status === "authenticated" && userStatus !== "ADMIN" ? (
        <>
          <Tooltip title="Only Admin and Editor Can Take Action">
            <div className=" w-full flex justify-center  mx-auto">
              <Buttons
                onClick={onDeleteHandler}
                className="bg-rose-700  text-white "
              >
                Action
              </Buttons>
            </div>
          </Tooltip>
        </>
      ) : (
        <>
          <Link href="/auth" className=" w-full flex justify-center  mx-auto">
            <Buttons
              onClick={onDeleteHandler}
              className="bg-rose-700  text-white "
            >
              Unauthorized
            </Buttons>
          </Link>
        </>
      )}
    </>
  );
};

export default UserButton;
