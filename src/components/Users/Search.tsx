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
    <div className="relative">
      <input
        onChange={(e) => debouncedSearchHandler(e.target.value)}
        type="text"
        placeholder="search here"
        className="bg-transparent py-1 px-6 w-52 placeholder:to-white text-black outline-none  border-b-2 border-slate-800"
      />
      <FaSearch className="absolute left-0 top-0 bottom-1 m-auto text-slate-600" />
    </div>
  );
};

export default SearchUser;
