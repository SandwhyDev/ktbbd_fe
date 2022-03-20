import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = ({ title = "title", back = "/home" }) => {
  return (
    <div className="w-full h-12 p-4  shadow-md flex items-center justify-between z-20">
      <Link href={back}>
        <span className="text-xl">
          <BsArrowLeft />
        </span>
      </Link>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div></div>
    </div>
  );
};

export default Navbar;
