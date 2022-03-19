import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = ({ title = "title" }) => {
  return (
    <div className="w-full h-12 p-4  shadow-md flex items-center justify-center z-20">
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
};

export default Navbar;
