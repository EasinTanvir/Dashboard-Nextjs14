"use client";

import { useState } from "react";
import Buttons from "../Buttons";
import Modals from "../Modals";
import { User } from "../../../types/type";

const UserButton = ({ item }: { item: User }) => {
  const [open, setOpen] = useState(false);
  const onEditHandler = () => {
    setOpen(true);
  };
  const onDeleteHandler = () => {};
  return (
    <>
      <div className="flex gap-1 justify-center ">
        <Buttons onClick={onEditHandler} className="bg-teal-500  text-white ">
          Edit
        </Buttons>{" "}
        <Buttons onClick={onDeleteHandler} className="bg-rose-700  text-white ">
          Delete
        </Buttons>
      </div>
      <Modals setOpen={setOpen} open={open} item={item} />
    </>
  );
};

export default UserButton;
