"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const SearchUser = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const debouncedSearchHandler = useDebouncedCallback((data: string) => {
    if (!data || data === "") {
      params.delete("searchterm");
    } else {
      params.set("searchterm", data);
    }

    router.push(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className="relative  flex-1   ">
      <input
        onChange={(e) => debouncedSearchHandler(e.target.value)}
        type="text"
        placeholder="search here"
        className="bg-transparent py-2 px-10 text-lg md:w-60 w-full placeholder:to-white  text-slate-700 outline-none  border-b-2  border-slate-700"
      />
      <FaSearch className="absolute text-xl left-0 top-1 bottom-0 m-auto  text-slate-700" />
    </div>
  );
};

export default SearchUser;
