import Image from "next/image";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper, BsWhatsapp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-12 px-4 fixed bottom-0 bg-white flex gap-4 items-center justify-between mt-16 border-t-[.5px] border-blue-300">
      <Link passHref href={"/home"}>
        <span className="text-2xl text-blue-300">
          <AiOutlineHome />
        </span>
      </Link>

      <Link passHref href={"/pengumanAcara"}>
        <span className="text-2xl text-blue-300">
          <BsNewspaper />
        </span>
      </Link>

      <Link passHref href={"/about"}>
        <div className="rotateIn w-12 h-12 bg-blue-300 -mt-12 flex"></div>
      </Link>

      <Link passHref href={"/contact"}>
        <span className="text-2xl text-blue-300 ">
          <BsWhatsapp />
        </span>
      </Link>

      <span className="text-2xl text-blue-300 ">
        <Link href={"/profile"} passHref>
          <FaRegUser />
        </Link>
      </span>
    </div>
  );
};

export default Footer;
