"use client";

import { useHeaderContext } from "@/contextapi/contxtApi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
const ToggleIcon = () => {
  const { open, setOpen } = useHeaderContext();
  return (
    <>
      <button
        className="text-white flex gap-1 items-center"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <></>
        ) : (
          <>
            <IoMenu className="text-2xl text-white" />
          </>
        )}
      </button>
    </>
  );
};

export default ToggleIcon;
