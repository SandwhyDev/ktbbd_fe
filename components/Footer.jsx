import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper, BsWhatsapp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { decodeToken } from "react-jwt";

const Footer = () => {
  const [isLogin, setIsLogin] = useState({
    login: false,
    userData: {},
  });

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      setIsLogin({
        login: true,
        userData: decodeToken(token),
      });
    }
  }, []);

  return (
    <div className=" w-full h-12 px-4 fixed bottom-0 bg-white flex gap-4 items-center justify-between mt-16 border-t-[.5px] border-blue-300 lg:px-[60px]">
      <Link passHref href={"/home"}>
        <span className="text-2xl cursor-pointer text-blue-300">
          <AiOutlineHome />
        </span>
      </Link>

      <Link passHref href={"/agenda"}>
        <span className="text-2xl cursor-pointer text-blue-300">
          <BsNewspaper />
        </span>
      </Link>

      <Link passHref href={"/about"}>
        <div className="rotateIn cursor-pointer w-12 h-12 h1 bg-blue-300 -mt-[50px] flex">
          <Image src={"/Logo.png"} width={50} height={40} />
        </div>
      </Link>

      {isLogin.login && (
        <div className="flex items-center gap-10 text-2xl h-12 sm:gap-[100px] md:gap-[150px] lg:gap-[200px] xl:gap-[250px]">
          <Link passHref href={"/contact"}>
            <span className="text-2xl cursor-pointer text-blue-300 ">
              <BsWhatsapp />
            </span>
          </Link>

          <Link href={"/profile"} passHref>
            <span className="text-2xl text-blue-300 ">
              <FaRegUser />
            </span>
          </Link>
        </div>
      )}

      {!isLogin.login && (
        <div className="flex items-center gap-10 text-2xl h-12 sm:gap-[100px] md:gap-[150px] lg:gap-[200px] xl:gap-[250px]">
          <Link passHref href={"/contact"}>
            <span className="text-2xl cursor-pointer text-blue-300 ">
              <BsWhatsapp />
            </span>
          </Link>
          <Link href={"/login"} passHref>
            <span className="text-2xl cursor-pointer text-blue-300 ">
              <FiLogIn />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Footer;
