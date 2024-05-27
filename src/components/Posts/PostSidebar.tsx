import { useSession } from "next-auth/react";
import Buttons from "../Buttons";
import TextEditor from "./TextEditor";
import { Alert } from "@mui/material";
import Link from "next/link";
import UnAuthorizedStatus from "../UnAuthorizedStatus";
import { useState } from "react";
import DargDromImageUploader from "./DargDromImageUploader";
import { Category } from "../../../types/type";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const PostSidebar = ({
  open,
  setOpen,
  cateLists,
  selectedValue,
  setSelectedValue,
}: {
  open: any;
  setOpen: any;
  cateLists: any;
  selectedValue: any;
  setSelectedValue: any;
}) => {
  // Function to handle value change
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div
        className={`fixed transition-all duration-100  top-14 z-30 right-0 bg-topBar ${
          open ? "w-72 p-2" : "w-0 "
        } min-h-full max-h-full overflow-y-auto`}
      >
        {open && (
          <div className="flex justify-end px-1 py-1">
            <Buttons
              onClick={() => setOpen(!open)}
              className="bg-rose-700 text-sm text-white font-semibold px-4 py-2"
            >
              Close
            </Buttons>
          </div>
        )}

        <div className="mt-3">
          <h3 className="text-white text-xl">Add Featured Image</h3>
          <DargDromImageUploader />
        </div>
        <div className="mt-5">
          <FormControl
            sx={{
              m: 1,
              minWidth: 180,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          >
            <InputLabel
              className="text-white border-white"
              id="demo-simple-select-helper-label"
              sx={{
                color: "white", // Initial color
                "&.Mui-focused": {
                  color: "white", // Color when focused
                },
                "&.MuiInputLabel-shrink": {
                  color: "white", // Color when an option is selected (shrink state)
                },
              }}
            >
              Select Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedValue}
              label="Select Category"
              onChange={handleChange}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              {cateLists.map((item: any) => (
                <MenuItem key={item.id} value={item.slug}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default PostSidebar;
