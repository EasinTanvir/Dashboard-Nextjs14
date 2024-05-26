import React from "react";
import AvatarHeader from "./AvatarHeader";
import { FaHome } from "react-icons/fa";
import ToggleIcon from "./ToggleIcon";

const Header = () => {
  return (
    <header className="bg-topBar z-50 h-14 flex items-center sticky top-0">
      <div className="px-4 flex w-full justify-between ">
        <div className="flex gap-3 items-center">
          <div className="md:hidden flex ">
            <ToggleIcon />
          </div>
          <div className=" flex gap-1 items-center">
            <FaHome className="text-xl text-white" />
            <span className="font-semibold text-sm text-white">Visit Site</span>
          </div>
        </div>
        <AvatarHeader />
      </div>
    </header>
  );
};

export default Header;
