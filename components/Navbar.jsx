import React, { useState } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = ({ title = "title", back = "/home", buttonBack = false }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      className={`w-full h-12 p-4  shadow-md flex items-center ${
        buttonBack ? "justify-between" : "justify-center"
      }   z-20`}
    >
      {buttonBack && (
        <Link href={back} passHref>
          <span className="text-xl cursor-pointer">
            <BsArrowLeft />
          </span>
        </Link>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="bg-transparent"></div>
    </div>
  );
};

export default Navbar;
