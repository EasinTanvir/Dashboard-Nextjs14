"use client";
import { Children } from "../../types/type";
import SideBar from "./SideBar";
import { useHeaderContext } from "@/contextapi/contxtApi";

const MainContent = ({ children }: Children) => {
  const { open, setOpen } = useHeaderContext();
  return (
    <>
      <SideBar open={open} setOpen={setOpen} />
      <div
        className={`flex-1 max-w-full overflow-x-auto   transition-all duration-200  ${
          open ? "md:ml-12 ml-0" : "lg:ml-52 md:ml-12 ml-0"
        }`}
      >
        {children}
      </div>
      ;
    </>
  );
};

export default MainContent;
