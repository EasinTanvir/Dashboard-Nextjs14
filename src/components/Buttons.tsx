import React from "react";
import { ButtonProps } from "../../types/type";

const Buttons = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-1 rounded-md hover:opacity-80 transition-opacity`}
    >
      {children}
    </button>
  );
};

export default Buttons;
