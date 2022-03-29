import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { decodeToken } from "react-jwt";
const CardImages = ({
  image = "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

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
    <div>
      <div
        className="w-full h-full sm:w-[200px] sm:h-[200px] cursor-pointer"
        onClick={handleClick}
      >
        {/* <Image
          src={image}
          width={119}
          height={100}
          intr
          className="w-[118px] h-[118px] object-cover"
        /> */}
        <img
          src={image}
          alt=""
          className="w-[119px] h-[118px] sm:w-full sm:h-full object-cover"
        />
      </div>

      {click && (
        <div className="w-full h-full bg-black/70 flex flex-col gap-2 items-center justify-center  fixed top-0 left-0  bottom-0 z-20  sm:w-full sm:p-10 sm:h-full px-4 ">
          <div className=" max-w-max flex flex-col sm:flex sm:flex-row gap-2 sm:w-full sm:h-full   ">
            <img
              src={image}
              alt=""
              className="w-full  sm:max-w-auto sm:h-full object-cover   "
              onClick={handleClick}
            />

            <div className="flex ">
              <div
                className="w-[90%] bg-transparent  "
                onClick={handleClick}
              ></div>
              <span className="text-3xl text-white  flex px-2 justify-end  z-50 h-10 cursor-pointer   w-10 self-end ">
                <a
                  href="#"
                  download="https://images.pexels.com/photos/1737405/pexels-photo-1737405.jpeg"
                >
                  <FiDownload />
                </a>
              </span>
            </div>
            <div
              className="w-full h-full bg-transparent fixed top-0 right-14 -z-20 "
              onClick={handleClick}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImages;
