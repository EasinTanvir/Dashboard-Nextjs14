import React from "react";
import AvatarHeader from "./AvatarHeader";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-topBar z-50 h-14 flex items-center sticky top-0">
      <Link href="/" className="px-4 flex w-full justify-between ">
        <div className="flex gap-1 items-center">
          <FaHome className="text-xl text-white" />
          <span className="font-semibold text-sm text-white">Visit Site</span>
        </div>
        <AvatarHeader />
      </Link>
    </header>
  );
};

export default Header;
