import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = ({ title = "title" }) => {
  return (
    <div className="w-full h-12 p-4  shadow-md flex items-center justify-between">
      <span className="text-xl font-bold">
        <Link href={"/home"}>
          <BsArrowLeft />
        </Link>
      </span>
      <h1 className="text-lg font-semibold">{title}</h1>
      <h1 className="bg-transparent w-8"></h1>
    </div>
  );
};

export default Navbar;
