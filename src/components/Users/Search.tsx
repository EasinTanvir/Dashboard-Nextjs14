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
        className="bg-transparent py-1 px-6 sm:w-52 w-full placeholder:to-white sm:text-white text-slate-700 outline-none  border-b-2 sm:border-white border-slate-700"
      />
      <FaSearch className="absolute left-0 top-0 bottom-1 m-auto sm:text-white text-slate-700" />
    </div>
  );
};

export default SearchUser;
