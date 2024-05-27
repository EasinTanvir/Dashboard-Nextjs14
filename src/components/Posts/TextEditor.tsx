"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import styles
import { modules, formats } from "@/utils/editor";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, setValue }: { value: any; setValue: any }) => {
  const handleChange = (content: string) => {
    setValue(content);
  };

  return (
    <>
      <ReactQuill
        className="h-72"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default TextEditor;
