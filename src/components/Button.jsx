import React from "react";
import { MdReadMore } from "react-icons/md";

const Button = ({ children, ...other }) => {
  return (
    <button
      {...other}
      className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-200 hover:text-gray-800 ease-in-out duration-300 hover:border-gray-800 hover:shadow-violet-500 hover:shadow-sm self-center font-normal"
    >
      <span>{children}</span>
      <MdReadMore />
    </button>
  );
};

export default Button;
