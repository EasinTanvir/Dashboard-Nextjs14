"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
const FilterUser = ({ text }: { text: string }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const open = Boolean(anchorEl);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event: any, value: any) => {
    setSelectedValue(value);
    handleClose();
  };

  useEffect(() => {
    if (!selectedValue) return;

    params.set("filter", selectedValue);
    params.set("page", "1");
    router.push(`${pathname}?${params}`);
  }, [selectedValue]);

  return (
    <div className="flex-1  flex justify-end ">
      <Tooltip title="Show User Per Page">
        <button
          className="bg-teal-600 hover:text-slate-200 sm:text-white  px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Filter
        </button>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem value={2} onClick={(event) => handleMenuItemClick(event, 2)}>
          <span> 2 {text}</span>
        </MenuItem>
        <MenuItem value={4} onClick={(event) => handleMenuItemClick(event, 4)}>
          <span> 4 {text}</span>
        </MenuItem>
        <MenuItem value={6} onClick={(event) => handleMenuItemClick(event, 6)}>
          <span> 6 {text}</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterUser;
