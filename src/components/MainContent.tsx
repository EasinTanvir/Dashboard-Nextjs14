"use client";
import { useState } from "react";
import { Children } from "../../types/type";
import SideBar from "./SideBar";

const MainContent = ({ children }: Children) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SideBar open={open} setOpen={setOpen} />
      <div
        className={`flex-1 transition-all duration-200  ${
          open ? "ml-12" : "ml-52"
        }`}
      >
        {children}
      </div>
      ;
    </>
  );
};

export default MainContent;
