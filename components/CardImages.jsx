import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

const CardImages = ({
  image = "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="w-full h-full" onClick={handleClick}>
        {/* <Image
          src={image}
          width={119}
          height={100}
          intr
          className="w-[118px] h-[118px] object-cover"
        /> */}
        <img src={image} alt="" className="w-[118px] h-[118px] object-cover" />
      </div>

      {click && (
        <div className="w-full h-full bg-black/70 flex flex-col gap-2 items-end justify-center touch-none fixed top-0 left-0 bottom-0 z-20">
          <img src={image} alt="" className="w-full " />

          <span
            className="text-3xl text-white  flex px-6 justify-end  z-50"
            onClick={() => {
              alert("test");
            }}
          >
            <FiDownload />
          </span>
          <div
            className="w-full h-full bg-transparent fixed top-0 right-14 -z-20"
            onClick={handleClick}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CardImages;
